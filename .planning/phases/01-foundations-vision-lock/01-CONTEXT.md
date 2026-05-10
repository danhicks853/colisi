# Phase 1: Foundations & Vision Lock - Context

**Gathered:** 2026-05-09
**Status:** Ready for planning
**Note:** This is the most foundational CONTEXT.md the project will produce. It captures both decisions about *how* Phase 1 deliverables will be structured AND the **vision lock** itself — a major creative breakthrough validated by persona-zero in real-time during the discussion.

<domain>
## Phase Boundary

Phase 1 delivers the locked vision and the full mature-studio pre-production deliverable set before any code or content is authored. Zero code in this phase. The output is:

1. **Vision lock** — the player premise + central puzzle layer (locked during this discussion; see decisions below)
2. **Pre-production deliverable packs** — vision, loops, scenario, world & style, risk & capability, process, decision-lock, validation, greenlight (full orthodox set per studio practice)
3. **Persona-zero (Dawn) playtest ritual established + first session executed**
4. **Demographic validation evidence (MKTG-06) collected and verdict logged in MARKET-EVIDENCE.md**

Out of scope for Phase 1: any code, any binary art/audio assets, the Godot project itself (Phase 2-3), engine setup (Phase 2), specific NPC content (Phase 6).

**Scope expansion logged here.** Original ROADMAP.md Phase 1 had 7 success criteria centered on process docs + open-decision locks. This CONTEXT.md expands Phase 1 to the full mature-studio pre-production stack (28 artifacts, ~18 net new) per Daniel's directive: "I really want to mirror established studio orthodoxy as much as possible. There's a reason they are successful... this is a project I will plink at for an hour or two a night for years." See `<decisions>` Phase 1 Scope Expansion section. ROADMAP.md Phase 1 success criteria are amended in the same commit; SCOPE.md gets its inaugural entry as the first Phase 1 deliverable.

</domain>

<decisions>
## Implementation Decisions

### Vision Lock — THE PREMISE (locked, persona-zero-validated)

- **D-VISION-01:** Player is a magical helper-sprite — not a human protagonist. The sprite drifts/floats through a village; sprite does not walk on legs. Third-person camera from CTRL-01 still satisfied; movement model differs from human-character cozy-sim convention.
- **D-VISION-02:** Each villager has their own *personal magic* (cooking magic, farming magic, hedge-witchery, sky-watching, mending magic, song-magic, etc. — final taxonomy authored during Phase 1 World Bible work). The magic is *latent* in the villager until the player-sprite helps it surface through relationship.
- **D-VISION-03:** Power distribution rule — the sprite *gives* magic, never accumulates it. Sprite's power scales with the relationship, not with stat-grinding. This satisfies the locked "power curve plateaus, never spikes" principle structurally (Sanderson's First Law dodged: cozy problems can't be power-fantasy'd because sprite-magic only works through trust).
- **D-VISION-04:** Central puzzle layer is **matchmaking-via-environmental-manipulation**. Sprite observes villagers, schedules, items, dialogue cues; identifies pairing opportunities; gently manipulates environment (a falling petal, a redirected breeze, a kettle whistling a moment too long) to spark a meet-cute. Some encounters become friendships, some become love, some never spark — all are valid outcomes. Solution discovery is observation-based; satisfies NARR-07 (puzzles must telegraph).
- **D-VISION-05:** Persona-zero (Dawn) validated this premise direction in real-time during this discussion AND co-developed the matchmaking layer. The 14-day persona-zero gate originally proposed is **passed**; premise is locked, not locked-pending.
- **D-VISION-06:** This is the BG3 × Sims dream cross translated to mechanics: Sims-like world manipulation (engineering the meet-cute) → BG3-like dialogue branching (the conversation the villagers then have). Persona-zero's "talking to people and finding where I fit in" core fantasy is satisfied: the sprite's whole purpose IS finding-where-it-fits with each villager.
- **D-VISION-07:** Romance content in v1 is **between villagers**, not player-to-villager. Sprite cannot romance. v2 may revisit a "sprite-can-be-romanced" arc if design supports it. ROM-01/ROM-02 (currently v2) re-anchored under this framing.
- **D-VISION-08:** Per AI policy (PHILOSOPHY.md §V), Daniel and Dawn author all in-world content — sprite name, villager names, place names, magic-system codifications, dialogue, lore, story. Claude does NOT generate any of this. Claude structures design space, critiques drafts, helps with synthesis-only documents (matrices, analysis tables, risk registers).

### Phase 1 Scope Expansion — Full mature-studio pre-production set

Locked: Phase 1 incorporates the full orthodox 28-artifact deliverable set (~18 net new vs original ROADMAP.md Phase 1 scope). Daniel's directive: *"Take the full orthodox set and amend any documents needed. I dont care how long it takes, this project will be done right the first time, and I will have time to learn."*

Organized into nine packs:

**Vision Pack:**
- **D-SCOPE-01:** Vision pitch / one-pager — elevator + paragraph + capsule line
- **D-SCOPE-02:** Pillars of Play — 3-5 emotional/experience pillars, each with paragraph + design implications + anti-pillar clauses
- **D-SCOPE-03:** Core Fantasy statement — one paragraph + one capsule sentence
- **D-SCOPE-04:** Anti-positioning doc — explicit divergence from comparables (Stardew, BG3, Sims, Spiritfarer, Coral Island, Coffee Talk, Palia, etc.)

**Loops & Journey Pack:**
- **D-SCOPE-05:** Core Loops diagram — moment-to-moment / session / meta loops, nested
- **D-SCOPE-06:** Player Journey map — first 5 min, first hour, hour 10, hour 100, hour 500
- **D-SCOPE-07:** Pillar × Mechanic matrix — every mechanic justified against ≥1 pillar
- **D-SCOPE-08:** Failure-mode analysis — for each pillar, what failing it looks like in playtest

**Scenario Pack:**
- **D-SCOPE-09:** Slice Scenario sketch — screenwriter-style walkthrough of slice content end-to-end (≥ "first hour of slice")
- **D-SCOPE-10:** Wow beats list — trailer-screenshots-in-advance; the trailer/marketing moments
- **D-SCOPE-11:** 30-second elevator demo sketch — first half-minute of public demo

**World & Style Pack:**
- **D-SCOPE-12:** World Bible v0.1 — DEEP scope: full v1 setting bible, all 8 zones outlined, full pantheon/lore, magic tier list (interpreted as cultural/atmospheric tiers per D-WORLD-04), full calendar, every culture, naming-system rules per culture
- **D-SCOPE-13:** Mood/reference deck — visual + tonal references from existing media; human-curated only; no AI-generated reference art (AI policy)
- **D-SCOPE-14:** Style Guide v0.1 — Full v0.1 across visual / audio / narrative voice / UI tone (see Style Guide section below)

**Risk & Capability Pack:**
- **D-SCOPE-15:** Risk register — explicit risks + likelihood + impact + mitigation + early-warning tripwire
- **D-SCOPE-16:** Capability gap matrix — skills required vs current proficiency vs acquisition plan + deadline
- **D-SCOPE-17:** Tools/pipeline ratification — STACK.md ratified into a Phase-1-locked tools doc

**Process Pack** (existing in ROADMAP.md):
- **D-SCOPE-18:** SCOPE.md log with worked example
- **D-SCOPE-19:** slice-debt.md log with worked example
- **D-SCOPE-20:** Sustainable-pace cadence doc (see Sustainability Rhythms section)
- **D-SCOPE-21:** Year-3-Wall pivot tripwires (see Year-3-Wall section)
- **D-SCOPE-22:** Persona-zero (Dawn) playtest ritual + first session executed
- **D-SCOPE-23:** "Why play at hour 200" retention doc — applies four-engine retention strategy

**Decision Lock Pack:**
- **D-SCOPE-24:** Time model lock (see Time Model section)
- **D-SCOPE-25:** Stack ratification (already settled in research; Phase 1 records the lock)
- **D-SCOPE-26:** Architecture ratification (ARCHITECTURE.md exists; Phase 1 ratifies as locked)

**Validation Pack:**
- **D-SCOPE-27:** MKTG-06 demographic validation — MARKET-EVIDENCE.md with thesis confirmed/refined/rejected verdict (see MKTG-06 section)

**Greenlight:**
- **D-SCOPE-28:** Greenlight document — Daniel signs off as solo-dev "producer"; dated; "knowing what I now know, I commit to this" statement; gates Phase 2 entry

### Time Model (locked partial)

- **D-TIME-01:** **Pure action-driven contract.** In-game time advances ONLY on explicit player actions. The world holds state indefinitely if the player stands still. Day/night visuals decouple from gameplay state.
- **D-TIME-02:** **Day/night cycle is player-controlled.** Visuals snap on rest, Stardew/ACNH-style. Standing still indefinitely never closes anything (WORLD-03/05 compliance).
- **D-TIME-03:** **NPC schedules use continuous pathing during play.** NPCs path between waypoints in real time while the player is in the zone. This is the ambitious architectural choice; it commits Phase 3 to navmesh + animation budget and Phase 5 to schedule data + save-mid-walk policy. Within a single time-slot ("morning"), NPCs path between intra-slot stations (kitchen → garden → porch within "morning").
- **D-TIME-04:** **Tension flagged for Phase 5 design:** NPCs move during play while sun does not. Visually unusual but feels acceptable within a single slot. Save-mid-walk policy needs explicit Phase 5 work.
- **D-TIME-05:** **Trigger list deferred.** "Pure action-driven" is the contract; the canonical list of actions that advance time DERIVES from the Core Loops Pack (D-SCOPE-05). Will be locked in Phase 1 execution AFTER Core Loops Pack drafts exist, OR deferred to Phase 4/5 if Phase 1 execution finds the trigger list still ambiguous post-Loops. Daniel's pushback during discussion: *"how can we answer these questions if we don't know what the core game loop is?"* — captured.

### Year-3-Wall Tripwires Protocol (locked)

- **D-WALL-01:** **Cascade cadence:** four checkpoints at month 6 / 12 / 24 / 36. Each has its own pass/fail criteria. Earlier checkpoints catch problems while reversible; month 36 is the existential pivot point.
- **D-WALL-02:** **Multi-OR triggers.** Any single metric below threshold fires the tripwire. Aggressive against late-firing; high false-alarm rate is acceptable BECAUSE the response is structured-pause, not auto-cut.
- **D-WALL-03:** **Pause-and-replan protocol** when a tripwire fires:
  1. Trip detected (mechanical, from metric check at checkpoint date)
  2. Mandatory feature-work freeze — no new code/content during pause
  3. **1-week time-boxed pause window** (Daniel's choice; tighter than my 2-week recommendation)
  4. **Replan Document** authored during pause:
     - Diagnosis (what data fired which metric, why)
     - Root-cause hypothesis (not symptom)
     - Three scenarios evaluated:
       - Scenario A: continue as-is (with explicit accepted-risk statement)
       - Scenario B: scoped continue (Vol. 1-style content cut, systems intact)
       - Scenario C: structural pivot (cut systems, change shape, or pause indefinite)
     - Scenario recommendation + rationale
  5. Outside reviewer cross-check — pre-committed reviewer reads Replan Doc; their answer is required co-signature on chosen scenario (NOT advisory)
  6. Decision logged in SCOPE.md + ROADMAP.md amendment (no silent drift)
  7. Return to work OR exit
- **D-WALL-04:** **Re-arm-and-rebaseline if continue-as-is.** "Continue as-is" requires updating Replan Doc with new specific metric targets to hit by next checkpoint. Cascade stays live. Prevents "tripwire fires → talk it through → nothing changes → next tripwire ignored."
- **D-WALL-05:** **Enforcement: pre-committed in writing + Daniel + designated outside reviewer.** Tripwire criteria signed and dated in the Greenlight document (D-SCOPE-28). When fired, Daniel + outside reviewer co-sign the chosen scenario.
- **D-WALL-06:** **Productivity-tripwire metric unit:** cumulative phase-completion delta vs roadmap estimate. Specific delta thresholds at each checkpoint (e.g., "if at month 12 we're 3+ months behind cumulative phase plan, trip") authored during Phase 1 execution per D-SCOPE-21.
- **D-WALL-07:** Specific metric thresholds at each checkpoint (wishlist counts, persona-zero retention scores, productivity delta thresholds) **deferred to Phase 1 execution** — they need a few hours of comparable-game research to land at honest numbers.

### MKTG-06 Demographic Validation Methodology (locked)

- **D-MKTG-01:** **Hybrid game-list selection.** Selection rule first ("Steam tag = Cozy + Life Sim, top 20 by review count"); Daniel curates: drops obvious mismatches (pure VN, pure city-builder), adds 2-3 must-haves from persona research (Stardew, Spiritfarer, Coral Island). Sample size 10-20 games.
- **D-MKTG-02:** **LLM-assisted classification + Daniel verification of every tag.** Per game: scrape negative + mixed reviews via Steam API; LLM classifies each into complaint categories (time pressure / difficulty / endgame / VN-style / required-multiplayer / other) with extracted quotes; Daniel reviews 100% of LLM tags to verify accuracy; final tallies are Daniel-verified. Within AI policy (research synthesis allowed; verdict authoring is Daniel's).
- **D-MKTG-03:** **Formal Google Form survey + targeted distribution.** ~10 structured questions. Distribution: r/CozyGamers post (per subreddit rules), 2-3 cozy Discord servers (with mod permission), cozy gaming Twitter/Bluesky tags. Target 50-100 responses minimum.
- **D-MKTG-04:** **Triangulation decision rubric:**
  - **Confirmed** = persona dislikes (time pressure / difficulty wall / endgame cliff) appear in top-5 complaints in ≥7 of 10-20 mined games AND ≥40% of survey respondents cite at least one
  - **Refined** = appear in 4-6 games OR 25-40% survey → narrative needs adjustment, but thesis core holds
  - **Rejected** = appear in <4 games AND <25% survey → thesis is wrong; ROADMAP.md revisited before Phase 2
- **D-MKTG-05:** Specific games-to-mine list and survey question wording **deferred to Phase 1 execution.**
- **D-MKTG-06:** Output deliverable: `MARKET-EVIDENCE.md` with explicit verdict + supporting data tables.

### Sustainability Rhythms (locked)

- **D-SUST-01:** **Hour-based targets dropped.** With heavy AI assistance, hours/week is the wrong unit. Pace measured by **milestones-shipped vs milestones-planned.** Daniel's reframe: *"Hourly goals don't really apply here, with heavy AI assistance. goals should be milestone based."*
- **D-SUST-02:** **No hour tracking at all** — not even observational. Hour tracking creates pressure even when nominally observational.
- **D-SUST-03:** **Daily rhythm:** continuous nightly session, no variation. The ritual of showing up is the discipline; duration varies with life. No daily quota.
- **D-SUST-04:** **Phase plans drive monthly milestones.** When a phase is planned via `/gsd:plan-phase`, its plans + tasks become the milestone backlog. Monthly retro asks: "which planned tasks/plans did I complete this month vs which I'd named in the previous monthly retro?" STATE.md tracks rolling.
- **D-SUST-05:** **Monthly retro** — last day of month, ~2 hr session. Reviews: milestones-hit vs planned, slice-debt log entries, persona-zero summary, STATE.md update.
- **D-SUST-06:** **Quarterly review** — half-day session every 3 months. Reviews: Year-3-Wall tripwire check, SCOPE.md audit, phase-level replanning if warranted, CHANGELOG.md entry.
- **D-SUST-07:** **Persona-zero (Dawn) playtest ritual:** bi-weekly 30-min session. Format: she plays whatever's most-buildable for ~20 min while Daniel observes silently; last 10 min is structured questions ("what did you expect to be able to do that you couldn't", "what felt the worst", "one thing you'd change"). Notes go in `.planning/playtest-log/YYYY-MM-DD.md`. Pre-Phase 3 (no game yet), session is reading docs and giving reactions instead of play.
- **D-SUST-08:** **Productivity tripwire signal** = cumulative phase-completion delta (per D-WALL-06).

### World Bible v0.1 (locked depth + tone)

- **D-WORLD-01:** **Depth: DEEP** — full v1 setting bible authored at Phase 1 close. All 8 zones outlined; full pantheon/lore; magic tier list; full calendar; every culture sketched; naming-system rules per culture.
- **D-WORLD-02:** **Magic tone: soft magic with codified vibes.** Brandon Sanderson terminology: soft = whimsical, atmospheric, not used to solve plot problems. Codified = we name what magic CAN'T do (so it never solves cozy-game problems via deus ex machina). Examples: spirits exist and have moods but aren't predictable; witches have specialties but no DPS spell list; talking animals are individuals not species.
- **D-WORLD-03:** **Calendar: Stardew-style with Colisi-flavored season names + festival framework.** 4 seasons named in-world voice (not just "Spring/Summer/Fall/Winter"); ~28-day months; named annual festivals as cozy retention engine. Specific festivals authored Phase 6; calendar shape locked Phase 1.
- **D-WORLD-04:** **"Magic tier list" + "soft magic" reconciliation:** "tiers" interpreted as **cultural/vocational archetypes** (e.g., home witches / hedge witches / sky witches as tiers of practice and tradition) and **atmospheric scale** (kitchen magic vs grove magic vs world-magic), NOT mechanical power tiers like a TTRPG spell list. Preserves cozy/whimsical tone while giving designers a codified vocabulary. (If this interpretation is wrong, Daniel flags during Phase 1 World Bible authoring.)
- **D-WORLD-05:** **Player premise: locked early in Phase 1.** Per D-VISION-01–08, premise is the magical helper-sprite + matchmaking direction. Persona-zero already validated. Premise pitch document is the FIRST Phase 1 deliverable so all other Phase 1 docs derive from a locked premise.
- **D-WORLD-06:** Specific zone names, magic system codification specifics, calendar season names, culture details — **deferred to Phase 1 execution** per D-SCOPE-12.

### Style Guide v0.1 (locked depth, defaults applied per studio orthodoxy)

- **D-STYLE-01:** **Visual direction: Full v0.1 spec.** Locked depth includes: named direction, color palette principles + 1-2 hero palettes, character silhouette/proportion principles, environment style frames (3-4 reference compositions Daniel curates), UI visual direction (typography family, iconography style).
- **D-STYLE-02:** **Visual reference deck (collected in real-time during this discussion):**
  - **Primary anchor:** Sandara Tang's druid + leaf-fawn (Cozy Companion magazine spread) — flagged by Dawn as the strongest single signal
  - Sandara Tang's broader work — kid fishing with mossy creature, sleeping moss-companions, blue-water-spirit kimono figure, dragons-with-sweets
  - Cozy Companion magazine covers — forest-with-butterflies girl, cupid-arrow vending machine
  - **Hades** (Supergiant / Jen Zee) — Dawn liked the *character work specifically*: bold ink linework, expressive faces, ornate detail, flat-but-shaded color, anime-leaning proportions
  - **Okami** — impressionistic, sumi-e ink-wash environments with cel-shaded characters, brushstroke flourishes (wind spirals literally drawn with ink curves), painterly ground textures
  - **Borderlands** — corroborates cel-shading direction
  - **Studio Ghibli** — thematic delight (warmth, animism, food-and-everyday-magic, character-driven environmental love); thematic, not necessarily visual-direct
- **D-STYLE-03:** **Visual direction synthesis WORK** (NOT to be done by Claude — flagged for Daniel during Phase 1 execution): there is a real *tension* between Sandara Tang's soft-painterly-illustration and Hades' bold-graphic-ink-line. These are different schools of stylization. Reconciling into one direction is a creative call Daniel makes. Leading hypothesis from Dawn's specific reactions: cell-shaded painterly stylized 3D, character-art bold-line bias for NPCs (Hades-leaning), environment painterly with brushstroke flourishes (Okami-leaning), thematic warmth via Ghibli sensibility, soft-illustration-painterly accents per Sandara Tang. Daniel synthesizes; Claude does NOT generate visual content or palettes.
- **D-STYLE-04:** **Audio direction: Full v0.1 spec.** Music genre + instrumentation principles (Daniel curates exemplars from existing games/films/albums — never AI-generated music as reference); ambient soundscape principles per zone archetype; SFX tone principles (e.g., "no hard percussion in any UI sound"); voice/dialogue audio policy (text-only v1; reading speed assumptions). Daniel authors all content.
- **D-STYLE-05:** **Narrative voice: Full v0.1 voice bible.** POV rules, register (formal/casual/archaic/modern), sentence-shape tendencies, period/tone references (which authors/games does the voice feel like — Daniel curates), forbidden language (modern slang, anachronisms), narrator presence policy. Daniel authors fully per AI policy; Claude critiques drafts only.
- **D-STYLE-06:** **UI tone: Inside Style Guide v0.1, principles only.** Phase 1 locks: typography family direction, ornament/iconography principles, density/whitespace tendency, animation/motion principles. Full UI mockups/wireframes are Phase 3 via `/gsd:ui-phase` workflow.
- **D-STYLE-07:** **Style depth defaulted to Full per Daniel's studio-orthodoxy directive.** Daniel can trim during Phase 1 execution if specific sections turn out to be over-engineered — orthodoxy memory rule says "include and explain purpose; Daniel will trim, not Claude."

### Premise Authorship + Persona-Zero Gate Process

- **D-PREMISE-01:** Premise pitch is the **first Phase 1 deliverable** (sub-step 0.1). Daniel authors a 1-2 page pitch capturing the magical-sprite + matchmaking direction. Dawn already validated and co-developed; pitch is for *posterity and downstream-doc anchoring*, not for re-gating.
- **D-PREMISE-02:** Even though premise is locked, the 3-alternatives-sketch idea Daniel originally proposed is **honored as a side artifact**: Daniel sketches 2-3 alternative premises briefly (1-paragraph each) for the World Bible / Anti-positioning record, demonstrating the locked premise was a CHOICE among alternatives. Documented; not re-litigated.

### Claude's Discretion (areas where Claude has flexibility during Phase 1 execution)

- Document templates and section structures for Risk Register, Capability Gap matrix, Pillar × Mechanic matrix, Failure-mode analysis matrix (mechanical synthesis tools Claude can draft)
- Loops diagram template/skeleton (Claude proposes; Daniel fills in content)
- Player Journey table skeleton (same)
- Tools/pipeline doc structure (Claude can draft from STACK.md)
- Anti-positioning doc structure (Claude can draft outline; Daniel writes voice)
- Failure-mode analysis structure
- The structural format of "Why play at hour 200" doc (the four-engine application is an existing strategy from SUMMARY.md; Claude structures, Daniel authors content)

### Folded Todos

None — `gsd-tools todo match-phase 1` returned `todo_count: 0` at session start.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project foundation
- `CLAUDE.md` — Project instructions, AI policy enforcement role, Six Words, all load-bearing rules
- `PHILOSOPHY.md` — Project constitution; **§V is the AI Use Policy with the refusal list Claude enforces**
- `AI-DISCLOSURE.md` — Public-facing AI use disclosure
- `.planning/PROJECT.md` — Vision, requirements, key decisions, codename Colisi
- `.planning/REQUIREMENTS.md` — All v1 requirements with traceability table
- `.planning/ROADMAP.md` — Phase ordering and gates (Phase 1 success criteria amended in same commit as this CONTEXT.md)
- `.planning/STATE.md` — Current project state (amended in same commit)

### Pre-existing research (Phase 1 ratifies these)
- `.planning/research/SUMMARY.md` — Top-line strategic stance, locked stack, four killers, four-engine retention strategy, recommended architecture
- `.planning/research/PERSONA.md` — Lead persona (Dawn) interview corpus + game-by-game love/hate axes
- `.planning/research/FEATURES.md` — Feature analysis (must-have / should-have / defer / anti-features)
- `.planning/research/ARCHITECTURE.md` — Five-autoload architecture, multi-axis relationships, state-flag loose branching, action-driven time leaning
- `.planning/research/PITFALLS.md` — Known pitfalls + mitigations
- `.planning/research/STACK.md` — Engine, language, dialogue tooling, save format, localization, audio, version control, testing decisions

### Vision lock supplements (this session)
- See `<specifics>` below for visual reference deck items, premise framing, dream-cross translation

### Notes on missing canonical sources
- No SCOPE.md yet — first inaugural entry will be created during Phase 1 execution as the bootstrap artifact (D-SCOPE-18)
- No slice-debt.md yet — first inaugural entry during Phase 1 execution (D-SCOPE-19)
- No MARKET-EVIDENCE.md yet — output of MKTG-06 work during Phase 1 (D-MKTG-06)
- No CONVENTIONS.md yet — Phase 2 deliverable (INFRA-05)

</canonical_refs>

<code_context>
## Existing Code Insights

**No code yet. Phase 1 is pre-code by design.**

### Reusable Assets
- None at code level. Asset-level reusable inputs: persona corpus (highest-rigor input), full research stack (SUMMARY/STACK/ARCHITECTURE/FEATURES/PITFALLS/PERSONA), already-locked research decisions.

### Established Patterns
- None at code level. **At process level**, established patterns from research/STATE.md/PHILOSOPHY.md:
  - Documents-as-source-of-truth + amendment-not-silent-drift
  - PHILOSOPHY.md as the constitution; precedence order locked in CLAUDE.md
  - "Architect for the full game; ship the slice" tension as load-bearing
  - AI policy refusal list (PHILOSOPHY.md §V) — non-negotiable

### Integration Points
- Phase 2 (Infrastructure & Repo Setup) consumes: locked decisions + specific docs from Phase 1 (CONVENTIONS.md depends on World Bible v0.1, art-source repo split decision depends on Style Guide v0.1 visual direction, README.md skeleton uses vision pitch)
- Phase 3 (Project Skeleton) consumes: locked architecture, locked time model, sprite-premise movement implications (sprite drift vs human walk affects CTRL-01 implementation in Phase 3)
- Phases 4-7 consume: World Bible v0.1, Style Guide v0.1, Pillars × Mechanic matrix (gates Phase 6 mechanic decisions)

</code_context>

<specifics>
## Specific Ideas

### From persona-zero (Dawn) — visual references
- **Sandara Tang's druid + leaf-fawn illustration** (Cozy Companion magazine spread) — strongest visual signal
- Sandara Tang broader work — kid fishing with leafy-mossy creature, sleeping moss-companions, blue-water-spirit kimono figure, dragons-with-sprinkled-wafer-cookies composition
- Cozy Companion magazine covers as a tonal reference (cozy magazine illustration as a category)
- **Hades character art (Jen Zee / Supergiant)** — character work specifically; bold ink linework, expressive faces, ornate detail
- **Okami art style** — impressionistic, sumi-e ink-wash environments with cel-shaded characters, ink-curve flourishes for magic effects
- **Borderlands** — confirms cel-shading direction
- **Studio Ghibli** — thematic delight named explicitly (warmth, animism, food-and-everyday-magic)

### From Daniel + Dawn — design specifics
- "Talking to people and finding where I fit in" — Dawn's stated core fantasy, now structurally embedded in the sprite premise
- "If I could find a game that was a cross of Baldur's Gate and the Sims, that would be perfect for me" — Dawn's stated dream cross, mechanically translated by the matchmaking-puzzle layer (Sims world manipulation → BG3 dialogue branching)
- Spirit/talking-animal companion repositioned: NOT a separate NPC (NPC-06 currently anchors a non-human NPC), but the PLAYER. NPC-06 may be re-interpreted to mean a non-human *villager* or non-human *companion-on-outings* under the sprite-as-player premise; Phase 1 World Bible work resolves.
- Personal-magic archetypes for villagers (cooking magic, farming magic, hedge-witching, sky-watching, mending, song, naming) — Daniel and Dawn author final taxonomy
- Environmental-manipulation verbs (placeholder examples: redirect, whisper, refresh, bloom — Daniel authors actual poetry of verbs)
- "Sprite distributes power, never accumulates" — solves Sanderson's First Law + locked-power-curve-plateaus principle in one structural move
- Match-failure taxonomy: friendships, near-misses, mismatches, refusals — each with its own dialogue/state shape; bittersweet outcomes valid (NARR-04)

### REQUIREMENTS.md ripples to handle in Phase 1 execution

Nothing gets cut from REQUIREMENTS.md, but several REQs *re-interpret* under the sprite premise — these get logged as **interpretation amendments** (not removals) in REQUIREMENTS.md during Phase 1:

- **HOME-01 to HOME-05** — sprite likely has a sanctum (tree, shrine, hearth) AND/OR helps villagers decorate; villager-home aesthetic feeds compatibility model. Direction TBD in World Bible.
- **CRAFT-01 to CRAFT-07** — sprite catalyzes villager crafting; recipes are co-developed; gathered materials are magic-imbued essence the sprite shares.
- **COMP-01 to COMP-04** — sprite invites a villager to drift along; companion-presence reveals different cues for matchmaking. Companion mechanic now serves the match-puzzle directly.
- **CTRL-01** — third-person; sprite drifts/floats rather than walks. Camera and traversal need re-think but req still satisfied.
- **NPC-09** — promoted from atmosphere to **central puzzle-information channel** (gossip carries match status; love triangles, jealousy gradients).
- **NPC-06** — "at least one non-human companion" — re-interpret: sprite IS non-human player; non-human companion (in NPC-06 sense) may mean a non-human NPC like a talking-animal villager. Resolved during World Bible authoring.
- **ROM-01, ROM-02** (v2) — reframed: in v1, romance is between villagers; player romance via sprite is v2-or-never.

</specifics>

<deferred>
## Deferred Ideas

### Deferred to Phase 1 execution (will be authored, not by Claude)
- Specific Year-3-Wall metric thresholds at each cascade checkpoint (months 6/12/24/36) — needs comparable-game research
- Specific games-to-mine list for MKTG-06 + survey question wording
- Recovery rule when daily ritual breaks (illness, life events, motivation dips)
- Time-model trigger list (canonical actions that advance time) — derives from Core Loops Pack
- Specific zone names, magic-system codification specifics, calendar season names, culture details, naming-system rules (World Bible v0.1 authoring)
- Style Guide v0.1 specific palette, character silhouettes, audio exemplars, narrative voice principles
- Hard-magic-tier-list vs soft-magic reconciliation final wording (D-WORLD-04 captures the intended interpretation)
- Sprite home / sanctum design — open question across Phase 1 World Bible
- Player movement / camera spec for sprite-drift premise — needs design pass; Phase 1 sketches, Phase 3 implements
- Premise pitch authoring (Daniel writes 1-2 page pitch as first Phase 1 sub-deliverable)

### Deferred to later phases (not Phase 1 work)
- Specific NPC content (Phase 6)
- Specific dialogue (Phase 4 hero-NPC-happy-path; Phase 6 slice content)
- Festival specifics (Phase 6)
- HOME, CRAFT, COMP REQUIREMENTS.md interpretation amendments (Phase 1 documents direction; REQUIREMENTS.md amendment may happen at Phase 2 transition)
- Match-puzzle compatibility model details (Phase 4 single-NPC; Phase 6 multi-NPC slice)

### Reviewed Todos (not folded)
None — todo_count was 0.

### Out-of-scope ideas surfaced during discussion (NOT acted on)
None — discussion stayed within Phase 1 scope. Scope-expansion request was for already-implied orthodox pre-prod work, not new capabilities.

</deferred>

---

*Phase: 01-foundations-vision-lock*
*Context gathered: 2026-05-09*
*Vision LOCKED this session — magical helper-sprite premise + matchmaking-via-environmental-manipulation puzzle layer; persona-zero validated and co-developed in real-time*
