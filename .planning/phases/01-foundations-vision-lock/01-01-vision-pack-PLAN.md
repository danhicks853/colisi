---
phase: 01-foundations-vision-lock
plan: 01
type: execute
wave: 2
depends_on:
  - 01-00-deliverable-scaffolding
files_modified:
  - .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md
  - .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md
  - .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md
  - .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md
autonomous: false
requirements:
  - HEALTH-01
  - HEALTH-05

must_haves:
  truths:
    - "Vision Pitch authored by Daniel anchors the locked sprite-helper + matchmaking premise (D-VISION-01..08) — capsule + paragraph + elevator forms present"
    - "Pillars of Play has 3-5 pillars each with paragraph elaboration + 3-5 design implications + 3-5 anti-pillar clauses (per ROADMAP success criterion 2)"
    - "Core Fantasy is one paragraph + one capsule sentence anchored on persona-zero's stated 'Talking to people and finding where I fit in' (per ROADMAP success criterion 3)"
    - "Anti-positioning has explicit divergence sections vs Stardew, BG3, Sims, Spiritfarer, Coral Island, Coffee Talk, Palia at minimum (per ROADMAP success criterion 4)"
    - "Persona-zero (Dawn) reads vision pitch + core fantasy and reactions logged at .planning/playtest-log/{date}-vision-pack-reaction.md (HEALTH-05 first session — Phase 1's first persona-zero ritual session per CONTEXT.md D-PREMISE-01 + D-SUST-07 pre-Phase-3 docs-and-reactions mode)"
  artifacts:
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md"
      provides: "Daniel-authored 1-2 page premise pitch — anchor for all 27 downstream Phase 1 deliverables"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md"
      provides: "Daniel-authored Pillars of Play — pillars feed Pillar×Mechanic matrix in plan 01-02"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md"
      provides: "Daniel-authored Core Fantasy paragraph + capsule"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md"
      provides: "Daniel-authored Anti-positioning — comparable-by-comparable divergence"
    - path: ".planning/playtest-log/{YYYY-MM-DD}-vision-pack-reaction.md"
      provides: "First persona-zero session log — HEALTH-05 session 1; gates Vision Pack completion"
  key_links:
    - from: "01-vision-pitch.md"
      to: "CONTEXT.md D-VISION-01..08"
      via: "Premise pitch must anchor on locked premise"
      pattern: "D-VISION-0[1-8]|magical helper-sprite|matchmaking"
    - from: "02-pillars-of-play.md"
      to: "07-pillar-mechanic-matrix.md (plan 01-02)"
      via: "Pillar names from this doc populate matrix columns downstream"
      pattern: "Pillar [1-5]"
    - from: "03-core-fantasy.md"
      to: "research/PERSONA.md"
      via: "Anchor on Dawn's 'Talking to people and finding where I fit in'"
      pattern: "Talking to people|finding where I fit in"
    - from: "04-anti-positioning.md"
      to: "PHILOSOPHY.md §III communication guardrail"
      via: "Anti-positioning explicitly forbids 'Stardew Killer' framing"
      pattern: "Stardew Killer|Stardew but"
    - from: ".planning/playtest-log/{YYYY-MM-DD}-vision-pack-reaction.md"
      to: "process-pack/22-personazero-playtest-ritual.md"
      via: "First session executes the ritual format"
      pattern: "vision-pack|premise pitch"
---

<objective>
Daniel authors the 4 Vision Pack deliverables. The Premise Pitch (D-PREMISE-01) is the FIRST Phase 1 deliverable per CONTEXT.md — it anchors all 27 other deliverables. Persona-zero (Dawn) reads the pitch + core fantasy and gives a first reaction (HEALTH-05 session 1 — pre-Phase-3 doc-reactions mode per D-SUST-07).

Purpose: Establish the locked premise as a stable single-source reference so downstream Phase 1 plans (Loops, Scenario, World, Style) can derive from it without re-litigation. Per CONTEXT.md Pitfall 2 — pitch is for posterity and downstream-doc anchoring, NOT for re-gating the vision (premise is already locked + persona-zero validated).

Output: 4 Daniel-authored Vision Pack files + 1 persona-zero playtest log entry.

**AI-policy boundary on this plan:** Every task's CREATIVE content is `<authored_by>daniel</authored_by>`. Claude's role is critique-only when Daniel requests. Per `01-RESEARCH.md` Pattern 1 + Anti-Patterns section, Claude REFUSES to draft pitch prose, pillar names, pillar paragraphs, core-fantasy capsule sentence, capsule line, comparable-divergence prose. The executor (a Claude instance) reading this plan must surface each task's creative-authoring requirement to Daniel for completion rather than attempting it.
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
@.planning/phases/01-foundations-vision-lock/01-RESEARCH.md
@.planning/research/PERSONA.md
@.planning/research/SUMMARY.md
@CLAUDE.md
@PHILOSOPHY.md
</context>

<tasks>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 1: Daniel authors Vision Pitch (D-SCOPE-01, D-PREMISE-01) — first Phase 1 deliverable, anchor for all downstream Phase 1 work</name>
  <authored_by>daniel</authored_by>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md (the scaffold from plan 01-00 — defines the section structure Daniel fills),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-VISION-01..08 premise lock + D-PREMISE-01..02; visual reference deck items in `<specifics>`),
    .planning/research/PERSONA.md (persona-zero corpus — anchor for capsule/elevator pitch language),
    .planning/research/SUMMARY.md (top-line strategic stance + four killers + capsule-art ROI thesis),
    PHILOSOPHY.md (§V refusal list — confirms Claude does not draft this; §III communication guardrails for "Stardew Killer" exclusion)
  </read_first>
  <action>
    **Daniel writes a 1-2 page premise pitch** anchored on the locked sprite-helper + matchmaking premise. Per CONTEXT.md D-PREMISE-01 / D-SCOPE-01, the pitch contains three forms of the same premise at different lengths:

    1. **Capsule line** — 1 sentence. The Steam-page-tag-line shape. (Daniel writes; per AI policy, Claude does not draft this. If Daniel asks for a critique pass on his draft capsule, Claude critiques but does not author.)

    2. **Paragraph pitch** — 1 paragraph (~100 words). The "elevator-floor-3" version: someone asks "what's your game?", Daniel reads this aloud.

    3. **Elevator pitch** — ~250 words / ≤2 minutes spoken. The full elevator-ride version with: locked premise, central puzzle layer (matchmaking-via-environmental-manipulation per D-VISION-04), the BG3 × Sims dream cross translation (per D-VISION-06), the cozy-without-time-pressure differentiator, the persona-gap positioning (per `research/SUMMARY.md`).

    4. **2-3 alternative premises sketch** (per D-PREMISE-02) — 1 paragraph each, illustrative-only. Demonstrates the locked premise was a CHOICE among alternatives (e.g., "alternative: human protagonist mayor-style cozy life sim — rejected because [reason]"). Posterity record; does NOT re-litigate the lock.

    5. **Cross-references** — Claude can populate this section factually (citation, not voice): list of consumed CONTEXT.md decisions, PERSONA.md anchor quotes (Daniel's choice which to cite), and the persona-zero validation timestamp from CONTEXT.md D-VISION-05.

    **Discipline:**
    - Stay anchored on D-VISION-01..08 — NO hedging language about premise alternatives in the live pitch (only in the §4 alternatives sketch).
    - Pitch length ≤ 2 pages (~700-800 words total). If Daniel exceeds 2 pages, the doc grows beyond its anchor purpose.
    - No "Stardew Killer" or "Stardew but X" framing per PHILOSOPHY.md §III.
    - Use persona-gap positioning ("evolving relationships in a world that never punishes you" — `research/SUMMARY.md`).
    - Per AI policy, all prose is Daniel's. Claude critiques on request.

    **When Daniel finishes draft:** Daniel commits the file. Daniel may request a critique pass from Claude — at that time Claude reads the draft and offers feedback on (a) anchor consistency with D-VISION-01..08, (b) length (≤2 pages), (c) absence of "Stardew Killer" framing, (d) persona-zero core fantasy resonance — but does NOT rewrite the prose.
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md" && grep -cE '^## (Capsule line|Paragraph pitch|Elevator pitch|2-3 alternative premises|Cross-references)' ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md"</automated>
  </verify>
  <acceptance_criteria>
    - File exists at the specified path with all 5 sections present (Capsule line / Paragraph pitch / Elevator pitch / 2-3 alternative premises sketch / Cross-references): `grep -cE '^## (Capsule line|Paragraph pitch|Elevator pitch|2-3 alternative premises|Cross-references)' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md` returns 5.
    - File length ≤ 2 pages (~800 words total): `wc -w .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md` returns ≤ 1200 (allows for frontmatter + cross-refs overhead; pitch prose ≤ 800).
    - Daniel-authoring placeholder markers replaced (no `{Daniel authors` text remains in body): `grep -F '{Daniel authors' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md` returns 0 matches.
    - Premise anchor verified — file references the locked premise: `grep -iE '(magical helper-sprite|sprite|matchmaking)' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md` returns ≥3 matches.
    - Anti-positioning guardrail compliance — no "Stardew Killer" framing in pitch prose: `grep -iF 'stardew killer' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md` returns 0 matches.
    - Decision-ID anchors cited in cross-references section: `grep -cE 'D-VISION-0[1-8]' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md` returns ≥1.
    - File committed by Daniel (not by Claude as auto-task).
  </acceptance_criteria>
  <done>Daniel's premise pitch authored, ≤2 pages, anchored on D-VISION-01..08, committed; Claude has critiqued only on request and only against anchor / length / framing criteria.</done>
</task>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 2: Daniel authors Pillars of Play (D-SCOPE-02), Core Fantasy (D-SCOPE-03), Anti-positioning (D-SCOPE-04)</name>
  <authored_by>daniel</authored_by>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md,
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md,
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md (the just-authored pitch — pillars and core fantasy must align with the pitch's anchor),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md (scaffold from plan 01-00),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md (scaffold),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md (scaffold),
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (Example 1 Pillars template at lines 679..702; Pattern 7 Anti-positioning at lines 508..531),
    .planning/research/PERSONA.md (persona-zero love/hate axes — feeds anti-positioning divergence sections),
    .planning/research/SUMMARY.md (four killers + four-engine retention; feeds pillar selection),
    PHILOSOPHY.md (§III communication guardrails for anti-positioning; §V refusal list)
  </read_first>
  <action>
    **Daniel authors all three Vision Pack creative deliverables:**

    **02-pillars-of-play.md** — Daniel writes 3-5 pillars (default to 4 if no specific count emerges). Per CONTEXT.md D-SCOPE-02 / ROADMAP success criterion 2 / `01-RESEARCH.md` Example 1, each pillar block must contain:
    - Pillar name (1-3 words — Daniel)
    - Statement (1 sentence — Daniel)
    - Why this pillar (1 paragraph elaboration — Daniel; anchors to persona-zero corpus / locked decisions / dream cross)
    - Design implications (3-5 bullets — Daniel; what does this pillar require us to do?)
    - Anti-pillar clauses (3-5 bullets — Daniel; "We will NOT X" — the discriminator pattern from Tearaway / Media Molecule that prevents pillars from being aspirational mush)
    - Failure-mode signature (1 paragraph — Daniel; how do we know in playtest that this pillar is failing? Cross-references D-SCOPE-08 failure-mode analysis in plan 01-02)
    - Mechanics this pillar justifies (cross-reference D-SCOPE-07 Pillar × Mechanic matrix in plan 01-02; list REQ IDs)

    Pillars must be testable against the discriminator: each pillar should EXCLUDE design choices, not just describe ideals. Per `01-RESEARCH.md` Anti-Patterns: anti-pillar clauses are what make pillars constrain decisions. If a pillar has no anti-pillar clauses, it's empty.

    **03-core-fantasy.md** — Daniel writes:
    - Capsule sentence (1 sentence — the in-one-breath version of what the player FEELS playing the game)
    - Paragraph elaboration (1 paragraph — the in-one-minute version)
    - Anchor section: Dawn's stated core fantasy from PERSONA.md ("Talking to people and finding where I fit in") — Daniel decides which persona-zero quotes to cite as the anchor (citation, not Claude generation)

    **04-anti-positioning.md** — Per CONTEXT.md D-SCOPE-04 / ROADMAP success criterion 4 / `01-RESEARCH.md` Pattern 7. Daniel writes one section per comparable. Required comparables (minimum): Stardew Valley, Baldur's Gate 3, The Sims, Spiritfarer, Coral Island, Coffee Talk, Palia. Suggested additional: Disney Dreamlight Valley, Sun Haven, Fae Farm, AI-generated cozy games. Each section format (5 elements per comparable):
    - Differentiator (1 sentence — Daniel)
    - We share (1-2 lines — Daniel)
    - We diverge (3-5 bullets — Daniel; what we explicitly choose differently and why; reference persona-zero bounce reasons where applicable per PERSONA.md)
    - We do NOT claim to be: "{Comparable} Killer," "{Comparable} but X" (Claude can write this guardrail line — it's a citation of PHILOSOPHY.md §III communication guardrails, not voice)

    **Discipline (per `01-RESEARCH.md` Anti-Patterns + Pitfall 1 AI-policy slippage):**
    - Pillar names, pillar paragraphs, pillar anti-clauses, core-fantasy capsule sentence + paragraph, divergence bullets — ALL Daniel-authored. Claude does NOT draft these.
    - Persona-zero quotes are citations from PERSONA.md, not Claude paraphrasing.
    - Each pillar must have anti-pillar clauses (≥3) — pillars without anti-clauses are aspirational, not constraint-shaping.
    - Anti-positioning prose must NEVER frame Colisi as "X Killer" or "X but Y" per PHILOSOPHY.md §III.
    - Cross-references between docs (Pillar X mechanic-justification → REQ-ID in REQUIREMENTS.md) are factual citations Daniel can make confidently.

    **When Daniel finishes drafts:** Daniel commits all three files. Daniel may request a critique pass from Claude on each — Claude critiques (a) anti-pillar discriminator presence, (b) anchor consistency with vision pitch, (c) absence of "X Killer" framing in anti-positioning, (d) persona-zero quote sourcing — but does NOT rewrite prose.
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md" && grep -cE '^## Pillar [1-5]:' ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md" && grep -cE '^## Vs\. ' ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md"</automated>
  </verify>
  <acceptance_criteria>
    - **Pillars file:** has 3-5 pillar headings: `grep -cE '^## Pillar [1-5]:' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md` returns ≥3 and ≤5.
    - **Pillars file:** every pillar has Anti-pillar clauses section: `grep -cF 'Anti-pillar' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md` returns ≥3.
    - **Pillars file:** every pillar has We-will-NOT clauses (the discriminator): `grep -cE 'We will NOT|We do NOT' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md` returns ≥9 (3 anti-clauses × 3+ pillars).
    - **Pillars file:** all `{Daniel authors}` placeholders replaced: `grep -F '{Daniel authors' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md` returns 0.
    - **Core fantasy file:** has capsule sentence + paragraph sections: `grep -cE '^## (Capsule sentence|Paragraph elaboration|Anchor)' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md` returns 3.
    - **Core fantasy file:** anchors on persona-zero stated fantasy: `grep -F 'Talking to people' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md` returns ≥1, OR `grep -F 'finding where I fit in' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md` returns ≥1.
    - **Core fantasy file:** all `{Daniel authors}` placeholders replaced: `grep -F '{Daniel authors' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md` returns 0.
    - **Anti-positioning file:** covers all required comparables (minimum 7): `grep -cE '^## Vs\. (Stardew|Baldur|The Sims|Spiritfarer|Coral Island|Coffee Talk|Palia)' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md` returns ≥7.
    - **Anti-positioning file:** every comparable section has Differentiator, We share, We diverge, We do NOT claim subsections: `grep -cE '\*\*Differentiator|\*\*We share|\*\*We diverge|\*\*We do NOT' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md` returns ≥28 (4 subsections × 7 comparables).
    - **Anti-positioning file:** no "Stardew Killer" framing: `grep -iF 'we are stardew killer' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md` returns 0; the file may MENTION "Stardew Killer" in negation (per PHILOSOPHY.md §III) but never claim it.
    - **All 3 files** committed by Daniel; AI-policy banner from scaffold remains intact: `grep -lF 'AI POLICY (PHILOSOPHY.md §V)' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md` returns 3 files.
  </acceptance_criteria>
  <done>3 Daniel-authored Vision Pack deliverables committed; pillars have anti-clauses; core fantasy anchored on persona-zero; anti-positioning covers ≥7 comparables with no "Killer" framing.</done>
</task>

<task type="checkpoint:human-verify" gate="blocking">
  <name>Task 3: Persona-zero (Dawn) reads Vision Pack + reaction logged (HEALTH-05 session 1)</name>
  <files>
    .planning/playtest-log/{YYYY-MM-DD}-vision-pack-reaction.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/process-pack/22-personazero-playtest-ritual.md (the ritual scaffold from plan 01-00 — defines structured note template),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md (just authored — Dawn reads this),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md (just authored — Dawn reads this),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-SUST-07 ritual format; D-VISION-05 prior persona-zero validation timestamp),
    PHILOSOPHY.md (§V — confirm what Claude does NOT do with playtest content)
  </read_first>
  <action>
    **Daniel runs Phase 1's first persona-zero session (HEALTH-05).** Per D-SUST-07 + the ritual doc 22-personazero-playtest-ritual.md, this session is in pre-Phase-3 docs-and-reactions mode:

    1. **Setup (Daniel):** Schedule the 30-min session with Dawn. Sit together (or remote-share). Have Vision Pitch + Core Fantasy on screen.

    2. **Reading + observation (~20 min, Daniel observes silently per ritual):** Dawn reads:
       - Vision Pitch (capsule + paragraph + elevator)
       - Core Fantasy (capsule + paragraph + anchor)
       Daniel observes Dawn's reactions (face, pauses, re-reads, comments) without leading.

    3. **Structured questions (~10 min):** Daniel asks the three structured questions from D-SUST-07:
       - "What did you expect to be able to do that you couldn't?" (adapted for docs-mode: "What did you expect this game to be that the pitch didn't deliver?")
       - "What felt the worst?" (adapted: "What part of the pitch felt off, confusing, or wrong?")
       - "One thing you'd change?"
       Plus session-specific anchor question: "Does this still feel like the game we co-developed in our 2026-05-09 conversation?" (per D-VISION-05 prior validation; this is a continuity check, not a re-gate).

    4. **Logging (Daniel writes log entry, NOT Claude):** Daniel creates `.planning/playtest-log/{YYYY-MM-DD}-vision-pack-reaction.md` with the structured note template:
       - **Date:** YYYY-MM-DD
       - **Build version:** Phase 1 docs (no game yet)
       - **Setup:** docs read by Dawn
       - **Observations (timed):** what Daniel saw at minute marks
       - **Quotes (Dawn's exact words where preserved):** Daniel transcribes
       - **Daniel's reactions:** what Daniel learned
       - **Action items:** any pitch / pillar / anti-positioning revisions to log; if revisions are needed, those become deferred work tracked in SCOPE.md (per HEALTH-01) before plan 01-02 starts

    5. **If reactions surface a vision-anchor concern** (per Pitfall 2 — pitch is anchor not gate; per D-VISION-05 vision is locked, persona-zero validated): Daniel decides whether the concern is a copy-edit (fixed in pitch revision before 01-02) or a deeper signal (logged in SCOPE.md and triggers a /gsd:discuss-phase-1 amendment session). The vision is NOT re-opened lightly.

    **Per AI policy:** Claude does NOT write the playtest log entry, does NOT paraphrase Dawn's quotes, does NOT interpret reactions on Daniel's behalf. Claude can: confirm the log file exists at the right path, verify required template sections present, surface any AI-policy-violation candidates if Dawn's quotes accidentally include AI-generated content (won't happen in this session, but the audit habit per PHILOSOPHY.md §VIII).
  </action>
  <verify>
    <automated>ls .planning/playtest-log/*-vision-pack-reaction.md 2>/dev/null | wc -l</automated>
  </verify>
  <acceptance_criteria>
    - At least one `*-vision-pack-reaction.md` file exists in `.planning/playtest-log/`: `ls .planning/playtest-log/*-vision-pack-reaction.md | wc -l` returns ≥1.
    - The file follows the structured note template — has Date, Setup, Observations, Quotes, Daniel's reactions, Action items sections: `grep -cE '^## (Date|Build version|Setup|Observations|Quotes|Daniel.s reactions|Action items)' .planning/playtest-log/*-vision-pack-reaction.md` returns ≥6.
    - The file's date in filename matches a real ISO date: filename pattern `\d{4}-\d{2}-\d{2}-vision-pack-reaction.md`.
    - File is non-empty: `wc -l .planning/playtest-log/*-vision-pack-reaction.md` returns ≥10 lines.
    - **Manual confirmation by Daniel:** Dawn read the docs; reactions captured authentically (not paraphrased); vision-anchor concern (if any) routed correctly (copy-edit revision OR SCOPE.md entry + amendment trigger). Daniel signs the log line: `**Session conducted by:** Daniel`.
    - **AI-policy compliance:** No Claude-paraphrased quotes — quotes are Daniel's transcription of Dawn's actual words. (Manual check by Daniel during commit.)
  </acceptance_criteria>
  <done>HEALTH-05 session 1 executed; log file committed at `.planning/playtest-log/{YYYY-MM-DD}-vision-pack-reaction.md` with structured note template; any action items from Dawn's reactions routed (pitch revision OR SCOPE.md entry).</done>
</task>

</tasks>

<verification>
After all 3 tasks complete:
1. **Vision Pack files all populated** (no `{Daniel authors` markers remaining): `grep -F '{Daniel authors' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/*.md` returns 0.
2. **Pillar count valid** (3-5 pillars per ROADMAP success criterion 2).
3. **Anti-positioning covers ≥7 comparables** per ROADMAP success criterion 4.
4. **Persona-zero session 1 logged** at `.planning/playtest-log/{YYYY-MM-DD}-vision-pack-reaction.md` (HEALTH-05 progress).
5. **AI-policy audit** (Daniel's nightly review per VALIDATION.md sampling rate): no Claude-generated creative content slipped into Vision Pack files.
6. **Anchor consistency** (Daniel reviews): Vision Pitch + Core Fantasy + Pillars + Anti-positioning all derive from the same locked premise (D-VISION-01..08); no contradictions.
</verification>

<success_criteria>
- 4 Vision Pack files Daniel-authored and committed (vision pitch ≤2 pages; pillars 3-5 with anti-clauses; core fantasy anchored on persona-zero; anti-positioning ≥7 comparables).
- 1 persona-zero session log committed at `.planning/playtest-log/{YYYY-MM-DD}-vision-pack-reaction.md` (HEALTH-05 session 1 of 2 minimum).
- Zero AI-policy violations: no Claude-generated pitch prose, pillar names, anti-pillar clauses, core-fantasy sentences, divergence bullets, or paraphrased Dawn quotes.
- Vision pitch unblocks Phase 1 plans 01-02 (Loops & Journey), 01-04 (Scenario), 01-05 (World & Style) with a stable single-source premise reference.
- ROADMAP success criteria 1, 2, 3, 4 satisfied (Vision Pack complete).
- HEALTH-05 progresses (1 of ≥2 required sessions for Phase 1 done; second session in plan 01-08).
</success_criteria>

<output>
After completion, create `.planning/phases/01-foundations-vision-lock/01-01-vision-pack-SUMMARY.md` documenting: 4 Vision Pack file outcomes (pillar count, persona-zero anchor quotes selected, comparables list), persona-zero session 1 log path + brief reactions summary (Daniel writes — Claude does not paraphrase), action items (if any) routed.
</output>
