---
phase: 02-infrastructure-repo-setup
plan: 04
type: execute
wave: 3
depends_on:
  - 02-infrastructure-repo-setup/01
  - 02-infrastructure-repo-setup/03
files_modified:
  - BACKUP.md
  - .planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md
autonomous: false
requirements:
  - INFRA-04

must_haves:
  truths:
    - "BACKUP.md exists at repo root documenting the 3-tier backup strategy per D-INFRA-bkp-1, D-INFRA-bkp-2, D-INFRA-art-3 (Tier 1 GitHub primary; Tier 2 Google Drive cloud-sync; Tier 3 quarterly tarball)"
    - "BACKUP.md contains exact PowerShell + Git Bash restore procedure (fresh-clone path) reproducible by Daniel or any future contributor"
    - "BACKUP.md documents the LFS-specific restore steps (git lfs pull) explicitly because forgetting them is the #1 silent-recovery-failure mode"
    - "An actual restore test was performed on a different folder path (e.g., D:\\TestRestore\\colisi\\) per INFRA-04 success criterion 'restore tested at least once'"
    - "Restore-test-log.md captures the test outcome with command outputs, timing, and the result of the LFS verification check (lfs-test.png from plan 02-03 must be a real PNG, not a pointer, after `git lfs pull`)"
    - "Quarterly retest cadence is documented per D-INFRA-bkp-2 (added to .planning/STATE.md or referenced as a quarterly-review item)"
  artifacts:
    - path: "BACKUP.md"
      provides: "Public-facing backup strategy + restore procedure document"
      contains: "git lfs pull"
    - path: ".planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md"
      provides: "Evidence that restore procedure was actually executed and worked"
      contains: "lfs-test.png"
  key_links:
    - from: "BACKUP.md"
      to: "DEV-ENVIRONMENT.md backup-strategy sketch (replaces and supersedes)"
      via: "Cross-reference and replace the sketch with link to BACKUP.md"
      pattern: "BACKUP\\.md"
    - from: "restore-test-log.md"
      to: "VERIFICATION-LOG.md from plan 02-03"
      via: "Sibling file in verification/ subdirectory; LFS-test PNG provides the artifact used for restore verification"
      pattern: "lfs-test\\.png"
---

<objective>
Document the three-tier backup strategy (D-INFRA-bkp-1 Google Drive + D-INFRA-art-3 quarterly tarball + GitHub primary) in BACKUP.md and EXECUTE an actual restore test on a different folder path per INFRA-04 success criterion 4 ("restore tested at least once by simulating a fresh clone + restore on a different machine path"). Log the test outcomes to a verification log.

Purpose: The infrastructure being verified here is the work itself. 4-6 years of solo development on Colisi cannot be at risk of vanishing because GitHub had an outage, an LFS quota lock-out happened, or Daniel's working machine drive failed. The restore procedure must be DOCUMENTED, TESTED, and PROVEN to recover both code AND binary LFS-tracked assets. INFRA-04 explicitly requires the test, not just the procedure doc.

This plan has a `checkpoint:human-verify` task because the restore test on a different folder path requires Daniel to confirm the LFS quota has acceptable headroom and that the test directory placement is acceptable. Claude executes the steps; Daniel verifies the outcome.

Output: 1 BACKUP.md at repo root + 1 restore-test-log.md in verification/.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/REQUIREMENTS.md
@.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md
@DEV-ENVIRONMENT.md
@.planning/phases/02-infrastructure-repo-setup/02-01-repo-hardening-files-PLAN.md
@.planning/phases/02-infrastructure-repo-setup/02-03-lfs-verification-and-ci-PLAN.md

<interfaces>
From plan 02-01 (Wave 1; committed): `.gitattributes` configures LFS for `.png`. `.gitignore` excludes `.godot/`.
From plan 02-03 (Wave 2; committed): `.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png` exists committed as LFS pointer. This plan uses lfs-test.png as the restore-verification artifact (verify it becomes real PNG bytes after `git lfs pull` on the fresh-clone path).

Note: this plan was originally targeted for Wave 2 but must run after plan 02-03 because it depends on lfs-test.png existing. Frontmatter `wave: 3` reflects this.
</interfaces>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create BACKUP.md (3-tier backup procedure + restore steps)</name>
  <files>BACKUP.md</files>
  <read_first>
    - .planning/REQUIREMENTS.md INFRA-04 - "Backup/redundancy strategy is implemented and tested with a documented restore procedure (primary: GitHub; secondary: local cloud sync of working directory; restore tested at least once)"
    - .planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md Backup Strategy section - D-INFRA-bkp-1 (Google Drive cloud-sync target), D-INFRA-bkp-2 (Phase 2 + quarterly retest cadence), D-INFRA-art-3 (quarterly tarball; manual; automation deferred Phase 6+)
    - DEV-ENVIRONMENT.md Backup strategy section (existing brief sketch ~lines 187-198; will be replaced by link to BACKUP.md)
  </read_first>
  <action>
    Create `BACKUP.md` at repo root (D:\Projects\game\BACKUP.md). Procedural/technical document; Claude-authored is appropriate per AI policy.

    Write the following sections in order:

    **H1: `# Colisi Backup and Restore Procedure`**

    **Intro paragraph:** "Colisi is a 4-6 year solo project. The infrastructure documented here is what stands between Daniel and 4 years of lost work. **Read this whole file. Test the restore. Re-test quarterly.**"

    **Authority + status:**
    - "Source-of-truth: this document and the locked decisions D-INFRA-bkp-1, D-INFRA-bkp-2, D-INFRA-art-3 in `.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md`."
    - "Status: Locked 2026-05-11 (Phase 2). Restore tested 2026-05-11. Next retest: 2026-08-11 (quarterly cadence per D-INFRA-bkp-2)."

    **H2: ## 1. The three-tier strategy**

    Document the tier table:

    | Tier | What | Cadence | Failure-mode covered | Daniel-side cost |
    |---|---|---|---|---|
    | 1 - Primary | GitHub remote at `https://github.com/danhicks853/colisi.git` | Every push | Local drive failure, machine theft, OS reinstall | $0 (free repo); $5/mo when LFS quota exceeded (~Phase 6) |
    | 2 - Secondary | Google Drive cloud-sync of working directory | Continuous (Drive desktop client) | GitHub outage, GitHub account lockout, LFS quota lock-out preventing push | $0 (15GB free); $1.99/mo for 100GB if/when needed |
    | 3 - Tertiary | Quarterly tarball to Google Drive separate folder | 4x per year (manual; automation deferred Phase 6+) | Cloud-sync silent drift, accidental ransomware/encryption of working dir, deep-history corruption | $0 (within Drive quota) |

    Add notes:
    - D-INFRA-art-1: single repo + LFS for everything (NOT separate art-source repo). All binary assets, .blend, .psd, music project files go through LFS in this one repo.
    - D-INFRA-art-2: LFS quota upgrade is reactive (when 80% of free tier hit). Not pre-paid.
    - D-INFRA-art-3: quarterly tarball is manual. Automation script deferred Phase 6+.

    **H2: ## 2. Daily backup posture (what's already happening)**

    Sub-sections:

    ### 2.1 GitHub primary (every commit)
    - Every `git commit` followed by `git push origin main` syncs the entire working tree (including LFS objects) to GitHub.
    - LFS objects are stored on GitHub's LFS backend, separate from regular Git history.
    - Recovery: `git clone https://github.com/danhicks853/colisi.git && git lfs pull` restores full working tree.
    - Single point of weakness: if you forget to `git push` before bed, that day's work is local-only until tomorrow's push.

    ### 2.2 Google Drive cloud-sync (continuous)
    - Google Drive desktop client (download from https://www.google.com/drive/download/ if not installed).
    - Sync target: working directory `D:\Projects\game` (folder-level sync, NOT whole drive).
    - First-time setup: Install Drive client; Settings -> Preferences -> My Computer -> Add folder -> choose `D:\Projects\game`; verify sync icon appears.
    - What this gets you: real-time off-machine copy of every file, including uncommitted work-in-progress.
    - What this does NOT get you: deep versioning (Drive revision history is ~30 days, file-level not project-level). For deep history use Git + GitHub.
    - Anti-pattern: Do NOT sync `D:\Projects\game\.git\` selectively. Sync the whole project folder OR exclude `.git/` entirely. Drive selective-sync inside `.git/` can corrupt repo state.

    ### 2.3 Quarterly tarball (manual, every 3 months)
    - On the first nightly session of each quarter (Jan/Apr/Jul/Oct).
    - Procedure (PowerShell):
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
      Start-Process "$archive"
      ```
    - Retention: keep last 4 quarterly tarballs (1 year). Delete older ones to control quota.

    **H2: ## 3. Restore procedure (the test that matters)**

    State plainly: "The restore procedure below is what gets executed if Daniel's working machine dies and you need to recover on a fresh machine. **It must be tested at least once per quarter** per D-INFRA-bkp-2. First test executed 2026-05-11 (see `.planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md`)."

    ### 3.1 Prerequisites on the recovery machine
    Reference DEV-ENVIRONMENT.md required-tools list. Tools needed:
    - Git (`winget install --id Git.Git --exact --silent` on Windows)
    - Git LFS (`winget install --id GitHub.GitLFS --exact --silent`)
    - Optional: GitHub CLI (`winget install --id GitHub.cli --exact --silent`)

    Verify install:
    ```powershell
    git --version
    git lfs version
    ```

    ### 3.2 Authenticate (if private repo path required)
    - Current repo is PUBLIC, so no auth needed for pull.
    - If repo flips to private in future, set up GitHub auth first (PAT or `gh auth login`).

    ### 3.3 Clone from GitHub (primary tier 1 recovery)
    ```powershell
    $target = "D:\Projects\game-restored"   # or any other path with at least 10GB free
    git clone https://github.com/danhicks853/colisi.git $target
    cd $target
    git lfs install     # one-time per machine
    git lfs pull         # downloads all LFS binary content
    ```
    Note the explicit `git lfs pull` step. This is **the most common silent-recovery-failure mode**: cloning a repo without `git lfs pull` leaves binary files as text pointer stubs (~130 bytes each). The game looks like everything is there until you try to open a `.png` and find it's a text file pointing to an undownloaded LFS object.

    ### 3.4 Verify restore integrity (3 checks - any failing means incomplete restore)

    Check 1: All committed files present.
    ```powershell
    git status     # must report "nothing to commit, working tree clean"
    git log -1     # must show the most recent commit
    ```

    Check 2: LFS content is real, not pointers. Pick a known binary (lfs-test.png from plan 02-03):
    ```powershell
    Get-Item .planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png | Select-Object Length
    # Expected: > 1KB (real PNG bytes), NOT ~130 bytes (LFS pointer text length)
    ```

    Check 3: First bytes are PNG signature, not LFS pointer text:
    ```powershell
    $bytes = [System.IO.File]::ReadAllBytes('.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png')[0..7]
    $hex = ($bytes | ForEach-Object { '{0:X2}' -f $_ }) -join ' '
    Write-Host "First 8 bytes: $hex"
    # Expected: '89 50 4E 47 0D 0A 1A 0A' (PNG signature)
    # If output starts '76 65 72 73 69 6F 6E 20' (= "version " text), the file is still LFS pointer text -> git lfs pull was not run.
    ```

    ### 3.5 Catch-up from Google Drive (tier 2 - if any uncommitted local work)
    If Daniel's last `git push` was hours before the recovery event, the tier-1 restore has the LAST PUSHED state. Use Drive to recover any uncommitted local work:
    1. Drive web UI: https://drive.google.com.
    2. Navigate: My Computer -> device name -> `game` folder.
    3. Download relevant uncommitted files.
    4. Copy into restored clone at matching paths.

    ### 3.6 Catch-up from quarterly tarball (tier 3 - deep-history recovery only)
    Only if Git history is suspect (e.g., force-pushed by hostile actor):
    1. Download most recent tarball from Drive (`colisi-YYYY-MM-DD.tar.gz`).
    2. Extract:
       ```powershell
       $tarball = "D:\Downloads\colisi-2026-08-11.tar.gz"
       $extract = "D:\TempRestore\colisi-quarterly"
       New-Item -ItemType Directory -Force -Path $extract
       tar -xzf $tarball -C $extract
       ```
    3. Diff against GitHub-restored copy to find divergence point.
    4. Apply commits manually OR `git reset --hard <pre-divergence-commit>` after careful review.

    **H2: ## 4. Failure modes this strategy DOES NOT cover**

    Honest gaps:
    - Catastrophic event hitting Daniel's local AND GitHub AND Google AND quarterly archive simultaneously. Mitigation: external drive snapshot once-a-year stored at different physical location (parents' house, safety deposit box). Phase 2 does NOT scope this; documented as known gap.
    - Ransomware on Daniel's machine that ALSO encrypts Drive-synced folder before detection. Mitigation: GitHub history is untouched (ransomware can't push without auth) and quarterly tarballs are old-and-frozen. Recover from tier 1.
    - Subtle data corruption pushed to all three tiers. Mitigation: GitHub commit history allows `git revert` to a known-good point.

    **H2: ## 5. Quarterly retest cadence**

    Per D-INFRA-bkp-2:
    - Schedule: first nightly session of each calendar quarter (Jan / Apr / Jul / Oct).
    - Test execution: full Section 3 procedure on `D:\TestRestore\colisi-QYYYY\` path; delete after test passes.
    - Log: append outcome (date, time-taken, anomalies) to `.planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md`. New entry per test.
    - If test fails: HIGH priority blocker - Phase 2 backup infrastructure is broken. Fix before any other work continues.

    **H2: ## 6. Update history**

    | Date | Change | Reason |
    |---|---|---|
    | 2026-05-11 | Initial creation per INFRA-04 + D-INFRA-bkp-1..2 + D-INFRA-art-3 | Phase 2 |

    **Footer:**
    - "Last updated: 2026-05-11"
    - "Source decisions: D-INFRA-bkp-1, D-INFRA-bkp-2, D-INFRA-art-3 (02-CONTEXT.md)"
    - "Amendment process: PHILOSOPHY.md Amendment Process; log in SCOPE.md."

    Target length: 250-400 lines. Use Write tool.
  </action>
  <verify>
    <automated>cd D:\Projects\game; $a = Get-Content BACKUP.md -Raw; ($a -match '## 1\. The three-tier strategy') -and ($a -match '## 3\. Restore procedure') -and ($a -match 'git lfs pull') -and ($a -match 'Google Drive') -and ($a -match 'quarterly') -and ($a -match 'D-INFRA-bkp-1') -and ($a -match 'D-INFRA-bkp-2') -and ($a -match 'D-INFRA-art-3') -and ($a -match 'lfs-test\.png') -and ((Get-Content BACKUP.md | Measure-Object -Line).Lines -ge 100)</automated>
  </verify>
  <acceptance_criteria>
    - File `BACKUP.md` exists at repo root (`Test-Path D:\Projects\game\BACKUP.md` returns True)
    - File contains H2 sections: `## 1. The three-tier strategy`, `## 2. Daily backup posture`, `## 3. Restore procedure`, `## 4. Failure modes`, `## 5. Quarterly retest cadence`, `## 6. Update history` (6+ H2 sections)
    - File contains the literal phrase `git lfs pull` (load-bearing restore step)
    - File contains the literal phrase `Google Drive` (D-INFRA-bkp-1)
    - File contains the literal phrase `quarterly` (D-INFRA-bkp-2 + D-INFRA-art-3 cadence)
    - File contains decision-ID references: `D-INFRA-bkp-1`, `D-INFRA-bkp-2`, `D-INFRA-art-3`
    - File references `lfs-test.png` (the plan 02-03 artifact used for restore-test integrity check)
    - File line count >= 100 lines
    - File uses LF line endings
  </acceptance_criteria>
  <done>BACKUP.md created at repo root with 6 H2 sections covering 3-tier strategy (D-INFRA-bkp-1/2 + D-INFRA-art-3), daily posture, restore procedure with PowerShell commands, integrity verification using plan 02-03's lfs-test.png, failure modes not covered, and quarterly retest cadence.</done>
</task>

<task type="checkpoint:human-verify" gate="blocking">
  <name>Task 2: Execute restore test on different folder path + log outcome</name>
  <files>.planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md</files>
  <read_first>
    - BACKUP.md (created in Task 1) - source-of-truth for the restore procedure to be executed
    - .planning/REQUIREMENTS.md INFRA-04 - test-required success criterion: "restore tested at least once by simulating a fresh clone + restore on a different machine path"
    - .planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png (created plan 02-03) - the LFS test artifact whose post-pull byte content verifies tier-1 restore correctness
    - .planning/slice-debt.md - format for adding a Drive-client gap entry if Drive client not yet installed
  </read_first>
  <what-built>
    BACKUP.md (Task 1) documents the restore procedure. INFRA-04 requires the procedure be TESTED, not just documented. This checkpoint asks Daniel to confirm Claude can execute the restore test on his machine, then verifies the outcome.

    What Claude will execute (with Daniel's approval):
    1. Create test path `D:\TestRestore\colisi-2026-05-11\` (or alternative Daniel-specified path; >= 1GB free required).
    2. Run `git clone` + `git lfs install` + `git lfs pull` per BACKUP.md Section 3.3.
    3. Run all 3 integrity checks from BACKUP.md Section 3.4 against the restored copy.
    4. Capture all command outputs.
    5. Compare lfs-test.png in restored copy against original to confirm bit-identical recovery.
    6. Log entire outcome to `.planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md`.
    7. Optionally clean up the test path after success.

    Side effects: ~1-10MB disk used at test path; small network bandwidth; few hundred milliseconds of LFS bandwidth quota (negligible vs 1GB/mo free tier).
    Estimated time: 3-5 minutes total.
  </what-built>
  <action>
    On user approval ("approved" or "approved with path: <alternate>"):

    Step 1: Execute the restore test:
    ```powershell
    $target = "D:\TestRestore\colisi-2026-05-11"   # or user-specified alternative
    New-Item -ItemType Directory -Force -Path (Split-Path $target -Parent)
    git clone https://github.com/danhicks853/colisi.git $target
    cd $target
    git lfs install
    git lfs pull
    ```

    Step 2: Run 3 integrity checks and capture outputs:

    Check 1 - working tree clean:
    ```powershell
    cd $target
    git status   # capture output
    git log -1   # capture output
    ```

    Check 2 - LFS file size:
    ```powershell
    cd $target
    $lfsFile = Get-Item .planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png
    Write-Host "lfs-test.png size: $($lfsFile.Length) bytes"
    # PASS if > 200 bytes; FAIL if ~130 bytes (pointer text)
    ```

    Check 3 - PNG signature:
    ```powershell
    cd $target
    $bytes = [System.IO.File]::ReadAllBytes('.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png')[0..7]
    $hex = ($bytes | ForEach-Object { '{0:X2}' -f $_ }) -join ' '
    Write-Host "First 8 bytes: $hex"
    # PASS if hex starts '89 50 4E 47' (PNG signature)
    # FAIL if hex starts '76 65 72 73' (= "vers" of "version ..." pointer text)
    ```

    Step 3: Compare bit-identical recovery (optional but strong verification):
    ```powershell
    $origHash = (Get-FileHash D:\Projects\game\.planning\phases\02-infrastructure-repo-setup\verification\lfs-test.png -Algorithm SHA256).Hash
    $restoredHash = (Get-FileHash "$target\.planning\phases\02-infrastructure-repo-setup\verification\lfs-test.png" -Algorithm SHA256).Hash
    Write-Host "Original SHA256:  $origHash"
    Write-Host "Restored SHA256:  $restoredHash"
    Write-Host "Match: $($origHash -eq $restoredHash)"
    ```

    Step 4: Write `.planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md` documenting:
    - Test Date (2026-05-11 or actual execution date)
    - Test Path used
    - Procedure Followed (Sections 3.1 through 3.6 of BACKUP.md - reference, not full repeat)
    - Outcomes (each of 3 integrity checks: PASS or FAIL with captured output verbatim)
    - SHA256 match result
    - Time elapsed for clone + lfs pull (capture from PowerShell `Measure-Command` if convenient)
    - Anomalies (any LFS quota warnings, slow downloads, network timeouts - or "None")
    - Drive-client status (installed and syncing D:\Projects\game per BACKUP.md Section 2.2? If no, log as gap and create slice-debt entry)
    - Optional cleanup outcome (was test path deleted? Or left as evidence?)

    Step 5: Commit the log:
    ```powershell
    cd D:\Projects\game
    git add BACKUP.md .planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md
    git commit -m "test(infra): document backup strategy + execute first restore test on D:\TestRestore (INFRA-04)"
    git push origin main
    ```

    If Drive client is not installed: add an entry to `.planning/slice-debt.md` describing:
    - Shortcut taken: "Phase 2 closed without verifying tier-2 (Google Drive cloud-sync) end-to-end"
    - Reason: "Drive desktop client not yet installed on Daniel's machine 2026-05-11"
    - Payoff strategy: "Install Drive client during next nightly session; re-execute Section 3.5 portion of the restore test; update restore-test-log.md with tier-2 outcome"
    - Owner / Phase: Daniel / Phase 2 carry-forward
    - Deadline: within next 2 weeks
  </action>
  <how-to-verify>
    Daniel review steps:
    1. Confirm test path `D:\TestRestore\colisi-2026-05-11\` is acceptable (or specify alternative).
    2. Confirm Google Drive desktop client is installed and configured to sync `D:\Projects\game` (if not, sub-blocker - proceed with tiers 1+3 testing only and document Drive-client gap as slice-debt).
    3. Approve restore-test execution by typing "approved" (Claude executes Steps 1-5 above) OR "approved with path: <alt>" (Claude uses alt path instead of default `D:\TestRestore\colisi-2026-05-11\`) OR "skip and document gap" (Claude logs to slice-debt.md as Phase 2 carry-forward; plan completes with carry-forward annotation).
    4. After execution, verify the resulting `restore-test-log.md`:
       - Open `D:\Projects\game\.planning\phases\02-infrastructure-repo-setup\verification\restore-test-log.md`
       - Confirm sections Test Date / Test Path / Procedure Followed / Outcomes / Anomalies all populated.
       - Confirm Outcomes lists PASS for each of 3 integrity checks (or PASS-with-caveat if tier-2 skipped).
       - Confirm lfs-test.png size in restored copy is > 200 bytes (real PNG, not pointer).
       - Confirm SHA256 hashes match (bit-identical recovery).
    5. Approve commit by responding with:
       - "log committed" - Claude commits and pushes; plan done.
       - "fix <issue>" - describe; Claude addresses and re-tests.
       - "drive client not installed; gap acknowledged" - gap logged to slice-debt.md; plan completes with carry-forward annotation.

    Restart-or-skip allowed: procedural test, not creative work. If timing/environment issues block today, defer to next session without affecting other Phase 2 plans.
  </how-to-verify>
  <verify>
    <automated>cd D:\Projects\game; $log = Get-Content .planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md -Raw; (Test-Path BACKUP.md) -and (Test-Path .planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md) -and ($log -match 'PASS') -and ($log -match 'lfs-test\.png') -and ($log -match 'Test Path')</automated>
  </verify>
  <acceptance_criteria>
    - BACKUP.md exists at repo root (Task 1 deliverable; restored-from-Wave-3 state)
    - `.planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md` exists
    - restore-test-log.md contains section labels: `Test Date`, `Test Path`, `Procedure Followed`, `Outcomes`, `Anomalies`
    - restore-test-log.md contains the literal phrase `PASS` at least 3 times (one per integrity check)
    - restore-test-log.md contains the actual SHA256 hashes from origin and restored copy of lfs-test.png
    - restore-test-log.md mentions Drive-client status (either confirmed syncing OR gap documented with slice-debt.md reference)
    - If Drive-client gap exists: `.planning/slice-debt.md` has a new entry referencing "Phase 2 tier-2 verification deferred; Drive client install pending"
    - At least 1 new commit in `git log` matching message pattern `test(infra)` with both BACKUP.md and restore-test-log.md staged together
    - `git push origin main` succeeded after the commit (`git status -uno` shows "Your branch is up to date with 'origin/main'")
  </acceptance_criteria>
  <resume-signal>Two-stage resume signal (phrasings standardized with how-to-verify section per checker Issue 5):

**Stage 1 - Authorize test execution.** Type ONE of:
- "approved" - authorize Claude to execute the restore test on `D:\TestRestore\colisi-2026-05-11\`
- "approved with path: <alternative-path>" - specify a different test path
- "skip and document gap" - defer the test and log it as a Phase 2 carry-forward (plan completes with carry-forward annotation)

**Stage 2 - After Claude executes Steps 1-5 and writes restore-test-log.md, approve commit.** Type ONE of (matching how-to-verify section "Approve commit by responding with"):
- "log committed" - Claude commits BACKUP.md + restore-test-log.md and pushes; plan done.
- "fix <issue>" - describe; Claude addresses and re-tests.
- "drive client not installed; gap acknowledged" - gap logged to slice-debt.md; plan completes with carry-forward annotation.
</resume-signal>
  <done>Restore test executed on different folder path; 3 integrity checks logged as PASS (or PASS-with-caveat); SHA256-confirmed bit-identical lfs-test.png recovery; restore-test-log.md captures all evidence; BACKUP.md + log committed and pushed; any Drive-client gap logged to slice-debt.md.</done>
</task>

</tasks>

<verification>
After both tasks complete:

1. Run `Test-Path D:\Projects\game\BACKUP.md` and confirm True.
2. Run `Test-Path D:\Projects\game\.planning\phases\02-infrastructure-repo-setup\verification\restore-test-log.md` and confirm True.
3. Open restore-test-log.md and confirm all required sections present with PASS or PASS-with-caveat outcomes.
4. Run `git status` and confirm clean working tree (both files committed).
5. Run `git log --oneline -5` and confirm at least 1 new test(infra) commit from this plan.

If Drive client was not installed and gap was documented:
- Confirm `.planning/slice-debt.md` has a new entry referencing the Drive-client setup task with payoff strategy "install during next nightly session; rerun tier-2 portion of restore test"
- HEALTH-02 slice-debt log discipline honored.
</verification>

<success_criteria>
- BACKUP.md exists with 6+ H2 sections covering 3-tier strategy + daily posture + restore procedure with PowerShell commands + integrity checks using plan 02-03's lfs-test.png + failure modes + quarterly retest cadence
- Restore test executed on `D:\TestRestore\colisi-2026-05-11\` (or Daniel-specified path) with all 3 integrity checks PASS or PASS-with-caveat
- restore-test-log.md captures Test Date / Test Path / Procedure / Outcomes / SHA256 match / Anomalies
- LFS-pull verified: lfs-test.png in restored copy is real PNG bytes (PNG signature first 8 bytes; > 200 bytes total)
- If Drive client missing: slice-debt.md entry filed
- INFRA-04 fully satisfied (procedure documented AND tested)
- BACKUP.md + restore-test-log.md committed and pushed to GitHub
</success_criteria>

<output>
After completion, create `.planning/phases/02-infrastructure-repo-setup/02-04-backup-and-restore-test-SUMMARY.md`:
- What was built (BACKUP.md + restore-test-log.md; commit SHAs)
- Requirements satisfied (INFRA-04 procedure + test complete)
- Decisions referenced (D-INFRA-bkp-1 Google Drive; D-INFRA-bkp-2 quarterly cadence; D-INFRA-art-3 quarterly tarball manual)
- Test outcome summary (3 integrity checks results; SHA256 match; any anomalies; LFS bandwidth used)
- Open items (Drive client installation if it was a gap; next quarterly retest date 2026-08-11)
- Downstream consumer (Phase 3+: any future recovery event uses BACKUP.md Section 3; quarterly retest becomes Daniel's discipline)
</output>
