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

---

### 2026-05-10 — Slice scenario first-hour outline validation (Dawn)

**Source:** Dawn (persona-zero) — casual feedback during 09-slice-scenario-sketch.md Section 3 outline review

**Status:** **supportive / no concerns flagged** *(2026-05-10 — Dawn reviewed the first-hour outline including cloud-ring tutorial → Sterling reveal at dawn → pre-spritesight exploration → first contact with Cyrus → 3 spritesight gifts paced across ~3 in-world days → Ari × Zhan matchmaking attempt → first-kiss cliffhanger + "thanks for playing please wishlist" overlay. No design concerns surfaced; Dawn found the outline "very interesting.")*

**Context:** Daniel walked Dawn through the slice scenario first-hour outline (16 scenes; minute-marked beat structure; design specs for spritesight gift order being player-driven, matchmaking compatibility profiles, covert-guidance Sprinkles fruit-ripening chain example, and the Ari × Zhan first-kiss cliffhanger). Asked Dawn for any concerns about the slice arc, pacing, character moments, or wishlist-conversion mechanic.

**Core feedback (Dawn):** "None, sounds very interesting."

**Why this datapoint matters:**
- Strong supportive validation of the slice's narrative arc, pacing, and emotional climax (the kiss cliffhanger as wishlist conversion mechanism)
- Validates the multi-day pacing (Path B from Q6 — ~3 in-world days across the first hour of player time)
- Validates the player-driven spritesight ordering as creating engaging player agency
- Validates the Ari × Zhan high-compatibility pairing as the slice's primary matchmaking anchor
- Persona-zero (deep-cozy demographic anchor) finds the design intriguing — early signal that slice's wishlist-conversion goal is on track

**Note on classification:** This feedback was given outside of a structured 30-min HEALTH-05 ritual session (so logs to emergent-feedback rather than `.planning/playtest-log/`). However, it serves a similar function — persona-zero reaction to authored design content. Will be referenced at next HEALTH-05 ritual session (≥2026-05-24 per D-SUST-07 cadence) to check if reactions have evolved with reflection time.

**Possible cross-pollination with prior log entries:**
- The pet-adoption entry (Dawn 2026-05-10) and faerie houses entry (Dawn 2026-05-10) and seasonal audio entry (Dawn 2026-05-10) — Dawn has now given 4 design contributions to plan 01-03/01-04, all supportive or directly authored. Strong sustained engagement signal.
- Ari × Zhan matchmaking pair specifically (slice anchor): pairs Dawn's emergent-feedback approval with the LGBTQ+ representation principle adopted 2026-05-10 (Ari non-binary, Zhan trans-male — slice's biggest narrative beat showcases representation principle naturally without ceremony).

**Tonal alignment check:** ✓ Persona-zero-resonant (Dawn directly validated). ✓ Cozy guardrails preserved (cliffhanger creates wishlist conversion pressure but no time pressure or fail state in the slice itself). ✓ AI policy: all scenario content is Daniel-authored.

**Review hook:** Already adopted (slice scenario design proceeds as outlined); validation will be revisited at HEALTH-05 session 2 (plan 01-08, ≥2026-05-24).

---

### 2026-05-10 — Wildflower as deep character design reference (Dawn)

**Source:** Dawn (persona-zero) — design recommendation surfaced during World Bible §3 cosmology discussion 2026-05-10

**Status:** **considering — trigger-at-Phase-6** *(Daniel records this as a future-fire item; activates when Phase 6 character authoring begins, ~m12-15 per ROADMAP estimate)*

**Context:** Daniel was working through World Bible §3 (cosmology / pantheon / lore) authoring when Dawn surfaced this design recommendation outside the in-progress section.

**Core recommendation (Dawn):** When Daniel gets to deep character design work (Phase 6 villager bio + arc authoring + dialog scripting for the full 12-15 cast), take cues from the game **Wildflower**. Daniel needs to play through it before Phase 6 character authoring lands.

**Action items:**
- **Daniel personal play task:** play through Wildflower at some point before Phase 6 character authoring begins (~m12-15). Not urgent now (Phase 1 currently active); can land any time during Phase 2-5 progression.
- **Phase 6 plan input:** when `/gsd:plan-phase 6` or equivalent runs, include "review notes from Wildflower playthrough" as an input to character authoring sub-tasks.

**Why this matters:**
- Phase 6 character authoring is the largest creative-content load of the project (per ROADMAP 4-6 year horizon estimate). Any reference / inspiration source that sharpens Daniel's character-design vocabulary is high-leverage at that stage.
- Dawn's design recommendations have been load-bearing across Phase 1 (pet adoption → D-VISION-11; faerie houses → D-VISION-10 Layer 3; seasonal audio → AUDIO architectural commitment; slice scenario validation). Her track record suggests Wildflower is worth treating as a serious recommendation.

**Trigger mechanism:**
- At Phase 6 kickoff (or earlier if Daniel plays Wildflower during Phase 2-5 down-time), review this entry; surface Wildflower-derived design notes as input to Phase 6 character authoring; update entry status to **adopted** with cross-link to specific character-design takeaways.
- If Daniel plays Wildflower and finds it doesn't apply, update status to **rejected** with rationale.

**Tonal alignment check:** ✓ Persona-zero-sourced (Dawn). ✓ AI policy: Claude does not play Wildflower or generate character-design content based on it; Daniel plays + authors at Phase 6. ✓ Cozy guardrails preserved (recommendation source is Dawn; trigger doesn't violate any locked decision).

**Review hook:** Phase 6 kickoff (~m12-15) OR earlier when Daniel completes Wildflower playthrough.

---

### 2026-05-10 — Azriel (ACOTAR) as personality reference for Zhan (Dawn)

**Source:** Dawn (persona-zero) — design recommendation surfaced during World Bible §3 cosmology discussion 2026-05-10 (immediately after Wildflower trigger entry)

**Status:** **considering — trigger-at-Phase-6** *(Daniel records this as a future-fire item; activates when Phase 6 character authoring begins, particularly Zhan's bio + dialog scripting; ~m12-15 per ROADMAP estimate)*

**Context:** Daniel was working through World Bible §3 (cosmology / pantheon / lore) authoring when Dawn surfaced this character-design recommendation outside the in-progress section.

**Core recommendation (Dawn):** Azriel from *A Court of Thorns and Roses* (ACOTAR) by Sarah J. Maas as a **personality base reference for Zhan** (the leonid carpenter, magical construction archetype, shy/demure/quiet).

**Notes for Phase 6 character authoring:**
- Azriel's character traits that pair with Zhan's existing locked traits: stoic surface masking deep feeling; quiet competence; hidden depth; fierce loyalty / protection toward those he cares about; magic that reflects identity (Azriel's shadows ↔ Zhan's magical construction).
- **Cozy promise filter required:** Azriel has heavy backstory elements (childhood abuse, scarred hands, etc.). Daniel's cast representation principle (2026-05-10 SCOPE.md row) explicitly excludes mature themes from villager backstories. Zhan-with-Azriel-personality must preserve the *demeanor and emotional register* without porting trauma-coded backstory elements. The reference is for "how does this character carry themselves" not "what is their backstory."
- Phase 6 character authoring task: read relevant Azriel passages from ACOTAR books; identify the carrying-himself / quietly-intense aspects; apply to Zhan's dialog voice + scene framing while filtering out mature-theme elements per cozy promise + cast representation principle.

**Pairs naturally with cast representation principle:**
- Zhan is already locked as trans (FTM) + leonid. Azriel personality reference adds character interiority. Combined: a trans-male leonid carpenter with shy/demure/quiet carriage, Azriel-coded inner intensity, magical construction identity-magic. Phase 6 dialog authoring lands the full voice.

**Action items:**
- **Daniel personal read task:** read relevant Azriel passages (or full ACOTAR books) at some point before Phase 6 character authoring begins. Many ACOTAR readers can point to specific chapters where Azriel's character voice lands strongly.
- **Phase 6 plan input:** when Phase 6 character authoring tasks fire, include "review Azriel character notes (filtered through cozy promise)" as Zhan-specific input.

**Pattern observation:**
Dawn's recommendations today (Wildflower for character design generally; Azriel for Zhan specifically) establish a pattern: she's curating character-design references from media she loves and proposing them as Phase 6 anchors. This pattern likely continues — future emergent-feedback entries may include additional character references (for Sprinkles, Ari, Cyrus, or future cast members). Worth tracking as the pattern develops.

**Tonal alignment check:** ✓ Persona-zero-sourced (Dawn). ✓ AI policy: Claude does not read ACOTAR or generate character-design content based on Azriel; Daniel reads + authors at Phase 6. ✓ Cozy guardrails preserved by cast representation principle filter. ✓ Pillar 1 character development reinforced (depth of character interiority is Pillar 1 surface).

**Review hook:** Phase 6 character authoring kickoff (~m12-15), specifically Zhan bio + dialog scripting. May be revisited at HEALTH-05 session 2 (plan 01-08, ≥2026-05-24) if Dawn surfaces additional character references in the interim.

---

### 2026-05-10 — Villager birthdays on the calendar (Dawn)

**Source:** Dawn (persona-zero) — design recommendation surfaced during World Bible §7 cross-cultural elements discussion 2026-05-10

**Status:** **adopted** *(2026-05-10 — Daniel adopts; World Bible §5 calendar + §6 cultures updated to note birthday tradition; specific per-villager birthday content is Phase 6 character authoring per cast-expansion planning.)*

**Context:** Daniel was working through World Bible §7 (cross-cultural elements) authoring when Dawn surfaced this design recommendation. She cited her love of seeing birthdays on the calendar in cozy games (Stardew, AC patterns).

**Core recommendation (Dawn):** Every villager needs a birthday. Birthdays appear on the calendar; they're personal celebrations woven through Sterling's annual rhythm.

**Architectural integration:**
- **§5 Calendar:** birthdays are calendar entries (not festivals, but tracked time-markers). ~12-15 villagers + cat = ~13-16 birthdays distributed across the ~112-day year (~1 per 7-8 days average).
- **§6 Cultures (Sterling baseline):** gift-giving tradition includes birthday celebrations; each villager's birthday is a small community-marked occasion.
- **D-VISION-13 any-to-any matchmaking:** birthdays don't directly drive matchmaking but provide natural relationship-deepening beats (gifts boost multi-axis relationship per NPC-03).
- **Cozy promise compliance:** missing a villager's birthday must NOT punish the player. The villager might mention it casually after if missed; gift on day = relationship boost; no gift on day = no penalty.
- **NG+ replayability:** birthdays interact with D-VISION-09 NG+ wisp memory — wisp recalls villagers' birthday gift preferences across playthroughs ("last time we gave Sprinkles a flower bouquet — try something different this time?").

**Phase 6 content authoring tasks:**
- Assign each villager a specific birthday (day in Sterling's calendar — likely a mix across all 4 seasons + cross-quarter timing)
- Author each villager's preferred gifts (per their identity / vocation / personality)
- Author birthday-scene dialog (per villager × per tonal state per D-VISION-14)
- Slice scope: 4 villagers in slice could have birthdays mentioned but the slice's ~3-day span may not cover any of them — Phase 6 decides if any slice villager birthday falls in slice time

**Tonal alignment check:** ✓ Persona-zero-sourced (Dawn). ✓ Cozy genre comparable (Stardew, AC pattern). ✓ AI policy: per-villager birthday specifics (date, gift preferences, dialog) are Daniel-authored at Phase 6. ✓ Cozy promise: no punishment for missing.

**Review hook:** Already adopted at framework level. Phase 6 character authoring lands per-villager specifics.

**Pattern observation:** Dawn's design contributions today (9 total): premise co-development (2026-05-09); pet adoption / cat; faerie houses; seasonal audio; slice scenario validation; Wildflower character-design trigger; Azriel-as-Zhan reference; birthday recommendations. Strong sustained engagement; she's actively co-developing Colisi across multiple Phase 1 sessions.
