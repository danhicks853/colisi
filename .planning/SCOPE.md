# SCOPE.md — Colisi scope-change log

> **Purpose (HEALTH-01):** Track every system / feature / scope change to the project — additions, contractions, displacements, deferrals — with explicit rationale, reversibility classification, and cross-reference to source.
>
> **Authority:** Per `PHILOSOPHY.md` Amendment Process and `CLAUDE.md` Authoritative Documents precedence rules. SCOPE.md is the durable record of "why is the project shaped the way it is?" Silent drift is forbidden — every change appears here before or at the moment it lands.
>
> **Update procedure:** Append a new row at the bottom for every scope change. Each phase-transition (`/gsd:transition`) audits this log per HEALTH-01.

---

## Format

| Column | Meaning |
|---|---|
| **Date** | YYYY-MM-DD when the decision was made (not when it was logged) |
| **Phase** | Active GSD phase at the time of the decision |
| **Decision** | One-sentence summary of what changed |
| **Driver** | Who/what triggered the change (Daniel directive, synthesizer recommendation, persona-zero feedback, research finding, tripwire fire, etc.) |
| **Rationale** | Why this change is correct given current information |
| **Reversibility** | One of the four classifications below |
| **Source/Cross-ref** | Pointers to the canonical record (CONTEXT.md decision IDs, STATE.md decisions log, ROADMAP.md amendment log, etc.) |

### Reversibility scale

- **Reversible** — low-cost undo within ≤1 phase
- **Reversible-with-rework** — undo possible but cost is weeks of redo work
- **One-way-door** — cannot undo without restarting the project; treat with care
- **Documented-but-not-acted** — recorded for future awareness; no code/content change yet

---

## Scope-change log

| Date | Phase | Decision | Driver | Rationale | Reversibility | Source/Cross-ref |
|---|---|---|---|---|---|---|
| 2026-05-09 | Phase 1 — Foundations & Vision Lock | Phase 1 scope expanded from 7 success criteria to full mature-studio 28-artifact pre-production set | Daniel directive: "mirror established studio orthodoxy; time is not the constraint; AI assistance makes depth cheap" | Architect-for-the-full-game principle; orthodoxy reduces hand-rolling format risk; vision lock breakthrough same session means downstream docs need stable anchor | Documented-but-not-acted (deliverables can be trimmed during execution per D-STYLE-07 orthodoxy memory rule; cannot un-author work already done) | `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` decisions section; `STATE.md` decisions log 2026-05-09 |
| 2026-05-09 | Roadmap creation | Two-milestone roadmap structure (M1 = vertical slice + Steam page, M2 = production & launch); detailed phasing only for M1 | Synthesizer recommendation | M2 detail deferred until end-of-M1 retro provides honest content-pacing data | Reversible-with-rework (M2 phasing can be authored at any time, but pre-slice estimates would be unreliable) | `.planning/ROADMAP.md` "Milestone Structure" section; `STATE.md` decisions log 2026-05-09 |

---

*SCOPE.md created: 2026-05-10 (during Phase 1 plan 01-00 execution; entries above retroactively log decisions made 2026-05-09)*
