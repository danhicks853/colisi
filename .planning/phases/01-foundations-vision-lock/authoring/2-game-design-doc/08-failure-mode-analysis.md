---
author: Daniel (sign-off); Claude (consolidation from 02-pillars-of-play.md authored failure-mode signatures + 06-player-journey.md pillar-failure columns)
end_product: GDD — per-pillar playtest failure signatures; tells future-you "this is the smoke that means pillar X is broken"
canonical_path: .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/08-failure-mode-analysis.md
source_decisions: D-SCOPE-08, D-SUST-07 (HEALTH-05 ritual)
input_dependencies:
  - 02-pillars-of-play.md (each pillar's authored failure-mode signature)
  - 06-player-journey.md (per-horizon pillar-failure modes Daniel approved)
  - 22-personazero-playtest-ritual.md (HEALTH-05 ritual + structured questions)
length_target: pillar table + cross-pillar analysis + persona-zero playtest hook
required_per_pillar_row:
  - Pillar name
  - Failure-mode signature (consolidated from 02-pillars-of-play.md)
  - Early-warning leading indicators (consolidated from 06-player-journey.md horizons)
  - Mitigation (revise pillar / mechanic / scope decision tree)
hard_guardrails:
  - Failure signatures must be observable, not inferred (Daniel watches a playtest video and sees X)
  - Cross-pillar failure modes are the most important — when two pillars fight, they exhibit specific contradictions
  - Per AI policy, all signatures and mitigations are Daniel-authored (consolidated from his prior authoring); cross-pillar analysis is structural design synthesis
order: fourth and last doc in Game Design Doc group; ties pillars + journey + matrix into a stress-test
---

# Failure-Mode Analysis — Colisi

> Per `D-SCOPE-08`: per-pillar playtest failure signatures. The smoke that means a pillar is broken. Consolidated from `02-pillars-of-play.md` (Daniel-authored failure-mode signatures) + `06-player-journey.md` (Daniel-approved per-horizon pillar-failure cells across 5 horizons).
>
> **Diagnostic loop:** observable signals captured in HEALTH-05 persona-zero playtest sessions (`22-personazero-playtest-ritual.md`) — the structured-question template surfaces these failures.

---

## Pillar failure-mode table

### Pillar 1 — Character Development IS the gameplay

**Failure-mode signature** (from `02-pillars-of-play.md`):
The player cannot reliably intuit character state via diegetic feedback channels, OR is forced into a negative development state without a positive path.

**Bounce signature paragraph:**
The player loses interest in the village's people. Villagers feel interchangeable; their arcs feel mechanical or unearned; the player can't tell what's changing in any character's life. The first matchmaking lands but doesn't pull because the player doesn't care about either villager. Under D-VISION-09 NG+, the wisp's recall narration feels gimmicky rather than meaningful. Under D-VISION-10 village-as-canvas, aesthetic changes feel arbitrary rather than commemorative. The hour-100+ value proposition collapses entirely.

**Observable signals (in playtest):**

| Signal cluster | Specific signals | First-line response |
|---|---|---|
| **Diegetic feedback failure** | Player asks how an NPC is doing or how they feel about their current status; player looks for UI/UX to determine game or NPC state | Investigate diegetic feedback systems and how to make them more intuitive |
| **Railroaded choice** | Player states that they were forced into a choice they did not want to do; player attempts to save-scum to obtain a more favorable outcome; player quits the game after being railroaded into a negative choice | Check branching decision tree logic for an orphaned negative experience somewhere in the tree |

**Early-warning leading indicators (per horizon, from `06-player-journey.md`):**
- *First hour:* wisp narration reads generic; villagers don't differentiate via observation; first sighted-NPC encounter has no felt-context to land against
- *Hour 10 (slice end):* meet-cute feels mechanical not earned; villagers feel interchangeable; cliffhanger doesn't pull → **no wishlist conversion**
- *Hour 100:* villagers feel static; no accumulated depth; wisp's NG+ memory feels gimmicky; player has no reason to return
- *Hour 500:* nothing left to discover even with deepest state-tagged accumulation; village stops feeling like home

**Mitigation decision tree:**
1. If signals appear in **first hour or hour 10**: revise NPC differentiation (NPC-03 multi-axis relationships scoring, NPC-04 arc state machine staging, NPC-07 past-choice reference frequency); deepen wisp POI-narration character context
2. If signals appear at **hour 100+**: revise NG+ archetypal trigger density (D-VISION-09); revise village-as-canvas commentary depth (D-VISION-10); review state-tagged dialogue authoring discipline
3. If cross-pillar with Pillar 2: see cross-pillar table below
4. If signature persists after revisions: revise pillar wording or scope cuts via SCOPE.md entry

---

### Pillar 2 — World Will Never Punish You

**Failure-mode signature** (from `02-pillars-of-play.md`):
The player experiences failure states based on time or decremental states.

**Bounce signature paragraph:**
The player feels something has been taken from them. A minigame ended without their action; an item disappeared or stopped working; an NPC event is gone because they "missed it." The cozy promise broke at a specific moment, and trust is hard to restore once that moment lands. Persona-zero's #1 bounce reason from 18+ games she's quit is exactly this signature; if it appears in a Colisi playtest, it's the cardinal failure mode.

**Observable signals (in playtest):**

| Signal cluster | Specific signals | First-line response |
|---|---|---|
| **Timer / depletion** | Player asks why a minigame ended early or showed a failure state without action; player states they are unable to continue or use an item after a certain number of actions ("Why can't I use that pickaxe anymore? Where did it go?") | Investigate whether a timer expired or a depletion meter was added that prevents gameplay upon depletion |
| **Time-locked content** | Player states they are unable to trigger an NPC event after a time-based increment (e.g., season); player notes an NPC state change based solely on time increment, not based on a choice they made | Check whether a time increment precluded an NPC or village event, or caused an NPC state change, through no fault of the player |

**Early-warning leading indicators (per horizon, from `06-player-journey.md`):**
- *First 5 min:* missed cloud rings produce frustration-coded responses (timeout, retry counter, "tutorial failed" message) instead of gentle wisp feedback + camera reset; first-5-min establishes the wrong contract
- *First hour:* first dialog has stat-checks or fail states; first minigame has lose conditions; player learns "I can mess this up" instead of "I can play freely"
- *Hour 10 (slice end):* fail state somewhere along the path blocks the player from reaching meet-cute; gates frustrate; the slice's "never punishes" promise broke before its key proof point
- *Hour 100+:* any difficulty escalation, optimization pressure, or fail state introduced for hour-100+ retention violates persona-zero's #1 bounce reason — **the cardinal failure mode at this horizon**
- *Hour 500:* any "loyalty reward" / "completionist score" / "achievement metagame" introduced to retain players violates the cozy promise

**Mitigation decision tree:**
1. If signals appear at **any horizon**: review the specific mechanic that triggered the signal against `WORLD-05` (NO real-time-pressure mechanics) and the locked anti-clauses (no day clocks, no missable windows, no expiring events, no stamina, no tool durability, no bedtime forcing)
2. If signal involves time-based content lockout: revisit D-TIME-01..05 contract and trigger list (`05-core-loops.md`) for unintended time-advancement
3. If signal involves NG+/optimization pressure (hour-100+): roll back the offending mechanic; the cozy promise is more valuable than the cool feature
4. **This pillar's signals are project-existential.** Any signal here triggers immediate scope review at next monthly retro — not just deliverable revision

---

### Pillar 3 — Welcoming a New Player

**Failure-mode signature** (from `02-pillars-of-play.md`):
The player struggles to interact with the game because the design assumes prior gaming literacy, hidden conventions, or unexplained interface logic.

**Bounce signature paragraph:**
The player feels they're the wrong audience for this game. Controls don't behave the way they expected; menus require gaming-literacy to navigate; mid-game a new system appears without explanation; the player feels they need a "guide" or "wiki" to understand what's happening. The persona-zero "first-time-3D-game" framing breaks. Players who bounce off "tutorial gates" in other games bounce off Colisi early; players who reach hour 30+ but encounter an NG+ tutorial that doesn't land will bounce at the NG+ transition.

**Observable signals (in playtest):**

- Player asks how to perform basic movement, interaction, or camera-control tasks after onboarding
- Player repeatedly opens menus searching for information that should have been visually or contextually obvious
- Player avoids engaging with a mechanic because they are afraid of "doing it wrong"
- Player fails a mechanic because they misunderstood the input language, not because they made a meaningful decision
- Player verbally compares the game to "something gamers would understand," or states that they feel inexperienced, confused, or overwhelmed

**First-line response** (from `02-pillars-of-play.md`):
Investigate onboarding clarity, interface readability, input consistency, and whether the mechanic relies on assumed gaming conventions rather than taught interaction patterns.

**Early-warning leading indicators (per horizon, from `06-player-journey.md`):**
- *First 5 min:* tutorial reads as chore rather than play; the wisp's playful self-direction becomes forced instruction; players who bounce off "tutorial gates" in other games bounce here
- *First hour:* first dialog branching feels overwhelming or unclear; player can't read which choices matter or what's expected
- *Hour 10:* matchmaking puzzle layer was opaque; player completed it accidentally without understanding their agency in it; meet-cute lands but player can't articulate "I did that"
- *Hour 100:* NG+ launches without a clear re-introduction tutorial; wisp's archetypal recall narration confuses ("why is the wisp referencing things I don't remember?"); dialog highlights feel mysterious without explanation; NG+ "rules" (3-run cap, time-loop framing, archetypal triggers) read as opaque or arbitrary
- *Hour 500:* by this horizon, all NG+ tutorials should be long-internalized; failure here would mean the player still feels the wisp's memory system is opaque after 500 hours, which means the original NG+ re-introduction tutorial failed at hour 30-50

**Mitigation decision tree:**
1. If signals appear in **first 5 min or first hour**: revise onboarding sequence (ONB-01..04); review tutorial pacing; check for chord/modifier-input violations (CTRL-08); ensure UI-05 pause-anytime works mid-tutorial
2. If signals involve **matchmaking opacity at hour 10**: revise NPC-09 gossip-as-match-info-channel surfacing; check that wisp narration during matchmaking observation phase is legible; review whether the matchmaking puzzle layer's "I did that" felt-sense lands
3. If signals involve **NG+ tutorial failure at hour 30-50**: this is a Phase 4 (dialogue/NARR scripting) + Phase 6 (full-game content) design item flagged at D-VISION-09 + D-VISION-10 lock; full-game scope, not slice scope
4. If signals involve **village-as-canvas / faerie house mechanics**: revise tutorial framing for first milestone trigger (D-VISION-10); ensure player understands defer/decline is always valid

---

## Cross-pillar failure modes

> The most important failure modes are where two pillars fight. When pillars are well-aligned, conflicts produce specific contradictions in playtest. Three cross-pillar tensions to watch.

### Pillar 1 × Pillar 2 — Character development requires emotional weight; cozy promise forbids punishment

**The tension:** Deep character development requires real stakes — villagers grieve, struggle, occasionally fail. Persona-zero loves "characters who keep evolving" specifically because they have inner life. But emotional weight can EASILY tip into "the player feels punished by the narrative."

**Specific contradiction:**
A villager experiences something sad (grief, disappointment, an unmatched arc that doesn't resolve in the player's favor). Pillar 1 says: this is character work; the villager is allowed to have inner life that isn't always sunny. Pillar 2 says: the player must never feel punished by the world.

**The line that distinguishes meaningful sadness from player-punishing emotional mood:**
- ✓ The villager's grief is THEIR experience; the player witnesses it; the player can engage or not; the player is not made to feel responsible for the villager's emotional state
- ✗ The villager's grief is FRAMED AS the player's failure ("you weren't there for them"); the player loses access to content because the villager is grieving; the player feels they must "fix" the grief on a clock

**Mitigation:** Authoring discipline rule — every emotionally-weighty narrative beat MUST satisfy three checks:
1. The player's role is witness, not fixer (unless they choose to be)
2. The villager's emotional state never gates content access
3. The bittersweet framing is held — joy and sadness coexist; no forced-tragic per NARR-04

**Playtest signal of this cross-pillar failure:**
- Player says "I felt bad about [villager]'s situation" with negative valence (vs. neutral or positively-bittersweet valence)
- Player asks "what was I supposed to do?"
- Player save-scums to avoid a sad villager beat (P1 signal AND P2 signal simultaneously)

---

### Pillar 1 × Pillar 3 — Deep character development requires layered systems; approachability requires simplicity

**The tension:** Pillar 1 commits to multi-axis relationships (NPC-03), state-tagged dialogue (NPC-05), arc state machines (NPC-04), per-villager replay (NARR-06), village-as-canvas (D-VISION-10), and NG+ wisp-memory (D-VISION-09). That's a lot of systems. Pillar 3 commits to "no prior gaming literacy assumed" and "no untaught mid-game systems."

**Specific contradiction:**
A new mechanic from the Pillar 1 surface fires for the first time at hour 10, hour 30, or hour 100. Pillar 3 demands the player be onboarded into it gently (per ONB-03 re-tutorialize new mechanics). Pillar 1 demands the mechanic carry deep meaning that's already accumulated. These are not naturally aligned.

**The pattern that resolves it:**
Mechanics introduce visibly LATE in the game must be FRAMED AS extensions of mechanics already taught. The wisp's NG+ memory is the same recall mechanism the wisp has always used (just with cross-playthrough scope). The village-as-canvas is the same villager-arc-completion notification system the player has been getting for hours (just with new visible consequences). The faerie house is just another zone (player has been entering villager homes for hours).

**Mitigation:** Authoring discipline rule — every Pillar 1 mechanic that fires after first hour must trace back to a teaching moment in the slice. If it doesn't, it's a Pillar 3 violation flagged at SCOPE.md.

**Playtest signal of this cross-pillar failure:**
- Player encounters a mechanic at hour 30+ and asks "wait, when did this start?"
- Player feels the wisp's NG+ recall is "magical" in a confusing-not-cozy way (i.e., they don't recognize it as "the same wisp that's been here all along")
- Player has to consult external documentation to understand a system

---

### Pillar 2 × Pillar 3 — Pause-anytime conflicts with first-time tutorial flow

**The tension:** Pillar 2 (UI-05) says the player can pause the game at any time, including during dialogue. Pillar 3 wants the player to learn smoothly without breaks that fragment understanding. These usually align but can conflict during onboarding.

**Specific contradiction:**
A first-time player pauses the tutorial mid-instruction, comes back later, has lost the thread, and is stuck without context.

**Mitigation:**
- Tutorial sequences have NO time-pressure (Pillar 2 honored)
- Pause-anytime is supported (Pillar 2 honored)
- BUT when the player un-pauses or returns, the wisp's narration reminds them of the current step without making them re-do prior steps
- Tutorial state persists across pause / save / quit / resume
- The tutorial is "pick up where you left off" rather than "restart from the top"

**Playtest signal of this cross-pillar failure:**
- Player pauses tutorial, returns, asks "where am I in this?" or "what was I doing?"
- Player rage-quits during tutorial because pausing dropped them out of context

This is a milder cross-pillar failure than the other two; primarily a Phase 3 implementation concern.

---

## Persona-zero playtest hook

The HEALTH-05 ritual (`22-personazero-playtest-ritual.md`, locked under D-SUST-07) is the diagnostic loop for these failure modes. **Without HEALTH-05 sessions, none of the observable signals above can be captured** — the failure-mode signatures depend on persona-zero (Dawn) feedback to detect.

**D-SUST-07 structured questions** (asked at every HEALTH-05 session, derived from this analysis):
1. *Did anything in the game feel like it was being taken from you, or like you'd missed something?* — Pillar 2 diagnostic
2. *Did any character feel interchangeable, or like the game was treating them as background?* — Pillar 1 diagnostic
3. *Did anything in the controls or interface make you feel like you were "doing it wrong" or that you needed prior gaming experience?* — Pillar 3 diagnostic
4. *(Cross-pillar) — Did any moment in the game make you feel bad about a villager's situation in a way that felt unfair?* — Pillar 1 × Pillar 2 diagnostic
5. *(Cross-pillar) — Did any new mechanic land without you understanding where it came from?* — Pillar 1 × Pillar 3 diagnostic

**Logging convention:** Each session logs to `.planning/playtest-log/{YYYY-MM-DD}-{topic}.md` with verbatim Dawn responses and explicit pillar-failure signal flagging.

**Bi-weekly cadence** (per D-SUST-07): minimum 2 sessions per major Phase 1 plan; cadence flexes to Dawn's life timeline.

**Outside-reviewer cross-check** (per D-WALL-05): the designated outside reviewer (locked at plan 01-06) audits failure-mode signal-flagging quarterly to catch confirmation bias in Daniel's signal interpretation.

---

## Cross-references

- `02-pillars-of-play.md` — source for each pillar's failure-mode signature (this doc consolidates and expands)
- `06-player-journey.md` — per-horizon pillar-failure cells (early-warning leading indicators source)
- `22-personazero-playtest-ritual.md` — HEALTH-05 ritual, structured questions, logging convention
- `15-risk-register.md` — R-09 (market thesis rejected) signals via Pillar 1 failure; R-10 (AI policy leak) tangential to Pillar 1 character authenticity
- `21-year3wall-tripwires.md` — Pillar 2 failure-mode signals at hour 100+ are Year-3-Wall pivot tripwire candidates
- `28-greenlight.md` — failure-mode analysis ratified at greenlight as the pillar-stress-test framework
- CONTEXT.md D-VISION-01..11 — every D-VISION decision must check against Pillar 2 anti-clauses and Pillar 3 approachability surface
- CLAUDE.md Cozy Promise hard guardrails — Pillar 2 anti-clauses crystallized at the project level

---

## Daniel sign-off

**Failure-mode analysis ratified by:** Daniel Hicks
**Date:** 2026-05-10
**Adjustments from Claude pre-fill:** None substantive — consolidation from 02-pillars-of-play.md authored signatures + 06-player-journey.md approved cells; cross-pillar analysis (P1×P2 emotional-weight vs anti-punishment, P1×P3 deep-systems vs simplicity, P2×P3 pause-anytime vs tutorial-flow) ratified as drafted; 5 D-SUST-07 diagnostic questions ratified as session standard.

**Daniel signature:** 2026-05-10 — failure-mode analysis ratified; HEALTH-05 ritual diagnostic question set locked; cross-pillar authoring discipline rules (especially P1×P2 emotional-weight three checks) locked.
