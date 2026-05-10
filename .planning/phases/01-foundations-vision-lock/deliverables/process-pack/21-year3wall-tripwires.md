---
deliverable: 21
pack: process
title: Year-3-Wall Tripwires Protocol
author: Claude (protocol synthesis from D-WALL-01..07); Daniel (specific thresholds in plan 01-06; outside-reviewer designation in plan 01-08)
ai_role: synthesis-allowed (protocol structure from CONTEXT.md; specific thresholds and outside-reviewer name require Daniel)
depends_on:
  - .planning/phases/01-foundations-vision-lock/01-CONTEXT.md
  - .planning/research/PITFALLS.md
decisions_referenced:
  - D-SCOPE-21
  - D-WALL-01
  - D-WALL-02
  - D-WALL-03
  - D-WALL-04
  - D-WALL-05
  - D-WALL-06
  - D-WALL-07
  - D-SUST-08
downstream_consumers:
  - 28-greenlight.md (tripwire criteria are load-bearing co-signature in greenlight)
  - Quarterly review (D-SUST-06) — tripwire status checked
  - Monthly retro — leading indicators reviewed
  - Phase 8 onwards (wishlist count tripwires fire at m12/m24/m36)
  - 27-MARKET-EVIDENCE.md (MKTG-06 verdict feeds m6 tripwire data)
---

# Year-3-Wall Tripwires Protocol — Colisi

> Per `D-SCOPE-21` + `HEALTH-03`: pre-committed pivot tripwires that fire automatically at named checkpoints and trigger the structured pause-and-replan protocol. Specific metric thresholds are populated in plan 01-06 from comparable-game research per `D-WALL-07`. Outside reviewer designated in plan 01-08 (Greenlight gate).
>
> The protocol exists because solo-dev burnout is one of the four killers (`PITFALLS.md` Pitfall 4); without pre-committed tripwires, tired-Daniel will rationalize past warning signs.

---

## Cascade cadence (D-WALL-01)

Four checkpoints at month 6 / 12 / 24 / 36. Each has its own pass/fail criteria. Earlier checkpoints catch problems while reversible; month 36 is the existential pivot point.

| Checkpoint | Project state at this point (target) | Existential or course-correcting? |
|------------|----------------------------------------|------------------------------------|
| **m6** | Phase 1 complete, Phase 2 mostly complete, MKTG-06 verdict landed | Course-correcting (early signal) |
| **m12** | Phase 3 mostly complete, Steam page sketch exists | Course-correcting (mid signal) |
| **m24** | Slice in late development, public devlog at established cadence, Steam page may be live | Strongly course-correcting (late signal) |
| **m36** | Slice ideally shipped; if not shipped, "Vol. 1" pivot decision | **Existential** — the named pivot point |

---

## Multi-OR triggers (D-WALL-02)

Any single metric below threshold fires the tripwire. Aggressive against late-firing; high false-alarm rate is acceptable BECAUSE the response is structured-pause, not auto-cut. False alarms are not costly; missed signals are.

---

## Pause-and-replan protocol (D-WALL-03)

When a tripwire fires:

1. **Trip detected** — mechanical, from metric check at checkpoint date
2. **Mandatory feature-work freeze** — no new code/content during pause
3. **1-week time-boxed pause window** — Daniel's choice; tighter than the 2-week recommendation
4. **Replan Document** authored during the pause:
   - Diagnosis (what data fired which metric, why)
   - Root-cause hypothesis (not symptom)
   - Three scenarios evaluated:
     - **Scenario A:** continue as-is (with explicit accepted-risk statement)
     - **Scenario B:** scoped continue (Vol. 1-style content cut, systems intact)
     - **Scenario C:** structural pivot (cut systems, change shape, or pause indefinite)
   - Scenario recommendation + rationale
5. **Outside reviewer cross-check** — pre-committed reviewer reads Replan Doc; their answer is **required co-signature** on chosen scenario (NOT advisory)
6. **Decision logged** in `SCOPE.md` + `ROADMAP.md` amendment (no silent drift)
7. **Return to work OR exit**

---

## Re-arm-and-rebaseline (D-WALL-04)

If the chosen scenario is **continue-as-is**, the Replan Doc must include updated specific metric targets to hit by next checkpoint. Cascade stays live. This prevents the "tripwire fires → talk it through → nothing changes → next tripwire ignored" failure mode.

---

## Enforcement (D-WALL-05)

**Pre-committed in writing + Daniel + designated outside reviewer.** Tripwire criteria are signed and dated in the Greenlight document (`28-greenlight.md`). When fired, Daniel + outside reviewer co-sign the chosen scenario.

**Outside reviewer name:** {Daniel designates before D-SCOPE-28 Greenlight — Phase 1 blocker per plan 01-08}

The outside reviewer is someone who:
- Has read this document AND the Greenlight document
- Agrees to read any Replan Doc filed during a tripwire pause
- Will co-sign or reject the chosen scenario
- Is **not** persona-zero (Dawn) — separation of design feedback from project-existence feedback
- Is reachable on a 1-week response timeline if a tripwire fires

---

## Productivity-tripwire metric unit (D-WALL-06)

Unit: **cumulative phase-completion delta vs roadmap estimate.** *(Same metric as `D-SUST-08` productivity tripwire signal in `20-sustainable-pace-cadence.md`.)*

Specific delta thresholds at each checkpoint authored in plan 01-06 per `D-WALL-07`.

The metric is honest because:
- It compounds (small deltas in early phases become large deltas later)
- It's empirically testable (actual phase completion dates vs roadmap estimates)
- It's not hour-based (avoids pressure-creating measurement per `D-SUST-02`)

---

## Specific metric thresholds at each checkpoint (D-WALL-07)

> **Status: deferred to plan 01-06.** Threshold cells below are populated by Daniel after a few hours of comparable-game research per `D-WALL-07` and `PITFALLS.md` Pitfall 3 ("Year-3-Wall thresholds set without comparable-game data" — sets thresholds on intuition rather than calibration). Sources: Chris Zukowski's wishlist-trajectory case studies, SteamDB stats for 5–10 cozy life sims, howtomarketagame.com posts.

| Checkpoint | Metric | Threshold | Source / rationale |
|------------|--------|-----------|---------------------|
| **m6** | MKTG-06 verdict | {populate from plan 01-06; minimum is "verdict landed" per HEALTH-03} | Per `D-MKTG-04` rubric |
| **m6** | Cumulative phase-completion delta | {populate from plan 01-06} | `D-WALL-06` productivity metric |
| **m12** | Cumulative phase-completion delta | {populate from plan 01-06; e.g., "if 3+ months behind, trip"} | `D-WALL-06` productivity metric; per `ROADMAP.md` Phase 3 risk |
| **m12** | Phase 3 slice-blocking foundations status | {populate; minimum "all 9 in place"} | Per `ROADMAP.md` Phase 3 success criteria |
| **m24** | Wishlist count (if Steam page is up) | {populate from comparable-game research} | Indie cozy life sim wishlist trajectories |
| **m24** | Slice ship status | {populate; minimum is "slice in beta with ring-2 testers"} | `ROADMAP.md` Phase 7 timeline |
| **m24** | Cumulative phase-completion delta | {populate} | `D-WALL-06` |
| **m36** | Wishlist count | {populate from comparable-game research} | The existential checkpoint |
| **m36** | "Vol. 1 pivot" criteria | {populate; e.g., "if slice not shipped AND wishlist <Nk, cut to 15–20hr Vol. 1"} | Per `ROADMAP.md` "Brutally Honest Timeline" + `HEALTH-03` |
| **m36** | Productivity rate vs full-game scope | {populate; whether 30hr scope is reachable in 24-36 more months at observed productivity} | `ROADMAP.md` Brutally Honest Timeline |

---

## Outside-reviewer designation tracking

> **Phase 1 blocker:** outside reviewer name must be filled before plan 01-08 (Greenlight gate). Per `D-WALL-05`, the reviewer co-signs the Year-3-Wall criteria in Greenlight as load-bearing.

**Outside reviewer name:** {Daniel designates}
**Relationship to project:** {Daniel describes — should NOT be persona-zero / Dawn}
**Acknowledgment:** {Reviewer signature/email confirming they understand the role}

---

## Daniel signature + Outside reviewer co-signature

**Year-3-Wall Tripwires Protocol ratified by:** Daniel Hicks
**Date:** {YYYY-MM-DD — Daniel signs at plan 01-06 close}

**Outside reviewer co-signature on tripwire criteria:**
**Reviewer:** {name}
**Date:** {YYYY-MM-DD — co-signed at Greenlight per plan 01-08}

---

## Cross-references

- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-WALL-01..07`, `D-SUST-08`, `D-SCOPE-21`
- `.planning/REQUIREMENTS.md` — `HEALTH-03`
- `.planning/research/PITFALLS.md` — Pitfall 4 (solo-dev burnout, one of four killers); Pitfall 3 (year-3-wall thresholds without comparable-game data, in 01-RESEARCH.md)
- `.planning/ROADMAP.md` — "Brutally Honest Timeline" frames the m36 existential checkpoint
- `20-sustainable-pace-cadence.md` — productivity tripwire unit defined parallel
- `28-greenlight.md` — load-bearing co-signature on these criteria
- `27-MARKET-EVIDENCE.md` — MKTG-06 verdict feeds m6 tripwire
- `15-risk-register.md` R-14 (outside-reviewer not designated by Greenlight)
