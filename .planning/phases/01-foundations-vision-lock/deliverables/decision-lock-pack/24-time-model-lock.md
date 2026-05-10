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

**Status:** LOCKED 2026-05-10 plan 01-03 (Few-trigger model — Daniel decision after Core Loops draft).

**Model:** Few-trigger (chosen over Single-trigger / Multi-trigger / Defer). Rationale: minimal triggers preserve "player can stand still indefinitely" (D-TIME-02) while giving festivals + major arcs structural calendar-impact that the seasonal-recurrence anchor type in the meta loop needs.

**Locked-here triggers:**

1. **Rest at sprite home/sanctum** → advances to next morning. Primary day-advancement trigger; player-initiated; closes the session loop's node 5 (Close OR re-orient — choosing Close routes through this trigger).
2. **Festival participation** → consumes the day (advances to next morning at festival's natural close). Festival-scheduled event; player chooses to attend; the act of attending books the day. Gives festivals (and the seasonal-recurrence meta-loop anchor) structural calendar-weight.

**Deferred-to-Phase-4/5 triggers (with rationale):**

1. **Multi-day arc beats** — DEFERRED per D-TIME-05. Some arcs may have explicit "this happens over the next N days" beats (e.g., a villager builds a workshop over a week; replay shows compressed time during construction). These are *arc-specific* time-passage beats, not generic player-action triggers. Defer rationale: depends on Phase 4 dialogue/scenario design + Phase 6 individual arc authoring; locking pre-slice would constrain narrative without observed feel. When deferred trigger fires, it's content-driven (the arc's NARR/SAVE design says so), not a canonical action a player takes.

**Explicit non-triggers (for clarity):**

- Magic-tutoring activity completion — does NOT advance time. Player can do many in one day.
- Major arc completion (matchmaking pair, magic-mastery breakthrough) — does NOT *itself* advance time; it unlocks structural beats (replay-as-revelation available, cascading thread surfaces next anchor).
- Zone transition — does NOT advance time. Sprite drifts freely between zones.
- Dialog scene completion — does NOT advance time.
- Standing still / drifting / observing — does NOT advance time. (D-TIME-02 honored.)

**Architectural implications (Phase 3 / Phase 4):**

- **Phase 3 SAVE schema** (per SAVE-04 amendment 2026-05-10): event log records each trigger fire with timestamp + significance marker. `current_day` is a top-level field on the save record; villager schedules re-derive from `current_day` on day-rollover.
- **Phase 4 NARR**: only festival NARR scenes and rest-prompts need calendar-tier scripting; all other scenes are calendar-tier-agnostic (firing based on relationship state + cumulative event-log markers, not "what day is it").
- **Continuous NPC pathing** (D-TIME-04): NPCs follow per-day schedules; schedules loop within a day and reset on day-rollover. Player observing villager-X-at-task at 3pm vs 7pm sees the same task if the day hasn't advanced — matches D-TIME-02 (no real-time pressure).

**Cross-link:** Full trigger list with rationale lives in `05-core-loops.md` § Trigger list. This doc references that as source of truth.

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
