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
- [ ] **NPC-05**: NPC dialogue lines are eligible based on world-state flags (state-tagged authored dialogue), not on simple friendship-level integers. **State-tag schema expanded 2026-05-11 to include:** (a) **pre-spritesight vs post-spritesight dialog branching** per D-VISION-12 (villager cannot directly converse with wisp before receiving spritesight gift from Cyrus; pre-spritesight phase is observation-only positive content, not gating obstacle); (b) **tonal-state register tags (warm/neutral/cool variants)** per D-VISION-14 bidirectional tonal arc — every authored Phase 4 NARR line carries tonal-register tag; (c) **per-pair compatibility-state for matchmaking eligibility** per D-VISION-13. *(Amended 2026-05-11 per SCOPE rows 9+12 — D-VISION-12 Spritesight + D-VISION-14 tonal arc.)*
- [ ] **NPC-06**: **Villager cast includes multiple non-human characters** (talking animals, spirits, witches per magical-realism setting) **PLUS optional discoverable companions like the stray black cat** — the cat is the tutorial case for the **animal-rescue meta-loop anchor type** (uses existing magic-tutoring + matchmaking mechanics; no new systems to learn). Cat appears as discoverable optional content in slice; **cat arc does NOT complete in slice** (cliffhanger wishlist hook). *(Amended 2026-05-11 per SCOPE row 15 — D-VISION-11 lock 2026-05-10; honors Dawn pet-adoption emergent-feedback entry.)*
- [ ] **NPC-07**: NPCs reference past player choices and gifts in dialogue (persistent memory)
- [ ] **NPC-08**: NPCs reference seasons, festivals, and major world events in dialogue when those events are relevant
- [ ] **NPC-09**: NPCs have an NPC-to-NPC gossip layer — characters reference what other characters have done or said when state permits

### Narrative & Choice System

- [ ] **NARR-01**: Player choices persist as world-state flags influencing future dialogue eligibility, NPC behavior, and narrative threads. **State-flag schema includes:** per-villager spritesight unlock state (D-VISION-12); per-pair matchmaking attempted-state + outcome (D-VISION-13 any-to-any matchmaking with quality-based outcomes + telegraphed warnings + non-altruistic agency); village tonal state per playthrough (D-VISION-14 bidirectional). *(Amended 2026-05-11 per SCOPE rows 9+10+12.)*
- [ ] **NARR-02**: Player never needs to restart the game from the beginning to access alternate branches (no restart-to-rebranch CYOA). **D-VISION-09 NG+ time-loop is an OPT-IN new save layer** (3-run cap; never overwrites pristine save; wisp carries event-log memory across runs with archetypal recall-narration + previously-chosen dialog options get UI-highlight affordance). NG+ is NOT a restart — it's a new save where wisp grows; original playthrough preserved untouched. *(Amended 2026-05-11 per SCOPE row 6 — D-VISION-09 lock.)*
- [ ] **NARR-03**: At least 3 distinct narrative threads active concurrently throughout the game, so when one resolves, others remain open. **Matchmaking puzzle layer (D-VISION-04 meta) compounds this**: C(12,2)=66 possible villager-pair compatibility profiles full game = combinatorial content multiplier per `23-why-play-at-hour-200.md` retention engine. Slice: 3 active villager-villager pairs (Sprinkles×Ari, Sprinkles×Zhan, Ari×Zhan) + Cyrus×rescued-pet post-slice. *(Amended 2026-05-11 per SCOPE row 10 — D-VISION-13.)*
- [ ] **NARR-04**: Game has multiple satisfying endings — bittersweet allowed; no ending is forced-tragic regardless of player choice. **Tonal-state of village endings tracks D-VISION-14 bidirectional arc**: default altruistic trajectory → warmth/coalition/cooperation; non-altruistic playthroughs (poor matches pursued despite D-VISION-13 telegraphed warnings; villager arcs unfinished) → terse/sleepy/strife BUT still satisfying narrative outcomes (consequence not punishment per Pillar 2). World reflects player choices, doesn't judge them. *(Amended 2026-05-11 per SCOPE row 12 — D-VISION-14.)*
- [ ] **NARR-05**: Game continues to be meaningful and playable after main story arcs resolve (no "credits roll, save is locked"). **Hour-200+ retention engine** compounds: state-tagged dialogue depth (NPC-05) + 3+ active narrative threads (NARR-03) + seasonal recurrence (WORLD-04 + AUDIO-01) + player-driven goals + **D-VISION-09 NG+ time-loop wisp-recall + D-VISION-04 matchmaking meta layer combinatorial multiplier**. See `23-why-play-at-hour-200.md`. *(Cross-references added 2026-05-11.)*
- [ ] **NARR-06**: **Per-villager experiential replay system** — player chooses a villager, watches fast-forward replay of their entire life since wisp's arrival, slowing at critical choice junctures. Diegetic-witnessable rather than text-read (collapses DI #4 "no UI dedicated to character management" tension). **D-VISION-09 NG+ further amendment**: wisp-recall narration variants surface at ~20-50 archetypal trigger points per playthrough; previously-chosen dialog options get UI-highlight affordance across runs. Functions as anti-filler audit tool — any system not appearing in any villager's replay is filler by definition. *(Amended 2026-05-11 per SCOPE rows 3+6 — NARR-06 reframe 2026-05-10 + D-VISION-09 lock 2026-05-10.)*
- [ ] **NARR-07**: Puzzles (when present) telegraph their solution clearly — no ambiguous hidden-logic puzzle is required to progress. **Matchmaking poor-pair telegraphs explicitly** per D-VISION-13: low-compatibility match attempts surface concern ("Hrm, are you sure? They don't really seem like a great fit because XYZ") but remain player-pursuable for non-altruistic agency. *(Cross-reference added 2026-05-11 per D-VISION-13.)*

### Companion System

- [ ] **COMP-01**: **Sprite-premise reinterpretation 2026-05-11**: Wisp can choose to follow a specific villager through their day (accompaniment mode — wisp stays close during their activities). State-tag context per NPC-05 enables contextual dialogue/narration during accompaniment. **Post-spritesight wisp-villager accompaniment unlocks matchmaking-eligibility** for that villager per D-VISION-13. *(Amended 2026-05-11 — original "player invites NPC companion BG3-style" reinterpreted under sprite premise.)*
- [ ] **COMP-02**: **Sprite-premise reinterpretation 2026-05-11**: Accompanied villager provides reactive, contextual dialogue / barks during wisp accompaniment — location-aware (which zone) + activity-aware (which crafting/social activity) + state-tagged (per NPC-05 + D-VISION-12 spritesight + D-VISION-14 tonal). *(Amended 2026-05-11.)*
- [ ] **COMP-03**: **Sprite-premise reinterpretation 2026-05-11**: Accompanying a villager evolves their multi-axis relationship with the wisp (trust/intimacy/respect/familiarity per NPC-03) and contributes to their arc-state progression. Pairs with D-VISION-13 matchmaking eligibility (sufficient accompaniment unlocks matchmaking attempts for that villager). *(Amended 2026-05-11.)*
- [ ] **COMP-04**: Wisp never receives a "villager has left forever" or "villager has died" punishing fail-state from accompaniment mechanics. **Per D-VISION-13**: poor matchmaking outcomes are valid narrative consequences (unhappy pair) but no villager permanently exits the game; consequence-not-punishment per Pillar 2. *(Amended 2026-05-11.)*

### World, Zones, & Time

- [ ] **WORLD-01**: Game contains the following spatial-environment classes (per D-VISION-10/11): (1) **1 central village map** as single cohesive outdoor environment with 8+ named POIs as visual subdivisions (town center, workspaces, gathering points, festival grounds, etc.); (2) **12-15 villager home interiors**; (3) **1 animal sanctuary** (unlock-gated post-slice via D-VISION-11 cat completion); (4) **1 starting sanctum** (D-VISION-10 Layer 1 default rest location); (5) **12-15 faerie houses** (D-VISION-10 Layer 3 per-villager arc-completion instanced themed spaces). Total ~28-32 spatial environments full game; ~7 zones in slice. *(Amended 2026-05-11 per SCOPE row 8 — WORLD-01 scope clarification 2026-05-10; resolves WORLD-01 weak-signal flag from 07-pillar-mechanic-matrix.)*
- [ ] **WORLD-02**: Zones persist player-made changes (placed items, broken / harvested resources, character locations) **AND village-as-canvas milestone-driven shared-space transformations** (D-VISION-10 Layer 2: ~50+ upgrade slots full game, 2 in slice; villagers initiate transformations at arc-milestones + village-wide milestones; wisp-as-chooser picks from 2-4 authored alternatives per slot; one-way within playthrough; defer/decline always valid per Pillar 2; NG+ differentiation per D-VISION-09 wisp memory across runs). *(Amended 2026-05-11 per SCOPE row 7 — D-VISION-10 lock 2026-05-10.)*
- [ ] **WORLD-03**: World has a visible day/night cycle that is purely cosmetic — not tied to gameplay-pressure mechanics
- [ ] **WORLD-04**: World has a visible seasonal cycle that affects available content (recurrent across years, never expiring)
- [ ] **WORLD-05**: Game has NO real-time-pressure mechanics: no day clock that punishes the player, no missable windows, no expiring events, no stamina, no tool durability, no bedtime forcing, **no real-time forward-timer gating of progression (resources/crafted items/growth/unlocks must complete within a single play session — no waiting real-world minutes/hours), no real-world-clock-tied content gating (NPCs/critters/events/shops must not be locked to specific real-world hours of the day)**. *(Anti-clause extension amended 2026-05-11 per SCOPE row 17 — empirical anchors: Sandrock R24, Dreamlight R11/R16, Cozy Grove timeforward-gating cluster, Palia R2.)*
- [ ] **WORLD-06**: In-game time advances on player action / rest, not on wall-clock
- [ ] **WORLD-07**: Player can freely fast-travel between unlocked zones once discovered

### Crafting & Items

- [ ] **CRAFT-01**: **Sprite-premise reinterpretation 2026-05-11**: Villagers gather resources from the world; **wisp catalyzes villager gathering activity via magic-tutoring minigames** (D-VISION-04 moment-to-moment puzzle layer). Wisp's magic-tutoring minigame IS the wisp helping at gathering. Per matrix re-score 2026-05-10 (SCOPE row 14): 2,0,1 (Pillar 1 reinforcement maintained because minigames feel like crafting from inside per Daniel caveat). *(Amended 2026-05-11.)*
- [ ] **CRAFT-02**: **Sprite-premise reinterpretation 2026-05-11**: Villagers craft items at crafting stations using gathered resources and authored recipes; **wisp's magic-tutoring minigame IS the wisp helping at crafting stations** (D-VISION-04). Products directly relevant to villager / story per CRAFT-04. Per matrix re-score 2026-05-10 (SCOPE row 14): 2,0,1. *(Amended 2026-05-11.)*
- [ ] **CRAFT-03**: Recipes unlock through narrative / NPC interactions, not through arbitrary skill trees or grind
- [ ] **CRAFT-04**: At least 50% of items in the game carry NarrativeMeta — first-collection dialogue, lore entry, associated NPCs, or collection milestones
- [ ] **CRAFT-05**: Crafting outputs can be gifted to NPCs and trigger NPC reactions (preferences, lore, relationship changes)
- [ ] **CRAFT-06**: Player has an inventory with sufficient capacity for a full play session without inventory-management punishment
- [ ] **CRAFT-07**: No item degrades or breaks (no tool durability)

### Home & Decoration

- [ ] **HOME-01**: Wisp has **three transformations replacing traditional player-owned home** under sprite premise (D-VISION-10): **Layer 1 starting sanctum** (default rest location pre-completion); **Layer 2 village-as-canvas** (wisp-as-chooser of milestone-driven shared-space transformations; villager-initiated upgrades at arc/village-wide milestones); **Layer 3 faerie houses** (per-villager arc-completion instanced themed spaces; 12-15 designs full game, 1 in slice; faerie houses serve as alternative rest locations alongside starting sanctum after unlock). *(Amended 2026-05-11 per SCOPE row 7 — D-VISION-10 lock 2026-05-10; inverts cozy-genre housing trope.)*
- [ ] **HOME-02**: Player participates in village-as-canvas (Layer 2) by **choosing from 2-4 authored alternatives per upgrade slot** when a villager initiates a transformation. Player does NOT directly place individual furniture items — wisp doesn't decorate directly (preserves wisp-as-guest framing per sprite premise). Faerie houses (Layer 3) are villager-themed and NOT player-customizable. *(Amended 2026-05-11 per SCOPE row 7 — D-VISION-10 lock 2026-05-10.)*
- [ ] **HOME-03**: Village-as-canvas (Layer 2) provides **~50+ upgrade slots full game (2 in slice)** with 2-4 authored alternatives per slot = ~100-200 aesthetic variations total full game. Faerie houses (Layer 3) provide **12-15 villager-themed instanced spaces full game (1 in slice)**. Every aesthetic change is EARNED through villager-arc completion or village-wide milestone aggregation — Pillar 1 alignment maximal. *(Amended 2026-05-11 per SCOPE row 7 — D-VISION-10 lock 2026-05-10.)*
- [ ] **HOME-04**: NPCs reference village-as-canvas transformations in dialogue (state-tagged per NPC-05) — diegetic acknowledgment of player work via villager-initiation + ongoing reference in subsequent dialogue. Faerie-house unlock event triggers per-villager arc-completion ceremony dialogue. *(Amended 2026-05-11 per SCOPE row 7 — D-VISION-10 lock 2026-05-10.)*
- [ ] **HOME-05**: Village-as-canvas aesthetic state + faerie-house unlock state fully saved and restored, with **multi-playthrough persistence via D-VISION-09 NG+ time-loop** (SAVE-04 amendment). Aesthetic state survives playthroughs as part of NG+ differentiation — wisp recalls prior playthrough's village-canvas outcomes. *(Amended 2026-05-11 per SCOPE rows 6+7 — D-VISION-09 + D-VISION-10 locks.)*

### Save System

- [ ] **SAVE-01**: Player can manually save the game at any time, anywhere
- [ ] **SAVE-02**: Game autosaves at zone transitions and other significant events
- [ ] **SAVE-03**: Player has at least 3 save slots
- [ ] **SAVE-04**: Save format is a **per-villager event log** (timestamps + significance markers per locked junctures, NOT just state snapshots) with version field for migration across post-launch updates. **Multi-playthrough persistence layer for D-VISION-09 NG+ time-loop** — wisp memory across runs; NG+ saves separate from pristine save (never overwriting). State fields include: **per-villager `is_sighted` flag (D-VISION-12 Spritesight)**, **per-zone aesthetic state (D-VISION-10 village-as-canvas)**, **per-villager faerie-house unlock state (D-VISION-10 Layer 3)**, **per-playthrough village tonal state (D-VISION-14)**, **per-pair matchmaking attempted-state + outcome (D-VISION-13)**. **Custom Resource format (`.tres` dev / `.res` ship)** per locked technical decision (STACK.md). *(Amended 2026-05-11 per SCOPE rows 3+6+7+8+9+10+12 — NARR-06 reframe + D-VISION-09 NG+ + D-VISION-10 HOME 3-layer + WORLD-01 + D-VISION-12 Spritesight + D-VISION-13 matchmaking + D-VISION-14 tonal arc.)*
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

### Production Polish & Quality

*Locked 2026-05-10 (SCOPE row 16) — Pillar 3 expansion: production polish IS accessibility, not a separate quality concern. Empirical anchor: MKTG-06 Steam review corpus 2026-05-10 (43% My Time at Portia bugs/crashes, Sun Haven sleep-progression-blocking, Coral Island lose-day-progress-to-crashes, 50+ cross-corpus polish-failure reviews). A frustrating-because-broken game is inaccessible to cozy demographic.*

- [ ] **POLISH-01**: Crash-free golden-path first hour is a slice-ship gate. Slice cannot ship externally with known crashes in the onboarding flow.
- [ ] **POLISH-02**: Save/load round-trip reliability tested before every playtester / demo / patch handoff. Save-loss bugs are blocking-severity.
- [ ] **POLISH-03**: Control intuitiveness verified via HEALTH-05 ritual (naive playtester encounters the game cold) before slice ship. Unintuitive-controls feedback from HEALTH-05 sessions is blocking-severity.
- [ ] **POLISH-04**: No known breaking bug shipped to any external surface (playtest, tech demo, patch, gameplay). Anti-"ship rough then patch" — locked anti-clause. Even pre-slice tech demos must be functionally sound.

### Audio

- [ ] **AUDIO-01**: Game has an original (or licensed CC0) music score with **per-villager character-coded leitmotifs (12-15 villager leitmotifs full game) × seasonal arrangements (4 per leitmotif = 48-60 cues full game)**. Character-coded audio = every audio asset is character/place identifier (Pillar 1 reinforcement). Seasonal variations = Pillar 2 never-expiring engine. *(Amended 2026-05-11 per SCOPE row 14 — AUDIO architectural commitment 2026-05-10; persona-zero (Dawn) audit feedback citing Stardew's seasonal audio.)*
- [ ] **AUDIO-02**: Game has SFX coverage for player actions, world ambience, NPC barks, and UI events; **with per-character/place/activity signature SFX cues (e.g., carpenter's lathe distinct from baker's oven; per-villager-home ambient bed)** and **seasonal ambient SFX layers (autumn leaves underfoot, winter snow muffle, spring birdsong density, summer evening cricket presence)**. *(Amended 2026-05-11 per SCOPE row 14 — AUDIO architectural commitment 2026-05-10.)*
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
- [ ] **HEALTH-04**: Project commits to a sustainable solo-dev cadence using milestone-based pacing (no hour tracking) per D-SUST-01..08 — continuous nightly session, monthly retro, quarterly review, bi-weekly persona-zero playtest. See `.planning/phases/01-foundations-vision-lock/deliverables/process-pack/20-sustainable-pace-cadence.md` for the full cadence doc. *(WORDING AMENDED 2026-05-10 plan 01-02: dropped "target ~25 hours/week" per D-SUST-01..02; SCOPE.md row logged.)*
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
| Interactive player combat mechanics of ANY kind. Ever. | Daniel-locked anti-clause 2026-05-10 (SCOPE row 4). Original "Required combat" framing left a loophole ("but what if combat is *playful*?"); tightened to close it entirely. Lore-level combat references (e.g., a villager mentioning an ancestor's past battle), observed NPC-vs-NPC events, and symbolic/ritualized non-interactive "combat" framings are still permitted. Persona quit BG3, Fallout, Hogwarts Legacy over this anti-feature. |
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

All 105 v1 requirements mapped to phases. Coverage = 105/105.

*(REQ count corrected + amended 2026-05-11 Phase 1→2 transition batch: +4 new POLISH-01..04 requirements from SCOPE row 16 Pillar 3 expansion lock 2026-05-10. Pre-existing count discrepancy also fixed: prior count claimed "96" but actual REQ count was 101 — fixed to 105 with all POLISH additions. Verified via `grep -cE "^- \[[ x]\] \*\*[A-Z]+-[0-9]+"` against v1 section.)*

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
| POLISH-01 | Phase 6 (slice-ship gate) | Pending |
| POLISH-02 | Phase 6 (slice-ship gate; verified at every demo handoff thereafter) | Pending |
| POLISH-03 | Phase 6 (slice-ship gate; verified via HEALTH-05 naive-playtester session) | Pending |
| POLISH-04 | Phase 6 (ongoing — every external surface) | Pending |
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
- v1 requirements: **105 total** (101 pre-existing — the prior "96" count was off; +4 POLISH-01..04 added 2026-05-11 per SCOPE row 16 Pillar 3 polish-as-accessibility lock)
- Mapped to phases: 105 (100%) ✓
- Unmapped: 0
- Complete: 3 (INFRA-03 repo at github; HEALTH-01 SCOPE.md log; HEALTH-02 slice-debt.md log)
- Ritual-established: 1 (HEALTH-05 — full satisfaction pending 2 sessions in plans 01-01 + 01-08)

**Phase 1→2 transition amendment batch 2026-05-11:** 27 individual amendments applied across REQUIREMENTS.md per all locked SCOPE.md rows from Phase 1 (rows 4 through 17). Batch covers: OOS "Required combat" tightening / WORLD-05 anti-clause extension (real-time-timer + real-world-clock) / POLISH-01..04 new requirements / AUDIO-01/02 architectural commitment / NPC-05/06 Spritesight + cat / WORLD-01/02 zone architecture + village-as-canvas / HOME-01..05 D-VISION-10 3-layer / SAVE-04 multi-source / NARR-01..07 cluster (D-VISION-09/12/13/14) / COMP-01..04 sprite-premise reinterpretation / CRAFT-01/02 wisp-catalyzes-villager-activity reinterpretation. All amendments cross-referenced to source SCOPE.md row. Original wording preserved in commit history.

---

*Requirements defined: 2026-05-09*
*Last updated: 2026-05-09 after roadmap creation (traceability table populated)*
