---
phase: 1
slug: foundations-vision-lock
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-05-09
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.
>
> **Phase 1 caveat:** Phase 1 has no code. "Validation" for Phase 1 deliverables is **document peer-review by Daniel + persona-zero (Dawn) reactions + outside reviewer signature on Greenlight**. There is no automated test infrastructure. The Validation Architecture in `01-RESEARCH.md` (§Validation Architecture) is authoritative; this file is the operational summary.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None for Phase 1 (documents-only). Phase 3 introduces GUT 9.x for GDScript per `research/STACK.md`. |
| **Config file** | None |
| **Quick run command** | None — document validation is human peer-review by Daniel + persona-zero |
| **Full suite command** | None — phase-gate validation is the 28-deliverable presence check + Greenlight cosignature |
| **Estimated runtime** | N/A (human-paced) |

---

## Sampling Rate

- **Per task commit:** Daniel reads the changed deliverable end-to-end. AI-policy-compliance check — verify no creative content slipped into Claude-authored sections (no names, no in-world prose, no marketing copy, no dialogue lines, no visual references invented by Claude). Per `PHILOSOPHY.md` §V refusal list.
- **Per wave merge:** Daniel performs wave-level peer review of all deliverables in the wave. Cross-reference check: every cross-doc reference resolves (e.g., World Bible references to Pillars are valid; Anti-positioning references to comparables match Vision Pack scope).
- **Phase gate:** All 28 deliverables present and signed off; Greenlight document signed; outside reviewer co-signature present on Year-3-Wall criteria; persona-zero (Dawn) has read all major creative deliverables (Vision pitch, Core Fantasy, Pillars, Slice Scenario, World Bible, Style Guide narrative voice section) and given recorded reactions; MKTG-06 verdict logged in `MARKET-EVIDENCE.md`.
- **Max feedback latency:** Per-task: human-paced (Daniel's nightly session); Per-wave: monthly retro cadence per `D-SUST-05`.

---

## Phase Requirements → Validation Map

| Req ID | Behavior | Validation Type | Validation Method | Wave 0 / Plan |
|--------|----------|-----------------|-------------------|---------------|
| HEALTH-01 | SCOPE.md log exists with rationale-tracking template + worked example (inaugural entry: 2026-05-09 Phase 1 scope expansion) | manual-only | File exists at `.planning/SCOPE.md`; format has Date / Decision / Driver / Rationale / Reversibility columns; inaugural entry present; Daniel signs off | Wave 0 / Process Pack plan |
| HEALTH-02 | slice-debt.md log exists with format spec + worked example | manual-only | File exists at `.planning/slice-debt.md`; format has Item / Hack / Promotion-or-Payoff / Owner / Tripwire columns; worked example present | Wave 0 / Process Pack plan |
| HEALTH-03 | Year-3-Wall pivot tripwires doc exists with cascade m6/12/24/36 + Replan Doc protocol + outside reviewer co-sign criteria + specific metric thresholds | manual-only | File exists; D-WALL-01..07 reflected; threshold table populated from comparable-game research; Daniel + designated outside reviewer co-sign in Greenlight | Process Pack / Decision Lock Pack plan; outside-reviewer co-sign at Greenlight gate |
| HEALTH-04 | Sustainable-pace cadence doc exists per D-SUST-01..08 + REQUIREMENTS.md HEALTH-04 wording amended (drop "~25 hours/week"; replace with milestone-based cadence) | manual-only | File exists; D-SUST-01..08 reflected; REQUIREMENTS.md HEALTH-04 row amended in same commit; Daniel signs off | Process Pack plan |
| HEALTH-05 | Persona-zero playtest ritual established + at least 2 sessions executed | observable | (a) ritual doc exists describing the bi-weekly format; (b) `.planning/playtest-log/` directory exists with ≥2 dated `YYYY-MM-DD.md` session entries | Process Pack plan + Validation Pack plan |
| MKTG-06 | MARKET-EVIDENCE.md exists with explicit Confirmed / Refined / Rejected verdict per D-MKTG-04 rubric | observable | (a) `.planning/MARKET-EVIDENCE.md` exists; (b) all locked methodology elements (D-MKTG-01..06) reflected: hybrid game-list (10-20 games), LLM-classified Steam reviews with Daniel verification of every tag, Google Form survey distributed and ≥50 responses collected, triangulation rubric applied; (c) verdict statement + supporting tables; (d) if "Rejected" or "Significantly Refined," roadmap-revision impact noted before Phase 2 entry | Validation Pack plan |

---

## Wave 0 Requirements

Phase 1 has no test infrastructure to install. "Wave 0" for Phase 1 is the **deliverable-scaffolding pack** — Claude drafts the structural skeletons for all 28 deliverables before Daniel begins authoring creative content into them.

- [ ] `.planning/playtest-log/` directory created (gates HEALTH-05)
- [ ] Document-template scaffolding pack — skeletons for the 28 deliverables, Claude drafts AI-policy-compliant sections (synthesis-allowed deliverables get populated; creative-content deliverables get only TOC/section headers + Daniel-authored placeholders)
- [ ] Comparable-game wishlist-trajectory research note (~4-8 hours) for D-WALL-07 thresholds — Claude-synthesized note (data only, not creative)
- [ ] Outside reviewer designation — Daniel-only task (cannot be done by Claude); gates Greenlight (D-SCOPE-28) cosignature
- [ ] r/CozyGamers post permission inquiry + 2-3 cozy Discord moderator inquiries — Daniel-only task; gates MKTG-06 distribution

*(No automated test infrastructure to install. Phase 1 deliverables are validated by human peer review, persona-zero reactions, and outside reviewer cosignature.)*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Vision pitch exists and reads correctly to persona-zero | (success criterion 1) | Creative content; persona-zero reaction is the validation | Daniel writes pitch; Dawn reads; reaction recorded in `playtest-log/` |
| Pillars of Play discriminator pattern (each pillar includes both "is" and "is not") | (success criterion 2) | Subjective design judgment | Daniel reviews each pillar against discriminator test from `01-RESEARCH.md` Pattern 6 |
| Core Fantasy reads as one capsule sentence + paragraph that match | (success criterion 3) | Voice and brevity are subjective | Daniel writes; checks against persona-zero "talking to people and finding where I fit in" anchor |
| Anti-positioning divergence sections cover all named comparables | (success criterion 4) | Verifiable section presence | Daniel checks each of: Stardew, BG3, Sims, Spiritfarer, Coral Island, Coffee Talk, Palia has a divergence section |
| Core Loops diagram shows nested moment / session / meta loops derived from sprite premise | (success criterion 5) | Diagram quality is subjective | Daniel reviews; persona-zero reads loops doc and reacts |
| Player Journey covers all 5 horizons (5min/1hr/10hr/100hr/500hr) | (success criterion 6) | Verifiable section presence | File grep for each horizon header |
| Pillar × Mechanic matrix has zero orphan mechanics (or each orphan flagged with rationale) | (success criterion 7) | Verifiable matrix completeness | Daniel reviews matrix; orphan mechanics either tied to a pillar or moved to "deferred" with rationale logged in SCOPE.md |
| Failure-mode bounce-signature exists per pillar | (success criterion 8) | Verifiable section presence | Daniel checks each pillar has a bounce-signature paragraph |
| Slice Scenario covers ≥ first hour of slice end-to-end | (success criterion 9) | Word count + flow | Daniel writes; persona-zero reads and reports "could you imagine playing this?" |
| Wow beats list ≥ 5 distinct trailer-screenshot-quality moments | (success criterion 10) | Subjective trailer-test | Daniel reviews each beat with the question "would this make me wishlist?" |
| 30-second elevator demo sketch is paced for first 30 seconds of public demo | (success criterion 11) | Subjective pacing | Daniel reads aloud with stopwatch |
| World Bible v0.1 covers all 8 zones + pantheon + magic system + calendar + cultures + naming rules | (success criterion 12) | Verifiable section presence | Daniel checks TOC against `01-RESEARCH.md` Pattern 7 World Bible TOC; verifies each zone has stub content |
| Mood deck has zero AI-generated reference art | (success criterion 13, AI policy) | AI policy compliance | Daniel inspects every reference; Claude refuses any image generation requests |
| Style Guide v0.1 has visual / audio / narrative voice / UI tone sections all populated | (success criterion 14) | Verifiable section presence | Section grep + Daniel content review |
| Risk register has likelihood + impact + mitigation + tripwire per risk | (success criterion 15) | Verifiable column presence | Matrix-format check; Daniel reviews ≥10 risks present including all four killers + Tier-2 pitfalls from `research/PITFALLS.md` |
| Capability gap matrix has skill / current / target / acquisition-plan / deadline per skill | (success criterion 16) | Verifiable column presence + reasonable scope | Daniel reviews ≥10 skills including Godot 4 / GDScript / Blender / Dialogic / glTF / Git LFS / Steam integration / itch.io publishing / GUT testing |
| Tools/pipeline ratification doc names every tool with locked version | (success criterion 17) | Verifiable cross-ref | Daniel checks doc against `research/STACK.md`; locked versions specified |
| SCOPE.md inaugural entry exists for 2026-05-09 Phase 1 scope expansion | (success criterion 18, HEALTH-01) | Verifiable file content | grep `2026-05-09` in `.planning/SCOPE.md` |
| slice-debt.md worked example exists | (success criterion 19, HEALTH-02) | Verifiable file content | File ≥1 entry with format columns populated |
| Sustainable-pace cadence doc reflects D-SUST-01..08 | (success criterion 20, HEALTH-04) | Verifiable section presence | grep all D-SUST decision references in doc |
| Year-3-Wall doc reflects D-WALL-01..07 + specific m6/12/24/36 thresholds | (success criterion 21, HEALTH-03) | Verifiable threshold table presence | Doc has 4 cascade rows with specific metric values; outside-reviewer name field present |
| Persona-zero playtest log has ≥2 entries (session 1 + first bi-weekly follow-up) | (success criterion 22, HEALTH-05) | Verifiable file count | `ls .planning/playtest-log/*.md \| wc -l` ≥ 2 |
| "Why play at hour 200" doc applies four-engine retention strategy | (success criterion 23) | Verifiable section presence | grep doc for state-tagged authored dialogue / 3+ active narrative threads / seasonal recurrence / player-driven goals — all four engines named and applied to sprite premise |
| Time-model lock doc reflects D-TIME-01..05 + trigger list status (locked OR explicitly deferred to Phase 4/5 with rationale) | (success criterion 24) | Verifiable section presence + decision lock | Doc grep for D-TIME-01..05; trigger list either populated from Core Loops Pack output or "Deferred to Phase X" with rationale per D-TIME-05 |
| STACK.md ratification recorded — no re-litigation flag set | (success criterion 25) | Verifiable section presence | Doc references `research/STACK.md`; "Locked Phase 1" header present |
| ARCHITECTURE.md ratification recorded with sprite-premise interpretation amendments | (success criterion 26) | Verifiable section presence | Doc references `research/ARCHITECTURE.md`; sprite movement model + HOME/CRAFT/COMP shifts noted as REQUIREMENTS.md interpretation amendments |
| MKTG-06 verdict logged in MARKET-EVIDENCE.md | (success criterion 27, MKTG-06) | Verifiable verdict statement | grep `MARKET-EVIDENCE.md` for "Confirmed", "Refined", or "Rejected"; if Rejected or Significantly Refined, roadmap-revision impact note present |
| Greenlight document signed by Daniel with explicit "knowing what I now know, I commit to this" statement + Year-3-Wall tripwire criteria as load-bearing co-signature | (success criterion 28) | Verifiable signature + cosignature presence | Doc grep for signature line + Year-3-Wall section + outside-reviewer signature line |

---

## Validation Sign-Off

- [ ] All 28 deliverables present in `.planning/` directory tree
- [ ] All 6 phase requirements (HEALTH-01..05, MKTG-06) have validation entries above
- [ ] AI-policy compliance check completed by Daniel — no creative content authored by Claude detected
- [ ] Persona-zero (Dawn) has read all major creative deliverables and given recorded reactions
- [ ] Outside reviewer co-signature present on Year-3-Wall criteria (gates Greenlight)
- [ ] Sampling continuity satisfied — Daniel reviews per task; wave-level review per monthly retro
- [ ] `nyquist_compliant: true` set in frontmatter (after all checks pass)

**Approval:** pending

---

*Adapted from `$HOME/.claude/get-shit-done/templates/VALIDATION.md` for a documents-only phase. Reference: `.planning/phases/01-foundations-vision-lock/01-RESEARCH.md` §Validation Architecture (canonical).*
