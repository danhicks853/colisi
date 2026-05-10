# Requirements: Colisi

**Defined:** 2026-05-09
**Core Value:** Characters and relationships that keep evolving, in a world that never punishes the player.

> **Scope note:** v1 here means the **full 30+ hour shipping game**. The vertical slice is a milestone *within* v1 (covered in the roadmap), not its replacement. Architectural systems are sized for the full game from day one; only content scopes down for the slice.

---

## v1 Requirements

### Infrastructure & Repository

- [ ] **INFRA-01**: Repo configured with Git LFS *before any binary assets are committed* (.gitattributes tracking .png, .jpg, .ogg, .wav, .mp3, .glb, .gltf, .blend, .fbx, .ttf, .otf, .exr, .hdr, .tres binary forms)
- [ ] **INFRA-02**: Project has a Godot-tuned `.gitignore` excluding engine cache (`.godot/`), generated import metadata (`.import/` for older 4.x), per-developer build configs, and any export-preset secrets
- [ ] **INFRA-03**: Repo is hosted on GitHub at `https://github.com/danhicks853/colisi.git` with main branch as the source of truth and at least one push completed (DONE 2026-05-09)
- [ ] **INFRA-04**: Backup/redundancy strategy is implemented and tested with a documented restore procedure (primary: GitHub; secondary: local cloud sync of working directory; restore tested at least once)
- [ ] **INFRA-05**: Folder structure and naming conventions for the Godot project are documented in `CONVENTIONS.md` (where scenes / scripts / assets / addons live, plus naming rules for scenes, scripts, resources, dialogue files)
- [ ] **INFRA-06**: License decision is made and a `LICENSE` file exists at repo root (default lean: "All Rights Reserved" copyright notice, since this is a commercial closed-source game with public source visibility)
- [ ] **INFRA-07**: Editor configuration committed (`.editorconfig` for consistent line endings and indentation across machines/editors; `.vscode/` settings if VS Code is used as secondary editor)
- [ ] **INFRA-08**: Decision recorded on art-source repo split (Blender source files: in main repo via LFS, OR separate `colisi-art-source` repo for LFS quota management); follow-through deliverable based on decision
- [ ] **INFRA-09**: Minimal CI configured: GitHub Actions workflow that runs `godot --headless --import` to verify the project imports without errors on every push to main (free unlimited minutes on public repo)
- [ ] **INFRA-10**: `README.md`, `CONTRIBUTING.md` (solo-dev / future-self facing), and `CHANGELOG.md` skeletons exist with documented format conventions; README includes project status, dev setup instructions, and codename pronunciation
- [ ] **INFRA-11**: Privacy review completed for public-repo visibility — decision recorded on whether `PERSONA.md` and other personal-data-bearing planning artifacts stay public, get redacted, or move to a `.local/` ignored path

### Player & Controls

- [ ] **CTRL-01**: Player can move a 3D character in third-person view with WASD on KBM and analog stick on gamepad
- [ ] **CTRL-02**: Player can rotate the camera with mouse on KBM and right stick on gamepad
- [ ] **CTRL-03**: Player can interact with any context-sensitive object/NPC using a single primary action button (E on KBM / A or X on gamepad)
- [ ] **CTRL-04**: Player can run / sprint with one modifier key (Shift on KBM / B on gamepad), with no stamina or fatigue penalty
- [ ] **CTRL-05**: Player can open and close the main menu / inventory / journal at any time without losing game state
- [ ] **CTRL-06**: Player can fully remap every control on KBM and gamepad through a settings UI
- [ ] **CTRL-07**: Player can play the entire game with gamepad-first navigation — every UI screen is gamepad-navigable without mouse
- [ ] **CTRL-08**: Player never encounters a chord or modifier-combination input requirement (e.g., Shift+Click+Drag)

### NPC System

- [ ] **NPC-01**: Game contains a roster of at least 12 named NPCs in v1, each with distinct personality, schedule, and arc
- [ ] **NPC-02**: Each NPC moves through the world on an authored daily schedule (visible to player without time pressure on the player)
- [ ] **NPC-03**: Each NPC has a multi-axis relationship state with the player: trust, intimacy, respect, familiarity (NOT a single "heart" number)
- [ ] **NPC-04**: Each NPC has an arc state machine with at least 3 stages from first-meeting through full-arc-resolution
- [ ] **NPC-05**: NPC dialogue lines are eligible based on world-state flags (state-tagged authored dialogue), not on simple friendship-level integers
- [ ] **NPC-06**: At least one NPC is a non-human companion (spirit, talking animal, or similar) consistent with the magical-realism setting
- [ ] **NPC-07**: NPCs reference past player choices and gifts in dialogue (persistent memory)
- [ ] **NPC-08**: NPCs reference seasons, festivals, and major world events in dialogue when those events are relevant
- [ ] **NPC-09**: NPCs have an NPC-to-NPC gossip layer — characters reference what other characters have done or said when state permits

### Narrative & Choice System

- [ ] **NARR-01**: Player choices in dialogue persist as world-state flags that influence future dialogue eligibility, NPC behavior, and narrative threads
- [ ] **NARR-02**: Player never needs to restart the game from the beginning to access alternate branches (no restart-to-rebranch CYOA)
- [ ] **NARR-03**: At least 3 distinct narrative threads are active concurrently throughout the game, so when one resolves, others remain open
- [ ] **NARR-04**: Game has multiple satisfying endings — bittersweet allowed; no ending is forced-tragic regardless of player choice
- [ ] **NARR-05**: Game continues to be meaningful and playable after main story arcs resolve (no "credits roll, save is locked")
- [ ] **NARR-06**: Player can review past choices and their outcomes in a journal / log
- [ ] **NARR-07**: Puzzles (when present) telegraph their solution clearly — no ambiguous hidden-logic puzzle is required to progress

### Companion System

- [ ] **COMP-01**: Player can invite at least one chosen NPC companion to accompany them on outings (BG3-style, cozy-tuned)
- [ ] **COMP-02**: Companion provides reactive, contextual dialogue while accompanying the player (location-aware, activity-aware)
- [ ] **COMP-03**: Companion's accompaniment evolves their multi-axis relationship and arc state
- [ ] **COMP-04**: Player never receives a "companion has left forever" or "companion has died" punishing fail-state from companion mechanics

### World, Zones, & Time

- [ ] **WORLD-01**: Game contains at least 8 distinct zones (player home, village center, surrounding wilderness, etc.) reachable through clear transitions
- [ ] **WORLD-02**: Zones persist player-made changes (placed items, broken / harvested resources, character locations)
- [ ] **WORLD-03**: World has a visible day/night cycle that is purely cosmetic — not tied to gameplay-pressure mechanics
- [ ] **WORLD-04**: World has a visible seasonal cycle that affects available content (recurrent across years, never expiring)
- [ ] **WORLD-05**: Game has NO real-time-pressure mechanics: no day clock that punishes the player, no missable windows, no expiring events, no stamina, no tool durability, no bedtime forcing
- [ ] **WORLD-06**: In-game time advances on player action / rest, not on wall-clock
- [ ] **WORLD-07**: Player can freely fast-travel between unlocked zones once discovered

### Crafting & Items

- [ ] **CRAFT-01**: Player can gather resources (foraging, fishing, mining, harvesting) from the world
- [ ] **CRAFT-02**: Player can craft items at crafting stations using gathered resources and authored recipes
- [ ] **CRAFT-03**: Recipes unlock through narrative / NPC interactions, not through arbitrary skill trees or grind
- [ ] **CRAFT-04**: At least 50% of items in the game carry NarrativeMeta — first-collection dialogue, lore entry, associated NPCs, or collection milestones
- [ ] **CRAFT-05**: Crafting outputs can be gifted to NPCs and trigger NPC reactions (preferences, lore, relationship changes)
- [ ] **CRAFT-06**: Player has an inventory with sufficient capacity for a full play session without inventory-management punishment
- [ ] **CRAFT-07**: No item degrades or breaks (no tool durability)

### Home & Decoration

- [ ] **HOME-01**: Player has a customizable home base / dwelling that they own throughout the game
- [ ] **HOME-02**: Player can place, rotate, move, and remove furniture and decorative items in their home with intuitive controls
- [ ] **HOME-03**: Player can choose from at least 50 placeable furniture/decoration items by end-game
- [ ] **HOME-04**: NPCs notice and comment on the player's home decoration when visiting
- [ ] **HOME-05**: Home decoration state is fully saved and restored

### Save System

- [ ] **SAVE-01**: Player can manually save the game at any time, anywhere
- [ ] **SAVE-02**: Game autosaves at zone transitions and other significant events
- [ ] **SAVE-03**: Player has at least 3 save slots
- [ ] **SAVE-04**: Save format includes a version field; the game can migrate old saves to newer versions across post-launch updates
- [ ] **SAVE-05**: Player can never reach a state where their save becomes unrecoverable due to in-game choices
- [ ] **SAVE-06**: Player can cloud-sync saves via Steam Cloud

### Settings, UI, & Accessibility

- [ ] **UI-01**: Player can scale UI text up to at least 150% of base size
- [ ] **UI-02**: Player can choose from a colorblind-friendly color palette (or game ships with one by default)
- [ ] **UI-03**: All spoken / narrative content has accurate subtitles by default
- [ ] **UI-04**: Player can adjust master / music / SFX / dialogue / ambience volumes independently
- [ ] **UI-05**: Player can pause the game at any time, including during dialogue
- [ ] **UI-06**: Player can adjust window mode (fullscreen / windowed / borderless)
- [ ] **UI-07**: Player can choose graphics quality presets (low / medium / high) that target reasonable performance on integrated-GPU hardware
- [ ] **UI-08**: All player-facing strings are routed through localization (`tr()`); no hardcoded literal strings reach the screen
- [ ] **UI-09**: Player sees a content warning at first launch covering any sensitive themes in the game
- [ ] **UI-10**: First-run players receive a gentle, optional tutorial / onboarding for someone who has never played a cozy game

### Onboarding & New-Player Experience

- [ ] **ONB-01**: New player learns core controls (move, interact, inventory, dialogue) within first 5 minutes
- [ ] **ONB-02**: New player completes a "first day" sequence that introduces NPCs, gathering, crafting, and the journal
- [ ] **ONB-03**: Game never introduces a new core control or system in late-game without re-tutorializing it
- [ ] **ONB-04**: Game never demands prior gaming literacy — assumes a player who has never played a 3D game

### Audio

- [ ] **AUDIO-01**: Game has an original (or licensed CC0) music score with day/season-themed tracks
- [ ] **AUDIO-02**: Game has SFX coverage for player actions, world ambience, NPC barks, and UI events
- [ ] **AUDIO-03**: Game supports muting individual audio buses (music / SFX / dialogue / ambience)

### Distribution & Platform

- [ ] **DIST-01**: Game ships on Steam (Windows, macOS, Linux)
- [ ] **DIST-02**: Game ships on itch.io
- [ ] **DIST-03**: Steam page exists with capsule art, screenshots, trailer, and accurate genre/tag set
- [ ] **DIST-04**: Steam integration includes achievements, cloud saves, and Steam Input controller support
- [ ] **DIST-05**: Itch.io page exists with build-pushing automation via butler
- [ ] **DIST-06**: Game runs at acceptable performance (target 60fps) on integrated-GPU hardware (the cozy demographic floor)

### Localization Readiness

- [ ] **LOC-01**: All player-visible text is sourced from translation tables (CSV during slice, gettext PO before localized release)
- [ ] **LOC-02**: At least one non-English localization shipped at v1 launch (target: a high-leverage cozy-friendly language)
- [ ] **LOC-03**: Fonts include CJK fallback (Noto Sans CJK or equivalent) so the game can ship Chinese/Japanese/Korean post-launch without re-architecture

### Marketing & Community (release-bound)

- [ ] **MKTG-01**: Steam page launches at vertical-slice ship (months ~12-18), not at v1 launch
- [ ] **MKTG-02**: Public devlog (Twitter/Bluesky/blog) launches by month 3 of development
- [ ] **MKTG-03**: Free demo (the vertical slice) ships through at least one Steam Next Fest before v1 launch
- [ ] **MKTG-04**: Discord server exists for community building
- [ ] **MKTG-05**: Capsule art and trailer are commissioned to professional quality (highest-ROI budget exception)
- [ ] **MKTG-06**: Demographic-validation evidence is collected and documented before any external marketing copy is finalized — Steam review mining of 10-20 similar cozy life sims (top complaints in negative reviews), at least one cozy-community survey (r/CozyGamers, cozy Discords), and sales-data analysis on "cozy without time pressure" titles. Results inform marketing positioning and verify (or correct) the project's market hypothesis. This delivers empirical grounding for the "underserved demographic" claim that n=1 persona research cannot provide on its own

### Project Health & Sustainability

- [x] **HEALTH-01**: Project tracks a `SCOPE.md` log of every system / feature change, with rationale and tradeoff *(COMPLETE 2026-05-10 plan 01-00: `.planning/SCOPE.md` created with format spec + 2 inaugural entries)*
- [x] **HEALTH-02**: Project tracks a `slice-debt.md` log of every shortcut taken for the slice, with explicit promotion-or-payoff strategy *(COMPLETE 2026-05-10 plan 01-00: `.planning/slice-debt.md` created with format spec + 1 worked example)*
- [ ] **HEALTH-03**: Project has pre-committed Year-3-Wall pivot tripwires (specific milestones whose miss triggers a scope cut or pause-and-reassess)
- [ ] **HEALTH-04**: Project commits to a sustainable solo-dev cadence (target ~25 hours/week, daily/weekly/monthly/quarterly rhythms documented) *(WORDING AMENDMENT PENDING plan 01-06: "~25 hours/week" supersedes by D-SUST-01..02 milestone-based cadence; see `20-sustainable-pace-cadence.md`)*
- [ ] **HEALTH-05**: Persona-zero playtest ritual established and maintained from project month 1 *(RITUAL ESTABLISHED 2026-05-10 plan 01-00: `22-personazero-playtest-ritual.md` documents protocol; `.planning/playtest-log/` ready. SESSION 1 OF 2 COMPLETE 2026-05-10 plan 01-01: `2026-05-10-vision-pack-reaction.md` logged; Dawn's responses to D-SUST-07 questions all affirmative with no friction signals. Session 2 scheduled in plan 01-08 ≥14 days later per D-SUST-07 cadence rule.)*

---

## v2 Requirements

Deferred to post-v1 expansion / sequel content. Tracked but not in v1 roadmap.

### Romance & Deep Relationships

- **ROM-01**: Romance arcs with rich post-commitment dialogue and life-stage progression
- **ROM-02**: Marriage / partnership ceremonies and ongoing married-life dialogue

### Replayability Loop

- **REPLAY-01**: New Game+ mode where the player retains *knowledge* (recipe unlocks, character lore) but resets relationships and world state
- **REPLAY-02**: "Memory Lane" — a cutscene replay viewer for major story moments

### Procedural Layer

- **PROC-01**: Procedural minor NPCs (visitors, traders) with hand-authored dialogue (the NPC's existence may be procedural; their lines must be human-written)
- ~~**PROC-02**: Procedural-template dialogue layer that fills barks from world state via Mad-Libs-style templates~~ **REMOVED 2026-05-09** — moved to Out of Scope per AI policy in PHILOSOPHY.md Section V. Mad-Libs-style runtime template-filling produces dialogue lines that aren't directly authored; off the table.

### Modding & Community Content

- **MOD-01**: Steam Workshop / mod support
- **MOD-02**: Public modding documentation and example content packs

### Platform Expansion

- **PLAT-01**: Console port (Switch / PS5 / Xbox)
- **PLAT-02**: Mobile port (different control scheme adaptation required)

---

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---|---|
| Day clocks / bedtime forcing / energy depletion / stamina | Hard "no" from PERSONA.md — even Stardew at 1000+ hrs was named for time pressure as the worst part. The core differentiator depends on its absence. |
| Tool durability | Same anti-friction principle as no-stamina. |
| Missable / time-windowed events | Same. Use "soft-pinned" recurrence instead. |
| Endgame difficulty curves / stat-check walls | Persona quit BG3, Fallout, Hogwarts Legacy, Spiritfarer for this. Cozy means accessible all the way through. |
| Permadeath | Cozy genre violation. |
| Required combat | Genre violation; persona's profile shows no demand for it. |
| Required multiplayer / co-op | Persona quit Palia for requiring this. |
| Visual-novel format | Persona quit Coffee Talk for this. We are 3D and embodied. |
| Forced tragic endings | Persona quit The Stillness of the Wind for this. Bittersweet allowed; no-matter-what-misery is excluded. |
| Restart-from-beginning CYOA mechanics | Persona's Beacon Pines bounce. Branching choices must persist forward. |
| Skill trees that gate progression | Power curve must plateau, not require build optimization. |
| Microtransactions / battle passes / live-service monetization | Anti-cozy; reputation risk. |
| Hidden / secret-locked best endings | Punishes the player for not finding hidden mechanics. |
| Mid-game introduction of untaught core mechanics | Persona explicitly stated low patience for new systems mid-game. |
| Single save slot | Anti-feature for any modern shipping game. |
| Console launch in v1 | Devkit cost, certification overhead, publisher requirements. Defer to v2/post-launch. |
| Mobile port in v1 | Different design constraints. Defer. |
| Photorealistic / high-fidelity 3D art | Solo dev cannot scale this. Stylization is required. |
| AI-generated content for shipped product (art, music, dialogue, voice) | Steam reputation risk, copyright provenance unsettled, persona's demographic values human craft. |
| Real-time multiplayer / MMO features | Out of scope architecturally and for solo-dev tractability. |
| Voice acting (full VO) in v1 | Cost-prohibitive at v1 budget. Defer to v2 if commercial success warrants. |
| Stardew-Killer external positioning | Marketing trap. Lead with persona-gap positioning instead. |
| Procedural-template dialogue at runtime (Mad-Libs-style) | AI policy in PHILOSOPHY.md Section V — produces dialogue lines that aren't directly authored. All dialogue must be hand-written. Endgame retention leans on the other three retention engines (state-tagged dialogue, multiple narrative threads, seasonal recurrence) plus player-driven goals. |
| AI-generated visual or audio assets in shipped product | AI policy. All art and audio is human-generated, period — no AI-generated placeholders, no AI-generated reference art, no AI-generated music. See AI-DISCLOSURE.md. |
| AI-generated dialogue, item descriptions, character/NPC/place names, devlog posts, Steam page copy, marketing tweets | AI policy. All authorial content human-written. AI as brainstorming partner OK; AI as author NOT OK. See AI-DISCLOSURE.md. |

---

## Traceability

All 95 v1 requirements mapped to phases. Coverage = 95/95.

| Requirement | Phase | Status |
|---|---|---|
| INFRA-01 | Phase 2 | Pending |
| INFRA-02 | Phase 2 | Pending |
| INFRA-03 | Phase 2 | Complete (DONE 2026-05-09) |
| INFRA-04 | Phase 2 | Pending |
| INFRA-05 | Phase 2 | Pending |
| INFRA-06 | Phase 2 | Pending |
| INFRA-07 | Phase 2 | Pending |
| INFRA-08 | Phase 2 | Pending |
| INFRA-09 | Phase 2 | Pending |
| INFRA-10 | Phase 2 | Pending |
| INFRA-11 | Phase 2 | Pending |
| CTRL-01 | Phase 3 | Pending |
| CTRL-02 | Phase 3 | Pending |
| CTRL-03 | Phase 3 | Pending |
| CTRL-04 | Phase 3 | Pending |
| CTRL-05 | Phase 3 | Pending |
| CTRL-06 | Phase 3 | Pending |
| CTRL-07 | Phase 3 | Pending |
| CTRL-08 | Phase 3 | Pending |
| NPC-01 | Phase 6 (slice subset of 4) / Phase 9 (full 12+) | Pending |
| NPC-02 | Phase 5 | Pending |
| NPC-03 | Phase 4 | Pending |
| NPC-04 | Phase 6 | Pending |
| NPC-05 | Phase 4 | Pending |
| NPC-06 | Phase 6 | Pending |
| NPC-07 | Phase 4 | Pending |
| NPC-08 | Phase 6 | Pending |
| NPC-09 | Phase 7 (slice gossip 4 NPCs) / Phase 9 (full propagation) | Pending |
| NARR-01 | Phase 4 | Pending |
| NARR-02 | Phase 4 | Pending |
| NARR-03 | Phase 6 | Pending |
| NARR-04 | Phase 6 | Pending |
| NARR-05 | Phase 6 | Pending |
| NARR-06 | Phase 4 | Pending |
| NARR-07 | Phase 4 | Pending |
| COMP-01 | Phase 6 | Pending |
| COMP-02 | Phase 6 | Pending |
| COMP-03 | Phase 6 | Pending |
| COMP-04 | Phase 6 | Pending |
| WORLD-01 | Phase 5 | Pending |
| WORLD-02 | Phase 5 | Pending |
| WORLD-03 | Phase 5 | Pending |
| WORLD-04 | Phase 6 | Pending |
| WORLD-05 | Phase 5 | Pending |
| WORLD-06 | Phase 5 | Pending |
| WORLD-07 | Phase 5 | Pending |
| CRAFT-01 | Phase 6 | Pending |
| CRAFT-02 | Phase 6 | Pending |
| CRAFT-03 | Phase 6 | Pending |
| CRAFT-04 | Phase 4 | Pending |
| CRAFT-05 | Phase 4 | Pending |
| CRAFT-06 | Phase 4 | Pending |
| CRAFT-07 | Phase 4 | Pending |
| HOME-01 | Phase 6 | Pending |
| HOME-02 | Phase 6 | Pending |
| HOME-03 | Phase 6 (slice subset ~10) / Phase 9 (full 50+) | Pending |
| HOME-04 | Phase 6 | Pending |
| HOME-05 | Phase 6 | Pending |
| SAVE-01 | Phase 3 | Pending |
| SAVE-02 | Phase 3 | Pending |
| SAVE-03 | Phase 3 | Pending |
| SAVE-04 | Phase 3 | Pending |
| SAVE-05 | Phase 3 | Pending |
| SAVE-06 | Phase 7 | Pending |
| UI-01 | Phase 3 | Pending |
| UI-02 | Phase 7 | Pending |
| UI-03 | Phase 7 | Pending |
| UI-04 | Phase 3 | Pending |
| UI-05 | Phase 3 | Pending |
| UI-06 | Phase 3 | Pending |
| UI-07 | Phase 3 | Pending |
| UI-08 | Phase 3 | Pending |
| UI-09 | Phase 7 | Pending |
| UI-10 | Phase 7 | Pending |
| ONB-01 | Phase 3 | Pending |
| ONB-02 | Phase 6 | Pending |
| ONB-03 | Phase 7 | Pending |
| ONB-04 | Phase 5 | Pending |
| AUDIO-01 | Phase 6 | Pending |
| AUDIO-02 | Phase 6 | Pending |
| AUDIO-03 | Phase 6 | Pending |
| DIST-01 | Phase 8 | Pending |
| DIST-02 | Phase 8 | Pending |
| DIST-03 | Phase 8 | Pending |
| DIST-04 | Phase 8 | Pending |
| DIST-05 | Phase 8 | Pending |
| DIST-06 | Phase 3 | Pending |
| LOC-01 | Phase 3 | Pending |
| LOC-02 | Phase 10 (M2) | Pending |
| LOC-03 | Phase 3 | Pending |
| MKTG-01 | Phase 8 | Pending |
| MKTG-02 | Phase 8 (devlog launches during Phase 3 timeline ~month 3; verified live in Phase 8) | Pending |
| MKTG-03 | Phase 8 | Pending |
| MKTG-04 | Phase 8 | Pending |
| MKTG-05 | Phase 8 (capsule for slice) / Phase 11 (M2 trailer) | Pending |
| MKTG-06 | Phase 1 (validation work fits with vision lock; results referenced in Phase 8 marketing copy) | Pending |
| HEALTH-01 | Phase 1 (ongoing across all phases) | Complete (2026-05-10 plan 01-00) |
| HEALTH-02 | Phase 1 (ongoing across all phases) | Complete (2026-05-10 plan 01-00) |
| HEALTH-03 | Phase 1 (re-checked at every phase transition) | Pending |
| HEALTH-04 | Phase 1 (ongoing across all phases) | Pending |
| HEALTH-05 | Phase 1 (ongoing across all phases) | Ritual established (2026-05-10 plan 01-00); session 1 complete (2026-05-10 plan 01-01); session 2 pending plan 01-08 |

**Coverage:**
- v1 requirements: 96 total (84 original + 11 INFRA-XX + MKTG-06 added 2026-05-09)
- Mapped to phases: 96 (100%) ✓
- Unmapped: 0
- Complete: 3 (INFRA-03 repo at github; HEALTH-01 SCOPE.md log; HEALTH-02 slice-debt.md log)
- Ritual-established: 1 (HEALTH-05 — full satisfaction pending 2 sessions in plans 01-01 + 01-08)

---

*Requirements defined: 2026-05-09*
*Last updated: 2026-05-09 after roadmap creation (traceability table populated)*
