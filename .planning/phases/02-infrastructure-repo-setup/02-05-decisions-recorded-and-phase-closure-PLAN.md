---
phase: 02-infrastructure-repo-setup
plan: 05
type: execute
wave: 3
depends_on:
  - 02-infrastructure-repo-setup/01
  - 02-infrastructure-repo-setup/02
  - 02-infrastructure-repo-setup/03
  - 02-infrastructure-repo-setup/04
files_modified:
  - .planning/PROJECT.md
  - .planning/SCOPE.md
  - .planning/STATE.md
  - .planning/REQUIREMENTS.md
autonomous: true
requirements:
  - INFRA-03
  - INFRA-08
  - INFRA-11

must_haves:
  truths:
    - "PROJECT.md Key Decisions section contains a row for D-INFRA-art-1 (single repo + LFS art-source split decision) per ROADMAP.md criterion 8 'Decision recorded in PROJECT.md Key Decisions'"
    - "PROJECT.md Key Decisions section contains a row for D-INFRA-priv-1 (PERSONA.md stays public; informal consent) per ROADMAP.md criterion 11 'Privacy review is complete. Decision recorded.'"
    - "SCOPE.md has 1 new row (row 18) logging Phase 2 infrastructure lock — art-source decision + privacy decision + backup strategy + CONVENTIONS.md as a combined Phase-2-completion entry per HEALTH-01 discipline"
    - "REQUIREMENTS.md INFRA-01..11 entries all updated: INFRA-03 marked complete (was already done; just propagate); INFRA-01, 02, 04, 05, 06, 07, 09, 10 marked complete with Phase 2 plan references; INFRA-08 marked recorded; INFRA-11 marked recorded"
    - "STATE.md updated to reflect Phase 2 substantially complete (or fully complete); current-position moves to Phase 3 entry"
  artifacts:
    - path: ".planning/PROJECT.md"
      provides: "Key Decisions table updated with D-INFRA-art-1 and D-INFRA-priv-1 rows"
      contains: "D-INFRA-art-1"
    - path: ".planning/SCOPE.md"
      provides: "Row 18 logging Phase 2 infrastructure lock"
      contains: "Phase 2"
    - path: ".planning/STATE.md"
      provides: "Updated current-position to Phase 3 entry-pending or Phase 2 complete"
      contains: "Phase 2"
    - path: ".planning/REQUIREMENTS.md"
      provides: "INFRA-01..11 status updates with Phase 2 plan cross-references"
      contains: "INFRA-01"
  key_links:
    - from: ".planning/PROJECT.md Key Decisions D-INFRA-art-1 row"
      to: ".planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md D-INFRA-art-1..3"
      via: "Direct decision-ID cross-reference"
      pattern: "D-INFRA-art-1"
    - from: ".planning/PROJECT.md Key Decisions D-INFRA-priv-1 row"
      to: ".planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md D-INFRA-priv-1..2"
      via: "Direct decision-ID cross-reference"
      pattern: "D-INFRA-priv-1"
    - from: ".planning/SCOPE.md row 18"
      to: "All 4 Phase 2 plans (02-01 through 02-04)"
      via: "Aggregate Phase 2 completion log entry"
      pattern: "Phase 2"
    - from: ".planning/REQUIREMENTS.md INFRA-01..11"
      to: "Plans 02-01 through 02-04"
      via: "Per-INFRA cross-reference annotation (e.g., '(Phase 2 plan 02-01 complete)')"
      pattern: "Phase 2 plan"
---

<objective>
Final-mile integration plan for Phase 2: record the load-bearing decisions in PROJECT.md (the project-level decision ledger, separate from CONTEXT.md which is phase-scoped), log a Phase 2 completion row in SCOPE.md per HEALTH-01 discipline, propagate INFRA-XX completion status to REQUIREMENTS.md, and update STATE.md to reflect Phase 2 complete and Phase 3 ready to plan.

Purpose: ROADMAP.md Phase 2 success criterion 8 ("Decision recorded in PROJECT.md Key Decisions") and criterion 11 ("the call has been made and recorded") explicitly require these decisions to live in PROJECT.md, not just in CONTEXT.md. CONTEXT.md is the phase-scoped lock document; PROJECT.md is the project-level decision ledger that survives phase rotation. Plans 02-01 through 02-04 created the infrastructure; this plan makes the decisions findable for the next 4-6 years.

INFRA-03 (already-done GitHub remote from 2026-05-09) is reaffirmed here to close the Phase 2 INFRA-XX coverage loop and update REQUIREMENTS.md status if not already done.

Output: 4 file updates (PROJECT.md, SCOPE.md, STATE.md, REQUIREMENTS.md). No new files created.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/PROJECT.md
@.planning/SCOPE.md
@.planning/REQUIREMENTS.md
@.planning/ROADMAP.md
@.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md
@PHILOSOPHY.md

<interfaces>
<!-- This plan depends on outputs from all 4 prior Phase 2 plans -->

From plan 02-01 (Wave 1): .gitignore, .gitattributes, .editorconfig, LICENSE created
From plan 02-02 (Wave 1): CONVENTIONS.md, CONTRIBUTING.md, CHANGELOG.md created; README.md updated
From plan 02-03 (Wave 2): LFS verification + .gitignore verification + CI scaffold
From plan 02-04 (Wave 3): BACKUP.md + restore test executed and logged

All artifacts must exist before this plan runs. Verify via the read_first step of Task 1.
</interfaces>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Record D-INFRA-art-1 and D-INFRA-priv-1 in PROJECT.md Key Decisions + close INFRA-XX in REQUIREMENTS.md</name>
  <files>.planning/PROJECT.md, .planning/REQUIREMENTS.md</files>
  <read_first>
    - .planning/PROJECT.md (entire file) — to locate the "Key Decisions" section structure and add rows in matching format
    - .planning/REQUIREMENTS.md §"Infrastructure & Repository" (INFRA-01..11) — to update status annotations
    - .planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md §"Art-Source Repo Structure" (D-INFRA-art-1..3) and §"Privacy & Public Repo" (D-INFRA-priv-1..2) — source decisions to record
    - .planning/ROADMAP.md Phase 2 success criteria 8 ("Decision recorded in PROJECT.md Key Decisions") + 11 ("the call has been made and recorded")
    - Verify Phase 2 plans 02-01 through 02-04 actually produced their artifacts on disk before running this task (Test-Path on key files: .gitignore, .gitattributes, .editorconfig, LICENSE, CONVENTIONS.md, CONTRIBUTING.md, CHANGELOG.md, BACKUP.md, .github/workflows/godot-import-check.yml). If any are MISSING, STOP — this plan needs prior waves complete.
  </read_first>
  <action>
    Two coordinated updates: PROJECT.md gets new Key Decision rows; REQUIREMENTS.md INFRA-XX rows get status annotations.

    **Step A: Update PROJECT.md**

    Read `.planning/PROJECT.md` to locate the "Key Decisions" section (likely under a heading like "## Key Decisions" or similar). PROJECT.md follows the project-decision-ledger pattern.

    Add two new rows (or two new bullet entries, matching the existing format in the file). The decision content:

    **Row 1 — Art-Source Repo Structure (D-INFRA-art-1..3):**
    - Date: 2026-05-11
    - Decision: Single repo + Git LFS for everything (Option A); separate `colisi-art-source` repo NOT created at Phase 2; LFS quota upgrade reactive at ~80% free tier (D-INFRA-art-2); quarterly tarball backup manual, automation deferred Phase 6+ (D-INFRA-art-3).
    - Rationale: Simpler workflow for solo dev; one clone, one mental model. Quota cost is manageable ($5/mo GitHub Data Pack 50GB when needed; ~$60-360 total over 4-6yr horizon if needed — well within $100 lifetime budget). Future migration to Option B (separate art-source repo) preserved if LFS quota becomes unsustainable.
    - Phase: 2 — Infrastructure & Repo Setup (closed 2026-05-11).
    - Reference: `.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md` §"Art-Source Repo Structure" + `BACKUP.md` §"1. The three-tier strategy".

    **Row 2 — PERSONA.md Public Visibility (D-INFRA-priv-1..2):**
    - Date: 2026-05-11
    - Decision: PERSONA.md (containing wife Dawn's interview quotes) stays in the public repo at `.planning/research/PERSONA.md`. Dawn's consent: discussed informally; no separate consent doc. Reversible at known cost (move to `.local/`, optional BFG history scrub). No proactive revisit checkpoint.
    - Rationale: AI-DISCLOSURE.md open-transparency ethos extends to research artifacts; "Daniel's wife" subject is already public via PROJECT.md so anonymity isn't achievable anyway; maximum research credibility for downstream community engagement. Decision recorded per ROADMAP.md Phase 2 criterion 11.
    - Phase: 2 — Infrastructure & Repo Setup (closed 2026-05-11).
    - Reference: `.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md` §"Privacy & Public Repo".

    **Format-matching:** Use Edit tool. First Read the existing Key Decisions section structure (it may be a markdown table, a bulleted list, or a sequence of H3 subsections). Match the existing format exactly when inserting the new rows. If unsure, use the same format as the most-recent prior entry in the section.

    **Step B: Update REQUIREMENTS.md**

    Read `.planning/REQUIREMENTS.md` §"Infrastructure & Repository" (lines around 12-24 per the current file).

    Append status annotations to each INFRA requirement using the existing pattern observed in the file (other phases' requirements that are complete use a `*(Status: ... )*` italicized parenthetical at the end of the requirement line; INFRA-03 already follows this pattern: `(DONE 2026-05-09)`. Match that pattern for the remaining 10 INFRA reqs):

    - **INFRA-01**: Append: ` *(COMPLETE 2026-05-11 plan 02-01 + verification plan 02-03: .gitattributes + LFS test PNG confirmed routing via git lfs ls-files + LFS pointer format verified.)*`
    - **INFRA-02**: Append: ` *(COMPLETE 2026-05-11 plan 02-01 + verification plan 02-03: .gitignore + test .godot/ directory confirmed ignored via git check-ignore exit 0.)*`
    - **INFRA-03**: Existing annotation kept (already shows `(DONE 2026-05-09)`); add cross-reference: ` *(Reaffirmed Phase 2 plan 02-05; SCOPE row 18.)*`
    - **INFRA-04**: Append: ` *(COMPLETE 2026-05-11 plan 02-04: BACKUP.md documents 3-tier strategy (D-INFRA-bkp-1..2 + D-INFRA-art-3); restore test executed on D:\\TestRestore path with 3 integrity checks PASS per restore-test-log.md.)*`
    - **INFRA-05**: Append: ` *(COMPLETE 2026-05-11 plan 02-02: CONVENTIONS.md at repo root documents folder structure (D-INFRA-conv-1) + snake_case naming (D-INFRA-conv-2) + scene+script pairing (D-INFRA-conv-3) + animation library pattern (D-INFRA-conv-4) + autoloads cross-ref to ARCHITECTURE.md.)*`
    - **INFRA-06**: Append: ` *(COMPLETE 2026-05-11 plan 02-01: LICENSE at repo root with All Rights Reserved + future-relicensing clause + third-party-assets clause + ML-training prohibition.)*`
    - **INFRA-07**: Append: ` *(COMPLETE 2026-05-11 plan 02-01: .editorconfig at repo root with LF default + GDScript tabs + markdown 2-space-preserve-trailing + Windows-batch CRLF.)*`
    - **INFRA-08**: Append: ` *(COMPLETE 2026-05-11 plan 02-05: D-INFRA-art-1 recorded in PROJECT.md Key Decisions — single repo + LFS; separate art-source repo deferred. SCOPE row 18.)*`
    - **INFRA-09**: Append: ` *(COMPLETE 2026-05-11 plan 02-03: .github/workflows/godot-import-check.yml scaffolded with Godot 4.5.2 pin + project.godot detection + LFS checkout + binary caching + error-line-scan; activates Phase 3 when project.godot lands.)*`
    - **INFRA-10**: Append: ` *(COMPLETE 2026-05-11 plan 02-02: README updated with Setup-for-future-contributors + Project structure sections; CONTRIBUTING.md created with 10 sections (workflow + commits + AI policy + slice-debt/SCOPE discipline); CHANGELOG.md created in Keep-A-Changelog v1.1.0 format.)*`
    - **INFRA-11**: Append: ` *(COMPLETE 2026-05-11 plan 02-05: D-INFRA-priv-1 recorded in PROJECT.md Key Decisions — PERSONA.md stays public, informal Dawn consent. SCOPE row 18.)*`

    **Also update the REQUIREMENTS.md Traceability table** (the per-REQ status table near the bottom; "Status" column for each INFRA-XX row goes from "Pending" to "Complete (2026-05-11 plan 02-XX)"):

    | Requirement | Phase | Status |
    |---|---|---|
    | INFRA-01 | Phase 2 | **Complete (2026-05-11 plan 02-01+02-03)** |
    | INFRA-02 | Phase 2 | **Complete (2026-05-11 plan 02-01+02-03)** |
    | INFRA-03 | Phase 2 | **Complete (DONE 2026-05-09; reaffirmed plan 02-05)** |
    | INFRA-04 | Phase 2 | **Complete (2026-05-11 plan 02-04)** |
    | INFRA-05 | Phase 2 | **Complete (2026-05-11 plan 02-02)** |
    | INFRA-06 | Phase 2 | **Complete (2026-05-11 plan 02-01)** |
    | INFRA-07 | Phase 2 | **Complete (2026-05-11 plan 02-01)** |
    | INFRA-08 | Phase 2 | **Complete (2026-05-11 plan 02-05)** |
    | INFRA-09 | Phase 2 | **Complete (2026-05-11 plan 02-03)** |
    | INFRA-10 | Phase 2 | **Complete (2026-05-11 plan 02-02)** |
    | INFRA-11 | Phase 2 | **Complete (2026-05-11 plan 02-05)** |

    Update the **Coverage** summary at the bottom of REQUIREMENTS.md (currently states "Complete: 3 (INFRA-03; HEALTH-01; HEALTH-02)"). New value: "Complete: 14 (all 11 INFRA-XX from Phase 2 + HEALTH-01 + HEALTH-02 + INFRA-03 was already pre-counted)". Compute precisely: pre-Phase-2 complete count was 3 (INFRA-03, HEALTH-01, HEALTH-02). Adding 10 more INFRA-XX (INFRA-01, 02, 04, 05, 06, 07, 08, 09, 10, 11) gives 13. Update Complete count to 13 and Pending count accordingly (was 92; now 92 - 10 = 82). Verify by counting `[x]` markers in REQUIREMENTS.md after edit.

    Use Edit tool for REQUIREMENTS.md (preserves existing content while modifying specific lines).
  </action>
  <verify>
    <automated>cd D:\Projects\game; $p = Get-Content .planning/PROJECT.md -Raw; $r = Get-Content .planning/REQUIREMENTS.md -Raw; ($p -match 'D-INFRA-art-1') -and ($p -match 'D-INFRA-priv-1') -and ($p -match 'PERSONA') -and ($r -match 'INFRA-01.*Complete') -and ($r -match 'INFRA-08.*Complete') -and ($r -match 'INFRA-11.*Complete') -and ($r -match 'plan 02-04')</automated>
  </verify>
  <acceptance_criteria>
    - PROJECT.md contains the literal phrase `D-INFRA-art-1` (the art-source decision ID)
    - PROJECT.md contains the literal phrase `D-INFRA-priv-1` (the privacy decision ID)
    - PROJECT.md contains a reference to PERSONA.md and the decision rationale
    - PROJECT.md contains the date `2026-05-11` (Phase 2 closure date)
    - REQUIREMENTS.md INFRA-01 line contains both `(COMPLETE` annotation and `plan 02-01` reference
    - REQUIREMENTS.md INFRA-02 line contains `(COMPLETE` and `plan 02-03`
    - REQUIREMENTS.md INFRA-04 line contains `(COMPLETE` and `plan 02-04`
    - REQUIREMENTS.md INFRA-05 line contains `(COMPLETE` and `plan 02-02`
    - REQUIREMENTS.md INFRA-08 line contains `(COMPLETE` and `plan 02-05`
    - REQUIREMENTS.md INFRA-09 line contains `(COMPLETE` and `plan 02-03`
    - REQUIREMENTS.md INFRA-11 line contains `(COMPLETE` and `plan 02-05`
    - REQUIREMENTS.md Traceability table has INFRA-01 through INFRA-11 marked as "Complete"
    - REQUIREMENTS.md `[ ]` for INFRA-01 through INFRA-11 have all been flipped to `[x]` (mark them complete in the v1 Requirements list per the existing checkbox pattern used by HEALTH-01 and HEALTH-02)
    - REQUIREMENTS.md Coverage summary "Complete: 13" (was 3) — count via `(Select-String -Path .planning/REQUIREMENTS.md -Pattern '^- \[x\]').Count` should return ≥ 13 (currently 3 + Phase 2 adding 10 = 13)
  </acceptance_criteria>
  <done>PROJECT.md Key Decisions section contains 2 new rows recording D-INFRA-art-1 + D-INFRA-priv-1 per ROADMAP.md criteria 8+11. REQUIREMENTS.md INFRA-01..11 all annotated with Phase 2 completion + plan cross-references; Traceability table updated; checkbox state flipped to `[x]`; Coverage summary count updated from 3 to 13.</done>
</task>

<task type="auto">
  <name>Task 2: Add SCOPE.md row 18 + update STATE.md for Phase 2 closure</name>
  <files>.planning/SCOPE.md, .planning/STATE.md</files>
  <read_first>
    - .planning/SCOPE.md (entire file) — to see existing 17 rows format and determine row 18 structure
    - .planning/STATE.md (entire file) — to update "Current Position" + "Active todos" + "Performance Metrics" + progress bars for Phase 2 closure
    - All 4 SUMMARY.md files from plans 02-01..02-04 if they exist (they may not yet — this plan might run before all SUMMARY.md files are written; in which case use the PLAN.md as source-of-truth for what was built)
    - PHILOSOPHY.md §"Amendment Process" — confirms SCOPE.md is the architectural-decision log; HEALTH-01 discipline
  </read_first>
  <action>
    **Step A: Add SCOPE.md row 18 (Phase 2 infrastructure lock — combined entry)**

    Read SCOPE.md to see the existing 17 rows' format (table or bulleted entries with date / decision / rationale / phase columns or sections). Match the format exactly.

    Add a new row/entry with:
    - **Row number / ID:** 18 (next in sequence after row 17 from Phase 1)
    - **Date:** 2026-05-11
    - **Phase:** 2 — Infrastructure & Repo Setup (closure)
    - **Title:** "Phase 2 infrastructure lock: art-source structure + privacy decision + backup strategy + Godot project conventions"
    - **Summary:** "Phase 2 closure batch entry — 4 plans complete (02-01 through 02-04) deliver the infrastructure spine for the next 4-6 years. Specifically locked: (a) **D-INFRA-art-1**: single repo + Git LFS for all binary assets including .blend / .psd / DAW project files; separate art-source repo deferred (D-INFRA-art-2/3 cover reactive LFS quota + manual quarterly tarball); (b) **D-INFRA-priv-1**: PERSONA.md stays in public repo (informal Dawn consent, no separate consent doc, reversible to `.local/` if circumstances change); (c) **D-INFRA-conv-1..4**: Godot project layout (by-type folders) + snake_case naming + scene+script co-location + per-character animation library pattern — locked BEFORE Phase 3 creates the Godot project so structure isn't retrofit; (d) **D-INFRA-bkp-1..2 + D-INFRA-art-3**: 3-tier backup (GitHub primary + Google Drive cloud-sync secondary + quarterly tarball tertiary) with restore-test executed and PASS on D:\\TestRestore path. **Verifications:** LFS routing tested (test PNG committed → confirmed as LFS pointer text + GitHub-side push); .gitignore semantics tested (.godot/ test dir confirmed ignored via git check-ignore exit 0); CI scaffolded (godot-import-check.yml with Phase 3 activation gate). **REQUIREMENTS.md:** INFRA-01..11 all marked Complete. **License:** All Rights Reserved + future-relicensing + ML-training prohibition + third-party-assets clause."
    - **Rationale:** "Phase 2 is irreversible-ish infrastructure that retroactive correction costs days/weeks of cleanup once Phase 3 creates the Godot project and Phase 6 produces actual binary assets. Locking the 8 D-INFRA-* decisions (art-1..3 + conv-1..4 + priv-1..2 + bkp-1..2) together as a Phase 2 closure entry per HEALTH-01 discipline; PROJECT.md gets the two ROADMAP.md-required individual rows (D-INFRA-art-1 per criterion 8 and D-INFRA-priv-1 per criterion 11)."
    - **References:** Plans 02-01 through 02-05 PLAN.md + SUMMARY.md files; CONTEXT.md 02-CONTEXT.md; ROADMAP.md Phase 2 success criteria 1-11.

    Use Edit tool. If the existing SCOPE.md format is a table, add a new row at the end. If it's a sequence of headed entries, add a new H3 (or matching-level) heading. Match the format exactly.

    **Step B: Update STATE.md**

    Update multiple sections in `.planning/STATE.md`:

    Section 1 — Frontmatter `progress`:
    ```yaml
    progress:
      total_phases: 12
      completed_phases: 1   # was 0; Phase 1 substantially complete (Greenlight gates closure but for plan-phase purposes, Phase 1 + Phase 2 are the substance)
      total_plans: 14       # was 9 (Phase 1: 9 plans); add 5 Phase 2 plans
      completed_plans: 12   # was 8 (Phase 1: 7 complete + 1 partial); add 4 Phase 2 plans (02-01..02-04); this plan (02-05) makes 5 but counts after it finishes
    ```
    Note: Adjust completed_plans count when this plan finishes; runtime adjustment is `completed_plans: 13` after 02-05 commits. State `13` to reflect post-plan state.

    Section 2 — "Last updated" line at top of body:
    Change from `**Last updated:** 2026-05-09 ...` (or current value) to: `**Last updated:** 2026-05-11 (after Phase 2 infrastructure lock — plans 02-01 through 02-05 complete; INFRA-01..11 all satisfied; Phase 3 ready to plan)`.

    Section 3 — "Current Position" block:
    Change from current Phase 01 / Plan 01-07 PARTIAL framing to:
    ```
    Phase: 02 (infrastructure-repo-setup) — COMPLETE
    Plan: 5 of 5 complete (02-01 repo hardening, 02-02 conventions+documentation, 02-03 LFS verification + CI scaffold, 02-04 backup + restore test, 02-05 decisions recorded + phase closure)
    **Milestone:** 1 of 2 (Vertical Slice)
    **Phase:** 2 of 12 — Infrastructure & Repo Setup COMPLETE 2026-05-11
    **Plan:** 02-05 (Decisions Recorded + Phase Closure) COMPLETE 2026-05-11
    **Next phase:** 03 (Project Skeleton & Foundational Systems) — gated on Phase 1 plan 01-08 Greenlight completion + Phase 2 transition checklist
    **Status:** Phase 2 closure complete; 11 INFRA requirements satisfied. Infrastructure spine in place: .gitignore + .gitattributes (LFS verified) + .editorconfig + LICENSE + CONVENTIONS.md (Godot folder structure locked BEFORE Phase 3) + CONTRIBUTING.md + CHANGELOG.md + README updates + BACKUP.md (3-tier strategy + restore test PASS) + .github/workflows/godot-import-check.yml (scaffolded; activates Phase 3). SCOPE.md row 18 logs the closure batch; PROJECT.md Key Decisions has D-INFRA-art-1 + D-INFRA-priv-1 rows. **Note:** Phase 1 plan 01-08 (Greenlight) is still pending and required to gate full M1 progression — this Phase 2 lock proceeds in parallel with Phase 1 closure work, per the Phase 1 partial-complete pattern observed since 2026-05-11.
    ```

    Section 4 — Progress bars:
    ```
    Phase 02 plans: [██████████] 5/5 complete
    Phase 01 plans: [███████▌░░] 7.5/9 (unchanged from prior STATE.md value — Phase 1 progress not modified by this plan)
    M1: [▓░░░░░░░] 1.5/8 phases (Phase 2 done; Phase 1 7.5/9 of plans done counts as ~0.83 phase; total ~1.5)
    M2: [          ] 0/4 phases (sketch only)
    v1: [▓░░░░░░░░░░░] 1.5/12 phases total
    ```
    (Progress bar character counts are approximate; match existing STATE.md style.)

    Section 5 — Requirements counter line:
    Update from `3/96 mapped requirements satisfied` (current value approximate) to: `13/105 mapped requirements satisfied + 1 ritual progressing` (3 prior complete + 10 new INFRA from Phase 2 = 13 of 105 — note REQUIREMENTS.md total was corrected from 96 to 105 in Phase 1 amendment batch 2026-05-11). Complete list: INFRA-01..11 + HEALTH-01 + HEALTH-02. Ritual-progressing: HEALTH-05.

    Section 6 — "Active todos" block:
    - Add: `- [x] Plan 02-01 (Repo hardening files): .gitignore + .gitattributes + .editorconfig + LICENSE — COMPLETE 2026-05-11`
    - Add: `- [x] Plan 02-02 (Conventions + Documentation): CONVENTIONS.md + CONTRIBUTING.md + CHANGELOG.md + README.md updates — COMPLETE 2026-05-11`
    - Add: `- [x] Plan 02-03 (LFS verification + CI scaffold): lfs-test.png LFS-routed + .godot/ ignored + .github/workflows/godot-import-check.yml — COMPLETE 2026-05-11`
    - Add: `- [x] Plan 02-04 (Backup + restore test): BACKUP.md + restore-test-log.md (3 integrity checks PASS) — COMPLETE 2026-05-11`
    - Add: `- [x] Plan 02-05 (Decisions recorded + phase closure): PROJECT.md + SCOPE.md row 18 + REQUIREMENTS.md INFRA-01..11 complete + STATE.md updated — COMPLETE 2026-05-11`
    - Existing `- [ ] Initialize Git LFS BEFORE first code commit` should be marked complete: `- [x] Initialize Git LFS BEFORE first code commit (COMPLETE 2026-05-11 plan 02-01 + verified plan 02-03)`
    - Add: `- [ ] Schedule quarterly restore-test retest 2026-08-11 (D-INFRA-bkp-2 cadence)`
    - Add: `- [ ] Plan Phase 3 (Project Skeleton & Foundational Systems) — gated on Phase 1 plan 01-08 Greenlight`

    Section 7 — "Session Continuity → Next session start":
    Update to:
    ```
    1. Read STATE.md (this file) for current position
    2. Confirm Phase 1 plan 01-08 (Greenlight) gate-status: if still pending, proceed with calendar-gated MKTG-06 verdict authoring + outside-reviewer cosign; if complete, proceed to step 3
    3. Run `/gsd:plan-phase 3` to begin Phase 3 plan generation
    4. Phase 3 creates the actual Godot project at the repo root — CONVENTIONS.md folder structure MUST be honored from the first `mkdir res://scenes`
    ```

    Use Edit tool for both files.
  </action>
  <verify>
    <automated>cd D:\Projects\game; $s = Get-Content .planning/SCOPE.md -Raw; $st = Get-Content .planning/STATE.md -Raw; ($s -match '18') -and ($s -match 'Phase 2 infrastructure lock') -and ($s -match 'D-INFRA-art-1') -and ($s -match 'D-INFRA-priv-1') -and ($s -match 'D-INFRA-conv') -and ($s -match 'D-INFRA-bkp') -and ($st -match 'Phase 02 plans:') -and ($st -match 'Phase 2 of 12') -and ($st -match '2026-05-11') -and ($st -match '02-01') -and ($st -match '02-04') -and ($st -match 'COMPLETE')</automated>
  </verify>
  <acceptance_criteria>
    - SCOPE.md contains a new row referencing the number `18`
    - SCOPE.md row 18 entry contains the literal phrase `Phase 2 infrastructure lock`
    - SCOPE.md row 18 references all 8 D-INFRA decision IDs (art-1, conv-1, priv-1, bkp-1 at minimum — content can use ranges like `D-INFRA-conv-1..4`)
    - SCOPE.md row 18 lists plans 02-01 through 02-04 (and 02-05) as references
    - STATE.md contains the phrase `Phase 02 plans: [██████████] 5/5` or equivalent progress-bar showing Phase 2 complete
    - STATE.md "Current Position" mentions `Phase 2 of 12` and `COMPLETE 2026-05-11`
    - STATE.md "Active todos" has 5 new `- [x]` entries for plans 02-01 through 02-05 (all marked complete)
    - STATE.md has the new `- [ ] Schedule quarterly restore-test retest 2026-08-11` todo
    - STATE.md frontmatter progress.completed_plans is `13` (post-this-plan-completion count: 8 Phase-1 + 5 Phase-2 = 13)
    - STATE.md "Next session start" steps reference `/gsd:plan-phase 3`
    - SCOPE.md and STATE.md both updated in this task (`git status` shows both as modified)
  </acceptance_criteria>
  <done>SCOPE.md row 18 added with Phase 2 closure batch entry referencing all 8 D-INFRA decisions + plans 02-01..02-05. STATE.md updated with Phase 2 progress bars at 5/5 + Active todos showing 5 complete Phase 2 plans + Phase 3 planning preparation in Next session start. Frontmatter completed_plans bumped to 13.</done>
</task>

<task type="auto">
  <name>Task 3: Atomic commit + push + final Phase 2 closure verification</name>
  <files>(no new files — git operations only)</files>
  <read_first>
    - Output of `git status` — to confirm exactly which files are pending commit from Tasks 1-2 of this plan (PROJECT.md, REQUIREMENTS.md, SCOPE.md, STATE.md should be the 4 modified files)
    - Output of `git log --oneline -15` — to confirm prior Phase 2 commits from plans 02-01 through 02-04 are all in history
    - `.planning/ROADMAP.md` Phase 2 success criteria 1-11 — for final read-down sanity check
  </read_first>
  <action>
    Final atomic commit for plan 02-05 + Phase 2 closure verification + push.

    **Step A: Verify exactly 4 files modified**
    ```powershell
    cd D:\Projects\game
    git status
    # Expected: 4 modified files — .planning/PROJECT.md, .planning/REQUIREMENTS.md, .planning/SCOPE.md, .planning/STATE.md
    # If any OTHER files modified (e.g., accidental edits to README.md or CONVENTIONS.md), STOP and investigate
    ```

    **Step B: Stage + commit atomically**
    ```powershell
    cd D:\Projects\game
    git add .planning/PROJECT.md .planning/REQUIREMENTS.md .planning/SCOPE.md .planning/STATE.md
    git commit -m "docs(02): record D-INFRA decisions in PROJECT.md + INFRA-01..11 complete (Phase 2 closure)"
    git push origin main
    ```

    **Step C: Final Phase 2 success-criteria checklist verification**

    Run a read-down against ROADMAP.md Phase 2 success criteria 1-11. For each, verify the corresponding artifact exists OR the explicit "decision recorded" rows in PROJECT.md / SCOPE.md / REQUIREMENTS.md confirm it.

    Verification one-liner (PowerShell):
    ```powershell
    cd D:\Projects\game
    Write-Host "=== Phase 2 Success Criteria Verification ===" -ForegroundColor Cyan

    # Criterion 1: Git LFS configured + verified
    $c1a = Test-Path .gitattributes
    $c1b = (git lfs ls-files) -match 'lfs-test\.png'
    Write-Host "1. Git LFS: .gitattributes exists=$c1a; test PNG LFS-routed=$([bool]$c1b)" -ForegroundColor (if ($c1a -and $c1b) { 'Green' } else { 'Red' })

    # Criterion 2: .gitignore Godot-tuned + verified
    $c2a = Test-Path .gitignore
    $c2b = (git check-ignore -v .planning/phases/02-infrastructure-repo-setup/verification/.godot/fake-cache-marker.txt 2>&1) -match '\.godot/'
    Write-Host "2. .gitignore: file exists=$c2a; .godot/ ignore verified=$([bool]$c2b)"

    # Criterion 3: GitHub remote (INFRA-03 already done)
    $c3 = (git remote get-url origin) -match 'colisi'
    Write-Host "3. GitHub remote: $c3"

    # Criterion 4: Backup + restore tested
    $c4a = Test-Path BACKUP.md
    $c4b = Test-Path .planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md
    Write-Host "4. Backup + restore test: BACKUP.md=$c4a; restore-test-log=$c4b"

    # Criterion 5: CONVENTIONS.md complete
    $c5 = Test-Path CONVENTIONS.md
    Write-Host "5. CONVENTIONS.md: $c5"

    # Criterion 6: LICENSE
    $c6 = (Get-Content LICENSE -Raw) -match 'All Rights Reserved'
    Write-Host "6. LICENSE: $c6"

    # Criterion 7: .editorconfig
    $c7 = (Get-Content .editorconfig -Raw) -match 'root = true'
    Write-Host "7. .editorconfig: $c7"

    # Criterion 8: Art-source decision recorded in PROJECT.md
    $c8 = (Get-Content .planning/PROJECT.md -Raw) -match 'D-INFRA-art-1'
    Write-Host "8. Art-source decision recorded in PROJECT.md: $c8"

    # Criterion 9: CI scaffolded
    $c9 = Test-Path .github/workflows/godot-import-check.yml
    Write-Host "9. CI scaffold: $c9"

    # Criterion 10: README + CONTRIBUTING + CHANGELOG
    $c10a = (Get-Content README.md -Raw) -match 'Setup for future contributors'
    $c10b = Test-Path CONTRIBUTING.md
    $c10c = Test-Path CHANGELOG.md
    Write-Host "10. README updated=$c10a; CONTRIBUTING.md=$c10b; CHANGELOG.md=$c10c"

    # Criterion 11: Privacy review recorded
    $c11 = (Get-Content .planning/PROJECT.md -Raw) -match 'D-INFRA-priv-1'
    Write-Host "11. Privacy decision recorded in PROJECT.md: $c11"

    # Final summary
    $allPass = $c1a -and $c1b -and $c2a -and $c2b -and $c3 -and $c4a -and $c4b -and $c5 -and $c6 -and $c7 -and $c8 -and $c9 -and $c10a -and $c10b -and $c10c -and $c11
    Write-Host ""
    if ($allPass) {
        Write-Host "=== PHASE 2 COMPLETE: All 11 success criteria PASS ===" -ForegroundColor Green
    } else {
        Write-Host "=== PHASE 2 INCOMPLETE: Some criteria FAIL — investigate ===" -ForegroundColor Red
    }
    ```

    Run the script. Capture the output. If ALL PASS, Phase 2 is closed. If any FAIL, surface the gap and do NOT mark Phase 2 closed — the failing criterion gets a new task or carry-forward.

    **Step D: Append the verification output to plan 02-05 SUMMARY draft notes**

    Save the script output as input for the SUMMARY.md that will be authored at output stage. Do not write SUMMARY.md in this task; reserve for the output section per template.
  </action>
  <verify>
    <automated>cd D:\Projects\game; (git log -1 --pretty=format:'%s') -match 'docs\(02\)' -and (git status --porcelain).Length -eq 0 -and (Test-Path .gitattributes) -and (Test-Path .gitignore) -and (Test-Path CONVENTIONS.md) -and (Test-Path CONTRIBUTING.md) -and (Test-Path CHANGELOG.md) -and (Test-Path LICENSE) -and (Test-Path .editorconfig) -and (Test-Path BACKUP.md) -and (Test-Path .github/workflows/godot-import-check.yml) -and ((Get-Content .planning/PROJECT.md -Raw) -match 'D-INFRA-art-1') -and ((Get-Content .planning/PROJECT.md -Raw) -match 'D-INFRA-priv-1')</automated>
  </verify>
  <acceptance_criteria>
    - `git status` reports clean working tree (`git status --porcelain` returns empty string)
    - `git log -1 --pretty=format:'%s'` (most recent commit subject) matches `docs(02):` prefix
    - All 11 ROADMAP.md Phase 2 success criteria pass when verified by the PowerShell script above
    - Most recent push to origin/main reflects the final Phase 2 commits (`git status -uno` shows "Your branch is up to date with 'origin/main'")
    - All 8 new/modified Phase 2 files exist at repo root: `.gitignore`, `.gitattributes`, `.editorconfig`, `LICENSE`, `CONVENTIONS.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `BACKUP.md`
    - `.github/workflows/godot-import-check.yml` exists
    - `.github/workflows/README.md` exists
    - `.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png` exists and is LFS-tracked
    - `.planning/phases/02-infrastructure-repo-setup/verification/VERIFICATION-LOG.md` exists with Verification A + B both PASS
    - `.planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md` exists
    - PROJECT.md contains `D-INFRA-art-1` and `D-INFRA-priv-1` (both Key Decision rows recorded)
    - SCOPE.md contains row 18 referencing `Phase 2 infrastructure lock`
    - REQUIREMENTS.md INFRA-01..11 all marked Complete with plan 02-XX cross-references
    - STATE.md shows Phase 2 5/5 plans complete
  </acceptance_criteria>
  <done>Final atomic commit pushed; clean working tree; all 11 ROADMAP.md Phase 2 success criteria verified PASS via the script run. Phase 2 closed. Phase 3 planning unblocked (pending Phase 1 plan 01-08 Greenlight as the M1 progression gate).</done>
</task>

</tasks>

<verification>
After all 3 tasks complete:

1. Verification one-liner from Task 3 must show all 11 criteria PASS.
2. `git log --oneline -15` should show the full Phase 2 commit history (estimated ~10 commits across all 5 plans).
3. PROJECT.md visually inspected — the two new Key Decision rows are correctly formatted matching the existing structure.
4. SCOPE.md visually inspected — row 18 follows the existing 17-row format.
5. REQUIREMENTS.md verified: all `[ ]` for INFRA-01..11 are now `[x]`; Traceability table column for each shows "Complete" with plan reference; Coverage summary shows complete count 13.
6. STATE.md Active todos visually inspected — 5 new Phase 2 plan entries present and marked `[x]`.

If any of the 11 ROADMAP success criteria FAILED during Task 3's script run, this is a BLOCKER for marking Phase 2 closed. Add a remediation entry to the SUMMARY.md and create a follow-up task before considering this plan done.
</verification>

<success_criteria>
- All 11 Phase 2 ROADMAP success criteria verifiably PASS
- PROJECT.md contains D-INFRA-art-1 + D-INFRA-priv-1 Key Decision rows (criteria 8 + 11)
- SCOPE.md row 18 logs the Phase 2 closure batch per HEALTH-01 discipline
- REQUIREMENTS.md INFRA-01..11 all marked Complete (10 newly + INFRA-03 reaffirmed)
- STATE.md reflects Phase 2 complete + Phase 3 planning unblocked
- Single atomic commit + push for this plan's 4 file updates
- Phase 2 closed; ready for Phase 3 planning (gated on Phase 1 plan 01-08 Greenlight per M1 progression order)
</success_criteria>

<output>
After completion, create `.planning/phases/02-infrastructure-repo-setup/02-05-decisions-recorded-and-phase-closure-SUMMARY.md`:
- What was built (4 file updates: PROJECT.md, SCOPE.md, REQUIREMENTS.md, STATE.md; commit SHA)
- Requirements satisfied (INFRA-08 art-source decision recorded; INFRA-11 privacy decision recorded; INFRA-03 reaffirmed for traceability)
- Decisions referenced (all 8 D-INFRA-*: art-1..3, conv-1..4, priv-1..2, bkp-1..2)
- Phase 2 closure status (all 11 ROADMAP success criteria PASS, captured from Task 3's verification script)
- Carry-forwards (Phase 1 plan 01-08 Greenlight still pending; quarterly restore-test next at 2026-08-11; Drive client install if it was a gap from plan 02-04)
- Downstream consumer (Phase 3 `/gsd:plan-phase 3` is unblocked from Phase 2 side; CONVENTIONS.md is its load-bearing entry point; .github/workflows/godot-import-check.yml activates on `project.godot` creation)

Additionally, create the Phase 2 overall closing artifact `.planning/phases/02-infrastructure-repo-setup/02-AUDIT.md` mirroring the Phase 1 audit file structure if Daniel's workflow uses one (check if `.planning/phases/01-foundations-vision-lock/01-AUDIT.md` exists for format reference; create a similar artifact summarizing the 11 INFRA reqs satisfied, the 8 D-INFRA decisions recorded, and the 5 plans completed).
</output>
