---
deliverable: 28
pack: greenlight
title: Colisi Greenlight Document
author: Daniel (knowing-what-I-now-know commitment + sign-off); Claude (structural skeleton + decision-ID list extracts)
ai_role: structure-only + factual extracts of D-VISION decisions and ratification cross-references; Claude refuses to draft the commitment paragraph or any voice content
depends_on:
  - 01-vision-pitch.md
  - 17-tools-pipeline-ratification.md
  - 20-sustainable-pace-cadence.md
  - 21-year3wall-tripwires.md
  - 22-personazero-playtest-ritual.md
  - 24-time-model-lock.md
  - 25-stack-ratification.md
  - 26-architecture-ratification.md
  - 27-MARKET-EVIDENCE.md
decisions_referenced:
  - D-SCOPE-28
  - D-VISION-01
  - D-VISION-02
  - D-VISION-03
  - D-VISION-04
  - D-VISION-05
  - D-VISION-06
  - D-VISION-07
  - D-VISION-08
  - D-WALL-05
downstream_consumers:
  - PROJECT.md (greenlight status logged)
  - STATE.md (Phase 1 → Phase 2 transition gate)
  - ROADMAP.md (Phase 2 entry unblocked by greenlight)
  - All future Replan Docs (this is the load-bearing co-signature reference if a tripwire fires)
---

> **AI POLICY (PHILOSOPHY.md §V):** Daniel authors the **knowing-what-I-now-know commitment paragraph** himself — this is creative-content prose. Claude provides ONLY the section structure, the factual `D-VISION` decision-ID extracts (citation, not voice), and the ratification cross-references. Claude refuses to draft the commitment paragraph or any other Daniel-authoring section. Claude critiques drafts when Daniel requests.

# Colisi Greenlight Document

> Per `D-SCOPE-28`: Daniel signs off as solo-dev "producer"; dated; "knowing what I now know, I commit to this" statement; gates Phase 2 entry. Includes pre-committed Year-3-Wall tripwire criteria as load-bearing co-signature per `D-WALL-05`.
>
> **Source format** (per `01-RESEARCH.md` Example 3): standard studio greenlight pattern — vision lock + risk acceptance + tripwires + signature line. Adapted for Colisi's solo-dev context.

---

**Date:** {YYYY-MM-DD — Daniel signs at plan 01-08}
**Project state:** Phase 1 (Foundations & Vision Lock) complete; Phase 2 (Infrastructure & Repo Setup) ready to begin.
**Signed by:** Daniel Hicks (solo-dev producer)
**Outside-reviewer co-signature on Year-3-Wall criteria:** {name + date — designated per `21-year3wall-tripwires.md` and `D-WALL-05`}

---

## Vision lock confirmation

I confirm the locked vision per `01-CONTEXT.md` `D-VISION-01..08`:

- **D-VISION-01:** Player is a magical helper-sprite — not a human protagonist. The sprite drifts/floats through a village.
- **D-VISION-02:** Each villager has their own personal magic that the player-sprite enables through relationship.
- **D-VISION-03:** Power distribution rule — the sprite gives magic, never accumulates it. Power scales with relationship, not stat-grinding.
- **D-VISION-04:** Central puzzle layer is matchmaking-via-environmental-manipulation. Sprite observes villagers and gently engineers meet-cute encounters.
- **D-VISION-05:** Persona-zero (Dawn) validated and co-developed the premise during `/gsd:discuss-phase 1` on 2026-05-09.
- **D-VISION-06:** This is the BG3 × Sims dream cross translated to mechanics — Sims-like world manipulation feeding BG3-like dialogue branching.
- **D-VISION-07:** Romance content in v1 is between villagers, not player-to-villager. Sprite cannot romance in v1.
- **D-VISION-08:** Per AI policy (`PHILOSOPHY.md` §V), Daniel and Dawn author all in-world content; Claude does not generate any of it.

Cross-reference: `01-vision-pitch.md` (Daniel-authored pitch derived from these decisions).

---

## Decisions ratified

I ratify the locked decisions captured in the following Phase 1 deliverables:

| Locked decision area | Ratification document | Source of truth |
|----------------------|----------------------|-----------------|
| **Tech stack** | `25-stack-ratification.md` | `research/STACK.md` |
| **Tools / pipeline** | `17-tools-pipeline-ratification.md` | `research/STACK.md` |
| **Architecture** | `26-architecture-ratification.md` | `research/ARCHITECTURE.md` |
| **Time model** | `24-time-model-lock.md` | `01-CONTEXT.md` `D-TIME-01..05` |
| **Sustainability rhythms** | `20-sustainable-pace-cadence.md` | `01-CONTEXT.md` `D-SUST-01..08` |
| **Year-3-Wall protocol** | `21-year3wall-tripwires.md` | `01-CONTEXT.md` `D-WALL-01..07` |
| **Persona-zero playtest ritual** | `22-personazero-playtest-ritual.md` | `01-CONTEXT.md` `D-SUST-07`; `HEALTH-05` |
| **MKTG-06 verdict** | `27-MARKET-EVIDENCE.md` | `01-CONTEXT.md` `D-MKTG-01..06` |

---

## Year-3-Wall tripwire criteria (load-bearing co-signature)

The following are pre-committed per `D-WALL-05`; they fire automatically at the named checkpoint and trigger the structured pause-and-replan protocol per `D-WALL-03`.

> **Status:** thresholds populated by Daniel after comparable-game research per `D-WALL-07` in plan 01-06. The table below mirrors `21-year3wall-tripwires.md`; this document is the **load-bearing copy** that the outside reviewer co-signs.

| Checkpoint | Metric | Threshold | Source / rationale |
|------------|--------|-----------|---------------------|
| **m6** | MKTG-06 verdict landed | {populate from plan 01-06; minimum "verdict landed"} | Per `D-MKTG-04` rubric and `27-MARKET-EVIDENCE.md` |
| **m6** | Cumulative phase-completion delta | {populate} | `D-WALL-06` productivity metric |
| **m12** | Cumulative phase-completion delta | {populate} | `D-WALL-06` |
| **m12** | Phase 3 slice-blocking foundations status | {populate} | `ROADMAP.md` Phase 3 |
| **m12** | Wishlist count *(if Steam page is up)* | {populate} | Comparable-game research |
| **m24** | Wishlist count | {populate} | Comparable-game research |
| **m24** | Slice ship status | {populate} | `ROADMAP.md` Phase 7 timeline |
| **m24** | Cumulative phase-completion delta | {populate} | `D-WALL-06` |
| **m36** | Wishlist count | {populate} | The existential checkpoint |
| **m36** | "Vol. 1 pivot" criteria | {populate} | `ROADMAP.md` Brutally Honest Timeline + `HEALTH-03` |
| **m36** | Productivity rate vs full-game scope | {populate} | `ROADMAP.md` Brutally Honest Timeline |

**Outside reviewer:** {name + relationship to project + signature}

The reviewer agrees, by co-signing this document, to:
- Read any Replan Doc filed during a tripwire pause
- Co-sign or reject the chosen scenario per `D-WALL-03` step 5
- Be reachable on a 1-week response timeline if a tripwire fires

---

## Knowing-what-I-now-know commitment

> Per `D-SCOPE-28` and `01-RESEARCH.md` Example 3 lines 794–796: Daniel writes a "knowing what I now know" commitment paragraph here. The paragraph names the scope, timeline, AI policy, four killers, cozy promise, vertical slice expectation, Daniel's own capabilities, persona-zero's validated reactions, and the locked architecture, and commits to the project knowing each.
>
> Per AI policy (`PHILOSOPHY.md` §V), **Claude does not draft this prose.** This is the one prose-style item in the Greenlight document; Daniel authors it.

{Daniel writes the commitment paragraph here. Plus any caveats or watch-items Daniel wants to flag now rather than later. Per AI policy, Claude does not generate this content.}

---

## Sign-off

**Signed:** Daniel Hicks
**Role:** Solo-dev producer
**Date:** {YYYY-MM-DD}

---

**Co-signed (Year-3-Wall criteria only):** {outside reviewer name}
**Date:** {YYYY-MM-DD}
**Acknowledgment:** {outside reviewer signature / verbatim email confirmation}

---

## Cross-references

- `01-vision-pitch.md` — pitch derived from `D-VISION-01..08`
- `17-tools-pipeline-ratification.md`, `25-stack-ratification.md` — stack ratification
- `26-architecture-ratification.md` — architecture ratification
- `24-time-model-lock.md` — time model lock
- `20-sustainable-pace-cadence.md` — sustainability rhythms
- `21-year3wall-tripwires.md` — full Year-3-Wall protocol (this doc is the load-bearing copy)
- `22-personazero-playtest-ritual.md` — persona-zero ritual; `HEALTH-05` minimum 2 sessions verified
- `27-MARKET-EVIDENCE.md` — `MKTG-06` verdict
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-28`, `D-VISION-01..08`, `D-WALL-01..07`
- `PROJECT.md`, `STATE.md`, `ROADMAP.md` — Phase 2 entry unblocked by this signature
