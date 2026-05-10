---
deliverable: 24
pack: decision-lock
title: Time Model Lock
author: Claude (synthesis from D-TIME-01..05); Daniel (sign-off + trigger list from Core Loops)
ai_role: synthesis-allowed (synthesis from CONTEXT.md decisions; trigger list derives from 05-core-loops.md)
depends_on:
  - .planning/phases/01-foundations-vision-lock/01-CONTEXT.md
  - .planning/research/ARCHITECTURE.md
  - 05-core-loops.md
decisions_referenced:
  - D-SCOPE-24
  - D-TIME-01
  - D-TIME-02
  - D-TIME-03
  - D-TIME-04
  - D-TIME-05
downstream_consumers:
  - Phase 3 implementation (CTRL-01, time advance system, NPC navmesh + animation budget)
  - Phase 5 implementation (NPC schedule data, save-mid-walk policy, day/night visual decoupling)
  - 28-greenlight.md (time model commitment)
---

# Time Model Lock — Colisi

> Per `D-SCOPE-24`: synthesizes `D-TIME-01..05` into the locked time-model contract. **Pure action-driven contract.** Trigger list status (`D-TIME-05`) tracks here.
>
> Source: `01-CONTEXT.md` `<decisions>` Time Model section.

---

## Pure action-driven contract (D-TIME-01)

In-game time advances **ONLY** on explicit player actions. The world holds state indefinitely if the player stands still. Day/night visuals decouple from gameplay state.

This contract is **absolute** for v1. Any system that wants to advance time must do it through a player action — never on wall-clock, never on idle timer, never on inactivity timeout.

**REQUIREMENTS.md mappings:** `WORLD-05` (no real-time-pressure), `WORLD-06` (action-driven time advance), `CRAFT-07` (no item degradation — corollary).

---

## Player-controlled day/night cycle (D-TIME-02)

Visuals snap on rest, Stardew/ACNH-style. Standing still indefinitely never closes anything. `WORLD-03/05` compliance is structural, not policed by the system.

What this means in implementation:
- Day/night lighting drives off an **in-game time-of-day variable**, not real-time
- The in-game time-of-day variable advances on the trigger list (below)
- Player rest action snaps to the next day; never gets forced
- No "events expire at midnight" logic; no "missable windows"

**REQUIREMENTS.md mappings:** `WORLD-03` (cosmetic day/night), `WORLD-05`.

---

## NPC schedules use continuous pathing during play (D-TIME-03)

NPCs path between waypoints in real time while the player is in the zone. This is the **ambitious architectural choice**; it commits Phase 3 to navmesh + animation budget and Phase 5 to schedule data + save-mid-walk policy.

Within a single time-slot ("morning"), NPCs path between intra-slot stations (e.g., kitchen → garden → porch within "morning"). At time-slot boundary, NPCs snap to next-slot location with appropriate animation.

**Phase commitments triggered by D-TIME-03:**
- Phase 3: navmesh authoring tooling, character animation playback budget, basic pathfinding
- Phase 5: schedule data format (per-NPC, per-day, per-time-slot), save-mid-walk serialization policy

---

## Tension flagged for Phase 5 design (D-TIME-04)

NPCs move during play while sun does not (because day/night is player-controlled per `D-TIME-02`). Visually unusual but feels acceptable within a single time-slot.

**Save-mid-walk policy** needs explicit Phase 5 work:
- When the player saves mid-NPC-walk, what's serialized? (NPC's position, target waypoint, schedule slot, partial animation state?)
- When the save is reloaded, where does the NPC resume?
- Edge cases: what if the schedule data has changed between save and reload?

This is a Phase 5 plan-task, not a Phase 1 commitment beyond the architectural acknowledgment.

---

## Trigger list status (D-TIME-05)

Per `D-TIME-05`: "Pure action-driven" is the contract; the canonical list of actions that advance time **derives from the Core Loops Pack** (`05-core-loops.md` / `D-SCOPE-05`).

Locks here in plan 01-03 OR 01-06 AFTER Core Loops Pack drafts exist, OR explicitly defers to Phase 4/5 if Phase 1 execution finds the trigger list still ambiguous post-Loops.

Daniel's pushback during the discussion (verbatim from `01-CONTEXT.md`): *"how can we answer these questions if we don't know what the core game loop is?"* — captured. Rationale for deferring trigger-list lock: the loop itself is the source of truth.

**Status:** {pending plan 01-03 / 01-06 output — Daniel authors per D-TIME-05; or explicitly defer to Phase 4/5 with rationale}

**Locked-here triggers:**
- {Daniel authors after `05-core-loops.md` is drafted in plan 01-03}

**Deferred-to-Phase-4/5 triggers (with rationale):**
- {Daniel authors if any}

---

## Daniel signature line

**Time Model Lock ratified by:** Daniel Hicks
**Date:** {YYYY-MM-DD — Daniel signs at plan 01-06 close}
**Trigger list status at sign-off:** {Locked here / Deferred to Phase 4 / Deferred to Phase 5}

---

## Cross-references

- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-TIME-01..05`, `D-SCOPE-24`
- `.planning/research/ARCHITECTURE.md` — action-driven time architectural lean
- `.planning/REQUIREMENTS.md` — `WORLD-03/05/06`, `CRAFT-07`
- `05-core-loops.md` — trigger list source
- `.planning/ROADMAP.md` Phase 3 / Phase 5 — implementation commitments
- `26-architecture-ratification.md` — time model is a load-bearing architecture decision
- `28-greenlight.md` — time model committed at greenlight
