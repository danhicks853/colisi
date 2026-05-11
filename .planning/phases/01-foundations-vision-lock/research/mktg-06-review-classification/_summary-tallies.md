# MKTG-06 Steam Review Classification — Summary Tallies

**Source:** Steam Web API negative reviews, filter=recent language=english, fetched 2026-05-10
**Corpus:** 12 cozy life sim / cozy-adjacent games; 30 reviews per game (Palia returned only 2)
**Total reviews classified:** 332
**Total substantive reviews (after non-substantive filter):** 238 (72%)
**Verification status:** UNVERIFIED (LLM-classified; awaits Daniel-verification per D-MKTG-02 protocol)

---

## Per-game results (substantive review counts)

| Game | App ID | Substantive | TP | Diff | EG | VN | MP | Other | Non-sub |
|---|---|---|---|---|---|---|---|---|---|
| Stardew Valley | 413150 | 9 | 3 | 1 | 0 | 0 | 0 | 5 | 21 |
| Cozy Grove | 1458100 | 22 | **9** | 1 | 0 | 0 | 0 | 17+ | 8 |
| Coffee Talk | 914800 | 25 | 0 | 2 | 0 | **18** | 0 | 5 | 5 |
| Spiritfarer | 972660 | 25 | 1 | 3 | 2 | 0 | 0 | 22+ | 5 |
| Coral Island | 1158160 | 22 | 4 | 1 | 3 | 0 | 1 | 18+ | 8 |
| Palia* | 2707930 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| A Short Hike | 1055540 | 21 | 0 | 2 | **7** | 0 | 0 | 14+ | 9 |
| Dreamlight Valley | 1401590 | 24 | 3 | 0 | 2 | 0 | 0 | 22+ | 6 |
| My Time at Portia | 666140 | 24 | 5 | 2 | 0 | 0 | 0 | 19+ | 6 |
| My Time at Sandrock | 1084600 | 24 | 1 | 0 | 1 | 1 | 0 | 24+ | 6 |
| Hokko Life | 824000 | 22 | 1 | 0 | 2 | 0 | 0 | 21+ | 8 |
| Sun Haven | 1432860 | 19 | 0 | 0 | 2 | 0 | 0 | 19+ | 11 |
| **TOTALS** | — | **238** | **28** | **12** | **19** | **19** | **1*** | **206+** | **94** |

\* Palia returned only 2 reviews via filter=recent (F2P game; review aggregation differs). Required-multiplayer signal could not be measured at corpus scale; persona-zero's documented Palia-bounce remains the anchor data point for this anti-feature.

---

## Anti-feature rates across full corpus

| Anti-feature category | Count | % of substantive (n=238) |
|---|---|---|
| **Time-pressure** | 28 | **11.8%** |
| **Endgame cliff / content depletion** | 19 | **8.0%** |
| **VN-style / interactivity-too-thin** | 19 | **8.0%** |
| **Difficulty walls** | 12 | **5.0%** |
| **Required-multiplayer** | 1 | **0.4%** *(sample-constrained)* |
| Other (outside the 5-category framework) | 206+ | **86%+** |

---

## Three CRITICAL findings (per-game rate >30%)

### 1. Cozy Grove — Time-pressure rate **41%** (9 of 22 substantive)

Cozy Grove's daily-time-gate is the dominant bounce factor. 9 of 30 negative reviewers explicitly cited the daily content gate as primary complaint.

> "the daily limit is ridiculous, if I wanted something like that I'd play mobile games"
> "stressful as fudge!!!"

**Implication for Colisi:** Direct empirical support for the locked anti-clause against day clocks / daily-time-gates / missable windows / expiring events (per CLAUDE.md Section 3, Pillar 2, WORLD-05 zero-clock-zone). Cozy demographic is sensitive to time-pressure even when game is marketed as cozy.

### 2. Coffee Talk — VN-style rate **72%** (18 of 25 substantive)

Coffee Talk's "too VN, not enough gameplay" is the OVERWHELMING bounce reason. Empirical confirmation of persona-zero's documented Coffee Talk bounce.

> "Interactivity? Who's she?"
> "this is in no way made obvious"

**Implication for Colisi:** Direct empirical support for the locked Out-of-Scope anti-clause against pure-VN format. Colisi's 3D embodied + interactive minigame layer (D-VISION-04 magic-tutoring) is the correct shape to avoid this bounce.

### 3. A Short Hike — Endgame rate **33%** (7 of 21 substantive, "too-short" variant)

A Short Hike's negative reviews cluster heavily around "too short / wish there was more / not worth the price for the length." Different *shape* of endgame complaint than Stardew/Spiritfarer (content-depletion-after-finishing vs. game-ends-too-soon), but same anti-feature category.

> "wayyy too short!"
> "should of been a $2 - $3 game"

**Implication for Colisi:** Cozy players want LONG content runways. Validates Colisi's 30+hr scope target and four-engine retention strategy (per `23-why-play-at-hour-200.md`). Endgame-cliff anti-feature confirmed across multiple cozy comparables.

---

## Secondary findings (per-game rate 15–30%)

### My Time at Portia — Time-pressure rate **21%** (5 of 24 substantive) + Required-combat hit

Portia's daily-clock + save-only-at-end-of-day creates compounded time-pressure complaints. **R18 is a direct hit on required-combat anti-clause**: "Thought I finally found a casual game that doesn't make you go in caves and do fighting. Nope, you have to do fighting zZz!!! Ruined it for me."

**Implication for Colisi:** Validates both time-pressure anti-clause AND required-combat anti-clause (per CLAUDE.md Section 3). Persona-zero's BG3/Fallout/Hogwarts Legacy bounces align with this review's experience.

### Coral Island — Time-pressure rate **18%** + Endgame rate **14%**

Coral Island's time-pressure surfaces differently (lose-day-progress to crashes; Y2 content depletion). Lower direct signal but corroborates both anti-features.

### Cross-corpus patterns OUTSIDE the 5-category framework

Anti-features the D-MKTG-02 framework didn't anticipate but recurred:

- **Microtransactions / monetization** (Dreamlight Valley 33%, Sun Haven heavy): cozy demographic is highly sensitive to monetization-coded mechanics. Colisi's locked anti-clauses against microtransactions / battle passes directly address this.
- **Bugs / crashes / sleep-progression-blocking** (Sun Haven, Coral Island, Sandrock, Portia): high-volume in technical-execution complaints. Process discipline implication, not design implication.
- **"Wide-but-shallow" / "mile wide inch deep"** (Sun Haven R30, R21; Hokko Life dominant): cozy players reward DEPTH over BREADTH. Colisi's "characters and relationships that keep evolving" core value is structurally the opposite of this bounce-pattern.
- **AC-comparison-negative** (Hokko Life dominant): cozy games positioned as AC-alternative-but-less get punished. Colisi's differentiation (sprite premise + matchmaking + magic identity) MUST NOT be positioned as Stardew/AC-alternative-with-less.
- **Marketed-as-cozy mismatch** (Spiritfarer R26/R30, Stardew R20): players who came expecting cozy and got platforming/stress-coded experience feel "cheated." Colisi's positioning discipline (per ALIGN-04 + Pillar 2 anti-clauses) must avoid this.
- **Dev-labor-ethics** (Sun Haven dominant): ~30% of Sun Haven negative reviews are about underpaying staff. Colisi's solo-dev structure + AI-disclosure transparency (AI-DISCLOSURE.md) gives a structural advantage here.

---

## Methodology + caveats

- **LLM classifier:** Reviews tagged by Claude Opus 4.7 per D-MKTG-02 5-category framework + non-substantive filter. ALL tags marked UNVERIFIED pending Daniel-verification.
- **Verification protocol:** Daniel must 100% verify LLM-classified tags before this corpus contributes to the formal MKTG-06 verdict (per D-MKTG-02 anti-bias discipline).
- **Sample limitations:**
  - 30 reviews per game = recency snapshot, not corpus-statistical
  - Palia returned only 2 reviews (F2P review aggregation quirks)
  - 3 games in original list returned 0 reviews via filter=recent (Rune Factory 5, Wylde Flowers, Spirittea) — likely appid mismatches; not retried
  - English-language only; non-English cozy-demographic bounces uncaptured
- **Filter:** filter=recent (review_type=negative) — captures recent bounces but misses long-tail historical patterns. Defensible for "is this anti-feature currently bouncing players?" question.
- **Non-substantive filter:** Reviews that are foreign-language-only, jokes, single-word, profanity-only, controversy-only (LGBTQ+ representation objections), or review-of-developer-not-game were excluded from anti-feature tallies. This filter preserves signal but reduces sample.

---

## Verdict implications (provisional — pending Daniel verification + survey results)

The Steam review corpus provides **strong directional support** for the D-MKTG-02 thesis on 3 of the 5 anti-feature categories:

| Anti-feature | Corpus evidence | Verdict signal |
|---|---|---|
| **Time-pressure** | Cozy Grove 41%, Portia 21%, Coral Island 18%, Dreamlight Valley 13%; 12% corpus rate | **STRONG SUPPORT** |
| **VN-style** | Coffee Talk 72%; 8% corpus rate (concentrated in pure-VN comparable) | **STRONG SUPPORT (genre-segment-specific)** |
| **Endgame cliff** | A Short Hike 33% (too-short variant), Spiritfarer 2, Coral Island 3, Dreamlight 2, Hokko 2, Sandrock 1, Sun Haven 2; 8% corpus rate but BROADLY DISTRIBUTED | **MODERATE-STRONG SUPPORT** |
| **Difficulty walls** | Coffee Talk 2 (puzzles), Spiritfarer 3 (platforming), A Short Hike 2 (minigames); 5% corpus rate | **WEAK-MODERATE SUPPORT (minigame-difficulty pattern)** |
| **Required-multiplayer** | Coral Island 1 (host-restart-day); 0.4% corpus rate (sample-constrained) | **INSUFFICIENT** — relies on persona-zero anchor |

**Honest framing:** This evidence is *consistent with* the D-MKTG-02 thesis but does NOT independently validate it. The corpus shows cozy players DO bounce on time-pressure / VN-format / endgame-cliffs at meaningful rates. It does NOT show whether a hypothetical Colisi player segment large enough to support the project exists, or whether they would prefer Colisi's specific differentiation.

**The survey (Task 3) remains the gate.** Steam review evidence supports the anti-feature anti-clauses; survey evidence is required for the demand-side thesis (per ALIGN-04 + D-MKTG-02 verdict criteria).
