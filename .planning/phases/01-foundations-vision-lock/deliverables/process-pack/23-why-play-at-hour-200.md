---
deliverable: 23
pack: process
title: Why Play Colisi at Hour 200 — Four-engine Retention Application
author: Claude (four-engine framing from research/SUMMARY.md); Daniel (per-engine "at hour 200" content + sprite-premise re-interpretation)
ai_role: synthesis-allowed (four-engine framing from research; Daniel authors application content)
depends_on:
  - .planning/research/SUMMARY.md
  - .planning/research/PITFALLS.md
  - .planning/research/ARCHITECTURE.md
  - 01-vision-pitch.md
  - 02-pillars-of-play.md
decisions_referenced:
  - D-SCOPE-23
  - D-VISION-04
  - D-VISION-06
  - D-WORLD-03
  - D-SCOPE-07
  - D-SCOPE-08
downstream_consumers:
  - 06-player-journey.md (hour 100 / hour 500 rows feed off this doc)
  - 08-failure-mode-analysis.md (failure modes for hour-200 retention listed here become signatures)
  - Phase 6 narrative authoring budget (this doc names how much state-tagged dialogue is required)
  - Phase 9 content-scaling planning (full-game retention engines load-bearing here)
  - 28-greenlight.md (Daniel commits to retention strategy at greenlight)
---

> **AI POLICY (PHILOSOPHY.md §V):** The four-engine framing below is **synthesized from `research/SUMMARY.md`** — that's a research deliverable, citation-allowed. Each engine's "At hour 200:" subsection contains a placeholder for **Daniel** to author how the engine manifests for the locked sprite + matchmaking premise. Claude refuses to draft the manifestation prose, the re-interpretation prose, or the failure modes — those are creative-content slots.

# Why Play Colisi at Hour 200

> The endgame content cliff (`PITFALLS.md` Pitfall 3) is persona-zero's #1-cited bounce reason across 6 games she's quit. This document specifies, **before any code is written**, why a player still wants to be playing at hour 200.
>
> Per `D-SCOPE-23`: structural application of the four-engine retention strategy from `research/SUMMARY.md`, retuned for the locked sprite + matchmaking premise (`D-VISION-04`).

---

## The four-engine retention strategy (cited from research/SUMMARY.md)

### Engine 1: State-tagged authored dialogue (no max state)

**What** *(citation from `research/SUMMARY.md`)*: Every dialogue line is gated by world-state combinations, not friendship-level tiers. 6 base barks × 100 world-state combinations = 600 effective lines. Multi-axis relationships (`NPC-03`) and dialogue-eligibility cascades (`NPC-05`) make every NPC line situational.

**At hour 200** *(paraphrased from locked decisions per Daniel directive 2026-05-10; cross-references D-VISION-13 + D-VISION-14 + NPC-05 + SAVE-04 amendment)*:

At hour 200, state-tagged dialogue compounds across multiple accumulated dimensions:
- **Multi-axis relationship state** (NPC-03) × every villager × matchmaking outcomes (D-VISION-13 any-to-any) × tonal-state register (D-VISION-14 bidirectional) × pre/post-spritesight branching (D-VISION-12) × NG+ wisp memory (D-VISION-09) = a combinatorial state space substantially deeper than hour-50
- **Specific compounding examples:**
  - A villager whose matchmaking arc landed differently across NG+ runs has different post-pairing dialog states that fire at hour 200 (per D-VISION-09 cross-playthrough memory)
  - A villager whose arc completed in a low-altruistic-tonal-state playthrough (D-VISION-14) has cooler-register dialog firing at hour 200 vs the same villager's warmer-register variants in altruistic playthroughs
  - A villager whose pet matched (D-VISION-11 animal rescue meta-anchor; e.g., Cyrus × rescued cat) has post-pet-adoption dialog states that wouldn't have existed pre-cat-completion
  - Per-villager arc-completion states (NPC-04 state machine) × matchmaking-partner-state × village-aesthetic-state (D-VISION-10 Layer 2) = multiple dialog-eligibility dimensions
- **The dialog corpus authored at Phase 6** (slice ~600 lines + full-game scale-up per quantitative anchors below) generates these combinatorial state-tagged variants. At hour 200, the player encounters dialog combinations a hour-50 player hasn't seen — not because of "new content," but because of new state.
- **NG+ wisp-recall narration** (D-VISION-09) adds per-archetypal-trigger-point recall lines that only fire after the wisp has accumulated prior-playthrough event-log knowledge — these are categorically absent at hour 50 (pre-completion) and present at hour 200 (post-completion / NG+).

### Engine 2: 3+ active narrative threads always

**What** *(citation from `research/SUMMARY.md`)*: Multi-thread narrative architecture (`NARR-03`). When one thread resolves, others continue. The slice (`Phase 6`) demonstrates the architecture; full game scales it; persona-zero quit Spiritfarer / Hogwarts Legacy / The Stillness of the Wind in part for thread-collapse cliffs.

**At hour 200** *(paraphrased from locked decisions; cross-references D-VISION-04 cascading thread + meta-loop anchor catalog from `05-core-loops.md` + D-VISION-11 animal rescue)*:

At hour 200, the meta-loop anchor catalog (locked plan 01-03) provides 7 distinct anchor types that produce concurrent narrative threads:
1. **Matchmaking arcs** (D-VISION-04) — full game has C(12,2) = 66 possible pairs; ~6-15 pairings pursued per playthrough; pursued-pairings + observed-incompatibilities + currently-deepening-pairs = multiple in-flight threads
2. **Personal-magic mastery arcs** — per villager, magical breakthrough trajectories at various stages across the 12-15 cast
3. **Village-wide project / festival arcs** — sanctuary completion (D-VISION-11 first concrete example) + seasonal festival outcomes accumulating across in-world years
4. **Individual character arcs** — per-villager personal narrative independent of matchmaking
5. **Friendship / found-family arcs** — non-romantic relationship deepening; rivalries; mentorships
6. **Seasonal recurrence arcs** — each in-world year cycles with accumulated context (see Engine 3)
7. **Animal rescue arcs** (D-VISION-11) — cat tutorial + sanctuary content + ongoing pet adoptions for additional rescued animals
- **Cascading thread mechanic** (D-VISION-04 closure mechanic) — every arc's ripple plants the seed for the next anchor; **the next anchor doesn't have to be the same type as the current one** — matchmaking ripple → personal-magic seed → festival ripple → animal rescue seed. At hour 200, dozens of cascading-thread linkages have fired; the player is always somewhere in the middle of 3+ threads.
- **Match-failure threads** (D-VISION-13 non-altruistic playthroughs valid): pairings that became unhappy or failed create their own ongoing narrative content — the unhappy pair's continued life in Sterling, post-breakup dynamics, neighboring villagers' reactions. Failures spawn new threads rather than ending them.

### Engine 3: Seasonal recurrence with persistent variation across years

**What** *(citation from `research/SUMMARY.md` + `D-WORLD-03`)*: Stardew-shape calendar (`D-WORLD-03`) with named annual festivals (`WORLD-04`); year-2 festivals reference year-1 outcomes. Recurring events with persistent state-aware variation are the single highest-leverage retention pattern in cozy life-sim.

**At hour 200** *(paraphrased from locked decisions; cross-references D-WORLD-03 Wheel of the Year + AUDIO seasonal arrangements + Samhain altar tradition + state-tagged dialogue accumulation across years)*:

At hour 200, ~5-10 in-world years have elapsed across the player's accumulated playtime (depending on player pacing and how often they rest at sanctum). The seasonal-recurrence cycle has produced ~20-40 festival instances. Each festival reflects accumulated context:
- **Wheel of the Year framework** (Ostara / Litha / Mabon / Yule seasons + Imbolc / Beltane / Lammas / Samhain transition festivals) — 4 festivals per in-world year × ~5-10 years = 20-40 festival instances at hour 200
- **Per-festival accumulated context examples:**
  - **Beltane Year 3** vs Year 1: matchmaking-arc-climax festival reflects who paired since the prior Beltane; the village's accumulated pair-roster shapes the dance partners + spatial blocking + dialog
  - **Lammas Year 4** vs Year 1: bread-festival anchored at Sprinkles's Bakery reflects 4 years of accumulated Sprinkles-arc + matchmaking outcomes affecting which villagers help at her bakery
  - **Samhain Year 5** vs Year 1: family-altar tradition (locked 2026-05-10) has 4+ years of accumulated villager-honored-figures; Year-5 altars reference Year-1-Year-4 altars; cumulative village memory accumulates per Samhain cycle
  - **Imbolc Year 6** vs Year 1: candle-lighting / contemplation register reflects accumulated village state — what villagers have lost, what they've gained, what they're stirring toward
- **AUDIO seasonal arrangements** (per AUDIO architectural commitment 2026-05-10) — each season has its own arrangement of character-coded leitmotifs; hearing Sprinkles's leitmotif in 4 different seasonal arrangements across multiple in-world years compounds the felt-time-passing
- **D-VISION-14 bidirectional tonal arc** — festivals in altruistic playthroughs feel warmer year-over-year; festivals in non-altruistic playthroughs maintain or regress in tonal warmth — accumulated tonal trajectory shapes each subsequent festival's emotional register
- **NPC-08** (NPCs reference seasons / festivals): villagers' dialog at hour 200 references prior festivals — "Last Beltane was the first one Ari attended; this year she's helping organize the dance circles" — accumulated context layered into each character's voice

### Engine 4: Player-driven creative goals

**What** *(citation from `research/SUMMARY.md` + `D-VISION-06`)*: Sims-style player expression — building, customizing, decorating, role-playing, self-direction (`HOME-01..05`). Persona-zero's stated dream cross is BG3 × Sims; the Sims-side of the cross provides this engine.

**At hour 200** *(paraphrased from locked decisions; cross-references D-VISION-10 village-as-canvas + D-VISION-09 NG+ + D-VISION-13 any-to-any + D-VISION-11 cat optional)*:

At hour 200, the player drives goals against the system through multiple emergent surfaces:
- **D-VISION-10 Layer 2 village-as-canvas** — ~50+ shared-space upgrade slots × 2-4 alternatives = ~100-200 aesthetic-choice combinations; players develop personal goals around village aesthetic (e.g., "I want every shared space to reflect what each villager contributed to Sterling")
- **D-VISION-10 Layer 3 faerie houses** — collecting all 12-15 villager-themed faerie houses by completing each villager's full arc is a natural player-driven goal
- **D-VISION-13 any-to-any matchmaking** — player can pursue specific pairing strategies (e.g., "match the lowest-compatibility pair successfully across NG+ runs"); 66 possible pairs × pursuit-strategies = combinatorial goal space
- **D-VISION-11 cat + animal rescue** — finding cat + completing its arc + animal sanctuary cascading content; player-named pet provides ownership investment
- **D-VISION-09 NG+ time-loop** — 3 NG+ runs cap + cumulative wisp memory across runs = player can author distinct playthroughs (altruistic Y1; experimental Y2; non-altruistic Y3; cleanup Y4) per their narrative interest
- **D-VISION-14 bidirectional tonal arc** — players who want a "challenging" non-altruistic playthrough can pursue it without game punishment; players who want pure-comfort altruism can pursue it; player-authored emotional register
- **NARR-06 replay-as-revelation** — players' goal of "experience all of villager X's life through replay" becomes a meta-game; per villager × per NG+ playthrough = many replay surfaces
- **Phase 6 magic-tutoring minigame mastery** — ~10 magic categories (per §4.4 World Bible taxonomy) × per-villager identity-magic variants = player-driven mastery goals across categories

At hour 200, the player has authored their own narrative arc within the system: which matchmakings to pursue, which non-altruistic experiments to run in NG+, which faerie houses to collect, which village aesthetic to compose. The system does not prescribe goals; it provides surfaces against which players create their own.

---

## Re-interpretation under sprite + matchmaking premise

The four-engine strategy was authored before the vision lock. Each engine retunes under the locked premise (`D-VISION-04`).

*(Paraphrased from locked decisions per Daniel directive 2026-05-10; cross-references D-VISION-04 + D-VISION-09 + D-VISION-10 + D-VISION-11 + D-VISION-13 + D-VISION-14)*:

Matchmaking-as-puzzle (D-VISION-04 meta layer) compounds with the four engines in a way that the original SUMMARY.md framing didn't yet capture (because the matchmaking premise was locked AFTER the four-engine framework was authored). Each successful matchmaking creates:

- **New state combinations for Engine 1** — paired villagers' relationship-state-with-each-other becomes a new dimension on top of relationship-state-with-the-wisp; quality of match (D-VISION-13 telegraphed compatibility) affects post-pairing dialog states; failed matches produce their own state dimensions (breakup states; unhappy-partnership states); NG+ wisp memory of prior-playthrough pairings adds cross-playthrough state dimensions
- **New threads for Engine 2** — each pairing's relationship arc becomes an ongoing thread (post-honeymoon; first conflict; deepening; potential conflict resolution; long-term partnership states); matchmaking ripples per D-VISION-04 cascading thread spawn new anchor threads in adjacent villagers (their reactions, new dynamics, new partnership-eligibility shifts in the village)
- **New festival reactions for Engine 3** — paired villagers have shared festival experiences year-over-year (their second Beltane together vs their first; their first Lammas after pairing); the village's accumulated pair-roster shapes every festival's blocking, dialog, music arrangement; Samhain altars reflect pair-histories (a villager who lost a partner has altar references; a couple's family-altar reflects both their honored figures)
- **New player-driven goals for Engine 4** — players develop matchmaking strategies across NG+ runs ("match the unlikely pair successfully"); pairing outcomes shape village aesthetic via D-VISION-10 Layer 2 village-as-canvas; cat-with-Cyrus pairing (D-VISION-11 post-slice) opens animal-rescue meta-anchor as new goal class

**Beltane as matchmaking-arc climax** (per `12-world-bible-v0.1.md` §5.3): each in-world year, Beltane is the natural cycle-anchor for matchmaking-puzzle resolutions. At hour 200, ~5-10 Beltanes have produced cumulative matchmaking outcomes; each year's Beltane reflects accumulated pair-history. The compounding is structural — Beltane is a designed-in moment where the matchmaking layer's outputs surface festival-scale.

**Bidirectional tonal arc** (D-VISION-14) propagates through matchmaking: pursued non-altruistic matchmakings (telegraphed warnings ignored) keep village tonal state cool, affecting subsequent matchmaking attempts' dialog; altruistic-trajectory matchmaking compounds toward village-warmth.

**The structural argument** for why sprite + matchmaking was the right design choice for endgame retention: matchmaking provides a *combinatorial content multiplier* that none of the four engines have on their own. Each match creates content for all four engines simultaneously. The slice (Phase 6) demonstrates this at C(4,2) = 6-pair scale; full game scales to C(12,2) = 66 pairs × 4 engines compounding × NG+ memory = a content-state space substantially larger than the engines alone would produce.

---

## Failure modes for hour-200 retention

If this document's claims don't hold in slice playtest, what are the warning signs?

*(Paraphrased from `08-failure-mode-analysis.md` Pillar 1 Hour 100 row + Pillar 2 Hour 100 row + Pitfall 3 endgame content cliff)*:

- **Failure mode 1: "I've matched everyone — what now?"** Dawn says this within hour 5 of the slice → engines aren't compounding; cascading thread isn't surfacing new anchors; D-VISION-04 + D-VISION-11 multi-anchor meta-loop isn't functioning. Slice should produce the *opposite* signal: "I've matched Ari × Zhan and now I want to know what happens to the cat / what Cyrus does next / who Sprinkles ends up with."
- **Failure mode 2: Villagers feel static.** Dawn revisits a sighted villager hour 5+ and reports no felt-difference in their state-tagged dialogue from earlier sessions → state-tagged dialogue isn't actually firing dynamically; Engine 1 broken at hour 200 scale.
- **Failure mode 3: Festivals feel identical year-over-year in slice playtest.** Slice's ~3-day span can't show this directly, but if Phase 6 cross-year content authoring produces identical Beltane / Lammas / Samhain content despite changed village state, Engine 3 is broken.
- **Failure mode 4: "I can't think of anything to do."** Player-driven goals (Engine 4) are not surfacing — village-as-canvas upgrade slots aren't firing; faerie houses aren't tied to villager-arc completion; NG+ memory isn't presenting compelling replay variations.
- **Failure mode 5: Cliffhanger doesn't pull.** First-kiss cliffhanger (slice end) does not drive wishlist conversion → matchmaking-as-puzzle compounding isn't legible; the "I want to know what happens next" pull isn't landing. Per Pillar 1 hour 10 wishlist-gate failure-mode signature in `08-failure-mode-analysis.md`.

These failure modes become **leading-indicator** entries in `08-failure-mode-analysis.md` and watch-items for the persona-zero playtest ritual (`22-personazero-playtest-ritual.md`). Per Pitfall 3 (endgame content cliff): if any of these signatures appear in slice playtest, hour-200 retention is at risk before the slice even ships.

These failure modes become **leading-indicator** entries in `08-failure-mode-analysis.md` and watch-items for the persona-zero playtest ritual (`22-personazero-playtest-ritual.md`).

---

## Quantitative anchors (Daniel populates as authoring proceeds)

> These numbers feed the dialogue-authoring budget in Phase 6 / 9. Per `STATE.md` 2026-05-09 decisions log, the AI policy removed runtime procedural-template dialogue, **so the state-tagged authored dialogue load is materially higher than originally planned.** This doc is where the honest accounting lives.

- **Slice (Phase 6) target:** ~150 state-tagged dialogue lines per NPC × 4 NPCs = ~600 lines (per `Phase 6` success criterion 1 + `NPC-05`)
- **Full-game (Phase 9) target:** **DEFERRED** to post-slice retro (rough estimate: ~150 × 12 = ~1,800 lines minimum across full roster, with growth from successful matches creating new state combinations). Slice authoring-pace data informs the full-game multiplier. Plus NG+ wisp-recall narration variants (per D-VISION-09, ~20-50 archetypal trigger points × 3 NG+ runs × per-archetype variant count) adds substantial layer on top.
- **State combinations per NPC:** **DEFERRED** to Phase 4 NARR scripting where state-tag schema is fully specified. Rough framework: multi-axis relationship state (4 axes per NPC-03) × world flags (per matchmaking outcomes; D-VISION-13 ~3-5 per NPC at hour 200) × tonal-state register (D-VISION-14 warm/neutral/cool) × pre/post-spritesight (D-VISION-12) × seasonal-arrangement (4 seasons) × NG+ memory (per playthrough number) = combinatorial state space; not every combination needs an authored line, but the available combinations are the eligibility surface from which dialogue fires.

---

## Daniel signature

**Why play at hour 200 doc ratified by:** Daniel Hicks
**Date:** 2026-05-10
**State:** Four-engine retention strategy applied to sprite + matchmaking premise; matchmaking-as-puzzle compounding argument articulated; 5 failure modes specified (paraphrased from `08-failure-mode-analysis.md` Hour 100 row + Pitfall 3 framework per Daniel directive 2026-05-10 paraphrase permission); quantitative anchors: slice target locked at ~600 lines; full-game + state-combinations deferred to Phase 4 NARR + post-slice retro.

**Daniel signature:** 2026-05-10 — Hour-200 retention doc LOCKED; four-engine framework + matchmaking-compounding argument committed; failure modes feed `08-failure-mode-analysis.md` + HEALTH-05 ritual watch-items.

---

## Cross-references

- `.planning/research/SUMMARY.md` — four-engine retention strategy (the source citation)
- `.planning/research/PITFALLS.md` Pitfall 3 — the cliff this doc is designed to mitigate
- `.planning/research/ARCHITECTURE.md` — state-flag loose branching architecture
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-23`, `D-VISION-04`, `D-VISION-06`, `D-WORLD-03`
- `.planning/REQUIREMENTS.md` — `NARR-03` (multi-thread), `NARR-05` (game continues post-arcs), `NPC-03/05/07/08`, `WORLD-04`, `HOME-01..05`
- `02-pillars-of-play.md` — pillars must serve hour-200 retention
- `06-player-journey.md` — hour 100 / hour 500 rows feed off this doc
- `07-pillar-mechanic-matrix.md` — retention mechanics scored against pillars
- `08-failure-mode-analysis.md` — failure modes here become bounce signatures
- `28-greenlight.md` — Daniel commits to retention strategy at greenlight
- `STATE.md` decisions log 2026-05-09 — procedural-template dialogue REMOVED per AI policy (`PROC-02` retired); authoring load now load-bearing
