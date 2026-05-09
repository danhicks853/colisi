# Cozy Life Sim (working title)

## What This Is

A 3D narrative-driven cozy life sim for the underserved "deep cozy enjoyer" demographic — players who love Stardew-class relationship and crafting loops but who consistently bounce off time-pressure systems, difficulty-curve walls, and "story ends → game ends" content cliffs. The game crosses Baldur's Gate 3's companion-driven branching narrative with The Sims' player-expression and life-control loops, wrapped in a whimsical fantasy / magical realism aesthetic. Setting includes spirits, witches, talking animals, and other gentle-magic elements.

The core fantasy, in the lead persona's own words: **"Talking to the people and finding where I fit in."**

## Core Value

**Characters and relationships that keep evolving, in a world that never punishes the player.** If everything else fails, this one thing must work: the people you meet feel real, your choices ripple through their lives in lasting ways, and you can play forever without time pressure or a difficulty wall ever closing the door on you.

## Requirements

### Validated

(None yet — ship to validate)

### Active

> All Active requirements are hypotheses until shipped and validated. Detailed REQ-IDs live in REQUIREMENTS.md.

**Player experience pillars:**
- [ ] Player can build deep, evolving relationships with NPCs that change over time, not just "level up"
- [ ] Player choices and decisions persist and visibly impact NPCs' lives and the world
- [ ] Player can craft items, with crafting tied to narrative (the things you collect have story attached)
- [ ] Player can collect / explore the world to gather materials with narrative attachment
- [ ] Player progresses gradually with no late-game difficulty wall — power curve plateaus, never spikes
- [ ] Player faces no real-time-pressure mechanics — no missable windows, no punishing day clocks
- [ ] Puzzles (when present) are solvable through clear telegraphing — answers discoverable, not ambiguous
- [ ] Game continues to be meaningful after main story arcs resolve (no "story over → nothing to do")
- [ ] Player can express taste / customize / control their living space and life
- [ ] Single-player core (no required multiplayer)
- [ ] Bittersweet endings OK; tragic-no-matter-what endings excluded

**Production and delivery pillars:**
- [ ] Built in Godot 4 (free, MIT license, no royalties)
- [ ] Art produced primarily in Blender (free) with a sustainable solo-dev pipeline
- [ ] Releases on Steam ($100 one-time fee) and itch.io (free)
- [ ] Vertical slice (1 hour of polished, representative gameplay) shipped as wishlist driver before full content production scales
- [ ] Full game architecture and content systems designed to scale to 30+ hours from day one — slice content scopes down, slice systems do not

**Player UX pillars:**
- [ ] Controls are simple and intuitive — beginner-friendly, no complex chord schemes, no hidden mechanics
- [ ] Game does not introduce new core systems mid-game without re-tutorializing
- [ ] No required prior gaming literacy

### Out of Scope

- **Real-time-pressure mechanics (day clocks, missable windows, punishing time gates)** — Hard "no" from persona research; even her #1 game (Stardew @ 1000+ hrs) was named for this as the worst part. Designing without it is the core differentiator.
- **Endgame difficulty curves / stat-check walls** — Persona explicitly bounced off BG3, Fallout, Hogwarts Legacy, and Spiritfarer for this. Cozy means accessible all the way through.
- **Visual novel format** — Persona quit Coffee Talk specifically for this. We are 3D and embodied.
- **Required multiplayer or co-op** — Persona quit Palia for requiring this. Single-player is the design center.
- **Forced tragic endings** — Persona explicitly cited The Stillness of the Wind as a reason to quit early. Bittersweet is allowed; "no matter what you do, it ends in misery" is excluded.
- **Restart-from-beginning CYOA mechanics** — Beacon Pines bounce. Branching choices must persist forward, not require restarting.
- **Console launch in v1** — Devkit cost, certification overhead, and publisher requirements push this to post-launch as a stretch goal.
- **Mobile port in v1** — Different design constraints; defer to post-launch.
- **Photorealistic / high-fidelity 3D art** — Solo dev cannot scale this. Stylized art direction is required, both for production budget and brand identity.

## Context

**Persona research foundation:** Lead persona (Daniel's wife) was interviewed against her Steam library — most-played games and finished-end-to-end games — with structured questions about loves and hates per title, plus quit-early-due-to-frustration data. Full corpus saved to `.planning/research/PERSONA.md`. This is unusually rigorous foundational research for an indie project and should drive design decisions throughout. When in doubt, return to the persona corpus.

**Persona's "dream cross" (her words):** *"If I could find a game that was a cross of Baldur's Gate and the Sims, that would be perfect for me."* Translated:
- *From BG3:* companions ("makes me feel less alone"), gradual progression, decisions impact gameplay, branching narrative, party-feeling
- *From Sims:* control, building a life, expressing taste, affecting others' happiness through choices

**The "endgame problem" pattern:** Across nearly every game persona bounced off (Bear & Breakfast, Spirittea, RCT, Sims, Little Witch in the Woods, Paperbark), the failure mode is the same: content runs out, story ends, or progression flatlines, and there's no reason to keep playing. She loves Stardew at 1000+ hours specifically because NPC interactions kept giving her a reason to return. **Solving the endgame problem is therefore the central design challenge.** Likely solution shapes: characters whose dialogue and arcs continue to evolve indefinitely; multiple intertwining narrative threads so when one ends, others continue; player-driven goals (Sims-style) that don't require new authored content to be meaningful; seasonal / event-driven content that creates ongoing rhythms.

**Market position:** "Underserved deep cozy enjoyer demographic" — players who want Stardew's relationship depth without its time pressure, BG3's companion-driven branching without its combat-skill demands, and The Sims' expression without its content-cliff "then what" problem. Current market hits some of these but not all in one product. Strong commercial thesis if executed.

**Technical environment:**
- Godot 4 chosen as engine: free MIT license (no royalties, no Unity-style pricing risk), strong 3D in v4, GDScript is beginner-accessible
- Blender for 3D modeling, rigging, animation (free)
- Solo developer, near-zero prior game dev experience
- Near-zero cash budget (~$100 lifetime expected; primarily the Steam fee)
- Time-rich, money-poor: schedule should optimize for sustainable solo pace, not parallel hires

**Strategic posture:** Architect-for-the-full-game from day one. Vertical slice is a *checkpoint and learning vehicle*, not the endpoint. Slice content scopes down; slice systems and architecture do not. Hacky shortcuts taken just for the slice are a yellow flag and should be surfaced explicitly, not silently accepted.

## Constraints

- **Tech stack**: Godot 4 + GDScript + Blender — Free/MIT, no royalty risk, sustainable solo toolchain.
- **Budget**: ~$100 USD lifetime cash spend (Steam fee dominates) — Daniel is time-rich, money-poor; tooling and asset choices must default to free/CC0/open-source.
- **Team**: Solo developer, beginner — Architecture and tooling decisions must favor approachability and avoid systems that require team-scale workflows. AI tooling (this project) acts as planning and pair-programming partner.
- **Timeline**: Multi-year (4–6 year horizon for full game) — Roadmap must support sustainable pace, vertical slice as 12–18 month checkpoint, not all-or-nothing big-bang release.
- **Scope at v1**: 30+ hour cozy life sim — Ambitious for solo first project; mitigated by vertical-slice-first delivery and ruthless scope discipline at the system-content boundary (cut content count, never cut systems).
- **Art direction**: Stylized only — Solo dev cannot scale photorealistic 3D production; stylization is both budget reality and brand identity.
- **Performance target**: Modest hardware — Cozy demographic skews to laptops, integrated GPUs, and older machines. Optimize for that floor, not high-end PC.
- **Distribution**: Steam + itch.io for v1 — Console / mobile excluded from v1 scope.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Engine: Godot 4 (not Unity, not Unreal) | Free MIT license, no royalty risk, beginner-accessible GDScript, strong 3D in v4, healthy indie ecosystem | — Pending |
| Setting: Whimsical fantasy / magical realism | Distinctive vs cottagecore-saturated cozy market; allows non-human NPCs (spirits, witches, talking animals) which expand narrative possibility | — Pending |
| Audience: Commercial product for persona's underserved demographic | Persona zero is the wife; design north star is the broader cozy-enjoyer demographic underserved by current market | — Pending |
| Scope: 30+ hour systems-rich game (not small narrative gem) | User chose this explicitly with full awareness of timeline implications; aligned to commercial ambition | — Pending |
| Strategy: Vertical-slice-first, full-game architecture from day one | Lets us validate the loop and build a wishlist before scaling content; avoids throwaway architecture | — Pending |
| No real-time-pressure mechanics (no day clocks, no missable windows) | Hardest-hitting persona dislike, also strongest market differentiator | — Pending |
| No endgame difficulty walls | Persona bounced off 4+ games for this; cozy means accessible all the way through | — Pending |
| Single-player only | Persona quit Palia for requiring multiplayer; multiplayer also adds enormous solo-dev complexity | — Pending |
| Distribution: Steam + itch.io v1; console / mobile deferred | Cost, certification, and design-port complexity push these out of v1 | — Pending |
| Art: Stylized 3D, Blender pipeline | Solo dev budget reality and brand identity | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-09 after initialization*
