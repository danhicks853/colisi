---
author: Daniel
end_product: GDD — moment/session/meta loops drive Phase 3+ implementation REQs
canonical_path: .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md
source_decisions: D-VISION-04 (matchmaking puzzle layer), D-TIME-01..05 (action-driven time)
length_target: ~600–1000 words across 4 sections
required_per_loop_section:
  - Trigger (player initiates)
  - Action (what player does)
  - Reward (what changes in world/relationship/state)
  - Loop closure (returns to trigger? unlocks meta?)
hard_guardrails:
  - No mechanic names from Claude — you name every loop / verb / system
  - Trigger list (canonical actions that advance time) feeds 24-time-model-triggers downstream
  - Loops must be testable against pillars (cross-reference 02-pillars.md REQ-IDs)
order: write after Vision Bible group lands; first doc in Game Design Doc group
---

# Core Loops

## Moment-to-moment loop (~30 second cycle)
   perceive → identify intent → act → witness response → (return to perceive)

Flavors that instantiate this loop:
- Magic-tutoring activity (per D-VISION-04 sharpening)
- Drifting/observing
- Organic dialog
- Discovery / inference
## Session loop (~30 minute cycle)
1. Re-orient / spot opportunity (replaces "identify available event" — broader)
2. Engage (replaces "launch event" — covers all 4 moment-to-moment flavors)
3. Deepen the engagement (replaces "explore dialog options" — broader, covers magic-tutoring + dialog + discovery)
4. Resolve + witness change (combines "help villager" + felt-sense of world differing)
5. Close OR re-orient (the natural-stop fork: continue back to 1, or save and stop)
## Meta loop (~10 hour+ horizon — emergent, not prescriptive)

> Per cozy-genre orthodoxy: the meta loop in a cozy life sim with no time pressure, no failure state, and no antagonist is **emergent**, not prescriptive. Players weave between long-arc anchor types in whatever order surfaces. We document the meta loop as an *anchor-type catalog + closure mechanic* rather than a rigid 5-node diagram. (Reference: Stardew's pre-launch meta loop was structurally thin and grew through 6+ years of post-launch iteration; cozy meta richness is iterative, not designed up-front.)

### Anchor types (the long-arc threads players weave between)

1. **Matchmaking arcs** (D-VISION-04 meta puzzle layer) — recognize villager chemistry, plan environmental manipulation across multiple sessions, witness pairing ripple. ~6–15 pairings across full game.
2. **Personal-magic mastery arcs** — observe a villager's craft, recognize their latent magical potential, mentor through skill milestones, witness their breakthrough. Per-villager.
3. **Village-wide project / festival arcs** — sense collective need (harvest, festival, group project), coordinate multiple villagers, witness collective achievement. Seasonal / event-driven.
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
- Replay-as-revelation (NARR-06) and cascading-thread are architectural commitments — both flow into Phase 3 SAVE design (event-log schema per SAVE-04 amendment) and Phase 4 NARR system design.
- The four-engine retention strategy (state-tagged dialogue / multi-thread narrative / seasonal recurrence / player-driven goals) maps cleanly onto these anchor types and is the bridge to `23-why-play-at-hour-200.md`.
## Trigger list — canonical actions that advance time

## Cross-references

*(Claude populates once draft lands; cross-wires to 24-time-model-triggers.md.)*
