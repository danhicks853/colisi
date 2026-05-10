---
deliverable: 02
pack: vision
title: Pillars of Play
author: Daniel
ai_role: structure-only
authored: 2026-05-10
pillar_count: 3
depends_on:
  - 01-vision-pitch.md
  - .planning/phases/01-foundations-vision-lock/01-CONTEXT.md
  - .planning/research/PERSONA.md
  - .planning/research/SUMMARY.md
decisions_referenced:
  - D-SCOPE-02
  - D-VISION-01
  - D-VISION-02
  - D-VISION-03
  - D-VISION-04
  - D-VISION-06
downstream_consumers:
  - 07-pillar-mechanic-matrix.md (matrix is pillar × mechanic; cannot be filled until pillars are named)
  - 08-failure-mode-analysis.md (failure modes are pillar-by-pillar)
  - 23-why-play-at-hour-200.md (retention engines map to pillars)
  - Every Phase 3+ system-design plan (every new system passes "which pillar does this serve" check per PHILOSOPHY.md §II Design guidelines)
---

> **AI POLICY (PHILOSOPHY.md §V):** Daniel authors all content in this file. Claude provides ONLY the section structure and refuses to draft pillar names, statements, or implications. Claude critiques drafts when Daniel requests.

# Pillars of Play — Colisi

> Per `D-SCOPE-02`: 3 emotional/experience pillars, each with paragraph elaboration + 3–5 specific design implications + 3–5 anti-pillar clauses + failure-mode signature + REQ-ID-mapped mechanics. Daniel chose 3 pillars (the trio Character Development × Never Punishing × Approachability) — covers the project's mechanical, ethical, and accessibility dimensions without overlap.
>
> **Source format** (per `01-RESEARCH.md` Pattern 3 / Example 1): Hades' Star three-pillars doc + GameDesignSkills "Game Design Pillars" + Tearaway's anti-pillar clause discriminator pattern from Media Molecule. The anti-pillar clause is what makes pillars *constrain* decisions rather than just describe them.

---

## Pillar 1: Character Development

**Why?**

Character development IS the gameplay. Everything we are designing, from tutoring villagers to hone their magic, to engineering connections between these villagers, relies on this pillar. Without character development, none of the player's choices matter at all. Deep-cozy players want to know that the choices they're making in this game are going to improve the world they are living in, not leave it stale.

*Anchors:* D-VISION-04 (two-layer puzzle structure — magic-tutoring as moment-to-moment loop; matchmaking-via-environmental-manipulation as meta arcs); D-VISION-06 (BG3 × Sims dream cross translates mechanically to character development as core verb); D-VISION-02 (latent magic surfaces through relationship — character development is the surface mechanism); `research/SUMMARY.md` (persona-gap framing: "evolving relationships in a world that never punishes you" — deep-cozy demographic differentiator); `research/PERSONA.md` (persona-zero core fantasy: "talking to people and finding where I fit in").

**Design Implications**
- Meaningful choices made by the player MUST affect one or more NPCs, or the village itself, either positively or negatively.
- When designing a player choice, ALWAYS provide a positive path, if a negative path is available. In systems where choices are dynamic and build upon past choices, it must be designed so that the player cannot lock themselves out of a positive choice.
- Character progression should always be visual, and intuitive. The player should see how the character has progressed based on their dialog, their living and working areas, and even their clothing. This eliminates the need for ANY UI dedicated to character management, which can distract from the world.
- Any system added to the game directly impacts the wellbeing of the village.

**Failure-mode Signature**

Mode: The player cannot reliably intuit character state via diegetic feedback channels, or is forced into a negative development state without a positive path.

Signals:
- The player asks how an NPC is doing or how they feel about their current status.
- The player looks for UI/UX to determine game or NPC state.

*When these signals appear, we should investigate diegetic feedback systems and how to make them more intuitive.*

- The player states that they were forced into a choice they did not want to do.
- The player attempts to save-scum to obtain a more favorable outcome.
- The player quits the game after being railroaded into a negative choice.

*When these signals appear, we should check branching decision tree logic for an orphaned negative experience somewhere in the tree.*

**Anti-clauses**
- We will not add meaningless "filler content" that does not progress a character's story.
- The wisp will NEVER improve or upgrade the village itself.
- The storyline will NEVER force the player to make a negative impact on a character.

**Mechanics this pillar justifies** (REQ-IDs from `.planning/REQUIREMENTS.md`):

*NPC system:*
- **NPC-01** — 12+ NPCs each with personality, schedule, and arc. Characters to develop.
- **NPC-03** — Multi-axis relationship state (trust/intimacy/respect/familiarity), not a single heart-number. Character development tracked across multiple dimensions; rejects single-stat progression.
- **NPC-04** — Arc state machine ≥3 stages from first-meeting to full-arc resolution. Explicit per-villager arc structure (engineering enforcement of "character development must be tracked").
- **NPC-05** — State-tagged authored dialogue (not friendship-level integers). Character state surfaces through dialog (DI #3, dialog channel).
- **NPC-07** — NPCs reference past player choices and gifts. Choice consequences visible in character behavior (DI #1).
- **NPC-09** — NPC-to-NPC gossip layer. Individual character development ripples into village-wide cohesion (Why-section arc).

*Narrative & choice:*
- **NARR-01** — Player choices persist as world-state flags affecting future dialogue + behavior. DI #1 enforced at engineering layer.
- **NARR-02** — No restart-to-rebranch CYOA. DI #2 (no branching-lockout).
- **NARR-03** — ≥3 concurrent narrative threads. Positive-path availability preserved when one resolves (DI #2).
- **NARR-04** — Multiple endings; no forced-tragic regardless of player choice. Anti-clause 3 enforced at narrative architecture.
- **NARR-05** — Game continues meaningfully after main story resolves (no credits-roll-save-locked). Character development never closes off; persona-gap differentiator.
- **NARR-06** — **Per-villager experiential replay system** (per 2026-05-10 reframe in `.planning/persona-zero-emergent-feedback.md` + SCOPE.md): choose a villager, watch fast-forward replay of their life since wisp's arrival, slowing at critical choice junctures. The flagship mechanic for this pillar — the diegetic-vs-abstracted move at the meta level. *Original wording amended; full REQUIREMENTS.md amendment queued for plan 01-02 sign-off.*

*Companion system:*
- **COMP-01** — Player can invite chosen NPC companion (BG3-style, cozy-tuned). Direct cite of D-VISION-06 BG3 × Sims dream cross from Why section.
- **COMP-02** — Reactive contextual companion dialogue (location-aware, activity-aware). Character expression varies with state.
- **COMP-03** — Companion accompaniment evolves multi-axis relationship and arc state. Character-arc progression as gameplay.
- **COMP-04** — No "companion has left forever" / "companion has died" punishing fail-state. Anti-clause 3 enforced at companion architecture.

*Crafting (anti-orphan-system enforcement):*
- **CRAFT-03** — Recipes unlock through narrative / NPC interactions, not arbitrary skill trees. DI #4 ("any system added must impact village wellbeing"); no orphan systems.
- **CRAFT-04** — ≥50% of items carry NarrativeMeta (first-collection dialogue, lore, NPC-association). Anti-clause 1 enforced at item architecture (no filler unconnected to character stories).
- **CRAFT-05** — Crafted items can be gifted to NPCs and trigger reactions (preferences, lore, relationship changes). Crafting tethered to character development.

*Home & decoration:*
- **HOME-04** — NPCs notice and comment on player's home decoration when visiting. Character reactivity to world-state.

*Save (architectural):*
- **SAVE-04** — Save format includes version field; **schema amended 2026-05-10 to mandate per-villager event log (timestamps + significance markers), not just state snapshots** — required by NARR-06 replay system. Migration safe across post-launch updates. *Full REQUIREMENTS.md amendment queued for plan 01-02 sign-off; see SCOPE.md 2026-05-10 entry.*
- **SAVE-05** — Player can never reach a state where their save becomes unrecoverable due to in-game choices. DI #2 (no-lockout) enforced at the save layer.

*Enabler (not directly justified by this pillar, but required for its diagnostic):*
- **HEALTH-05** — Persona-zero playtest ritual. Without HEALTH-05 sessions, the failure-mode signature's observable signals can't be captured; this pillar's diagnostic loop depends on persona-zero feedback.

**Total: 22 REQs justified directly + 1 enabler.** *(NPC-06, NPC-08, WORLD-01, WORLD-02 considered and rejected as belonging to other pillars or — in WORLD-02's case — explicitly outside this pillar's scope because the wisp is a catalyst, not an agent of world-change.)*

---

## Pillar 2: Never Punishing

**Why?**

Punishing the player for not meeting arbitrary goals defeats the purpose of the game entirely. Deep-cozy players do not want the anxiety of these arbitrary goals, which introduce friction and affect enjoyment. The player should feel rewarded by their choices and should have the freedom to make NO choices, without a timer or energy bar dictating how many choices they can make or how long they can take to make them. This enforces the design of player control and allows for evolving relationships in a world that never punishes you.

**Design Implications**
- No mechanic introduces a time-based failure state — neither countdown timers (the press-X-in-5-seconds shape) nor expiration windows (the missable-event shape). Time advances as consequence of player action, never as pressure on it.
- Overarching game mechanics cannot rely on an energy, usage, or depletion mechanic. This includes survival-shape hunger / thirst decay, or action-economy based energy bars that decrement on-action. This enables the player to make any number of meaningful choices within any time frame. An acceptable alternative would be to provide the player with a puzzle state where each move is a discrete event / state advance. *(An event where the player learns to mine before teaching a villager could provide them with an ethereal pickaxe. Each strike of the pickaxe dislodges a large geode little by little. After 8 strikes, the geode is freed and the wisp dismisses the pickaxe.)*
- Time increments are acceptable, provided they do not lock the player out of ANY content. If we teach a villager to fish, and we then increment to a new season, this cannot lock the player out of teaching a different villager to dance.

**Failure-mode Signature**

Mode: The player experiences failure states based on time or decremental states.

Signals:
- The player asks why a minigame ended early or showed a failure state without action.
- The player states that they are unable to continue gameplay or use an item after a certain amount of actions. *("Why can't I use that pickaxe anymore? Where did it go?")*

*When these signals appear, we should investigate whether a timer expired or a depletion meter was added that prevents gameplay upon depletion.*

- The player states they are unable to trigger an NPC event after a time-based increment (e.g., season).
- The player notes an NPC state change based solely on time increment, and not based on a choice they made.

*When these signals appear, we should check whether a time increment precluded an NPC or village event, or caused an NPC state change, through no fault of the player.*

**Anti-clauses**
- Energy depletion systems of any kind will NEVER be added to this game.
- Expiring timers of ANY kind will not be added to this game. These include mini-game specific timers. Every mechanic of the game should allow the player to walk away from their computer and come back 15 days later to the same state.
- Negative consequences will ALWAYS be clearly telegraphed to the player, and ALWAYS be a result of a choice the player made. *(This ties into the Character Development pillar as well.)*
- We will never add interactive player combat mechanics of ANY kind. Ever.

**Mechanics this pillar justifies** (REQ-IDs from `.planning/REQUIREMENTS.md`):

*World, time, and seasonal pacing:*
- **WORLD-03** — Day/night cycle is purely cosmetic, not tied to gameplay-pressure mechanics. Direct enforcement of DI #1 (time advances as consequence of player action, never as pressure).
- **WORLD-04** — Seasonal cycle is recurrent across years, never expiring. Direct enforcement of DI #3 (time increments don't lock content) and anti-clause 2 (no expiration windows).
- **WORLD-05** — NO real-time-pressure mechanics: no day clock, no missable windows, no stamina, no tool durability, no bedtime forcing. **The flagship REQ for this pillar** — the consolidated forbiddance enforced at world architecture.
- **WORLD-06** — Time advances on player action / rest, not on wall-clock. Direct DI #1 enforcement.
- **WORLD-07** — Free fast-travel between unlocked zones once discovered. Anti-friction; player's pace is theirs.

*Player resources (no depletion):*
- **CTRL-04** — Sprint with no stamina or fatigue penalty. Direct anti-clause 1 enforcement.
- **CRAFT-06** — Sufficient inventory capacity for a full play session, no inventory-management punishment. Anti-friction at the resource layer.
- **CRAFT-07** — No item degrades or breaks (no tool durability). Direct anti-clause 1 enforcement.

*Narrative consequences (telegraphed + player-chosen):*
- **NARR-02** — No restart-to-rebranch CYOA. Direct DI #3 enforcement (no content lockout).
- **NARR-04** — Multiple satisfying endings; bittersweet allowed; no forced-tragic regardless of player choice. Direct anti-clause 3 enforcement.
- **NARR-07** — Puzzles telegraph their solution clearly — no ambiguous hidden-logic puzzle is required to progress. Direct anti-clause 3 enforcement (telegraph half).

*NPC + companion systems (no time-pressure, no fail-state):*
- **NPC-02** — NPC schedules visible to player **without time pressure on the player**. Direct DI #1 enforcement at NPC scheduling.
- **COMP-04** — No "companion has left forever" / "companion has died" punishing fail-state from companion mechanics. Direct anti-clause 3 enforcement at companion architecture.

*Save (the 15-days test, in code):*
- **SAVE-05** — Player can never reach a state where their save becomes unrecoverable due to in-game choices. **Direct enforcement of the "walk away from your computer and come back 15 days later to the same state" test from anti-clause 2** at the save layer.

*Negative space — Out of Scope (the pillar's enforced forbiddances):*
- This pillar is *also* enforced by the entirety of `.planning/REQUIREMENTS.md` **Out of Scope** — day clocks, bedtime forcing, energy depletion, stamina, tool durability, missable / time-windowed events, endgame difficulty curves / stat-check walls, permadeath, required combat (now amended to "interactive player combat mechanics of any kind" per anti-clause 4 and SCOPE.md 2026-05-10 entry), forced tragic endings, restart-from-beginning CYOA mechanics, skill trees that gate progression, hidden / secret-locked best endings, mid-game introduction of untaught core mechanics. **Half this pillar's load is carried by the negative space.** Future-Daniel reading this section in 2027: when auditing a feature pitch against this pillar, check both the affirmative REQs above AND the Out of Scope list.

*Enabler (not directly justified, but required for this pillar's diagnostic):*
- **HEALTH-05** — Persona-zero playtest ritual. Without HEALTH-05 sessions, the failure-mode signature's signals can't be captured.

**Total: 14 REQs justified directly + 1 enabler + the entire Out of Scope list as enforced negative space.** *(ONB-03 and ONB-04 considered and routed to Pillar 3 Approachability where they belong as accessibility/onboarding rules rather than anti-punishment rules.)*

---

## Pillar 3: Approachability

**Why?**

Approachability is not a polish layer added after the "real" game is finished — it is a structural constraint on every system in Colisi. The deep-cozy demographic this game is built for disproportionately includes players with little or no prior gaming literacy, players unfamiliar with 3D navigation conventions, and players using low-spec laptops or integrated GPUs. These players frequently bounce off otherwise-interesting games before reaching the relationship systems that Pillars 1 and 2 are protecting. If Colisi silently assumes knowledge of camera control, inventory conventions, stat-sheet interpretation, or multi-input execution, then the audience the game is specifically FOR never reaches the character-development gameplay that defines the experience. Approachability therefore means reducing unnecessary interpretation load wherever possible: mechanics must be taught through use, inputs must remain simple and consistent, and the player must never feel embarrassed for not understanding a "standard" gaming convention. Pillar 1 ensures the player's choices matter; Pillar 2 ensures those choices are never punished; Pillar 3 ensures the player can actually reach and understand the choice surface in the first place.

**Design Implications**
- Every new mechanic MUST be introduced through guided interaction before the player is expected to use it independently.
- All critical gameplay information should be surfaced through diegetic or immediately understandable presentation, not buried inside layered UI menus or abstract stat sheets.
- Core controls must remain consistent for the entire game. Once the player learns an interaction pattern, future systems should reuse that pattern whenever possible.
- Any mechanic that depends on prior gaming conventions (quest logs, crafting hierarchies, camera assumptions, radial menus, inventory taxonomy, etc.) must be explicitly taught in-context before use.
- The game must remain playable and visually readable on low-end hardware and integrated GPUs without degrading gameplay comprehension.

**Failure-mode Signature**

Mode: The player struggles to interact with the game because the design assumes prior gaming literacy, hidden conventions, or unexplained interface logic.

Signals:
- The player asks how to perform basic movement, interaction, or camera-control tasks after onboarding.
- The player repeatedly opens menus searching for information that should have been visually or contextually obvious.
- The player avoids engaging with a mechanic because they are afraid of "doing it wrong."
- The player fails a mechanic because they misunderstood the input language, not because they made a meaningful decision.
- The player verbally compares the game to "something gamers would understand," or states that they feel inexperienced, confused, or overwhelmed.

*When these signals appear, we should investigate onboarding clarity, interface readability, input consistency, and whether the mechanic relies on assumed gaming conventions rather than taught interaction patterns.*

**Anti-clauses**
- We will NEVER introduce new systems mid-game, outside of minigame mechanics.
- We will NEVER require key combinations of any kind to achieve any result.
- We will NEVER assume that the player knows how to complete common game tasks, such as movement in a 3D space, camera rotation, or interaction targeting.
- We will NEVER hide critical gameplay understanding behind layered menus, dense stat sheets, or unexplained UI abstractions.
- We will NEVER require fast reaction speed or mechanical execution precision to progress.

**Mechanics this pillar justifies** (REQ-IDs from `.planning/REQUIREMENTS.md`):

*Hardware (the DI #5 anchor):*
- **DIST-06** — Acceptable performance (target 60fps) on integrated-GPU hardware (the cozy demographic floor). Direct DI #5 enforcement.

*Controls (input simplicity):*
- **CTRL-01** — 3D character movement on WASD + analog stick. Conventional and universal input bindings.
- **CTRL-02** — Camera rotation on mouse + right stick. Conventional input.
- **CTRL-03** — Single primary action button (E / A or X) for context-sensitive interaction. Anti-modifier-stack approach.
- **CTRL-05** — Pause / open menu / journal anytime without losing game state. Anti-friction.
- **CTRL-06** — Full control remapping on KBM and gamepad. Accessibility.
- **CTRL-07** — Gamepad-first navigation; every UI screen gamepad-navigable without mouse. Accessibility.
- **CTRL-08** — No chord or modifier-combination input requirement (e.g., Shift+Click+Drag). Direct anti-clause 2 enforcement.

*Onboarding:*
- **ONB-01** — New player learns core controls (move, interact, inventory, dialogue) within first 5 minutes. Direct DI #1 enforcement.
- **ONB-02** — New player completes a first-day sequence introducing NPCs, gathering, crafting, journal. Direct DI #1 enforcement at the slice-onboarding layer.
- **ONB-03** — Game never introduces a new core control or system in late-game without re-tutorializing it. Direct anti-clause 1 enforcement.
- **ONB-04** — Game never demands prior gaming literacy. Direct anti-clause 3 enforcement.

*UI accessibility:*
- **UI-01** — UI text scaling up to ≥150% of base size. Accessibility.
- **UI-02** — Colorblind-friendly palette (or default colorblind-friendly). Accessibility.
- **UI-03** — Subtitles for all spoken / narrative content by default. Accessibility.
- **UI-04** — Independent volume controls (master/music/SFX/dialogue/ambience). Accessibility.
- **UI-05** — Pause anytime including during dialogue. Anti-friction.
- **UI-06** — Window mode adjustment (fullscreen / windowed / borderless). Accessibility.
- **UI-07** — Graphics quality presets targeting integrated-GPU hardware. Direct DI #5 enforcement at the rendering layer.
- **UI-10** — First-run optional tutorial for someone who has never played a cozy game. Direct DI #1 enforcement at first-launch.

*Enabler (not directly justified, but required for this pillar's diagnostic):*
- **HEALTH-05** — Persona-zero playtest ritual. Without HEALTH-05 sessions (Dawn-shape player encountering the game cold), the failure-mode signature's signals can't be captured. Same enabler role as Pillars 1 and 2.

**Total: 20 REQs justified directly + 1 enabler.** *(UI-08 localization-routing, UI-09 content warning, and LOC-01..03 considered and rejected — they're localization-architecture concerns better housed in a future Localization treatment, probably surfacing in Phase 10 / M2 production phase, not as a Vision Bible pillar.)*

---

## Pillar coverage summary

| Pillar | REQs justified | Plus enabler | OOS-list coverage |
|---|---|---|---|
| 1 — Character Development | 22 | HEALTH-05 | — |
| 2 — Never Punishing | 14 | HEALTH-05 | + entire Out-of-Scope list as enforced negative space |
| 3 — Approachability | 20 | HEALTH-05 | — |
| **Trio total** | **56 unique REQs** | + 1 enabler | + OOS reference |

~58% of v1 REQs anchored to a pillar. Remaining REQs (INFRA-*, AUDIO-*, DIST-01..05, LOC-*, MKTG-*, etc.) are production-phase or engineering-architecture concerns and don't require pillar enforcement.

---

## Cross-references

**Anchor decisions:**
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-02` (3–5 pillars + paragraph + anti-clauses requirement); `D-VISION-01..08` (premise lock that the trio rests on); `D-VISION-04` sharpened (two-layer puzzle structure)
- `.planning/STATE.md` decisions log — 2026-05-10 D-VISION-04 sharpening; 2026-05-10 NARR-06 + SAVE-04 amendments

**Persona-gap and persona-zero:**
- `01-vision-pitch.md` — pillars derive from this premise; persona-gap framing surfaces here verbatim
- `.planning/research/SUMMARY.md` — persona-gap framing ("evolving relationships in a world that never punishes you") cited in Pillar 1 and Pillar 2 anchors
- `.planning/research/PERSONA.md` — persona-zero (Dawn) corpus; Pillar 3's demographic anchor; HEALTH-05 ritual loop

**Project-wide enforcement:**
- `PHILOSOPHY.md` §III communication guardrails (no "Stardew Killer" framing); §V AI Use Policy (Daniel authors creative content; Claude does NOT)
- `.planning/REQUIREMENTS.md` Out-of-Scope list — Pillar 2's negative space enforcement
- `.planning/SCOPE.md` 2026-05-10 entries — NARR-06 reframe, SAVE-04 event-log amendment, combat anti-clause tightening
- `.planning/persona-zero-emergent-feedback.md` — NARR-06 reframe origin; pet-adoption candidate (parked for plan 01-02 / 01-03 review)

**Downstream consumers (Phase 1 docs that anchor here):**
- `07-pillar-mechanic-matrix.md` — every mechanic in REQUIREMENTS.md scored against these 3 pillars
- `08-failure-mode-analysis.md` — pillar-failure signatures (consumes the per-pillar Failure-mode Signature blocks)
- `23-why-play-at-hour-200.md` — retention strategy mapped to pillars
- `05-core-loops.md` — moment-to-moment loops derived from D-VISION-04 two-layer (Pillar 1) and per-pillar enforcement
- `06-player-journey.md` — journey horizon table aligned with Pillar 1's character-arc structure

**Phase 3+ enforcement chain:**
- Every Phase 3+ system-design plan must pass the *"which pillar does this system serve?"* check (per PHILOSOPHY.md §II Design guidelines)
- A system that serves no pillar is an orphan — Pillar 1 DI #4 forbids it; cut or justify via amendment

**Persona-zero validation chain:**
- 2026-05-09 — premise co-developed with Dawn during `/gsd:discuss-phase 1` (D-VISION-05 vision lock)
- 2026-05-10 — pillars authored by Daniel
- *Pending:* persona-zero session 1 (HEALTH-05) — Dawn reads vision pitch + core fantasy; reaction logged at `.planning/playtest-log/{YYYY-MM-DD}-vision-pack-reaction.md`. Pillars are not directly read in session 1 (the vision pack reactions inform pillar resilience indirectly).
