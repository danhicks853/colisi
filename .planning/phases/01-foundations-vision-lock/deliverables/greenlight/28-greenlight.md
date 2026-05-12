---
deliverable: 28
pack: greenlight
title: Colisi Greenlight Document
author: Daniel (knowing-what-I-now-know commitment + sign-off); Claude (structural skeleton + decision-ID list extracts)
ai_role: structure-only + factual extracts of D-VISION decisions and ratification cross-references; Claude refuses to draft the commitment paragraph or any voice content
depends_on:
  - 01-vision-pitch.md
  - 17-tools-pipeline-ratification.md
  - 20-sustainable-pace-cadence.md
  - 21-year3wall-tripwires.md
  - 22-personazero-playtest-ritual.md
  - 24-time-model-lock.md
  - 25-stack-ratification.md
  - 26-architecture-ratification.md
  - 27-MARKET-EVIDENCE.md
decisions_referenced:
  - D-SCOPE-28
  - D-VISION-01
  - D-VISION-02
  - D-VISION-03
  - D-VISION-04
  - D-VISION-05
  - D-VISION-06
  - D-VISION-07
  - D-VISION-08
  - D-WALL-05
downstream_consumers:
  - PROJECT.md (greenlight status logged)
  - STATE.md (Phase 1 → Phase 2 transition gate)
  - ROADMAP.md (Phase 2 entry unblocked by greenlight)
  - All future Replan Docs (this is the load-bearing co-signature reference if a tripwire fires)
---

> **AI POLICY (PHILOSOPHY.md §V):** Daniel authors the **knowing-what-I-now-know commitment paragraph** himself — this is creative-content prose. Claude provides ONLY the section structure, the factual `D-VISION` decision-ID extracts (citation, not voice), and the ratification cross-references. Claude refuses to draft the commitment paragraph or any other Daniel-authoring section. Claude critiques drafts when Daniel requests.

# Colisi Greenlight Document

> Per `D-SCOPE-28`: Daniel signs off as solo-dev "producer"; dated; "knowing what I now know, I commit to this" statement; gates Phase 2 entry. Includes pre-committed Year-3-Wall tripwire criteria as load-bearing co-signature per `D-WALL-05`.
>
> **Source format** (per `01-RESEARCH.md` Example 3): standard studio greenlight pattern — vision lock + risk acceptance + tripwires + signature line. Adapted for Colisi's solo-dev context.

---

**Date:** {YYYY-MM-DD — Daniel signs at plan 01-08}
**Project state:** Phase 1 (Foundations & Vision Lock) complete; Phase 2 (Infrastructure & Repo Setup) ready to begin.
**Signed by:** Daniel Hicks (solo-dev producer)
**Outside-reviewer mechanism (per D-WALL-05 reframe 2026-05-10, SCOPE row 15):** Hybrid LLM-primary + community-secondary + Dawn-tertiary. **Primary:** cross-family LLM (GPT-5.x / Gemini) running standardized adversarial-review prompt at `.planning/tripwire-review-prompt.md` v1.0 (Daniel-signed 2026-05-11). **Secondary:** structured community feedback via MKTG-02 devlog (pre-checkpoint posts + at-checkpoint engagement). **Tertiary:** Dawn at HEALTH-05 ritual. No single named human outside reviewer (Daniel did not have one available; honest reframe rather than fake-designate).

---

## Vision lock confirmation

I confirm the locked vision per `01-CONTEXT.md` `D-VISION-01..08`:

- **D-VISION-01:** Player is a magical helper-sprite — not a human protagonist. The sprite drifts/floats through a village.
- **D-VISION-02:** Each villager has their own personal magic that the player-sprite enables through relationship.
- **D-VISION-03:** Power distribution rule — the sprite gives magic, never accumulates it. Power scales with relationship, not stat-grinding.
- **D-VISION-04:** Central puzzle layer is matchmaking-via-environmental-manipulation. Sprite observes villagers and gently engineers meet-cute encounters.
- **D-VISION-05:** Persona-zero (Dawn) validated and co-developed the premise during `/gsd:discuss-phase 1` on 2026-05-09.
- **D-VISION-06:** This is the BG3 × Sims dream cross translated to mechanics — Sims-like world manipulation feeding BG3-like dialogue branching.
- **D-VISION-07:** Romance content in v1 is between villagers, not player-to-villager. Sprite cannot romance in v1.
- **D-VISION-08:** Per AI policy (`PHILOSOPHY.md` §V), Daniel and Dawn author all in-world content; Claude does not generate any of it.

Cross-reference: `01-vision-pitch.md` (Daniel-authored pitch derived from these decisions).

---

## Decisions ratified

I ratify the locked decisions captured in the following Phase 1 deliverables:

| Locked decision area | Ratification document | Source of truth |
|----------------------|----------------------|-----------------|
| **Tech stack** | `25-stack-ratification.md` | `research/STACK.md` |
| **Tools / pipeline** | `17-tools-pipeline-ratification.md` | `research/STACK.md` |
| **Architecture** | `26-architecture-ratification.md` | `research/ARCHITECTURE.md` |
| **Time model** | `24-time-model-lock.md` | `01-CONTEXT.md` `D-TIME-01..05` |
| **Sustainability rhythms** | `20-sustainable-pace-cadence.md` | `01-CONTEXT.md` `D-SUST-01..08` |
| **Year-3-Wall protocol** | `21-year3wall-tripwires.md` | `01-CONTEXT.md` `D-WALL-01..07` |
| **Persona-zero playtest ritual** | `22-personazero-playtest-ritual.md` | `01-CONTEXT.md` `D-SUST-07`; `HEALTH-05` |
| **MKTG-06 verdict** | `27-MARKET-EVIDENCE.md` | `01-CONTEXT.md` `D-MKTG-01..06` |

---

## Year-3-Wall tripwire criteria (load-bearing co-signature)

The following are pre-committed per `D-WALL-05`; they fire automatically at the named checkpoint and trigger the structured pause-and-replan protocol per `D-WALL-03`.

> **Status:** thresholds populated by Daniel after comparable-game research per `D-WALL-07` in plan 01-06. The table below mirrors `21-year3wall-tripwires.md`; this document is the **load-bearing copy** that the outside reviewer co-signs.

| Checkpoint | Metric | Threshold (LOCKED 2026-05-10 conservative posture) | Source / rationale |
|------------|--------|-----------|---------------------|
| **m6** | MKTG-06 verdict landed | **Verdict must land** (Confirmed / Refined / Rejected per D-MKTG-04) | Per `D-MKTG-04` rubric + `27-MARKET-EVIDENCE.md`; verdict-landing is binary requirement |
| **m6** | Cumulative phase-completion delta | **2 months behind cumulative phase plan trips** | `D-WALL-06` productivity metric; conservative posture per `research/year3wall-comparable-games-note.md` |
| **m12** | Cumulative phase-completion delta | **3 months behind cumulative phase plan trips** | `D-WALL-06`; per `ROADMAP.md` Phase 3 risk |
| **m12** | Phase 3 slice-blocking foundations status | **<7 of 9 foundations in place trips** | Per `ROADMAP.md` Phase 3 success criteria; conservative (allows 2 of 9 to slip) |
| **m24** | Wishlist count (if Steam page is up by m24) | **<1,000 wishlists trips** | Indie cozy life sim wishlist trajectories per research note; conservative midpoint of 500-2,000 range |
| **m24** | Slice ship status | **Slice not in late-development trips** (should be in beta or shipped to ring-2 testers per `ROADMAP.md` Phase 7) | `ROADMAP.md` Phase 7 timeline |
| **m24** | Cumulative phase-completion delta | **6 months behind cumulative phase plan trips** | `D-WALL-06`; approaching Year-3-Wall warning territory |
| **m36** | Wishlist count | **<3,000 wishlists trips** | The existential checkpoint; conservative midpoint of 2,000-5,000 range per research note |
| **m36** | "Vol. 1 pivot" criteria | **If slice not shipped AND wishlist <3,000 → formal Vol. 1 pivot evaluation** (cut full-game scope to 15-20hr v1 commercial launch; defer remaining 10-15+ hours to free post-launch updates) | Per `ROADMAP.md` "Brutally Honest Timeline" + `HEALTH-03`; explicit pivot-criteria formula |
| **m36** | Productivity rate vs full-game scope | **If observed pace = 24+ more months to complete remaining 30hr scope → consider Vol. 1 pivot** | `ROADMAP.md` Brutally Honest Timeline; productivity-realism check at existential checkpoint |

**Outside-reviewer mechanism cosignature (D-WALL-05 hybrid):**

The hybrid mechanism's three tiers run at each tripwire firing:

- **Primary tier — cross-family LLM:** Daniel runs `.planning/tripwire-review-prompt.md` v1.0 (immutable post-commit; Daniel-signed 2026-05-11) through a cross-family LLM (GPT-5.x or Gemini, NOT Claude per anti-family-bias requirement). Two independent runs per tripwire. Responses committed verbatim to `.planning/tripwire-reviews/[YYYY-MM-DD]-mN-llm-review.md`.

- **Secondary tier — community feedback:** Year-3-Wall criteria above are posted publicly via MKTG-02 devlog at Phase 2 start (public commitment per anti-shopping discipline). Pre-checkpoint posts ~2-4 weeks before each tripwire to devlog / Reddit / Discord / Wholesome Games org / indie-dev Discord.

- **Tertiary tier — Dawn HEALTH-05 ritual:** persona-zero re-anchor after LLM + community engagement. Bi-weekly cadence per D-SUST-07 absorbs naturally around tripwire timing.

By signing this Greenlight, Daniel commits to:
- Following the structured pause-and-replan protocol per `D-WALL-03` when any tripwire fires (no auto-cut; 7-day pause with 3-scenario evaluation)
- Running all three tiers at each tripwire (not just the most-convenient tier)
- Committing LLM responses verbatim (anti-shopping discipline)
- Authoring the tripwire-decision file at `.planning/tripwire-reviews/[YYYY-MM-DD]-mN-decision.md` after the 7-day window, with rationale + which dissenting reviewer perspectives were not followed (if applicable)
- The decision is durable. The protocol exists because Daniel's gut at the tripwire moment is the LEAST reliable input.

---

## Knowing-what-I-now-know commitment

> Per `D-SCOPE-28` and `01-RESEARCH.md` Example 3 lines 794–796: Daniel writes a "knowing what I now know" commitment paragraph here. The paragraph names the scope, timeline, AI policy, four killers, cozy promise, vertical slice expectation, Daniel's own capabilities, persona-zero's validated reactions, and the locked architecture, and commits to the project knowing each.
>
> Per AI policy (`PHILOSOPHY.md` §V), **Claude does not draft this prose.** This is the one prose-style item in the Greenlight document; Daniel authors it.

{Daniel writes the commitment paragraph here. Plus any caveats or watch-items Daniel wants to flag now rather than later. Per AI policy, Claude does not generate this content.}

---

## Sign-off

**Signed:** Daniel Hicks
**Role:** Solo-dev producer
**Date:** {YYYY-MM-DD}

---

**Outside-reviewer mechanism instantiation (D-WALL-05 hybrid — no single human reviewer per 2026-05-10 reframe):**
- LLM-primary mechanism: `.planning/tripwire-review-prompt.md` v1.0 (Daniel-signed 2026-05-11; immutable post-commit)
- Community-secondary mechanism: scheduled for MKTG-02 devlog publication at Phase 2 start
- Dawn-tertiary mechanism: HEALTH-05 bi-weekly ritual ongoing (session 1 complete 2026-05-10; session 2 ≥2026-05-24)

**Mechanism review timestamp:** {YYYY-MM-DD — Daniel confirms hybrid mechanism is in place at Greenlight signature}

---

## Cross-references

- `01-vision-pitch.md` — pitch derived from `D-VISION-01..08`
- `17-tools-pipeline-ratification.md`, `25-stack-ratification.md` — stack ratification
- `26-architecture-ratification.md` — architecture ratification
- `24-time-model-lock.md` — time model lock
- `20-sustainable-pace-cadence.md` — sustainability rhythms
- `21-year3wall-tripwires.md` — full Year-3-Wall protocol (this doc is the load-bearing copy)
- `22-personazero-playtest-ritual.md` — persona-zero ritual; `HEALTH-05` minimum 2 sessions verified
- `.planning/tripwire-review-prompt.md` v1.0 — D-WALL-05 hybrid Primary-tier prompt (Daniel-signed 2026-05-11; immutable)
- `27-MARKET-EVIDENCE.md` — `MKTG-06` verdict
- `.planning/SCOPE.md` rows 6-17 — Phase 1 architectural commits (D-VISION-09..14, AUDIO, Cast Rep, Pillar 3 polish, Pillar 2 anti-clause extension)
- `.planning/phases/01-foundations-vision-lock/01-AUDIT.md` — Phase 1 pre-Greenlight audit (26/28 complete + 2 calendar-gated)
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-28`, `D-VISION-01..08`, `D-WALL-01..07`
- `PROJECT.md`, `STATE.md`, `ROADMAP.md` — Phase 2 entry unblocked by this signature

---

## Plan 01-08 execution checklist (pre-staged 2026-05-11)

When plan 01-08 executes, this scaffold becomes a fill-in-the-blanks operation. Below is the explicit completion sequence:

**Calendar-gated prerequisites (both must clear before Greenlight signature):**

- [ ] **MKTG-06 verdict landed** — survey collected ≥50 responses, Daniel applied D-MKTG-04 triangulation rubric, draft verdict authored (Confirmed / Refined / Rejected), LLM-Primary skeptical review run on draft verdict, community-Secondary feedback collected, Dawn-Tertiary HEALTH-05 review run, final MARKET-EVIDENCE.md moved to `.planning/MARKET-EVIDENCE.md`. *Status: in flight — 13/50 responses at 2026-05-11.*
- [ ] **HEALTH-05 session 2 complete** — bi-weekly cadence per D-SUST-07; session 2 ≥14 days after session 1 = ≥2026-05-24. Topic: Phase 1 artifacts Dawn reacts to (recommended: World Bible v0.1, slice scenario sketch, NG+ premise, Style Guide v0.1). Logged to `.planning/playtest-log/`. *Status: scheduled ≥2026-05-24.*

**Pre-Greenlight final review (when both calendar gates clear):**

- [ ] Verify all 26 already-complete Phase 1 success criteria still hold (no regressions)
- [ ] Confirm MKTG-06 verdict cited in this doc matches `.planning/MARKET-EVIDENCE.md`
- [ ] Confirm HEALTH-05 session 2 logged + counted toward HEALTH-05 minimum-2-sessions requirement
- [ ] If MKTG-06 verdict = Refined-significantly OR Rejected: ROADMAP.md amendment required BEFORE Greenlight signature (per plan 01-07 verdict-implication path)

**Daniel-authored final content (per AI policy — Claude does NOT draft):**

- [ ] Date filled (top of doc + sign-off section)
- [ ] **Knowing-what-I-now-know commitment paragraph** authored by Daniel (the one prose-style section in this document — required per `D-SCOPE-28` and `01-RESEARCH.md` Example 3)
- [ ] Daniel signature on main signature line
- [ ] Mechanism review timestamp filled (hybrid mechanism confirmed in place)

**Post-signature:**

- [ ] STATE.md updated to reflect Phase 1 → Phase 2 transition unblocked
- [ ] SCOPE.md row added for Greenlight signature
- [ ] ROADMAP.md Phase 1 marked complete in Progress section
- [ ] `/gsd:transition` (or equivalent) executed to lock Phase 1 and advance state to Phase 2
- [ ] Plan 02-XX (Phase 2 INFRA setup) plan-creation triggered

**Out-of-scope for plan 01-08 (deferred):**

- Phase 2 INFRA execution itself — plan 02-XX, after Greenlight signature
- MKTG-02 devlog launch — Phase 2 plan
- Standardized LLM prompt template publication in devlog — Phase 2 start
- ROADMAP.md amendment (if needed per MKTG-06 verdict) — between plan 01-07 and plan 01-08 if verdict requires it

---

*Pre-staged 2026-05-11 during Phase 1 transition prep work. All non-Daniel-authored sections are populated from locked decisions. The Daniel-authored "knowing what I now know" commitment paragraph remains blank per AI policy and is the load-bearing remaining work for plan 01-08.*
