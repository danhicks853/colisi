---
deliverable: 07
pack: loops-journey
title: Pillar × Mechanic Matrix
author: Daniel (scoring); Claude (REQ-ID extract from REQUIREMENTS.md)
ai_role: structure-only + REQ-ID extract from REQUIREMENTS.md (factual, not creative)
depends_on:
  - 02-pillars-of-play.md
  - .planning/REQUIREMENTS.md
decisions_referenced:
  - D-SCOPE-07
downstream_consumers:
  - Every Phase 3+ system-design plan (every new mechanic must score >0 on at least one pillar; "buys-its-slot" rule)
  - SCOPE.md (any mechanic flagged ORPHAN that's kept anyway gets a SCOPE.md entry justifying it)
  - 28-greenlight.md (orphan-mechanic decisions are part of greenlight commitment)
---

> **AI POLICY (PHILOSOPHY.md §V):** Daniel authors all pillar columns and scoring (0–3) and the orphan flagging. Claude pre-populates the **mechanic** column from REQUIREMENTS.md REQ-IDs (factual extract, not creative content). Claude critiques drafts when Daniel requests.

# Pillar × Mechanic Matrix — Colisi

> Per `D-SCOPE-07`: every mechanic in REQUIREMENTS.md gets a row × every pillar (3–5 columns max). Each cell scores 0–3 (0 = irrelevant; 3 = mechanic is core to pillar). Mechanics with all-zero rows are flagged **ORPHAN** — must be cut or have explicit rationale to keep (`SCOPE.md` entry required to keep an orphan).
>
> **Source format** (per `01-RESEARCH.md` Pattern 3): GameDesignSkills "Game Design Pillars: What Are They and How to Practically Apply Them" + Hades' Star three-pillars doc + Game-Design-Pillars course materials. Convergent across sources.
>
> **Workflow:** Daniel names pillars in `02-pillars-of-play.md` first → fills the four pillar column headers below → scores each cell 0–3 → flags orphans.

---

## Mechanic × Pillar scoring matrix

| Pillar | →    | {P1 — Daniel} | {P2 — Daniel} | {P3 — Daniel} | {P4 — Daniel} | Justification (1–2 sentences — Daniel) |
|--------|------|---|---|---|---|---|
| **NPC-01** (12+ named NPCs) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NPC-02** (NPC daily schedules) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NPC-03** (multi-axis relationships) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NPC-04** (NPC arc state machine) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NPC-05** (state-tagged authored dialogue) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NPC-06** (non-human companion / villager) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors — note D-VISION-08 reinterpretation} |
| **NPC-07** (NPCs reference past player choices) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NPC-08** (NPCs reference seasons/festivals) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NPC-09** (NPC-to-NPC gossip layer) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors — note D-VISION reframes as central match-info channel} |
| **NARR-01** (choices persist as world-state flags) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NARR-02** (no restart-to-rebranch) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NARR-03** (3+ active narrative threads always) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NARR-04** (multiple satisfying endings; no forced-tragic) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NARR-05** (game continues meaningful after main arcs) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NARR-06** (player-readable choice/outcome journal) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **NARR-07** (puzzles telegraph their solution) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **COMP-01** (invite NPC on outings) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors — re-interpreted under D-VISION-08} |
| **COMP-02** (companion contextual dialogue) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **COMP-03** (companion accompaniment evolves relationship) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **COMP-04** (no companion-fail-state) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **WORLD-01** (8 distinct zones) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **WORLD-02** (zones persist player changes) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **WORLD-03** (cosmetic day/night cycle) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **WORLD-04** (visible seasonal cycle) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **WORLD-05** (no real-time-pressure mechanics) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **WORLD-06** (action-driven time advance) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **WORLD-07** (free fast-travel) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **CRAFT-01** (gather resources) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors — re-interpreted under D-VISION-08} |
| **CRAFT-02** (craft items at stations) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **CRAFT-03** (recipes unlock via narrative, not skill trees) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **CRAFT-04** (50%+ items have NarrativeMeta) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **CRAFT-05** (gift items trigger NPC reactions) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **CRAFT-06** (sufficient inventory) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **CRAFT-07** (no item degradation) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **HOME-01** (customizable home) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors — re-interpreted under D-VISION-08 sprite sanctum} |
| **HOME-02** (place/rotate/move/remove furniture) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **HOME-03** (50+ furniture items by end-game) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **HOME-04** (NPCs comment on home decoration) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **HOME-05** (home decoration state saves) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **ONB-01** (core controls in 5 min) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **ONB-02** (first-day sequence) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **ONB-03** (re-tutorialize new mechanics) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |
| **ONB-04** (no prior gaming literacy assumed) | | {0–3} | {0–3} | {0–3} | {0–3} | {Daniel authors} |

---

## Orphan-mechanics flag table

> Mechanics that score 0 across all pillars are ORPHAN — either cut or have explicit rationale to keep (with `SCOPE.md` entry per `PHILOSOPHY.md` §III: *"Never expand scope without an offsetting contraction. New systems must displace something or buy their slot with explicit rationale."*).

| REQ-ID | Pillar scores (P1, P2, P3, P4) | Decision (Cut / Keep with rationale) | If keep: SCOPE.md entry ID | Rationale |
|---|---|---|---|---|
| {Daniel populates after scoring} | | | | |

---

## Cross-references

- `.planning/REQUIREMENTS.md` — REQ-IDs source (mechanic column)
- `02-pillars-of-play.md` — pillar column headers (P1..P4)
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-07`, `D-VISION-08` REQ-reinterpretations
- `08-failure-mode-analysis.md` — pillar-failure signatures
- `26-architecture-ratification.md` — architecture amendments under D-VISION premise
- `SCOPE.md` — orphan-keep entries logged here
