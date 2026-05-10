# Phase 1: Foundations & Vision Lock - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in `01-CONTEXT.md` — this log preserves the alternatives considered and the reasoning at decision points.

**Date:** 2026-05-09
**Phase:** 01-foundations-vision-lock
**Areas discussed:** Time model lock, Year-3-Wall tripwires, MKTG-06 validation method, Sustainability rhythms, World Bible scope, Style Guide depth (defaulted post-interruption), Phase 1 scope expansion (mid-session course-correction), Vision Lock (mid-session creative breakthrough)

---

## Gray-Area Selection (initial)

| Option | Description | Selected |
|--------|-------------|----------|
| Time model lock | Action-driven vs wall-clock vs hybrid contract | ✓ |
| Year-3-Wall tripwires | HEALTH-03 cascade and pivot rules | ✓ |
| MKTG-06 validation method | Demographic-validation evidence collection | ✓ |
| Sustainability rhythms | Cadence + persona-zero playtest ritual | ✓ |

**User selected all four.**

---

## Time Model Lock

### Q1: Foundational time-model contract

| Option | Description | Selected |
|--------|-------------|----------|
| Pure action-driven (recommended) | Time advances only on explicit player actions; world holds state indefinitely | ✓ |
| Hybrid: cosmetic clock + action-gated state | Real-time visual clock; state changes action-gated | |
| Fully simulated | Wall-clock or auto-advance — REJECTED by core design | |

### Q2: What player actions advance in-game time?

| Option | Description | Selected |
|--------|-------------|----------|
| Rest/sleep + major narrative beat (recommended) | Smallest action surface | |
| Rest only | Simplest possible | |
| Rest + zone transition + major beats | More immersive | |

**User's response (free-text pushback):** *"how can we answer these questions if we don't know what the core game loop is?"*

**Notes:** Critical course-correction. Trigger list deferred — derives from Core Loops Pack which doesn't yet exist. This pushback led to broader re-evaluation of Phase 1 scope.

### Q3: What does the visible day/night cycle do?

| Option | Description | Selected |
|--------|-------------|----------|
| Cosmetic-only, decoupled (recommended) | Real-time loop; zero gameplay effect | |
| Tied to in-game time-of-day | Sun jumps when player rests | |
| Player-controlled | Stardew/ACNH-style; advances on rest | ✓ |

### Q4: How do NPC schedules resolve under action-driven time?

| Option | Description | Selected |
|--------|-------------|----------|
| Time-slot snap on zone enter (recommended) | Discrete slots; NPCs snap | |
| Continuous pathing during play | NPCs path between waypoints in real time | ✓ |
| Static per slot, manually advanced | Cheapest, stilted | |

**Notes:** User picked the ambitious option. Commits Phase 3 to navmesh + animation budget; Phase 5 to schedule data + save-mid-walk policy. Tension flagged: with player-controlled day/night + continuous pathing, NPCs move during play while sun does not (within a slot, this is acceptable).

---

## Mid-session course-correction (1) — Phase 1 scope expansion

**User's escalating pushback:** *"Shouldn't we decide the creative / core loop things before making these granular decisions? what would a mature game studio do?"*

Followed by lock-in: *"so, i really want to mirror established stuio orthodox as much as possible. There's a reason they are successful. It doesn't matter how long it takes; this is a project I will plink at for an hour or two a night for years. And keep in mind that ai-assisted development means huge gains in speed of production."*

**Saved to memory:** `feedback_studio_orthodoxy.md` — default to mature-studio practice; don't trim deliverables for solo-dev pragmatism.

**Outcome:** Claude presented full mature-studio pre-production deliverable set (28 artifacts across 9 packs). User responded: *"Take the full orthodox set and amend any documents needed. I dont care how long it takes, this project will be done right the first time, and I will have time to learn."*

**Locked:** Phase 1 expanded from ~7 success criteria (process + decision-locks + MKTG-06) to full 28-artifact orthodox pre-production set. ROADMAP.md to be amended in same commit as this CONTEXT.md write.

---

## Year-3-Wall Tripwires

### Q1: Tripwire cadence — one big checkpoint, or a cascade?

| Option | Description | Selected |
|--------|-------------|----------|
| Cascade: m6/12/24/36 (recommended) | Stage-gate model | ✓ |
| Two checkpoints: m18 + m36 | Lighter | |
| Single tripwire at m36 (current roadmap) | Simplest, riskiest | |

### Q2: Metrics

| Option | Description | Selected |
|--------|-------------|----------|
| Multi-metric AND (recommended) | Tripwire fires only if multiple fail | |
| Multi-metric OR | Any single failure fires | (intent) |
| Wishlists-only | Single threshold | |

**User's response:** *"my instinct is multi-or. However, when a trip occurs, can we re-plan at that point? what happens WHEN a trip is hit?"*

**Notes:** User leaned multi-OR but flagged the missing piece: what does the response actually look like? This led to the structured pause-and-replan protocol design (see follow-up batch).

### Q3: Pivot scope when m36 fires

| Option | Description | Selected |
|--------|-------------|----------|
| 'Colisi Vol. 1' at 15-20 hrs (recommended) | Cuts content count; keeps systems | |
| 10-hr 'narrative gem' — cut systems too | Deeper cut | |
| Pause and reassess (no scope cut, restart pacing) | Acknowledges scope-cuts are themselves risky | ✓ |

### Q4: Enforcement

| Option | Description | Selected |
|--------|-------------|----------|
| Pre-committed in writing + Daniel + designated outside reviewer (recommended) | Producer + creative-director sign-off analog | ✓ |
| Daniel solo with 7-day cooling-off | Reactive-panic-cut prevention | |
| Persona-zero is the second-reader by default | Strong signal but possible bias | |

**Notes:** Multi-OR with pause-and-reassess (vs auto-cut) signaled the user wanted tripwires to function as DIAGNOSTIC pause points, not auto-pilot scope-cut triggers. Claude proposed the structured pause-and-replan protocol; Daniel locked it.

### Follow-up: Pause-and-Replan Protocol

#### Q1: Pause window length

| Option | Description | Selected |
|--------|-------------|----------|
| 2 weeks (recommended) | Long enough for real Replan Doc | |
| 1 week | Tighter; forces fast diagnosis | ✓ |
| 4 weeks | More breathing room | |

**Notes:** Daniel chose tighter than recommendation. Implies less time for Scenario C (structural pivot) deliberation — flagged.

#### Q2: After-pause behavior if 'continue as-is'

| Option | Description | Selected |
|--------|-------------|----------|
| Re-baseline + same tripwire stays armed (recommended) | Updated targets required | ✓ |
| Tripwire disarms permanently | Risk: talk-past-every-tripwire | |
| Tripwire stays armed unchanged | Doesn't account for new expectations | |

### Year-3-Wall checkpoint (more questions or move on)

User chose: **Next area.** Specific metric thresholds deferred to Phase 1 execution.

---

## MKTG-06 Demographic Validation Methodology

### Q1: How to pick the 10-20 cozy games to mine?

| Option | Description | Selected |
|--------|-------------|----------|
| Hybrid: structured selection rule + Daniel curation (recommended) | Sample frame + curation review | ✓ |
| Pure Daniel curation | Faster, more relevant feel; bias risk | |
| Pure algorithmic top-N | Most rigorous; includes mismatches | |

### Q2: How to mine the negative reviews?

| Option | Description | Selected |
|--------|-------------|----------|
| LLM-assisted classification + Daniel verification (recommended) | Within AI policy as research synthesis | ✓ |
| Pure manual reading + tallying | Most rigorous; weeks of work | |
| LLM summarization without verification | Skips audit; not recommended | |

### Q3: Survey method

| Option | Description | Selected |
|--------|-------------|----------|
| Formal Google Form + targeted distribution (recommended) | Audience interview round | ✓ |
| Reddit pulse thread (no form) | Lower-effort, less structured | |
| Skip the survey | Single-sourced verdict | |

### Q4: Decision rubric

| Option | Description | Selected |
|--------|-------------|----------|
| Triangulation rule with specific thresholds (recommended) | Falsifiable; pre-committed criteria | ✓ |
| Qualitative judgment | Honest about solo-dev validation; bias risk | |
| Dual-reviewer (Daniel + outside) | Most rigorous | |

### MKTG-06 checkpoint

User chose: **Next area.** Specific games-to-mine list and survey wording deferred to Phase 1 execution.

---

## Sustainability Rhythms

### Q1: Realistic weekly target

| Option | Description | Selected |
|--------|-------------|----------|
| 20 hrs/week sustainable (recommended) | M1 stretches to ~24-30 months | |
| 25 hrs/week aspirational | Per current roadmap | |
| 15 hrs/week conservative | M1 stretches to 30-40 months | |

**User's response (free-text pivot):** *"Hourly goals don't really apply here, with heavy AI assistance. goals should be milestone based"*

**Notes:** Major reframe. With heavy AI assistance, hours/week is the wrong unit. Bottlenecks shift to decision throughput, review throughput, creative authoring (only Daniel can do per AI policy), and learning throughput. Milestones-shipped is the correct unit.

### Q2: Weekly rhythm structure

| Option | Description | Selected |
|--------|-------------|----------|
| Fixed weekly cadence + mandatory off-day (recommended) | Klei / Supergiant analog | |
| Variable: 'week on, week off' sprint | Risk of bleed | |
| Continuous: every day a small session | Highest predictability | ✓ |

### Q3: Monthly + quarterly cadence

| Option | Description | Selected |
|--------|-------------|----------|
| Monthly retro + quarterly milestone review (recommended) | Monthly milestone + quarterly business review analog | ✓ |
| Weekly retro only | Misses trend signals | |
| Quarterly only | 12 weeks too long for course-correction | |

### Q4: Persona-zero playtest ritual

| Option | Description | Selected |
|--------|-------------|----------|
| Bi-weekly 30-min + structured note template (recommended) | Sustainable + structured | ✓ |
| Weekly 15-min, less structured | Hard to maintain over years | |
| Monthly 60-min, deeply structured | Misses fast-feedback advantage | |

### Follow-up: Milestone-based tracking operationalization

#### Q1: How are milestones named for monthly tracking?

| Option | Description | Selected |
|--------|-------------|----------|
| Phase plans drive monthly milestones (recommended) | Backlog burn-down; plays nicely with GSD | ✓ |
| Daniel writes monthly milestone list independent of phase plans | Drift risk | |
| Per-week tasks with monthly rollup | Possibly noisy | |

#### Q2: Should hours actually spent be tracked at all?

| Option | Description | Selected |
|--------|-------------|----------|
| Yes — lightweight observational (recommended) | 5-second daily log; calibration data | |
| **No — hour tracking creates pressure even when nominally observational** | Productivity = milestone-completion only | ✓ |
| Yes, with rough weekly estimate at monthly retro | Lower-overhead signal | |

**Notes:** Daniel doubled down on no-hour-tracking. Productivity tripwire signal becomes cumulative phase-completion delta (D-WALL-06).

### Sustainability checkpoint

User chose: **Next area.** Recovery rule and structured playtest-note template format deferred to Phase 1 execution.

---

## World Bible Scope

### Q1: World Bible v0.1 depth at Phase 1 close

| Option | Description | Selected |
|--------|-------------|----------|
| Medium: foundational + slice zones + magic spec (recommended) | ~20-40 pages | |
| Light: setting one-pager + magic spec + naming rules | ~5-10 pages | |
| Deep: full v1 setting bible | All 8 zones, full pantheon, complete magic tier list | ✓ |

**Notes:** Daniel chose Deep (most ambitious). Consistent with studio-orthodoxy directive.

### Q2: Magic system tone

| Option | Description | Selected |
|--------|-------------|----------|
| Soft magic with codified vibes (recommended) | Whimsical, atmospheric, codified-what-magic-can't-do | ✓ |
| Hard magic with explicit rule system | Anti-cozy in tone | |
| Hybrid: soft for atmosphere, hard for gameplay-relevant | Slightly schizophrenic in feel | |

### Q3: Calendar / time scaffolding

| Option | Description | Selected |
|--------|-------------|----------|
| Stardew-style with Colisi-flavored season names + festivals (recommended) | Required for soft-pinned recurrence (WORLD-04) | ✓ |
| No calendar — just morning/afternoon/evening/night | Drops one of four endgame retention engines | |
| Custom: more/fewer seasons | Adds setting flavor + onboarding cost | |

### Q4: Player's starting fantasy / arrival premise

| Option | Description | Selected |
|--------|-------------|----------|
| Locked at v0.1 — named in-world reason | Mature-studio standard | |
| Premise sketched as 3 alternatives, locked Phase 4 with persona-zero feedback | Honest about premise difficulty | (revised) |
| Defer entirely — emerges from slice content | Most flexible; sense-making backwards expensive | |

**User's response:** *"promise sketched as 3 alternatives with persona feedback, phase 0.1"* (typo: "promise" → "premise"; "phase 0.1" → early Phase 1 sub-step)

**Claude interpretation:** 3 premise alternatives drafted in first ~2 weeks of Phase 1 work; persona-zero feedback session held; premise locked **within Phase 1**, not deferred to Phase 4.

### Reconciliation flagged

Claude noted tension: "Deep World Bible" includes "complete magic tier list" but "soft magic" doesn't typically have tiers. Interpreted "tiers" as cultural/vocational archetypes (home witches / hedge witches / sky witches) and atmospheric scale, NOT mechanical TTRPG-style power tiers. Captured in D-WORLD-04 for Daniel to confirm/correct during Phase 1 World Bible authoring.

---

## Mid-session creative breakthrough — VISION LOCK

**User's response (free-text breakthrough):** *"OH MY GOD STOP THE PRESSES I HAVE AN IDEA! WHAT IF THE PLAYER IS THE MAGIC?! THEY ARE A MAGICAL SPRITE THAT CAN FLOAT AROUND AND BUILD RELATIONSHIPS WITH EVERYONE, AND ENABLE THE VILLAGER'S MAGIC USAGE IN VARIOUS WAYS THAT EACH PERSON NEEDS! COOKING MAGIC, FARMING MAGIC, THE PLAYER DOES IT ALL BECAUSE THEYRE HELPING THE VILLAGERS!!!!"*

**Claude response:** Honored as serious proposal. Mapped structural fit against locked decisions (excellent fit on power-curve, multi-axis relationships, crafting-tied-to-narrative, state-tagged dialogue, BG3 × Sims dream cross). Proposed 14-day persona-zero gate.

### Premise gate

| Option | Description | Selected |
|--------|-------------|----------|
| Leading candidate, persona-zero gate within 14 days (recommended) | Honors spark + enforces test | (gate ultimately bypassed) |
| Lock now without persona-zero gate | Skips the design anchor | |
| Treat as one of 3 alternatives, no special weight | Most rigorous against confirmation bias | |
| Sit on it 7 days first | Hardest against premature lock-in | |

**User's response:** *"Just spoke to persona. (henceforth 'Dawn' or 'my wife'). She LOVES the idea and also helped me surface another. Since being a magical sprite removes the possibility of player-led romance, we coul dhave the sprite engineer encounters to matchmake two villaigers. This could be the puzzle element. Two vilaigers are in X location together. Identify opportunities to manipulate the environment to spark a mete-cute."*

**Notes:**
- Persona-zero gate **passed in real-time** — Dawn validated the magical-sprite premise
- Dawn co-developed second creative breakthrough: matchmaking-via-environmental-manipulation as the central puzzle layer
- Saved to memory: persona-zero's name is **Dawn**
- Both premise + matchmaking layer LOCKED as the vision

**Structural fit verified:**
- NARR-07 puzzle telegraphing → match-puzzles solvable through observation
- NARR-01/02 persistent branching → matches forged ripple forever
- NARR-03 3+ active threads → every pairing is a thread
- NARR-04 bittersweet allowed → not every match works
- NPC-09 gossip → promoted to central puzzle-information channel
- Multi-axis relationships extend villager-to-villager (compatibility model)
- BG3 × Sims dream cross → mechanically translated (Sims manipulation → BG3 dialogue)
- "Talking to people and finding where I fit in" core fantasy → satisfied by sprite premise structurally

---

## Vision-lock pacing decision

| Option | Description | Selected |
|--------|-------------|----------|
| Continue — Style guide depth (last gray area) | Knock out last area while hot | ✓ |
| Pause — sit with vision tonight | Honest mature-studio practice | |
| Pause — write CONTEXT.md draft now, defer Style guide | Capture immediately | |

---

## Style Guide Depth (interrupted; defaulted post-resolution)

### Initial 4-question batch

Claude presented questions for: visual depth, audio depth, narrative voice depth, UI tone scope.

**User interrupted:** *"I am asking dawn what visual styles really called to her in the 3d cozy space. please abort questions and give me a moment to provide reference images. We will then nail down the rest."*

### Reference deck collection

User provided Cozy Companion magazine spreads featuring **Sandara Tang's druid + leaf-fawn** (flagged by Dawn as primary anchor), Sandara Tang broader work, and magazine covers.

User's follow-up images: Hades character art (Jen Zee / Supergiant), Okami screenshot. Additional verbal feedback from Dawn:
- Liked Hades **character design** specifically
- Liked Okami **art style**: impressionistic, cell-shaded
- Borderlands corroborates cell-shading direction
- Studio Ghibli themes named explicitly (delight)

User confirmed deck closed: *"that's it for now"*.

### Style Guide depth defaulted (post-resolution)

Per studio-orthodoxy memory rule and Daniel's "full orthodox set" directive, Claude locked all four pillars to **Full v0.1** without re-asking the original 4-question batch:

- **Visual:** Full v0.1 spec — direction TBD by Daniel during authoring (cell-shaded painterly stylized 3D as leading hypothesis from Dawn's reactions); reference deck (above); 1-2 hero palettes; character silhouette/proportion principles; environment style frames; UI visual direction
- **Audio:** Full v0.1 spec — genre + instrumentation principles, ambient soundscape principles per zone archetype, SFX tone principles, voice/dialogue audio policy
- **Narrative voice:** Full v0.1 voice bible — POV rules, register, sentence-shape tendencies, period/tone references, forbidden language, narrator presence policy
- **UI tone:** Inside Style Guide v0.1 — principles only (typography family, ornament/iconography, density, motion); full UI mockups in Phase 3 via `/gsd:ui-phase`

**Tension flagged for Phase 1 execution:** Sandara Tang soft-painterly-illustration vs Hades bold-graphic-ink-line are different schools of stylization. Reconciliation is Daniel's creative call. Dawn's specific reactions suggest a synthesis: cell-shaded painterly stylized 3D, character-art bold-line bias for NPCs (Hades-leaning), environment painterly with brushstroke flourishes (Okami-leaning), thematic warmth via Ghibli sensibility.

---

## Claude's Discretion

Areas where Daniel deferred to Claude judgment during execution:

- Document templates and section structures (Risk Register, Capability Gap matrix, Pillar × Mechanic matrix, Failure-mode analysis, Loops diagram skeleton, Player Journey table skeleton, Tools/pipeline doc structure, Anti-positioning doc outline)
- The structural format of "Why play at hour 200" doc

## Deferred Ideas

(Captured in `01-CONTEXT.md` `<deferred>` section)

---

## Memory updates this session

- `feedback_studio_orthodoxy.md` — created
- `user_role.md` — updated to include Dawn's name
- `MEMORY.md` — index updated with new entry

---

*Discussion log: 2026-05-09*
