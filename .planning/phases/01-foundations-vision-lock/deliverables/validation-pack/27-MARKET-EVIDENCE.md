---
deliverable: 27
pack: validation
title: MARKET-EVIDENCE — MKTG-06 Demographic Validation
author: Claude (methodology synthesis from D-MKTG-01..06); Daniel (data collection + verdict + sign-off)
ai_role: synthesis-allowed (methodology synthesis from CONTEXT.md decisions; LLM-classification per D-MKTG-02 with Daniel verifying every tag); Claude refuses to draft survey questions in voice/copy that presupposes the thesis
depends_on:
  - .planning/phases/01-foundations-vision-lock/01-CONTEXT.md
  - .planning/research/PERSONA.md
  - .planning/REQUIREMENTS.md
decisions_referenced:
  - D-SCOPE-27
  - D-MKTG-01
  - D-MKTG-02
  - D-MKTG-03
  - D-MKTG-04
  - D-MKTG-05
  - D-MKTG-06
downstream_consumers:
  - 28-greenlight.md (verdict ratified at greenlight)
  - 21-year3wall-tripwires.md (verdict feeds m6 tripwire data)
  - Phase 8 marketing copy (results inform positioning; rejected verdict revisits roadmap before Phase 2)
  - PROJECT.md "underserved demographic" framing (validated/refined/rejected per verdict)
---

# MARKET-EVIDENCE — Demographic Validation (MKTG-06)

> Per `D-SCOPE-27` + `MKTG-06`: empirical grounding for the project's "underserved deep cozy enjoyer demographic" hypothesis. Per `PHILOSOPHY.md` §I.7, this hypothesis is **qualitatively supported but NOT yet validated**; this document is the validation gate.
>
> Methodology source: `01-CONTEXT.md` `<decisions>` MKTG-06 section. **Verdict criteria are pre-committed below before any data is collected** to avoid `PITFALLS.md` Pitfall 4 confirmation bias.

---

## Methodology (per D-MKTG-01..06)

### Step 1: Hybrid game-list selection (D-MKTG-01)

**Selection rule:** Steam tag = "Cozy" + "Life Sim", top 20 by review count.

**Daniel curation (after rule applies):**
- Drop obvious mismatches (pure visual novel, pure city-builder)
- Add 2–3 must-haves from persona research: Stardew Valley, Spiritfarer, Coral Island

**Sample size:** 10–20 games.

**Discipline rule (per `PITFALLS.md` Pitfall 4 / `01-RESEARCH.md` Pitfall 4):** **stick rigorously to the selection rule** — don't let curation drift toward "games my persona would like." That's the confirmation-bias failure mode.

### Step 2: LLM-assisted negative-and-mixed review classification + Daniel verification of every tag (D-MKTG-02)

**Per game:**
- Scrape negative + mixed reviews via Steam Web API (`appreviews` endpoint)
- LLM classifies each review into complaint categories with extracted quotes
- Daniel reviews **100% of LLM tags** to verify accuracy
- Final tallies are Daniel-verified

**Complaint categories (pre-committed):**
- Time pressure (day clocks, missable windows, expiring events)
- Difficulty wall / stat-check failure (endgame combat, skill-check progression gates)
- Endgame content cliff ("story ends, save locks," "what to do at hour 100")
- VN-style format (text-only, no embodiment, dialogue-only)
- Required multiplayer (Palia-style)
- Other (catch-all; quotes preserved)

**Discipline rule:** LLM-classification is the baseline because it's harder to bias than self-classification. Daniel's verification is the human check; he is responsible for catching LLM hallucinations or category-drift.

### Step 3: Formal Google Form survey + targeted distribution (D-MKTG-03)

**Survey questions:** ~10 structured questions. **Claude proposes neutrally-worded questions; Daniel critiques for leading-question bias before distribution.** Per `01-RESEARCH.md` Pitfall 4, leading questions like "how much do you dislike time pressure?" presuppose the thesis — Daniel scrubs these.

**Distribution channels:**
- r/CozyGamers post (per subreddit rules; mod approval as needed)
- 2–3 cozy Discord servers (with mod permission)
- Cozy gaming Twitter / Bluesky tags

**Target response count:** ≥50–100 responses.

### Step 4: Triangulation decision rubric (D-MKTG-04)

**Pre-committed verdicts:**

- **Confirmed** = persona dislikes (time pressure / difficulty wall / endgame cliff) appear in **top-5 complaints in ≥7 of 10–20 mined games** AND **≥40% of survey respondents cite at least one**
- **Refined** = appear in **4–6 games** OR **25–40% survey respondents** → narrative needs adjustment, but thesis core holds
- **Rejected** = appear in **<4 games AND <25% survey respondents** → thesis is wrong; `ROADMAP.md` revisited before Phase 2

### Step 5: Specific games-to-mine list + survey wording (D-MKTG-05)

**Status: deferred to plan 01-07.** Specific game list and survey wording are populated when plan 01-07 executes.

### Step 6: Output (D-MKTG-06)

This document, fully populated, with verdict signed by Daniel.

---

## Hybrid game list (per D-MKTG-01)

> {Plan 01-07 populates from Steam Web API + Daniel curation. Selection rule documented above the table.}

| Game | Steam tag set | Review count | Inclusion rationale (rule + curation) |
|------|---------------|--------------|---------------------------------------|
| {populate} | {populate} | {populate} | {populate — rule-derived or Daniel-curated} |

---

## Negative-and-mixed review classification (per D-MKTG-02)

> {Plan 01-07 populates from Steam Web API + LLM classification + Daniel verification of every tag.}

### Per-game tally tables

#### {Game N}

| Complaint category | Tag count | Sample verbatim quotes |
|---------------------|----------:|--------------------------|
| Time pressure | {n} | {quote} |
| Difficulty wall | {n} | {quote} |
| Endgame content cliff | {n} | {quote} |
| VN-style | {n} | {quote} |
| Required multiplayer | {n} | {quote} |
| Other | {n} | {quote} |

*(One per-game table per game in the hybrid list above.)*

### Aggregate tally

| Complaint category | Number of games where this is in top-5 complaints |
|---------------------|----------------------------------------------------:|
| Time pressure | {n / 10–20} |
| Difficulty wall | {n / 10–20} |
| Endgame content cliff | {n / 10–20} |
| VN-style | {n / 10–20} |
| Required multiplayer | {n / 10–20} |

---

## Google Form survey (per D-MKTG-03)

### Survey-questions section

> *Claude proposes a neutrally-worded ~10-question draft in plan 01-07; Daniel critiques each question for leading-question bias before distribution. Survey questions go in this section verbatim once finalized.*

{plan 01-07 populates}

### Distribution log

> *Distribution channels, dates of post, mod-approval status, response counts captured here.*

{plan 01-07 populates}

### Response-collection metadata

- **Target response count:** ≥50–100 responses
- **Collection window:** {Daniel sets in plan 01-07}
- **Final response count:** {populated when window closes}

### Survey response analysis

> *Aggregate counts per complaint category from survey responses. Daniel reviews any free-text responses for unexpected complaint categories not in the pre-committed set.*

{plan 01-07 populates}

---

## Triangulation rubric (per D-MKTG-04)

*Verbatim from CONTEXT.md `D-MKTG-04`:*

- **Confirmed** = persona dislikes appear in top-5 complaints in ≥7 of 10–20 mined games AND ≥40% of survey respondents cite at least one
- **Refined** = appear in 4–6 games OR 25–40% survey → narrative needs adjustment, thesis core holds
- **Rejected** = appear in <4 games AND <25% survey → thesis is wrong; ROADMAP.md revisited before Phase 2

---

## Verdict

**Verdict: {Confirmed | Refined | Rejected — Daniel signs after data collected per D-MKTG-04 rubric}**

**Rationale:** {Daniel writes the rationale citing specific data points from the tables above; per AI policy, Claude does not author verdict prose}

**Date verdict signed:** {YYYY-MM-DD}

**Outside reviewer cross-check** *(per `D-WALL-05`)*: Year-3-Wall outside reviewer (designated in `21-year3wall-tripwires.md`) reads this document before the verdict is final, per `01-RESEARCH.md` Pitfall 4 mitigation step.

**Outside reviewer review:** {Daniel records reviewer feedback here}

---

## Roadmap-revision impact (if Refined or Rejected)

> *Populated only if verdict is Refined or Rejected.*

If **Refined:** {Daniel describes which marketing-narrative adjustments propagate to PROJECT.md / Phase 8 marketing copy / anti-positioning doc; thesis core holds, only framing adjusts}

If **Rejected:** {Daniel describes ROADMAP.md revision required before Phase 2; per `D-MKTG-04`, this is an existential adjustment, not a tweak}

---

## Cross-references

- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-27`, `D-MKTG-01..06`
- `.planning/REQUIREMENTS.md` — `MKTG-06`
- `.planning/research/PERSONA.md` — n=1 corpus that this validation tests
- `PHILOSOPHY.md` §I.7 — "the market thesis is a hypothesis until validated"
- `21-year3wall-tripwires.md` — verdict feeds m6 tripwire data
- `28-greenlight.md` — verdict ratified at greenlight
- `15-risk-register.md` R-09 — market thesis rejection risk
- `01-RESEARCH.md` Pitfall 4 — confirmation bias mitigation steps
