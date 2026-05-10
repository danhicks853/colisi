---
phase: 01-foundations-vision-lock
plan: 03
type: execute
wave: 3
depends_on:
  - 01-00-deliverable-scaffolding
  - 01-01-vision-pack
files_modified:
  - .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md
  - .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md
  - .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md
  - .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/08-failure-mode-analysis.md
autonomous: false
requirements:
  - HEALTH-01

must_haves:
  truths:
    - "Core Loops diagram has all three nested loops (moment-to-moment / session / meta) authored from the locked sprite + matchmaking premise (D-VISION-01..08, D-VISION-04)"
    - "Player Journey covers all 5 horizons (5 min / 1 hr / 10 hr / 100 hr / 500 hr) with What player is doing / feeling / system support / failure-mode columns populated"
    - "Pillar × Mechanic matrix has every REQUIREMENTS.md mechanic scored 0-3 against each named pillar; orphan mechanics flagged with rationale (cut OR keep with explicit reason)"
    - "Failure-mode analysis has bounce-signature paragraph for every named pillar"
  artifacts:
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md"
      provides: "Core Loops diagram + trigger list status (locked OR explicitly deferred to Phase 4/5 with rationale per D-TIME-05)"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md"
      provides: "Player Journey 5-horizon table — feeds Hour-200 retention doc (D-SCOPE-23)"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md"
      provides: "Daniel-completed Pillar × Mechanic matrix with 0-3 scores; gates Phase 6 mechanic decisions"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/08-failure-mode-analysis.md"
      provides: "Per-pillar failure-mode bounce signatures — feeds persona-zero playtest watch-list"
  key_links:
    - from: "05-core-loops.md"
      to: "deliverables/decision-lock-pack/24-time-model-lock.md"
      via: "Trigger list resolution (locked OR deferred per D-TIME-05); plan 01-06 picks up trigger-list outcome"
      pattern: "D-TIME-05|trigger list"
    - from: "07-pillar-mechanic-matrix.md"
      to: "deliverables/vision-pack/02-pillars-of-play.md"
      via: "Pillar names from 02 populate matrix columns"
      pattern: "Pillar [1-5]"
    - from: "07-pillar-mechanic-matrix.md"
      to: ".planning/REQUIREMENTS.md"
      via: "Mechanic rows reference REQ-IDs"
      pattern: "(NPC|NARR|COMP|WORLD|CRAFT|HOME|ONB)-[0-9]"
    - from: "08-failure-mode-analysis.md"
      to: "deliverables/vision-pack/02-pillars-of-play.md"
      via: "Each pillar's failure-mode-signature in 02 expands here"
      pattern: "Pillar [1-5]"
---

<objective>
Daniel authors the Loops & Journey Pack — the 4 deliverables that translate the locked premise (D-VISION-01..08) and named pillars (from plan 01-01) into observable game-mechanic structure: core gameplay loops, player-journey horizons, pillar-justified mechanics, pillar-failure signatures.

Purpose: Produces the matrices and diagrams downstream Phase 1 plans + Phase 6 mechanic decisions depend on. Pillar × Mechanic matrix gates Phase 6 — orphan mechanics either get cut or carry explicit pillar rationale.

Output: 4 Daniel-completed Loops & Journey files. Trigger list status decided here (locked from Core Loops Pack OR deferred to Phase 4/5 with rationale per D-TIME-05).

**AI-policy boundary:** Pillar × Mechanic matrix is synthesis-allowed — Claude pre-populated the mechanic column with REQ-IDs in plan 01-00; pillar columns and 0-3 scoring is Daniel's design judgment. Core Loops diagram CONTENT (loop verbs, system names, premise-linked moves) is Daniel-authored. Player Journey CELL CONTENT (what player is doing / feeling) is Daniel-authored. Failure-mode bounce-signature PARAGRAPHS are Daniel-authored. Claude does NOT generate verbs / mechanic names / playtest signatures.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/REQUIREMENTS.md
@.planning/phases/01-foundations-vision-lock/01-CONTEXT.md
@.planning/phases/01-foundations-vision-lock/01-RESEARCH.md
@.planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md
@.planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md
@.planning/research/SUMMARY.md
@.planning/research/ARCHITECTURE.md
@CLAUDE.md
@PHILOSOPHY.md
</context>

<tasks>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 1: Daniel authors Core Loops (D-SCOPE-05) + Player Journey (D-SCOPE-06)</name>
  <authored_by>daniel</authored_by>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md,
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md (scaffold from plan 01-00),
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md (scaffold),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md (just authored — premise anchor),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md (pillar names + design implications feed loop derivation),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-VISION-04 matchmaking puzzle layer; D-TIME-01..05 time-model contract; D-TIME-05 trigger-list resolution),
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (Pattern 6 Player Journey at lines 493..501; nested-loops convention),
    .planning/research/ARCHITECTURE.md (continuous NPC pathing during play implications)
  </read_first>
  <action>
    **05-core-loops.md** — Daniel completes the three nested-loop diagram skeletons:

    1. **Moment-to-moment loop (~30s cycle):** Daniel names 4-5 nodes describing the basic sprite-action cycle (e.g., observe villager → identify cue → manipulate environment → witness reaction → inform next observation). Daniel writes node labels and arrow connector text. Per D-VISION-01..04, the moment-to-moment must reflect sprite-not-walking traversal + matchmaking-via-environmental-manipulation.

    2. **Session loop (~30 min cycle):** Daniel names 4-5 nodes describing what a single play session looks like (e.g., return to active village → review journal of pending matches → execute 2-3 environmental manipulations → meet-cute or near-miss → log outcome → break for save).

    3. **Meta loop (~10 hr+ cycle):** Daniel names 4-5 nodes describing arc-length play (e.g., establish trust with N villagers → unlock matchmaking eligibility → multi-villager pairing arcs → festival recurrence → multiple parallel narrative threads).

    4. **Trigger list (per D-TIME-05):** Daniel decides per the Core Loops output. Options:
       - **Lock now:** Daniel populates the canonical action-trigger list (e.g., rest action / major event completion / zone transition / festival participation) and updates `decision-lock-pack/24-time-model-lock.md` to remove its "pending plan 01-03" status flag.
       - **Defer to Phase 4/5:** Daniel writes a 1-paragraph rationale explaining why the trigger list is genuinely premature pre-slice content, and flags the deferral in 24-time-model-lock.md. Per D-TIME-05 + RESEARCH.md Open Question 6 ("don't force-lock").

    **06-player-journey.md** — Daniel completes the 5-row × 6-column journey table per `01-RESEARCH.md` Pattern 6 (lines 493..501). For each horizon (First 5 min / First hour / Hour 10 / Hour 100 / Hour 500):
    - Yu-kai Chou phase classification (Onboarding / Onboarding→Scaffolding / Scaffolding / Endgame / Endgame)
    - What player is doing (1-2 sentences — Daniel)
    - What player is feeling (1-2 sentences — Daniel; persona-zero anchor)
    - What systems support it (REQ-IDs — Daniel selects from REQUIREMENTS.md; this is partly cited and partly Daniel's design judgment)
    - What goes wrong if pillar X fails (cross-ref to 08-failure-mode-analysis.md and 02-pillars-of-play.md failure-mode-signatures — Daniel)

    The Hour 100 + Hour 500 rows feed the Hour-200 retention doc (D-SCOPE-23) being populated in plan 01-06.

    **Per AI policy:** Loop-node verbs, journey-cell prose, pillar-failure cross-refs are all Daniel-authored. Claude critiques on request (anchor consistency, premise reflection, REQ-ID accuracy) but does NOT generate verbs / prose / cell content.
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md" && grep -cE '^## (Moment-to-moment|Session|Meta)' ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md"</automated>
  </verify>
  <acceptance_criteria>
    - Core Loops doc has all 3 nested-loop sections: `grep -cE '^## (Moment-to-moment|Session|Meta) loop' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md` returns 3.
    - Core Loops doc has trigger list resolution (either locked or explicit deferral): `grep -E '(Trigger list LOCKED|Trigger list DEFERRED to Phase [45])' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md` returns ≥1.
    - Core Loops doc has no remaining `{Daniel authors}` placeholders in node labels: `grep -F '{Daniel authors node labels}' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md` returns 0.
    - Player Journey table has all 5 horizons: `grep -cE '^\| (First 5 min|First hour|Hour 10|Hour 100|Hour 500) \|' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md` returns 5.
    - Player Journey rows reference REQ-IDs (system support column populated): `grep -cE '(NPC-0[1-9]|NARR-0[1-7]|COMP-0[1-4]|WORLD-0[1-7]|CRAFT-0[1-7]|HOME-0[1-5]|ONB-0[1-4]|CTRL-0[1-8])' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md` returns ≥10 (system-support cells populated across rows).
    - Player Journey has no `{Daniel authors}` placeholders remaining: `grep -F '{Daniel authors}' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md` returns 0.
    - Both files reference the locked premise: `grep -ciE '(sprite|matchmaking|D-VISION)' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/06-player-journey.md` returns ≥4 (≥2 per file).
    - If trigger list locked: `decision-lock-pack/24-time-model-lock.md` updated to reference the Core Loops trigger list (cross-link). If deferred: `24-time-model-lock.md` notes deferral with rationale per D-TIME-05.
  </acceptance_criteria>
  <done>Core Loops authored with 3 nested loops + trigger list resolution; Player Journey 5-horizon table populated; both files anchored on locked premise.</done>
</task>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 2: Daniel completes Pillar × Mechanic matrix (D-SCOPE-07) + Failure-mode analysis (D-SCOPE-08)</name>
  <authored_by>daniel</authored_by>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md,
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/08-failure-mode-analysis.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md (scaffold from plan 01-00 — REQ-IDs already in mechanic column; pillar columns empty),
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/08-failure-mode-analysis.md (scaffold),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md (pillar names + each pillar's "Mechanics this pillar justifies" + "Failure-mode signature" sections feed both files),
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md (which mechanics actually appear in the loops?),
    .planning/REQUIREMENTS.md (full REQ-ID list — orphan check),
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (Pattern 3 Pillar × Mechanic at lines 433..445 — scoring convention 0-3),
    .planning/SCOPE.md (orphan mechanics get logged here if cut)
  </read_first>
  <action>
    **07-pillar-mechanic-matrix.md** — Daniel populates the matrix:
    - Pillar columns: rename `Pillar 1`..`Pillar N` headers to match the pillar names from `02-pillars-of-play.md` (factual rename).
    - For every mechanic row (REQ-ID): score 0-3 in each pillar column.
      - 0 = irrelevant to this pillar
      - 1 = weak / indirect support
      - 2 = solid contribution
      - 3 = mechanic is core to this pillar
    - Justification column: 1-2 sentences per row explaining the score (Daniel writes — design judgment, not citation).
    - **Orphan mechanic check:** any REQ-ID with all-zero row across all pillars is flagged ORPHAN. For each orphan, Daniel decides:
      - **Cut from v1:** add SCOPE.md entry (per HEALTH-01) explaining the cut + which REQ to remove from REQUIREMENTS.md (deferred to Phase 1 → Phase 2 transition amendment).
      - **Keep with explicit rationale:** add a "rationale to keep" cell in the orphan-flag table (e.g., "WORLD-05 = no time pressure — listed as a NON-mechanic constraint, not a positive mechanic; pillar-orthogonal but load-bearing").

    **08-failure-mode-analysis.md** — Daniel populates the per-pillar bounce-signature table:
    - One row per pillar (matches 02-pillars-of-play.md count).
    - Bounce signature: 1 paragraph per pillar describing what failing this pillar looks like in playtest (specific, observable).
    - Early-warning leading indicator: what would Daniel notice BEFORE the bounce signature manifests? (e.g., persona-zero loses focus during a matchmaking observation phase = early sign of "matchmaking puzzle layer not legible enough").
    - Mitigation if signature appears: what does Daniel do? (e.g., add UI affordance / re-author dialogue cue / refactor system).

    Cross-references: each pillar in `02-pillars-of-play.md` has a `**Failure-mode signature:**` field that points to this file. Daniel should ensure the signatures HERE expand on what's in 02 (not duplicate it).

    **Per AI policy:** All scoring is Daniel's design judgment. Claude can verify orphan-flag completeness (every all-zero row is flagged) and verify pillar-name consistency between 07 and 02 (factual cross-reference checks). Claude does NOT score, does NOT write justification prose, does NOT write bounce-signature paragraphs.
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md" && test -f ".planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/08-failure-mode-analysis.md"</automated>
  </verify>
  <acceptance_criteria>
    - Pillar × Mechanic matrix has scoring populated (no all-empty pillar columns): `grep -cE '\| [0-3] \|' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md` returns ≥30 (~10+ mechanics × 3+ pillars).
    - Matrix references all REQ-ID prefixes from REQUIREMENTS.md: `grep -cE '(NPC|NARR|COMP|WORLD|CRAFT|HOME|ONB|CTRL|SAVE|UI)-[0-9]' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md` returns ≥20.
    - Orphan mechanics handled (either flagged + rationale, or routed to SCOPE.md cut log): `grep -E '(ORPHAN|orphan)' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md` returns ≥1 (the orphan section header at minimum, even if no orphans found — the section confirms the check happened).
    - Failure-mode analysis has one row per pillar: row count matches pillar count from 02-pillars-of-play.md (manual verification by Daniel; no auto check possible without parsing both files).
    - Failure-mode analysis has bounce-signature + early-warning + mitigation columns populated for all pillars: `grep -cE '(bounce|signature)' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/08-failure-mode-analysis.md` returns ≥3.
    - No `{Daniel authors}` placeholders in either file: `grep -F '{Daniel authors}' .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/08-failure-mode-analysis.md` returns 0.
    - If orphan mechanics were cut, SCOPE.md has a logged entry: `grep -F 'orphan mechanic' .planning/SCOPE.md` returns ≥1 (only required IF orphans were cut; manual check by Daniel).
  </acceptance_criteria>
  <done>Pillar × Mechanic matrix scored with orphan mechanics handled; Failure-mode analysis bounce signatures + early warnings + mitigations populated per pillar.</done>
</task>

</tasks>

<verification>
After both tasks:
1. **All 4 Loops & Journey files Daniel-authored** (no remaining `{Daniel authors}` placeholders).
2. **Trigger list status decided** in 05-core-loops.md (locked or deferred with rationale per D-TIME-05) AND propagated to 24-time-model-lock.md.
3. **Pillar consistency** between 02 / 07 / 08 (manual check by Daniel — same pillar count and names).
4. **Orphan mechanics handled** — either kept with rationale or cut with SCOPE.md log entry.
</verification>

<success_criteria>
- 4 Daniel-authored Loops & Journey files committed.
- ROADMAP success criteria 5, 6, 7, 8 satisfied.
- Pillar × Mechanic matrix gates Phase 6 mechanic decisions (live document; updated as pillars evolve).
- Trigger list resolution propagated to Time-model lock doc (plan 01-06 picks this up).
- Hour 100 + Hour 500 player journey rows feed Hour-200 retention doc in plan 01-06.
</success_criteria>

<output>
After completion, create `.planning/phases/01-foundations-vision-lock/01-03-loops-journey-SUMMARY.md` documenting: 4 file outcomes, trigger list status (locked or deferred with rationale), orphan mechanics found and how handled (cut with SCOPE.md ref OR kept with rationale).
</output>
