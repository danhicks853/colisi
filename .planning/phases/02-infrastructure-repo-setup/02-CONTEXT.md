# Phase 2: Infrastructure & Repo Setup - Context

**Gathered:** 2026-05-11
**Status:** Ready for planning

<domain>
## Phase Boundary

Lock the parts of project infrastructure that are *irreversible-ish* — the kind where retrofitting costs days or weeks of cleanup after Phase 3 starts creating the Godot project + producing assets. By end of phase, the repo is hardened against the next 4-6 years of solo development:

- Binary assets cannot bloat the repo (LFS configured + verified)
- The engine cannot pollute commits (.gitignore Godot-tuned + verified)
- Project structure is documented (CONVENTIONS.md + naming rules locked BEFORE Phase 3 creates the Godot project so structure isn't retrofit)
- The repo is properly licensed and visible at the right level (LICENSE + .editorconfig)
- The work cannot vanish (backup tested with documented restore procedure)
- CI catches import errors before they merge (or explicitly deferred to Phase 3 with rationale)
- README / CONTRIBUTING / CHANGELOG skeletons exist
- Privacy review on `PERSONA.md` complete

**This phase delivers infrastructure, not code.** No Godot project initialization yet — that's Phase 3 (Project Skeleton & Foundational Systems). This phase makes Phase 3's start unambiguous and unblocked.

Phase 2 requirements: **INFRA-01 through INFRA-11** (INFRA-03 GitHub remote already DONE 2026-05-09; remaining 10 are this phase's scope).

Out of scope for Phase 2:
- Any Godot project creation (Phase 3)
- Any actual asset creation or content (Phase 3-6)
- MKTG-02 devlog launch (Phase 2 *companion* deliverable per Year-3-Wall public-commitment timing — see Phase 2 scope discussions about MKTG-02 cadence)
- Standardized LLM tripwire prompt publication (already drafted + Daniel-signed 2026-05-11 at `.planning/tripwire-review-prompt.md`; Phase 2 publishes it via MKTG-02 devlog)

</domain>

<decisions>
## Implementation Decisions

### Art-Source Repo Structure

- **D-INFRA-art-1: Single repo + LFS for everything (Option A).** Main `colisi` repo holds both code AND DCC source files (.blend, .psd, .kra, music project files, Audacity .aup3, etc.) tracked via Git LFS. Migration to Option B (separate `colisi-art-source` repo) is preserved as a future-option but NOT committed during Phase 2. Rationale: Simpler workflow for solo dev; one clone, one mental model. Quota cost is manageable ($5/mo GitHub Data Pack 50GB when needed; ~$60-360 total over 4-6yr horizon if needed).

- **D-INFRA-art-2: LFS quota upgrade is reactive, not pre-paid.** Trigger: when GitHub storage or bandwidth hits ~80% of free tier (1GB storage / 1GB per-month bandwidth). Likely fires during Phase 6 (slice content production). Phase 2 documents the upgrade procedure (1-click in GitHub billing); no pre-purchase.

- **D-INFRA-art-3: Third-tier backup is quarterly tarball to cloud drive (manual, automation deferred).** Quarterly cadence: once per Q, Daniel runs `git archive` or equivalent of working tree + uploads to Google Drive (per D-INFRA-bkp-1 below) in a folder separate from the daily cloud-sync. Pairs with GitHub primary + Google Drive cloud-sync secondary as third-tier deep backup. Automation script (PowerShell, cross-platform) deferred to Phase 6+ when there's substantial content worth automating; Phase 2 documents the manual procedure.

### CONVENTIONS.md (Godot Project Layout + Naming)

- **D-INFRA-conv-1: Top-level Godot project organization = by-type.** Folder structure (when Phase 3 creates the Godot project):
  - `res://scenes/` — `.tscn` scene files (with scene-paired scripts per D-INFRA-conv-3)
  - `res://scripts/` — utility / autoload / shared base-class scripts (NOT scene-paired scripts)
  - `res://assets/` — split into `art/` (textures, sprites, UI graphics, fonts), `audio/` (music, SFX), `models/` (3D `.glb`)
  - `res://addons/` — installed addons (Dialogic 2, GUT, GodotSteam GDExtension, Mixamo Retargeter)
  - `res://autoloads/` — singleton scripts (EventBus, GameState, SaveManager, TimeService, Settings, DialogueManager per ARCHITECTURE.md)
  - `res://resources/` — Custom Resource data files (`.tres` dev / `.res` ship) per locked save-system decision
  - `res://dialogue/` — Dialogic `.dtl` files (per character / arc — Phase 4+ content)
  - `res://translations/` — CSV translation tables (Phase 3) + later PO files
  - `res://animations/` — per-character + shared animation library resources per D-INFRA-conv-4
  - Rationale: Godot-canonical pattern; mirrors official examples; easier learning curve for beginner solo dev; established cognitive map for the next 4-6 years.

- **D-INFRA-conv-2: File-naming convention = snake_case for everything.** All files: scenes (`village_square.tscn`), scripts (`dialog_manager.gd`), resources (`save_data.tres`), assets (`baker_idle_anim.glb`, `village_square_albedo.png`). Per Godot official style guide. Case-insensitive-filesystem safe (Windows + macOS). Trade-off: scripts that define `class_name DialogManager` don't visually match their `dialog_manager.gd` filename; accepted because Godot's tooling expects this pattern.

- **D-INFRA-conv-3: Scene + script pairing = same folder (co-located).** A `.tscn` and its primary `.gd` live in the same directory: `scenes/dialog/dialog_manager.tscn` + `scenes/dialog/dialog_manager.gd`. `res://scripts/` is reserved for: shared utility scripts (data structures, helpers), the 5 autoload scripts + DialogueManager, shared base classes that multiple scenes inherit from. Rationale: scene + its script always discovered together; refactoring stays atomic; mirrors Godot's right-click-create-script default behavior.

- **D-INFRA-conv-4: Animation library = per-character + shared library pattern.** Path structure: `res://animations/<character_slug>/` for per-character library resources (e.g., `res://animations/baker/baker_idle.res`, `res://animations/baker/baker_work_oven.res`). `res://animations/_shared/` for animations reusable across characters (common walk cycle, common idle variants). Pairs with STACK.md retargeting strategy: one canonical skeleton + bone maps + per-character library resources. Phase 4-6 lands the per-character content.

### Privacy & Public Repo

- **D-INFRA-priv-1: PERSONA.md stays public as-is.** Dawn's interview quotes remain in the public repo at `.planning/research/PERSONA.md`. Rationale: AI-DISCLOSURE.md open-transparency ethos extends to research artifacts; "Daniel's wife" subject is already public via PROJECT.md so anonymity isn't achievable anyway; maximum research credibility for downstream community engagement. Decision recorded per criterion 11 requirement ("the call has been *made* and recorded"). Dawn's consent: discussed informally; no separate consent doc required (per D-INFRA-priv-2 below).

- **D-INFRA-priv-2: Consent record is informal (no separate consent doc).** Daniel + Dawn alignment on PERSONA.md public exposure is informal. No `.local/persona-consent.md` or similar formal artifact required. If circumstances change in the future (relationship, comfort level, marketing pivot), the decision is reversible at the cost of: (a) move PERSONA.md to `.local/` ignored path; (b) git history scrub via BFG Repo-Cleaner if full removal desired (acknowledged cost). No proactive revisit checkpoint; decision stands until either Daniel or Dawn raises it.

### Backup Strategy

- **D-INFRA-bkp-1: Cloud-sync target = Google Drive.** 15GB free baseline; $1.99/mo for 100GB if needed. Working directory cloud-synced to Google Drive (folder-level sync, not whole drive). Cross-platform; survives if Windows ecosystem changes. Drive desktop client required.

- **D-INFRA-bkp-2: Restore-test cadence = at end of Phase 2 + quarterly retest from there.** Phase 2 deliverable includes a documented restore procedure + actual restore test (fresh clone from GitHub + Google Drive recovery on a different folder path; LFS verification). Restore-test result logged. Quarterly retest from there as ongoing discipline (per monthly retro / quarterly review cadence). Rationale: ensures backup workflow stays alive; catches silent failures (cloud-sync excluding a folder, LFS quota lockout, GitHub auth expiry) before they're needed in a real recovery.

### Claude's Discretion

The following Phase 2 deliverables are under standard Godot/STACK.md spec; Claude can plan/execute without further input:

- **`.gitignore`** — Godot 4 standard pattern per STACK.md (excludes `.godot/`, `.import/`, OS clutter, build configs, export-preset secrets, etc.)
- **`.gitattributes`** — LFS-track binary extensions per STACK.md spec (.png, .jpg, .ogg, .wav, .mp3, .glb, .gltf, .blend, .fbx, .ttf, .otf, .exr, .hdr, binary `.tres`/`.res`)
- **`.editorconfig`** — cross-platform standard (LF line endings, GDScript indentation, trailing whitespace handling)
- **`LICENSE`** — default per criterion 6: All Rights Reserved + future-relicensing note (closed-source commercial game; source visibility only)
- **`README.md`** — already has survey CTA + AI disclosure; Phase 2 adds setup-for-contributors section (links to DEV-ENVIRONMENT.md + STACK.md + CLAUDE.md)
- **`CONTRIBUTING.md`** — solo-dev-of-future conventions; no expected outside contributors near-term
- **`CHANGELOG.md`** — Keep-A-Changelog skeleton; first entry references Phase 1 milestone
- **Minimal CI** (`.github/workflows/godot-import-check.yml`) — scaffold the workflow file in Phase 2 OR defer to Phase 3 (criterion 9 allows defer if Godot project not yet initialized); Claude picks based on best-implementation path during planning
- **Optional `.vscode/` settings** — if useful for cross-machine consistency; skip if Daniel doesn't use VS Code as primary editor (Godot built-in editor is primary per STACK.md)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents (researcher, planner, executor) MUST read these before planning or implementing Phase 2.**

### Phase 2 source documents
- `.planning/ROADMAP.md` §"Phase 2: Infrastructure & Repo Setup" (lines 130-147) — full success criteria definition + 11 INFRA requirements
- `.planning/REQUIREMENTS.md` §"Infrastructure & Repository" + INFRA-01..11 — REQ-level acceptance criteria
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — Phase 1 locked decisions (especially D-SCOPE-28 Greenlight gate, D-SUST-01..08 sustainable-pace)

### Tech stack + architecture (locked Phase 1)
- `.planning/research/STACK.md` — Godot 4.5.x + GDScript + Blender + glTF pipeline; Git LFS spec; .gitignore + .gitattributes patterns; tooling lock
- `.planning/research/ARCHITECTURE.md` — 5 autoloads (EventBus / GameState / SaveManager / TimeService / Settings) + DialogueManager; performance budgets (200 draw calls, 100k visible verts on integrated GPU)
- `.planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/25-stack-ratification.md` — Daniel-signed stack ratification (Phase 2+ consumes this verbatim; no re-litigation)
- `.planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/26-architecture-ratification.md` — Daniel-signed architecture ratification

### Existing repo state
- `README.md` — current state (capsule pitch + survey CTA + AI disclosure summary)
- `CLAUDE.md` — load-bearing rules + hard guardrails (Section 1 AI policy; Section 3 cozy promise; Section 5 Six Words)
- `PHILOSOPHY.md` — project constitution (governance + amendment process)
- `AI-DISCLOSURE.md` — public AI use disclosure (consistent with PERSONA.md public-decision)
- `DEV-ENVIRONMENT.md` — local-machine setup procedure (Windows 11 + winget commands); Phase 2 does NOT redo this
- `.planning/SCOPE.md` — 17 architectural commits (rows 1-17); Phase 2 may add rows for backup-strategy + privacy-decision logs
- `.planning/STATE.md` — current state; Phase 2 transition gate after Greenlight (plan 01-08)

### Architectural commits relevant to Phase 2
- SCOPE row 16 (Pillar 3 polish-as-accessibility) — INFLUENCES the autosave granularity, save reliability commitments in Phase 3+ but ALSO sets the bug-anti-clause that Phase 2's CI scaffolding supports
- SCOPE row 17 (Pillar 2 anti-clause extension: no real-time-timer / real-world-clock gating) — INFLUENCES Phase 3+ design but no direct Phase 2 implementation

### Out-of-scope reference (not consumed by Phase 2 but referenced)
- `.planning/tripwire-review-prompt.md` v1.0 (Daniel-signed 2026-05-11; immutable) — D-WALL-05 hybrid primary tier; Phase 2 publishes this via MKTG-02 devlog launch (if MKTG-02 lands in Phase 2 — actual MKTG-02 timing per ROADMAP.md may be Phase 3+)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets (none — no code exists yet)

Phase 1 produced no code or binary content. Phase 2 is the first phase to create repository infrastructure files. Phase 3 is the first phase to create actual Godot project files.

### Established Patterns (Phase 1 documentation + planning)

- **Markdown-heavy `.planning/` discipline** — every architectural decision logged with rationale in SCOPE.md; every plan has SUMMARY.md; cross-references throughout. Phase 2 documentation discipline follows this pattern.
- **AI-policy boundary respected at every authoring boundary** — Claude provides structure + technical synthesis; Daniel authors all creative content. Phase 2 deliverables are largely procedural + technical (no creative content), so Claude-authored is appropriate for most.
- **Atomic commits with detailed messages** (per commit history through Phase 1) — Phase 2 commits should follow same pattern (one logical change per commit; commit message describes WHY + cross-references SCOPE/REQUIREMENTS as applicable).

### Integration Points (where Phase 2 outputs connect)

- **Phase 3 (Project Skeleton)** — consumes CONVENTIONS.md folder structure + naming + scene-script pairing + animation library pattern. Phase 3's first action is initializing the Godot project at `res://` per these conventions.
- **Phase 6 (Slice Content Production)** — consumes LFS configuration + art-source repo decision; first phase to actually exercise LFS at scale.
- **MKTG-02 devlog launch (per Phase 2 success criteria scope or Phase 3 depending on plan)** — consumes README.md + AI-DISCLOSURE.md as the public-facing presence; publishes `.planning/tripwire-review-prompt.md` v1.0.

### Repo state at Phase 2 start

- **Existing files at repo root:** README.md / CLAUDE.md / PHILOSOPHY.md / AI-DISCLOSURE.md / DEV-ENVIRONMENT.md
- **Existing `.planning/` structure:** PROJECT.md / REQUIREMENTS.md / ROADMAP.md / SCOPE.md / STATE.md / config.json / research/ / phases/ / playtest-log/ / persona-zero-emergent-feedback.md / slice-debt.md / tripwire-review-prompt.md
- **Missing files (Phase 2 creates):** .gitignore / .gitattributes / .editorconfig / LICENSE / CONVENTIONS.md / CONTRIBUTING.md / CHANGELOG.md / .github/workflows/ (potentially)
- **INFRA-03 (GitHub remote)** — DONE 2026-05-09; remaining 10 INFRA reqs pending Phase 2 execution

</code_context>

<specifics>
## Specific Ideas

- **Daniel's environment:** Windows 11 + PowerShell + Git Bash. .editorconfig + .gitattributes must respect cross-platform safety (LF line endings universal).
- **Daniel + Dawn pre-aligned on PERSONA.md public:** informal discussion already happened; no separate consent record. Decision stands until either raises it.
- **STACK.md is the technical spec source of truth:** `.gitignore` + `.gitattributes` + `.editorconfig` patterns come from STACK.md (no re-litigation; planner can copy verbatim).
- **DEV-ENVIRONMENT.md is reference for local-machine setup:** Phase 2 does NOT recreate or duplicate; references it from README.md if helpful.
- **README.md current state has survey CTA + AI disclosure at top:** Phase 2 ADDS sections (setup-for-future-contributors, project-status, structure-overview) — does not replace existing content.

</specifics>

<deferred>
## Deferred Ideas

The following items came up but belong in other phases or are explicit Claude-discretion under known constraints:

- **CI workflow file (godot-import-check.yml) timing** — Claude-discretion during Phase 2 planning whether to scaffold the workflow file now (with no actual Godot project to import-check) or defer entirely to Phase 3. Default lean: scaffold in Phase 2 with a comment explaining it activates when Phase 3 lands.
- **LICENSE wording specifics** — Daniel chose default (All Rights Reserved + future-relicensing note per criterion 6). No deeper licensing discussion needed at Phase 2; could revisit at Phase 7 (Steam page) or Phase 8 (commercial launch) if source-available framing or dual-license becomes relevant.
- **README/CONTRIBUTING/CHANGELOG content depth** — Daniel selected "Claude-discretion under locked principles." Claude plans these per Phase 2 spec; if Daniel wants specific framing, surfaces during execute-phase review.
- **Quarterly tarball backup automation script** — Daniel approved manual quarterly tarball; automation script deferred to Phase 6+ when content scale justifies the investment. Phase 2 documents manual procedure.
- **Migration to Option B art-source repo** — only if LFS quota becomes unsustainably expensive. Not a Phase 2 commitment; preserves future flexibility.
- **MKTG-02 devlog timing** — referenced in Phase 2 success criterion (Year-3-Wall public commitment + tripwire prompt publication need MKTG-02). Actual MKTG-02 plan timing TBD: Phase 2 plan-phase decides whether MKTG-02 launch is Phase 2 scope or Phase 3+ (per REQUIREMENTS.md MKTG-02: "launches by month 3 of development" — month 3 from now puts it likely Phase 2-3 boundary).
- **PERSONA.md privacy decision revisit** — D-INFRA-priv-2: no proactive revisit checkpoint; reversibility cost known. Daniel + Dawn can raise at any time.

### Reviewed Todos (not folded)

None — todo cross-reference returned 0 matches for Phase 2.

</deferred>

---

*Phase: 02-infrastructure-repo-setup*
*Context gathered: 2026-05-11*
*Discussion log: `.planning/phases/02-infrastructure-repo-setup/02-DISCUSSION-LOG.md`*
