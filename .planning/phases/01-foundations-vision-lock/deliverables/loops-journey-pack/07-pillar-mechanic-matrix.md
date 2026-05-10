---
deliverable: 07
pack: loops-journey
title: Pillar × Mechanic Matrix
author: Daniel (sign-off); Claude (pre-fill candidates from premise + locked decisions)
ai_role: pre-fill-with-signoff (per Daniel preference 2026-05-10 — synthesis-allowed REQ × pillar matrix; Daniel signs)
depends_on:
  - 02-pillars-of-play.md
  - .planning/REQUIREMENTS.md
decisions_referenced:
  - D-SCOPE-07
  - D-VISION-01..11
downstream_consumers:
  - Every Phase 3+ system-design plan (every new mechanic must score >0 on at least one pillar; "buys-its-slot" rule)
  - SCOPE.md (any mechanic flagged ORPHAN that's kept anyway gets a SCOPE.md entry justifying it)
  - 28-greenlight.md (orphan-mechanic decisions are part of greenlight commitment)
  - Phase 1 → Phase 2 transition (REQUIREMENTS.md amendment queue: HOME, CRAFT, COMP, NPC-06, AUDIO, WORLD-01 per sprite-premise reinterpretations + D-VISION-09/10/11 architectural commits)
scoring_scale: 0-3 (0 = irrelevant; 1 = weak/indirect; 2 = solid; 3 = mechanic is core to pillar)
hard_guardrails:
  - 0 across ALL pillars = ORPHAN (must cut or have explicit rationale logged in SCOPE.md)
  - Weak across all pillars (max score ≤1) = REVIEW required (signal of possible cut)
  - Sprite-premise reinterpretation REQs (HOME-01..05, CRAFT-01..07, COMP-01..04, NPC-06, NPC-09, ROM-01/02 per 26-architecture-ratification.md) are scored under D-VISION-08 reinterpretation + D-VISION-09/10/11; final REQUIREMENTS.md amendments deferred to Phase 1 → Phase 2 transition
authored_at: authoring/2-game-design-doc/07-pillar-mechanic-matrix.md (migrated to canonical 2026-05-10)
---

# Pillar × Mechanic Matrix

> Every gameplay-relevant REQ-ID scored against the three locked pillars (Character Development, Never Punishing, Approachability). 0-3 scoring per cell. Orphan = 0 across all pillars (cut or justify). Weak = max score ≤1 across all pillars (review).
>
> **Pre-fill workflow** (per Daniel's preference 2026-05-10): Claude proposed scores from premise alignment + locked decisions; Daniel scans, adjusts outliers, signs.

---

## Mechanic × Pillar scoring matrix

### Player & Controls (CTRL — 8 mechanics)

Heavily Pillar 3 (Approachability) loaded — controls are the first surface every player meets.

| REQ-ID | P1 Char Dev | P2 Never Punishing | P3 Approachability | Justification |
|---|:--:|:--:|:--:|---|
| **CTRL-01** (3D move WASD/gamepad) | 0 | 1 | 3 | Foundational approachability; nothing about controls relates to character development directly. |
| **CTRL-02** (camera mouse/right-stick) | 0 | 1 | 3 | Foundational approachability. |
| **CTRL-03** (single primary action button) | 0 | 1 | 3 | One-button interact is core to approachability; reduces input failure. |
| **CTRL-04** (run/sprint, no stamina) | 0 | 3 | 2 | Explicit no-stamina rule honors cardinal cozy anti-clause; forgiving controls aid approachability. |
| **CTRL-05** (open menu without losing state) | 0 | 2 | 2 | Never lose state = never punish; pause-friendly = approachable. |
| **CTRL-06** (full input remap) | 0 | 1 | 3 | Cardinal accessibility commitment. |
| **CTRL-07** (gamepad-first navigation) | 0 | 1 | 3 | Cardinal accessibility — cozy demographic plays on couch. |
| **CTRL-08** (no chord/modifier inputs) | 0 | 2 | 3 | Anti-punishing-input + cardinal approachability. |

### NPC System (NPC — 9 mechanics)

Heavily Pillar 1 (Character Development) loaded — NPCs ARE characters; the system IS character development.

| REQ-ID | P1 Char Dev | P2 Never Punishing | P3 Approachability | Justification |
|---|:--:|:--:|:--:|---|
| **NPC-01** (12+ named NPCs) | 3 | 0 | 1 | Named distinct NPCs are the character-development substrate. 12 cap is approachable (not overwhelming). |
| **NPC-02** (daily schedules; no time pressure on player) | 2 | 3 | 1 | Schedules add character texture; explicit no-time-pressure is cardinal cozy. |
| **NPC-03** (multi-axis relationships, NOT hearts) | 3 | 1 | 0 | Multi-axis is core to deep character development; hearts are flat, this is rich. |
| **NPC-04** (arc state machine, 3+ stages) | 3 | 0 | 0 | Arc progression IS character development. |
| **NPC-05** (state-tagged authored dialogue) | 3 | 0 | 0 | Core to evolving relationships across hundreds of hours. |
| **NPC-06** (non-human companion; per D-VISION-11 reinterpretation: 12-15 villager cast includes multiple non-human characters — talking animals, spirits, witches consistent with magical-realism setting — PLUS optional discoverable companions like the stray black cat that's the tutorial case for animal rescue meta-loop anchor type) | 3 | 0 | 0 | Diverse non-human cast IS character development (multiple characters with non-human perspectives). Stray cat as discoverable optional content adds replayability via discovery. Tutorial case for animal rescue anchor type — uses existing magic-tutoring + matchmaking mechanics with no new systems to learn (Pillar 3 anti-clause "no untaught mid-game system" honored). |
| **NPC-07** (NPCs reference past player choices) | 3 | 0 | 0 | "Characters that remember" — central to project's value prop. |
| **NPC-08** (NPCs reference seasons/festivals) | 2 | 1 | 0 | Temporal context for character relationships; pairs with seasonal-recurrence retention engine. |
| **NPC-09** (NPC-to-NPC gossip; per D-VISION-04 reframes as central match-info channel) | 3 | 0 | 0 | Central to BG3 × Sims premise; gossip is HOW the player learns matchmaking signals. *Sprite-premise reinterpretation; final form locked in Phase 1→2 transition.* |

### Narrative & Choice System (NARR — 7 mechanics)

Mixed P1 + P2 — narrative IS character development; the no-restart-to-rebranch rule IS cozy promise.

| REQ-ID | P1 Char Dev | P2 Never Punishing | P3 Approachability | Justification |
|---|:--:|:--:|:--:|---|
| **NARR-01** (choices persist as world-state flags) | 3 | 1 | 0 | Choices persisting IS the engine of evolving relationships. |
| **NARR-02** (no restart-to-rebranch CYOA) | 1 | 3 | 1 | Cardinal cozy anti-clause; supports character development by not erasing it. |
| **NARR-03** (3+ active narrative threads always) | 3 | 1 | 0 | Multi-thread narrative is core retention engine; when one resolves others remain (no content cliff). |
| **NARR-04** (multiple satisfying endings; no forced-tragic) | 2 | 3 | 0 | Endings reflect character relationships; explicit anti-tragic commitment is cozy promise. |
| **NARR-05** (game continues meaningful after main arcs) | 2 | 3 | 0 | Anti-content-cliff; cozy promise; character development continues. |
| **NARR-06** (per-villager experiential replay system; per amendment 2026-05-10) | 3 | 1 | 1 | Replay-as-revelation IS the felt-sense of character development; UI surface needs careful approachability design (NG+ tutorial concern flagged at D-VISION-09). |
| **NARR-07** (puzzles telegraph their solution) | 0 | 2 | 3 | Anti-ambiguous-puzzle anti-clause; cardinal approachability. |

### Companion System (COMP — 4 mechanics)

Pillar 1 cluster — companion mechanics are character-development under D-VISION-08 reinterpretation (sprite-companion not direct-control).

| REQ-ID | P1 Char Dev | P2 Never Punishing | P3 Approachability | Justification |
|---|:--:|:--:|:--:|---|
| **COMP-01** (invite NPC on outings; per D-VISION-08 sprite-companion reinterpretation) | 3 | 0 | 1 | Character development through accompaniment. *Sprite-premise reinterpretation; the wisp invites villagers OR vice versa; final form Phase 1→2 transition.* |
| **COMP-02** (companion contextual dialogue) | 3 | 0 | 0 | Character voice deepening; reactive NPC presence. |
| **COMP-03** (companion accompaniment evolves relationship) | 3 | 0 | 0 | Direct character-development mechanic; pairs with NPC-04 arc progression. |
| **COMP-04** (no companion fail-state) | 1 | 3 | 1 | Cardinal cozy commitment; characters can't be lost via mechanic. |

### World, Zones & Time (WORLD — 7 mechanics)

Heavily Pillar 2 loaded — world rules are where the cozy promise lives (no-pressure, no-expiry).

| REQ-ID | P1 Char Dev | P2 Never Punishing | P3 Approachability | Justification |
|---|:--:|:--:|:--:|---|
| **WORLD-01** (zone architecture per scope clarification 2026-05-10: 1 central village map + 12-15 villager home interiors + 1 unlock-gated animal sanctuary + 1 starting sanctum + 12-15 faerie houses = ~28-32 spatial environments full game) | 3 | 1 | 2 | Every zone is character-tied: villager homes are per-villager expression; faerie houses are per-villager arc records; sanctuary tied to sanctuary-owner + animal-rescue arcs; central village contains POIs where character life happens. Single cohesive village map is more approachable than scattered exteriors (Pillar 3 win). Anti-traversal-penalty + no-missable-zones (Pillar 2). **REQUIREMENTS.md amendment queued for Phase 1→2 transition.** |
| **WORLD-02** (zones persist player changes) | 2 | 1 | 0 | Persistence supports relationship/world memory; choices stick. |
| **WORLD-03** (cosmetic day/night, NOT gameplay-pressure) | 0 | 3 | 1 | Locked anti-clause; cardinal cozy commitment. |
| **WORLD-04** (visible seasonal cycle, recurrent never-expiring) | 2 | 3 | 0 | Seasonal context for character recurrence; never-expiring is cozy promise. |
| **WORLD-05** (NO real-time-pressure mechanics) | 0 | 3 | 1 | THE central anti-clause; persona-zero's #1 differentiator. |
| **WORLD-06** (action-driven time advance) | 0 | 3 | 1 | D-TIME-01..05 explicit; cozy promise; pairs with locked few-trigger model. |
| **WORLD-07** (free fast-travel) | 0 | 1 | 2 | Approachability through traversal forgiveness. |

### Crafting & Items (CRAFT — 7 mechanics)

Mixed signals; CRAFT-01/02 under sprite-premise reinterpretation; rest premise-aligned.

| REQ-ID | P1 Char Dev | P2 Never Punishing | P3 Approachability | Justification |
|---|:--:|:--:|:--:|---|
| **CRAFT-01** (gather resources; per CRAFT cluster reinterpretation 2026-05-10: villagers gather, wisp catalyzes — helps plants grow faster, reveals where good materials are, infuses ambient magic; minigames feel like crafting from inside) | 2 | 0 | 1 | Catalyzed gathering serves character development (wisp helps specific villagers find materials with NarrativeMeta); items carry character context. **REQUIREMENTS.md amendment queued for Phase 1→2 transition.** |
| **CRAFT-02** (craft items at stations; per CRAFT cluster reinterpretation 2026-05-10: villagers craft, wisp's magic-tutoring activity IS the wisp helping at the station; per Daniel caveat, minigames feel like crafting to player from inside) | 2 | 0 | 1 | Magic-tutoring at stations IS character interaction (player-villager bonding through the minigame); products of craft directly relevant to villager / story per CRAFT-04. **REQUIREMENTS.md amendment queued for Phase 1→2 transition.** |
| **CRAFT-03** (recipes unlock via narrative, NOT skill trees) | 2 | 3 | 1 | Explicit anti-skill-tree (cardinal cozy anti-clause); recipes tied to character interactions. |
| **CRAFT-04** (50%+ items have NarrativeMeta) | 3 | 0 | 0 | Items carry character/lore connections; central to "everything has meaning." |
| **CRAFT-05** (gift items trigger NPC reactions; under sprite-premise: sprite delivers villager-crafted items between villagers) | 3 | 0 | 0 | Gift-as-character-development; relationship evolution. *Sprite-premise reinterpretation; final form Phase 1→2 transition.* |
| **CRAFT-06** (sufficient inventory) | 0 | 2 | 2 | Anti-inventory-management-punishment; approachability. |
| **CRAFT-07** (no item degradation) | 0 | 3 | 1 | Explicit anti-tool-durability anti-clause; cardinal cozy. |

### Home & Decoration (HOME — 5 mechanics)

**Re-scored 2026-05-10 under D-VISION-10 (HOME cluster 3-layer transmutation).** All HOME mechanics now serve the village-as-canvas + faerie houses + starting sanctum architecture. Pillar 1 character-development load restored to high. REQUIREMENTS.md amendments queued for Phase 1→2 transition.

| REQ-ID | P1 Char Dev | P2 Never Punishing | P3 Approachability | Justification |
|---|:--:|:--:|:--:|---|
| **HOME-01** (customizable home; per D-VISION-10 Layer 1+2: starting sanctum + village-as-canvas with milestone-driven shared-space transformations) | 3 | 1 | 1 | Village-as-canvas is load-bearing for Pillar 1 — every shared-space change is an earned record of villager arc completion or village-wide milestone. Defer/decline always valid (Pillar 2 honored). Tutorial requirement at first milestone trigger creates Pillar 3 surface (similar to D-VISION-09 NG+ tutorial concern). |
| **HOME-02** (place/rotate/move/remove furniture; per D-VISION-10 Layer 2: player picks from 2-4 authored alternatives per upgrade slot) | 3 | 0 | 2 | Choice-from-authored-alternatives ("fountain or lawn with benches?") is the Pillar 1 character-development surface — every choice commemorates a specific villager. Approachable controls (pick-from-options) preserved. |
| **HOME-03** (50+ furniture items by end-game; per D-VISION-10 Layer 2: ~50+ shared-space upgrade slots × 2-4 alternatives = ~100-200 authored aesthetic variations full game; 2 slots in slice) | 3 | 0 | 1 | 50+ upgrade slots = 50+ character-development records. Under sprite premise transmutation, the village itself accumulates the wisp's earned aesthetic legacy. |
| **HOME-04** (NPCs comment on home decoration; per D-VISION-10: triggering villager full reactive commentary; other villagers generic "village looks different now" responses) | 3 | 0 | 0 | NPC commentary on village changes IS character development — every comment ties an aesthetic record back to its triggering villager arc. |
| **HOME-05** (home decoration state saves; per D-VISION-10 + SAVE-04 amendment: per-zone aesthetic state + per-villager faerie-house unlock state, multi-playthrough-persistent under D-VISION-09) | 1 | 3 | 1 | Anti-loss across NG+ runs — each playthrough's village aesthetic state preserved. Multi-playthrough persistence pairs with D-VISION-09 (each NG+ save tracks its own aesthetic accumulation independently). |
| **HOME (D-VISION-10 Layer 3 — faerie houses)** *NEW MECHANIC CLASS — needs REQ-ID assignment at Phase 1→2 transition; placeholder HOME-06 candidate* | 3 | 1 | 1 | Per-villager arc-completion instanced themed spaces (NOT customizable; villager-themed; 12-15 designs full game, 1 in slice). Each faerie house is a Pillar 1 crystallized character relationship. After unlocking, serves as rest location alongside starting sanctum (D-TIME-03 flexibility). Tutorial requirement at first faerie-house unlock (Pillar 3 surface). |

### Save System (SAVE — 6 mechanics)

Heavily Pillar 2 loaded — save system is anti-loss, which is anti-punishment.

| REQ-ID | P1 Char Dev | P2 Never Punishing | P3 Approachability | Justification |
|---|:--:|:--:|:--:|---|
| **SAVE-01** (manual save anywhere) | 0 | 3 | 2 | Anti-loss-of-progress = anti-punishment; accessibility. |
| **SAVE-02** (autosave at zone transitions) | 0 | 3 | 2 | Anti-loss; cozy commitment. |
| **SAVE-03** (3+ save slots) | 0 | 2 | 2 | Multi-save preserves alternate playthroughs (especially important under D-VISION-09 NG+ regime). |
| **SAVE-04** (versioned save schema; migration; per amendment: per-villager event-log + multi-playthrough log per D-VISION-09) | 0 | 3 | 1 | Anti-save-loss across updates; cardinal cozy. *Architectural commitment expanded by SAVE-04 amendments 2026-05-10.* |
| **SAVE-05** (player can never reach unrecoverable save state) | 0 | 3 | 1 | Explicit anti-punishment commitment. |
| **SAVE-06** (Steam Cloud sync) | 0 | 2 | 2 | Saves preserved across machines; accessibility. |

### Settings, UI & Accessibility (UI — 10 mechanics)

Heavily Pillar 3 loaded — UI is accessibility surface; approachability cardinal.

| REQ-ID | P1 Char Dev | P2 Never Punishing | P3 Approachability | Justification |
|---|:--:|:--:|:--:|---|
| **UI-01** (text scale 150%+) | 0 | 1 | 3 | Cardinal accessibility. |
| **UI-02** (colorblind-friendly palette) | 0 | 1 | 3 | Cardinal accessibility. |
| **UI-03** (subtitles by default) | 0 | 1 | 3 | Cardinal accessibility. |
| **UI-04** (independent audio bus volumes) | 0 | 1 | 3 | Cardinal accessibility. |
| **UI-05** (pause anytime, including dialogue) | 0 | 3 | 3 | Never trapped (cozy); approachability. |
| **UI-06** (window mode adjustable) | 0 | 1 | 2 | Accessibility. |
| **UI-07** (graphics presets for integrated GPU) | 0 | 1 | 3 | Cozy demographic accessibility (laptops, integrated GPUs). |
| ~~**UI-08**~~ | — | — | — | **MOVED OUT OF MATRIX 2026-05-10** — UI-08 (localization tr()) is a developer-discipline / tooling REQ, not a player-experienced gameplay mechanic. Tracked in REQUIREMENTS.md and `17-tools-pipeline-ratification.md`. Load-bearing for LOC-01..03 future localization but doesn't belong in pillar-mechanic matrix. |
| **UI-09** (content warning at first launch) | 0 | 2 | 3 | Anti-trauma surprise; approachability. |
| **UI-10** (gentle optional tutorial) | 0 | 1 | 3 | Cardinal approachability — onboarding for non-gamers. |

### Onboarding & New-Player Experience (ONB — 4 mechanics)

Heavily Pillar 3 loaded — onboarding IS approachability; cardinal commitment.

| REQ-ID | P1 Char Dev | P2 Never Punishing | P3 Approachability | Justification |
|---|:--:|:--:|:--:|---|
| **ONB-01** (core controls in 5 min) | 0 | 1 | 3 | Cardinal approachability; no-overwhelm. |
| **ONB-02** (first-day sequence) | 1 | 1 | 3 | Approachability; introduces NPCs (light character anchor). |
| **ONB-03** (re-tutorialize new mechanics) | 0 | 1 | 3 | Anti-clause "no untaught mechanics mid-game"; pairs with D-VISION-09 NG+ tutorial requirement. |
| **ONB-04** (no prior gaming literacy assumed) | 0 | 1 | 3 | Cardinal approachability — assumes never-played-3D-game persona. |

### Audio (AUDIO — 3 mechanics)

**Re-scored 2026-05-10 under AUDIO architectural commitment** (character-coded leitmotifs + seasonal variations, per Dawn audit feedback). Resolves AUDIO-01 + AUDIO-02 weak-signal flags. REQUIREMENTS.md amendments queued for Phase 1→2 transition.

| REQ-ID | P1 Char Dev | P2 Never Punishing | P3 Approachability | Justification |
|---|:--:|:--:|:--:|---|
| **AUDIO-01** (music; per architectural commitment 2026-05-10: per-villager leitmotifs × 4 seasonal arrangements; ~12-15 leitmotifs × 4 seasons full game) | 3 | 2 | 1 | Character-coded leitmotifs are core character development (every villager has a signature theme). Seasonal variations reinforce Pillar 2 never-expiring engine (audio recurs across in-world years with accumulated context per persona-zero Dawn audit feedback). Pairs with state-tagged dialogue + NG+ replay context. |
| **AUDIO-02** (SFX; per architectural commitment 2026-05-10: per-character/place/activity SFX cues + seasonal ambient SFX layers) | 2 | 2 | 1 | Character-specific SFX cues serve character development (the carpenter's lathe sounds different than the baker's oven; each villager's home has a signature ambient bed). Seasonal ambient SFX layers reinforce Pillar 2 never-expiring engine (autumn leaves underfoot, winter snow muffle, spring birdsong density, summer crickets). |
| **AUDIO-03** (mute individual buses) | 0 | 1 | 3 | Cardinal accessibility. |

---

## Orphan-mechanics flag table

> **Strict orphans (0 across all pillars):** none. Every gameplay-mechanic REQ carries at least one non-zero pillar signal.
>
> **Weak signals (max ≤1 across all pillars):** all originally-flagged weak signals have been resolved as of 2026-05-10. See history below.

| REQ-ID | Pillar scores (P1, P2, P3) | Resolution status |
|---|:--:|---|
| ~~**WORLD-01**~~ | ~~1, 0, 1~~ → **3, 1, 2** | **RESOLVED 2026-05-10** under WORLD-01 scope clarification (zone architecture: 1 village + interiors + unlock-gated sanctuary + sanctum + faerie houses; every zone character-tied). REQUIREMENTS.md amendment queued for Phase 1→2 transition. |
| ~~**CRAFT-01**~~ | ~~1, 0, 1~~ → **2, 0, 1** | **RESOLVED 2026-05-10** under CRAFT cluster reinterpretation (villagers gather, wisp catalyzes; minigames feel like crafting from inside per Daniel caveat). REQUIREMENTS.md amendment queued for Phase 1→2 transition. |
| ~~**CRAFT-02**~~ | ~~1, 0, 1~~ → **2, 0, 1** | **RESOLVED 2026-05-10** under CRAFT cluster reinterpretation (villagers craft, wisp's magic-tutoring activity IS the wisp helping at stations; products directly relevant to villager / story per CRAFT-04). REQUIREMENTS.md amendment queued for Phase 1→2 transition. |
| ~~**HOME-01**~~ | ~~1, 0, 1~~ → **3, 1, 1** | **RESOLVED 2026-05-10** under D-VISION-10 Layer 1+2 (starting sanctum + village-as-canvas). REQUIREMENTS.md amendment queued for Phase 1→2 transition. |
| ~~**HOME-03**~~ | ~~1, 0, 1~~ → **3, 0, 1** | **RESOLVED 2026-05-10** under D-VISION-10 Layer 2 (50+ upgrade slots full game = 50+ character-development records). REQUIREMENTS.md amendment queued for Phase 1→2 transition. |
| ~~**AUDIO-01**~~ | ~~1, 1, 1~~ → **3, 2, 1** | **RESOLVED 2026-05-10** under AUDIO architectural commitment (per-villager leitmotifs × 4 seasonal arrangements per Dawn audit feedback). REQUIREMENTS.md amendment queued for Phase 1→2 transition. |
| ~~**AUDIO-02**~~ | ~~1, 1, 1~~ → **2, 2, 1** | **RESOLVED 2026-05-10** under AUDIO architectural commitment (per-character/place/activity SFX cues + seasonal ambient SFX layers). REQUIREMENTS.md amendment queued for Phase 1→2 transition. |
| ~~**UI-08**~~ | — | **MOVED OUT OF MATRIX 2026-05-10** — developer-discipline / tooling REQ, not player-experienced mechanic. Tracked in REQUIREMENTS.md + `17-tools-pipeline-ratification.md`. |

**No weak signals remaining. No mechanics cut.** All originally-flagged rows resolved via REQUIREMENTS.md amendments queued for Phase 1→2 transition (WORLD/CRAFT/HOME/AUDIO clusters), categorization correction (UI-08), or scope clarification with re-scoring.

---

## Design pattern observations

| Pattern | Pillar concentration | Implication |
|---|---|---|
| **Controls (CTRL) cluster on Pillar 3** | Approachability dominant | Phase 3 implementation should treat controls as the first approachability proof-point |
| **NPC + COMP cluster on Pillar 1** | Character development dominant | Phase 4-6 NPC/COMP work IS the character-development proof; persona-zero playtest watches these closely |
| **NARR cluster mixes Pillars 1 + 2** | Character development × cozy promise | Multi-thread narrative (NARR-03) is the bridge between Pillar 1 (development) and Pillar 2 (no content cliff) |
| **WORLD cluster on Pillar 2** | Cozy promise dominant | World rules carry the load on cozy commitment; WORLD-05 + WORLD-06 are the central anti-clauses |
| **CRAFT/HOME under sprite-premise reinterpretation** | Weak as currently authored | REQUIREMENTS.md amendments queued for Phase 1→2 transition will re-score these higher under sprite premise |
| **SAVE cluster on Pillar 2** | Anti-loss = anti-punishment | Save system is cozy commitment infrastructure |
| **UI + ONB cluster on Pillar 3** | Approachability dominant | Accessibility + onboarding are inseparable in cozy genre for the never-played-a-3D-game persona |

---

## Cross-references

- `.planning/REQUIREMENTS.md` — REQ-IDs source (mechanic column)
- `02-pillars-of-play.md` — pillar column headers
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-07`, `D-VISION-01..09`
- `08-failure-mode-analysis.md` — pillar-failure signatures (next deliverable)
- `26-architecture-ratification.md` — sprite-premise REQ reinterpretations queued for Phase 1→2 transition
- `SCOPE.md` — orphan-keep entries log here when Daniel signs off on weak-signal keeps

---

## Daniel sign-off

**Pillar × Mechanic Matrix scored by:** Daniel Hicks
**Date:** 2026-05-10
**Adjustments from Claude pre-fill:** Substantial — pre-fill resolved 5 weak signals via architectural locks (D-VISION-10 HOME 3-layer transmutation, D-VISION-11 cat + animal rescue, WORLD-01 zone architecture clarification, AUDIO architectural commitment with character-coded + seasonal). UI-08 moved out of matrix as developer-discipline / tooling REQ. CRAFT-01/02 re-scored under prior CRAFT cluster reinterpretation approval.
**Weak-signal mechanic decisions:** All 8 originally-flagged weak signals resolved. No mechanics cut. All resolutions route through REQUIREMENTS.md amendments queued for Phase 1→2 transition (or in UI-08's case, categorization correction).

**Daniel signature:** 2026-05-10 — matrix scored, weak signals resolved, REQUIREMENTS.md amendment queue for Phase 1→2 transition acknowledged.
