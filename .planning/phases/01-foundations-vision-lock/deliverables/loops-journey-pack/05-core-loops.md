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
  - D-VISION-09
  - D-VISION-10
  - D-VISION-11
  - D-TIME-01
  - D-TIME-02
  - D-TIME-03
  - D-TIME-04
  - D-TIME-05
downstream_consumers:
  - 24-time-model-lock.md (trigger list LOCKED 2026-05-10; cross-link)
  - 06-player-journey.md (journey time-marks reference these loops)
  - 07-pillar-mechanic-matrix.md (loops surface which mechanics need pillar justification)
  - 09-slice-scenario-sketch.md (slice walkthrough is one playthrough of the session loop)
  - Phase 3+ system-design plans (every system slots into one of the three loops)
  - 23-why-play-at-hour-200.md (meta-loop anchor catalog drives retention engine)
authored_at: authoring/2-game-design-doc/05-core-loops.md (migrated to canonical 2026-05-10)
---

> **AI POLICY (PHILOSOPHY.md §V):** Daniel authors all loop content. Claude provides structural skeletons + critiques on request. Claude does NOT author in-world verbs or specific mechanic names.

# Core Loops Diagram — Colisi

> Per `D-SCOPE-05`: nested moment-to-moment / session / meta loops. The locked premise (`D-VISION-04` matchmaking-via-environmental-manipulation as meta puzzle layer; magic-tutoring as moment-to-moment activity) anchors all three loops.

---

## Moment-to-moment loop (~30 second cycle)

**Abstract shape:**

> perceive → identify intent → act → witness response → (return to perceive)

**Flavors that instantiate this loop:**

1. **Magic-tutoring activity** (per D-VISION-04 sharpening) — rhythm-stroke at the lathe, ingredient-timing in cooking, magical infusion at the workbench. The wisp catalyzes; the player's input drives the minigame; the villager's craft outputs.
2. **Drifting/observing** — sprite floats through the village; ambient awareness of villagers' lives in motion (continuous NPC pathing per D-TIME-04); the world keeps moving around the wisp.
3. **Organic dialog** — read villager line → consider tone-of-response → choose → witness shift in villager's posture/affect.
4. **Discovery / inference** — spot a detail, investigate, form/update an inference about a villager.

**Notes:**

- All four flavors share the abstract shape (perceive → consider → act → witness → close); the verbs differ per flavor.
- Triggers fired during moment-to-moment cycles do NOT advance time (per D-TIME-02 — the player can stand still indefinitely; magic-tutoring activities don't consume in-world days).
- Pillars served: Pillar 1 Character Development (dialog + observation deepens relationship state); Pillar 3 Approachability (controls + cues land here first); Pillar 2 Never Punishing (no fail states inside any flavor).
- REQ-IDs implementing this loop: NPC-01..03 (NPC presence + interaction), NPC-05 (state-tagged dialogue), NPC-07 (NPCs reference past choices), CRAFT-01..02 (per CRAFT cluster reinterpretation 2026-05-10), COMP-02 (companion contextual dialogue), CTRL-01..03 (basic controls).

---

## Session loop (~30 minute cycle)

**Five-node structure:**

1. **Re-orient / spot opportunity** — when the player returns to a session (from save or from the prior session's close), what's changed? Drifting/observing flavor surfaces what's new.
2. **Engage** — the player chooses a focus (which villager? which thread? which space?) and enters one of the moment-to-moment flavors.
3. **Deepen the engagement** — additional moment-to-moment cycles fire (magic-tutoring, dialog, discovery) within the chosen focus.
4. **Resolve + witness change** — the engagement closes; something new is now visible in the world (relationship state shifts, new opportunity surfaces, ripple effects propagate per D-VISION-04 cascading thread).
5. **Close OR re-orient** — the natural-stop fork: continue back to node 1 (re-orient on what just changed; pursue next thread), or save and close the session.

**Notes:**

- The session loop accommodates variable session length per D-SUST-03 — the loop doesn't force a session length; the player can stop after any node, especially node 5 (Close fork).
- Per D-TIME-02, no time advancement happens within the session loop unless the player rests at sanctum or attends a festival (the two locked few-trigger model triggers — see Trigger list below).
- Multiple moment-to-moment cycles fire inside node 3 (Deepen the engagement); the session loop is the connective tissue that strings them together.
- Pillars served: Pillar 1 (every micro-arc deepens character relationships); Pillar 2 (variable session length, no forced advancement); Pillar 3 (clear closure beat at node 5; player understands when it's "OK to stop").

---

## Meta loop (~10 hour+ horizon — emergent, not prescriptive)

> Per cozy-genre orthodoxy: the meta loop in a cozy life sim with no time pressure, no failure state, and no antagonist is **emergent**, not prescriptive. Players weave between long-arc anchor types in whatever order surfaces. We document the meta loop as an *anchor-type catalog + closure mechanic* rather than a rigid 5-node diagram. (Reference: Stardew's pre-launch meta loop was structurally thin and grew through 6+ years of post-launch iteration; cozy meta richness is iterative, not designed up-front.)

### Anchor types (the long-arc threads players weave between)

1. **Matchmaking arcs** (D-VISION-04 meta puzzle layer) — recognize villager chemistry, plan environmental manipulation across multiple sessions, witness pairing ripple. ~6–15 pairings across full game.
2. **Personal-magic mastery arcs** — observe a villager's craft, recognize their latent magical potential, mentor through skill milestones, witness their breakthrough. Per-villager.
3. **Village-wide project / festival arcs** — sense collective need (harvest, festival, group project), coordinate multiple villagers, witness collective achievement. Seasonal / event-driven. **Concrete example: animal sanctuary milestone** (X animals adopted + sanctuary owner arc complete) — the first concrete village-wide aggregation milestone, locked under WORLD-01 scope clarification 2026-05-10.
4. **Individual character arcs** — personal-narrative threads independent of magic/matchmaking (a villager's grief, ambition, family history, return-from-absence). Multi-session arcs surfaced through state-tagged dialogue.
5. **Friendship / found-family arcs** — non-romantic relationship deepening; rivalries softening into mutual respect; mentorship dynamics; the slow-build of village cohesion.
6. **Seasonal recurrence arcs** — each in-world year, certain rhythms repeat with accumulated context (the second autumn festival feels different because of what happened at the first). Long-tail retention engine per `23-why-play-at-hour-200.md`.
7. **Animal rescue arcs** (added 2026-05-10 per D-VISION-11) — discoverable optional companion threads using existing magic-tutoring + matchmaking mechanics (no new systems). Tutorial case: stray black cat (player can find OR not — replayability via discovery). Wisp imbues animal with magical abilities via magic-tutoring; matchmaking system finds the animal an owner among villagers. Slice scope: cat appears as discoverable; arc does NOT complete in slice (cliffhanger wishlist hook). Honors Dawn's pet-adoption emergent-feedback entry 2026-05-10.

The anchor-type list is open — additional types may surface during slice playtest. Phase 6 mechanic decisions check each new mechanic against this catalog: does it serve at least one anchor type? If no, it's an orphan candidate (cross-reference `07-pillar-mechanic-matrix.md`).

### Closure mechanic — what makes the meta loop loop

Two interlocking mechanisms (per Daniel decision 2026-05-10):

1. **Replay-as-revelation (NARR-06):** at any time, the player picks a villager and watches a fast-forward replay of that villager's life since the wisp's arrival, slowing at critical choice junctures. Replay reveals what changed because of player action — relationships shifted, magical breakthroughs landed, ripple effects propagated through the village. This is the felt-sense vehicle for noticing meta-loop progress.

2. **Cascading thread:** the ripple from any concluded arc plants the seed for the next anchor — *and the next anchor doesn't have to be the same type as the current one.* A matchmaking arc's ripple can expose villager C feeling left out (next anchor: personal-magic for C). A magic-mastery arc's ripple can expose villager D's interest in same craft (next anchor: matchmaking for X+D). A festival's ripple can reshape village dynamics (next anchor: any of the above with new target).

The cascading-thread mechanic is what keeps a 30+ hour game from feeling like "do 10 matchmaking pairings in a row." The anchor-type the player engages next is *function of what the world surfaced*, not a player-chosen menu.

### Notes

- The meta loop's "shape" is the catalog + closure mechanic, not a node diagram. Phase 6 may produce per-anchor-type diagrams as specific arcs are designed.
- Replay-as-revelation (NARR-06) and cascading-thread are architectural commitments — both flow into Phase 3 SAVE design (event-log schema per SAVE-04 amendment), Phase 4 NARR system design, and Phase 6 individual arc authoring.
- The four-engine retention strategy (state-tagged dialogue / multi-thread narrative / seasonal recurrence / player-driven goals) maps cleanly onto these anchor types and is the bridge to `23-why-play-at-hour-200.md`.
- D-VISION-09 NG+ wisp memory + D-VISION-10 village-as-canvas + faerie houses extend the meta loop's hour-100+ engagement layer; see CONTEXT.md D-VISION-09/10/11 entries for cross-system integration.

---

## Trigger list — canonical actions that advance time

> Per `D-TIME-05`: pure action-driven contract; trigger list derives from this Core Loops doc. **Few-trigger model locked** (Daniel decision 2026-05-10): minimal triggers that preserve "player can stand still indefinitely" (D-TIME-02) while giving festivals and major arcs structural calendar-impact.

**Status: LOCKED (Phase 1 plan 01-03)**

### Locked-here triggers

1. **Rest at sprite home/sanctum** → advances to next morning.
   - Primary day-advancement trigger.
   - Player-initiated, always available.
   - Closes the session loop's node 5 ("Close OR re-orient" — choosing Close routes through this trigger).
   - Phase 3 SAVE implication: save event includes `current_day` increment + villager schedule reset for new day.
   - Per D-VISION-10 Layer 1 + Layer 3: pre-completion rest at starting sanctum; post-completion rest available at any unlocked faerie house.

2. **Festival participation** → consumes the day (advances to next morning at festival's natural close).
   - Festival-scheduled event; player chooses to attend.
   - The act of attending books the day — player can't do other arcs after attending a festival until the next morning.
   - Gives festivals (and the seasonal-recurrence anchor type in the meta loop) the structural calendar-weight that makes them feel meaningful.
   - Phase 3 SAVE implication: festival completion writes to event-log + advances day.

### Deferred-to-Phase-4/5 triggers

1. **Multi-day arc beats** (DEFERRED per D-TIME-05).
   - Some arcs may have explicit "this happens over the next N days" beats — e.g., a villager builds a workshop over a week; replay shows compressed time during construction. These are *arc-specific* time-passage beats, not generic player-action triggers.
   - Defer rationale: depends on Phase 4 dialogue/scenario design + Phase 6 individual arc authoring; locking pre-slice would constrain narrative without observed feel.
   - When deferred trigger fires, it's content-driven (the arc's NARR/SAVE design says so), not a canonical action a player takes.

### What does NOT advance time (explicit non-triggers — for clarity)

- **Magic-tutoring activity completion** — does NOT advance time. Player can do many in one day.
- **Major arc completion** (matchmaking pair, magic-mastery breakthrough) — does NOT *itself* advance time; it unlocks structural beats (replay-as-revelation available, cascading thread surfaces next anchor, faerie house unlocks per D-VISION-10 Layer 3).
- **Zone transition** — does NOT advance time. Sprite drifts freely between zones.
- **Dialog scene completion** — does NOT advance time.
- **Standing still / drifting / observing** — does NOT advance time. (D-TIME-02 honored.)

### Architectural implications

- **Phase 3 SAVE schema** (per SAVE-04 amendment 2026-05-10): event log records each trigger fire with timestamp + significance marker. `current_day` is a top-level field on the save record; villager schedules re-derive from `current_day` on day-rollover.
- **Phase 4 NARR**: only festival NARR scenes and rest-prompts need calendar-tier scripting; all other scenes are calendar-tier-agnostic (firing based on relationship state + cumulative event-log markers, not "what day is it").
- **Continuous NPC pathing** (D-TIME-04): NPCs follow per-day schedules; schedules loop within a day and reset on day-rollover. Player observing villager-X-at-task at 3pm vs 7pm sees the same task if the day hasn't advanced — matches D-TIME-02 (no real-time pressure).

---

## Cross-references

- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-05`, `D-VISION-04`, `D-VISION-09..11`, `D-TIME-01..05`
- `02-pillars-of-play.md` — every loop node serves a pillar
- `06-player-journey.md` — journey marks position the loops in time across 5 horizons
- `07-pillar-mechanic-matrix.md` — loops surface which mechanics get pillar-checked
- `08-failure-mode-analysis.md` — pillar failure modes signal loop health
- `09-slice-scenario-sketch.md` (plan 01-04) — slice walkthrough is one playthrough of the session loop
- `23-why-play-at-hour-200.md` (plan 01-06) — meta-loop anchor catalog drives retention engine
- `24-time-model-lock.md` — trigger list LOCKED in cross-link with this doc
- `.planning/SCOPE.md` rows 6 (D-VISION-09), 7 (D-VISION-10), 8 (WORLD-01 zone architecture), 9 (D-VISION-11), 10 (AUDIO architectural commitment)
