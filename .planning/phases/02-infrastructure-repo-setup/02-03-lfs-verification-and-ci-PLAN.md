---
phase: 02-infrastructure-repo-setup
plan: 03
type: execute
wave: 2
depends_on:
  - 02-infrastructure-repo-setup/01
files_modified:
  - .planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png
  - .planning/phases/02-infrastructure-repo-setup/verification/gitignore-test/README.md
  - .planning/phases/02-infrastructure-repo-setup/verification/VERIFICATION-LOG.md
  - .github/workflows/godot-import-check.yml
  - .github/workflows/README.md
autonomous: true
requirements:
  - INFRA-01
  - INFRA-02
  - INFRA-09

must_haves:
  truths:
    - "A test binary file (.png) committed to repo is verified to be stored in Git LFS, not as a regular blob (per INFRA-01 success criterion 'A test binary is committed and verified to be stored in LFS, not the main repo blob')"
    - "A test directory (.godot/-style cache or similar) attempted to be committed is verified IGNORED by .gitignore (per INFRA-02 success criterion 'Verified by attempting to commit a test cache directory and confirming it's ignored')"
    - "A VERIFICATION-LOG.md exists capturing both test outcomes with commands run + outputs observed + git SHAs"
    - "A .github/workflows/godot-import-check.yml workflow file exists (scaffolded; activates when Phase 3 lands the Godot project)"
    - "The CI workflow file is well-commented explaining why it's a no-op until Phase 3"
  artifacts:
    - path: ".planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png"
      provides: "Small test PNG committed to verify LFS routing"
      contains: "PNG"
    - path: ".planning/phases/02-infrastructure-repo-setup/verification/VERIFICATION-LOG.md"
      provides: "Logged outputs of LFS verification + .gitignore verification + CI scaffold rationale"
      contains: "git lfs ls-files"
    - path: ".github/workflows/godot-import-check.yml"
      provides: "GitHub Actions workflow scaffold; runs `godot --headless --import` once Phase 3 lands"
      contains: "godot"
    - path: ".github/workflows/README.md"
      provides: "Documentation of what each workflow does + activation phase"
      contains: "godot-import-check"
  key_links:
    - from: "verification/lfs-test.png"
      to: ".gitattributes *.png LFS rule"
      via: "Commit triggers LFS filter, `git lfs ls-files` confirms"
      pattern: "lfs-test\\.png"
    - from: ".github/workflows/godot-import-check.yml"
      to: "Future Phase 3 Godot project root (project.godot at repo root or subfolder)"
      via: "Workflow's `working-directory` field references the project location"
      pattern: "working-directory|project\\.godot"
    - from: "VERIFICATION-LOG.md"
      to: ".planning/SCOPE.md (potential new row logging Phase 2 LFS+ignore verification)"
      via: "Verification outcome may justify a SCOPE row if anything unexpected discovered"
      pattern: "VERIFICATION"
---

<objective>
Operationalize and verify the LFS + .gitignore configuration laid down in plan 02-01 by committing a real binary test file (confirming LFS routes it correctly) and attempting to commit an ignored directory (confirming .gitignore blocks it). Then scaffold the minimal CI workflow file per INFRA-09 with explicit rationale for why it's a no-op until Phase 3 lands the Godot project.

Purpose: A `.gitattributes` file that *claims* to route .png through LFS is worthless until proven. INFRA-01 and INFRA-02 success criteria explicitly require *verification* — committing a binary and confirming LFS storage, attempting to commit a cache directory and confirming ignore. Phase 2 deliverable is verified working infrastructure, not just config files.

CI scaffold (INFRA-09) is included in Wave 2 alongside verification because it's independent of other work and shares the "operationalize the config" theme.

Output: 1 test binary committed via LFS + 1 attempted-but-ignored directory + 1 VERIFICATION-LOG.md capturing evidence + 1 CI workflow YAML + 1 .github/workflows/README.md explaining the workflow.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/REQUIREMENTS.md
@.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md
@.planning/research/STACK.md
@.gitignore
@.gitattributes
@DEV-ENVIRONMENT.md
@.planning/phases/02-infrastructure-repo-setup/02-01-repo-hardening-files-PLAN.md

<interfaces>
<!-- Files created by plan 02-01 that this plan operates on -->

From `.gitattributes` (created by plan 02-01):
```
*.png filter=lfs diff=lfs merge=lfs -text
```
(plus many other LFS-tracked extensions)

From `.gitignore` (created by plan 02-01):
```
.godot/
```
(plus many other ignore patterns)

From DEV-ENVIRONMENT.md (existing):
- `git lfs install` already run globally on Daniel's Windows 11 machine (LFS 3.7.1)
- Godot installation: `D:\godot\Godot_v4.5.2-stable_win64.exe`
</interfaces>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Verify LFS routing with test PNG commit + verify .gitignore with test cache directory</name>
  <files>.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png, .planning/phases/02-infrastructure-repo-setup/verification/gitignore-test/README.md, .planning/phases/02-infrastructure-repo-setup/verification/VERIFICATION-LOG.md</files>
  <read_first>
    - .gitattributes (from plan 02-01; confirms `*.png filter=lfs diff=lfs merge=lfs -text` is present)
    - .gitignore (from plan 02-01; confirms `.godot/` is on its own line)
    - .planning/REQUIREMENTS.md INFRA-01 → "A test binary is committed and verified to be stored in LFS, not the main repo blob"
    - .planning/REQUIREMENTS.md INFRA-02 → "Verified by attempting to commit a test cache directory and confirming it's ignored"
    - DEV-ENVIRONMENT.md §"Git + Git LFS" → confirms Daniel-side `git lfs install` already done globally; LFS 3.7.1 installed
  </read_first>
  <action>
    Two verifications in this task. Execute them in order and log results to VERIFICATION-LOG.md.

    **Pre-flight check (do not skip):**
    Verify .gitattributes and .gitignore from plan 02-01 are committed and present at repo root:
    ```powershell
    cd D:\Projects\game
    Test-Path .gitattributes  # must return True
    Test-Path .gitignore       # must return True
    git ls-files .gitattributes .gitignore  # both must appear (committed, not just on-disk)
    ```
    If `git ls-files` does not show both files, STOP — plan 02-01 has not been committed and verification cannot proceed. Surface this as a blocker.

    **Verification A: LFS routes binary files correctly (INFRA-01)**

    Step A1: Create the verification subdirectory:
    ```powershell
    cd D:\Projects\game
    New-Item -ItemType Directory -Force -Path '.planning\phases\02-infrastructure-repo-setup\verification'
    ```

    Step A2: Generate a minimal valid PNG file (~1KB; not the smallest possible — must be a real PNG so a future viewer can confirm it's a real image, not a text-renamed-to-.png). PowerShell one-liner to create a 64x64 magenta PNG using System.Drawing:
    ```powershell
    Add-Type -AssemblyName System.Drawing
    $bmp = New-Object System.Drawing.Bitmap 64, 64
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::Magenta)
    $g.Dispose()
    $bmp.Save('D:\Projects\game\.planning\phases\02-infrastructure-repo-setup\verification\lfs-test.png', [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    ```
    If System.Drawing is unavailable on the build environment, fall back to writing a 67-byte minimal-valid PNG via raw byte writing (1x1 transparent pixel — Google "smallest valid PNG" — the 67-byte sequence is well-known and produces a real image). EITHER approach works; document which was used in the log.

    Step A3: Stage and commit the PNG:
    ```powershell
    cd D:\Projects\game
    git add .planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png
    git status   # confirm it's staged
    git commit -m "test(infra): commit verification PNG to test LFS routing (INFRA-01)"
    ```

    Step A4: Verify LFS routing — three independent checks all must pass:

    Check 1: `git lfs ls-files` must list the PNG:
    ```powershell
    git lfs ls-files
    # Expected output includes a line ending in: .planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png
    ```

    Check 2: `git lfs ls-files | grep lfs-test.png` must return non-empty (works on POSIX-shell side; on PowerShell use `Select-String`):
    ```powershell
    (git lfs ls-files) -match 'lfs-test\.png'
    # Expected: True
    ```

    Check 3: Inspect the actual git-stored object — it must be the LFS pointer text, NOT the binary PNG:
    ```powershell
    git show HEAD:.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png | Select-Object -First 3
    # Expected first 3 lines (LFS pointer format):
    #   version https://git-lfs.github.com/spec/v1
    #   oid sha256:<64-hex>
    #   size <number>
    ```

    If ANY of those 3 checks fail, the LFS configuration is broken. STOP and surface as a blocker. Do not proceed to push.

    Step A5: Push and verify GitHub-side LFS upload:
    ```powershell
    git push origin main
    # Expected output includes "Uploading LFS objects" line
    # If push fails with quota error, log it (D-INFRA-art-2 trigger; well below 80% expected but document)
    ```

    **Verification B: .gitignore blocks the .godot/ pattern (INFRA-02)**

    Step B1: Create a test cache-shaped directory under the verification subdir (it MUST be named `.godot` to test the actual ignore pattern), and put a README inside (we'll commit the README from a separate directory to keep the test clean):
    ```powershell
    cd D:\Projects\game\.planning\phases\02-infrastructure-repo-setup\verification
    New-Item -ItemType Directory -Force -Path 'gitignore-test'
    "# .gitignore verification test`n`nThis README is committed; the sibling .godot/ test directory next to this file is verified to be IGNORED by the repo-root .gitignore." | Set-Content gitignore-test/README.md -Encoding utf8
    ```

    Step B2: Now create the `.godot/` test directory ALSO under the verification subdir (NOT at repo root, where it would conflict with future Phase 3 Godot project):
    ```powershell
    cd D:\Projects\game\.planning\phases\02-infrastructure-repo-setup\verification
    New-Item -ItemType Directory -Force -Path '.godot'
    "# Fake Godot cache content for INFRA-02 verification" | Set-Content '.godot/fake-cache-marker.txt' -Encoding utf8
    ```

    Step B3: Verify `.gitignore` excludes it. Per Git pattern semantics, `.godot/` in the root .gitignore should match the `.godot/` directory at ANY depth (because the pattern has no leading slash and contains a trailing slash). Confirm:
    ```powershell
    cd D:\Projects\game
    git status
    # Expected: gitignore-test/ shows as untracked. The .godot/ directory should NOT appear in untracked.
    git check-ignore -v .planning/phases/02-infrastructure-repo-setup/verification/.godot/fake-cache-marker.txt
    # Expected output: .gitignore:<line-number>:.godot/<TAB>.planning/.../fake-cache-marker.txt
    # Exit code 0 means it IS ignored
    echo "git check-ignore exit code: $LASTEXITCODE"
    ```

    If `git check-ignore` returns non-zero (file is NOT ignored), .gitignore semantics are broken — STOP and surface as a blocker. Inspect whether `.godot/` should be `**/.godot/` to match nested paths.

    Step B4: Commit just the README from gitignore-test/ (DELIBERATELY leaving `.godot/` untracked-and-ignored as the verification):
    ```powershell
    cd D:\Projects\game
    git add .planning/phases/02-infrastructure-repo-setup/verification/gitignore-test/README.md
    git status   # must show ONLY the README staged; .godot/ should not appear anywhere
    git commit -m "test(infra): commit .gitignore verification README (.godot/ excluded; INFRA-02)"
    ```

    Step B5: Verify the committed history does NOT contain .godot/:
    ```powershell
    git ls-files | Select-String -Pattern '\.godot/'
    # Expected: empty output (no matches)
    git log --all --full-history -- '*/.godot/*'
    # Expected: empty output
    ```

    Cleanup: leave the `.godot/` directory on disk under verification/ (it's gitignored; it stays as evidence and harmless). Phase 3 creates the real `.godot/` at repo root.

    **Step C: Write VERIFICATION-LOG.md**

    Create `.planning/phases/02-infrastructure-repo-setup/verification/VERIFICATION-LOG.md` documenting both verifications. Required sections (markdown H2):

    ```markdown
    # Phase 2 Infrastructure Verification Log

    **Date:** 2026-05-11 (or actual execution date)
    **Executor:** Claude (autonomous; supervised by Daniel)
    **Purpose:** Capture the verification evidence for INFRA-01 and INFRA-02 per ROADMAP.md Phase 2 success criteria 1 and 2.

    ## Verification A — LFS routes binary files correctly (INFRA-01)

    **Test:** Commit a small valid PNG (lfs-test.png) and verify it's stored as an LFS pointer, not a regular blob.

    **Procedure:**
    1. Generated 64×64 magenta PNG at `.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png` (method used: <PowerShell System.Drawing OR raw byte writing — record which>).
    2. Staged + committed with message `test(infra): commit verification PNG to test LFS routing (INFRA-01)`.
    3. Verified via 3 independent checks (below).

    **Evidence:**

    ### Check 1: `git lfs ls-files` includes the PNG
    ```
    <paste actual output of `git lfs ls-files`>
    ```

    ### Check 2: Stored object is LFS pointer (not binary)
    ```
    <paste actual output of `git show HEAD:<path>/lfs-test.png | head -3`>
    ```
    Expected first line: `version https://git-lfs.github.com/spec/v1`.

    ### Check 3: GitHub-side push succeeded
    ```
    <paste relevant lines from `git push origin main` output, including the "Uploading LFS objects" line>
    ```

    **Outcome:** ✅ PASS / ❌ FAIL — `<record actual outcome>`

    **Commit SHA:** `<actual SHA from git log>`

    ---

    ## Verification B — .gitignore excludes .godot/ pattern (INFRA-02)

    **Test:** Create a `.godot/` directory with fake cache content and verify `git status` does NOT list it; `git check-ignore` confirms ignore rule application.

    **Procedure:**
    1. Created `.planning/phases/02-infrastructure-repo-setup/verification/gitignore-test/README.md` (the committed marker).
    2. Created `.planning/phases/02-infrastructure-repo-setup/verification/.godot/fake-cache-marker.txt` (the file expected to be IGNORED).
    3. Verified via `git status` and `git check-ignore`.

    **Evidence:**

    ### Check 1: `git status` does NOT show the .godot/ directory
    ```
    <paste relevant `git status` output showing only gitignore-test/ as untracked>
    ```

    ### Check 2: `git check-ignore -v` confirms the ignore rule
    ```
    <paste actual `git check-ignore -v` output and exit code>
    ```
    Expected: exit code 0 with `.gitignore:<line>:.godot/<TAB><path>` style line.

    ### Check 3: Committed history contains no `.godot/` path
    ```
    <paste output of `git ls-files | grep .godot/` — should be empty>
    ```

    **Outcome:** ✅ PASS / ❌ FAIL — `<record actual outcome>`

    **Commit SHA:** `<actual SHA for the README commit>`

    ---

    ## Anomalies / Surprises

    `<If anything unexpected happened — quota warnings, slow LFS upload, ignore semantics differing from expectation — log here. If clean: "None."`>

    ## SCOPE.md row needed?

    `<If verification surfaced any architectural change or surprise worth a SCOPE.md row, draft the row text here. Default: no row needed; verification confirms plan 02-01 config works as specified. Common decisions per HEALTH-01: verification is mechanical execution of locked decisions; not a new architectural commit.>`

    ---

    *Verification executed: 2026-05-11*
    *Logged per INFRA-01 + INFRA-02 success criteria.*
    ```

    Fill in the `<placeholder>` sections with actual outputs captured from your commands. Use Write tool.

    **Commit all three new files + the LFS test PNG together** at the end of the task:
    ```powershell
    cd D:\Projects\game
    git add .planning/phases/02-infrastructure-repo-setup/verification/VERIFICATION-LOG.md
    git status   # should show only VERIFICATION-LOG.md staged at this point (others already committed in steps A3 and B4)
    git commit -m "test(infra): log Phase 2 LFS + .gitignore verification outcomes (INFRA-01/02)"
    git push origin main
    ```

    Note: This task results in THREE commits (LFS-test PNG, gitignore-test README, VERIFICATION-LOG.md) — that's intentional. Each commit is atomic to its verification, and the log commit captures the meta-outcome.
  </action>
  <verify>
    <automated>cd D:\Projects\game; $log = Get-Content .planning/phases/02-infrastructure-repo-setup/verification/VERIFICATION-LOG.md -Raw; $lfsCheck = (git lfs ls-files) -match 'lfs-test\.png'; $ptr = (git show HEAD:.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png 2>$null) -match 'https://git-lfs\.github\.com/spec/v1'; $godotIgnored = ((git ls-files) | Where-Object { $_ -match '\.godot/' }).Count -eq 0; ($lfsCheck) -and ($ptr) -and ($godotIgnored) -and ($log -match 'PASS')</automated>
  </verify>
  <acceptance_criteria>
    - File `.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png` exists (`Test-Path` True)
    - Command `git lfs ls-files` returns at least one line containing `lfs-test.png` (LFS routing confirmed)
    - Command `git show HEAD:.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png | Select-Object -First 1` returns a line starting with `version https://git-lfs.github.com/spec/v1` (file IS the LFS pointer text, NOT binary PNG bytes)
    - File `.planning/phases/02-infrastructure-repo-setup/verification/gitignore-test/README.md` exists and IS committed (`git ls-files | Select-String gitignore-test/README.md` returns a match)
    - Command `git ls-files | Select-String '\.godot/'` returns ZERO matches (the .godot/ test directory is NOT in committed history)
    - Command `git check-ignore -v .planning/phases/02-infrastructure-repo-setup/verification/.godot/fake-cache-marker.txt` returns exit code 0 and output includes `.gitignore` (file is ignored by .gitignore rule)
    - File `.planning/phases/02-infrastructure-repo-setup/verification/VERIFICATION-LOG.md` exists with both "Verification A" and "Verification B" H2 sections, both marked PASS
    - VERIFICATION-LOG.md contains the literal phrase `git lfs ls-files` (procedure logged)
    - VERIFICATION-LOG.md contains the literal phrase `version https://git-lfs.github.com/spec/v1` (LFS pointer format documented as expected)
    - Three commits exist with messages matching `test(infra)` and one of: "commit verification PNG", "commit .gitignore verification README", "log Phase 2 LFS + .gitignore verification"
    - `git push origin main` succeeded (most recent push to origin reflects local main; `git status` shows "Your branch is up to date with 'origin/main'")
  </acceptance_criteria>
  <done>LFS routing verified via test PNG commit + LFS pointer inspection; .gitignore semantics verified via .godot/ exclusion check; VERIFICATION-LOG.md captures all outputs with PASS outcomes; 3 atomic commits pushed to GitHub.</done>
</task>

<task type="auto">
  <name>Task 2: Scaffold .github/workflows/godot-import-check.yml (INFRA-09)</name>
  <files>.github/workflows/godot-import-check.yml, .github/workflows/README.md</files>
  <read_first>
    - .planning/REQUIREMENTS.md INFRA-09 → "GitHub Actions workflow that runs `godot --headless --import` to verify the project imports without errors on every push to main (free unlimited minutes on public repo)"
    - .planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md §"Deferred Ideas" → "CI workflow file timing — Claude-discretion during Phase 2 planning whether to scaffold the workflow file now (with no actual Godot project to import-check) or defer entirely to Phase 3. Default lean: scaffold in Phase 2 with a comment explaining it activates when Phase 3 lands."
    - .planning/research/STACK.md §"Build & Distribution Pipeline" → references `godot --headless --import` pattern
    - DEV-ENVIRONMENT.md → confirms `D:\godot\Godot_v4.5.2-stable_win64.exe` is the project's pinned engine version
  </read_first>
  <action>
    Two files: the YAML workflow and a workflow-README.

    **File 1: `.github/workflows/godot-import-check.yml`**

    Create the directory and the file:
    ```powershell
    cd D:\Projects\game
    New-Item -ItemType Directory -Force -Path '.github/workflows'
    ```

    Write the following EXACT content to `.github/workflows/godot-import-check.yml`:

    ```yaml
    # =============================================================================
    # godot-import-check.yml — Phase 2 SCAFFOLD (active from Phase 3 onward)
    # -----------------------------------------------------------------------------
    # PURPOSE: On every push and PR to main, run `godot --headless --import` to
    # catch import errors in Godot scenes, scripts, and resources before they ship.
    #
    # STATUS (2026-05-11): SCAFFOLDED, NOT YET ACTIVE.
    # No Godot project exists at the repo root yet — Phase 3 creates project.godot.
    # Until then, the workflow short-circuits via the existence check on the
    # first step. Once Phase 3 lands project.godot, the import step runs.
    #
    # REQUIREMENT: INFRA-09 (.planning/REQUIREMENTS.md)
    # SOURCE: .planning/research/STACK.md §"Build & Distribution Pipeline"
    # ENGINE PIN: Godot 4.5.2 stable (non-mono) per DEV-ENVIRONMENT.md
    # =============================================================================

    name: Godot import check

    on:
      push:
        branches:
          - main
      pull_request:
        branches:
          - main
      workflow_dispatch:  # allows manual trigger from Actions tab

    # Limit concurrent runs per branch so rapid pushes don't queue old runs
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
      cancel-in-progress: true

    jobs:
      import-check:
        name: Godot --headless --import
        runs-on: ubuntu-latest
        # Set the engine version here. Bump on phase-boundary engine upgrades only
        # (per PHILOSOPHY.md Amendment Process), never mid-phase.
        env:
          GODOT_VERSION: "4.5.2"
          GODOT_RELEASE_NAME: "stable"
          GODOT_ARCHIVE: "Godot_v4.5.2-stable_linux.x86_64.zip"
          GODOT_BINARY: "Godot_v4.5.2-stable_linux.x86_64"

        steps:
          - name: Checkout repo (with LFS)
            uses: actions/checkout@v4
            with:
              lfs: true

          - name: Detect whether a Godot project exists
            id: detect
            run: |
              if [ -f "project.godot" ]; then
                echo "godot_project_exists=true" >> "$GITHUB_OUTPUT"
                echo "Found project.godot at repo root — proceeding with import check."
              else
                echo "godot_project_exists=false" >> "$GITHUB_OUTPUT"
                echo "::notice title=Phase 2 scaffold::No project.godot found at repo root. Phase 3 will create it; until then this workflow is a no-op."
              fi

          - name: Cache Godot binary
            if: steps.detect.outputs.godot_project_exists == 'true'
            id: cache-godot
            uses: actions/cache@v4
            with:
              path: ~/godot/${{ env.GODOT_BINARY }}
              key: godot-${{ env.GODOT_VERSION }}-${{ env.GODOT_RELEASE_NAME }}-linux

          - name: Install Godot
            if: steps.detect.outputs.godot_project_exists == 'true' && steps.cache-godot.outputs.cache-hit != 'true'
            run: |
              mkdir -p ~/godot
              cd ~/godot
              curl -L -o godot.zip "https://github.com/godotengine/godot-builds/releases/download/${{ env.GODOT_VERSION }}-${{ env.GODOT_RELEASE_NAME }}/${{ env.GODOT_ARCHIVE }}"
              unzip godot.zip
              chmod +x ${{ env.GODOT_BINARY }}

          - name: Cache Godot .import directory (speeds up repeat runs)
            if: steps.detect.outputs.godot_project_exists == 'true'
            uses: actions/cache@v4
            with:
              path: .godot
              key: godot-import-${{ env.GODOT_VERSION }}-${{ hashFiles('**/*.tscn', '**/*.tres', '**/*.gd', '**/*.import') }}
              restore-keys: |
                godot-import-${{ env.GODOT_VERSION }}-

          - name: Run headless import
            if: steps.detect.outputs.godot_project_exists == 'true'
            run: |
              ~/godot/${{ env.GODOT_BINARY }} --headless --import --path . 2>&1 | tee godot-import.log
              # --import re-exports the import metadata; exit 0 = success, non-zero = error
              # Fail the workflow on any "ERROR:" line in the log even if exit code was 0
              # (Godot sometimes exits 0 despite logged errors)
              if grep -E "^ERROR:|^SCRIPT ERROR:" godot-import.log; then
                echo "::error::Godot reported errors during import. See log above."
                exit 1
              fi

          - name: Upload import log on failure
            if: failure() && steps.detect.outputs.godot_project_exists == 'true'
            uses: actions/upload-artifact@v4
            with:
              name: godot-import-log
              path: godot-import.log
              retention-days: 7

          - name: Phase 2 scaffold notice (no project yet)
            if: steps.detect.outputs.godot_project_exists == 'false'
            run: |
              echo "Phase 2 scaffold notice: godot-import-check.yml is in place but inactive."
              echo "Activates automatically once Phase 3 creates project.godot at the repo root."
              echo "Engine pin: ${{ env.GODOT_VERSION }} ${{ env.GODOT_RELEASE_NAME }} (Linux build used for CI; matches Daniel's local 4.5.2 Windows pin)."
    ```

    Notes on the workflow:
    - Triggers on push + PR to main + manual workflow_dispatch.
    - `concurrency` group cancels in-progress runs on rapid pushes (cost saver, faster feedback).
    - First step detects whether `project.godot` exists at repo root — if no, all subsequent Godot-installing/running steps are conditioned `if: ... == 'true'` and skipped.
    - When the project DOES exist (Phase 3 onward): caches the Godot binary (saves ~30s/run), caches the `.godot/` import directory (saves minutes), runs `--headless --import`, then ERROR-line-scans the log because Godot occasionally exits 0 despite logged errors.
    - Uses Godot Linux build via GitHub-hosted runner (matches the engine version Daniel pins on Windows).
    - On failure, uploads the import log as an artifact (7-day retention; long enough to debug, short enough to not eat storage).
    - LFS pull is automatic on checkout (`lfs: true`).

    **File 2: `.github/workflows/README.md`**

    Write the following content:

    ```markdown
    # GitHub Actions workflows

    Workflows running on this repository.

    ## Active workflows

    | Workflow | File | Trigger | Purpose | Active phase |
    |---|---|---|---|---|
    | Godot import check | `godot-import-check.yml` | push + PR to main; manual | Verify `godot --headless --import` succeeds — catches scene/script/resource import errors before they ship | Scaffolded Phase 2; activates Phase 3 when `project.godot` lands |

    ## Why workflows live here

    GitHub Actions provides free unlimited minutes on public repositories. The `godot-import-check` workflow uses Linux-based runner (Godot's Linux build matches the same engine version as Daniel's Windows pin per `DEV-ENVIRONMENT.md`).

    ## Scaffold-vs-active pattern

    `godot-import-check.yml` is **scaffolded** during Phase 2 (`INFRA-09`) — the workflow file is present, but its first step detects whether `project.godot` exists at repo root. If not, all subsequent steps are skipped. This avoids the awkward path of "create CI workflow that immediately fails because there's no project" or "wait until Phase 3 to scaffold."

    When Phase 3 lands `project.godot`, the workflow activates automatically on the next push.

    ## Engine version pin

    The workflow's `GODOT_VERSION` env variable must stay in sync with `DEV-ENVIRONMENT.md` §"Godot — 4.5.x non-mono (pinned)". Bump the workflow's pin only during phase-boundary engine upgrades per `PHILOSOPHY.md` Amendment Process. Never mid-phase.

    Current pin: **Godot 4.5.2 stable** (non-mono).

    ## Future workflows (deferred per ROADMAP)

    - `itch-publish.yml` — automate `butler push` to itch.io. Deferred to ~Phase 8 (Steam Page Launch + Public Demo) per `STACK.md` §"Build & Distribution Pipeline → itch.io".
    - `steam-publish.yml` — automate Steam depot upload. Deferred to ~Phase 8 / Phase 11 (Pre-Launch Marketing) once Steam Direct registration completes.
    - `gut-tests.yml` — run GUT unit tests. Deferred to ~Phase 3 when first tested system (save/load round-trip) lands.

    ## Modifying a workflow

    1. Make the YAML change on a branch (or directly on main per `CONTRIBUTING.md` §4 trunk-based model).
    2. Push and watch the Actions tab.
    3. If the workflow itself fails on the change, the previous version is the most recent passing run — `git revert` if needed.

    ## License + secrets

    Workflows do not require any GitHub secrets at this time. Phase 8+ itch.io / Steam workflows will use `BUTLER_API_KEY` and Steam-equivalent secrets — added to GitHub Settings → Secrets at that phase.
    ```

    Use Write tool for both files.

    **Commit both files together:**
    ```powershell
    cd D:\Projects\game
    git add .github/workflows/godot-import-check.yml .github/workflows/README.md
    git commit -m "ci(infra): scaffold godot-import-check workflow + workflows README (INFRA-09; activates Phase 3)"
    git push origin main
    ```

    **Verify the workflow runs** (it should run on the push — even though it'll be a no-op no-Godot-project run):
    ```powershell
    gh run list --workflow=godot-import-check.yml --limit 1
    # Expected: one row showing the workflow ran (or is in-progress).
    # Status may be 'completed' with conclusion 'success' (no-op skip path).
    gh run view --log <run-id>
    # Look for the "Phase 2 scaffold notice" output.
    ```

    If `gh` is unavailable or the run fails for an environmental reason (not a logic reason), log the issue in VERIFICATION-LOG.md but don't block — the workflow YAML logic is verified by inspection.
  </action>
  <verify>
    <automated>cd D:\Projects\game; $y = Get-Content .github/workflows/godot-import-check.yml -Raw; $r = Get-Content .github/workflows/README.md -Raw; ($y -match 'name: Godot import check') -and ($y -match 'godot --headless --import') -and ($y -match 'GODOT_VERSION') -and ($y -match '4\.5\.2') -and ($y -match 'project\.godot') -and ($y -match 'godot_project_exists') -and ($r -match 'godot-import-check') -and ($r -match 'Phase 3')</automated>
  </verify>
  <acceptance_criteria>
    - File `.github/workflows/godot-import-check.yml` exists (`Test-Path` True)
    - YAML contains `name: Godot import check`
    - YAML contains `on:` with `push:` AND `pull_request:` AND `workflow_dispatch:` triggers
    - YAML contains `godot --headless --import`
    - YAML pins `GODOT_VERSION: "4.5.2"` (matches DEV-ENVIRONMENT.md)
    - YAML has the `godot_project_exists` detection step that short-circuits when `project.godot` is missing
    - YAML has the LFS checkout (`lfs: true` on actions/checkout)
    - YAML has caching for both the Godot binary and the `.godot/` import directory
    - YAML scans for `ERROR:` and `SCRIPT ERROR:` lines in the import log
    - YAML uploads `godot-import.log` as artifact on failure
    - File `.github/workflows/README.md` exists
    - workflows/README.md contains `godot-import-check`, `Phase 3` (activation phase), and `4.5.2` (engine pin doc)
    - workflows/README.md lists deferred-future workflows (itch-publish, steam-publish, gut-tests)
    - Both files committed and pushed (`git log -1` shows the ci(infra) commit)
    - Optionally: `gh run list --workflow=godot-import-check.yml --limit 1` shows at least one run triggered (either succeeded with no-op skip path or running)
  </acceptance_criteria>
  <done>godot-import-check.yml workflow scaffolded with no-op-when-project-missing detection + Godot 4.5.2 engine pin + LFS checkout + binary caching + error-line scanning + log-artifact-on-failure. Workflows README documents the scaffold pattern + future-phase workflow plans. Both committed and pushed.</done>
</task>

</tasks>

<verification>
After both tasks complete:

1. Run `git log --oneline -10` and confirm at least 4 new commits from this plan (LFS-test PNG, gitignore-test README, VERIFICATION-LOG, ci scaffold).
2. Open VERIFICATION-LOG.md and confirm both "Verification A" and "Verification B" are marked PASS.
3. Run `git lfs ls-files` and confirm `lfs-test.png` appears in output.
4. Visit https://github.com/danhicks853/colisi/actions in browser (or `gh run list`) and confirm the godot-import-check workflow ran (no-op skip path counts as success).
5. Verify `git status` shows clean working tree (everything committed).

If LFS push hit a quota error, log it to VERIFICATION-LOG.md "Anomalies / Surprises" section AND surface to Daniel — this is a D-INFRA-art-2 trigger (~80% quota threshold) but is unexpected this early; investigate before proceeding to plan 02-04.
</verification>

<success_criteria>
- INFRA-01 satisfied with verifiable evidence: PNG committed → `git lfs ls-files` lists it → `git show HEAD:<path>` shows LFS pointer text → push to GitHub succeeded
- INFRA-02 satisfied with verifiable evidence: `.godot/` test dir created → `git status` does not list it → `git check-ignore -v` exits 0 → committed history has no `.godot/` paths
- **INFRA-09 satisfaction floor (per checker Issue 6) is STRUCTURAL-ONLY verification:** YAML syntax valid + workflow file exists + workflow YAML detection logic verified by inspection + commit lands on main. **Actual runtime triggering of the CI on GitHub is OPTIONAL for Phase 2 closure.** If `gh` is unavailable or the run fails for environmental reasons (not a logic bug), log the issue in VERIFICATION-LOG.md but do NOT block plan closure. End-to-end runtime CI verification is deferred to Phase 3 first push that has a real `project.godot` to import-check (which is when the workflow no-op short-circuit deactivates). The success criterion phrasing in CONTEXT.md ("Minimal CI is configured") is satisfied by the scaffold per locked plan-discretion.
- INFRA-09 structural checklist: workflow file exists, has Godot 4.5.2 pin, detects-and-skips when no project.godot, runs headless import + error-line-scan + log-artifact when project lands, workflows/README.md documents the scaffold pattern.
- VERIFICATION-LOG.md captures evidence for both verifications with PASS outcomes
- All work committed in 4 atomic commits pushed to origin/main
- Phase 3 can confidently rely on LFS routing + .gitignore semantics + CI scaffold; no Phase 2 surprises remain
</success_criteria>

<output>
After completion, create `.planning/phases/02-infrastructure-repo-setup/02-03-lfs-verification-and-ci-SUMMARY.md`:
- What was built (verification artifacts + CI scaffold; commit SHAs)
- Requirements satisfied (INFRA-01 verified; INFRA-02 verified; INFRA-09 scaffolded)
- Key outputs (LFS pointer text first-line, git check-ignore exit code, workflow run conclusion)
- Anomalies (any LFS quota warnings, CI run surprises) — if none: "None observed"
- Downstream consumer (Phase 3 inherits a verified-working LFS + .gitignore + a CI scaffold that activates the moment `project.godot` lands; no Phase 3 startup time spent on infrastructure)
</output>
