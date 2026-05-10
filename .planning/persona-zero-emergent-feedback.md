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

**Status:** candidate

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

**Status:** candidate

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
