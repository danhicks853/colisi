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
| 2026-05-10 | Phase 1 — Foundations & Vision Lock | NARR-06 reinterpreted: "Player can review past choices in a journal/log" → **per-villager experiential replay system** (choose a villager, watch fast-forward replay of their entire life since wisp's arrival, slowing at critical choice junctures); SAVE-04 amended in lockstep to mandate event-log save schema (per-villager event log with timestamps + significance markers, not just state snapshots) | Daniel design move during pillar 1 mechanics-justified review; Claude flagged a faint conflict between NARR-06 (text journal) and pillar 1 DI #4 (no UI dedicated to character management); Daniel reframed the log as a witnessable replay rather than a UI panel | Collapses the NARR-06 / DI #4 tension entirely (replay is diegetic, not abstracted); unifies the D-VISION-06 BG3 × Sims dream cross into a single concrete feature; functions as anti-clause-1 audit tool (any system that doesn't appear in any villager's replay is filler by definition); strong wow-beat candidate; hour-200 retention contributor | Reversible-with-rework (replay system + event-log save schema are architectural commitments; reverting after Phase 3 SAVE design lands would require save-schema migration and replay-asset deletion) | `.planning/persona-zero-emergent-feedback.md` 2026-05-10 NARR-06 entry (status: adopted); REQUIREMENTS.md NARR-06 + SAVE-04 amendments queued for plan 01-02 sign-off; `STATE.md` decisions log 2026-05-10 (forthcoming); pillar 1 mechanics-justified list (`02-pillars-of-play.md`) cites both REQs |
| 2026-05-10 | Phase 1 — Foundations & Vision Lock | REQUIREMENTS.md Out-of-Scope row "Required combat" amended to **"Interactive player combat mechanics of ANY kind. Ever."** Tightened from "required" (which implied optional combat could exist) to "interactive player combat mechanics of any kind" (which closes the optional-combat loophole entirely). Lore-level combat references (e.g., a villager mentioning an ancestor's past battle), observed NPC-vs-NPC events, and symbolic/ritualized non-interactive "combat" framings are still permitted. | Daniel design decision during pillar 2 anti-clauses authoring | Original "Required combat" framing left a loophole an outside contributor could find ("but what if the combat is *playful*?"); the Daniel-authored anti-clause closes it decisively. Aligns with persona-zero bounce reasons (BG3, Fallout, Hogwarts Legacy quit over combat walls) and removes a class of feature-pitch creep risk for a 4-6 year solo project. | Reversible (anti-clause is a constraint that can be relaxed at any time; rolling it back would not require code/content rework, only a SCOPE.md addendum and REQUIREMENTS.md edit) | Pillar 2 anti-clause 4 in `02-pillars.md`; REQUIREMENTS.md Out-of-Scope row amendment queued for plan 01-02 sign-off; STATE.md decisions log 2026-05-10 |

---

*SCOPE.md created: 2026-05-10 (during Phase 1 plan 01-00 execution; entries above retroactively log decisions made 2026-05-09)*
