---
deliverable: 22
pack: process
title: Persona-zero (Dawn) Playtest Ritual
author: Claude (synthesis from D-SUST-07, D-SCOPE-22, HEALTH-05); Daniel (sign-off + first 2 sessions during Phase 1)
ai_role: synthesis-allowed (ritual protocol from CONTEXT.md decisions; no creative content)
depends_on:
  - .planning/phases/01-foundations-vision-lock/01-CONTEXT.md
  - .planning/REQUIREMENTS.md
  - .planning/research/PERSONA.md
decisions_referenced:
  - D-SCOPE-22
  - D-SUST-07
  - D-VISION-05
  - D-VISION-08
  - D-PREMISE-01
downstream_consumers:
  - .planning/playtest-log/ (every session logged here)
  - 08-failure-mode-analysis.md (sessions watch for pillar failure signatures)
  - 28-greenlight.md (HEALTH-05 minimum 2 sessions executed before Greenlight per ROADMAP Phase 1 success criterion 22)
  - Phase 3+ playtest sessions (this ritual continues into in-game playtests)
  - Monthly retro (sessions summarized at retro per D-SUST-05)
---

# Persona-zero (Dawn) Playtest Ritual — Colisi

> Per `D-SCOPE-22` + `HEALTH-05` + `D-SUST-07`: the bi-weekly 30-minute persona-zero playtest is one of the project's load-bearing rituals. Persona-zero (Dawn) is the lead persona AND the design anchor (`PHILOSOPHY.md` §I.7 honesty caveat: persona-zero is design anchor, not market evidence). Per `D-VISION-05`, Dawn validated and co-developed the locked premise during `/gsd:discuss-phase 1` on 2026-05-09 — she is the project's most important pre-launch reader.

---

## Cadence

- **Bi-weekly** (every 2 weeks)
- **30 minutes** per session
- **Pre-Phase-3:** sessions are reading docs and giving reactions (no game yet)
- **Phase 3+:** sessions are play-mode (Dawn plays whatever's most-buildable)

---

## Format

1. **Setup (~2 min):** Daniel sets context — what build / doc is being reviewed, what specifically he wants Dawn to react to
2. **Active session (~20 min):** Dawn plays / reads while Daniel observes silently. Daniel does **not** explain, defend, or course-correct in-flight; he takes notes
3. **Structured questions (~10 min):** Daniel asks the three structured questions (below) and logs Dawn's answers verbatim
4. **Wrap (~3 min):** Daniel summarizes action items; Dawn confirms understanding

---

## Structured question template (D-SUST-07)

Three questions, asked in this order, every session. Verbatim from `01-CONTEXT.md`:

1. **"What did you expect to be able to do that you couldn't?"**
2. **"What felt the worst?"**
3. **"One thing you'd change?"**

Daniel does not paraphrase Dawn's answers. He logs them as quotes.

---

## Logging convention

**Notes location:** `.planning/playtest-log/YYYY-MM-DD.md` (one file per session, dated by session date).

**Template:**

```markdown
# Persona-zero playtest — YYYY-MM-DD

**Build version / artifact:** {what was tested — e.g., "01-vision-pitch.md draft 2", "Phase 3 walking-around build commit abc1234"}
**Session number:** {sequential — Phase 1 starts at #1}
**Setup notes:** {what Daniel said before the session}

## Observations (timed, by Daniel during silent observation)

- 0:00–0:05 — {what Dawn did, reacted to, struggled with}
- 0:05–0:10 — {…}
- (continue throughout 20 min)

## Quotes (verbatim, by Daniel during structured questions)

**"What did you expect to be able to do that you couldn't?"**
> {Dawn's verbatim answer}

**"What felt the worst?"**
> {Dawn's verbatim answer}

**"One thing you'd change?"**
> {Dawn's verbatim answer}

## Daniel's reactions (post-session reflection)

- {What Daniel learned}
- {What surprised him}
- {What confirmed or contradicted his hypothesis}

## Action items

- [ ] {action 1 — link to a slice-debt entry, SCOPE.md change, or plan task}
- [ ] {action 2}
- [ ] {action 3}

## Failure-mode signatures observed

> Cross-reference `08-failure-mode-analysis.md` — does any pillar's bounce signature appear in this session?

- {signature observed, or "none"}
```

---

## First 2 sessions during Phase 1 (HEALTH-05 minimum)

Per `ROADMAP.md` Phase 1 success criterion 22: *"Persona-zero playtest ritual is established and at least 2 sessions have occurred (initial + one bi-weekly follow-up)."*

### Session 1 — premise pitch reaction

**When:** during plan 01-01 (Vision Pack authoring), after `01-vision-pitch.md` is drafted by Daniel
**What Dawn reads:** `01-vision-pitch.md`
**What gates on Session 1:** Vision Pack completion. Per `D-PREMISE-01`, the premise pitch is the first Phase 1 sub-deliverable. Per `D-VISION-05`, Dawn already validated the premise during `/gsd:discuss-phase 1` — Session 1 is **posterity-and-anchoring**, not re-gating. The vision is locked.

### Session 2 — bi-weekly follow-up

**When:** ~2 weeks after Session 1
**What Dawn reads:** depends on what's most-buildable at that point — likely Loops/Journey Pack drafts, slice scenario sketch, or world-bible v0.1 early sections
**What gates on Session 2:** `HEALTH-05` minimum cadence — proves the ritual is established, not just designed

Both sessions logged at `.planning/playtest-log/YYYY-MM-DD.md`.

---

## Pre-Phase-3 mode

Before Phase 3 (no playable build exists), sessions are docs-and-reactions. Dawn reads:

- Phase 1: vision pitch, slice scenario, world-bible drafts, mood deck curation
- Phase 2: README, Steam-page-sketch text (when first drafted)
- Phase 3+: playable builds

Pre-Phase-3 sessions still use the same 30-min / observe-then-questions structure. The questions translate from "what did you expect to be able to do" to "what did you expect this to say / show / be."

---

## Backup if persona-zero unavailable (D-SUST-07)

Per `D-SUST-07`: if Dawn becomes unavailable for >2 consecutive weeks, **document the pause** rather than silently lose the ritual.

- Log to `STATE.md` blockers
- Log to next monthly retro
- By Phase 7, ring-2 testers (people outside the household, per `PHILOSOPHY.md` §V) become available as backup
- The ritual is on Dawn's life timeline, not the project's — life events take priority over playtest cadence

If unavailability lasts >1 month, this is a `15-risk-register.md` R-07 trigger and a contingency feedback loop must be designed.

---

## Daniel signature line

**Persona-zero Playtest Ritual ratified by:** Daniel Hicks
**Date:** {YYYY-MM-DD — at plan 01-02 close}
**First 2 sessions executed:**
- Session 1: {YYYY-MM-DD — link to playtest-log entry}
- Session 2: {YYYY-MM-DD — link to playtest-log entry}

---

## Cross-references

- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-22`, `D-SUST-07`, `D-VISION-05`, `D-VISION-08`, `D-PREMISE-01`
- `.planning/REQUIREMENTS.md` — `HEALTH-05`
- `.planning/research/PERSONA.md` — Dawn's interview corpus
- `.planning/playtest-log/` — session logs land here
- `08-failure-mode-analysis.md` — sessions watch for pillar bounce signatures
- `20-sustainable-pace-cadence.md` — bi-weekly cadence cross-referenced
- `15-risk-register.md` R-07 — persona-zero unavailability risk
- `28-greenlight.md` — `HEALTH-05` minimum 2 sessions verified
- `PHILOSOPHY.md` §I.7 (persona-zero is design anchor, not market evidence)
