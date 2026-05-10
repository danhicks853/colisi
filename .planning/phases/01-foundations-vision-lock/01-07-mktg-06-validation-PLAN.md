---
phase: 01-foundations-vision-lock
plan: 07
type: execute
wave: 2
depends_on:
  - 01-00-deliverable-scaffolding
files_modified:
  - .planning/phases/01-foundations-vision-lock/deliverables/validation-pack/27-MARKET-EVIDENCE.md
  - .planning/MARKET-EVIDENCE.md
  - .planning/phases/01-foundations-vision-lock/research/mktg-06-game-list.md
  - .planning/phases/01-foundations-vision-lock/research/mktg-06-survey-questions.md
  - .planning/phases/01-foundations-vision-lock/research/mktg-06-review-classification/.gitkeep
autonomous: false
requirements:
  - MKTG-06

must_haves:
  truths:
    - "Hybrid game list (10-20 games) selected per D-MKTG-01 selection rule + Daniel curation; rationale per dropped or added game logged"
    - "Negative+mixed Steam reviews classified for every game per D-MKTG-02: LLM-classified into complaint categories + Daniel verifies 100% of tags"
    - "Google Form survey published with ~10 neutrally-worded questions; Claude proposed wording, Daniel critiqued for leading-question bias before distribution"
    - "Survey distributed per D-MKTG-03 to r/CozyGamers + 2-3 cozy Discords + cozy social tags; ≥50 responses collected"
    - "MARKET-EVIDENCE.md final with explicit Confirmed | Refined | Rejected verdict per D-MKTG-04 triangulation rubric; supporting tables filled; if Rejected or Refined-significantly, roadmap-revision impact note present and ROADMAP.md amendment queued before Phase 2"
    - "MARKET-EVIDENCE.md moves from deliverables/validation-pack/ to .planning/MARKET-EVIDENCE.md (live document at planning root per VALIDATION.md sign-off)"
  artifacts:
    - path: ".planning/phases/01-foundations-vision-lock/research/mktg-06-game-list.md"
      provides: "Daniel-curated 10-20 game list with selection rule applied + per-game inclusion rationale"
    - path: ".planning/phases/01-foundations-vision-lock/research/mktg-06-survey-questions.md"
      provides: "~10 survey questions; Claude-drafted neutral wording + Daniel critique"
    - path: ".planning/phases/01-foundations-vision-lock/research/mktg-06-review-classification/"
      provides: "Per-game classification working dirs (LLM raw output + Daniel verification logs)"
    - path: ".planning/MARKET-EVIDENCE.md"
      provides: "Final MKTG-06 verdict at planning root; gates external marketing copy decisions"
      contains: "Verdict:"
  key_links:
    - from: "27-MARKET-EVIDENCE.md verdict section"
      to: ".planning/ROADMAP.md (if Rejected or Refined-significantly)"
      via: "Verdict triggers ROADMAP amendment before Phase 2 entry"
      pattern: "(Rejected|Refined-significantly|roadmap revision)"
    - from: "MARKET-EVIDENCE.md game list table"
      to: "research/mktg-06-game-list.md"
      via: "Final game list is canonical source for review-mining + survey-question framing"
      pattern: "(Stardew|Spiritfarer|Coffee Talk|Coral Island)"
    - from: "MARKET-EVIDENCE.md survey results"
      to: "Daniel survey distribution log"
      via: "Distribution log captures channel + permission + response count"
      pattern: "(r/CozyGamers|Discord|response count)"
---

<objective>
Execute the MKTG-06 demographic validation methodology end-to-end. Per CONTEXT.md D-MKTG-01..06 + ROADMAP success criterion 27, this plan produces the explicit Confirmed | Refined | Rejected verdict that gates external marketing copy decisions. If Rejected or Significantly Refined, ROADMAP.md is amended before Phase 2 entry.

This is the longest-running Phase 1 plan due to external dependencies: subreddit moderator approval, Discord moderator approval, ≥50 survey responses (response collection takes weeks). It runs in Wave 2 in parallel with Vision Pack and Risk-Capability-Process so the long-tail collection time doesn't block the rest of Phase 1.

Purpose: Empirically validate (or refine, or reject) the persona-zero-anchored "underserved deep cozy enjoyer demographic" thesis BEFORE Phase 2 commits to infrastructure setup. n=1 persona research is the design anchor; this is the market evidence that moves the thesis from hypothesis to defensible.

Output: Final MARKET-EVIDENCE.md at .planning/ root with verdict + supporting tables + 3 working notes in research/.

**AI-policy boundary:** Steam review LLM-classification (D-MKTG-02) is research-synthesis-allowed BECAUSE Daniel verifies 100% of LLM tags before they enter the verdict. Survey-question drafting is allowed (Claude drafts neutral wording; Daniel critiques for leading-question bias — copy-edit, not creative). Verdict authoring is Daniel-only (the verdict statement is a load-bearing decision, not a synthesis).

Per `01-RESEARCH.md` Pitfall 4 (MKTG-06 confirmation bias): the discipline is to honor the pre-committed rubric (D-MKTG-04) before data is in. Don't bias game selection. Don't bias survey wording. Don't explain away critical reviews. Outside reviewer reads the final MARKET-EVIDENCE.md before verdict is final (cross-link to D-WALL-05 designated reviewer in plan 01-06).
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/REQUIREMENTS.md
@.planning/ROADMAP.md
@.planning/phases/01-foundations-vision-lock/01-CONTEXT.md
@.planning/phases/01-foundations-vision-lock/01-RESEARCH.md
@.planning/phases/01-foundations-vision-lock/deliverables/validation-pack/27-MARKET-EVIDENCE.md
@.planning/research/PERSONA.md
@CLAUDE.md
@PHILOSOPHY.md
</context>

<tasks>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 1: Build game list (D-MKTG-01) + draft survey questions (D-MKTG-03 / Claude drafts neutral; Daniel critiques) + Daniel pursues distribution moderator approvals</name>
  <files>
    .planning/phases/01-foundations-vision-lock/research/mktg-06-game-list.md,
    .planning/phases/01-foundations-vision-lock/research/mktg-06-survey-questions.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-MKTG-01..06 methodology),
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (Pitfall 4 confirmation bias warnings; environment availability table for distribution channels),
    .planning/research/PERSONA.md (anchor for "deep cozy enjoyer" thesis — read carefully so survey questions test the thesis without leading)
  </read_first>
  <action>
    **Step A — Hybrid game list (D-MKTG-01):**
    Daniel applies the selection rule first: query Steam tag "Cozy" + "Life Sim" or equivalent; sort by review count descending; take top 20.

    Claude can help with the data extraction (Steam tag pages are public; review count is public). Synthesis-allowed.

    Then Daniel curates:
    - Drops obvious mismatches (pure VN, pure city-builder)
    - Adds 2-3 must-haves from persona research: Stardew Valley, Spiritfarer, Coral Island
    - Logs rationale per dropped or added game

    Output to `.planning/phases/01-foundations-vision-lock/research/mktg-06-game-list.md`:
    - Selection rule applied (with date, query, source)
    - Selected list table: `Game | Steam appid | Tag set | Review count (at extraction date) | Inclusion rationale (rule-based / Daniel curated add / Daniel dropped + reason)`
    - Final list count: 10-20 games

    **Per AI policy:** Steam tag query + review count extraction is factual data work — Claude can do this. Game-curation decisions (drops + adds) are Daniel's. **Per Pitfall 4:** Don't let curation drift toward "games my persona would like." Stick to the selection rule.

    **Step B — Survey questions (D-MKTG-03):**
    **Claude drafts ~10 survey questions in neutral wording** (synthesis-allowed — copy-edit drafting is not creative). Output to `.planning/phases/01-foundations-vision-lock/research/mktg-06-survey-questions.md`.

    Coverage areas (Claude proposes question for each, Daniel critiques):
    - Demographics (age range / time playing cozy games / hours/week available for gaming)
    - Game preference patterns (which cozy games have you played; which you bounced off; why)
    - Specific anti-feature reactions (time pressure / difficulty walls / endgame cliffs / VN-format / required-multiplayer — each as a discrete question)
    - Specific positive-feature attractors (relationships / decoration / crafting / world exploration)
    - Open-ended ("describe your ideal cozy game in 1-2 sentences")
    - Permission to follow up (consent for future contact)

    **Critical anti-bias discipline (per Pitfall 4):**
    - Questions must NOT presuppose the thesis ("how much do you dislike time pressure?" is leading). Use neutral framings: "When you've stopped playing a cozy game, which of these reasons applied? (multi-select)".
    - Avoid double-barreled questions ("Do you prefer X and Y?").
    - Avoid leading positive examples ("Would you like a game like Colisi where...").
    - Open-ended questions outnumber Likert questions for richer signal.

    **Daniel critiques every question for leading-question bias** before distribution. Daniel may rewrite Claude's drafts. Critique pass logged inline (`[Claude draft → Daniel revision: {revised wording}; rationale: {leading-bias reason}]`).

    **Step C — Distribution prep (Daniel-only):**
    Daniel pursues moderator approvals during this task's runtime (per RESEARCH.md "Missing dependencies" — long-tail external work):
    - Post permission inquiry to r/CozyGamers (per subreddit rules)
    - Identify 2-3 cozy gaming Discord servers + DM moderators for distribution permission
    - Verify Daniel's Reddit account standing
    - Identify cozy gaming Twitter/Bluesky/Mastodon tags for passive distribution

    Distribution log entry (in mktg-06-survey-questions.md): per channel, record permission status (Pending / Approved / Denied) + date.
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/research/mktg-06-game-list.md" && test -f ".planning/phases/01-foundations-vision-lock/research/mktg-06-survey-questions.md"</automated>
  </verify>
  <acceptance_criteria>
    - Game list file exists with selection rule documented: `grep -F 'Selection rule' .planning/phases/01-foundations-vision-lock/research/mktg-06-game-list.md` returns ≥1.
    - Game list has 10-20 game rows: `grep -cE '^\| [A-Za-z]' .planning/phases/01-foundations-vision-lock/research/mktg-06-game-list.md` returns ≥10 (table-row count for Game rows; allow up to 20).
    - Game list includes the 3 must-haves per D-MKTG-01: `grep -ciE '(Stardew|Spiritfarer|Coral Island)' .planning/phases/01-foundations-vision-lock/research/mktg-06-game-list.md` returns ≥3.
    - Each row has inclusion rationale: `grep -ciE '(rule-based|curated|dropped)' .planning/phases/01-foundations-vision-lock/research/mktg-06-game-list.md` returns ≥10.
    - Survey questions file has ~10 questions: `grep -cE '^### Q[0-9]+' .planning/phases/01-foundations-vision-lock/research/mktg-06-survey-questions.md` returns ≥8 and ≤12.
    - Survey questions cover required areas (demographics + game prefs + anti-feature reactions + positive-feature attractors + open-ended): `grep -ciE '(demographics|cozy games.*played|time pressure|difficulty|endgame|relationships|decoration|crafting|describe your ideal)' .planning/phases/01-foundations-vision-lock/research/mktg-06-survey-questions.md` returns ≥6 distinct keywords.
    - Distribution log section present: `grep -F 'Distribution log' .planning/phases/01-foundations-vision-lock/research/mktg-06-survey-questions.md` returns ≥1.
    - Daniel critique pass logged for at least 2 questions: `grep -cE '\[(Claude draft|Daniel revision|leading-bias)' .planning/phases/01-foundations-vision-lock/research/mktg-06-survey-questions.md` returns ≥2.
  </acceptance_criteria>
  <done>Game list 10-20 games selected per hybrid rule + Daniel curated; ~10 neutrally-worded survey questions drafted by Claude + Daniel-critiqued; distribution moderator approvals pursued.</done>
</task>

<task type="auto" tdd="false">
  <name>Task 2: Steam review mining + LLM classification (D-MKTG-02) — Claude classifies, Daniel verifies 100% of tags</name>
  <files>
    .planning/phases/01-foundations-vision-lock/research/mktg-06-review-classification/
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/research/mktg-06-game-list.md (Daniel-curated 10-20 game list — input to this task),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-MKTG-02 methodology + Daniel verifies 100% of LLM tags),
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (Pitfall 4 confirmation bias; Steam Web API endpoint reference; environment availability for Steam API)
  </read_first>
  <action>
    For each game in `mktg-06-game-list.md`:

    **Step A — Claude/Daniel scrape negative + mixed reviews via Steam Web API:**
    - Endpoint: `https://store.steampowered.com/appreviews/{appid}?json=1&filter=recent&language=english&review_type=negative&num_per_page=100` (also `review_type=all` for mixed scoring; tune as needed).
    - Save raw JSON per game to `mktg-06-review-classification/{appid}-{game-slug}-reviews.json`.
    - Target: ~50-100 negative + mixed reviews per game (for 10-20 games × ~75 = 750-1500 reviews total).

    **Step B — Claude classifies each review into complaint categories** (LLM-assisted classification; synthesis-allowed):
    Categories (per CONTEXT.md D-MKTG-02): time-pressure / difficulty / endgame / VN-style / required-multiplayer / other.

    Claude reads each review, assigns 0+ category tags, extracts 1-2 quote snippets per tag. Output to `mktg-06-review-classification/{appid}-{game-slug}-classified.md`:
    - Markdown table per game: `Review ID | Date | Helpful count | Categories tagged | Quote snippets | Verification status (UNVERIFIED|VERIFIED|REJECTED)`
    - All rows start UNVERIFIED.

    **Step C — Daniel verifies 100% of LLM tags** (per D-MKTG-02 — this is the hard requirement):
    For every classified row, Daniel reads the review snippet and:
    - VERIFIED — Claude's tag is correct
    - REJECTED — Claude's tag is wrong; Daniel writes correct tag
    Daniel updates the Verification status column row-by-row. ALL rows must reach VERIFIED or REJECTED+corrected; no UNVERIFIED rows enter the final tally.

    **Per Pitfall 4 anti-bias discipline:** Daniel cannot batch-verify ("looks fine, all VERIFIED"); Daniel must read each quote. The LLM classification is BASELINE that's harder to bias than self-classification; Daniel's verification is the human check that prevents both Claude bias and Daniel bias from compounding.

    **Step D — Per-game tally:**
    For each game, count VERIFIED+REJECTED+corrected rows per category. Output to `mktg-06-review-classification/_summary-tallies.md`:
    - Table: `Game | Review count | Time-pressure tags | Difficulty tags | Endgame tags | VN-style tags | Required-multiplayer tags | Other tags`
    - Tag rate per game: tags ÷ reviews.

    These tallies feed the MARKET-EVIDENCE.md analysis section in Task 3.

    **Per AI policy:** LLM classification is research-synthesis use (allowed because Daniel verifies every tag). Steam API extraction is factual data work. Tag interpretation is Claude's draft + Daniel's verification. **No marketing copy generated; no editorial claims about what the data "shows."** Editorial claims are Daniel-only in the verdict.
  </action>
  <verify>
    <automated>test -d ".planning/phases/01-foundations-vision-lock/research/mktg-06-review-classification" && ls .planning/phases/01-foundations-vision-lock/research/mktg-06-review-classification/*-classified.md 2>/dev/null | wc -l</automated>
  </verify>
  <acceptance_criteria>
    - Per-game classification files exist (count matches game list count): `ls .planning/phases/01-foundations-vision-lock/research/mktg-06-review-classification/*-classified.md | wc -l` returns ≥10.
    - Summary tallies file exists: `test -f .planning/phases/01-foundations-vision-lock/research/mktg-06-review-classification/_summary-tallies.md`.
    - Tallies file references all 6 complaint categories: `grep -ciE '(time-pressure|difficulty|endgame|VN-style|required-multiplayer|other)' .planning/phases/01-foundations-vision-lock/research/mktg-06-review-classification/_summary-tallies.md` returns ≥6.
    - All classification rows VERIFIED or REJECTED (no UNVERIFIED): `grep -ciF 'UNVERIFIED' .planning/phases/01-foundations-vision-lock/research/mktg-06-review-classification/*-classified.md` returns 0 (across all classification files; Daniel finishes verification before commit).
    - Per-game review count ≥30 (subsample target — full 100 is nice-to-have): manual check by Daniel.
    - Tallies table has 1 row per game in game list: `grep -cE '^\| [A-Za-z]' .planning/phases/01-foundations-vision-lock/research/mktg-06-review-classification/_summary-tallies.md` returns ≥10.
  </acceptance_criteria>
  <done>Per-game review classification complete; 100% of tags Daniel-verified; summary tallies file populated for verdict triangulation.</done>
</task>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 3: Distribute survey + collect ≥50 responses (Daniel) + author final MARKET-EVIDENCE.md verdict (D-MKTG-04 triangulation rubric)</name>
  <authored_by>daniel</authored_by>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/validation-pack/27-MARKET-EVIDENCE.md,
    .planning/MARKET-EVIDENCE.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/validation-pack/27-MARKET-EVIDENCE.md (scaffold from plan 01-00 with methodology populated; result tables empty),
    .planning/phases/01-foundations-vision-lock/research/mktg-06-game-list.md (final game list),
    .planning/phases/01-foundations-vision-lock/research/mktg-06-survey-questions.md (survey questions + distribution log),
    .planning/phases/01-foundations-vision-lock/research/mktg-06-review-classification/_summary-tallies.md (per-game tag tallies),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-MKTG-04 verdict rubric — Confirmed/Refined/Rejected criteria),
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (Pitfall 4 confirmation bias warning),
    .planning/phases/01-foundations-vision-lock/deliverables/process-pack/21-year3wall-tripwires.md (outside reviewer designation — same reviewer reads MARKET-EVIDENCE.md before final verdict per Pitfall 4)
  </read_first>
  <action>
    **Step A — Daniel publishes survey + distributes (Daniel-only):**
    - Build Google Form with the Daniel-finalized survey questions.
    - Distribute per the channels with Approved permission (from Task 1 distribution log):
      - r/CozyGamers post (per subreddit rules)
      - 2-3 cozy Discord servers (per moderator approval)
      - Cozy gaming Twitter/Bluesky/Mastodon tags
    - Track responses; goal ≥50 minimum, 100 ideal.
    - Run distribution for ~2-4 weeks (long-tail collection).

    **Step B — Daniel exports survey results to CSV** + analyzes:
    - Tally: how many respondents cite at least one of (time pressure / difficulty wall / endgame cliff) as a bounce reason?
    - Tally: how many respondents fit the "deep cozy enjoyer" framing (cozy + 1000+ hrs + bounced off comparable for time-pressure reasons)?
    - Open-ended responses: extract themes (Daniel reads all open-ended; can use LLM-assisted thematic clustering with Daniel verification per the same D-MKTG-02 pattern).

    **Step C — Apply triangulation rubric (D-MKTG-04):**
    - **Confirmed** = persona dislikes (time pressure / difficulty wall / endgame cliff) appear in top-5 complaints in ≥7 of the 10-20 mined games AND ≥40% of survey respondents cite at least one
    - **Refined** = appear in 4-6 games OR 25-40% survey → narrative needs adjustment, but thesis core holds
    - **Rejected** = appear in <4 games AND <25% survey → thesis is wrong; ROADMAP.md revisited before Phase 2

    Daniel computes from review tallies + survey data; writes the verdict statement.

    **Step D — Outside reviewer reads MARKET-EVIDENCE.md draft before verdict is final** (per Pitfall 4):
    The same outside reviewer designated in plan 01-06 reads the methodology + data + draft verdict and either confirms or challenges. If challenges → Daniel responds. The outside reviewer's confirmation is the bias-check guardrail.

    **Step E — Final MARKET-EVIDENCE.md authored:**
    Daniel populates the result tables in 27-MARKET-EVIDENCE.md scaffold:
    - Game list table (final list)
    - Per-game complaint tallies (from research/mktg-06-review-classification/_summary-tallies.md)
    - Survey response tally + open-ended thematic clustering
    - Triangulation rubric application
    - **Verdict statement:** explicit Confirmed | Refined | Rejected with supporting bullet points + which rubric criteria fired
    - **Roadmap-revision impact (if Refined or Rejected):** Daniel writes 1 paragraph naming what in ROADMAP.md needs amendment + queues ROADMAP.md amendment for the Phase 1 → Phase 2 transition.

    Daniel signature line: `**Daniel signature:** {YYYY-MM-DD} — verdict signed; outside reviewer co-confirmation: {reviewer name} on {date}`.

    **Step F — Move MARKET-EVIDENCE.md to planning root:**
    Per VALIDATION.md sign-off and HEALTH-01 / MKTG-06 wording ("project tracks"), copy/move the final 27-MARKET-EVIDENCE.md to `.planning/MARKET-EVIDENCE.md`. The deliverables/ scaffold copy stays as the Phase 1 staging location. Both should remain consistent (or use a symlink approach if filesystem supports — for cross-platform Windows + git, a duplicate-with-cross-link-note is safest).

    Add SCOPE.md entry per HEALTH-01:
    `| {YYYY-MM-DD} | Phase 1 | MKTG-06 verdict {Confirmed|Refined|Rejected} | Empirical demographic validation per D-MKTG-04 rubric | {brief rationale} | {Reversibility — verdict is durable; ROADMAP amendment(s) downstream of verdict are reversible} | .planning/MARKET-EVIDENCE.md |`

    **Per AI policy:** Verdict statement is Daniel-only (it's a load-bearing decision affecting roadmap). Survey-result analysis Claude can assist with (factual tallies; thematic clustering with Daniel verification per D-MKTG-02 pattern). Marketing copy from the verdict is NOT authored here — that's Phase 8 work and per CLAUDE.md is Daniel-only.
  </action>
  <verify>
    <automated>test -f ".planning/MARKET-EVIDENCE.md" && grep -E '\*\*Verdict:\*\* (Confirmed|Refined|Rejected)' ".planning/MARKET-EVIDENCE.md"</automated>
  </verify>
  <acceptance_criteria>
    - Final MARKET-EVIDENCE.md exists at planning root: `test -f .planning/MARKET-EVIDENCE.md`.
    - Explicit verdict (one of Confirmed / Refined / Rejected): `grep -cE '\*\*Verdict:\*\* (Confirmed|Refined|Rejected)' .planning/MARKET-EVIDENCE.md` returns ≥1.
    - Survey response count ≥50: `grep -cE '(50|6[0-9]|7[0-9]|8[0-9]|9[0-9]|1[0-9]{2}) responses' .planning/MARKET-EVIDENCE.md` returns ≥1, OR explicit response count ≥50 in a tally section (manual check).
    - Methodology elements all reflected (D-MKTG-01..06): `grep -cE 'D-MKTG-0[1-6]' .planning/MARKET-EVIDENCE.md` returns ≥6.
    - Per-game complaint tally table populated (game list count rows): `grep -cE '^\| [A-Za-z]' .planning/MARKET-EVIDENCE.md` returns ≥30 (mix of game-list rows + survey-tally rows + verdict rows).
    - Outside reviewer confirmation line: `grep -F 'outside reviewer' .planning/MARKET-EVIDENCE.md` returns ≥1, AND a date pattern present.
    - Daniel signature: `grep -F 'Daniel signature:' .planning/MARKET-EVIDENCE.md` returns ≥1.
    - If verdict = Rejected or Refined-significantly: roadmap-revision impact section populated: `grep -ciE '(roadmap revision|ROADMAP.md amendment|Phase 2 entry)' .planning/MARKET-EVIDENCE.md` returns ≥1 in the impact section (only required if verdict ≠ Confirmed).
    - SCOPE.md has entry for MKTG-06 verdict: `grep -F 'MKTG-06 verdict' .planning/SCOPE.md` returns ≥1.
    - Both deliverables/validation-pack/27-MARKET-EVIDENCE.md and .planning/MARKET-EVIDENCE.md present (staging + canonical): `test -f .planning/phases/01-foundations-vision-lock/deliverables/validation-pack/27-MARKET-EVIDENCE.md && test -f .planning/MARKET-EVIDENCE.md`.
  </acceptance_criteria>
  <done>MARKET-EVIDENCE.md final at planning root with explicit verdict + supporting tables; outside reviewer confirmed; SCOPE.md entry logged; if verdict ≠ Confirmed, ROADMAP.md amendment queued for Phase 1 → Phase 2 transition.</done>
</task>

</tasks>

<verification>
After all 3 tasks:
1. **MKTG-06 verdict authored** with explicit Confirmed | Refined | Rejected statement + supporting data tables.
2. **Outside reviewer confirmation** logged (anti-bias check per Pitfall 4).
3. **SCOPE.md entry logged** for the verdict (per HEALTH-01 + PHILOSOPHY.md Amendment Process).
4. **If verdict ≠ Confirmed** — ROADMAP-revision impact section populated; ROADMAP amendment queued for Phase 2 transition.
5. **AI-policy compliance:** All LLM tags Daniel-verified; verdict statement Daniel-only; no marketing copy generated.
</verification>

<success_criteria>
- MARKET-EVIDENCE.md final at .planning/ root with verdict per D-MKTG-04 rubric.
- ROADMAP success criterion 27 satisfied (MKTG-06 demographic validation with verdict).
- MKTG-06 requirement satisfied: thesis empirically tested before any external marketing copy is finalized.
- HEALTH-01 progresses (SCOPE.md entry for verdict + roadmap-revision queue if applicable).
- If verdict = Rejected or Refined: roadmap-revision impact noted; ROADMAP.md amendment queued for Phase 1 → Phase 2 transition (NOT executed in this plan; deferred to /gsd:transition).
</success_criteria>

<output>
After completion, create `.planning/phases/01-foundations-vision-lock/01-07-mktg-06-validation-SUMMARY.md` documenting: 3 task outcomes, final game count, total survey responses, verdict + supporting tally counts, outside reviewer confirmation date, ROADMAP amendment queue status (none / queued for X amendment).
</output>
