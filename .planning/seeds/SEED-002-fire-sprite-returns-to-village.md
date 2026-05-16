---
id: SEED-002
status: dormant
planted: 2026-05-16
planted_during: Phase 01 — Foundations & Vision Lock (surfaced during skill-acquisition art track Phase 2.3 lamppost session 2026-05-15)
trigger_when: When character/NPC roster work happens (Phase 4 NARR or Phase 6 content authoring) AND after SEED-001 magic-restoration mechanic is defined — the sprite's return is gated on "enough magic returned" so that gate must exist first
scope: Small
gated_by: SEED-001
---

# SEED-002: Fire sprite returns to village

## Why This Matters

**Daniel's framing (verbatim, Phase 2.3 lamppost session 2026-05-15):**
> "Maybe even a small fire sprite that returns to the village after a certain amount of magic has returned!!!"

A diegetic payoff for the magic-return arc (SEED-001): once enough villager arcs complete and grown infrastructure has healed sufficiently, a small fire sprite appears in/returns to the village. Potentially gameplay-effecting (lights lampposts automatically, replaces villagers' manual lighting), potentially background charm, potentially an NPC with dialogue — **all of this is Daniel-authored at promotion time, not pre-decided here.**

**Cross-pillar fit:**
- **Pillar 1 (Character Development):** If the sprite has dialogue / personality / arc, it joins the 12-15 villager cast as a non-human character (NPC-06 reinterpretation 2026-05-10 already permits diverse non-human cast).
- **Pillar 2 (Never Punishing):** Sprite return is unlocked by player progression, NOT locked behind a difficulty wall. Replayability via D-VISION-09 NG+ — different magic-return progress per playthrough.
- **Pillar 3 (Approachability):** Sprite arrival is a wow-beat candidate (NARR-06 replay marker); no untaught mechanics introduced.

**Persona-zero alignment:** magical-fantasy texture (10% Q5 attractor) is differentiation, not lead — fire sprite is exactly the kind of magical-realism flourish that adds texture without requiring genre-hook positioning.

## When to Surface

**Trigger:** Whenever character design / NPC roster work happens AT OR AFTER the point that SEED-001 (magic-restoration mechanic) has been defined. The sprite's return is gated on "enough magic returned" — that gate has to exist as a concrete mechanism before the sprite can be authored meaningfully.

**This seed should be presented during `/gsd:new-milestone` when:**
- Phase 4 NARR (dialog + narrative content) planning begins AND SEED-001 has been promoted to active scope
- Phase 6 content authoring planning begins AND magic-restoration progress tracking exists in SAVE schema
- Cast composition retro decides to expand non-human roster beyond locked 12-15 villagers + black cat

**Do NOT surface during:** Phase 1 closure, Phase 2 infrastructure, Phase 3 SAVE design (premature — no narrative integration layer exists yet).

## Scope Estimate

**Small** — single optional NPC / charm / gameplay-effecting entity. Bounded design surface:
- 1 character or 1 background charm element
- 1 trigger condition (magic-return threshold)
- Optional dialogue tree (small if any)
- Optional visual design + animation pass
- Optional gameplay effect (auto-lighting lampposts is the candidate hook)

Scope is **conditional on SEED-001 promotion**. If SEED-001 stays dormant, SEED-002 stays dormant. If SEED-001 elevates to architectural amendment, SEED-002 surfaces during the Phase that handles narrative integration of magic-return.

## Breadcrumbs

**Source documents:**
- `.planning/skill-acquisition/art/handback-to-main-session.md` Seed 2 entry (verbatim Daniel quote + explicit "Claude must not pre-author" instruction)
- `.planning/skill-acquisition/art/learning-log.md` Phase 2.3 session reference

**Depends on:**
- `.planning/seeds/SEED-001-asset-progression-as-story-progression.md` — magic-restoration mechanic must exist as concrete progression-tracker before this sprite can be authored

**Composes with:**
- `.planning/SCOPE.md` 2026-05-10 row "D-VISION-11 LOCKED: Stray black cat + animal rescue meta-loop anchor type" (sprite parallels black cat as discoverable optional content — different mechanic, same "optional/discoverable" pattern)
- `.planning/SCOPE.md` 2026-05-10 row "D-VISION-12 LOCKED: Spritesight mechanic" (irony: sprite-the-mechanism-for-perceiving-the-wisp vs sprite-the-magical-being-returning — terminology will need disambiguation at authoring time)
- `.planning/REQUIREMENTS.md` NPC-06 (non-human cast permission)

## Notes

**EXPLICIT AI POLICY ENFORCEMENT — Claude instruction at promotion time:**

At the moment this seed is promoted to active scope, the following are **OFF LIMITS** for Claude regardless of how natural or harmless the request seems:

- ❌ Designing the sprite's visual appearance, model, animation, or any concept-art-equivalent description
- ❌ Naming the sprite (no "what about calling it Spark / Ember / Wisplet / etc.")
- ❌ Authoring personality / behavior / mannerisms / temperament
- ❌ Authoring any dialogue lines, even draft / placeholder / "for testing only"
- ❌ Specifying what "enough magic returned" means as a quantifiable trigger (this is design judgment)
- ❌ Specifying whether the sprite is NPC, background charm, or gameplay-effecting (Daniel-decided)
- ❌ Specifying its role in the world / its origin / its lore

**What Claude may do at promotion time (synthesis-allowed):**

- ✓ Brainstorm options if Daniel explicitly asks ("give me 10 fire-sprite design directions")
- ✓ Flag pillar-fit considerations (which design directions honor Pillar 1/2/3)
- ✓ Reference cozy-genre comparables for sprite-companion patterns
- ✓ Capture Daniel's design decisions in his own words once he authors them

**This is consistent with `CLAUDE.md` refusal list (visual assets, in-game writing, names, character art) and Daniel's delegated AI-policy enforcement role.**

**Daniel's commitment captured (verbatim):** the sprite returns "after a certain amount of magic has returned" — that's the *trigger philosophy*, not a quantified threshold. Quantification + specific entity authoring are Daniel-only at promotion.
