---
deliverable: 21
pack: process
title: Year-3-Wall Tripwires Protocol
author: Claude (protocol synthesis from D-WALL-01..07); Daniel (specific thresholds in plan 01-06; outside-reviewer designation in plan 01-08)
ai_role: synthesis-allowed (protocol structure from CONTEXT.md; specific thresholds and outside-reviewer name require Daniel)
depends_on:
  - .planning/phases/01-foundations-vision-lock/01-CONTEXT.md
  - .planning/research/PITFALLS.md
decisions_referenced:
  - D-SCOPE-21
  - D-WALL-01
  - D-WALL-02
  - D-WALL-03
  - D-WALL-04
  - D-WALL-05
  - D-WALL-06
  - D-WALL-07
  - D-SUST-08
downstream_consumers:
  - 28-greenlight.md (tripwire criteria are load-bearing co-signature in greenlight)
  - Quarterly review (D-SUST-06) — tripwire status checked
  - Monthly retro — leading indicators reviewed
  - Phase 8 onwards (wishlist count tripwires fire at m12/m24/m36)
  - 27-MARKET-EVIDENCE.md (MKTG-06 verdict feeds m6 tripwire data)
---

# Year-3-Wall Tripwires Protocol — Colisi

> Per `D-SCOPE-21` + `HEALTH-03`: pre-committed pivot tripwires that fire automatically at named checkpoints and trigger the structured pause-and-replan protocol. Specific metric thresholds are populated in plan 01-06 from comparable-game research per `D-WALL-07`. Outside reviewer designated in plan 01-08 (Greenlight gate).
>
> The protocol exists because solo-dev burnout is one of the four killers (`PITFALLS.md` Pitfall 4); without pre-committed tripwires, tired-Daniel will rationalize past warning signs.

---

## Cascade cadence (D-WALL-01)

Four checkpoints at month 6 / 12 / 24 / 36. Each has its own pass/fail criteria. Earlier checkpoints catch problems while reversible; month 36 is the existential pivot point.

| Checkpoint | Project state at this point (target) | Existential or course-correcting? |
|------------|----------------------------------------|------------------------------------|
| **m6** | Phase 1 complete, Phase 2 mostly complete, MKTG-06 verdict landed | Course-correcting (early signal) |
| **m12** | Phase 3 mostly complete, Steam page sketch exists | Course-correcting (mid signal) |
| **m24** | Slice in late development, public devlog at established cadence, Steam page may be live | Strongly course-correcting (late signal) |
| **m36** | Slice ideally shipped; if not shipped, "Vol. 1" pivot decision | **Existential** — the named pivot point |

---

## Multi-OR triggers (D-WALL-02)

Any single metric below threshold fires the tripwire. Aggressive against late-firing; high false-alarm rate is acceptable BECAUSE the response is structured-pause, not auto-cut. False alarms are not costly; missed signals are.

---

## Pause-and-replan protocol (D-WALL-03)

When a tripwire fires:

1. **Trip detected** — mechanical, from metric check at checkpoint date
2. **Mandatory feature-work freeze** — no new code/content during pause
3. **1-week time-boxed pause window** — Daniel's choice; tighter than the 2-week recommendation
4. **Replan Document** authored during the pause:
   - Diagnosis (what data fired which metric, why)
   - Root-cause hypothesis (not symptom)
   - Three scenarios evaluated:
     - **Scenario A:** continue as-is (with explicit accepted-risk statement)
     - **Scenario B:** scoped continue (Vol. 1-style content cut, systems intact)
     - **Scenario C:** structural pivot (cut systems, change shape, or pause indefinite)
   - Scenario recommendation + rationale
5. **Outside reviewer cross-check** — pre-committed reviewer reads Replan Doc; their answer is **required co-signature** on chosen scenario (NOT advisory)
6. **Decision logged** in `SCOPE.md` + `ROADMAP.md` amendment (no silent drift)
7. **Return to work OR exit**

---

## Re-arm-and-rebaseline (D-WALL-04)

If the chosen scenario is **continue-as-is**, the Replan Doc must include updated specific metric targets to hit by next checkpoint. Cascade stays live. This prevents the "tripwire fires → talk it through → nothing changes → next tripwire ignored" failure mode.

---

## Enforcement (D-WALL-05)

**Pre-committed in writing + Daniel + designated outside reviewer.** Tripwire criteria are signed and dated in the Greenlight document (`28-greenlight.md`). When fired, Daniel + outside reviewer co-sign the chosen scenario.

**Outside reviewer name:** {Daniel designates before D-SCOPE-28 Greenlight — Phase 1 blocker per plan 01-08}

The outside reviewer is someone who:
- Has read this document AND the Greenlight document
- Agrees to read any Replan Doc filed during a tripwire pause
- Will co-sign or reject the chosen scenario
- Is **not** persona-zero (Dawn) — separation of design feedback from project-existence feedback
- Is reachable on a 1-week response timeline if a tripwire fires

---

## Productivity-tripwire metric unit (D-WALL-06)

Unit: **cumulative phase-completion delta vs roadmap estimate.** *(Same metric as `D-SUST-08` productivity tripwire signal in `20-sustainable-pace-cadence.md`.)*

Specific delta thresholds at each checkpoint authored in plan 01-06 per `D-WALL-07`.

The metric is honest because:
- It compounds (small deltas in early phases become large deltas later)
- It's empirically testable (actual phase completion dates vs roadmap estimates)
- It's not hour-based (avoids pressure-creating measurement per `D-SUST-02`)

---

## Specific metric thresholds at each checkpoint (D-WALL-07)

> **Status: deferred to plan 01-06.** Threshold cells below are populated by Daniel after a few hours of comparable-game research per `D-WALL-07` and `PITFALLS.md` Pitfall 3 ("Year-3-Wall thresholds set without comparable-game data" — sets thresholds on intuition rather than calibration). Sources: Chris Zukowski's wishlist-trajectory case studies, SteamDB stats for 5–10 cozy life sims, howtomarketagame.com posts.

**Status: LOCKED 2026-05-10** (Daniel-recommended conservative thresholds from comparable-game research note; sourced from `research/year3wall-comparable-games-note.md`). Risk-tolerance posture: **conservative** — earlier-firing tripwires + more pause-and-replan moments + aligns with solo-dev burnout prevention per HEALTH-03 + D-SUST-01..08 sustainability commitments. False alarms acceptable per D-WALL-02; missed signals are not.

| Checkpoint | Metric | Threshold | Source / rationale |
|------------|--------|-----------|---------------------|
| **m6** | MKTG-06 verdict | **Verdict must land** (Confirmed / Refined / Rejected per D-MKTG-04) | Per `D-MKTG-04` rubric + HEALTH-03; verdict-landing is binary requirement |
| **m6** | Cumulative phase-completion delta | **2 months behind cumulative phase plan trips** | `D-WALL-06` productivity metric; conservative posture (Zukowski analyses + comparable solo-dev timelines per research note) |
| **m12** | Cumulative phase-completion delta | **3 months behind cumulative phase plan trips** | `D-WALL-06` productivity metric; per `ROADMAP.md` Phase 3 risk; conservative |
| **m12** | Phase 3 slice-blocking foundations status | **<7 of 9 foundations in place trips** | Per `ROADMAP.md` Phase 3 success criteria; conservative (allows 2 of 9 to slip; below that signals real Phase 3 difficulty) |
| **m24** | Wishlist count (if Steam page is up by m24) | **<1,000 wishlists trips** | Indie cozy life sim wishlist trajectories per research note; conservative midpoint of 500-2,000 range; assumes competent solo-dev devlog + festival cycle without requiring Wholesome Direct breakout |
| **m24** | Slice ship status | **Slice not in late-development trips** (slice should be in beta or shipped to ring-2 testers per `ROADMAP.md` Phase 7) | `ROADMAP.md` Phase 7 timeline |
| **m24** | Cumulative phase-completion delta | **6 months behind cumulative phase plan trips** | `D-WALL-06`; approaching Year-3-Wall warning territory |
| **m36** | Wishlist count | **<3,000 wishlists trips** | The existential checkpoint; conservative midpoint of 2,000-5,000 range per research note |
| **m36** | "Vol. 1 pivot" criteria | **If slice not shipped AND wishlist <3,000 → formal Vol. 1 pivot evaluation** (cut full-game scope to 15-20hr v1 commercial launch; defer remaining 10-15+ hours to free post-launch updates) | Per `ROADMAP.md` "Brutally Honest Timeline" + `HEALTH-03`; explicit pivot-criteria formula |
| **m36** | Productivity rate vs full-game scope | **If observed pace = 24+ more months to complete remaining 30hr scope → consider Vol. 1 pivot** | `ROADMAP.md` Brutally Honest Timeline; productivity-realism check at existential checkpoint |

---

## Outside-reviewer designation (D-WALL-05 reframe 2026-05-10)

> **Reframed 2026-05-10** (Daniel decision documented in SCOPE.md row): D-WALL-05's original "single named outside reviewer" structure does not fit Daniel's project profile (solo indie dev without pre-existing trusted-outsider relationships available for committed multi-year project review). Replaced with **hybrid LLM-primary + community-secondary structure** that preserves D-WALL-05's intent (break confirmation bias via independent perspective at each tripwire checkpoint).

### Outside-reviewer mechanism

**Primary: Cross-family LLM review with standardized skeptical prompt + full project context.**

- **Model:** cross-family LLM (NOT Claude — different training corpus + different biases). Initial choice: **GPT 5.4** (or whichever cross-family model is current at each tripwire date).
- **Prompt template:** standardized, Claude-authored (per CLAUDE.md AI policy enforcement delegation), committable + transparent. Drafted at Phase 2 start before any tripwire fires (deferred per Daniel decision 2026-05-10).
- **Inputs at each tripwire:** full project context (SCOPE.md + STATE.md + relevant Phase deliverables + current tripwire metric data) injected into LLM context window; standardized devil's-advocate / push-back / confirmation-bias-check skeptical prompt prepended.
- **Output:** LLM analyzes whether tripwires fire + identifies confirmation bias + proposes response. Output is logged verbatim in `.planning/playtest-log/outside-review-{checkpoint}-{YYYY-MM-DD}.md`.
- **Why this works:** Claude (this conversation, as AI policy enforcer per CLAUDE.md) writes the prompt with genuine skeptical / devil's-advocate framing; prompt is committable + transparent (can't be shaped to favor preferred outcome); cross-family model has different biases than Claude; LLM with full project context achieves information-continuity layer; analytical quality may exceed random community responses.

**Secondary: Structured-community-feedback for public-commitment dimension.**

- **Public-commitment baseline:** Year-3-Wall criteria (this entire `21-year3wall-tripwires.md` doc) posted publicly via MKTG-02 devlog at Phase 2 start. Once public, criteria cannot be quietly redefined when tripwires fire.
- **Pre-checkpoint posts:** ~2-4 weeks before each tripwire (m6 / m12 / m24 / m36), Daniel posts current project state + asks for community read via devlog (Bluesky / Mastodon / blog) + r/CozyGamers / r/IndieGames / Wholesome Games org / indie dev Discord.
- **At checkpoint:** Daniel posts whether tripwires fired + proposed response; engages community feedback over ~7-14 day window.
- **Documentation:** all community feedback engagement logged transparently (where posted, when, representative feedback received, how it shaped response).
- **Why secondary:** community provides public-commitment + social-accountability + occasional substantive feedback, but analytical-quality variable; LLM with locked-prompt provides more consistent analytical input.

**Tertiary: Dawn (persona-zero) at HEALTH-05 ritual.**

- After LLM analysis + community engagement, Daniel + Dawn execute HEALTH-05 ritual session focused on the tripwire moment.
- Dawn provides persona-zero re-anchor — does the proposed response preserve the cozy promise + persona-zero alignment that grounded the project?
- Internal sanity-check; complements outside perspectives without serving as outside review itself.

### Mechanism caveats (honest)

- **AI-policy structural irony:** project has strict anti-AI-content commitments per CLAUDE.md + PHILOSOPHY.md §V. Using AI as primary outside reviewer is a structural tension. D-WALL-05's intent is decision-process review (not creative content authoring), so the AI-policy concern is mitigated — but the irony is noted.
- **Existential-moment limitation:** at m36 "consider Vol. 1 pivot," LLM private review lacks the social-pressure layer human reviewers provide. Mitigated by community public-commitment posts + Dawn HEALTH-05 anchor.
- **Prompt-shaping risk mitigated by Claude authorship + transparency:** standardized prompt template lives in repo + posted in devlog at Phase 2 start. Prompt cannot be shaped post-hoc to favor preferred outcomes.

### Outside-reviewer mechanism implementation tracking

| Item | Status | Target |
|---|---|---|
| **Standardized LLM skeptical-prompt template** | ~~DEFERRED to Phase 2 start~~ **DRAFTED + Daniel-SIGNED 2026-05-11** at `.planning/tripwire-review-prompt.md` (v1.0; Claude-authored per AI policy enforcement delegation; Daniel reviewed-and-approved-as-is 2026-05-11). Immutability discipline now in force — any amendment requires versioning protocol per the template's own versioning section. MKTG-02 devlog publication still scheduled for Phase 2 start. | v1.0 committed + signed 2026-05-11; published before m6 tripwire window opens |
| **Public commitment of Year-3-Wall criteria** | DEFERRED to Phase 2 / MKTG-02 devlog launch (~m3) | Post this entire doc publicly when devlog goes live |
| **First LLM tripwire review** | Scheduled for m6 checkpoint | Run standardized prompt + log to playtest-log per protocol |
| **Pre-checkpoint community posts** | Scheduled for ~2-4 weeks before each tripwire (m6 / m12 / m24 / m36) | Devlog + Reddit + Discord engagement per channel list above |
| **Dawn HEALTH-05 tripwire-focused session** | Scheduled at each tripwire (post LLM + community engagement) | Bi-weekly cadence per D-SUST-07 absorbs naturally |

---

## Daniel signature

**Year-3-Wall Tripwires Protocol ratified by:** Daniel Hicks
**Date:** 2026-05-10
**Threshold posture:** Conservative (per `research/year3wall-comparable-games-note.md` Daniel-recommended set). Risk tolerance: solo-dev burnout prevention favors earlier-firing tripwires + more pause-and-replan moments.
**Outside-reviewer mechanism:** Hybrid LLM-primary (GPT 5.4 / cross-family with Claude-authored standardized skeptical prompt) + community-secondary (public commitment + pre-checkpoint posts + at-checkpoint engagement) + Dawn HEALTH-05 tertiary anchor. Original single-named-reviewer model (D-WALL-05) reframed per Daniel decision 2026-05-10; SCOPE.md row added.

**Daniel signature:** 2026-05-10 — Year-3-Wall thresholds LOCKED at conservative posture; outside-reviewer mechanism LOCKED at hybrid structure; standardized LLM prompt template authoring deferred to Phase 2 start.

**Daniel signature (amendment):** 2026-05-11 — Standardized LLM prompt template DRAFTED early (during Phase 1→2 transition prep work, not deferred to Phase 2 start as originally scheduled). v1.0 at `.planning/tripwire-review-prompt.md`. Reviewed-and-approved-as-is by Daniel. Immutability discipline in force from this commit forward — any amendment requires versioning protocol per the template's own versioning section.

---

## Cross-references

- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-WALL-01..07`, `D-SUST-08`, `D-SCOPE-21`
- `.planning/REQUIREMENTS.md` — `HEALTH-03`
- `.planning/research/PITFALLS.md` — Pitfall 4 (solo-dev burnout, one of four killers); Pitfall 3 (year-3-wall thresholds without comparable-game data, in 01-RESEARCH.md)
- `.planning/ROADMAP.md` — "Brutally Honest Timeline" frames the m36 existential checkpoint
- `20-sustainable-pace-cadence.md` — productivity tripwire unit defined parallel
- `28-greenlight.md` — load-bearing co-signature on these criteria
- `27-MARKET-EVIDENCE.md` — MKTG-06 verdict feeds m6 tripwire
- `15-risk-register.md` R-14 (outside-reviewer not designated by Greenlight)
