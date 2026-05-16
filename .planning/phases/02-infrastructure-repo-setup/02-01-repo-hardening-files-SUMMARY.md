---
phase: 02-infrastructure-repo-setup
plan: 01
subsystem: infra
tags: [git, git-lfs, gitignore, gitattributes, editorconfig, license, godot, repo-hardening]

# Dependency graph
requires:
  - phase: 01-foundations-vision-lock
    provides: "STACK.md Git LFS spec (lines ~284-345); REQUIREMENTS.md INFRA-01/02/06/07; CLAUDE.md hard guardrails including AI policy + GSD enforcement; DEV-ENVIRONMENT.md (Daniel's Win11 + LFS 3.7.1 already installed globally)"
provides:
  - ".gitignore at repo root (Godot 4 + OS clutter + build artifacts + secrets + .local/ reversibility hook)"
  - ".gitattributes at repo root with LFS filter rules for 30+ binary extensions BEFORE any binary commit"
  - ".editorconfig at repo root (LF default + GDScript tabs + Markdown 2-space + Windows-batch CRLF)"
  - "LICENSE at repo root (All Rights Reserved + public-visibility-no-reuse + future-relicensing + ML-training prohibition + AS-IS no-warranty)"
  - "STACK.md reconciliation (SVG LFS line replaced with explanatory comment block) preventing silent doc/reality divergence"
affects: [02-02-conventions-and-documentation, 02-03-lfs-verification-and-ci, 02-04-backup-and-restore-test, 03-project-skeleton, 06-slice-content-production]

# Tech tracking
tech-stack:
  added: [".gitignore", ".gitattributes (Git LFS filter rules)", ".editorconfig", "LICENSE (text)"]
  patterns:
    - "LFS-before-binary discipline: .gitattributes lands BEFORE any binary asset commit (prevents retroactive `git lfs migrate import`)"
    - "STACK.md as single source of truth for repo config; deviations from STACK.md require inline amendment to prevent silent divergence (per CLAUDE.md PHILOSOPHY.md Amendment Process)"
    - "Atomic per-task commits with file-scoped staging (no `git add .`) — one logical change per commit"
    - "Cross-platform LF default with explicit CRLF override for Windows batch interpreters"
    - ".local/ ignored path as reversibility hook for D-INFRA-priv-2 (PERSONA.md private-path option)"

key-files:
  created:
    - ".gitignore"
    - ".gitattributes"
    - ".editorconfig"
    - "LICENSE"
    - ".planning/phases/02-infrastructure-repo-setup/02-01-repo-hardening-files-SUMMARY.md"
  modified:
    - ".planning/research/STACK.md (SVG LFS line replaced with explanatory comment block — checker Issue 4 reconciliation)"

key-decisions:
  - "Per-task atomic commits chosen over single-atomic-commit alternative (plan's verification step 5 vs orchestrator GSD execute-plan protocol — orchestrator precedence)"
  - "STACK.md amended inline within Task 2 (SVG LFS removal) to prevent silent doc/reality divergence per CLAUDE.md authoritative-docs precedence rule"
  - "30+ LFS extensions tracked (exceeds STACK.md baseline of 13) — includes D-INFRA-art-1 art-source extensions (.blend1 .psd .kra .lmms .rpp .aup3) and future-proofing (.mp4 .mov .webm trailer assets; .woff .woff2 web fonts; .zip .7z asset-pack archives)"
  - "Text section enforces LF on all text files except Windows batch (.bat .cmd .ps1) which require CRLF for the interpreter; .sh kept LF (POSIX)"
  - "/builds/*.zip scoped in .gitignore (not unscoped *.zip) so .gitattributes LFS rule for asset-pack zips under res://assets/ still applies per checker Issue 3"

patterns-established:
  - "LFS-track-by-extension via filter=lfs diff=lfs merge=lfs -text rules in .gitattributes"
  - "Cross-platform line-ending discipline via .editorconfig [*] default + per-filetype overrides"
  - "All Rights Reserved license posture for public-repo commercial closed-source game; future-relicensing clause preserves source-available / open-source post-launch options"

requirements-completed: [INFRA-01, INFRA-02, INFRA-06, INFRA-07]

# Metrics
duration: ~4min
completed: 2026-05-16
---

# Phase 02 Plan 01: Repo Hardening Files Summary

**Four foundational repo-hardening files (.gitignore, .gitattributes, .editorconfig, LICENSE) locked in BEFORE any Godot project init or binary asset commit; STACK.md SVG-LFS contradiction reconciled inline; LFS now armed for all 30+ binary extensions Phase 6 will exercise.**

## Performance

- **Duration:** ~4 min (199 sec wall-clock)
- **Started:** 2026-05-16T22:25:30Z
- **Completed:** 2026-05-16T22:28:49Z
- **Tasks:** 4 of 4 complete
- **Files created:** 4 (.gitignore, .gitattributes, .editorconfig, LICENSE)
- **Files modified:** 1 (.planning/research/STACK.md SVG-LFS reconciliation)
- **Commits:** 4 atomic per-task commits

## Accomplishments

- **LFS armed before first binary commit** — `.gitattributes` covers all 13 INFRA-01-mandatory extensions plus 17 additional (D-INFRA-art-1 DAW projects, future trailer video, web fonts, asset-pack archives). Plan 02-03 will verify with a test PNG commit.
- **Godot-tuned `.gitignore`** prevents `.godot/` engine cache + `.import/` metadata + build artifacts + secrets (including `butler-key.txt` and `.local/` reversibility hook) from ever entering history.
- **Cross-platform editor consistency** locked via `.editorconfig` — LF default + GDScript tabs + Markdown 2-space + Windows-batch CRLF. Supports Godot built-in editor (primary) and VS Code (secondary) per STACK.md.
- **All Rights Reserved LICENSE** with public-visibility-no-reuse + ML-training prohibition + future-relicensing clause + AS-IS no-warranty + GitHub-issue contact pointer. Matches README.md existing license claim.
- **STACK.md / reality reconciliation** — SVG LFS line replaced with explanatory comment block (SVG is text/XML and diffs cleanly). Prevents silent doc/reality divergence per CLAUDE.md Amendment Process.

## Task Commits

Each task was committed atomically:

1. **Task 1: Create .gitignore (Godot-tuned)** — `a13ab24` (chore)
2. **Task 2: Create .gitattributes (LFS configuration) + STACK.md SVG amendment** — `7ef3c20` (chore)
3. **Task 3: Create .editorconfig** — `fd08de5` (chore)
4. **Task 4: Create LICENSE (All Rights Reserved)** — `43842b2` (chore)

**Plan metadata commit:** TBD (final commit at end of state-updates phase will bundle SUMMARY.md + STATE.md + ROADMAP.md + REQUIREMENTS.md updates)

## Files Created/Modified

### Created (repo root)
- `D:\Projects\game\.gitignore` — Godot 4 + OS clutter + build artifacts + secrets (butler-key.txt) + `.local/` reversibility hook; 24 lines; LF endings; `/builds/*.zip` scoped (NOT unscoped `*.zip`) so LFS rule for asset-pack zips still applies
- `D:\Projects\game\.gitattributes` — 36 LFS filter rules across 30+ binary extensions (3D, images, audio, fonts, video, archives, DAW projects, Godot binary) + text-file LF enforcement + Windows-batch CRLF preservation; LF endings
- `D:\Projects\game\.editorconfig` — `root=true` + `[*]` LF/UTF-8/trim/final-newline default + per-filetype overrides for GDScript (tabs), Godot scene/resource (tabs), Markdown (2-space, preserve trailing), CSV (preserve trailing), Windows batch (CRLF), shell (LF), HTML/CSS/JS (2-space); LF endings
- `D:\Projects\game\LICENSE` — All Rights Reserved + public-visibility-no-reuse + may/may-not clauses (including ML-training prohibition) + third-party-assets clause + future-relicensing clause + outside-contributor inbound-license assumption + AS-IS no-warranty + GitHub-issue contact pointer; LF endings

### Modified
- `D:\Projects\game\.planning\research\STACK.md` — single-line change in §"Version Control + Git LFS Strategy" .gitattributes block: removed `*.svg filter=lfs diff=lfs merge=lfs -text` and replaced with a three-line explanatory comment block. Reconciles checker Issue 4 (SVG-as-text/XML — diffs cleanly; should not be LFS-tracked).

## Decisions Made

- **Per-task atomic commits over single-atomic-commit.** Plan's verification step 5 said "Commit all 4 files in a single atomic commit" but orchestrator-level GSD execute-plan protocol mandates per-task atomic commits. Followed orchestrator precedence (file-scoped staging via `git add <file>`, one logical change per commit).
- **STACK.md amended inline within Task 2.** Plan explicitly directed this to prevent silent doc/reality divergence (CLAUDE.md authoritative-docs precedence: "fix the document or fix the reality, but do not let them diverge silently"). Mechanical/technical correction (SVG is genuinely text/XML), not architectural — no new D-INFRA-* decision required.
- **30+ LFS extensions vs STACK.md's 13.** Plan justified inclusion of additional extensions (D-INFRA-art-1 art-source DAW projects, web fonts for future devlog, video for future trailer, archives for asset packs, etc.). All extensions are commit-cheap to LFS-track now; retroactive add is expensive (`git lfs migrate import` history rewrite).
- **Followed plan exactly otherwise.** No Rule 1-4 deviations occurred during execution. Plan was well-specified.

## Deviations from Plan

None — plan executed exactly as written. No Rule 1 (auto-fix bug), Rule 2 (auto-add missing critical), Rule 3 (auto-fix blocking), or Rule 4 (architectural decision) triggers fired.

The two notable execution-choice items above (per-task commits vs single commit; STACK.md amendment within Task 2) were both explicitly directed by the plan itself or by the orchestrator's standing protocol — neither was a Rule-driven deviation.

## Issues Encountered

- **Git CRLF auto-conversion warnings on commit.** Git emitted `warning: in the working copy of '<file>', LF will be replaced by CRLF the next time Git touches it` for all 4 commits. This is Windows default `core.autocrlf=true` behavior affecting checkout (not the committed blob). The committed blobs retain LF endings (verified via `Get-Content -Raw` matching `\r\n` returning False for all files). Once `.gitattributes` is honored on next checkout, the explicit `text eol=lf` rules will pin LF. Not a deviation; documented for context.

## User Setup Required

None — this plan only creates repo-root config files. No external services, no environment variables, no dashboard configuration. `git lfs install` was already completed globally per DEV-ENVIRONMENT.md (LFS 3.7.1).

## Next Phase Readiness

- **Plan 02-02 (CONVENTIONS.md + README/CONTRIBUTING/CHANGELOG):** unblocked. `.editorconfig` will govern formatting of all `.md` files created in that plan.
- **Plan 02-03 (LFS verification + CI):** unblocked. Will commit a test binary asset (e.g., 1x1 PNG) and verify via `git lfs ls-files` that it routes through LFS. The `.gitattributes` rules created here are the gating dependency.
- **Plan 02-04 (Backup + restore test):** unblocked; independent of these files.
- **Plan 02-05 (Decisions recorded + phase closure):** unblocked; will reference these files as artifacts.
- **Phase 3 (Project Skeleton):** inherits `.gitignore` (won't commit `.godot/` or `.import/`) and `.editorconfig` (GDScript tab convention pre-applied). `res://` Godot project init will land cleanly.
- **Phase 6 (Slice Content Production):** the LFS rules created here are the load-bearing infrastructure for binary asset commits at scale. Any `.blend` / `.glb` / `.png` / `.wav` etc. committed in Phase 6 will route through LFS by default with zero per-commit ceremony.

**Concerns / open items:**
- Push to GitHub origin/main deferred until after final metadata commit (so SUMMARY + STATE + ROADMAP ship together in one push). Plan 02-03 will exercise the LFS pipeline end-to-end including remote-side LFS storage.
- Pre-existing `M .planning/STATE.md` and `?? .claude/settings.local.json` in working tree are outside this plan's scope; STATE.md will be regenerated by `gsd-tools state advance-plan` in the state-update phase below.

## Self-Check: PASSED

Verified 2026-05-16T22:29Z:

**Files (5 of 5 FOUND):**
- `.gitignore` — FOUND
- `.gitattributes` — FOUND
- `.editorconfig` — FOUND
- `LICENSE` — FOUND
- `.planning/phases/02-infrastructure-repo-setup/02-01-repo-hardening-files-SUMMARY.md` — FOUND

**Commits (4 of 4 FOUND in git log):**
- `a13ab24` (Task 1 .gitignore) — FOUND
- `7ef3c20` (Task 2 .gitattributes + STACK.md amendment) — FOUND
- `fd08de5` (Task 3 .editorconfig) — FOUND
- `43842b2` (Task 4 LICENSE) — FOUND

---
*Phase: 02-infrastructure-repo-setup*
*Plan: 01 (repo-hardening-files)*
*Completed: 2026-05-16*
