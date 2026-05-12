---
phase: 02-infrastructure-repo-setup
plan: 02
type: execute
wave: 1
depends_on: []
files_modified:
  - CONVENTIONS.md
  - CONTRIBUTING.md
  - CHANGELOG.md
  - README.md
autonomous: true
requirements:
  - INFRA-05
  - INFRA-10

must_haves:
  truths:
    - "CONVENTIONS.md exists at repo root documenting Godot project folder structure per D-INFRA-conv-1 (scenes/, scripts/, assets/{art,audio,models}/, addons/, autoloads/, resources/, dialogue/, translations/, animations/)"
    - "CONVENTIONS.md documents snake_case file-naming convention per D-INFRA-conv-2 (applies to ALL files)"
    - "CONVENTIONS.md documents scene + script pairing rule per D-INFRA-conv-3 (same folder, scripts/ reserved for utility/autoload/shared)"
    - "CONVENTIONS.md documents animation library pattern per D-INFRA-conv-4 (res://animations/<character_slug>/ + res://animations/_shared/)"
    - "CONTRIBUTING.md exists at repo root with solo-dev-future-self conventions (commit message format, branch model, PHILOSOPHY.md Amendment Process reference, SCOPE/slice-debt logging discipline)"
    - "CHANGELOG.md exists at repo root following Keep-A-Changelog format with [Unreleased] section + initial Phase 1 milestone entry"
    - "README.md updated with new sections: Setup-for-future-contributors, Project structure overview (high-level), Phase status (Phase 2 in progress)"
    - "Existing README.md survey CTA + AI disclosure + License section preserved unchanged"
  artifacts:
    - path: "CONVENTIONS.md"
      provides: "Phase 3 Godot project folder structure + naming rules (locked BEFORE Phase 3 creates the project)"
      contains: "snake_case"
    - path: "CONTRIBUTING.md"
      provides: "Solo-dev-of-future conventions for commits, branches, PHILOSOPHY.md amendment workflow"
      contains: "Amendment Process"
    - path: "CHANGELOG.md"
      provides: "Keep-A-Changelog format skeleton with Phase 1 milestone reference"
      contains: "Keep a Changelog"
    - path: "README.md"
      provides: "Updated with setup section + project structure + Phase 2 status (existing survey CTA + AI disclosure preserved)"
      contains: "Setup"
  key_links:
    - from: "CONVENTIONS.md folder structure"
      to: "02-CONTEXT.md D-INFRA-conv-1..4"
      via: "Decision-ID references in CONVENTIONS.md body"
      pattern: "D-INFRA-conv-[1-4]"
    - from: "CONTRIBUTING.md"
      to: "PHILOSOPHY.md Amendment Process"
      via: "Direct link reference"
      pattern: "Amendment Process"
    - from: "README.md setup section"
      to: "DEV-ENVIRONMENT.md"
      via: "Direct link reference"
      pattern: "DEV-ENVIRONMENT\\.md"
    - from: "CONVENTIONS.md autoloads pattern"
      to: ".planning/research/ARCHITECTURE.md 5 autoloads + DialogueManager"
      via: "Cross-reference to architecture doc + autoload list"
      pattern: "EventBus.*GameState.*SaveManager"
---

<objective>
Create three new project-root documentation files (CONVENTIONS.md, CONTRIBUTING.md, CHANGELOG.md) and update README.md with sections per INFRA-10 — locking in Godot project conventions BEFORE Phase 3 creates the Godot project so folder structure isn't retrofit, and establishing future-self-facing conventions for the next 4-6 years of solo development.

Purpose: CONVENTIONS.md is load-bearing for Phase 3 — every folder created in `res://` must match this doc. CONTRIBUTING.md captures the commit/branch/amendment discipline that's already been practiced through Phase 1 but never written down. CHANGELOG.md gives a stable format for milestone tracking from now through v1 launch. README.md updates surface project status and dev-setup pointer without disturbing the load-bearing survey CTA and AI disclosure.

Output: Three new files at repo root + 1 modified README.md.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/ROADMAP.md
@.planning/REQUIREMENTS.md
@.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md
@.planning/research/STACK.md
@.planning/research/ARCHITECTURE.md
@README.md
@CLAUDE.md
@PHILOSOPHY.md
@DEV-ENVIRONMENT.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create CONVENTIONS.md (Godot project conventions)</name>
  <files>CONVENTIONS.md</files>
  <read_first>
    - .planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md §"CONVENTIONS.md (Godot Project Layout + Naming)" → D-INFRA-conv-1..4 verbatim
    - .planning/REQUIREMENTS.md INFRA-05 → "Folder structure and naming conventions for the Godot project are documented in CONVENTIONS.md (where scenes / scripts / assets / addons live, plus naming rules for scenes, scripts, resources, dialogue files)"
    - .planning/research/ARCHITECTURE.md → 5 autoloads (EventBus, GameState, SaveManager, TimeService, Settings) + DialogueManager (this informs autoload list in CONVENTIONS.md)
    - .planning/research/STACK.md §"3D Art Pipeline (Blender → Godot)" → "Animation library pattern (do this from day one)" — pairs with D-INFRA-conv-4
  </read_first>
  <action>
    Create `CONVENTIONS.md` at repo root (D:\Projects\game\CONVENTIONS.md) with the structure below. This is a procedural/technical document — Claude-authored is appropriate per AI policy.

    Write the following sections in order:

    **Header section:**
    - H1 title: `# Colisi Project Conventions`
    - Subtitle/purpose: "Folder structure, naming, and code conventions for the Godot project. Locked **before** Phase 3 creates the Godot project so structure isn't retrofit. Source-of-truth for INFRA-05."
    - Authority line: "When this document and a downstream plan disagree, this document is authoritative. Amendments via PHILOSOPHY.md Amendment Process."
    - Status: "Locked 2026-05-11 per D-INFRA-conv-1..4 (02-CONTEXT.md)."

    **H2: ## 1. Folder Structure** (per D-INFRA-conv-1)
    Document each top-level folder under `res://` with one-paragraph description each. Include the EXACT list from D-INFRA-conv-1:
    - `res://scenes/` — `.tscn` scene files. Per D-INFRA-conv-3, scenes live with their paired script in the SAME folder (e.g., `scenes/dialog/dialog_manager.tscn` + `scenes/dialog/dialog_manager.gd`). Organize subfolders by domain: `scenes/dialog/`, `scenes/world/`, `scenes/ui/`, `scenes/player/`, etc.
    - `res://scripts/` — Utility / autoload / shared base-class scripts ONLY. NOT scene-paired scripts (those live with their scene per D-INFRA-conv-3). Examples: shared data structures, math helpers, the 5 autoload `.gd` files + DialogueManager.
    - `res://assets/art/` — 2D textures, sprites, UI graphics, fonts.
    - `res://assets/audio/` — Music files (OGG Vorbis) and SFX files (WAV for stings <2s, OGG for ambient loops). Per STACK.md §"Audio Sourcing & Production".
    - `res://assets/models/` — 3D `.glb` files exported from Blender per STACK.md §"3D Art Pipeline".
    - `res://addons/` — Installed addons. Expected residents (per STACK.md): Dialogue Manager (Nathan Hoad), GUT 9.x, GodotSteam GDExtension (Phase 12-ish), Mixamo Animation Retargeter (when needed).
    - `res://autoloads/` — The 5 singleton scripts + DialogueManager wrapper per ARCHITECTURE.md: `event_bus.gd`, `game_state.gd`, `save_manager.gd`, `time_service.gd`, `settings.gd`, `dialogue_manager.gd` (project-side facade over Nathan Hoad's addon).
    - `res://resources/` — Custom Resource data files (`.tres` dev / `.res` ship) per locked save-system decision. Includes `save_game_data.tres`-style files, item definitions, recipe data, dialogue conditions.
    - `res://dialogue/` — Dialogue source files. Format TBD by Phase 4 (Nathan Hoad Dialogue Manager uses its own format). Phase 4+ content.
    - `res://translations/` — `translations.csv` (Phase 3) + later `.po` files per STACK.md §"Localization".
    - `res://animations/` — Per-character + shared animation library resources per D-INFRA-conv-4. See Section 4 below.

    Add a closing sentence: "Rationale: Godot-canonical organization (mirrors official examples + community patterns); easier learning curve for beginner solo dev; established cognitive map for the next 4-6 years. Per D-INFRA-conv-1."

    **H2: ## 2. File Naming** (per D-INFRA-conv-2)
    State the rule plainly:
    - All files use `snake_case`. No exceptions.
    - Scenes: `village_square.tscn`, `dialog_manager.tscn`
    - Scripts: `dialog_manager.gd`, `player_controller.gd`
    - Resources: `save_data.tres`, `baker_recipe.tres`
    - Assets: `baker_idle_anim.glb`, `village_square_albedo.png`, `oven_sizzle.wav`
    - Folders: `scenes/dialog/`, `assets/art/ui/buttons/`

    Add the accepted trade-off:
    - "`class_name DialogManager` (PascalCase) inside `dialog_manager.gd` (snake_case) is the official Godot convention. The file name and the class name don't visually match. This is intentional — Godot's tooling (`preload`, `load`, auto-resource references) expects this pattern."

    Add the rationale paragraph: "Per Godot official style guide. Case-insensitive-filesystem safe (Windows + macOS). Phase 3 enforces this convention via convention check in `godot-import-check.yml` (per plan 02-04). Per D-INFRA-conv-2."

    **H2: ## 3. Scene + Script Pairing** (per D-INFRA-conv-3)
    Explain the rule:
    - A `.tscn` and its primary `.gd` live in the SAME folder.
    - Example: `scenes/dialog/dialog_window.tscn` + `scenes/dialog/dialog_window.gd`.
    - `res://scripts/` is reserved for: shared utility scripts (data structures, helpers), the 5 autoload scripts + DialogueManager, shared base classes that multiple scenes inherit from.

    Add examples table:
    | Pattern | Where it lives |
    |---|---|
    | Scene with its own script | `scenes/<domain>/<feature>.tscn` + `scenes/<domain>/<feature>.gd` |
    | Pure utility (no scene) | `scripts/util/<helper>.gd` |
    | Autoload singleton | `autoloads/<service>.gd` |
    | Custom Resource type definition (`extends Resource`) | `scripts/resources/<resource_type>.gd` |
    | Custom Resource data file (.tres) | `resources/<data_name>.tres` |

    Add rationale: "Scene + its script always discovered together; refactoring stays atomic; mirrors Godot's right-click-create-script default behavior. Per D-INFRA-conv-3."

    **H2: ## 4. Animation Library** (per D-INFRA-conv-4)
    Explain the pattern:
    - `res://animations/<character_slug>/` for per-character library resources. Example: `res://animations/baker/baker_idle.res`, `res://animations/baker/baker_work_oven.res`.
    - `res://animations/_shared/` for animations reusable across characters: common walk cycle, common idle variants, sit, wave, pick-up.
    - One canonical character skeleton with bone maps configured once (per STACK.md). Any retargeted animation library — Mixamo, Quaternius, hand-authored — drops onto the same skeleton.

    Add Phase context: "Phase 4-6 lands per-character animation content. Phase 3 lands the empty folders + the canonical skeleton. Per D-INFRA-conv-4 + STACK.md §"Animation library pattern (do this from day one)"."

    **H2: ## 5. Autoloads (Architecture Reference)**
    List the 6 autoloads with their purpose from ARCHITECTURE.md (one line each):
    - `EventBus` — Global signal bus for cross-system communication; nodes emit signals, autoloads route to interested receivers.
    - `GameState` — Authoritative store of all gameplay state (multi-axis relationships, world flags, NPC states). Read/write via mutations; never bypassed.
    - `SaveManager` — Custom Resource save format (`.tres` dev / `.res` ship); versioned schema; migration on load; atomic file write.
    - `TimeService` — In-game time-of-day + season + festival-week state. Action-driven advancement (no wall-clock).
    - `Settings` — Player preferences (audio buses, keybinds, graphics presets, locale). Persists via ConfigFile (INI) per STACK.md §"Save System Pattern".
    - `DialogueManager` (project facade) — Wraps Nathan Hoad's Dialogue Manager addon. Per Phase 1 stack-ratification, dialogue runtime reads/writes GameState autoload via mutations (the stateless-design decoupling).

    Note: "Detailed autoload responsibilities live in `.planning/research/ARCHITECTURE.md` (Daniel-signed 2026-05-10). This section is the cross-reference."

    **H2: ## 6. Save/Resource Convention**
    Brief reminder of STACK.md:
    - During development: text form (`.tres`) for clean diffs.
    - Shipped builds: binary form (`.res`) for size/speed.
    - Resource class definitions live in `scripts/resources/<resource_type>.gd` (per Section 3 table).
    - Resource data files live in `resources/<data_name>.tres`.
    - Save files specifically live in `user://` (Godot user-data path), NOT `res://`. Standard Godot rule.

    **H2: ## 7. Translation Keys** (per STACK.md §"Localization")
    Brief reminder:
    - `UPPER_SNAKE_CASE` keys grouped by area: `UI_BUTTON_START`, `DIALOG_NPC_BAKER_GREETING_01`, `ITEM_CARROT_NAME`, `ITEM_CARROT_DESC`.
    - All player-visible text routed through `tr("KEY_NAME")` from day one.
    - CSV format Phase 3 → PO migration Phase 10.

    **H2: ## 8. Open Items**
    Single bullet:
    - "GDScript style conventions (type-annotation policy, comment style, function-naming for private vs public) — Phase 3 plan landing point. Phase 2 locks folder structure + file naming; Phase 3 lands code-internals conventions during the actual scripting."

    **Footer:**
    - "Last updated: 2026-05-11 (Phase 2 initial creation per INFRA-05)"
    - "Source decisions: D-INFRA-conv-1..4 in `.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md`"
    - "Amendment process: PHILOSOPHY.md Amendment Process (every change logged to SCOPE.md)"

    Length target: 250-400 lines. Use Write tool.

    AI POLICY NOTE: This document is procedural/technical (folder structure, naming rules, autoload list from ARCHITECTURE.md). No creative content. Claude-authored is appropriate.
  </action>
  <verify>
    <automated>cd D:\Projects\game; $a = Get-Content CONVENTIONS.md -Raw; ($a -match '## 1\. Folder Structure') -and ($a -match '## 2\. File Naming') -and ($a -match '## 3\. Scene \+ Script Pairing') -and ($a -match '## 4\. Animation Library') -and ($a -match 'snake_case') -and ($a -match 'res://scenes/') -and ($a -match 'res://autoloads/') -and ($a -match 'res://animations/') -and ($a -match 'EventBus') -and ($a -match 'GameState') -and ($a -match 'D-INFRA-conv-1') -and ((Get-Content CONVENTIONS.md | Measure-Object -Line).Lines -ge 100)</automated>
  </verify>
  <acceptance_criteria>
    - File `CONVENTIONS.md` exists at repo root (`Test-Path D:\Projects\game\CONVENTIONS.md` returns True)
    - File contains H2 sections: `## 1. Folder Structure`, `## 2. File Naming`, `## 3. Scene + Script Pairing`, `## 4. Animation Library`, `## 5. Autoloads`, `## 6. Save/Resource Convention`, `## 7. Translation Keys`, `## 8. Open Items` (8 H2 sections minimum; `grep -c '^## ' CONVENTIONS.md` returns ≥ 8)
    - File contains the word `snake_case` (naming convention per D-INFRA-conv-2)
    - File contains all 9 top-level Godot folders: `res://scenes/`, `res://scripts/`, `res://assets/art/`, `res://assets/audio/`, `res://assets/models/`, `res://addons/`, `res://autoloads/`, `res://resources/`, `res://dialogue/`, `res://translations/`, `res://animations/`
    - File mentions all 5 architecture autoloads by name: `EventBus`, `GameState`, `SaveManager`, `TimeService`, `Settings`, plus `DialogueManager` facade
    - File contains decision-ID reference `D-INFRA-conv-1` (traceability per HEALTH-01 amendment process)
    - File contains decision-ID reference `D-INFRA-conv-2`
    - File contains decision-ID reference `D-INFRA-conv-3`
    - File contains decision-ID reference `D-INFRA-conv-4`
    - File mentions Phase 3 (the consumer phase)
    - File line count ≥ 100 lines (substantive documentation, not stub)
    - File uses LF line endings
  </acceptance_criteria>
  <done>CONVENTIONS.md created at repo root with 8 H2 sections covering folder structure (D-INFRA-conv-1), file naming (D-INFRA-conv-2), scene+script pairing (D-INFRA-conv-3), animation library (D-INFRA-conv-4), autoloads cross-reference to ARCHITECTURE.md, resource convention, translation keys, and Phase 3 open items.</done>
</task>

<task type="auto">
  <name>Task 2: Create CONTRIBUTING.md (solo-dev future-self conventions)</name>
  <files>CONTRIBUTING.md</files>
  <read_first>
    - .planning/REQUIREMENTS.md INFRA-10 → "CONTRIBUTING captures conventions for solo-Daniel-of-the-future"
    - .planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md §"Claude's Discretion" → CONTRIBUTING content depth Claude-discretion per Phase 2 spec
    - PHILOSOPHY.md (entire document) → Amendment Process is load-bearing for CONTRIBUTING reference
    - CLAUDE.md (entire document) → AI policy + load-bearing rules + GSD workflow enforcement section
    - Recent git commit history: `git log --oneline -20` from D:\Projects\game (commit message conventions already in practice)
  </read_first>
  <action>
    Create `CONTRIBUTING.md` at repo root (D:\Projects\game\CONTRIBUTING.md) with the structure below. Audience is future-Daniel (not an outside contributor — none expected near-term). Per AI policy, this is a procedural/technical document; Claude-authored is appropriate.

    Write these sections in order:

    **Header:**
    - H1: `# Contributing to Colisi`
    - Subtitle paragraph: "This document is primarily a **note from past-Daniel to future-Daniel** about how Colisi work happens. Outside contributors are not expected in the near term; if you are an outside contributor, the policies here still apply and the License (LICENSE) governs your contribution."
    - Authority line: "When this document and PHILOSOPHY.md disagree, PHILOSOPHY.md wins. When this document and CLAUDE.md disagree, CLAUDE.md wins (load-bearing rules)."

    **H2: ## 1. Who can contribute**
    - Solo developer Daniel Hicks is the sole intended contributor through at least Milestone 1 (vertical slice).
    - Outside contributions are not actively solicited but may be considered case-by-case. If you want to contribute, **open an issue first** describing what you'd like to work on. Do not submit a PR cold.
    - Outside contributions are accepted under the inbound-license assumption in `LICENSE` (allowing copyright holder to relicense as part of the project).

    **H2: ## 2. Workflow: GSD-based phase planning**
    - All non-trivial work happens through the GSD (Get Shit Done) workflow. See `CLAUDE.md` §"GSD Workflow Enforcement" for the rule.
    - Entry points: `/gsd:quick` (small fixes / docs / ad-hoc), `/gsd:debug` (investigation), `/gsd:execute-phase` (planned phase work).
    - Direct edits to the repo outside a GSD workflow are forbidden unless explicitly requested in the session.
    - Planning artifacts live in `.planning/`. Every phase has a directory with CONTEXT.md → PLAN.md → SUMMARY.md flow.

    **H2: ## 3. Commit conventions**
    Sub-section: ### Commit message format
    - Conventional Commits style (already in practice — see `git log`).
    - Format: `<type>(<scope>): <short description>`
    - Types in use: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`, `style`, `ci`.
    - Scope is usually the phase + plan: e.g., `feat(01-04): add slice scenario sketch`, `docs(infra): add .gitignore + .gitattributes`.
    - Body is multi-line markdown allowed; reference REQUIREMENTS.md IDs and SCOPE.md rows.
    - Example (from actual commit history):
      ```
      docs(02): create phase plan

      Creates 5 PLAN.md files for Phase 2 (Infrastructure & Repo Setup) per
      INFRA-01..11. Plans organized into 3 waves for parallel execution.
      ```

    Sub-section: ### Atomic commits
    - One logical change per commit. If a single commit message needs the word "and" between two unrelated changes, split the commit.
    - Pre-commit hooks (none configured Phase 2; may add in Phase 3+) must pass; do not bypass with `--no-verify` unless explicitly requested in the session.
    - Commits never amend prior commits unless explicitly requested. New commits only.

    Sub-section: ### AI-assistance disclosure
    - Substantive AI-assisted commits should be tagged. See `CLAUDE.md` §"Disclose AI assistance in commits".
    - Code-completion / refactor / lint-fix assistance is fine without disclosure.
    - AI-drafted full files (e.g., this CONTRIBUTING.md) get a `Co-Authored-By:` trailer or a body note.

    **H2: ## 4. Branch model**
    - **Trunk-based** development on `main` (single branch).
    - `main` is the source of truth (per INFRA-03).
    - Feature branches are optional; if used, branch name format `feat/<phase>-<plan>-<slug>` (e.g., `feat/02-01-repo-hardening`).
    - No long-lived feature branches; merge or delete within ~1 week.
    - Direct pushes to `main` are normal for solo work; this is not a team workflow.
    - **Force-push to `main` is forbidden** without explicit reason recorded in SCOPE.md.

    **H2: ## 5. Pull requests**
    - Outside contributors only: PRs from forks. Open an issue first (see §1).
    - Daniel: optional feature branches → PR for review-by-future-self (rarely worth the overhead for solo work).
    - PR template (when added Phase 3+): summary, requirements addressed, test plan, screenshots/recordings if UI.

    **H2: ## 6. Amendments to project foundations**
    Foundational documents — `PHILOSOPHY.md`, `PROJECT.md`, `ROADMAP.md`, `REQUIREMENTS.md`, locked decisions in `.planning/phases/*/CONTEXT.md` — change only via PHILOSOPHY.md §"Amendment Process".
    - Brief restatement: log the change in `.planning/SCOPE.md` with rationale and impact analysis, then update the source document.
    - Locked decisions (e.g., D-VISION-XX, D-INFRA-XX, D-SUST-XX) are **not** revisited casually. Reversal requires an explicit SCOPE.md entry titled "REVERSAL: <decision ID>".
    - The four hard guardrails (no real-time pressure mechanics, no real-time forward-timer gating, no real-world-clock-tied content, no AI-generated creative content) are immutable for v1; reversal requires reverting the affected SCOPE rows AND a CLAUDE.md update.

    **H2: ## 7. AI use policy (load-bearing — read this)**
    - Verbatim summary of CLAUDE.md §1 "AI Use Policy — Strict, Enforced by You (Claude)".
    - Refusal list: no AI-generated visual assets, audio assets, in-game writing, runtime procedural-template dialogue, level layouts as final artifacts, public-facing creative writing, unsolicited entity names.
    - Allowed: code autocomplete / refactor / bug-finding / lint, boilerplate code, planning artifacts, research synthesis, brainstorming, copy-check on Daniel's drafts, tooling scripts, localization-MT as starting point for human translator, learning-tool help, locating human-creator resources.
    - Enforcement: Claude is delegated to refuse — see CLAUDE.md for the four-step refusal protocol.

    **H2: ## 8. Slice-debt and SCOPE discipline**
    - Every shortcut taken for the slice goes in `.planning/slice-debt.md` per `HEALTH-02`. Format spec at top of that file.
    - Every architectural decision goes in `.planning/SCOPE.md` per `HEALTH-01`. Format spec at top of that file.
    - Silent slice-debt or silent scope changes are forbidden. If you skip the log, you owe yourself a retro entry explaining why.

    **H2: ## 9. Testing discipline**
    Brief sketch (full conventions Phase 3+):
    - Save/load round-trip, dialogue conditional evaluation, calendar/time logic, inventory math, crafting recipes, relationship state transitions get GUT tests per STACK.md §"Testing Approach".
    - Visual scenes, animation playback, shader output, UI exact layout do NOT get GUT tests.
    - Test cadence: run GUT before every commit that touches a tested system.

    **H2: ## 10. Sustainable pace (no hour tracking)**
    - This project is paced by milestones, not hours, per D-SUST-01..08.
    - There is no commit-velocity target.
    - Continuous nightly session ritual; monthly retro; quarterly review; bi-weekly persona-zero playtest (HEALTH-05).
    - If you (future-Daniel) feel burnout signals, see `.planning/phases/01-foundations-vision-lock/deliverables/process-pack/20-sustainable-pace-cadence.md` and the Year-3-Wall tripwires.

    **Footer:**
    - "Last updated: 2026-05-11 (Phase 2 initial creation per INFRA-10)"
    - "Source authority: PHILOSOPHY.md (governance) + CLAUDE.md (load-bearing rules)"
    - "Amendment: log to .planning/SCOPE.md, then edit this file."

    Length target: 200-300 lines. Use Write tool.
  </action>
  <verify>
    <automated>cd D:\Projects\game; $a = Get-Content CONTRIBUTING.md -Raw; ($a -match '## 1\.') -and ($a -match '## 7\. AI use policy') -and ($a -match 'GSD') -and ($a -match 'Amendment Process') -and ($a -match 'Conventional Commits') -and ($a -match 'slice-debt\.md') -and ($a -match 'SCOPE\.md') -and ((Get-Content CONTRIBUTING.md | Measure-Object -Line).Lines -ge 80)</automated>
  </verify>
  <acceptance_criteria>
    - File `CONTRIBUTING.md` exists at repo root (`Test-Path D:\Projects\game\CONTRIBUTING.md` returns True)
    - File contains at least 10 H2 sections (`grep -c '^## ' CONTRIBUTING.md` returns ≥ 10)
    - File contains the literal phrase `Conventional Commits` (commit format spec)
    - File contains the literal phrase `Amendment Process` (PHILOSOPHY.md reference)
    - File contains the literal phrase `GSD` (workflow enforcement per CLAUDE.md)
    - File contains the literal phrase `AI use policy` (load-bearing per CLAUDE.md §1)
    - File contains the literal phrase `slice-debt.md` (HEALTH-02 reference)
    - File contains the literal phrase `SCOPE.md` (HEALTH-01 reference)
    - File mentions `D-SUST` (sustainable pace decision IDs)
    - File line count ≥ 80 lines (substantive doc, not stub)
    - File uses LF line endings
  </acceptance_criteria>
  <done>CONTRIBUTING.md created at repo root with 10 H2 sections covering contributor scope, GSD workflow, commit conventions, branch model, PR process, foundational-doc amendment process, AI use policy summary, slice-debt/SCOPE discipline, testing, and sustainable pace.</done>
</task>

<task type="auto">
  <name>Task 3: Create CHANGELOG.md (Keep-A-Changelog skeleton)</name>
  <files>CHANGELOG.md</files>
  <read_first>
    - .planning/REQUIREMENTS.md INFRA-10 → "CHANGELOG follows Keep-A-Changelog format"
    - https://keepachangelog.com/en/1.1.0/ (Keep a Changelog v1.1.0 format spec — well-known; structure is: [Unreleased] + chronological [version] - YYYY-MM-DD entries with Added/Changed/Deprecated/Removed/Fixed/Security subsections)
    - .planning/STATE.md →  current phase status (Phase 1 of 12; 7 complete + 1 partial; INFRA-03 done 2026-05-09)
    - .planning/ROADMAP.md → milestone structure (M1 = vertical slice, M2 = full game)
  </read_first>
  <action>
    Create `CHANGELOG.md` at repo root (D:\Projects\game\CHANGELOG.md) with the following structure. This is purely formatting per Keep-A-Changelog v1.1.0 — Claude-authored is appropriate.

    Content:

    ```markdown
    # Changelog

    All notable changes to Colisi will be documented in this file.

    The format is based on [Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/),
    and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
    starting at v0.1.0 (vertical-slice ship) and v1.0.0 (full game launch).

    Phases 1-7 (pre-slice) are tracked here as **milestone entries**, not semver
    releases — the project has no playable build yet. Once the vertical slice
    ships publicly (Phase 8), every public release gets a semver version.

    ## [Unreleased]

    ### Added
    - Phase 2 infrastructure files: `.gitignore`, `.gitattributes` (Git LFS), `.editorconfig`, `LICENSE` (All Rights Reserved + future-relicensing note), `CONVENTIONS.md` (Godot project conventions per D-INFRA-conv-1..4), `CONTRIBUTING.md` (solo-dev future-self conventions), `CHANGELOG.md` (this file)

    ### Changed
    - `README.md` updated with setup-for-future-contributors section, project structure overview, and Phase 2 status (existing survey CTA + AI disclosure preserved)

    ## [Phase 1 milestone — Foundations & Vision Lock] - 2026-05-09 to (in progress)

    > Phase 1 is a planning phase, not a code phase. No playable build was produced. Documents and decisions only.

    ### Added (decisions and documents)
    - **Vision lock 2026-05-09**: Player is a magical helper-sprite; villagers each have their own magic that the sprite enables; matchmaking-via-environmental-manipulation is the central puzzle layer.
    - **9-plan Phase 1 plan set** (7 complete + 01-07 partial as of 2026-05-11)
    - **Vision Pack** (4 deliverables, plan 01-01): Vision Pitch, Pillars of Play, Core Fantasy, Anti-positioning
    - **Risk/Capability/Process Pack** (7 deliverables, plan 01-02): Risk Register, Capability Matrix, Tools/Pipeline Ratification, Stack Ratification, Architecture Ratification, Persona-zero Ritual, Sustainable-pace Cadence
    - **Loops & Journey Pack** (4 deliverables, plan 01-03): Core Loops, Player Journey, Pillar×Mechanic Matrix, Failure-mode Analysis
    - **Scenario Pack** (3 deliverables, plan 01-04): Slice Scenario, Wow Beats, 30-second Elevator Demo
    - **World & Style Pack** (3 deliverables, plan 01-05): World Bible v0.1, Mood Reference Deck, Style Guide v0.1
    - **Decision Locks & Tripwires** (4 files, plan 01-06): Year-3-Wall tripwires doc, Hour-200 retention doc, Time-model lock, year3wall-comparable-games research note
    - **MKTG-06 Validation** (plan 01-07, substantially complete 2026-05-11): 362 Steam reviews across 12 cozy life sims classified and Daniel-verified; survey published; verdict authoring pending
    - **17 architectural commits** to SCOPE.md across Phase 1 (D-VISION-09 NG+ time-loop, D-VISION-10 HOME 3-layer, D-VISION-11 stray-cat companion, D-VISION-12 Spritesight, D-VISION-13 any-to-any matchmaking, D-VISION-14 bidirectional tonal arc, Pillar 3 polish-as-accessibility, Pillar 2 anti-clause extension, more)
    - **27 REQUIREMENTS.md amendments** applied at Phase 1→2 transition
    - GitHub repo at `https://github.com/danhicks853/colisi.git` (INFRA-03, done 2026-05-09)
    - Public-facing survey at https://forms.gle/hnem8T62us8qn6qd7 (MKTG-06 data collection, started 2026-05-11)
    - HEALTH-05 ritual established; persona-zero (Dawn) session 1 logged 2026-05-10

    ### Removed
    - Procedural-template dialogue layer removed from Phase 9 scope (PROC-02 → Out-of-Scope per AI policy)
    - Stardew-killer marketing framing explicitly out-of-scope

    ## [Project initialized] - 2026-05-09

    ### Added
    - Initial repo structure under `.planning/`
    - `PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`, `config.json`
    - Research artifacts: `STACK.md`, `ARCHITECTURE.md`, `FEATURES.md`, `PERSONA.md`, `PITFALLS.md`, `SUMMARY.md`
    - Root-level governance: `PHILOSOPHY.md`, `AI-DISCLOSURE.md`, `CLAUDE.md`, `README.md`, `DEV-ENVIRONMENT.md`

    ---

    ## Versioning policy

    - **v0.0.x**: Pre-slice (Phases 1-7). Internal-only milestones tracked here.
    - **v0.1.0**: First public vertical slice (Phase 8 Steam page launch + Next Fest demo).
    - **v0.1.x**: Slice patches before full-game development resumes.
    - **v0.2.x → v0.9.x**: Milestone 2 content scaling milestones (Phases 9-11).
    - **v1.0.0**: Full game launch (Phase 12).
    - **v1.x.x**: Post-launch content updates and patches.
    - **v2.x.x**: Major content expansion if commercially warranted.

    See `.planning/ROADMAP.md` for phase definitions.

    ## Format

    Each release section uses Keep a Changelog v1.1.0 subsection types:

    - **Added** — new features
    - **Changed** — changes in existing functionality
    - **Deprecated** — soon-to-be-removed features
    - **Removed** — removed features (with rationale)
    - **Fixed** — bug fixes
    - **Security** — vulnerabilities fixed

    For pre-slice milestone entries (Phases 1-7), the same subsections apply to decisions, documents, and process changes — not yet to features users can experience.
    ```

    Use Write tool.
  </action>
  <verify>
    <automated>cd D:\Projects\game; $a = Get-Content CHANGELOG.md -Raw; ($a -match 'Keep a Changelog') -and ($a -match '## \[Unreleased\]') -and ($a -match 'Phase 1 milestone') -and ($a -match '2026-05-09') -and ($a -match '### Added') -and ($a -match 'Versioning policy') -and ((Get-Content CHANGELOG.md | Measure-Object -Line).Lines -ge 40)</automated>
  </verify>
  <acceptance_criteria>
    - File `CHANGELOG.md` exists at repo root (`Test-Path D:\Projects\game\CHANGELOG.md` returns True)
    - File contains `Keep a Changelog` link/reference
    - File contains `## [Unreleased]` section
    - File contains `## [Phase 1 milestone` or equivalent Phase 1 milestone entry
    - File contains `## [Project initialized] - 2026-05-09`
    - File contains at least one `### Added` subsection
    - File contains `Versioning policy` section
    - File mentions semver v0.1.0 (vertical-slice version) and v1.0.0 (full game)
    - File line count ≥ 40 lines
    - File uses LF line endings
  </acceptance_criteria>
  <done>CHANGELOG.md created at repo root following Keep-A-Changelog v1.1.0 format with [Unreleased] + Phase 1 milestone entry + project-initialization entry + versioning policy section pointing at slice/full-game semver scheme.</done>
</task>

<task type="auto">
  <name>Task 4: Update README.md with setup section + project structure + Phase status</name>
  <files>README.md</files>
  <read_first>
    - README.md current content (Daniel's existing survey CTA + AI disclosure + Stack section + License section MUST be preserved unchanged)
    - .planning/REQUIREMENTS.md INFRA-10 → "README covers: codename + pronunciation, project status (early development), intended audience, setup instructions for future contributors"
    - .planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md §"Specifics" → "README.md current state has survey CTA + AI disclosure at top: Phase 2 ADDS sections (setup-for-future-contributors, project-status, structure-overview) — does not replace existing content"
    - DEV-ENVIRONMENT.md (referenced from new Setup section)
    - .planning/STATE.md → current phase status for Project Status section
  </read_first>
  <action>
    Edit `README.md` to ADD three new sections WITHOUT modifying the existing survey CTA, AI disclosure, Project documents table, Stack section, or License section.

    Current README.md structure (DO NOT change):
    1. Survey CTA banner (top)
    2. `# Colisi` H1 + pronunciation
    3. Brief intro paragraph + Status line
    4. `## What this is` section
    5. `## 🤖 AI use disclosure` section
    6. `## Project documents` table
    7. `## Stack` section
    8. `## License` section
    9. `## Contact / questions` section

    INSERT new sections in this order:
    - Insert new `## Setup for future contributors` section AFTER current `## What this is` and BEFORE `## 🤖 AI use disclosure`
    - Insert new `## Project structure` section AFTER `## Project documents` and BEFORE `## Stack`
    - Insert new `## Project status` line update (replace the existing one-line Status line — see below)

    **Section 1 to insert: `## Setup for future contributors`**

    Place this AFTER the `## What this is` block and BEFORE `## 🤖 AI use disclosure`:

    ```markdown
    ---

    ## Setup for future contributors

    If you are future-Daniel on a fresh machine, or an outside contributor with a green light (see `CONTRIBUTING.md` for the contribution process — outside PRs require an issue first):

    1. **Install the locked toolchain.** See [`DEV-ENVIRONMENT.md`](DEV-ENVIRONMENT.md) for the complete required-tools list with installation commands (Godot 4.5.2, Blender 4.5 LTS, Git, Git LFS, VS Code + godot-tools extension).
    2. **Clone the repo with LFS:**
       ```powershell
       git lfs install
       git clone https://github.com/danhicks853/colisi.git
       cd colisi
       git lfs pull
       ```
    3. **Read the load-bearing docs in order:** [`PHILOSOPHY.md`](PHILOSOPHY.md) (project constitution) → [`CLAUDE.md`](CLAUDE.md) (load-bearing rules + AI policy) → [`CONTRIBUTING.md`](CONTRIBUTING.md) (workflow + commit conventions) → [`CONVENTIONS.md`](CONVENTIONS.md) (Godot project folder structure + naming).
    4. **Verify your environment** using the verification block at the bottom of [`DEV-ENVIRONMENT.md`](DEV-ENVIRONMENT.md).

    No Godot project exists yet (Phase 3 creates it). Once it does, the launch command will be `& 'D:\godot\Godot_v4.5.2-stable_win64.exe' --path D:\Projects\game` (adjust paths to your install).

    ---
    ```

    **Section 2 to insert: `## Project structure`**

    Place this AFTER the `## Project documents` table and BEFORE the `## Stack` section:

    ```markdown
    ---

    ## Project structure

    High-level overview of what lives where in this repo:

    ```
    colisi/
    ├── README.md                  ← This file
    ├── PHILOSOPHY.md              ← Project constitution
    ├── CLAUDE.md                  ← Load-bearing rules + AI partner brief
    ├── AI-DISCLOSURE.md           ← Public AI use disclosure
    ├── CONTRIBUTING.md            ← Workflow + commit conventions
    ├── CONVENTIONS.md             ← Godot project folder structure + naming
    ├── CHANGELOG.md               ← Milestone + release log (Keep-A-Changelog)
    ├── LICENSE                    ← All Rights Reserved
    ├── DEV-ENVIRONMENT.md         ← Local-machine setup procedure
    ├── .gitignore                 ← Godot-tuned ignores
    ├── .gitattributes             ← Git LFS binary tracking
    ├── .editorconfig              ← Cross-editor consistency
    ├── .github/                   ← CI workflows (godot-import-check)
    ├── .planning/                 ← Planning artifacts (GSD)
    │   ├── PROJECT.md
    │   ├── REQUIREMENTS.md
    │   ├── ROADMAP.md
    │   ├── STATE.md
    │   ├── SCOPE.md               ← Architectural-decision log (HEALTH-01)
    │   ├── slice-debt.md          ← Shortcut log (HEALTH-02)
    │   ├── research/              ← Foundational research
    │   ├── phases/                ← Per-phase planning artifacts
    │   └── playtest-log/          ← Persona-zero (HEALTH-05) session logs
    └── (Godot project, created in Phase 3 at the repo root level)
    ```

    Conventions for the future Godot project: see [`CONVENTIONS.md`](CONVENTIONS.md).

    ---
    ```

    **Section 3 to update: existing Status line**

    Find this existing line near the top (between H1 and "What this is"):
    > `**Status:** Phase 1 of 12 — Foundations & Vision Lock. No playable game yet. The project is being built in public; planning artifacts, research, and roadmap live in this repo.`

    Replace with:
    > `**Status:** Phase 2 of 12 — Infrastructure & Repo Setup (Phase 1 substantially complete; MKTG-06 verdict + Greenlight remaining). No playable game yet. The project is being built in public; planning artifacts, research, and roadmap live in this repo. See [`.planning/STATE.md`](.planning/STATE.md) for live status.`

    **DO NOT TOUCH:**
    - The survey CTA banner at the top
    - The H1 + pronunciation
    - `## What this is` section
    - `## 🤖 AI use disclosure` section
    - `## Project documents` table contents (it can OPTIONALLY add new rows for CONVENTIONS.md, CONTRIBUTING.md, CHANGELOG.md if it doesn't disturb existing rows — preferred enhancement, but not required for this task to succeed)
    - `## Stack` section
    - `## License` section
    - `## Contact / questions` section

    **Optional enhancement (do this if it's clean):** In the existing `## Project documents` table, append three new rows after the existing 7 rows:
    | [`CONVENTIONS.md`](CONVENTIONS.md) | Godot project folder structure + naming conventions (Phase 2+) |
    | [`CONTRIBUTING.md`](CONTRIBUTING.md) | Workflow, commit conventions, AI policy summary |
    | [`CHANGELOG.md`](CHANGELOG.md) | Milestone + release log (Keep-A-Changelog format) |

    Use Edit tool (NOT Write — must preserve existing content exactly).
  </action>
  <verify>
    <automated>cd D:\Projects\game; $a = Get-Content README.md -Raw; ($a -match 'Setup for future contributors') -and ($a -match 'Project structure') -and ($a -match 'DEV-ENVIRONMENT\.md') -and ($a -match 'CONVENTIONS\.md') -and ($a -match 'CONTRIBUTING\.md') -and ($a -match 'Phase 2 of 12') -and ($a -match 'forms\.gle/hnem8T62us8qn6qd7') -and ($a -match 'AI use disclosure') -and ($a -match 'All Rights Reserved')</automated>
  </verify>
  <acceptance_criteria>
    - File `README.md` still exists at repo root
    - Existing survey CTA preserved: contains `forms.gle/hnem8T62us8qn6qd7`
    - Existing AI disclosure preserved: contains `## 🤖 AI use disclosure` or `AI use disclosure`
    - Existing Stack section preserved: contains `Godot 4.5.x`
    - Existing License section preserved: contains `All Rights Reserved`
    - NEW: Contains `## Setup for future contributors` H2 section
    - NEW: Contains `## Project structure` H2 section
    - NEW: Contains `git lfs install` (in setup section code block)
    - NEW: Contains `CONVENTIONS.md` reference
    - NEW: Contains `CONTRIBUTING.md` reference
    - NEW: Status line updated to `Phase 2 of 12 — Infrastructure & Repo Setup` (not `Phase 1 of 12`)
    - File line count increased from ~85 lines to between 120 and 200 lines (additive update, not rewrite)
    - File uses LF line endings
  </acceptance_criteria>
  <done>README.md augmented with Setup-for-future-contributors section (references DEV-ENVIRONMENT.md), Project structure tree, updated Phase 2 status. Existing survey CTA + AI disclosure + Stack + License + Contact sections preserved verbatim.</done>
</task>

</tasks>

<verification>
After all 4 tasks complete:

1. Run `git status` from D:\Projects\game and confirm 3 new files (CONVENTIONS.md, CONTRIBUTING.md, CHANGELOG.md) + 1 modified (README.md).
2. Spot-check each new file for the expected sections (use `grep -c '^## ' CONVENTIONS.md` etc.).
3. Open README.md and visually verify the survey CTA at top is unchanged and the AI disclosure section is intact.
4. Verify all 4 files have LF line endings (`Get-Content -Raw` and check absence of `\r\n` outside of the .editorconfig-explicit-CRLF cases).
5. Commit in a single atomic commit: `docs(infra): add CONVENTIONS + CONTRIBUTING + CHANGELOG + update README (INFRA-05/10)`.
6. Push to GitHub origin/main.

If README.md survey CTA or AI disclosure section is disturbed, this is a BLOCKER — revert and retry the edit task. The survey CTA is currently driving MKTG-06 data collection and must not be disrupted.
</verification>

<success_criteria>
- CONVENTIONS.md exists with 8+ H2 sections covering folder structure (D-INFRA-conv-1), naming (D-INFRA-conv-2), scene+script pairing (D-INFRA-conv-3), animation library (D-INFRA-conv-4), autoloads cross-ref, save/resource, translation keys, Phase 3 open items
- CONTRIBUTING.md exists with 10+ H2 sections including GSD workflow, commit conventions, AI policy summary, slice-debt/SCOPE discipline
- CHANGELOG.md exists in Keep-A-Changelog v1.1.0 format with [Unreleased] + Phase 1 milestone entry + project-init entry + versioning policy
- README.md has new Setup + Project structure sections AND existing content (survey CTA, AI disclosure, Stack, License) preserved exactly
- All four files committed and pushed to GitHub
- INFRA-05 satisfied (CONVENTIONS.md complete)
- INFRA-10 satisfied (README + CONTRIBUTING + CHANGELOG skeletons exist with documented format conventions; README has project status, dev setup pointer, codename pronunciation)
</success_criteria>

<output>
After completion, create `.planning/phases/02-infrastructure-repo-setup/02-02-conventions-and-documentation-SUMMARY.md`:
- What was built (3 new files + 1 README update; total line counts; commit SHA)
- Requirements satisfied (INFRA-05 CONVENTIONS.md complete; INFRA-10 README+CONTRIBUTING+CHANGELOG complete)
- Decisions referenced (D-INFRA-conv-1..4 in CONVENTIONS.md; D-SUST-01..08 in CONTRIBUTING.md sustainable pace section)
- Downstream consumers (Phase 3 reads CONVENTIONS.md before creating Godot folders; CONTRIBUTING.md establishes commit conventions for ALL future commits; CHANGELOG.md gets updated at every milestone)
</output>
