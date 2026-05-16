# Restore Test Log — Phase 2 Infrastructure

> **Purpose:** Append-only log of restore-test executions per BACKUP.md Section 5 (quarterly retest cadence) and INFRA-04 success criterion ("restore tested at least once by simulating a fresh clone + restore on a different machine path"). Each test = new H2 section, append at top (most-recent first).

> **Source procedure:** [`BACKUP.md`](../../../../BACKUP.md) Section 3 (Restore procedure).
>
> **Sibling verification log:** [`VERIFICATION-LOG.md`](VERIFICATION-LOG.md) (LFS routing + .gitignore semantics + CI scaffold — plan 02-03).

---

## 2026-05-16 — Initial restore test (Phase 2 plan 02-04)

**Test Date:** 2026-05-16 (started 19:05:41Z, finished 19:05:44Z UTC; ~3 sec wall-clock for clone + LFS pull combined)
**Test Path:** `D:\TestRestore\colisi-2026-05-11\` (Daniel-approved default per Stage 1 resume signal; path retained post-test as on-disk restore artifact for spot-checks per BACKUP.md Section 5)
**Source repo:** `https://github.com/danhicks853/colisi.git`
**HEAD at clone time:** `02e1a0c4` (`docs(02-03): complete lfs-verification-and-ci plan`)
**Tester:** Claude Code (GSD execute-plan agent) under Daniel approval
**Outcome:** **ALL CHECKS PASS — restore procedure verified end-to-end. One anomaly logged + 1 Phase 2 carry-forward.**

### Procedure Followed

Per BACKUP.md Section 3.1 → 3.3 → 3.4 (Sections 3.5 + 3.6 deferred — see Tier 2 / Tier 3 notes below):

- Section 3.1 — Prerequisites (verified pre-test): Git 2.52.0, Git LFS 3.7.1 already installed globally per DEV-ENVIRONMENT.md.
- Section 3.2 — Authenticate: not applicable (repo is PUBLIC).
- Section 3.3 — Clone from GitHub:
  ```powershell
  $target = "D:\TestRestore\colisi-2026-05-11"
  New-Item -ItemType Directory -Force -Path (Split-Path $target -Parent) | Out-Null
  git clone https://github.com/danhicks853/colisi.git $target
  cd $target
  git lfs install
  git lfs pull
  ```
- Section 3.4 — Verify restore integrity (3 mandatory checks + 1 optional bit-identical SHA256 check).

Full runner script committed at `.planning/phases/02-infrastructure-repo-setup/verification/_restore-test-runner.ps1` for re-execution at quarterly retest.

### Timing

| Step | Elapsed |
|---|---|
| `git clone` (with default LFS-aware filter) | **2.29 sec** |
| `git lfs install` (one-time hook setup) | **0.26 sec** |
| `git lfs pull` (fetch all LFS objects) | **0.31 sec** |
| **Total clone + LFS materialization** | **~2.86 sec** |
| 4 integrity checks (status + log + size + hex + SHA256) | <1 sec |
| **End-to-end restore + verification** | **~3 sec wall-clock** |

Negligible — the project is tiny at this stage. Quarterly retest cadence will track this metric as the project grows; expect this number to climb to minutes-to-tens-of-minutes range by Phase 6 (slice content production) when binary asset volume scales.

### Outcomes

**Check 1 (`git status` + `git log -1` — all committed files present):** **PASS**

Captured output verbatim:

```
--- git status ---
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

--- git log -1 ---
commit 02e1a0c45cbd48825e2b04694db55a29b6577da6
Author: Dan <157068051+danhicks853@users.noreply.github.com>
Date:   Sat May 16 18:55:57 2026 -0400

    docs(02-03): complete lfs-verification-and-ci plan
    ...
```

Working tree clean. HEAD matches `origin/main` exactly. No uncommitted modifications, no untracked files (clean clone state).

**Check 2 (lfs-test.png file size — confirms LFS object materialized, not pointer text):** **PASS**

```
lfs-test.png size: 242 bytes
CHECK 2: PASS (size > 200 bytes — real PNG bytes)
```

The plan 02-03 canonical LFS test artifact resolved to 242 bytes (its real binary size, matching origin) — confirms `git lfs pull` correctly materialized the LFS object. Had `git lfs pull` failed silently, this would have been ~130 bytes (LFS pointer text length) and Check 3 would have caught it independently.

**Check 3 (PNG signature first 8 bytes — confirms file is real PNG, not text):** **PASS**

```
First 8 bytes: 89 50 4E 47 0D 0A 1A 0A
CHECK 3: PASS (matches PNG signature 89 50 4E 47 0D 0A 1A 0A)
```

Exact match to the canonical PNG magic bytes (`\x89PNG\r\n\x1a\n`). This is the strongest single integrity check — the file is not just sized like a PNG, it IS a PNG.

**Check 4 (SHA256 bit-identical comparison — origin vs restored):** **PASS**

```
Original SHA256:  E06F021364CED8EF5152351815D6EC43C4721AF8DDE29C9AC9947314809D5500
Restored SHA256:  E06F021364CED8EF5152351815D6EC43C4721AF8DDE29C9AC9947314809D5500
CHECK 4: PASS (bit-identical recovery)
```

Hashes match exactly. Restored lfs-test.png is bit-for-bit identical to the origin copy. This is the strongest possible recovery proof (and confirms the LFS object stored in GitHub's LFS backend round-trips through the LFS protocol without corruption).

### Anomalies

**Anomaly A: `sterling-rough-map.png` clone-time warning — "should have been a pointer, but wasn't"**

The `git clone` step emitted this warning to stderr (captured verbatim):

```
Encountered 1 file that should have been a pointer, but wasn't:
	.planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/sterling-rough-map.png
```

**Root cause investigation (performed during test):**

- File size: 38,769 bytes (real PNG, not pointer).
- First 8 bytes: `89 50 4E 47 0D 0A 1A 0A` (PNG signature; real PNG).
- `git check-attr -a` reports `filter: lfs / diff: lfs / merge: lfs` — `.gitattributes` rules DO match it now.
- `git lfs ls-files` does NOT list it — file is NOT tracked by LFS in git history.
- `git ls-tree -r HEAD` shows it as a regular `100644 blob 9320310f...` (38KB inline blob, not 130-byte pointer).

**Commit-order analysis (the actual cause):**

- `sterling-rough-map.png` first committed **2026-05-10** (commit `7a30188`, "plan 01-05 complete: World & Style Pack signed").
- `.gitattributes` (with LFS rules) first committed **2026-05-16** (commit `7ef3c20`, plan 02-01).
- The PNG was committed **6 days before** any LFS rule existed in the repo, so it landed in git history as a raw blob. The `.gitattributes` rule added later does NOT retroactively migrate it.

**Impact assessment:**

- Functional impact: NONE. The file restores correctly because the bytes ARE in regular git history. The restore test passed for THIS file too (it's bit-identical to origin).
- Storage impact: ~38 KB in regular git history that *should* be in LFS backend. Negligible at current scale (the repo is tiny); however, principle is violated — Phase 2's INFRA-01 promise was "Git LFS *before any binary assets are committed*" and this file pre-existed the rule.
- LFS quota impact: ZERO (file is NOT in LFS storage; it's in the regular pack).
- Future-pull impact: ZERO for users who already have the file in regular history; the warning during clone is cosmetic (LFS sees the file matches an LFS filter rule but the actual git blob is not a pointer).

**Disposition:** Logged as a **Phase 2 carry-forward cleanup task** (see "Phase 2 Carry-Forwards" section below). Recommended fix: migrate sterling-rough-map.png into LFS via `git lfs migrate import --include='*.png' --everything` OR (lower-risk for solo-dev) `git lfs migrate import --include='.planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/sterling-rough-map.png' --everything`. **Defer the actual migration** — it rewrites history (requires force-push, coordinated with backup snapshot), and the cost-benefit at 38 KB does not justify the disruption mid-Phase-2.

This anomaly does **NOT** block plan 02-04 closure. The restore procedure is proven; the LFS pipeline works as designed for files committed AFTER `.gitattributes` exists; the one pre-existing file restores correctly via the regular-git path.

**No other anomalies observed.** No LFS quota warnings, no network timeouts, no `git fsck` errors, no `git lfs fsck` errors.

### Tier 2 (Google Drive cloud-sync) status — NOT INSTALLED at test time

Per Daniel's Stage-1 approval response: **Google Drive desktop client NOT yet installed on D:\Projects\game machine.** Logged here as a Phase 2 carry-forward gap.

**Test coverage gap:** BACKUP.md Section 3.5 (Tier 2 recovery — catch-up from Google Drive for uncommitted local work) **was NOT exercised in this initial restore test.** Tier 1 (GitHub primary) was fully exercised and PASSED. Tier 3 (quarterly tarball) was not applicable to a fresh-clone restore.

**Concurrent install attempt by orchestrator:** Orchestrator initiated `winget install` for Google Drive client in a parallel side-task at approximately the same time this restore test was running. If that install succeeds AND Daniel completes the OAuth + folder-add GUI step (selecting `D:\Projects\game` as a synced folder), Tier 2 verification can be appended to this log file as a separate test entry (do not retroactively edit this 2026-05-16 entry — append a new entry titled "2026-MM-DD — Tier 2 catch-up verification" instead).

**Phase 2 carry-forward (Drive client + Tier 2 verification):**
- **Task:** Install Google Drive desktop client; OAuth login; add `D:\Projects\game` to synced-folders list; verify sync icon appears in folder; let it complete first full sync.
- **Verification:** Add a Section 3.5 catch-up scenario to a future restore test entry — simulate "Daniel made local change, did NOT commit/push, then machine dies; recover the uncommitted change from Drive."
- **Owner:** Daniel (OAuth + folder-selection is GUI-only, cannot be automated by Claude).
- **Deadline:** Within 2 weeks (by 2026-05-30), per BACKUP.md Section 5 cadence discipline — Phase 2 closure (plan 02-05) should NOT happen with this gap still open if avoidable.
- **Slice-debt eligibility:** Borderline. The gap is documented in `.planning/slice-debt.md` is appropriate IF Daniel determines the Drive install will slip past Phase 2 closure; otherwise this restore-test-log carry-forward entry is sufficient. (Decision deferred to Daniel pending winget install outcome from orchestrator side-task.)

### Tier 3 (quarterly tarball) status — N/A for initial test

Per BACKUP.md Section 5: quarterly tarball cadence first triggers Q3 2026 (July). No tarball yet exists. First scheduled creation: first nightly session of July 2026; first tarball-based restore test: opportunistic when a tarball exists.

### Cleanup outcome

**Test path retained:** `D:\TestRestore\colisi-2026-05-11` left on disk as an on-disk restore artifact (per BACKUP.md Section 5 option: "delete after test passes (or keep latest as ongoing restore artifact for spot-checks)"). Directory is OUTSIDE `D:\Projects\game` so it's not tracked by git and incurs no git-related cost. Daniel may manually delete the directory at any time without consequence; the next quarterly retest (2026-08-11) will overwrite/recreate the test path.

### Phase 2 Carry-Forwards (from this restore test)

1. **Tier 2 Google Drive client install + folder configuration** (Daniel; GUI auth required; target deadline 2026-05-30; verification = future log entry exercising BACKUP.md Section 3.5).
2. **`sterling-rough-map.png` LFS migration** (low priority; 38 KB file currently in regular git history; fix via `git lfs migrate import` requires force-push, defer to Phase-boundary or pre-Phase-6 when binary asset volume justifies a sweep audit; document in slice-debt.md if it persists beyond Phase 2 closure).

### Next scheduled retest

**2026-08-11** (Q3 2026, per BACKUP.md Section 5 quarterly cadence per D-INFRA-bkp-2). Use the runner script at `_restore-test-runner.ps1` for reproducibility. New log entry appended at TOP of this file (most-recent-first).

---

*Log file format: append-only, most-recent-first. Each new test = new H2 section above this footer. Format spec lives in BACKUP.md Section 5.*
*Initial creation: 2026-05-16 (plan 02-04 Task 2).*
