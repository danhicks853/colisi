---
author: Daniel
end_product: Vision Bible — pillars are testable design constraints, not aspirational ideals
canonical_path: .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md
source_decisions: D-SCOPE-02, D-VISION-01..08
length_target: 3–5 pillars; each pillar block ~300–500 words
hard_guardrails:
  - Every pillar MUST have ≥3 anti-pillar clauses ("We will NOT X") — pillars without anti-clauses are aspirational mush
  - Pillar names are yours — Claude does not suggest names
  - Each pillar must EXCLUDE design choices, not just describe ideals
required_per_pillar:
  - Name (1–3 words)
  - Statement (1 sentence)
  - Why this pillar (1 paragraph elaboration)
  - Design implications (3–5 bullets)
  - Anti-pillar clauses ("We will NOT X" — ≥3 bullets)
  - Failure-mode signature (1 paragraph — how playtest reveals failure)
  - Mechanics this pillar justifies (REQ-IDs from REQUIREMENTS.md)
order: write after pitch lands; can run parallel with core-fantasy + anti-positioning
---

# Pillars of Play

## Pillar 1: Character Development

Why?
Character development IS the gameplay. Everything we are designing, from tutoring villagers to hone their magic, to engineering connections between these villagers, relies on this pillar. Without character development, none of the player's choices matter at all. Deep-cozy players want to know that the choices they're making in this game are going to improve the world they are living in, not leave it stale.

*Anchors:* D-VISION-04 (two-layer puzzle structure — magic-tutoring as moment-to-moment loop; matchmaking-via-environmental-manipulation as meta arcs); D-VISION-06 (BG3 × Sims dream cross translates mechanically to character development as core verb); D-VISION-02 (latent magic surfaces through relationship — character development is the surface mechanism); `research/SUMMARY.md` (persona-gap framing: "evolving relationships in a world that never punishes you" — deep-cozy demographic differentiator); `research/PERSONA.md` (persona-zero core fantasy: "talking to people and finding where I fit in").

Design Implications
- Meaningful choices made by the player MUST affect one or more NPCs, or the village itself, either positively or negatively.
- When designing a player choice, ALWAYS provide a positive path, if a negative path is available. In systems where choices are dynamic and build upon past choices, it must be designed so that the player cannot lock themselves out of a positive choice.
- Character progression should always be visual, and intuitive. The player should see how the character has progressed based on their dialog, their living and working areas, and even their clothing. This eliminates the need for ANY UI dedicated to character management, which can distract from the world.
- Any system added to the game directly impacts the wellbeing of the village.

Failure-mode Signature
Mode: The player cannot reliably intuit character state via diegetic feedback channels, or is forced into a negative development state without a positive path.
Signals: 
- The player asks how an NPC is doing or how they feel about their current status.
- The player looks for UI/UX to determine game or NPC state
When these signals appear, we should investigate diegetic feedback systems and how to make them more intuitive.
- The player states that they were forced into a choice they did not want to do.
- The player attempts to save-scum to obtain a more favorable outcome
- The player quits the game after being railroaded into a negative choice.
When these signals appear, we should check branching decision tree logic for an orphaned negative experience somewhere in the tree.

Anti-clauses: 
- We will not add meaningless "filler content" that does not progress a character's story.
- The wisp will NEVER improve or upgrade the village itself. 
- The storyline will NEVER force the player to make a negative impact on a character.

Mechanics this pillar justifies (REQ-IDs from `.planning/REQUIREMENTS.md`):

*NPC system:*
- **NPC-01** — 12+ NPCs each with personality, schedule, and arc. Characters to develop.
- **NPC-03** — Multi-axis relationship state (trust/intimacy/respect/familiarity), not a single heart-number. Character development tracked across multiple dimensions; rejects single-stat progression.
- **NPC-04** — Arc state machine ≥3 stages from first-meeting to full-arc resolution. Explicit per-villager arc structure (engineering enforcement of "character development must be tracked").
- **NPC-05** — State-tagged authored dialogue (not friendship-level integers). Character state surfaces through dialog (DI #3, dialog channel).
- **NPC-07** — NPCs reference past player choices and gifts. Choice consequences visible in character behavior (DI #1).
- **NPC-09** — NPC-to-NPC gossip layer. Individual character development ripples into village-wide cohesion (Why-section arc).

*Narrative & choice:*
- **NARR-01** — Player choices persist as world-state flags affecting future dialogue + behavior. DI #1 enforced at engineering layer.
- **NARR-02** — No restart-to-rebranch CYOA. DI #2 (no branching-lockout).
- **NARR-03** — ≥3 concurrent narrative threads. Positive-path availability preserved when one resolves (DI #2).
- **NARR-04** — Multiple endings; no forced-tragic regardless of player choice. Anti-clause 3 enforced at narrative architecture.
- **NARR-05** — Game continues meaningfully after main story resolves (no credits-roll-save-locked). Character development never closes off; persona-gap differentiator.
- **NARR-06** — **Per-villager experiential replay system** (per 2026-05-10 reframe in `.planning/persona-zero-emergent-feedback.md` + SCOPE.md): choose a villager, watch fast-forward replay of their life since wisp's arrival, slowing at critical choice junctures. The flagship mechanic for this pillar — the diegetic-vs-abstracted move at the meta level. *Original wording amended; full REQUIREMENTS.md amendment queued for plan 01-02 sign-off.*

*Companion system:*
- **COMP-01** — Player can invite chosen NPC companion (BG3-style, cozy-tuned). Direct cite of D-VISION-06 BG3 × Sims dream cross from Why section.
- **COMP-02** — Reactive contextual companion dialogue (location-aware, activity-aware). Character expression varies with state.
- **COMP-03** — Companion accompaniment evolves multi-axis relationship and arc state. Character-arc progression as gameplay.
- **COMP-04** — No "companion has left forever" / "companion has died" punishing fail-state. Anti-clause 3 enforced at companion architecture.

*Crafting (anti-orphan-system enforcement):*
- **CRAFT-03** — Recipes unlock through narrative / NPC interactions, not arbitrary skill trees. DI #4 ("any system added must impact village wellbeing"); no orphan systems.
- **CRAFT-04** — ≥50% of items carry NarrativeMeta (first-collection dialogue, lore, NPC-association). Anti-clause 1 enforced at item architecture (no filler unconnected to character stories).
- **CRAFT-05** — Crafted items can be gifted to NPCs and trigger reactions (preferences, lore, relationship changes). Crafting tethered to character development.

*Home & decoration:*
- **HOME-04** — NPCs notice and comment on player's home decoration when visiting. Character reactivity to world-state.

*Save (architectural):*
- **SAVE-04** — Save format includes version field; **schema amended 2026-05-10 to mandate per-villager event log (timestamps + significance markers), not just state snapshots** — required by NARR-06 replay system. Migration safe across post-launch updates. *Full REQUIREMENTS.md amendment queued for plan 01-02 sign-off; see SCOPE.md 2026-05-10 entry.*
- **SAVE-05** — Player can never reach a state where their save becomes unrecoverable due to in-game choices. DI #2 (no-lockout) enforced at the save layer.

*Enabler (not directly justified by this pillar, but required for its diagnostic):*
- **HEALTH-05** — Persona-zero playtest ritual. Without HEALTH-05 sessions, the failure-mode signature's observable signals can't be captured; this pillar's diagnostic loop depends on persona-zero feedback.

**Total: 22 REQs justified directly + 1 enabler** (NPC-06, NPC-08, WORLD-01, WORLD-02 considered and rejected as belonging to other pillars or — in WORLD-02's case — explicitly outside this pillar's scope because the wisp is a catalyst, not an agent of world-change).

## Pillar 2: {1–3 word name}

## Pillar 3: {1–3 word name}

## Pillar 4: {1–3 word name} *(optional — collapse to 3 if 4 feels redundant)*

## Pillar 5: {1–3 word name} *(optional — only if 5 is the natural shape)*

## Cross-references

*(Claude populates once drafts land.)*
