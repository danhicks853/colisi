---
purpose: Capture casual / emergent design ideas (from Daniel, persona-zero Dawn, or co-development conversations) outside of structured HEALTH-05 ritual sessions
distinction:
  - HEALTH-05 ritual sessions → .planning/playtest-log/{YYYY-MM-DD}-*.md (structured 30-min sessions per D-SUST-07)
  - Casual / emergent feedback (this file) → ad-hoc ideas surfaced during co-development conversations; not subject to HEALTH-05 cadence accounting; sources tagged per-entry
sources_logged_here:
  - Dawn (persona-zero) — casual feedback outside of HEALTH-05 sessions
  - Daniel — design moves / reframes / architectural ideas surfaced during authoring
  - Joint co-development — ideas that emerge from real-time collaboration
review_cadence: Reviewed during each Phase 1 plan kickoff; entries route to deliverables, REQUIREMENTS.md amendments, World Bible candidates, SCOPE.md entries, or rejection rationale
ai_role: Claude logs entries verbatim from Daniel's transcription; Claude does NOT paraphrase Dawn's words, does NOT propose interpretations of Dawn's quotes, does NOT author design content (only structures the entry around Daniel's words)
---

# Persona-Zero Emergent Feedback Log

A running log of casual design feedback from Dawn (persona-zero) that surfaces *outside* of HEALTH-05 ritual sessions. Captures co-development moments where an idea emerges in conversation and would otherwise be lost.

**Each entry should preserve:**
- Date
- Context (what was being discussed when the idea surfaced)
- The core idea (Daniel transcribes; no Claude paraphrasing)
- Variants surfaced (alternative shapes the idea could take)
- Possible downstream impact (which Phase 1 deliverables / REQUIREMENTS.md sections this could affect)
- Status (candidate / considering / adopted / rejected — set on review)

**Status flow:**
- `candidate` — newly logged; awaiting review during next Phase 1 plan kickoff
- `considering` — under active consideration; has Phase 1 deliverable owner
- `adopted` — incorporated into Phase 1 deliverable(s) with cross-reference back to entry
- `rejected` — considered + rejected; rationale required

---

## Entries

### 2026-05-10 — NARR-06 reframe: experiential replay log (Daniel)

**Source:** Daniel — design move surfaced during pillar 1 mechanics-justified review

**Status:** **adopted** *(2026-05-10 — Daniel committed during pillar 1 REQ-ID triage; SCOPE.md entry logged; REQUIREMENTS.md NARR-06 + SAVE-04 amendments queued for plan 01-02 sign-off)*

**Context:** Reviewing pre-filled REQ-ID candidates for the "Character Development IS the gameplay" pillar. Claude flagged a possible tension: NARR-06 ("Player can review past choices and their outcomes in a journal / log") could conflict with DI #4 (no UI dedicated to character management). Daniel's response: reframe the log itself.

**Core idea (Daniel):** Don't have the player read static text. The "Log" is choosing a villager and watching a fast-forward replay of their entire life since you arrived in the village, slowing down at critical choice junctures.

**Why this is structurally significant:**
- Collapses the NARR-06 / DI #4 tension entirely — the log isn't a UI panel, it's a witnessable experience. Same diegetic-vs-abstracted move at the meta level that DI #4 demands at moment-to-moment.
- Unifies the D-VISION-06 BG3 × Sims dream cross into a single concrete feature: BG3-style branching dialog produces the choice junctures; Sims-style life-arc representation produces the playback. The dream cross gains a feature instantiation, not just a positioning claim.
- Anti-filler forcing function (anti-clause 1): if a system doesn't show up in any villager's life replay, it's filler by definition. The replay becomes a design audit tool.
- Wow-beat candidate (10-wow-beats.md).
- Hour-200 retention contributor (23-why-play-at-hour-200.md): replays grow richer the longer you've played — every chapter added to a villager's life enriches the replay's depth.

**Architectural implications (load-bearing if adopted):**
- **SAVE schema (Phase 3, SAVE-04):** save state must record per-villager event log with timestamps and significance markers, not just state snapshots. Versioning strategy must preserve event-log compatibility across updates.
- **NARR system (Phase 4):** every authored choice gains a "critical juncture" tag — designated authoring discipline rule. Who decides which junctures slow down? Authored per-choice (likely cozy-aesthetic-aligned) vs. algorithmic.
- **Cinematic camera (Phase 3 engine, Phase 6 per-villager content):** flythrough camera with montage cuts, beat-slowdowns, smooth transitions across villager spaces. Real animation/scripting work, not a UI polish.
- **NPC system (Phase 5–6):** per-villager life-trajectory recording — visited locations, scene compositions, NPC reactions over time.
- **Slice scope (Phase 1 → 7):** does this land in M1 slice (Phase 7 demo cut), or M2 full game? Decision needed during Phase 1 plan 01-04 (Slice Scenario) or earlier.

**Possible REQUIREMENTS.md ripples:**
- **NARR-06 amendment:** rewording from "journal/log of choices" to "experiential per-villager replay system." Material reinterpretation; should land via SCOPE.md entry per HEALTH-01.
- **Possible new REQ:** "REPLAY-V1-01" or similar — graduates one subset of v2 REPLAY category into v1 if the replay system substitutes for the journal.
- **Possible new REQ:** cinematic camera capability (under CTRL-* or new CAMERA-* category).

**Possible PROJECT.md core-value resonance:** "Characters and relationships that keep evolving, in a world that never punishes the player." A per-villager life replay IS the manifestation of "keep evolving" — every replay session is a new way to witness evolution. Strong alignment.

**Possible cross-pollination with prior log entry:** the pet-adoption mechanic (2026-05-10 Dawn entry) — a villager adopting a pet would be a natural replay beat. Replays could include pet milestones. The two ideas reinforce each other.

**Decision triggers:**
- **Plan 01-02 (Pillar × Mechanic Matrix):** does this feature score against the Character Development pillar? (Almost certainly yes — its strongest single mechanic.)
- **Plan 01-03 (Core Loops):** does the replay live in moment-to-moment, session, or meta loop? Most likely a *session-loop epilogue ritual* + *meta-loop highlight reel*.
- **Plan 01-04 (Slice Scenario):** is this in the M1 slice, or deferred to M2? If in slice, drives Phase 7 demo content; if deferred, gates wow-beat selection.
- **Plan 01-06 (Decision Locks):** if adopted, locks SAVE-as-event-log architectural commitment.

**Tonal alignment check:** ✓ Persona-gap-resonant (deep-cozy demographic loves emotional retrospection). ✓ Cozy guardrails preserved (no time pressure, no failure states in the replay itself). ✓ AI policy: replay content is authored event-log + authored critical-juncture tags; Claude does not generate replay content.

---

### 2026-05-10 — Pet adoption mechanics + village animal rescue (Dawn)

**Source:** Dawn (persona-zero) — casual conversation, not a HEALTH-05 ritual session

**Status:** **adopted** *(2026-05-10 — Daniel committed during 07-pillar-mechanic-matrix.md NPC-06 reinterpretation discussion; D-VISION-11 LOCKED — stray black cat as tutorial case for animal rescue meta-loop anchor type, using existing magic-tutoring + matchmaking mechanics. SCOPE.md row 8 logs the lock; CONTEXT.md D-VISION-11 entry; STATE.md decisions log 2026-05-10. Cat is optional discoverable companion in slice; arc does NOT complete in slice (cliffhanger wishlist hook). Animal rescue added to meta-loop anchor-type catalog.)*

**Context:** Casual conversation with Dawn. Topic: cozy life sim mechanics Dawn loves.

**Core idea (Dawn):** Dawn LOVES pet adoption mechanics. She'd love it if there were an animal rescue in the village that the wisp could lead villagers to and help them adopt "the perfect pet."

**Daniel's countering build:** What if the wisp can help every villager (or many) adopt a pet?

**Variants surfaced in conversation:**
- Pet adoptions for villagers who don't get matched (parallel arc — the unmatched still grow)
- Matchmaking using pets (pets as the catalyst / spark for villager-to-villager connection)
- Pet adoption at the animal rescue (location-specific mechanic)
- Matches requiring compatible pets (pet-pairing as part of matchmaking puzzle layer)

**Possible downstream impact (Phase 1):**
- **02-pillars-of-play.md** — pet-adoption mechanic family lands under "Character Development" pillar (or wherever Daniel locates it); needs design-implication line if adopted
- **05-core-loops.md** — could be its own moment-to-moment loop variant (per-villager pet-adoption sub-story) OR meta-arc element (the rescue as a recurring-visit destination)
- **07-pillar-mechanic-matrix.md** — REQ-IDs for pet system would need scoring against pillars
- **09-slice-scenario-sketch.md** — pet adoption could be a slice scene; "perfect pet for the right villager" is a strong wow-beat candidate
- **10-wow-beats.md** — pet-adoption moment fits the wow-beat shape (visual, emotional, picturable in 3 seconds)
- **12-world-bible-v0.1.md** — animal rescue as a named location in the village; adds a zone variant + a non-villager population (animals) the World Bible has to accommodate
- **REQUIREMENTS.md** — possible new REQ-IDs under PET-* or REL-* categories; consult during Phase 1 plan 01-02 when REQUIREMENTS.md amendments land
- **D-VISION-04 (two-layer puzzle structure)** — pet-as-matchmaking-catalyst is a third dimension that could fit either the moment-to-moment layer or the meta layer; clarify when designing

**Tonal alignment check:** Pet adoption is persona-gap-resonant (cozy, never-punishing, relationship-formation-driven, zero-stakes). No conflict with cozy guardrails (PHILOSOPHY.md cozy-game tenets).

**Anti-policy check:** Pet adoption mechanics are a *category* of mechanic (allowed); specific pet names / animal shelter name / breed naming would all be Daniel-authored creative content under D-VISION-08.

**Review hook:** Surfaces during plan 01-03 (Loops & Journey Pack) authoring, plan 01-04 (Scenario Pack) authoring, plan 01-05 (World & Style Pack) authoring. Decision needed at minimum during plan 01-02 (Pillar × Mechanic Matrix) — does this mechanic family score against the existing pillars? — and plan 01-03 (Core Loops) — moment-to-moment vs meta integration?

---

### 2026-05-10 — Faerie houses (Dawn)

**Source:** Dawn (persona-zero) — casual conversation in response to Daniel's question about personalizable spaces vs communal aesthetic rewards

**Status:** **adopted** *(2026-05-10 — Daniel committed during 07-pillar-mechanic-matrix.md HOME-cluster reinterpretation discussion; D-VISION-10 LOCKED Layer 3. SCOPE.md row 7 logs the lock; CONTEXT.md D-VISION-10 entry; STATE.md decisions log 2026-05-10.)*

**Context:** Daniel asked Dawn for feedback on the design tension between personalizable wisp spaces vs communal earned-aesthetic (the choice space we'd been working through for HOME-cluster transmutation under sprite premise). Dawn's contribution found the third path that gives both via different mechanics with different framings.

**Core idea (Dawn):** When the wisp fully completes a villager arc, that villager places a faerie house for the wisp. The faerie house is an instanced area, NOT customizable, but is themed and decorated based on the villager who placed it.

**Why this is structurally significant:**
- Restores some "personalizable space" feel (multiple sanctums, one per fully-completed villager arc) without re-introducing customization mechanics
- Preserves the "wisp is a guest, not an owner" framing — villagers decorate FOR the wisp; the wisp doesn't decorate for itself
- Each faerie house is a Pillar 1 character relationship crystallized — every space is a record of who that villager became through their arc with the wisp
- No customization burden for player (one less mechanic to design, balance, or learn)
- Phase 6 content load: 12-15 unique faerie house designs (one per villager) — bounded
- Strong NG+ replayability: which arcs you complete and how affects faerie-house unlock state across playthroughs
- Pairs with Layer 1 starting sanctum and Layer 2 village-as-canvas to form a 3-layer architecture for the wisp's relationship to space

**Architectural lock under D-VISION-10 Layer 3:**
- 12-15 villager-themed faerie house designs (full game)
- 1 design in slice (whichever single villager arc completes within slice scope, if any)
- After unlocking, any faerie house can serve as a rest location alongside starting sanctum (D-TIME-03 rest-trigger flexibility)
- Themed and decorated based on the villager who placed it — final designs Daniel-authored at Phase 6 content authoring per AI policy

**Tonal alignment check:** ✓ Persona-gap-resonant (Dawn directly contributed; cozy aesthetic; fits magical-realism setting). ✓ Cozy guardrails preserved (no customization pressure, faerie houses are gifts not chores, no fail state). ✓ AI policy: faerie house themes / specific decor / villager-aesthetic codifications are Daniel-authored creative content under D-VISION-08; Claude does not generate.

**Possible cross-pollination with prior log entries:**
- The pet-adoption entry (2026-05-10 Dawn) and faerie houses entry compose a coherent set of Dawn-sourced design moves: both center on character-relationship records (faerie house = villager arc record; pet adoption = relationship-formation record). The pet's eventual home could be in a faerie house (the cat's adopter places one).
- The NARR-06 replay reframe (2026-05-10 Daniel) and faerie houses reinforce each other: replays could include the faerie house placement moment as a significance-marked event-log entry; visiting a faerie house in NG+ could include wisp recall narration ("I remember when you placed this one").

**Review hook:** Already adopted; lives in 26-architecture-ratification.md sprite-premise REQ amendments (HOME cluster), 07-pillar-mechanic-matrix.md HOME row scoring, 12-world-bible-v0.1.md (plan 01-05 — faerie house aesthetic frameworks per villager), 09-slice-scenario-sketch.md (plan 01-04 — slice's single faerie house placement scene).

---

### 2026-05-10 — Seasonal audio (Dawn)

**Source:** Dawn (persona-zero) — audit feedback during 07-pillar-mechanic-matrix.md AUDIO weak-signal resolution discussion

**Status:** **adopted** *(2026-05-10 — Daniel committed during AUDIO weak-signal resolution; AUDIO-01 + AUDIO-02 architectural commitment locked: character-coded leitmotifs + seasonal variations. SCOPE.md row added; STATE.md decisions log 2026-05-10; AUDIO-01 + AUDIO-02 REQUIREMENTS.md amendments queued for Phase 1→2 transition.)*

**Context:** Daniel asked Dawn for audit feedback on AUDIO-01 + AUDIO-02 (originally scoring weakly across all pillars at 1,1,1) during 07-pillar-mechanic-matrix.md weak-signal resolution. Dawn's feedback surfaced a specific design pattern she values from comparable cozy games.

**Core idea (Dawn):** Dawn liked in Stardew Valley when the music and audio cues changed with the seasons. She wants seasonal audio variations in Colisi.

**Why this is structurally significant:**
- Reinforces Pillar 2 never-expiring engine — seasonal audio recurs across in-world years with accumulated context (year 4's autumn music feels different because of year 1's autumn arrangement still in memory)
- Pairs with seasonal-recurrence anchor type in the meta-loop (audio commits to the same recurrence pattern that dialogue and world-visual state-tagging already commit to)
- Bounded production scope: 4 seasonal variations per audio asset, not unbounded content drips
- Strengthens NG+ replay context — replays carry season-specific audio that reflects the in-world season the event happened in

**Combined with character-coded audio commitment:**
Daniel paired Dawn's seasonal audio feedback with character-coded leitmotifs (each of the 12-15 villagers has a signature leitmotif; specific characters / places / activities have signature SFX cues). The combined commitment is:
- AUDIO-01 (music): per-villager leitmotifs × 4 seasonal arrangements
- AUDIO-02 (SFX): per-character/place/activity SFX cues + seasonal ambient SFX layers (autumn leaves underfoot, winter snow muffle, spring birdsong density, summer evening crickets)

**Architectural lock:**
- Phase 6 audio production scope: ~12-15 villager leitmotifs × 4 seasons + per-character/place/activity SFX cues + seasonal ambient SFX layers per zone
- Bounded but real production commitment
- AUDIO-01 + AUDIO-02 REQUIREMENTS.md amendments queued for Phase 1→2 transition

**Tonal alignment check:** ✓ Persona-zero-resonant (direct Dawn audit feedback). ✓ Cozy guardrails preserved (seasonal audio recurs, never expires; doesn't introduce time pressure). ✓ AI policy: actual music composition + SFX recording is Daniel-authored (or composer-hired post-revenue per `D-MUSIC` deferred decision); Claude does not generate audio assets.

**Possible cross-pollination with prior log entries:**
- The pet-adoption entry + cat tutorial (D-VISION-11): the cat could have its own audio signature — magical chime when discovered, custom purring sound, possible leitmotif if its arc completes
- The faerie houses entry (D-VISION-10 Layer 3): each faerie house could have a signature ambient bed reflecting its villager's leitmotif at low volume
- The NARR-06 replay reframe: replays carry both villager leitmotif AND seasonal audio context for the moment being replayed — strengthens "felt-sense of impact" of the replay system

**Review hook:** Already adopted; lives in 26-architecture-ratification.md (audio architecture amendment), 07-pillar-mechanic-matrix.md AUDIO row scoring, 12-world-bible-v0.1.md (plan 01-05 — per-character audio frameworks), 13-style-guide-v0.1.md (plan 01-05 — audio aesthetic direction), 23-why-play-at-hour-200.md (plan 01-06 — seasonal audio reinforces never-expiring retention engine).
