---
deliverable: 15
pack: risk-capability
title: Risk Register
author: Claude (synthesis from PITFALLS.md + CONTEXT.md decisions); Daniel (scoring + sign-off)
ai_role: synthesis-allowed (PMI-style risk register populated from research; Daniel scores and signs)
depends_on:
  - .planning/research/PITFALLS.md
  - .planning/phases/01-foundations-vision-lock/01-CONTEXT.md
  - .planning/research/SUMMARY.md
decisions_referenced:
  - D-SCOPE-15
  - D-WALL-01
  - D-WALL-02
  - D-SUST-01
  - D-MKTG-04
downstream_consumers:
  - Monthly retro audits (PHILOSOPHY.md §IV) — sustain check; tripwires re-evaluated
  - 21-year3wall-tripwires.md (some risks become tripwire metrics at m6/12/24/36)
  - 28-greenlight.md (Daniel signs risk acceptance at greenlight)
  - Phase 2+ plans (high-score risks inform phase-level mitigations)
---

# Risk Register — Colisi

> Per `D-SCOPE-15`: explicit risks + likelihood + impact + mitigation + early-warning tripwire per risk. PMI/PMBOK-standard format (likelihood × impact × mitigation × tripwire × owner × status), adopted by Asana, Atlassian, ClickUp risk-register templates and convergent across PM tools.
>
> **Source format** (per `01-RESEARCH.md` Pattern 4): the example rows below are synthesized from `PITFALLS.md` (the four killers + Tier-2 critical pitfalls) and locked decisions in `01-CONTEXT.md`. Each row cites its research source. **Daniel scores Likelihood and Impact and signs the register.** Likelihood and Impact are 1–5 scales; Score = L × I.
>
> Likelihood scale: 1 = rare, 2 = unlikely, 3 = possible, 4 = likely, 5 = near-certain over project horizon.
> Impact scale: 1 = trivial, 2 = manageable, 3 = significant, 4 = severe, 5 = project-killing.

---

## Register

| ID | Risk | Likelihood (1–5) | Impact (1–5) | Score (L×I) | Mitigation | Early-warning tripwire | Owner | Status |
|----|------|-----:|-----:|-----:|-------------|--------------------------|-------|--------|
| **R-01** | "Stardew Killer" framing trap (`PITFALLS.md` Pitfall 1; `PHILOSOPHY.md` §III communication guardrail) | 4 | 5 | 20 | Lead with persona-gap positioning; never use "Stardew killer" framing externally; quarterly external-comms audit per `PHILOSOPHY.md` §IV | Any external comm uses "Stardew killer" or "Stardew but..." phrasing | Daniel | Open |
| **R-02** | Scope creep on systems-rich solo project (`PITFALLS.md` Pitfall 2; one of the four killers) | 5 | 5 | 25 | "Buys-its-slot" rule; `SCOPE.md` log on every change (HEALTH-01); time-pressure audit checklist per `PHILOSOPHY.md` §II; sustainable-pace cadence (`D-SUST-01..08`) | New system proposed without displacement; cumulative phase-completion delta growing per `D-WALL-06` | Daniel | Open |
| **R-03** | Endgame content cliff (`PITFALLS.md` Pitfall 3; persona-zero's #1-cited bounce reason across 6 games she's quit) | 4 | 5 | 20 | Four-engine retention strategy (`research/SUMMARY.md`); "why play at hour 200" doc (`23-why-play-at-hour-200.md`); slice playtest watches for "what now?" signature | Slice playtest reaches "what now?" within first hour | Daniel | Open (`23-why-play-at-hour-200.md` mitigates) |
| **R-04** | Solo-dev burnout across 4–6 year horizon (`PITFALLS.md` Pitfall 4; one of the four killers; `PHILOSOPHY.md` §I.6 "sustainability is part of the deliverable") | 4 | 5 | 20 | Sustainable cadence (`D-SUST-01..08`); quarterly true week off (`PHILOSOPHY.md` §IV); persona-zero playtest as motivation source (`HEALTH-05`) | Daily ritual breaks for >1 week; weekly day off skipped; persona-zero playtest cadence broken >2 consecutive weeks | Daniel | Open (`D-SUST-01..08` locks mitigate) |
| **R-05** | Phase 3 takes longer than 5 months (Godot/GDScript/Blender learning curve; `ROADMAP.md` Phase 3 estimate) | 4 | 3 | 12 | Capability gap matrix (`16-capability-gap-matrix.md`) flags learning steps; intentional 4–5 mo budget; Year-3-Wall m12 checkpoint catches via `D-WALL-06` cumulative delta | At m7, all 9 slice-blocking foundations not in place per `ROADMAP.md` Phase 3 success criteria | Daniel | Open |
| **R-06** | Phase 6 art pipeline disaster — Blender→Godot pipeline doesn't yield usable hero NPC art in <3 weeks (`ROADMAP.md` Risks That Could Force a Re-Plan #3) | 3 | 4 | 12 | Heavy stylization discipline (`D-STYLE-01..03`); standardized Blender→Godot pipeline (`STACK.md` 3D Art Pipeline); cap of 12–15 unique NPCs (`NPC-01`); paid asset pack (`Synty / Polygon`) as budget-exception fallback if needed | Blender→Godot pipeline doesn't yield usable hero character in <3 weeks of dedicated effort | Daniel | Open |
| **R-07** | Persona-zero (Dawn) unavailability — extended absence breaks `HEALTH-05` ritual (`ROADMAP.md` Risks #4) | 1 | 3 | 3 | Bi-weekly cadence is flexible (`D-SUST-07`); ring-2 testers by Phase 7 as backup (`PHILOSOPHY.md` §V); document pause rather than silently lose ritual | Persona-zero playtest cadence broken for >2 consecutive weeks without explicit pause-and-document | Daniel | Open |
| **R-08** | GitHub LFS quota exhaustion — free 1GB tier exhausted within first year of binary asset commits (`ROADMAP.md` Risks #5; `STACK.md` LFS quota math) | 4 | 2 | 8 | Budget $5/mo Data Pack for 50GB (`STACK.md`); art-source repo split decision in `INFRA-08`; quarterly LFS audit | LFS storage approaches 1GB free tier limit | Daniel | Open |
| **R-09** | Market thesis rejected by `MKTG-06` demographic validation (`PITFALLS.md` Pitfall 4 / Pitfall 5 around confirmation bias; `D-MKTG-04` rubric) | 3 | 5 | 15 | `D-MKTG-04` Confirmed/Refined/Rejected rubric pre-committed; rejection triggers roadmap revisit before Phase 2 (`27-MARKET-EVIDENCE.md`); LLM-classification + Daniel verification of every tag (`D-MKTG-02`) | `MKTG-06` verdict = Rejected per `27-MARKET-EVIDENCE.md` | Daniel | Open |
| **R-10** | AI policy violation leaks to shipped product (`PHILOSOPHY.md` §V; `AI-DISCLOSURE.md`; reputation-asymmetric in cozy demographic) | 3 | 5 | 15 | Claude refusal list (`CLAUDE.md` / `PHILOSOPHY.md` §V); monthly AI-leakage audit per `PHILOSOPHY.md` §IV; `AI-DISCLOSURE.md` transparency commitment | Any AI-generated content found in player-facing or public artifact | Daniel + Claude | Open |
| **R-11** | Stack churn during slice phase — engine / addon / library breaking changes mid-phase (`PHILOSOPHY.md` §III architecture guardrail: "Never upgrade Godot versions mid-phase") | 3 | 3 | 9 | Pin Godot 4.5.x stable for slice phase (`STACK.md`); Dialogue Manager pinned to specific commit; phase-boundary upgrades only with dedicated migration step | Godot 4.6 → 4.7 / addon major-version bump tempts mid-phase upgrade | Daniel | Open |
| **R-12** | Save schema unmigratable post-launch — `SAVE-04` migration framework breaks; player saves lost (`PHILOSOPHY.md` §III architecture guardrail) | 2 | 5 | 10 | Save format includes `save_format_version` from day one (`STACK.md`); migration code written + tested at every schema change; GUT 9.x save-load round-trip tests (`STACK.md` Testing Approach); atomic save-write protocol | Save schema change lands without migration; round-trip test fails silently | Daniel | Open |
| **R-13** | Four NPCs in slice are not enough to demonstrate meaningful matchmaking puzzle layer (`D-VISION-04`) — slice fails to convey premise (`Phase 6` success criterion 1) | 2 | 4 | 8 | Slice scenario sketch (`09-slice-scenario-sketch.md`) explicitly designs match arcs across 4 NPCs; persona-zero session 2 (`HEALTH-05`) reads slice scenario before Phase 6 closes | Persona-zero says "I don't see what makes this special" after reading slice scenario | Daniel | Open |
| **R-14** | Outside-reviewer (`D-WALL-05`) not designated by Greenlight gate — Year-3-Wall protocol cannot fire (`HEALTH-03`) | 3 | 4 | 12 | Greenlight (`28-greenlight.md`) requires outside-reviewer co-signature; designation tracked as Phase 1 blocker per `21-year3wall-tripwires.md` | At plan 01-08 entry, no outside-reviewer named in `21-year3wall-tripwires.md` | Daniel | Open |

---

## Risk score interpretation

- **Score 20–25 (red zone):** active mitigation work in flight; reviewed at every monthly retro
- **Score 12–19 (orange zone):** mitigation in place; reviewed at quarterly review
- **Score 6–11 (yellow zone):** monitored; reviewed at quarterly review
- **Score 1–5 (green zone):** logged; reviewed annually

---

## Open status — what each entry needs

All entries above are `Open` at register creation. Daniel signs each L/I score during plan 01-02 execution after reading `PITFALLS.md` rationale for each row.

A row moves to **Mitigated** when its mitigation is fully in place AND the early-warning tripwire has been operationalized (e.g., the audit cadence is on the calendar; the test exists in the suite).

A row moves to **Triggered** when the tripwire fires; the row stays Triggered with a `triggered_at` date until the response is logged.

A row moves to **Closed** when the risk is no longer applicable (e.g., R-08 closes if GitHub raises the free LFS quota above need).

---

## Cross-references

- `.planning/research/PITFALLS.md` — source for risks R-01..R-04 (the four killers) and R-11..R-12
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-15`, `D-WALL-01..02`, `D-SUST-01`, `D-MKTG-04`
- `.planning/research/SUMMARY.md` — four-engine retention strategy informing R-03 mitigation
- `.planning/research/STACK.md` — informs R-08 LFS, R-11 stack churn, R-12 save schema
- `.planning/ROADMAP.md` Risks That Could Force a Re-Plan — overlaps with R-05/06/07/08
- `21-year3wall-tripwires.md` — some risks promote to tripwire metrics
- `28-greenlight.md` — Daniel signs risk acceptance at greenlight
- Monthly retro template (`PHILOSOPHY.md` §IV) — register reviewed at every retro
