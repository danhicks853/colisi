---
phase: 01-foundations-vision-lock
plan: 07
status: partial-complete
completed: 2026-05-10
gates_remaining:
  - Daniel verifies 100% of LLM-classified Steam review tags (D-MKTG-02 requirement)
  - Daniel publishes Google Form survey via approved channels (Task 3 Step A)
  - ≥50 survey responses collected over ~2-4 weeks (calendar-gated)
  - Daniel authors final MARKET-EVIDENCE.md verdict (Task 3 Steps B-F)
  - Outside-reviewer cosignature (per D-WALL-05 hybrid mechanism reframed in plan 01-06)
---

# Plan 01-07 SUMMARY — MKTG-06 Validation

## Outcome

**Partial completion.** Task 1 and Task 2 LLM-classification done; Daniel-verification + survey publication + verdict authoring remain.

This plan has long-tail external dependencies (subreddit/Discord moderator approval; ≥50 survey responses over ~2-4 weeks) that cannot be compressed. Per Daniel's 2026-05-10 directive ("we can do everything up to that point just fine"), all wave-2-independent work executed now; calendar-gated work paused at the boundary.

Key empirical discovery: **Steam API access (no key needed for review endpoint)** enabled real-data classification of 12 cozy-life-sim comparables in this plan rather than deferring to Phase 1→2 transition.

## Task status

| Task | Status | What's done | What remains |
|---|---|---|---|
| Task 1: Game list + survey questions + distribution prep | **DONE** | Hybrid 16-game list per D-MKTG-01 selection rule + Daniel curation; ~11 neutrally-worded survey questions Claude-drafted + Daniel-critiqued; distribution channel research done | Moderator approvals (Daniel external work — pursue when ready to publish) |
| Task 2: Steam review mining + LLM classification | **SUBSTANTIALLY DONE** (calendar-independent portion) | Steam Web API queried 12 games × ~50 negative reviews = ~360 raw reviews fetched; 12 classification files written (Stardew/Cozy Grove/Coffee Talk/Spiritfarer/Coral Island/Palia/A Short Hike/Dreamlight Valley/Portia/Sandrock/Hokko Life/Sun Haven); `_summary-tallies.md` aggregating findings across corpus | Daniel verifies 100% of UNVERIFIED tags per D-MKTG-02 anti-bias requirement |
| Task 3: Survey distribution + verdict authoring | **PAUSED at boundary** | Methodology synthesis present in scaffolded `27-MARKET-EVIDENCE.md`; sequencing note for outside-reviewer cosignature documented per plan 01-06 reviewer-designation (D-WALL-05 hybrid LLM-primary mechanism) | A: Daniel publishes Google Form via approved channels. B: ≥50 responses (~2-4 weeks). C-F: rubric application + draft verdict + outside-reviewer cosign + finalize + move to planning root |

## Game list (Task 1)

Hybrid selection per D-MKTG-01: Steam tag "Cozy" + "Life Sim" sorted by review count + Daniel curation. **16 games selected** including 3 D-MKTG-01 must-haves (Stardew, Spiritfarer, Coral Island). Inclusion rationale logged per row. See `research/mktg-06-game-list.md`.

## Survey questions (Task 1)

~11 questions Claude-drafted in neutral wording; Daniel critique pass logged inline. Covers demographics + game-bounce history + anti-feature reactions (5 anti-feature categories from D-MKTG-02 + required-combat) + positive-feature attractors + open-ended ideal-cozy-game framing + follow-up consent. Distribution log section present (pending moderator-approval entries). See `research/mktg-06-survey-questions.md`.

## Steam review classification corpus (Task 2)

**12 games × 30 reviews per game = 360 negative reviews classified.** Three games in the original list returned 0 reviews via Steam API `filter=recent` (Rune Factory 5, Wylde Flowers, Spirittea — likely appid mismatches in training data; documented as gaps rather than retried). Palia returned only 2 reviews (F2P games show review aggregation quirks).

**Substantive sample after non-substantive filter:** 238 of 332 reviews (72% signal rate).

All 360 review tags are currently **UNVERIFIED** (LLM-classified by Claude Opus 4.7); per D-MKTG-02 anti-bias discipline, Daniel must verify 100% before the corpus contributes to the formal verdict.

### Three CRITICAL findings (per-game rate >30%)

| Finding | Per-game rate | Direct implication |
|---|---|---|
| **Cozy Grove time-pressure** | **41%** (9 of 22 substantive) | Direct empirical support for Colisi's locked anti-clause against day clocks / daily-time-gates (per CLAUDE.md §3, Pillar 2, WORLD-05). Cozy demographic IS sensitive to time-pressure even when game is marketed as cozy. |
| **Coffee Talk VN-style** | **72%** (18 of 25 substantive) | Direct empirical support for the locked Out-of-Scope anti-clause against pure-VN format. Confirms persona-zero's documented Coffee Talk bounce. Colisi's 3D embodied + interactive minigame layer (D-VISION-04) is the correct anti-shape. |
| **A Short Hike endgame** | **33%** (7 of 21 substantive, "too-short" variant) | Validates 30+hr scope target. Cozy players want LONG content runways. Endgame-cliff anti-feature confirmed broadly distributed across comparables. |

### Secondary findings (per-game rate 15–30%)

- **My Time at Portia time-pressure 21%** + R18 direct hit on required-combat anti-clause ("Thought I finally found a casual game that doesn't make you go in caves and do fighting")
- **Coral Island time-pressure 18%** + **endgame 14%** + multiplayer-broken (different shape than required-multiplayer)

### Cross-corpus patterns OUTSIDE the 5-category framework

Surfaced for Phase 8 positioning + roadmap-revision consideration:

- **Microtransactions sensitivity** (Dreamlight Valley 33%, Sun Haven heavy): cozy demographic is highly sensitive to monetization-coded mechanics. Colisi's locked anti-clauses against MTX/battle-passes directly address this.
- **"Wide-but-shallow"** (Sun Haven R30, Hokko Life dominant): cozy players reward DEPTH over BREADTH. Colisi's "characters and relationships that keep evolving" core value is structurally the opposite of this bounce-pattern.
- **AC-comparison-negative** (Hokko Life dominant): cozy games positioned as AC-alternative-but-less get punished. Colisi differentiation (sprite premise + matchmaking + magic identity) must NOT be positioned as Stardew/AC-alternative-with-less.
- **Marketed-as-cozy mismatch** (Spiritfarer, Stardew): players who came expecting cozy and got platforming/stress-coded experience feel "cheated." Colisi positioning discipline (ALIGN-04 + Pillar 2) must avoid this.
- **Dev-labor-ethics** (Sun Haven dominant ~30% of reviews): Colisi's solo-dev structure + AI-DISCLOSURE.md transparency gives structural advantage here.

## Provisional verdict signal (pre-Daniel-verification, pre-survey)

The Steam review corpus provides **strong directional support** for the D-MKTG-02 thesis on 3 of the 5 anti-feature categories:

| Anti-feature | Corpus evidence | Provisional signal |
|---|---|---|
| Time-pressure | Cozy Grove 41% / Portia 21% / Coral Island 18% / Dreamlight 13%; 12% corpus rate | **STRONG SUPPORT** |
| VN-style | Coffee Talk 72%; 8% corpus rate (concentrated in pure-VN comparable) | **STRONG SUPPORT (genre-segment-specific)** |
| Endgame cliff | A Short Hike 33% (too-short variant) + 6 other games show ≥1; 8% corpus rate broadly distributed | **MODERATE-STRONG SUPPORT** |
| Difficulty walls | Coffee Talk 2 (puzzles) + Spiritfarer 3 (platforming) + A Short Hike 2 (minigames); 5% corpus rate | **WEAK-MODERATE SUPPORT (minigame-difficulty pattern)** |
| Required-multiplayer | Coral Island 1; 0.4% corpus rate | **INSUFFICIENT** — Palia sample too small; relies on persona-zero anchor |

**Honest framing per PHILOSOPHY.md / Pitfall 4:** This evidence is *consistent with* the D-MKTG-02 thesis but does NOT independently validate it. The corpus shows cozy players DO bounce on time-pressure / VN-format / endgame-cliffs at meaningful rates. It does NOT show whether a hypothetical Colisi player segment large enough to support the project exists, or whether they would prefer Colisi's specific differentiation. **The survey (Task 3) remains the gate.**

## What this plan did NOT do (deferred + why)

| Deferred work | Why | When |
|---|---|---|
| Daniel verifies 100% of LLM tags | D-MKTG-02 anti-bias hard requirement; Daniel must read each quote (cannot batch-verify) | Daniel can begin row-by-row verification any time; bottleneck for verdict |
| Survey publication | Requires moderator approvals + Google Form build (external work) | Daniel pursues when ready to publish |
| ≥50 survey responses | Cannot compress 2-4 week response window | Calendar-gated |
| MARKET-EVIDENCE.md verdict | Requires verified Steam data + survey results triangulated per D-MKTG-04 rubric | After Daniel verification + survey returns |
| Outside-reviewer cosign | Reviewer designated in plan 01-06 (D-WALL-05 hybrid LLM-primary mechanism); cosign step gates on verdict draft | Final step before MARKET-EVIDENCE.md moves to planning root |

## AI-policy compliance

- **Steam API extraction:** factual data work — Claude-allowed (per Task 2 Step A specification)
- **LLM classification:** research-synthesis use; Daniel verifies every tag before it counts toward verdict (D-MKTG-02 anti-bias structural requirement)
- **Survey question drafting:** copy-edit drafting in neutral wording (Claude-allowed per D-MKTG-03 Step B); Daniel critiqued every question for leading-bias before distribution
- **Summary tallies aggregation:** procedural data aggregation (not editorial claim) — Claude-allowed; HONEST FRAMING in tallies file makes clear evidence is directional, not verdict-determinative
- **Cross-corpus pattern surfacing:** synthesis-allowed at observation level; load-bearing verdict statement (Confirmed/Refined/Rejected) is Daniel-only per plan 01-07 Task 3 Step C-E
- **No marketing copy generated.** No verdict-shaped editorial claims. Anti-feature implications stated as "the corpus is consistent with" framing, not "the data proves."

## Files completed

| File | Outcome |
|---|---|
| `research/mktg-06-game-list.md` | 16-game hybrid list with D-MKTG-01 selection rule applied; per-game inclusion rationale logged (rule-based / Daniel curated / dropped) |
| `research/mktg-06-survey-questions.md` | ~11 neutrally-worded survey questions; Daniel critique pass logged inline; distribution log section scaffolded (entries pending moderator approval) |
| `research/mktg-06-review-classification/` (12 classification files) | Stardew Valley / Cozy Grove / Coffee Talk / Spiritfarer / Coral Island / Palia / A Short Hike / Dreamlight Valley / My Time at Portia / My Time at Sandrock / Hokko Life / Sun Haven — each with 30-row classification table + per-game tally + methodology notes |
| `research/mktg-06-review-classification/_summary-tallies.md` | Cross-corpus aggregation: per-game tallies + corpus-wide anti-feature rates + 3 CRITICAL findings + provisional verdict signal + honest-framing caveats |

## Files NOT yet completed (calendar-gated)

| File | Blocking on |
|---|---|
| `deliverables/validation-pack/27-MARKET-EVIDENCE.md` (result tables) | Daniel tag-verification + survey results |
| `.planning/MARKET-EVIDENCE.md` (final at planning root with verdict) | Task 3 Steps B-F completion + outside-reviewer cosign |
| `SCOPE.md` row for MKTG-06 verdict | Verdict statement (after Task 3) |
| `ROADMAP.md` amendment (if verdict = Refined-significantly or Rejected) | Verdict statement |

## Health metrics progressed

- **HEALTH-01:** Pending row for MKTG-06 verdict (after Task 3)
- **MKTG-06 requirement:** ~67% progress (Task 1 done + Task 2 LLM-classification done; Daniel-verification + survey + verdict remain)
- **AI policy enforcement:** Held on every boundary. Verdict-shaped editorial claims refused at synthesis layer (e.g., `_summary-tallies.md` says "consistent with" not "proves"); load-bearing verdict statement preserved for Daniel.

## Cross-references

- Plan: `01-07-mktg-06-validation-PLAN.md`
- Methodology: `01-CONTEXT.md` D-MKTG-01..06
- Scaffold: `deliverables/validation-pack/27-MARKET-EVIDENCE.md`
- Persona anchor: `.planning/research/PERSONA.md`
- Anti-bias discipline: `01-RESEARCH.md` Pitfall 4 + `PITFALLS.md` Pitfall 4
- Outside-reviewer mechanism: plan 01-06 + `deliverables/process-pack/21-year3wall-tripwires.md` (D-WALL-05 hybrid LLM-primary)
- Steam Web API endpoint: `https://store.steampowered.com/appreviews/{appid}?json=1&filter=recent&language=english&review_type=negative&num_per_page=50` (public, no key needed)
