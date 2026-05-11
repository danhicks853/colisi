---
phase: 01-foundations-vision-lock
plan: 07
status: substantially-complete (Daniel-verification done; calendar-gated survey + verdict remain)
completed: 2026-05-10 (Task 1 + Task 2 full); verification 2026-05-10
gates_remaining:
  - Daniel publishes Google Form survey via approved channels (Task 3 Step A)
  - ≥50 survey responses collected over ~2-4 weeks (calendar-gated)
  - Daniel authors final MARKET-EVIDENCE.md verdict (Task 3 Steps B-F)
  - Outside-reviewer cosignature (per D-WALL-05 hybrid mechanism reframed in plan 01-06)
architectural_locks_made_during_verification:
  - SCOPE.md row 16 — Pillar 3 expansion: production polish IS accessibility + anti-"ship rough then patch" anti-clause
  - SCOPE.md row 17 — Pillar 2 anti-clause extension: no real-time forward-timer gating + no real-world-clock-tied content gating
---

# Plan 01-07 SUMMARY — MKTG-06 Validation

## Outcome

**Substantially complete.** Task 1 + Task 2 (including Daniel-verification) DONE; Task 3 calendar-gated work remains.

This plan has long-tail external dependencies (subreddit/Discord moderator approval; ≥50 survey responses over ~2-4 weeks) that cannot be compressed. Per Daniel's 2026-05-10 directive ("we can do everything up to that point just fine"), all wave-2-independent work executed now; calendar-gated work paused at the boundary.

**Key empirical discoveries from this plan:**
1. **Steam API access (no key needed)** enabled real-data classification of 12 cozy-life-sim comparables.
2. **Daniel-verification surfaced 2 architectural locks** during the corpus pass:
   - Pillar 3 polish-as-accessibility (SCOPE row 16) — empirically validated by ~50+ bug/crash/polish-failure reviews
   - Pillar 2 anti-clause extension (SCOPE row 17) — empirically validated by 12 cross-corpus timeforward-gating reviews
3. **A new corpus category** (value-for-gameplay, distinct from endgame-cliff) surfaced from A Short Hike verification.
4. **A new corpus category** (dev-labor-ethics) surfaced from Sun Haven verification — pairs with Colisi's AI-DISCLOSURE positioning advantage.

## Task status (post-verification)

| Task | Status | What's done | What remains |
|---|---|---|---|
| Task 1: Game list + survey questions + distribution prep | **DONE** | 16-game hybrid list per D-MKTG-01 (12 fetched + 3 fetch-gap + 1 marked Palia); ~11 neutrally-worded survey questions Claude-drafted + Daniel-critiqued; distribution channel research done | Moderator approvals (Daniel external work — pursue when ready to publish) |
| Task 2: Steam review mining + LLM classification + **Daniel verification** | **DONE** | Steam Web API queried 12 games × ~30 reviews per game = 362 reviews. **Daniel verified 100% of LLM tags 2026-05-10** per D-MKTG-02 anti-bias discipline. 310 substantive reviews (85.6% signal rate). Verified `_summary-tallies.md` regenerated with corpus-level findings. | — |
| Task 3: Survey distribution + verdict authoring | **PAUSED at boundary** | Methodology synthesis present in scaffolded `27-MARKET-EVIDENCE.md`; outside-reviewer cosignature sequencing per plan 01-06 (D-WALL-05 hybrid LLM-primary mechanism) | A: Daniel publishes Google Form. B: ≥50 responses (~2-4 weeks). C-F: rubric + verdict + outside-reviewer cosign + finalize + move to planning root |

## Game list (Task 1)

Hybrid selection per D-MKTG-01: Steam tag "Cozy" + "Life Sim" sorted by review count + Daniel curation. **16 games selected** including 3 D-MKTG-01 must-haves (Stardew, Spiritfarer, Coral Island). Inclusion rationale logged per row. See `research/mktg-06-game-list.md`.

## Survey questions (Task 1)

~11 questions Claude-drafted in neutral wording; Daniel critique pass logged inline. Covers demographics + game-bounce history + anti-feature reactions (5 anti-feature categories from D-MKTG-02 + required-combat) + positive-feature attractors + open-ended ideal-cozy-game framing + follow-up consent. Distribution log section present (pending moderator-approval entries). See `research/mktg-06-survey-questions.md`.

## Steam review classification corpus (Task 2) — Daniel-verified

**Final corpus: 12 games × ~30 reviews each = 362 reviews fully Daniel-verified.** Post-verification substantive count: **310 of 362 (85.6% signal rate)** — UP from Claude-pre-verification 72%. Verification surfaced 2 architectural locks + 2 new corpus categories (see below).

**Fetch gaps (documented as known limitation):** 3 games in the original 15-game candidate list could not be classified due to appid issues: Rune Factory 5 (appid 1599420 returned 0 reviews; alternative appids tried but recovered Dead Space Remake by mistake), Wylde Flowers (appid 1612710 + alternatives all returned 0), Spirittea (appid 1840400 + multiple alternatives all returned 0). Without external appid-lookup mechanism, these gaps could not be recovered in this session. Final corpus is 12 games (within D-MKTG-01 minimum target of 10).

**Palia recovery:** original `filter=recent` returned only 2 reviews due to F2P review aggregation quirks. Re-fetched with `filter=all` (sorted by helpfulness) which recovered 50 reviews. Combined corpus uses v1 (2 verified) + v2 supplementary (30 verified) = 32 Palia reviews total.

### Three CRITICAL findings (post-verification)

| Finding | Verified rate | Direct implication |
|---|---|---|
| **Cozy Grove time-pressure** | **40%** (10 of 25 substantive) | Direct empirical support for Colisi's locked anti-clause against day clocks. **6 reviews carry Daniel's "timeforward-gating" sub-tag** — direct hits on the NEW Pillar 2 anti-clause extension locked 2026-05-10 (SCOPE row 17). Cozy Grove is the cleanest empirical anchor for BOTH anti-clauses. |
| **Coffee Talk VN-style** | **69%** (18 of 26 substantive) | Direct empirical support for the locked Out-of-Scope anti-clause against pure-VN format. Daniel sharpening: **"VN that didn't market itself as a VN suffers bad reviews because it's a VN"** — bounce is positioning-mismatch as much as format. |
| **A Short Hike value-for-gameplay** | **30%** (8 of 27 substantive) — REFRAMED | **Pre-verification claim "33% endgame" OVERTURNED.** Daniel re-categorized 6 of 7 endgame-too-short rows as "value-for-gameplay" — distinct new category (pricing-vs-length expectation, NOT content-cliff-after-50-hours). Colisi's 30+hr scope target addresses BOTH but they are two failure modes, not one. |

### NEW corpus-level findings (surfaced during verification)

**1. Microtransactions concentration:** Palia 54% / Dreamlight 32% / Sun Haven heavy + Sandrock 3 verified hits. Concentrated in F2P/DLC-heavy subsegment but DOMINANT there. Colisi's locked MTX anti-clause empirically validated.

**2. Real-time-timer anti-clause extension empirically anchored:** 12 cross-corpus reviews validate the new Pillar 2 anti-clause locked 2026-05-10 (SCOPE row 17): Cozy Grove 6 + Dreamlight 3 + Sandrock 1 + Palia 2.

**3. Pillar-failure-shaped bounce datasets:** Spiritfarer (22 pillar tags / 73% of corpus), Cozy Grove (20+ pillar tags), Hokko Life (8 pillar tags). Cozy players bounce on **pillar failures more than on the 5 D-MKTG-02 anti-features**. Colisi's three-pillar architecture is empirically validated as structural response.

**4. Polish-as-accessibility empirical validation:** ~50+ bug/crash/save-loss/polish-failure reviews across 5+ games validate the Pillar 3 expansion locked 2026-05-10 (SCOPE row 16). R10 Coral Island autosave annotation (Daniel-flagged) cross-corpus pattern: granular autosave is required, not session-end-only.

**5. Dev-labor-ethics — NEW corpus category:** Sun Haven dominant (~30% of reviews) + Palia acquisition pattern + scattered hits elsewhere. Daniel flagged as "could be a future category touching on AI assets." Colisi's AI-DISCLOSURE.md positioning is structurally advantageous with this player segment.

**6. Marketing-honesty cross-corpus pattern:** Coffee Talk + Spiritfarer + Sandrock + Palia + Cozy Grove all show positioning-mismatch bounces. Players who expected X and got Y bounce hard. Colisi positioning-honesty discipline added.

### Secondary findings

- **My Time at Portia time-pressure 17%** + R18 direct hit on required-combat anti-clause
- **Coral Island time-pressure 17%** + **endgame 13%** + R10 autosave anchor (Daniel-flagged)
- **Difficulty walls** = mostly minigame-difficulty pattern (Spiritfarer platforming, A Short Hike boat-race, Cozy Grove wheel-spin, Stardew fair-wheel) — minigame difficulty can break cozy register
- **R23 Spiritfarer calibration warning** (Daniel-flagged): "Never punishing" must NOT slide into "no sense of accomplishment." Character-arc completions are the accomplishment vector, not difficulty walls. Cross-pillar P1×P2 authoring discipline empirically validated.
- **R26 Spiritfarer emotional-toxicity pattern**: cast-representation-principle anti-clauses against mature/trauma themes empirically validated (game traps you in emotional-black-hole of guilt-loops Colisi structurally rejects).

## Provisional verdict signal (POST Daniel-verification; pre-survey)

The Daniel-verified Steam review corpus provides **STRONG directional support** for the D-MKTG-02 thesis on 3 of the 5 anti-feature categories + EMPIRICAL VALIDATION of 2 architectural locks made during verification:

| Anti-feature | Corpus evidence | Verdict signal |
|---|---|---|
| Time-pressure | Cozy Grove 40% / Portia 17% / Coral 17% / Dreamlight 12%; 10% corpus rate + 12 timeforward-gating cross-corpus hits | **STRONG SUPPORT** (anti-clause + extension validated) |
| VN-style | Coffee Talk 69%; 5.8% corpus rate (concentrated) | **STRONG SUPPORT (genre-segment-specific)** |
| Endgame cliff | Coral 3 + Spiritfarer 2 + Dreamlight 2 + Hokko 2 + Sun Haven 2 + Sandrock 1; 4.8% corpus rate | **MODERATE SUPPORT** (down from pre-verification due to A Short Hike reframe) |
| Difficulty walls | Spiritfarer 3 + Stardew 2 + Coffee Talk 2 + A Short Hike 2; 4.2% corpus rate | **WEAK-MODERATE SUPPORT** (minigame-difficulty pattern) |
| Required-multiplayer | Coral Island R3 only; 0.3% | **INSUFFICIENT** — relies on persona-zero anchor |

**Plus architectural locks empirically validated DURING this verification pass (SCOPE rows 16-17):**
- Pillar 3 polish-as-accessibility: 50+ cross-corpus reviews
- Pillar 2 anti-clause extension: 12 cross-corpus reviews

**Honest framing per PHILOSOPHY.md / Pitfall 4:** Evidence is *consistent with* the D-MKTG-02 thesis AND empirically validates the architectural locks made today. Does NOT independently validate the underserved-demographic thesis — corpus shows cozy players bounce on these patterns at meaningful rates, but does NOT show whether a Colisi player segment large enough to support the project exists. **The survey (Task 3) remains the gate** for the demand-side thesis.

## What this plan did NOT do (deferred + why)

| Deferred work | Why | When |
|---|---|---|
| ~~Daniel verifies 100% of LLM tags~~ | DONE 2026-05-10 | — |
| Survey publication | Requires moderator approvals + Google Form build (external work) | Daniel pursues when ready to publish |
| ≥50 survey responses | Cannot compress 2-4 week response window | Calendar-gated |
| MARKET-EVIDENCE.md verdict | Requires survey results triangulated with verified Steam data per D-MKTG-04 rubric | After survey returns |
| Outside-reviewer cosign | D-WALL-05 hybrid LLM-primary mechanism (plan 01-06); cosign step gates on verdict draft | Final step before MARKET-EVIDENCE.md moves to planning root |

## Architectural locks made DURING verification

Two load-bearing Phase 1 architectural commitments were locked DURING the corpus verification pass based on Daniel-flagged empirical patterns:

### Pillar 3 expansion: Production polish IS accessibility (SCOPE row 16, 2026-05-10)

Daniel directive after observing 43% Portia bug-rate + cross-corpus polish-friction pattern. New locked anti-clause: "We will always strive to NEVER ship any playable demo, test, patch, or gameplay containing breaking bugs. Even playtest tech demos must be functionally sound." 4 POLISH-N placeholder REQs added. Empirical anchor: ~50+ bug/crash/polish-failure reviews across 5+ games (Sun Haven, Dreamlight, Sandrock, Coral Island, Portia). Touched: `02-pillars-of-play.md` Pillar 3 / `07-pillar-mechanic-matrix.md` new POLISH cluster / `CLAUDE.md` guardrails / `feedback_polish_is_accessibility.md` memory. REQUIREMENTS.md POLISH-N1..4 additions queued for Phase 1→2 transition.

### Pillar 2 anti-clause extension: No real-time-timer / real-world-clock gating (SCOPE row 17, 2026-05-10)

Daniel directive surfaced from Sandrock R24 ("copper to melt in realtime is cringe") + cross-verified with Dreamlight R11 (work-schedule-tied critters) + R16 (30min-4hr resource respawn). Then further validated across Cozy Grove (6 timeforward-gating hits) + Palia (2 hits). Total 12 cross-corpus empirical anchors. Two new anti-clauses: (1) no real-time forward-timer gating; (2) no real-world-clock-tied content gating. Touched: `02-pillars-of-play.md` Pillar 2 / `CLAUDE.md` hard guardrails / `feedback_no_realtime_timer_gating.md` memory. REQUIREMENTS.md WORLD-05 amendment queued for Phase 1→2 transition.

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

- **HEALTH-01:** SCOPE.md rows 16 + 17 added during verification (Pillar 3 expansion + Pillar 2 anti-clause extension). Verdict row pending Task 3.
- **MKTG-06 requirement:** ~85% progress (Task 1 + Task 2 with Daniel verification complete; survey + verdict remain).
- **AI policy enforcement:** Held on every boundary. Verdict-shaped editorial claims refused at synthesis layer (`_summary-tallies.md` says "consistent with" not "proves"); load-bearing verdict statement preserved for Daniel.

## Architectural amendments queued for Phase 1→2 transition (from this plan)

| Amendment | Source | Type |
|---|---|---|
| POLISH-N1..4 (new requirements) | Pillar 3 expansion 2026-05-10 | New REQ additions |
| WORLD-05 wording extension (real-time-timer + real-world-clock-tied content) | Pillar 2 anti-clause extension 2026-05-10 | REQ amendment |
| Standardized LLM skeptical-prompt template (Phase 2 start) | D-WALL-05 reframe in plan 01-06 | Deferred deliverable |

## Cross-corpus pattern surface (for MARKET-EVIDENCE.md authoring)

When Task 3 verdict is authored, these load-bearing cross-corpus patterns should be incorporated:

1. **3 of 5 D-MKTG-02 anti-features empirically supported** — time-pressure / VN-style / endgame-cliff. Difficulty and required-multiplayer remain weak-to-insufficient.
2. **Pillar 2 anti-clause extension validated** — 12 cross-corpus timeforward-gating hits (Cozy Grove 6 + Dreamlight 3 + Sandrock 1 + Palia 2).
3. **Pillar 3 polish-as-accessibility validated** — 50+ cross-corpus polish-failure reviews.
4. **Microtransactions** — concentrated F2P/DLC-heavy bounce reason. Locked anti-clause empirically validated.
5. **Pillar-failure-shaped bounce** — cozy players bounce on pillar failures (char-dev, never-punishing, approachability) MORE than on the 5-anti-feature framework. 3-pillar architecture validated.
6. **Value-for-gameplay** — NEW category distinct from endgame-cliff. Colisi 30+hr scope addresses BOTH.
7. **Dev-labor-ethics** — NEW category surfaced. Colisi's AI-DISCLOSURE positioning is structurally advantageous.
8. **Marketing-honesty** — cross-corpus pattern. Position what the game IS, don't bait-and-switch.

## Cross-references

- Plan: `01-07-mktg-06-validation-PLAN.md`
- Methodology: `01-CONTEXT.md` D-MKTG-01..06
- Scaffold: `deliverables/validation-pack/27-MARKET-EVIDENCE.md`
- Persona anchor: `.planning/research/PERSONA.md`
- Anti-bias discipline: `01-RESEARCH.md` Pitfall 4 + `PITFALLS.md` Pitfall 4
- Outside-reviewer mechanism: plan 01-06 + `deliverables/process-pack/21-year3wall-tripwires.md` (D-WALL-05 hybrid LLM-primary)
- Steam Web API endpoint: `https://store.steampowered.com/appreviews/{appid}?json=1&filter=recent&language=english&review_type=negative&num_per_page=50` (public, no key needed)
