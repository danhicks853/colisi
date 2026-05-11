# MKTG-06 Steam Review Classification — Summary Tallies (POST-VERIFICATION)

**Source:** Steam Web API negative reviews; fetched 2026-05-10
**Corpus:** 12 cozy life sim / cozy-adjacent games (target was 12-20; 3 games failed appid lookup — see "Fetch gaps" below)
**Verification:** Daniel-verified per D-MKTG-02 anti-bias discipline 2026-05-10
**Total reviews classified:** 362 (30 per game × 11 + Palia 32 = v1 2 reviews + v2 supplementary 30 reviews)
**Total substantive (after Daniel verification + non-substantive filter):** 310 (85.6% — UP from Claude-pre-verification 72%)

---

## Per-game results (Daniel-verified substantive review counts)

| Game | App ID | Substantive | TP | Diff | EG | VN | MP | Other | NS | Verify rate |
|---|---|---|---|---|---|---|---|---|---|---|
| Stardew Valley | 413150 | 15 | 4 | 2 | 2 | 0 | 0 | 7 | 15 | 80% (6 NS→sub promotions) |
| Cozy Grove | 1458100 | 25 | **10** | 1 | 0 | 0 | 0 | 19 | 5 | 90% (3 NS→sub) |
| Coffee Talk | 914800 | 26 | 0 | 2 | 0 | **18** | 0 | 6 | 4 | 97% (1 NS→sub) |
| Spiritfarer | 972660 | 26 | 1 | 3 | 2 | 0 | 0 | 24 | 4 | 93% (2 NS→sub) |
| Coral Island | 1158160 | 23 | 4 | 1 | 3 | 0 | 1 | 19 | 7 | 97% (1 NS→sub) |
| Palia (v1+v2) | 2707930 | 28 | 2 | 0 | 1 | 0 | 0 | 25 | 4 | 100% (v1+v2 verified) |
| A Short Hike | 1055540 | 27 | 0 | 2 | **0\*** | 0 | 0 | 25 | 3 | 60% (12 rejections; major reframe) |
| Dreamlight Valley | 1401590 | 25 | 3 | 0 | 2 | 0 | 0 | 20 | 5 | 97% (1 NS→sub) |
| My Time at Portia | 666140 | 30 | 5 | 2 | 0 | 0 | 0 | 23 | 0 | 83% (5 NS→sub; 100% signal rate) |
| My Time at Sandrock | 1084600 | 27 | 1 | 0 | 1 | 1 | 0 | 24 | 3 | 83% (5 NS→sub) |
| Hokko Life | 824000 | 28 | 1 | 0 | 2 | 0 | 0 | 25 | 2 | 77% (7 NS→sub) |
| Sun Haven | 1432860 | 30 | 0 | 0 | 2 | 0 | 0 | 28 | 0 | 60% (12 NS→sub; 100% signal rate) |
| **TOTALS (verified)** | — | **310** | **31** | **13** | **15** | **18** | **1** | **245** | **52** | — |

**\* A Short Hike endgame finding OVERTURNED by Daniel verification.** My initial classification tagged 7 reviews as endgame (too-short variant). Daniel re-categorized 6 of 7 as **"value-for-gameplay"** — a new corpus category distinct from endgame-cliff (Pitfall 3 pattern). See finding #3 below.

---

## Anti-feature rates across full Daniel-verified corpus (n=310 substantive)

| Anti-feature category | Count | % of substantive | vs pre-verification |
|---|---|---|---|
| **Time-pressure** | 31 | **10.0%** | up from 11.8% absolute count (denom larger) |
| **VN-style** | 18 | **5.8%** | concentrated in Coffee Talk |
| **Endgame cliff (Pitfall 3)** | 15 | **4.8%** | DOWN from 8% pre-verification (A Short Hike reframe) |
| **Difficulty walls** | 13 | **4.2%** | mostly minigame-difficulty pattern |
| **Required-multiplayer** | 1 | **0.3%** | sample-constrained — Coral Island R3 only |
| **Sub-tag: real-time-timer (timeforward-gating)** | 12 | **3.9%** | NEW empirical anchor for Pillar 2 anti-clause extension locked 2026-05-10 |
| Other (outside 5-category) | 245 | **79%** | dominant — see "Cross-corpus patterns" below |

---

## Three CRITICAL findings (post-verification, per-game rate >30%)

### 1. Cozy Grove — Time-pressure rate **40%** (10 of 25 substantive)

Daily-time-gate is the dominant bounce factor. 10 of 30 reviewers (post-verification with R16 added) explicitly cited the daily content gate as primary complaint. **6 of these reviews carry Daniel's explicit "timeforward-gating" sub-tag** — direct hits on the Pillar 2 anti-clause extension locked 2026-05-10 (SCOPE.md row 17).

> "the daily limit is ridiculous, if I wanted something like that I'd play mobile games" (R29)
> "You can only play this game for 30-60 minutes a day. If I had known that, I would not have bought the game" (R18)
> "less than 30 mins of actual game play and then you have to sit and wait for next real time day" (R20)

**Implication:** Direct empirical support for Colisi's locked anti-clauses against day clocks AND the new anti-clause extension against real-time-timer / real-world-clock-tied content gating. Cozy Grove is the cleanest empirical anchor for BOTH anti-clauses in the corpus.

### 2. Coffee Talk — VN-style rate **69%** (18 of 26 substantive)

Coffee Talk's "too VN, not enough gameplay" remains the OVERWHELMING bounce reason post-verification (down from 72% pre-verification due to denominator expansion). Daniel's sharpening: **"VN that didn't market itself as a VN suffers bad reviews because it's a VN"** — bounce is positioning-mismatch as much as format. VA-11 Hall-A succeeds at the same format because it markets itself honestly as a VN.

> "Interactivity? Who's she?" (R30)
> "Without any meaningful gameplay" (R20)
> "If you like visual novels and complex characters, I recommend skipping this one" (R11)

**Implication:** Validates the locked Out-of-Scope anti-clause against pure-VN format AND surfaces the positioning-honesty discipline. Colisi must market the actual experience (3D embodied + interactive minigames + matchmaking puzzles) honestly.

### 3. A Short Hike — Value-for-gameplay rate **30%** (8 of 27 substantive) — REFRAMED FINDING

**Pre-verification claim OVERTURNED.** Initial classification cited A Short Hike at 33% endgame; Daniel re-categorized 6 of 7 "endgame-too-short" rows to **value-for-gameplay** (a new corpus category distinct from endgame-cliff):

| Category | Pattern |
|---|---|
| **Endgame (Pitfall 3 cliff)** | "I invested 50+ hours and ran out of late-game content" — Spiritfarer/Stardew shape |
| **Value-for-gameplay (NEW)** | "I paid $X expecting Y hours; this is too short/shallow for the price" — A Short Hike shape |

> "wayyy too short!" (R8)
> "should of been a $2 - $3 game as its just not worth the cost for how short it is" (R12)
> "very brief platformer/walking sim... finished the game in about an hour" (R29)

**Implication:** Colisi's 30+hr scope target addresses BOTH value-for-gameplay AND endgame-cliff, but they are **two distinct failure modes**, not one. A Short Hike validates length-vs-price-expectation matters; Spiritfarer/Stardew/Coral Island validate late-game-content-depletion matters.

---

## NEW corpus-level findings (surfaced during Daniel verification)

### Microtransactions — concentrated in F2P/DLC-heavy subsegment but DOMINANT there

| Game | MTX rate (substantive) | Status |
|---|---|---|
| **Palia** | **~54%** (15 of 28) | F2P; Daybreak acquisition + content-paywalled-from-existing-players |
| **Dreamlight Valley** | **~32%** (8 of 25) | F2P; "ruined the cozy mood" (R24 high-helpful) |
| Sun Haven | ~17% (5 of 30) | Paid + heavy DLC; $140 cosmetic bundles |
| Sandrock | ~11% (3 of 27) | Paid + cosmetic DLC |
| Hokko / Stardew / Coffee Talk / Spiritfarer / Portia / A Short Hike | 0% | — |

**Pattern:** Microtransactions complaints concentrate in F2P + DLC-heavy games but DOMINATE bounce reasons there. Empirical confirmation that cozy demographic is highly sensitive to monetization-coded mechanics. **Colisi's locked anti-clause against microtransactions / battle passes (per CLAUDE.md hard guardrails) is directly validated.**

### Real-time-timer / real-world-clock gating — Pillar 2 anti-clause extension empirically anchored

**12 cross-corpus reviews confirm the new anti-clauses** locked 2026-05-10 (SCOPE.md row 17 — Pillar 2 anti-clause extension):

| Game | Hits | Pattern |
|---|---|---|
| Cozy Grove | 6 | "daily mechanic" / "wait a day to progress" / "30 mins then real-time-day-wait" |
| Dreamlight Valley | 3 | R11 work-schedule-locked critters / R16 30min-4hr resource respawn / R30 mobile-grind |
| Palia | 2 | R2 17hr-pet-cooldown / V17 hours-to-wait-for-craft |
| Sandrock | 1 | R24 "copper to melt in realtime" |

**Implication:** The Pillar 2 anti-clause extension committed today (no real-time forward-timer gating + no real-world-clock-tied content gating) has STRONGER cross-corpus empirical support than even the original time-pressure anti-clause. The extension is load-bearing.

### Pillar-failure-shaped bounce patterns — Pillar validation density

Daniel tagged reviews with explicit pillar-bounce references across the corpus:

| Game | Pillar 1 | Pillar 2 | Pillar 3 | Total pillar-tagged |
|---|---|---|---|---|
| **Spiritfarer** | **15** | 3 | 4 | **22+ unique reviews** (73% of corpus — DENSEST) |
| **Cozy Grove** | 1 | **14** | 6 | 20+ unique reviews |
| **Hokko Life** | 5 | 2 | 1 | 8 |
| Coral Island | partial | partial | partial | unmarked R11-R30 |
| Sun Haven | — | — | 2 | 2 |

**Pattern:** Cozy players bounce on **pillar failures more than on the 5 D-MKTG-02 anti-features**. Spiritfarer + Cozy Grove + Hokko Life are pillar-validation-shaped bounce datasets:
- **Pillar 1 (Char Dev) failures** dominate Spiritfarer + Hokko: shallow characters / empty NPCs / "no activities that don't contribute to story" (Daniel-articulated principle from Spiritfarer R3)
- **Pillar 2 (Never Punishing) failures** dominate Cozy Grove: daily-time-gates / overwhelm / stress-coded
- **Pillar 3 (Approachability) failures** scattered across: motion-sickness / no-map / clarity / overwhelming-customization

**Implication:** Colisi's three-pillar architecture is the structural response to exactly these bounce patterns. The pillars are not theoretical — they are the empirical answer to the cozy bounce shape.

### Polish-as-accessibility (Pillar 3 expansion locked 2026-05-10) — empirically validated

Bug / crash / save-loss / polish-failure complaints across corpus:

| Game | Bug+polish review count | Notable patterns |
|---|---|---|
| Sun Haven | ~11 | sleep-progression-blocking (R11/R19/R23) — black-screen-after-sleep |
| Dreamlight Valley | ~11 | 4yr-old-bugs-unfixed (R9), save-loss (R25/R26), progression-blocked (R27/R29) |
| Sandrock | ~10 | softlocks, sleep-bug, save-loss (R6) |
| Coral Island | ~9 | crash-before-autosave (R10 — Daniel-flagged), dev-indifference (R20 at 99 helpful) |
| My Time at Portia | ~9 | mac-crashes (R9/R12/R22), save-loss (R2/R12) |
| **Total cross-corpus** | **~50+** | **dominant non-framework signal** |

**R10 Coral Island autosave annotation** (Daniel-flagged): "play 30 minutes then crashes right before auto-save, lose everything." Pairs with Sun Haven sleep-progression-blocking + Hokko R22 (59-hours-wiped) + Dreamlight R25/R26 save-loss-from-bugs.

**Implication:** Colisi's SAVE-04 + autosave design must use **granular incremental saves**, not session-end-only auto-saves. The Pillar 3 expansion locked today (SCOPE.md row 16 — production polish IS accessibility) is empirically validated. ~50+ reviews across 5 games demonstrate that bug-induced save failures bounce cozy players hard and stay bounced.

### Dev-labor-ethics — NEW corpus category (Daniel-surfaced)

Sun Haven verification surfaced a category outside D-MKTG-02 framework: dev-labor-ethics (underpaid staff, uncredited devs, predatory MTX pricing, broken-translation-promises). Daniel flagged this as **"could be a future category touching on AI assets."**

| Game | Dev-labor-ethics rate |
|---|---|
| **Sun Haven** | **~30%** (9+ of 30) — DOMINANT; 222-helpful-votes R13 "Credit your dev team" |
| **Palia** | partial overlap with MTX (V3 acquisition-bait-and-switch; ~4 reviews) |
| Other games | 0% |

**Implication:** Colisi's AI-DISCLOSURE.md transparency + solo-dev structure + no-AI-creative-content policy is **structurally advantageous** with this player segment. The cozy demographic overlaps with the dev-ethics-conscious player segment. Colisi's positioning honesty extends from "what the game IS" (anti-MTX, anti-VN, anti-time-pressure) to "how the game is MADE" (solo, AI-disclosed, ethical labor implicit because no labor to exploit).

### Marketing-honesty pattern — positioning-mismatch is a cross-corpus bounce reason

Players who came expecting X and got Y feel "cheated" and bounce hard:

| Game | Marketing | Reality | Empirical anchor |
|---|---|---|---|
| Coffee Talk | "coffee shop sim" implied | 90% VN | R30 "Interactivity? Who's she?" |
| Spiritfarer | "cozy and chill" | platformer-stress | R30 "feel cheated and lied to" |
| Sandrock | "sandbox" | "linear visual novel that cares nothing about the player" (R23) | direct quote |
| Palia | "multiplayer cozy MMO" | single-player with social hub | V15 "this isn't really a multiplayer game" |
| Cozy Grove | "cozy" | daily-time-restricted | R29 "if I wanted something like that I'd play mobile games" |

**Implication:** Colisi must market the actual experience honestly. Don't promise sim depth we won't deliver; don't promise VN depth we won't author; don't promise multiplayer if multiplayer isn't core. The positioning-honesty discipline extends beyond just the 5 anti-features.

---

## Verdict implications (provisional — pending survey results)

The Daniel-verified Steam review corpus provides **STRONG directional support** for the D-MKTG-02 thesis on 3 of the 5 anti-feature categories + 2 NEW architectural locks:

| Anti-feature | Corpus evidence (verified) | Verdict signal |
|---|---|---|
| **Time-pressure** | Cozy Grove 40%, Portia 17%, Coral Island 17%, Dreamlight 12%; 10% corpus rate + 12 timeforward-gating cross-corpus hits | **STRONG SUPPORT** (anti-clause + extension empirically validated) |
| **VN-style** | Coffee Talk 69%; 5.8% corpus rate (concentrated in pure-VN comparable) | **STRONG SUPPORT (genre-segment-specific)** |
| **Endgame cliff** | Coral Island 3, Spiritfarer 2, Dreamlight 2, Hokko 2, Sun Haven 2, Sandrock 1; 4.8% corpus rate | **MODERATE SUPPORT** (lower than pre-verification due to A Short Hike reframe to value-for-gameplay) |
| **Difficulty walls** | Spiritfarer 3 (platforming), A Short Hike + Coffee Talk + Stardew 2 each (minigames); 4.2% corpus rate | **WEAK-MODERATE SUPPORT (minigame-difficulty pattern)** |
| **Required-multiplayer** | Coral Island R3 only; 0.3% corpus rate | **INSUFFICIENT** — relies on persona-zero anchor |

**Plus empirical anchors for architectural commits locked during verification (SCOPE.md rows 16-17):**

| Architectural lock | Empirical anchor | Status |
|---|---|---|
| Pillar 3 polish-as-accessibility | ~50+ bug/crash/polish-failure reviews across 5+ games | EMPIRICALLY VALIDATED |
| Pillar 2 anti-clause extension (no real-time-timer / no real-world-clock gating) | 12 cross-corpus hits (Cozy Grove 6 + Dreamlight 3 + Sandrock 1 + Palia 2) | EMPIRICALLY VALIDATED |

**NEW corpus categories surfaced (not in original D-MKTG-02 framework):**

| Category | Strength | Colisi response |
|---|---|---|
| Microtransactions / monetization | ~29 reviews; ~9% corpus rate (concentrated in F2P/DLC-heavy) | locked anti-clause against MTX / battle passes |
| Dev-labor-ethics | ~12 reviews; Sun Haven dominant | AI-DISCLOSURE.md transparency = structural advantage |
| Value-for-gameplay (pricing vs length) | 8 reviews (A Short Hike); distinct from endgame-cliff | 30+hr scope target |
| Polish-as-accessibility | 50+ reviews | Pillar 3 expansion locked 2026-05-10 |
| Marketing-honesty | 5+ games show positioning-mismatch | positioning-honesty discipline added |

**Honest framing per PHILOSOPHY.md / Pitfall 4:** This Daniel-verified evidence is *consistent with* the D-MKTG-02 thesis AND empirically validates the Pillar 2 + Pillar 3 architectural locks made today. It does NOT independently validate the underserved-demographic thesis — the corpus shows cozy players DO bounce on time-pressure / VN-format / endgame-cliffs / polish-failure / microtransactions / pillar-failures at meaningful rates. It does NOT show whether a hypothetical Colisi player segment large enough to support the project exists, or whether they would prefer Colisi's specific differentiation.

**The survey (Task 3) remains the gate** for the demand-side thesis (per ALIGN-04 + D-MKTG-02 verdict criteria).

---

## Methodology + caveats

- **LLM classifier:** Reviews tagged by Claude Opus 4.7 per D-MKTG-02 5-category framework + non-substantive filter. All tags Daniel-verified per D-MKTG-02 anti-bias discipline.
- **Verification protocol:** Daniel read each quote individually (no batch verification). Pattern observed: Claude's non-substantive filter was too conservative; Daniel promoted ~50 NS rows to substantive based on playtime + content context.
- **Sample limitations:**
  - 30 reviews per game = recency snapshot, not corpus-statistical (Palia recovered via `filter=all` for 50-review corpus)
  - English-language only; non-English cozy-demographic bounces uncaptured
- **Fetch gaps (3 games could not be classified):**
  - **Rune Factory 5** — appid 1599420 returned 0 reviews; alternative appids attempted, none recovered substantive corpus
  - **Wylde Flowers** — appid 1612710 returned 0 reviews; alternative appids attempted, none recovered substantive corpus
  - **Spirittea** — appid 1840400 returned 0 reviews; multiple alternative appids attempted, none recovered substantive corpus
  - Without external appid-lookup mechanism, these 3 games are documented as known limitations. Final corpus is 12 games / 362 reviews (target was 12-20 / 360-600 reviews).
- **Filter (Daniel-verified):** `filter=recent` for 11 games (captures recent bounces); `filter=all` for Palia (F2P review aggregation differs; recovered 50 reviews vs `filter=recent` 2 reviews).
- **Non-substantive filter (Daniel-verified):** Reviews promoted/rejected per Daniel's read of playtime + content. Final NS count: 52 of 362 (14%). Includes pure-controversy reviews (LGBTQ+ representation objections, dev-political-rants), jokes, single-word reviews, foreign-language-only, and ad-hominem-only reviews.

---

## Cross-references

- Corpus methodology: `01-CONTEXT.md` D-MKTG-01..06
- Plan: `01-07-mktg-06-validation-PLAN.md`
- SUMMARY: `01-07-mktg-06-validation-SUMMARY.md` (will be updated post-this-sweep)
- Architectural locks made during verification:
  - SCOPE.md row 16: Pillar 3 expansion — polish IS accessibility
  - SCOPE.md row 17: Pillar 2 anti-clause extension — no real-time-timer / real-world-clock gating
- Per-game classification files: 12 of 12 Daniel-verified at `*-classified.md`
- Cross-corpus pattern surface: this file (`_summary-tallies.md`)
- Verdict authoring: `.planning/MARKET-EVIDENCE.md` (pending survey + Daniel verdict)
