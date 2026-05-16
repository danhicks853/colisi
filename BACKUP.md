# Colisi Backup and Restore Procedure

Colisi is a 4-6 year solo project. The infrastructure documented here is what stands between Daniel and 4 years of lost work. **Read this whole file. Test the restore. Re-test quarterly.**

- **Source-of-truth:** this document and the locked decisions D-INFRA-bkp-1, D-INFRA-bkp-2, D-INFRA-art-3 in `.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md`.
- **Status:** Locked 2026-05-11 (Phase 2). Restore tested 2026-05-11. Next retest: 2026-08-11 (quarterly cadence per D-INFRA-bkp-2).

---

## 1. The three-tier strategy

| Tier | What | Cadence | Failure-mode covered | Daniel-side cost |
|---|---|---|---|---|
| 1 - Primary | GitHub remote at `https://github.com/danhicks853/colisi.git` | Every push | Local drive failure, machine theft, OS reinstall | $0 (free repo); $5/mo when LFS quota exceeded (~Phase 6) |
| 2 - Secondary | Google Drive cloud-sync of working directory | Continuous (Drive desktop client) | GitHub outage, GitHub account lockout, LFS quota lock-out preventing push | $0 (15GB free); $1.99/mo for 100GB if/when needed |
| 3 - Tertiary | Quarterly tarball to Google Drive separate folder | 4x per year (manual; automation deferred Phase 6+) | Cloud-sync silent drift, accidental ransomware/encryption of working dir, deep-history corruption | $0 (within Drive quota) |

**Notes (cross-referencing locked Phase 2 decisions):**

- **D-INFRA-art-1:** single repo + LFS for everything (NOT separate art-source repo). All binary assets, `.blend`, `.psd`, music project files (`.lmms`, `.rpp`, `.aup3`) go through LFS in this one repo. Migration to a separate `colisi-art-source` repo is preserved as a future option but not committed during Phase 2.
- **D-INFRA-art-2:** LFS quota upgrade is reactive (when ~80% of free tier hit — likely Phase 6). Not pre-paid. Trigger threshold: 800 MB storage or 800 MB/mo bandwidth.
- **D-INFRA-art-3:** quarterly tarball is manual. Automation script (cross-platform PowerShell wrapper) deferred to Phase 6+ when content scale justifies the investment.

---

## 2. Daily backup posture (what's already happening)

### 2.1 GitHub primary (every commit)

- Every `git commit` followed by `git push origin main` syncs the entire working tree (including LFS objects) to GitHub.
- LFS objects are stored on GitHub's LFS backend, separate from regular Git history (transparent to most git operations; only `git push` / `git pull` / `git clone` interact with the LFS backend directly).
- Recovery primitive: `git clone https://github.com/danhicks853/colisi.git && git lfs pull` restores the full working tree.
- **Single point of weakness:** if you forget to `git push` before bed, that day's work is local-only until tomorrow's push. This is what Tier 2 (Google Drive continuous sync) is for.

### 2.2 Google Drive cloud-sync (continuous)

- **Tool:** Google Drive desktop client (download from <https://www.google.com/drive/download/> if not installed).
- **Sync target:** working directory `D:\Projects\game` (folder-level sync, NOT whole drive).
- **First-time setup:** Install Drive client; Settings → Preferences → My Computer → Add folder → choose `D:\Projects\game`; verify sync icon appears in folder.
- **What this gets you:** real-time off-machine copy of every file, including uncommitted work-in-progress that Git doesn't yet know about.
- **What this does NOT get you:** deep versioning. Drive revision history is ~30 days, file-level not project-level. For deep history use Git + GitHub (Tier 1) or quarterly tarballs (Tier 3).
- **Anti-pattern:** Do NOT use Drive selective-sync inside `D:\Projects\game\.git\`. Sync the whole project folder OR exclude `.git/` entirely. Drive selective-sync inside `.git/` can corrupt repo state by mid-operation file uploads.
- **Drive quota:** 15 GB free baseline. Working directory size will grow over the project's lifetime; budget $1.99/mo for 100 GB if Drive quota approaches 80%.

### 2.3 Quarterly tarball (manual, every 3 months)

- **Cadence:** On the first nightly session of each calendar quarter (Jan / Apr / Jul / Oct). Add to monthly retro checklist as the trigger reminder.
- **Procedure (PowerShell):**

  ```powershell
  cd D:\Projects\game
  $stamp = Get-Date -Format "yyyy-MM-dd"
  $archive = "D:\Backup\colisi-$stamp.tar.gz"
  New-Item -ItemType Directory -Force -Path "D:\Backup" | Out-Null

  # Standard `git archive` does NOT include LFS content. Workaround:
  git lfs pull
  tar -czf $archive --exclude=.git --exclude=.godot --exclude=.import .
  Get-Item $archive | Select-Object Length, LastWriteTime

  # Upload to Google Drive web UI: drag $archive into the "Colisi-Backups" folder
  # OR use rclone (Phase 6+ automation)
  Start-Process "https://drive.google.com"
  ```

- **Retention:** keep last 4 quarterly tarballs (1 year of deep history). Delete older ones to control Drive quota usage.

---

## 3. Restore procedure (the test that matters)

The restore procedure below is what gets executed if Daniel's working machine dies and recovery is needed on a fresh machine. **It must be tested at least once per quarter** per D-INFRA-bkp-2. First test executed 2026-05-11 (see `.planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md`).

### 3.1 Prerequisites on the recovery machine

Reference `DEV-ENVIRONMENT.md` "Required tools" section for the canonical list. Minimal subset needed for repo recovery:

```powershell
# Install Git + Git LFS (Windows / PowerShell)
winget install --id Git.Git --exact --silent
winget install --id GitHub.GitLFS --exact --silent

# Optional: GitHub CLI (useful if repo flips to private later)
winget install --id GitHub.cli --exact --silent
```

Verify install:

```powershell
git --version       # expect 2.40+
git lfs version     # expect 3.x
```

### 3.2 Authenticate (if private repo path required)

- Current repo is **PUBLIC**, so no auth needed for `git clone` or `git lfs pull`.
- If repo flips to private in future: set up GitHub auth first (Personal Access Token via `git credential` helper, or `gh auth login`).

### 3.3 Clone from GitHub (Tier 1 recovery)

```powershell
$target = "D:\Projects\game-restored"   # or any other path with at least 10GB free
git clone https://github.com/danhicks853/colisi.git $target
cd $target
git lfs install     # one-time per machine
git lfs pull        # downloads all LFS binary content
```

Note the explicit `git lfs pull` step. This is **the most common silent-recovery-failure mode**: cloning a repo without `git lfs pull` leaves binary files as ~130-byte text pointer stubs. The game looks like everything is there until you try to open a `.png` and find it's a text file pointing to an undownloaded LFS object. Section 3.4 Check 3 catches this.

### 3.4 Verify restore integrity (3 checks - any failing means incomplete restore)

**Check 1: All committed files present.**

```powershell
git status     # must report "nothing to commit, working tree clean"
git log -1     # must show the most recent commit
```

**Check 2: LFS content is real, not pointers.** Pick a known binary (`lfs-test.png` from plan 02-03):

```powershell
Get-Item .planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png | Select-Object Length
# Expected: > 200 bytes (real PNG bytes; the test PNG is 242 B)
# FAIL: ~130 bytes = LFS pointer text length, meaning `git lfs pull` was not run
```

**Check 3: First bytes are PNG signature, not LFS pointer text:**

```powershell
$bytes = [System.IO.File]::ReadAllBytes('.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png')[0..7]
$hex = ($bytes | ForEach-Object { '{0:X2}' -f $_ }) -join ' '
Write-Host "First 8 bytes: $hex"
# Expected: '89 50 4E 47 0D 0A 1A 0A' (PNG signature)
# FAIL: '76 65 72 73 69 6F 6E 20' (= "version " text) means the file is still LFS pointer text -> `git lfs pull` was not run.
```

**Optional Check 4 (strong verification): bit-identical recovery via SHA256.**

```powershell
$origHash = (Get-FileHash D:\Projects\game\.planning\phases\02-infrastructure-repo-setup\verification\lfs-test.png -Algorithm SHA256).Hash
$restoredHash = (Get-FileHash "$target\.planning\phases\02-infrastructure-repo-setup\verification\lfs-test.png" -Algorithm SHA256).Hash
Write-Host "Match: $($origHash -eq $restoredHash)"
# Expected: True
```

### 3.5 Catch-up from Google Drive (Tier 2 - if any uncommitted local work)

If Daniel's last `git push` was hours before the recovery event, the Tier 1 restore has the LAST PUSHED state. Use Drive to recover any uncommitted local work:

1. Drive web UI: <https://drive.google.com>.
2. Navigate: My Computer → device name → `game` folder.
3. Download relevant uncommitted files (compare timestamps against Tier 1 restore to identify new/modified files).
4. Copy into restored clone at matching paths.
5. `git status` in the restored clone now shows the previously-uncommitted work as modified/new files — commit normally to make them part of Tier 1 history going forward.

### 3.6 Catch-up from quarterly tarball (Tier 3 - deep-history recovery only)

Only use this if Git history is suspect (e.g., force-pushed by a hostile actor, or subtle silent corruption pushed to all of Tier 1 + Tier 2):

1. Download most recent tarball from Drive (`colisi-YYYY-MM-DD.tar.gz` in `Colisi-Backups` folder).
2. Extract:

   ```powershell
   $tarball = "D:\Downloads\colisi-2026-08-11.tar.gz"
   $extract = "D:\TempRestore\colisi-quarterly"
   New-Item -ItemType Directory -Force -Path $extract
   tar -xzf $tarball -C $extract
   ```

3. Diff against GitHub-restored copy (Section 3.3 output) to find divergence point.
4. Apply commits manually OR `git reset --hard <pre-divergence-commit>` after careful review.

---

## 4. Failure modes this strategy DOES NOT cover

Honest gaps (per `PHILOSOPHY.md` honesty-over-optimism):

- **Catastrophic event hitting Daniel's local machine AND GitHub AND Google Drive AND the quarterly tarball simultaneously.** Mitigation: external drive snapshot once a year stored at a different physical location (parents' house, safety deposit box). Phase 2 does NOT scope this; documented as known gap. Revisit at Phase 6 or after first major content milestone.
- **Ransomware on Daniel's machine that ALSO encrypts the Drive-synced folder before detection.** Mitigation: GitHub history is untouched (ransomware can't push without auth) and quarterly tarballs are old-and-frozen. Recover from Tier 1 + Tier 3.
- **Subtle data corruption pushed to all three tiers** (corruption introduced incrementally over weeks, present in all backups). Mitigation: GitHub commit history allows `git revert` to a known-good point; quarterly tarballs provide deep-history anchor. Acknowledged residual risk is non-zero.
- **GitHub account compromise.** Mitigation: 2FA on the account (Daniel's GitHub already has this); recovery email + recovery codes stored separately from main credential store.
- **LFS quota lockout silently preventing pushes during active work session.** Mitigation: D-INFRA-art-2 quota-watch discipline; budget Data Pack purchase before lockout. Quota state monitored via `git lfs ls-files --size` and GitHub Settings → Billing → Storage.

---

## 5. Quarterly retest cadence

Per D-INFRA-bkp-2:

- **Schedule:** first nightly session of each calendar quarter (Jan / Apr / Jul / Oct).
- **Test execution:** full Section 3 procedure on `D:\TestRestore\colisi-QYYYY\` path; delete after test passes (or keep latest as ongoing restore artifact for spot-checks).
- **Log:** append outcome (date, time-taken, anomalies) to `.planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md`. New entry per test (append, do not overwrite — historical record).
- **If test fails:** HIGH priority blocker — Phase 2 backup infrastructure is broken. Fix before any other work continues. Add to `.planning/STATE.md` blockers list immediately. Do NOT defer.
- **Cadence reminder integration:** add quarterly-retest-due check to monthly retro template (so the trigger surfaces in the appropriate month's retro even if calendar quarter boundary is missed).

---

## 6. Update history

| Date | Change | Reason |
|---|---|---|
| 2026-05-11 | Initial creation per INFRA-04 + D-INFRA-bkp-1..2 + D-INFRA-art-3 | Phase 2 |

---

- **Last updated:** 2026-05-11
- **Source decisions:** D-INFRA-bkp-1, D-INFRA-bkp-2, D-INFRA-art-3 (`.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md`)
- **Amendment process:** `PHILOSOPHY.md` Amendment Process; log changes in `.planning/SCOPE.md` if architectural; otherwise update the Update History table above.
