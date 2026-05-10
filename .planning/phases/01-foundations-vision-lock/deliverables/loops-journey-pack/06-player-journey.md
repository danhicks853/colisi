---
deliverable: 06
pack: loops-journey
title: Player Journey Map
author: Daniel
ai_role: structure-only
depends_on:
  - 01-vision-pitch.md
  - 02-pillars-of-play.md
  - 05-core-loops.md
decisions_referenced:
  - D-SCOPE-06
downstream_consumers:
  - 23-why-play-at-hour-200.md (hour 100 / hour 500 rows feed retention doc)
  - 09-slice-scenario-sketch.md (first-hour row anchors slice scenario)
  - Phase 6 onboarding plans (first 5 min / first hour rows guide ONB-01..04)
  - 08-failure-mode-analysis.md (each row's "what goes wrong" feeds failure modes)
---

> **AI POLICY (PHILOSOPHY.md §V):** Daniel authors all content in this file. Claude provides ONLY the table structure below and refuses to draft player-feeling prose, action descriptions, or systems narratives. Claude critiques drafts when Daniel requests.

# Player Journey Map — Colisi

> Per `D-SCOPE-06`: the player's experience across the time arc of a 30+ hour cozy life sim. Five canonical time marks (first 5 min / first hour / hour 10 / hour 100 / hour 500). The "hour 100" and "hour 500" rows are the rows where the four-killer endgame cliff (`PITFALLS` Pitfall 3) shows up — they are load-bearing.
>
> **Source format** (per `01-RESEARCH.md` Pattern 6): Yu-kai Chou phase model adapted for life-sim. Discovery / Onboarding / Scaffolding / Endgame phases are the standard four-phase model from gamification literature.

---

## Journey table

| Time mark | Phase (Yu-kai Chou) | What player is doing | What player is feeling | What systems support it | What goes wrong if pillar X fails |
|---|---|---|---|---|---|
| **First 5 min** | Onboarding | {Daniel authors} | {Daniel authors} | {Daniel authors — likely CTRL-01..08, ONB-01} | {Daniel authors — failure mode if onboarding pillar fails} |
| **First hour** | Onboarding → Scaffolding | {Daniel authors} | {Daniel authors} | {Daniel authors — likely CTRL, ONB-02, NPC introductions, first match observation per D-VISION-04} | {Daniel authors} |
| **Hour 10** | Scaffolding | {Daniel authors} | {Daniel authors} | {Daniel authors — likely NPC, NARR, COMP, match-puzzle layer per D-VISION-04} | {Daniel authors} |
| **Hour 100** | Endgame | {Daniel authors — multi-thread narrative concurrent} | {Daniel authors} | {Daniel authors — multi-axis relationships NPC-03, state-tagged dialogue NPC-05, NARR-03 multi-thread} | {Daniel authors — content-cliff failure mode} |
| **Hour 500** | Endgame | {Daniel authors — player-driven goals} | {Daniel authors} | {Daniel authors — four-engine retention strategy, cross-ref 23-why-play-at-hour-200.md} | {Daniel authors — endgame cliff has fully manifested} |

---

## Journey notes

### First 5 min

{Daniel authors — what's the very first impression? What does the player learn to do? Anchors to ONB-01 (core controls in 5 min).}

### First hour

{Daniel authors — what's the "session 1 hook"? What experience does the player carry away? Should leave them wanting to come back tomorrow.}

### Hour 10

{Daniel authors — by hour 10, the player is past the new-toy phase. What's the new compounding interest? Likely the first matchmaking setup that lands.}

### Hour 100

{Daniel authors — by hour 100, the player is in Endgame phase per Yu-kai Chou. The retention engines (state-tagged dialogue / multi-thread / seasonal recurrence / player-driven goals) must be load-bearing here. If they fail here, the persona-zero bounce reason fires.}

### Hour 500

{Daniel authors — hour 500 is the existential test. What is the player still finding meaningful? Cross-ref `23-why-play-at-hour-200.md` — that doc should have an answer for every cell of this row.}

---

## Cross-references

- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-06`
- `02-pillars-of-play.md` — "what goes wrong if pillar X fails" column maps to failure-mode-analysis
- `05-core-loops.md` — journey marks position the loops in player-time
- `08-failure-mode-analysis.md` — each row's failure mode is a row in failure-mode analysis
- `23-why-play-at-hour-200.md` — hour 100 / hour 500 rows feed retention doc
- `.planning/research/PITFALLS.md` Pitfall 3 — the cliff that hour-100 / hour-500 rows must mitigate
