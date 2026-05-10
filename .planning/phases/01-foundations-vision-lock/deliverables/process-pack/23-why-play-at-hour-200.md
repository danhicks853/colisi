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

**At hour 200:** {Daniel authors how this manifests in the sprite + matchmaking premise — what new state combinations are still firing in hour 200 that weren't in hour 50; per AI policy, Claude does not generate this content}

### Engine 2: 3+ active narrative threads always

**What** *(citation from `research/SUMMARY.md`)*: Multi-thread narrative architecture (`NARR-03`). When one thread resolves, others continue. The slice (`Phase 6`) demonstrates the architecture; full game scales it; persona-zero quit Spiritfarer / Hogwarts Legacy / The Stillness of the Wind in part for thread-collapse cliffs.

**At hour 200:** {Daniel authors how this manifests for sprite-matchmaking — which villager pairings are still in flight, which couplings have spawned new threads, which match-failures have created their own ongoing arcs; per AI policy, Claude does not generate this content}

### Engine 3: Seasonal recurrence with persistent variation across years

**What** *(citation from `research/SUMMARY.md` + `D-WORLD-03`)*: Stardew-shape calendar (`D-WORLD-03`) with named annual festivals (`WORLD-04`); year-2 festivals reference year-1 outcomes. Recurring events with persistent state-aware variation are the single highest-leverage retention pattern in cozy life-sim.

**At hour 200:** {Daniel authors how this manifests — what changes festival-to-festival based on accumulated village state; per AI policy, Claude does not generate this content}

### Engine 4: Player-driven creative goals

**What** *(citation from `research/SUMMARY.md` + `D-VISION-06`)*: Sims-style player expression — building, customizing, decorating, role-playing, self-direction (`HOME-01..05`). Persona-zero's stated dream cross is BG3 × Sims; the Sims-side of the cross provides this engine.

**At hour 200:** {Daniel authors how the sprite premise + village + decoration + craft + companion-on-outings form a system the player drives goals against; per AI policy, Claude does not generate this content}

---

## Re-interpretation under sprite + matchmaking premise

The four-engine strategy was authored before the vision lock. Each engine retunes under the locked premise (`D-VISION-04`).

{Daniel authors how matchmaking-as-puzzle compounds with the four engines — e.g., each successful match creates new state combinations for Engine 1, new threads for Engine 2, new festival reactions for Engine 3, new player-driven goals for Engine 4; per AI policy, Claude does not generate this content; cross-ref `D-VISION-04`, `D-VISION-06`}

---

## Failure modes for hour-200 retention

If this document's claims don't hold in slice playtest, what are the warning signs?

- {Daniel authors failure mode 1; per AI policy, Claude does not generate failure-mode prose}
- {Daniel authors failure mode 2}
- {Daniel authors failure mode 3}
- {Daniel authors failure mode 4 *(optional)*}
- {Daniel authors failure mode 5 *(optional)*}

These failure modes become **leading-indicator** entries in `08-failure-mode-analysis.md` and watch-items for the persona-zero playtest ritual (`22-personazero-playtest-ritual.md`).

---

## Quantitative anchors (Daniel populates as authoring proceeds)

> These numbers feed the dialogue-authoring budget in Phase 6 / 9. Per `STATE.md` 2026-05-09 decisions log, the AI policy removed runtime procedural-template dialogue, **so the state-tagged authored dialogue load is materially higher than originally planned.** This doc is where the honest accounting lives.

- **Slice (Phase 6) target:** ~150 state-tagged dialogue lines per NPC × 4 NPCs = ~600 lines (per `Phase 6` success criterion 1 + `NPC-05`)
- **Full-game (Phase 9) target:** {Daniel populates after slice retro provides authoring-pace data; rough estimate: ~150 × 12 = ~1,800 lines minimum across full roster, with growth from successful matches creating new state combinations}
- **State combinations per NPC:** {Daniel populates — relationship axes × world flags × match-state × season produces the multiplier}

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
