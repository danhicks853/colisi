---
deliverable: 05
pack: loops-journey
title: Core Loops Diagram
author: Daniel
ai_role: structure-only
depends_on:
  - 01-vision-pitch.md
  - 02-pillars-of-play.md
decisions_referenced:
  - D-SCOPE-05
  - D-VISION-04
  - D-TIME-01
  - D-TIME-02
  - D-TIME-03
  - D-TIME-04
  - D-TIME-05
downstream_consumers:
  - 24-time-model-lock.md (Trigger list per D-TIME-05 derives from this doc's moment-to-moment loop)
  - 06-player-journey.md (journey time-marks reference these loops)
  - 07-pillar-mechanic-matrix.md (loops surface which mechanics need pillar justification)
  - 09-slice-scenario-sketch.md (slice walkthrough is one playthrough of the session loop)
  - Phase 3+ system-design plans (every system slots into one of the three loops)
---

> **AI POLICY (PHILOSOPHY.md §V):** Daniel authors all content in this file. Claude provides ONLY the section structure below + diagram skeletons (boxes and arrows). Claude refuses to label loop nodes with in-world verbs or mechanic names. Claude critiques drafts when Daniel requests.

# Core Loops Diagram — Colisi

> Per `D-SCOPE-05`: nested moment-to-moment / session / meta loops. The locked premise (`D-VISION-04` matchmaking-via-environmental-manipulation) is the central puzzle layer; all three loops should make that layer feel meaningful.
>
> **Source format** (per `01-RESEARCH.md` "Don't Hand-Roll" table): nested moment-to-moment / session / meta loops convention from GameDesignSkills + GameAnalytics. Standard cozy/life-sim format.

---

## Moment-to-moment loop (~30 second cycle)

> What does the player do in a 30-second slice of play? This is the lowest-level engagement loop. Daniel labels each node with a player-verb derived from the locked sprite premise; do **not** invent in-world verbs (per AI policy, examples like "redirect / whisper / refresh / bloom" in `CONTEXT.md` `<specifics>` are placeholders Daniel will refine — Claude does not author the actual poetry of verbs).

```
   ┌─────────────────────────┐
   │ {Daniel labels node 1}  │
   └────────────┬────────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ {Daniel labels node 2}  │
   └────────────┬────────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ {Daniel labels node 3}  │
   └────────────┬────────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ {Daniel labels node 4}  │
   └────────────┬────────────┘
                │
                └──────► (returns to node 1)
```

**Notes:**
- {Daniel notes which `D-TIME-01..05` triggers fire on which arrows}
- {Daniel notes which pillars from `02-pillars-of-play.md` this loop serves}
- {Daniel notes which REQUIREMENTS.md REQ-IDs implement this loop}

---

## Session loop (~30 minute cycle)

> What does the player do in a typical 30-minute session? Aggregates many moment-to-moment cycles. The session loop should produce a **felt sense of progress** without forcing a session length.

```
   ┌─────────────────────────┐
   │ {Daniel labels node 1}  │
   └────────────┬────────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ {Daniel labels node 2}  │
   └────────────┬────────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ {Daniel labels node 3}  │
   └────────────┬────────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ {Daniel labels node 4}  │
   └────────────┬────────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ {Daniel labels node 5}  │
   └────────────┬────────────┘
                │
                └──────► (returns to node 1)
```

**Notes:**
- {Daniel notes how the session loop accommodates variable session length per `D-SUST-03`}
- {Daniel notes how the session loop respects "the player can stand still indefinitely" rule per `D-TIME-02`}

---

## Meta loop (~10 hour+ cycle)

> What does the player do across many sessions? This is the loop that keeps the game compelling at hour 200. References the four-engine retention strategy (cross-ref `23-why-play-at-hour-200.md`).

```
   ┌─────────────────────────┐
   │ {Daniel labels node 1}  │
   └────────────┬────────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ {Daniel labels node 2}  │
   └────────────┬────────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ {Daniel labels node 3}  │
   └────────────┬────────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ {Daniel labels node 4}  │
   └────────────┬────────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ {Daniel labels node 5}  │
   └────────────┬────────────┘
                │
                └──────► (returns to node 1)
```

**Notes:**
- {Daniel notes which retention engines this loop drives (state-tagged dialogue / multi-thread narrative / seasonal recurrence / player-driven goals)}

---

## Trigger list — canonical actions that advance time

> Per `D-TIME-05`: "Pure action-driven" is the contract; the canonical list of actions that advance time **derives from this Core Loops doc**. Locks here in plan 01-03/01-06 OR explicitly defers to Phase 4/5 with rationale per `D-TIME-05`.

**Status:** {pending plan 01-03 output — Daniel authors per D-TIME-05; or explicitly defer to Phase 4/5 with rationale}

**Locked-here triggers:**
- {Daniel authors — actions that advance in-game time}

**Deferred-to-Phase-4/5 triggers (with rationale):**
- {Daniel authors if any}

---

## Cross-references

- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-05`, `D-VISION-04`, `D-TIME-01..05`
- `02-pillars-of-play.md` — every loop node should serve a pillar
- `06-player-journey.md` — journey marks position the loops in time
- `07-pillar-mechanic-matrix.md` — loops surface which mechanics get pillar-checked
- `24-time-model-lock.md` — trigger list locked here
- `23-why-play-at-hour-200.md` — meta loop is the retention vehicle
