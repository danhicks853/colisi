---
phase: 01-foundations-vision-lock
plan: 04
type: execute
wave: 3
depends_on:
  - 01-00-deliverable-scaffolding
  - 01-01-vision-pack
files_modified:
  - .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md
  - .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md
  - .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md
autonomous: false
requirements:
  - HEALTH-01

must_haves:
  truths:
    - "Slice Scenario sketch covers ≥ first hour of slice content end-to-end in screenwriter style (per ROADMAP success criterion 9)"
    - "Wow beats list has ≥5 distinct trailer-screenshot-quality moments — each authored to satisfy the wishlist-test ('would this make me wishlist?')"
    - "30-second elevator demo sketch is paced for first 30 seconds of public demo (Daniel reads aloud with stopwatch)"
  artifacts:
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md"
      provides: "Daniel-authored screenwriter-style slice walkthrough — feeds Phase 6 slice content production target"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md"
      provides: "Daniel-authored trailer-screenshot list — feeds Phase 8 capsule-art commission brief + trailer commission"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md"
      provides: "Daniel-authored 30-second public demo sketch — feeds Phase 8 Steam Next Fest demo design"
  key_links:
    - from: "09-slice-scenario-sketch.md"
      to: ".planning/ROADMAP.md Phase 6 Success Criteria"
      via: "Slice scenario constrains Phase 6 content production scope"
      pattern: "Phase 6|slice content"
    - from: "10-wow-beats.md"
      to: ".planning/ROADMAP.md Phase 8 MKTG-05 capsule art"
      via: "Wow beats define the trailer/capsule moments"
      pattern: "(MKTG-05|capsule|trailer)"
    - from: "11-elevator-demo-30s.md"
      to: ".planning/ROADMAP.md Phase 8 MKTG-03 Next Fest demo"
      via: "30s sketch shapes Next Fest demo opening"
      pattern: "Next Fest|demo"
---

<objective>
Daniel authors the Scenario Pack — three creative deliverables that translate the locked premise + named pillars + core loops into specific player-facing experiences: the slice walkthrough, the trailer moments, the public-demo opener. These three artifacts collectively define what the slice MUST contain to land its wishlist + market goals.

Purpose: Constrain Phase 6 (slice content production) to a known target. Constrain Phase 8 (Steam page launch + demo) to known marketing moments. Without these, Phase 6 content production drifts and Phase 8 capsule-art brief is empty.

Output: 3 Daniel-authored Scenario Pack files. All three are creative-content; per AI policy Claude does not author them.

**AI-policy boundary:** Slice scenario walkthrough prose, wow-beat names + descriptions, demo-second prose are ALL creative content. Claude refuses to draft any of it. Claude can: critique Daniel's drafts on (a) anchor consistency with vision pitch, (b) coverage of locked premise's key affordances (matchmaking puzzle, sprite-not-walking, multi-axis relationships), (c) wishlist-test framing for wow beats. Claude does NOT generate scene prose, beat names, demo prose.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/ROADMAP.md
@.planning/REQUIREMENTS.md
@.planning/phases/01-foundations-vision-lock/01-CONTEXT.md
@.planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md
@.planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md
@.planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md
@.planning/research/PERSONA.md
@.planning/research/SUMMARY.md
@CLAUDE.md
@PHILOSOPHY.md
</context>

<tasks>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 1: Daniel authors Slice Scenario sketch (D-SCOPE-09)</name>
  <authored_by>daniel</authored_by>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md (scaffold from plan 01-00),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md (premise anchor),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md (pillar anchors),
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md (moment-to-moment + session loops shape what scenes look like),
    .planning/ROADMAP.md (Phase 6 Success Criteria — the slice scenario constrains content production targets),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-VISION-04 matchmaking; specifics section)
  </read_first>
  <action>
    **Daniel writes a screenwriter-style walkthrough of slice content end-to-end** covering at minimum the first hour of slice play. Per CONTEXT.md D-SCOPE-09 + ROADMAP success criterion 9.

    Sections (per scaffold):
    1. **Slice premise** (1-2 sentences anchoring on D-VISION-01..08) — Daniel.
    2. **Setup** (player just started) — Daniel writes the opening situation. Per CONTEXT.md `<specifics>` line 263: "Personal-magic archetypes for villagers (cooking magic, farming magic, hedge-witching, sky-watching, mending, song, naming) — Daniel and Dawn author final taxonomy" — slice scenario will reference SOME of these archetypes; Daniel selects which 3-4 villagers the slice features (per Phase 6 success criterion 1: 4 NPCs total — 3 human + 1 spirit/talking-animal companion).
    3. **First 60 minutes screenwriter-style walkthrough** — Daniel writes a numbered scene list. Each scene: scene number, location, characters present, what happens (~3-5 sentences per scene). Aim for 8-15 scenes covering the first hour.
    4. **Slice end-state** — Daniel writes 1 paragraph describing what the slice end-state IS (where does Phase 6 content production stop?).

    The slice scenario is the **target spec for Phase 6**: every NPC mentioned, every match-puzzle attempted, every zone visited, every craft-recipe gifted constrains Phase 6 production scope. Don't invent more than the slice will deliver (per `01-RESEARCH.md` Pitfall 6 — scope creep on Phase 1).

    **Per AI policy:** Names of the 4 slice NPCs, names of the slice locations, dialogue snippets (if any in scenes), specific match-puzzle solutions — ALL Daniel-authored creative content. Claude does NOT generate names or scene prose. Claude can critique on: (a) does the scenario satisfy ROADMAP Phase 6 success criteria 1-3? (b) does it stay within the slice content scope (not 30+ hour content)? (c) does it anchor on the locked premise / pillars / core loops?

    **Note on World Bible dependency:** This scenario references villager names + zone names that are deferred to World Bible authoring (plan 01-05). Daniel can either:
    - Author placeholder villager labels (V1, V2, V3, V4) here and update with names AFTER plan 01-05, OR
    - Coordinate authoring of names HERE first and propagate to World Bible (the locked premise allows either order; CONTEXT.md `<specifics>` flags this as Daniel's call).
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md" && wc -w ".planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md"</automated>
  </verify>
  <acceptance_criteria>
    - File exists and has all 4 sections (Slice premise / Setup / First 60 minutes walkthrough / Slice end-state): `grep -cE '^## (Slice premise|Setup|First 60 minutes|Slice end-state)' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md` returns 4.
    - First 60 minutes walkthrough has ≥8 scene entries (numbered list): `grep -cE '^### (Scene|[0-9]+\.) ' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md` returns ≥8.
    - File has substantive prose content (not just headings): `wc -w .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md` returns ≥800 words (a "first-hour walkthrough" needs body).
    - File references the locked premise: `grep -ciE '(sprite|matchmaking|D-VISION)' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md` returns ≥3.
    - File references slice NPC count target (4 NPCs per Phase 6 success criterion): `grep -cE '(4 NPCs|four NPCs|companion|spirit|talking-animal|talking animal)' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md` returns ≥1.
    - No `{Daniel authors}` placeholders remaining: `grep -F '{Daniel authors' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md` returns 0.
    - AI-policy banner intact: `grep -F 'AI POLICY (PHILOSOPHY.md §V)' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md` returns ≥1.
  </acceptance_criteria>
  <done>Slice scenario walkthrough Daniel-authored covering ≥ first hour of slice; constrains Phase 6 content production target.</done>
</task>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 2: Daniel authors Wow Beats (D-SCOPE-10) + 30-second Elevator Demo (D-SCOPE-11)</name>
  <authored_by>daniel</authored_by>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md,
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md (scaffold from plan 01-00),
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md (scaffold),
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md (just authored — wow beats are extracted from the slice's strongest moments),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md (elevator demo's 30 seconds is the visual + audio version of the elevator pitch),
    .planning/research/SUMMARY.md (capsule-art ROI thesis — wow beats define what capsule + trailer commissions show),
    .planning/ROADMAP.md (Phase 8 success criteria 1 + MKTG-03/MKTG-05 — wow beats and demo opener feed Steam page + Next Fest)
  </read_first>
  <action>
    **10-wow-beats.md** — Daniel authors the trailer-screenshot list. Per ROADMAP success criterion 10 + `01-RESEARCH.md` validation criterion ("Wow beats list ≥ 5 distinct trailer-screenshot-quality moments").

    For each beat (target 5-10 beats):
    - Beat number + Daniel-authored beat name (1-3 words; e.g., "first match" / "festival night" — Daniel names; per AI policy Claude does NOT name).
    - **What happens:** 1 paragraph (what does the player SEE in the trailer screenshot or 5-second clip?).
    - **Why it's trailer-screenshot-worthy:** 1-2 sentences (the wishlist-test: "would this make ME wishlist?").
    - **System support (REQ refs):** which REQUIREMENTS.md systems light up this beat (e.g., NPC-03 multi-axis relationships, NARR-01 persistent world flags, COMP-02 reactive companion dialogue).

    Anchor: each beat must derive from the slice scenario (09) — wow beats are the strongest moments of the slice extracted for marketing. Don't invent beats the slice won't actually deliver (per Pitfall 6 + HEALTH-01: scope creep would be logged in SCOPE.md if needed).

    **11-elevator-demo-30s.md** — Daniel sketches the 30-second public demo opener. Per ROADMAP success criterion 11.

    Sections (per scaffold):
    - **0:00–0:10:** What plays in the first 10 seconds (Daniel — visual / audio / on-screen text). Persona-zero anchor: this is the moment a wishlist visitor decides to stay or close the tab.
    - **0:10–0:20:** What plays seconds 10-20 (Daniel — does the matchmaking puzzle become legible here?).
    - **0:20–0:30:** What plays seconds 20-30 (Daniel — what's the closing hook?).
    - **What the demo proves:** 3-5 bullets (Daniel) — what claims does the demo make explicit (e.g., "no time pressure visible," "characters feel real," "matchmaking is the puzzle").

    **Daniel reads the demo aloud with stopwatch** to verify pacing actually hits 30 seconds. If it doesn't, trim or extend.

    **Per AI policy:** Beat names, demo prose, beat descriptions, "what the demo proves" bullets — ALL Daniel-authored. Claude does NOT generate beat names, demo prose, or marketing-style claims about what the demo proves. Claude can critique on: (a) wow beats anchored on slice scenario (no beats invented beyond slice scope), (b) wishlist-test passing per beat (Daniel reviews each beat asking "would this make me wishlist?"), (c) elevator demo paced for actual 30 seconds.
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md"</automated>
  </verify>
  <acceptance_criteria>
    - Wow beats has ≥5 beats: `grep -cE '^### Wow beat [0-9]+' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md` returns ≥5.
    - Each wow beat has all three sub-fields (What happens / Why screenshot-worthy / System support): `grep -cE '\*\*(What happens|Why it.s trailer-screenshot-worthy|System support)' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md` returns ≥15 (3 fields × 5 beats minimum).
    - Wow beats reference REQ-IDs in System support: `grep -cE '(NPC-0[1-9]|NARR-0[1-7]|COMP-0[1-4]|WORLD-0[1-7]|CRAFT-0[1-7]|HOME-0[1-5]|ONB-0[1-4])' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md` returns ≥5.
    - No `{Daniel names}` or `{Daniel authors}` placeholders in wow beats: `grep -E '\{Daniel (names|authors)' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md` returns 0.
    - Elevator demo has all 4 sections (0:00-0:10 / 0:10-0:20 / 0:20-0:30 / What the demo proves): `grep -cE '^## (0:00|0:10|0:20|What the demo proves)' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md` returns 4.
    - Elevator demo "What the demo proves" has 3-5 bullets: `grep -cE '^- ' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md` returns ≥3.
    - No `{Daniel sketches}` or `{Daniel authors}` placeholders in elevator demo: `grep -E '\{Daniel (sketches|authors)' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md` returns 0.
    - Both files reference the locked premise: `grep -ciE '(sprite|matchmaking)' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md` returns ≥4.
    - AI-policy banner intact in both files: `grep -lF 'AI POLICY (PHILOSOPHY.md §V)' .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md` returns 2.
  </acceptance_criteria>
  <done>Wow beats list (≥5 beats with system support refs) + 30-second demo sketch (paced and stopwatch-verified by Daniel) authored.</done>
</task>

</tasks>

<verification>
After both tasks:
1. **All 3 Scenario Pack files Daniel-authored** (no `{Daniel ...}` placeholders).
2. **Slice scenario constrains Phase 6 content production** — coverage check: 4 NPCs (3 human + 1 spirit/animal companion); slice end-state defined.
3. **Wow beats anchored on slice scenario** (no marketing-only invented beats).
4. **Elevator demo paced for 30 seconds** (Daniel verifies via stopwatch read-aloud).
</verification>

<success_criteria>
- 3 Daniel-authored Scenario Pack files committed.
- ROADMAP success criteria 9, 10, 11 satisfied.
- Slice Scenario gates Phase 6 content production scope.
- Wow Beats feed Phase 8 capsule-art commission brief + trailer commission.
- Elevator Demo shapes Phase 8 Steam Next Fest demo opener.
</success_criteria>

<output>
After completion, create `.planning/phases/01-foundations-vision-lock/01-04-scenario-pack-SUMMARY.md` documenting: 3 file outcomes, slice NPC count + names (or placeholder labels) used, wow beat count, elevator-demo 30s pacing verification.
</output>
