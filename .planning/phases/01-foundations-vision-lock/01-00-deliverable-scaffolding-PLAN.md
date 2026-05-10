---
phase: 01-foundations-vision-lock
plan: 00
type: execute
wave: 1
depends_on: []
files_modified:
  - .planning/playtest-log/.gitkeep
  - .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md
  - .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md
  - .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md
  - .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md
  - .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md
  - .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md
  - .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md
  - .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/08-failure-mode-analysis.md
  - .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md
  - .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md
  - .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md
  - .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md
  - .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md
  - .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md
  - .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/15-risk-register.md
  - .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/16-capability-gap-matrix.md
  - .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/17-tools-pipeline-ratification.md
  - .planning/phases/01-foundations-vision-lock/deliverables/process-pack/20-sustainable-pace-cadence.md
  - .planning/phases/01-foundations-vision-lock/deliverables/process-pack/21-year3wall-tripwires.md
  - .planning/phases/01-foundations-vision-lock/deliverables/process-pack/22-personazero-playtest-ritual.md
  - .planning/phases/01-foundations-vision-lock/deliverables/process-pack/23-why-play-at-hour-200.md
  - .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/24-time-model-lock.md
  - .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/25-stack-ratification.md
  - .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/26-architecture-ratification.md
  - .planning/phases/01-foundations-vision-lock/deliverables/validation-pack/27-MARKET-EVIDENCE.md
  - .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md
  - .planning/SCOPE.md
  - .planning/slice-debt.md
autonomous: true
requirements:
  - HEALTH-01
  - HEALTH-02
  - HEALTH-03
  - HEALTH-04
  - HEALTH-05
  - MKTG-06

must_haves:
  truths:
    - "All 28 deliverable skeleton files exist on disk with TOC headings ready for Daniel to author into"
    - "Synthesis-allowed deliverables have Claude-populated content (Risk Register rows from PITFALLS.md, Capability Matrix skill rows from STACK.md, Tools Ratification body from STACK.md, Process Pack docs body from D-SUST/D-WALL decisions, Decision Lock Pack body from D-TIME/STACK/ARCHITECTURE, SCOPE.md inaugural entry, slice-debt.md worked example)"
    - "Creative-content deliverables (Vision Pitch / Core Fantasy / Slice Scenario / Wow Beats / Elevator Demo / Mood Deck content / Style Guide voice content / World Bible content / Pillars content) have ONLY TOC + section headers + Daniel-authoring placeholders, no Claude-generated creative prose, names, or in-world voice"
    - ".planning/playtest-log/ directory exists ready for HEALTH-05 sessions"
    - "SCOPE.md and slice-debt.md exist at .planning/ root (location per HEALTH-01/02 'project tracks')"
    - "Every skeleton declares its <downstream_consumer> so deliverables aren't dead documents (mitigates 01-RESEARCH.md Pitfall 5)"
  artifacts:
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/"
      provides: "Staging directory for all 28 deliverable skeletons organized by pack"
    - path: ".planning/SCOPE.md"
      provides: "Scope-change log with format spec + inaugural entry (Phase 1 scope expansion 2026-05-09)"
      contains: "2026-05-09"
    - path: ".planning/slice-debt.md"
      provides: "Slice-debt log with format spec + worked example"
    - path: ".planning/playtest-log/.gitkeep"
      provides: "Persona-zero playtest log directory (HEALTH-05 prerequisite)"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/process-pack/20-sustainable-pace-cadence.md"
      provides: "Sustainable-pace doc fully populated from D-SUST-01..08 (Claude-synthesis-allowed)"
      contains: "D-SUST-01"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/15-risk-register.md"
      provides: "Risk register with PMI columns + ≥10 rows synthesized from PITFALLS.md + four killers"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/25-stack-ratification.md"
      provides: "Stack ratification doc populated from research/STACK.md (Claude-synthesis-allowed)"
  key_links:
    - from: ".planning/SCOPE.md inaugural entry"
      to: "CONTEXT.md decision log 2026-05-09 (Phase 1 scope expansion)"
      via: "Date + decision reference"
      pattern: "2026-05-09.*Phase 1 scope"
    - from: "process-pack/20-sustainable-pace-cadence.md"
      to: "CONTEXT.md D-SUST-01..08"
      via: "Decision-ID references in body"
      pattern: "D-SUST-0[1-8]"
    - from: "process-pack/21-year3wall-tripwires.md"
      to: "CONTEXT.md D-WALL-01..07"
      via: "Decision-ID references in body"
      pattern: "D-WALL-0[1-7]"
    - from: "decision-lock-pack/26-architecture-ratification.md"
      to: "research/ARCHITECTURE.md"
      via: "@-reference in body"
      pattern: "research/ARCHITECTURE.md"
    - from: "risk-capability-pack/15-risk-register.md"
      to: "research/PITFALLS.md"
      via: "Risk rows synthesized from PITFALLS pitfalls"
      pattern: "PITFALLS.md|Pitfall [0-9]"
---

<objective>
Wave 0 — Drafts the structural skeletons for ALL 28 Phase 1 deliverables before Daniel begins authoring creative content into them. This is the foundational plan that unblocks all subsequent Phase 1 work.

For each of the 28 deliverables, this plan produces ONE file at the correct path with ONE of two content shapes:

1. **Synthesis-allowed deliverables (Claude populates body):** Risk Register, Capability Gap Matrix, Tools/Pipeline Ratification, SCOPE.md, slice-debt.md, Sustainable-pace cadence, Year-3-Wall tripwires (protocol structure only — thresholds deferred to plan 01-06), Persona-zero playtest ritual, "Why play at hour 200" structural application of four-engine retention strategy, Time Model lock, Stack Ratification, Architecture Ratification, Anti-positioning structure, Pillar × Mechanic matrix structure, Failure-mode analysis structure, Player Journey table, Core Loops diagram skeleton.

2. **Creative-content deliverables (Claude provides only TOC + Daniel-authoring placeholders, NO prose):** Vision Pitch, Pillars of Play, Core Fantasy, Slice Scenario sketch, Wow Beats list, 30-second Elevator Demo sketch, World Bible v0.1, Mood/Reference Deck (curation-only doc), Style Guide v0.1 (visual / audio / narrative voice / UI tone sections — empty for Daniel), Greenlight document (Daniel signs).

Purpose: Eliminates the "scavenger hunt" anti-pattern — every downstream Phase 1 plan finds its deliverable already at the right path with the right structure, knows exactly what Claude can fill vs. what Daniel must author, and can wire cross-references confidently.

Output: 28 files in `.planning/phases/01-foundations-vision-lock/deliverables/` organized by pack + the live `.planning/SCOPE.md` and `.planning/slice-debt.md` at planning root + `.planning/playtest-log/` directory.
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
@.planning/phases/01-foundations-vision-lock/01-VALIDATION.md
@.planning/research/SUMMARY.md
@.planning/research/STACK.md
@.planning/research/ARCHITECTURE.md
@.planning/research/PITFALLS.md
@CLAUDE.md
@PHILOSOPHY.md

<interfaces>
<!-- Decision IDs that scaffolds must reference. Use these EXACTLY (with dashes). -->

Vision Lock decision IDs (CONTEXT.md):
- D-VISION-01..08 (premise: magical helper-sprite + matchmaking)
- D-PREMISE-01..02 (premise pitch is first deliverable; 3 alternatives sketch)

Scope IDs:
- D-SCOPE-01..28 (the 28 deliverables — scaffold one file per ID)

Time Model:
- D-TIME-01..05 (action-driven contract; trigger list deferred)

Year-3-Wall:
- D-WALL-01..07 (cascade m6/12/24/36; thresholds deferred to plan 01-06)

MKTG-06:
- D-MKTG-01..06 (hybrid game list + LLM classification + Google Form survey + triangulation rubric)

Sustainability:
- D-SUST-01..08 (milestone-based, no hour tracking, monthly retro, quarterly review, bi-weekly persona-zero)

World Bible:
- D-WORLD-01..06 (DEEP scope, soft magic, Stardew calendar, locked premise)

Style Guide:
- D-STYLE-01..07 (Full v0.1 visual/audio/voice/UI tone; Daniel synthesizes visual direction tension)

Phase 1 Requirements:
- HEALTH-01 (SCOPE.md log) → covered by .planning/SCOPE.md scaffold
- HEALTH-02 (slice-debt.md log) → covered by .planning/slice-debt.md scaffold
- HEALTH-03 (Year-3-Wall pivot tripwires) → covered by 21-year3wall-tripwires.md scaffold (thresholds in plan 01-06)
- HEALTH-04 (Sustainable cadence doc) → covered by 20-sustainable-pace-cadence.md scaffold (full populate; HEALTH-04 wording amendment in plan 01-06)
- HEALTH-05 (Persona-zero ritual) → covered by 22-personazero-playtest-ritual.md scaffold + .planning/playtest-log/ dir
- MKTG-06 (Demographic validation) → covered by 27-MARKET-EVIDENCE.md scaffold (full execution in plan 01-07)
</interfaces>

<creative_content_refusal_list>
<!-- Per PHILOSOPHY.md §V — Claude REFUSES to author any of the following in this plan's scaffolds. -->
<!-- Where a deliverable would tempt Claude to draft these, the scaffold contains ONLY {Daniel authors} placeholders. -->

❌ NPC names, place names, sprite name, magic-system entity names, item names, festival names, season names, culture names
❌ Dialogue lines, item descriptions, journal entries, tooltips
❌ Premise prose, vision-pitch prose, capsule line, paragraph pitch, elevator demo prose
❌ Pillar names or pillar paragraphs (only the table structure to slot Daniel content into)
❌ Core fantasy paragraph or capsule sentence
❌ Slice scenario walkthrough prose
❌ Wow-beat names or descriptions
❌ Reference imagery or palette decisions or mood-deck contributions
❌ Voice samples, sentence-shape examples, tone exemplars
❌ Steam-page copy, devlog posts, marketing copy
❌ World Bible content (zone descriptions, lore paragraphs, magic system codifications, calendar season names, culture sketches, naming-system rules)
❌ Style Guide content (palette swatches, character silhouettes, audio exemplars, narrative voice principles)

When the scaffold reaches a creative-content section, Claude inserts a placeholder marker:
`{Daniel authors — see CONTEXT.md D-{ID} for locked decision; per AI policy (PHILOSOPHY.md §V), Claude does not generate this content}`
</creative_content_refusal_list>

</context>

<tasks>

<task type="auto" tdd="false">
  <name>Task 1: Create deliverables directory structure + planning-log infrastructure + planning-root SCOPE.md and slice-debt.md (synthesis-allowed)</name>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/.gitkeep,
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/.gitkeep,
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/.gitkeep,
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/.gitkeep,
    .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/.gitkeep,
    .planning/phases/01-foundations-vision-lock/deliverables/process-pack/.gitkeep,
    .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/.gitkeep,
    .planning/phases/01-foundations-vision-lock/deliverables/validation-pack/.gitkeep,
    .planning/phases/01-foundations-vision-lock/deliverables/greenlight/.gitkeep,
    .planning/playtest-log/.gitkeep,
    .planning/SCOPE.md,
    .planning/slice-debt.md
  </files>
  <read_first>
    .planning/STATE.md (locate the inaugural SCOPE.md entry queued for Phase 1 — "Phase 1 scope expansion 2026-05-09" — use this verbatim),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (decisions section captures the 2026-05-09 scope expansion as the inaugural entry seed),
    .planning/REQUIREMENTS.md (HEALTH-01 and HEALTH-02 wording),
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (lines 451..463 risk-register format reference; methodology references for SCOPE.md and slice-debt.md format),
    CLAUDE.md
  </read_first>
  <action>
    Create the deliverables/ subtree (9 pack subdirectories — vision-pack, loops-journey-pack, scenario-pack, world-style-pack, risk-capability-pack, process-pack, decision-lock-pack, validation-pack, greenlight) using `.gitkeep` placeholder files so the empty directories commit.

    Create `.planning/playtest-log/.gitkeep` to satisfy HEALTH-05 prerequisite (the dir must exist before plan 01-08 logs persona-zero sessions).

    Create `.planning/SCOPE.md` with:
    - Title: `# SCOPE.md — Colisi scope-change log`
    - Brief preamble: 2-3 sentences stating purpose ("This log tracks every system / feature / scope change with rationale and reversibility per HEALTH-01") and reference to PHILOSOPHY.md amendment process and CLAUDE.md precedence rules.
    - Format-spec section with column definitions: `Date | Phase | Decision | Driver | Rationale | Reversibility | Source/Cross-ref`.
    - Reversibility scale: `Reversible (low-cost undo within ≤1 phase) | Reversible-with-rework (cost: weeks) | One-way-door (cannot undo without restart) | Documented-but-not-acted (recorded for future)`.
    - Inaugural entry table row #1: Date `2026-05-09`, Phase `Phase 1 — Foundations & Vision Lock`, Decision `Phase 1 scope expanded from 7 success criteria to full mature-studio 28-artifact pre-production set`, Driver `Daniel directive: "mirror established studio orthodoxy; time is not the constraint; AI assistance makes depth cheap"`, Rationale `Architect-for-the-full-game principle; orthodoxy reduces hand-rolling format risk; vision lock breakthrough same session means downstream docs need stable anchor`, Reversibility `Documented-but-not-acted (deliverables can be trimmed during execution per D-STYLE-07 orthodoxy memory rule; cannot un-author work already done)`, Source/Cross-ref `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md decisions section; STATE.md decisions log 2026-05-09`.
    - Inaugural entry row #2: Date `2026-05-09`, Phase `Roadmap creation`, Decision `Two-milestone roadmap structure (M1 = vertical slice + Steam page, M2 = production & launch); detailed phasing only for M1`, Driver `Synthesizer recommendation`, Rationale `M2 detail deferred until end-of-M1 retro provides honest content-pacing data`, Reversibility `Reversible-with-rework (M2 phasing can be authored at any time, but pre-slice estimates would be unreliable)`, Source/Cross-ref `.planning/ROADMAP.md "Milestone Structure" section; STATE.md decisions log 2026-05-09`.
    - Closing pointer: "Update procedure: append a new row at the bottom for every scope change. Each phase-transition (`/gsd:transition`) audits this log per HEALTH-01."

    Create `.planning/slice-debt.md` with:
    - Title: `# slice-debt.md — Architectural shortcuts log`
    - Preamble: 2-3 sentences stating "This log tracks every shortcut taken for the vertical slice that defers full-game architecture, with explicit promotion-or-payoff strategy per HEALTH-02. Empty during Phase 1 (no code yet); first real entry expected in Phase 2+. Worked example below illustrates the format."
    - Format-spec columns: `ID | Date | Phase | Item | Hack (what shortcut was taken) | Why (slice-justified rationale) | Promotion-or-Payoff strategy | Owner | Target phase for resolution | Tripwire | Status`.
    - Status lifecycle: `Open | Promoted (full-game architecture in place) | Paid-off (slice-shape kept; full-game work declined with rationale) | Carried-forward-to-M2`.
    - Worked example (illustrative, hypothetical — clearly labeled as `[EXAMPLE — illustrative; first real entry expected Phase 2+]`): ID `SD-EXAMPLE-01`, Date `YYYY-MM-DD`, Phase `Phase 6 (hypothetical)`, Item `NPC schedule loaded from in-memory dictionary instead of save-system Resource`, Hack `Hardcoded schedule Dictionary at scene-load instead of NPCScheduleResource saved/loaded via SaveManager`, Why `Phase 6 slice content production blocked on schedule format finalization; in-memory hardcoded for slice; full save/load works for player + zone state already`, Promotion-or-Payoff strategy `Migrate to NPCScheduleResource at Phase 9 (Content Scaling) when full 12+ NPC roster requires data-driven schedules; promotion task already in M2 backlog`, Owner `Daniel`, Target phase `Phase 9`, Tripwire `If slice ships without resolution AND m24 wishlist count >5k, promotion is blocking — pre-launch polish phase`, Status `Open`.
    - Closing pointer: "Update procedure: append at top (newest first) for every shortcut. Each monthly retro audits Open entries per HEALTH-02."

    All filenames use kebab-case where applicable. Commit-friendly Markdown only.
  </action>
  <verify>
    <automated>test -d ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack" && test -d ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack" && test -d ".planning/phases/01-foundations-vision-lock/deliverables/scenario-pack" && test -d ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack" && test -d ".planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack" && test -d ".planning/phases/01-foundations-vision-lock/deliverables/process-pack" && test -d ".planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack" && test -d ".planning/phases/01-foundations-vision-lock/deliverables/validation-pack" && test -d ".planning/phases/01-foundations-vision-lock/deliverables/greenlight" && test -d ".planning/playtest-log" && test -f ".planning/SCOPE.md" && test -f ".planning/slice-debt.md"</automated>
  </verify>
  <acceptance_criteria>
    - All 9 pack subdirectories exist under `.planning/phases/01-foundations-vision-lock/deliverables/`: `ls -d .planning/phases/01-foundations-vision-lock/deliverables/*/` returns exactly 9 directories.
    - `.planning/playtest-log/` directory exists: `test -d .planning/playtest-log`.
    - `.planning/SCOPE.md` exists and contains the inaugural entry with date `2026-05-09`: `grep -F '2026-05-09' .planning/SCOPE.md` returns ≥2 matches (two inaugural rows).
    - `.planning/SCOPE.md` includes the format-spec column headers: `grep -E 'Date.*Phase.*Decision.*Driver.*Rationale.*Reversibility' .planning/SCOPE.md` returns ≥1 match.
    - `.planning/SCOPE.md` references CONTEXT.md as the source: `grep -F '01-CONTEXT.md' .planning/SCOPE.md` returns ≥1 match.
    - `.planning/slice-debt.md` exists and contains the worked example marker: `grep -F '[EXAMPLE — illustrative' .planning/slice-debt.md` returns ≥1 match.
    - `.planning/slice-debt.md` includes status lifecycle: `grep -E 'Open \| Promoted \| Paid-off \| Carried-forward-to-M2' .planning/slice-debt.md` returns ≥1 match.
    - `.planning/slice-debt.md` references HEALTH-02: `grep -F 'HEALTH-02' .planning/slice-debt.md` returns ≥1 match.
    - No creative content authored: `grep -iE '(name your village|brave hero|magical sprite named|the protagonist is called)' .planning/SCOPE.md .planning/slice-debt.md` returns 0 matches.
  </acceptance_criteria>
  <done>SCOPE.md inaugural entry committed; slice-debt.md format spec + worked example committed; deliverables/ subtree ready; playtest-log/ ready for plan 01-08.</done>
</task>

<task type="auto" tdd="false">
  <name>Task 2: Scaffold creative-content deliverables (Vision/Loops/Scenario/World-Style packs — TOC + Daniel-authoring placeholders ONLY, no Claude prose)</name>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md,
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md,
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md,
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md,
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md,
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md,
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md,
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/08-failure-mode-analysis.md,
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md,
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md,
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md,
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md,
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md,
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (Pattern 2 World Bible TOC at lines 366..427; Pattern 3 Pillar×Mechanic at lines 433..445; Pattern 6 Player Journey at lines 493..501; Pattern 7 Anti-positioning at lines 508..531; Example 1 Pillars template at lines 679..702),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-VISION-01..08 premise; D-PREMISE-01..02; D-WORLD-01..06; D-STYLE-01..07; specifics section for visual reference deck items),
    PHILOSOPHY.md (§V refusal list — confirm what Claude must NOT generate before scaffolding creative-content deliverables),
    CLAUDE.md (load-bearing rules section 1)
  </read_first>
  <action>
    For each of the 14 creative-content deliverables, create a Markdown file with: (a) frontmatter (author: Daniel, ai_role: critique-only, depends_on: list, downstream_consumers: list, decisions_referenced: D-IDs); (b) TOC and section headers per the patterns referenced; (c) every prose / name / palette / dialogue slot replaced with the placeholder `{Daniel authors — see CONTEXT.md D-{ID} for locked decision; per AI policy (PHILOSOPHY.md §V), Claude does not generate this content}`. NEVER write in-world prose, names, dialogue, palettes, or reference imagery. The scaffold body should be ≥80% structural (headings, tables with empty cells, bullet prompts) and ≤20% Claude-written instructional/methodology text (e.g., "Per D-VISION-01..08, the locked premise is the magical helper-sprite + matchmaking puzzle layer — keep the pitch anchored on this and avoid hedging with 'alternative' framings per D-PREMISE-02").

    Per-file scaffold contents (ALL files MUST include the AI policy banner at top: `> AI POLICY (PHILOSOPHY.md §V): Daniel authors all content in this file. Claude provides ONLY the section structure below and refuses to draft in-world prose, names, dialogue, palettes, or reference imagery. Claude critiques drafts when Daniel requests.`):

    **01-vision-pitch.md (D-SCOPE-01, D-PREMISE-01):**
    Sections: `## Capsule line (1 sentence — Daniel authors)`, `## Paragraph pitch (1 paragraph — Daniel authors)`, `## Elevator pitch (≤2 minutes spoken; ~250 words — Daniel authors)`, `## 2-3 alternative premises sketch (per D-PREMISE-02; 1-paragraph each, demonstrates the locked premise was a CHOICE — Daniel authors)`, `## Cross-references` (list: CONTEXT.md D-VISION-01..08; PERSONA.md; persona-zero validation in CONTEXT.md D-VISION-05).

    **02-pillars-of-play.md (D-SCOPE-02):** Per `01-RESEARCH.md` Example 1 lines 679..702 — produce a TOC with 4 pillar slots (Pillar 1..4; D-SCOPE-02 says 3-5 pillars, default 4 placeholders). Each pillar block: `## Pillar N: {1-3 word name — Daniel authors}` then `**Statement:**`, `**Why this pillar:**`, `**Design implications (3-5):**` (5 empty bullets), `**Anti-pillar clauses (3-5):**` (5 empty bullets), `**Failure-mode signature:**`, `**Mechanics this pillar justifies (cross-ref D-SCOPE-07):**`. ALL prose marked `{Daniel authors}`.

    **03-core-fantasy.md (D-SCOPE-03):** Sections: `## Capsule sentence (1 sentence — Daniel authors)`, `## Paragraph elaboration (1 paragraph — Daniel authors)`, `## Anchor: persona-zero core fantasy` (Claude can quote `PERSONA.md`'s "Talking to people and finding where I fit in" — that's a citation, not authorship), `## Cross-references`.

    **04-anti-positioning.md (D-SCOPE-04):** Per `01-RESEARCH.md` Pattern 7 lines 508..531 — TOC with one section per comparable: `## Vs. Stardew Valley`, `## Vs. Baldur's Gate 3`, `## Vs. The Sims`, `## Vs. Spiritfarer`, `## Vs. Coral Island`, `## Vs. Coffee Talk`, `## Vs. Palia`, `## Vs. Disney Dreamlight Valley`, `## Vs. Sun Haven`, `## Vs. Fae Farm`, `## Vs. AI-generated cozy games`. Each section template: `**Differentiator (1 sentence — Daniel authors):**`, `**We share (1-2 lines — Daniel authors):**`, `**We diverge (3-5 bullets — Daniel authors):**`, `**We do NOT claim to be:** "Stardew Killer," "Stardew but X" (per PHILOSOPHY.md §III)` (Claude can write the explicit guardrail line — it's a citation of PHILOSOPHY.md, not voice).

    **05-core-loops.md (D-SCOPE-05):** TOC with three nested-loop diagram skeletons: `## Moment-to-moment loop` (~30s cycle), `## Session loop` (~30min cycle), `## Meta loop` (~10hr+ cycle). Each section: ASCII diagram skeleton placeholder showing 4-5 nodes with arrow connectors and `{Daniel authors node labels}` markers. Closing section: `## Trigger list (canonical actions that advance time per D-TIME-01..05)` with note `{Daniel authors per D-TIME-05; or explicitly defer to Phase 4/5 with rationale}`. Cross-references include CONTEXT.md D-VISION-04 (matchmaking puzzle layer) and D-TIME-01..05.

    **06-player-journey.md (D-SCOPE-06):** Per `01-RESEARCH.md` Pattern 6 lines 493..501 — table with 5 rows (First 5 min / First hour / Hour 10 / Hour 100 / Hour 500) × 6 columns (Time mark, Phase per Yu-kai Chou, What player is doing, What player is feeling, What systems support it, What goes wrong if pillar X fails). All cells `{Daniel authors}`.

    **07-pillar-mechanic-matrix.md (D-SCOPE-07):** Per `01-RESEARCH.md` Pattern 3 lines 433..445 — Markdown table skeleton with columns `Pillar | Mechanic | Justification (1-2 sentences) | Pillar contribution score (0-3)`. Pre-populate the Mechanic column with REQ IDs from REQUIREMENTS.md (NPC-01..09, NARR-01..07, COMP-01..04, WORLD-01..07, CRAFT-01..07, HOME-01..05, ONB-01..04 — that's a synthesis-allowed factual extract from REQUIREMENTS.md, not creative content). Pillar columns left empty for Daniel to add when pillars are named in 02-pillars-of-play.md. Closing section: `## Orphan mechanics flag table` (header only — Daniel populates).

    **08-failure-mode-analysis.md (D-SCOPE-08):** Table skeleton with 4-pillar rows × columns (Pillar | Bounce signature in playtest | Early-warning leading indicator | Mitigation if signature appears). All cells `{Daniel authors}`. Cross-ref to D-SCOPE-22 persona-zero playtest ritual.

    **09-slice-scenario-sketch.md (D-SCOPE-09):** Sections: `## Slice premise (1-2 sentences anchoring on D-VISION-01..08 — Daniel authors)`, `## Setup (player just started — Daniel authors)`, `## First 60 minutes screenwriter-style walkthrough` (numbered scene list with `{Scene N: ... — Daniel authors}`), `## Slice end-state (Daniel authors)`. Cross-references include all 4 NPCs from Phase 6 success criteria (those are deliberately-anchored numbers, not Claude's invention; the actual 4 NPC names will be in D-WORLD-06 deferred Daniel work).

    **10-wow-beats.md (D-SCOPE-10):** Numbered list skeleton: `### Wow beat 1: {Daniel names}` through `### Wow beat 8: {Daniel names}` (default 8 placeholders; Daniel can trim or extend). Each beat block: `**What happens:**`, `**Why it's trailer-screenshot-worthy:**`, `**System support (REQ refs):**`. Cross-ref to D-VISION-04 matchmaking and D-SCOPE-09 slice scenario.

    **11-elevator-demo-30s.md (D-SCOPE-11):** Sections: `## 0:00–0:10 (first 10 seconds — Daniel sketches)`, `## 0:10–0:20 (Daniel sketches)`, `## 0:20–0:30 (Daniel sketches)`, `## What the demo proves (Daniel authors — 3-5 bullets)`. Note: Claude does NOT draft the demo prose.

    **12-world-bible-v0.1.md (D-SCOPE-12):** Per `01-RESEARCH.md` Pattern 2 lines 366..427 — produce the full World Bible TOC verbatim, with every section header present (`## 0. Document conventions` through `## 9. Glossary`) and EVERY content slot marked `{Daniel authors per D-WORLD-01..06}`. Eight zone subsections (`### Zone 1` through `### Zone 8`) with `{name TBD by Daniel — D-WORLD-06}` markers. Magic system section §4 reflects D-WORLD-04 cultural/atmospheric tier interpretation (Claude can write the structural distinction sentence; Daniel authors the content). §5.2 calendar season names slot left for Daniel per D-WORLD-03. §8 lists the open design questions deferred to later phases verbatim from CONTEXT.md.

    **13-mood-reference-deck.md (D-SCOPE-13):** Sections: `## Reference deck rules (per D-STYLE-02 + AI policy)` (Claude writes the rules: human-curated only, zero AI-generated reference art, license/attribution must be tracked per source), `## Anchor references (Daniel + Dawn curated 2026-05-09)` — Claude can list the already-curated references factually as cited in CONTEXT.md `<specifics>` lines 250..256 (Sandara Tang druid + leaf-fawn; Hades character art; Okami; Borderlands; Studio Ghibli) — these are CITATIONS of existing curation, not Claude generating new references. Each cited reference gets: `**Source:** {citation}`, `**Why curated:** {Daniel authors note}`, `**License/attribution status:** {Daniel verifies before any use beyond reference}`. `## Additional curation (Daniel + Dawn add over time)` empty section for ongoing additions. **Critical:** No reference Claude introduces beyond the CONTEXT.md `<specifics>` list. No links to AI-art generators. No image generation requests honored.

    **14-style-guide-v0.1.md (D-SCOPE-14):** Per D-STYLE-01..07 — TOC with 4 sections, each empty for Daniel: `## Visual direction (per D-STYLE-01..03)`, `## Audio direction (per D-STYLE-04)`, `## Narrative voice bible (per D-STYLE-05)`, `## UI tone principles (per D-STYLE-06; full mockups Phase 3)`. Each section has structural sub-bullets per D-STYLE locked depths (e.g., Visual: `### Named direction`, `### Color palette principles + 1-2 hero palettes`, `### Character silhouette / proportion principles`, `### Environment style frames (3-4 reference compositions)`, `### UI visual direction` — all `{Daniel authors}`). Narrative voice section: `### POV rules`, `### Register`, `### Sentence-shape tendencies`, `### Period / tone references (Daniel curates which authors/games)`, `### Forbidden language`, `### Narrator presence policy` — all `{Daniel authors}`.

    Every file: max 2KB-ish for skeleton body (no creative bloat). Frontmatter declares `decisions_referenced` D-IDs explicitly so plan validation can check D-ID coverage downstream.
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/03-core-fantasy.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/08-failure-mode-analysis.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/10-wow-beats.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/11-elevator-demo-30s.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md"</automated>
  </verify>
  <acceptance_criteria>
    - All 14 files exist at the paths above.
    - Every file contains the AI policy banner: `grep -lF 'AI POLICY (PHILOSOPHY.md §V)' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/*.md` returns 14 files.
    - Every file contains the Daniel-authoring placeholder pattern at least once: `grep -lF 'Daniel authors' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/*.md` returns 14 files.
    - World Bible has all 9 top-level sections: `grep -cE '^## [0-9]\. ' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns ≥9.
    - World Bible has 8 zone subsections: `grep -cE '^### Zone [1-8]' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns 8.
    - Anti-positioning covers all comparables from 01-RESEARCH.md Pattern 7 + extended list: `grep -cE '^## Vs\. ' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/04-anti-positioning.md` returns ≥7 (Stardew, BG3, Sims, Spiritfarer, Coral Island, Coffee Talk, Palia minimum per ROADMAP success criterion 4).
    - Pillar × Mechanic matrix references REQUIREMENTS.md REQ-IDs: `grep -cE '(NPC-0[1-9]|NARR-0[1-7]|COMP-0[1-4]|WORLD-0[1-7]|CRAFT-0[1-7]|HOME-0[1-5]|ONB-0[1-4])' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md` returns ≥10 matches.
    - Style Guide has 4 top-level sections (Visual / Audio / Narrative voice / UI tone): `grep -cE '^## (Visual direction|Audio direction|Narrative voice|UI tone)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns 4.
    - Mood Deck cites only the references from CONTEXT.md `<specifics>` (no Claude-introduced refs): `grep -cE '(Sandara Tang|Hades|Okami|Borderlands|Studio Ghibli|Cozy Companion)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md` returns ≥4 (these 5-6 are CONTEXT.md citations, not new generation).
    - **Zero Claude-generated creative content check (CRITICAL):** `grep -iE "(in the village of |a sprite named |the witch named |fairy named |spirit called|elder named|named (her|him) )" .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/*.md` returns 0 matches (i.e., no fictional in-world entities named).
    - All 14 files reference at least one CONTEXT.md decision ID: `grep -lE 'D-(VISION|SCOPE|TIME|WALL|MKTG|SUST|WORLD|STYLE|PREMISE)-[0-9]' .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/*.md` returns 14 files.
  </acceptance_criteria>
  <done>14 creative-content scaffold files committed; each contains AI-policy banner + Daniel-authoring placeholders + decision-ID anchors + zero Claude-generated creative content.</done>
</task>

<task type="auto" tdd="false">
  <name>Task 3: Scaffold synthesis-allowed deliverables (Risk/Capability/Tools/Process/Decision-Lock/Validation/Greenlight packs — Claude populates body fully where allowed)</name>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/15-risk-register.md,
    .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/16-capability-gap-matrix.md,
    .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/17-tools-pipeline-ratification.md,
    .planning/phases/01-foundations-vision-lock/deliverables/process-pack/20-sustainable-pace-cadence.md,
    .planning/phases/01-foundations-vision-lock/deliverables/process-pack/21-year3wall-tripwires.md,
    .planning/phases/01-foundations-vision-lock/deliverables/process-pack/22-personazero-playtest-ritual.md,
    .planning/phases/01-foundations-vision-lock/deliverables/process-pack/23-why-play-at-hour-200.md,
    .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/24-time-model-lock.md,
    .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/25-stack-ratification.md,
    .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/26-architecture-ratification.md,
    .planning/phases/01-foundations-vision-lock/deliverables/validation-pack/27-MARKET-EVIDENCE.md,
    .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (Pattern 4 Risk register at lines 449..463; Pattern 5 Capability matrix at lines 469..487; Example 2 Why-play-hour-200 at lines 707..751; Example 3 Greenlight at lines 757..804),
    .planning/research/PITFALLS.md (FULL — risk register population source: four killers + Tier-2 critical pitfalls),
    .planning/research/STACK.md (Tools/Pipeline + Stack Ratification + Capability skill list source),
    .planning/research/ARCHITECTURE.md (Architecture Ratification source),
    .planning/research/SUMMARY.md (four-engine retention strategy source for Why-play-hour-200),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-SUST-01..08 for sustainable-pace; D-WALL-01..07 for Year-3-Wall protocol; D-TIME-01..05 for time model; D-MKTG-01..06 for MARKET-EVIDENCE.md scaffold),
    .planning/REQUIREMENTS.md (HEALTH-04 wording — note REQ wording says "~25 hours/week" but locked decision overrides; the synthesis-allowed cadence doc must surface this conflict),
    PHILOSOPHY.md (§V — confirm what "synthesis-allowed" means: structural + decision-citation + factual extract from research; NOT voice/marketing/in-world content)
  </read_first>
  <action>
    Per `01-RESEARCH.md` Pattern 1 ("Claude template + Daniel content split") — these 12 deliverables ARE synthesis-allowed: Claude can populate the body from research files + locked decisions + REQUIREMENTS.md. Daniel verifies and signs. Each scaffold below specifies how full vs. how skeleton:

    **15-risk-register.md (D-SCOPE-15):** Per `01-RESEARCH.md` Pattern 4 — Markdown table with PMI columns (`ID | Risk | Likelihood (1-5) | Impact (1-5) | Score (L×I) | Mitigation | Early-warning tripwire | Owner | Status`). Populate ≥12 rows from `research/PITFALLS.md`:
    - R-01..04: the four killers (Stardew Killer framing trap; Scope creep; Endgame content cliff; Solo-dev burnout) — exact rows from `01-RESEARCH.md` Pattern 4 lines 451..461 (these 10 example rows are Claude-synthesis-allowed because they cite PITFALLS.md and CONTEXT.md decisions explicitly).
    - R-05..10: continue the example rows from `01-RESEARCH.md` (Phase 3 learning curve, Phase 6 art pipeline, persona-zero unavailability, GitHub LFS quota, MKTG-06 thesis rejection, AI policy violation leak).
    - R-11..12: add from PITFALLS.md any Tier-2 pitfalls not yet covered (e.g., "Stack churn during slice phase," "Save schema unmigratable post-launch").
    All rows must cite their PITFALLS.md source (Pitfall N) or CONTEXT.md decision in either the Risk or Mitigation column. Owner is `Daniel` for all. Status is `Open`. Daniel verifies likelihood/impact/mitigation/tripwire before sign-off (this is a synthesis Claude can populate; Daniel scores).

    **16-capability-gap-matrix.md (D-SCOPE-16):** Per `01-RESEARCH.md` Pattern 5 — Markdown table with columns (`Skill | Phase needed | Current proficiency (1-5) | Target proficiency (1-5) | Gap | Acquisition plan | Deadline | Status`). Populate ≥15 rows from STACK.md and ARCHITECTURE.md (lines 469..487 of `01-RESEARCH.md` give the full skill list verbatim — copy that table into the file). Current proficiency cells `{Daniel scores}`. Target / Gap / Status pre-populated where the research ALREADY specified targets (e.g., GDScript target=4, Steam Web API target=3, butler target=3). Acquisition plans and deadlines are research-cited (Heartbeast / GDQuest / godotsteam.com etc.).

    **17-tools-pipeline-ratification.md (D-SCOPE-17):** Body is a synthesis of `research/STACK.md` into ratification format. Sections: `## Locked engine + language` (cite STACK.md Executive Recommendation: Godot 4.5.x stable, GDScript), `## Locked 3D pipeline` (Blender LTS → glTF .glb → Godot), `## Locked addons + libraries` (Dialogue Manager / Custom Resource saves / GUT 9.x / GodotSteam / butler / etc. — table form), `## Locked asset baseline` (Kenney + Quaternius + KayKit CC0 + Mixamo + Freesound), `## Locked version-control + LFS strategy` (Git + Git LFS + GitHub private), `## Re-litigation policy` (header: `**LOCKED Phase 1. No re-litigation in Phase 2+ unless a SCOPE.md entry justifies displacement per "buys-its-slot" rule.**`), `## Daniel signature line: {YYYY-MM-DD} — Daniel signs to confirm ratification`. Cross-reference: `research/STACK.md` (full link).

    **20-sustainable-pace-cadence.md (D-SCOPE-20, HEALTH-04):** Body is a full synthesis of D-SUST-01..08. Sections in order: `## Hour-tracking policy: NONE (D-SUST-01, D-SUST-02)` (explain milestone-based unit), `## Daily rhythm (D-SUST-03)` (continuous nightly session, no quota), `## Monthly milestones (D-SUST-04)` (phase plans drive milestones), `## Monthly retro (D-SUST-05)` (last day of month, ~2 hr; review milestones-hit vs planned, slice-debt entries, persona-zero summary, STATE.md update — list verbatim), `## Quarterly review (D-SUST-06)` (half-day, every 3 months; review Year-3-Wall tripwire check, SCOPE.md audit, phase-level replanning, CHANGELOG.md entry — list verbatim), `## Persona-zero playtest ritual (D-SUST-07)` (bi-weekly 30-min; pre-Phase-3 = doc reactions; structured note template lives at .planning/playtest-log/YYYY-MM-DD.md — link to deliverable 22), `## Productivity tripwire signal (D-SUST-08)` (cumulative phase-completion delta; cross-ref D-WALL-06), `## REQUIREMENTS.md HEALTH-04 amendment notice` (Claude writes the synthesis prose: `> **Amendment notice:** REQUIREMENTS.md HEALTH-04 currently reads "target ~25 hours/week" — that wording predates the locked sustainability decision (D-SUST-01..02, 2026-05-09) which dropped hour-based targets. Per CLAUDE.md authoritative-document precedence, REQUIREMENTS.md is amended by Phase 1 execution to replace "target ~25 hours/week" with "milestone-based cadence per D-SUST-01..08." This amendment is a Phase 1 task in plan 01-06 with cross-link to this doc.`), `## Daniel signature line`. NO in-world voice; pure synthesis from CONTEXT.md.

    **21-year3wall-tripwires.md (D-SCOPE-21, HEALTH-03):** Body synthesizes D-WALL-01..07. Sections: `## Cascade cadence (D-WALL-01)` (m6 / m12 / m24 / m36 — list each), `## Multi-OR triggers (D-WALL-02)` (any single metric below threshold fires), `## Pause-and-replan protocol (D-WALL-03)` (1-week pause; Replan Doc with 3 scenarios; outside reviewer co-sign — list 7 protocol steps verbatim from CONTEXT.md D-WALL-03), `## Re-arm-and-rebaseline (D-WALL-04)`, `## Enforcement (D-WALL-05)` (pre-committed in writing in Greenlight + designated outside reviewer), `## Productivity-tripwire metric unit (D-WALL-06)` (cumulative phase-completion delta vs roadmap), `## Specific metric thresholds at m6/m12/m24/m36 (D-WALL-07)` (table with 4 rows × columns: Checkpoint | Metric | Threshold | Source/rationale; cells filled with `{populate from comparable-game research note in plan 01-06; Daniel + outside reviewer co-sign at Greenlight}`), `## Outside reviewer designation (D-WALL-05)` (`**Outside reviewer name:** {Daniel designates before D-SCOPE-28 Greenlight}`; field must be filled by Greenlight gate — flagged Phase 1 blocker per RESEARCH.md "Missing dependencies"), `## Daniel signature + Outside reviewer co-signature lines`. The threshold table itself stays empty in this scaffold — plan 01-06 fills the threshold cells from the comparable-game research note.

    **22-personazero-playtest-ritual.md (D-SCOPE-22, HEALTH-05):** Body synthesizes D-SUST-07. Sections: `## Cadence (bi-weekly, 30 min)`, `## Format` (1. Dawn plays whatever's most-buildable for ~20 min while Daniel observes silently — pre-Phase-3, this is "Dawn reads docs and reacts"; 2. Last 10 min: structured questions), `## Structured question template` (3 questions: "What did you expect to be able to do that you couldn't? / What felt the worst? / One thing you'd change" — verbatim from CONTEXT.md), `## Logging convention` (notes saved at `.planning/playtest-log/YYYY-MM-DD.md` with template: Date | Build version | Setup | Observations (timed) | Quotes | Daniel's reactions | Action items), `## First 2 sessions for Phase 1 (per HEALTH-05 + Validation Pack)` (Session 1 = premise pitch reaction, gates Vision Pack completion; Session 2 = bi-weekly follow-up after Loops Pack drafted), `## Pre-Phase-3 mode` (sessions are docs-and-reactions; play-mode begins Phase 3+), `## Backup if persona-zero unavailable` (Per D-SUST-07: ring-2 testers by Phase 7; if Dawn unavailable >2 weeks, document pause). Cross-references include CONTEXT.md D-VISION-05 (premise already validated) + REQUIREMENTS.md HEALTH-05.

    **23-why-play-at-hour-200.md (D-SCOPE-23):** Per `01-RESEARCH.md` Example 2 lines 707..751 — produce the FULL structural skeleton from Example 2. Claude populates the four-engine framing (citing `research/SUMMARY.md`) — that's synthesis-allowed because the four-engine strategy is a research deliverable. Each engine section's "At hour 200:" subsection is `{Daniel authors how this manifests for the sprite + matchmaking premise — see CONTEXT.md D-VISION-04 for premise anchor}`. Re-interpretation section (`## Re-interpretation under sprite + matchmaking premise`) is `{Daniel authors how matchmaking-as-puzzle compounds with the four engines — see D-VISION-04, D-VISION-06}`. Failure modes section: `{Daniel authors 3-5 failure modes}`. Cross-references include PITFALLS Pitfall 3 (the cliff), ARCHITECTURE.md state-flag loose branching, D-SCOPE-07 / D-SCOPE-08, D-VISION-04.

    **24-time-model-lock.md (D-SCOPE-24):** Body synthesizes D-TIME-01..05. Sections: `## Pure action-driven contract (D-TIME-01)`, `## Player-controlled day/night (D-TIME-02)` (Stardew/ACNH-style; standing still indefinitely never closes anything; WORLD-03/05 compliance), `## NPC continuous pathing during play (D-TIME-03)` (commits Phase 3 navmesh + animation budget; Phase 5 schedule data + save-mid-walk policy), `## Tension flagged for Phase 5 design (D-TIME-04)` (NPCs move during play while sun does not; visually unusual but acceptable within single time-slot), `## Trigger list status (D-TIME-05)` — `{Trigger list will be locked here from Core Loops Pack output (D-SCOPE-05) during plan 01-03; if still ambiguous, defer to Phase 4/5 with rationale per D-TIME-05. Status: pending plan 01-03 output.}`. Cross-references: research/ARCHITECTURE.md, ROADMAP.md Phase 5 schedule design.

    **25-stack-ratification.md (D-SCOPE-25):** Brief body — `## Locked stack reference: research/STACK.md` (full @-reference), `## Re-litigation policy: LOCKED Phase 1. Phase 2+ may not re-open stack decisions without SCOPE.md entry justifying displacement.`, `## Specific locked items` (table excerpting STACK.md Executive Recommendation: Godot 4.5.x stable, GDScript, Blender LTS, glTF, Dialogue Manager (Nathan Hoad), Custom Resource saves, CSV→PO localization, Bosca Ceoil + LMMS, Git + Git LFS, GodotSteam GDExtension, butler, GUT 9.x — one row per item), `## Daniel signature line`.

    **26-architecture-ratification.md (D-SCOPE-26):** Body: `## Locked architecture reference: research/ARCHITECTURE.md` (full @-reference), `## Sprite-premise interpretation amendments` — Claude lists the REQs from CONTEXT.md `<specifics>` lines 269..278 that re-interpret under the sprite premise (HOME-01..05, CRAFT-01..07, COMP-01..04, CTRL-01, NPC-09, NPC-06, ROM-01/02). For each REQ ID: `**{REQ-ID}:** {one-line interpretation note from CONTEXT.md `<specifics>`}` — these are factual extracts from CONTEXT.md, not creative invention. `## REQUIREMENTS.md amendment notice` (Phase 1 → Phase 2 transition will amend REQUIREMENTS.md interpretation notes per CONTEXT.md `<specifics>` resolution path — flag as deferred). `## Daniel signature line`.

    **27-MARKET-EVIDENCE.md (D-SCOPE-27, MKTG-06):** Body synthesizes D-MKTG-01..06 methodology + provides empty result tables for plan 01-07 to fill. Sections: `## Methodology (per D-MKTG-01..06)` (full 6-step methodology synthesized from CONTEXT.md), `## Hybrid game list (per D-MKTG-01)` — empty 10-20-row table with columns `Game | Steam tag set | Review count | Inclusion rationale (rule + curation)` and the selection rule documented above the table, `## Negative-and-mixed review classification (per D-MKTG-02)` — empty per-game tally tables with complaint categories (time pressure / difficulty / endgame / VN-style / required-multiplayer / other) — all `{plan 01-07 populates from Steam Web API + LLM classification + Daniel verification of every tag}`, `## Google Form survey (per D-MKTG-03)` — survey-questions section `{Claude proposes neutrally-worded ~10 questions; Daniel critiques for leading-question bias before distribution}` + distribution log `{r/CozyGamers / 2-3 cozy Discords / cozy social tags — Daniel pursues moderator approvals during plan 01-07}` + response-collection metadata `{target ≥50-100 responses}`, `## Triangulation rubric (per D-MKTG-04)` (verbatim Confirmed/Refined/Rejected criteria from CONTEXT.md), `## Verdict` `{Confirmed | Refined | Rejected — Daniel signs after data collected per D-MKTG-04 rubric}`, `## Roadmap-revision impact (if Refined or Rejected)` `{Daniel populates if applicable}`. The body is mostly methodology synthesis; the tables are empty for plan 01-07 to fill.

    **28-greenlight.md (D-SCOPE-28):** Per `01-RESEARCH.md` Example 3 lines 757..804 — produce the FULL Greenlight document structure verbatim from Example 3. Sections: `## Vision lock confirmation` (Claude can list D-VISION-01..08 verbatim — citation, not creative content), `## Decisions ratified` (cross-refs to STACK.md, ARCHITECTURE.md, D-TIME, D-SUST, D-WALL, MARKET-EVIDENCE.md), `## Year-3-Wall tripwire criteria` (table with 5-7 rows × columns Checkpoint | Metric | Threshold | Source/rationale — cells `{filled from deliverable 21 thresholds at Greenlight gate}`; outside reviewer field empty), `## Knowing-what-I-now-know commitment` (`{Daniel writes per Example 3 lines 794..796; per AI policy, Claude does not draft this prose}`), `## Sign-off` (Daniel signature line + outside reviewer co-signature line). The "knowing what I now know" prose is the ONE prose-style item in the Greenlight document; Claude writes the section header and instructions but NOT the commitment paragraph itself.

    Every file has frontmatter `decisions_referenced` listing the D-IDs synthesized. Every file ends with `## Cross-references` linking to consumed research/CONTEXT.md sources.
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/15-risk-register.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/16-capability-gap-matrix.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/17-tools-pipeline-ratification.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/process-pack/20-sustainable-pace-cadence.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/process-pack/21-year3wall-tripwires.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/process-pack/22-personazero-playtest-ritual.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/process-pack/23-why-play-at-hour-200.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/24-time-model-lock.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/25-stack-ratification.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/26-architecture-ratification.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/validation-pack/27-MARKET-EVIDENCE.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md"</automated>
  </verify>
  <acceptance_criteria>
    - All 12 files exist at the paths above.
    - Risk register has ≥12 rows: `grep -cE '^\| R-[0-9]+ \|' .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/15-risk-register.md` returns ≥12.
    - Risk register references PITFALLS.md or its pitfalls: `grep -cE '(PITFALLS|Pitfall [0-9])' .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/15-risk-register.md` returns ≥4 (the four killers).
    - Capability matrix has ≥15 skill rows: `grep -cE '^\| [A-Za-z]' .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/16-capability-gap-matrix.md` returns ≥15.
    - Tools/Pipeline ratification references STACK.md: `grep -cF 'research/STACK.md' .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/17-tools-pipeline-ratification.md` returns ≥1.
    - Sustainable-pace doc references all 8 D-SUST decisions: `grep -cE 'D-SUST-0[1-8]' .planning/phases/01-foundations-vision-lock/deliverables/process-pack/20-sustainable-pace-cadence.md` returns ≥8 (each D-SUST-01..08 appears at least once).
    - Sustainable-pace doc surfaces the HEALTH-04 amendment: `grep -F 'HEALTH-04' .planning/phases/01-foundations-vision-lock/deliverables/process-pack/20-sustainable-pace-cadence.md` returns ≥1, and `grep -F '~25 hours/week' .planning/phases/01-foundations-vision-lock/deliverables/process-pack/20-sustainable-pace-cadence.md` returns ≥1.
    - Year-3-Wall doc references all 7 D-WALL decisions: `grep -cE 'D-WALL-0[1-7]' .planning/phases/01-foundations-vision-lock/deliverables/process-pack/21-year3wall-tripwires.md` returns ≥7.
    - Year-3-Wall doc has cascade-checkpoint table with 4 rows m6/m12/m24/m36: `grep -cE '\| m(6|12|24|36) \|' .planning/phases/01-foundations-vision-lock/deliverables/process-pack/21-year3wall-tripwires.md` returns ≥4.
    - Persona-zero ritual doc references HEALTH-05: `grep -F 'HEALTH-05' .planning/phases/01-foundations-vision-lock/deliverables/process-pack/22-personazero-playtest-ritual.md` returns ≥1.
    - Why-play-at-hour-200 names all four engines: `grep -cE '(state-tagged authored dialogue|3\+ active narrative threads|seasonal recurrence|player-driven creative goals|player-driven goals)' .planning/phases/01-foundations-vision-lock/deliverables/process-pack/23-why-play-at-hour-200.md` returns ≥4.
    - Time-model lock references all 5 D-TIME decisions: `grep -cE 'D-TIME-0[1-5]' .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/24-time-model-lock.md` returns ≥5.
    - Stack ratification references STACK.md and lists ≥10 locked items: `grep -F 'research/STACK.md' .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/25-stack-ratification.md` returns ≥1, and `grep -cE '^\| ' .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/25-stack-ratification.md` returns ≥10.
    - Architecture ratification lists sprite-premise interpretation amendments for all flagged REQ IDs: `grep -cE '(HOME-0[1-5]|CRAFT-0[1-7]|COMP-0[1-4]|CTRL-01|NPC-09|NPC-06|ROM-0[12])' .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/26-architecture-ratification.md` returns ≥7 unique IDs.
    - MARKET-EVIDENCE.md references MKTG-06 and all D-MKTG-01..06: `grep -F 'MKTG-06' .planning/phases/01-foundations-vision-lock/deliverables/validation-pack/27-MARKET-EVIDENCE.md` returns ≥1, and `grep -cE 'D-MKTG-0[1-6]' .planning/phases/01-foundations-vision-lock/deliverables/validation-pack/27-MARKET-EVIDENCE.md` returns ≥6.
    - MARKET-EVIDENCE.md has empty verdict slot: `grep -F 'Confirmed | Refined | Rejected' .planning/phases/01-foundations-vision-lock/deliverables/validation-pack/27-MARKET-EVIDENCE.md` returns ≥1.
    - Greenlight has all required sections: `grep -cE '^## (Vision lock confirmation|Decisions ratified|Year-3-Wall tripwire criteria|Knowing-what-I-now-know commitment|Sign-off)' .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md` returns 5.
    - Greenlight references D-VISION-01..08: `grep -cE 'D-VISION-0[1-8]' .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md` returns ≥8.
    - **AI-policy compliance — no creative prose generated:** `grep -iE "(once upon a time|in the village|the sprite drifts gently|named [A-Z][a-z]+|magic of [A-Z][a-z]+)" .planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/process-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/validation-pack/*.md .planning/phases/01-foundations-vision-lock/deliverables/greenlight/*.md` returns 0 matches.
  </acceptance_criteria>
  <done>12 synthesis-allowed scaffolds committed; bodies populated where research / locked decisions allow; empty cells flagged for downstream plans (01-06 thresholds, 01-07 MKTG data, 01-08 Greenlight sign-off).</done>
</task>

</tasks>

<verification>
After all 3 tasks complete:
1. **All 28 deliverables present:** `ls .planning/phases/01-foundations-vision-lock/deliverables/**/*.md | wc -l` returns ≥28.
2. **Both planning-root logs present:** `test -f .planning/SCOPE.md && test -f .planning/slice-debt.md`.
3. **Playtest-log dir present:** `test -d .planning/playtest-log`.
4. **AI-policy compliance scan (CRITICAL — no Claude-generated creative content):** Run a final scan across all scaffold files for forbidden in-world content patterns. Manual review by Daniel after commit per VALIDATION.md sampling rate (per task commit).
5. **Decision-ID coverage:** Every CONTEXT.md decision (D-VISION/D-SCOPE/D-TIME/D-WALL/D-MKTG/D-SUST/D-WORLD/D-STYLE/D-PREMISE) appears in at least one scaffold's `decisions_referenced` frontmatter or body. Cross-check by grepping for each prefix across the deliverables/ tree.
6. **Plan-structure validation:** `node "$HOME/.claude/get-shit-done/bin/gsd-tools.cjs" verify plan-structure ".planning/phases/01-foundations-vision-lock/01-00-deliverable-scaffolding-PLAN.md"` returns valid.
</verification>

<success_criteria>
- All 28 deliverable skeleton files committed at correct paths under `.planning/phases/01-foundations-vision-lock/deliverables/{pack}/`.
- `.planning/SCOPE.md` committed with 2 inaugural entries (2026-05-09 Phase 1 scope expansion + 2026-05-09 two-milestone roadmap structure).
- `.planning/slice-debt.md` committed with format spec + 1 worked example clearly labeled as illustrative.
- `.planning/playtest-log/.gitkeep` committed; directory exists for HEALTH-05 sessions.
- Synthesis-allowed deliverables (15, 16, 17, 20, 21 protocol-only, 22, 23 four-engine, 24, 25, 26, 27 methodology-only, 28 structure) have populated bodies citing research files + locked decisions.
- Creative-content deliverables (01, 02, 03, 04, 05, 06 (table only), 07 (REQ-IDs only), 08 (table only), 09, 10, 11, 12, 13, 14) have ONLY TOC + section headers + Daniel-authoring placeholders + AI-policy banner.
- Zero AI-policy violations: no Claude-generated names, in-world prose, dialogue, palettes, voice samples, or marketing copy in any scaffold.
- Plan 01-00 commit unblocks all subsequent Phase 1 plans (01-01 through 01-08).
</success_criteria>

<output>
After completion, create `.planning/phases/01-foundations-vision-lock/01-00-deliverable-scaffolding-SUMMARY.md` listing all 28 created files + the 2 root-level files + playtest-log dir, with a frontmatter `wave_0_complete: true` flag for downstream consumers to verify.
</output>
