---
deliverable: 20
pack: process
title: Sustainable-pace Cadence
author: Claude (synthesis from D-SUST-01..08); Daniel (sign-off + REQUIREMENTS.md amendment)
ai_role: synthesis-allowed (full synthesis from CONTEXT.md decisions; no creative content)
depends_on:
  - .planning/phases/01-foundations-vision-lock/01-CONTEXT.md
  - .planning/REQUIREMENTS.md
decisions_referenced:
  - D-SCOPE-20
  - D-SUST-01
  - D-SUST-02
  - D-SUST-03
  - D-SUST-04
  - D-SUST-05
  - D-SUST-06
  - D-SUST-07
  - D-SUST-08
  - D-WALL-06
downstream_consumers:
  - REQUIREMENTS.md HEALTH-04 amendment (this doc supersedes the "~25 hours/week" wording)
  - STATE.md monthly retro template
  - 22-personazero-playtest-ritual.md (cross-references this doc's bi-weekly cadence)
  - 21-year3wall-tripwires.md (productivity tripwire metric defined here)
  - Phase 2+ planning (every phase budgets against milestone-based cadence)
---

# Sustainable-pace Cadence — Colisi

> Per `D-SCOPE-20` + `HEALTH-04`: synthesizes `D-SUST-01..08` (locked 2026-05-09 during `/gsd:discuss-phase 1`) into a single reference doc. **Hour-based targets dropped.** Pace measured by milestones-shipped vs milestones-planned.
>
> Source: `01-CONTEXT.md` `<decisions>` Sustainability Rhythms section.

---

## Hour-tracking policy: NONE (D-SUST-01, D-SUST-02)

Per `D-SUST-01`: with heavy AI assistance, hours/week is the wrong unit. Pace is measured by **milestones-shipped vs milestones-planned.** Daniel's reframe (verbatim from `01-CONTEXT.md`): *"Hourly goals don't really apply here, with heavy AI assistance. goals should be milestone based."*

Per `D-SUST-02`: **no hour tracking at all** — not even observational. Hour tracking creates pressure even when nominally observational. The unit is wrong; track milestones instead.

---

## Daily rhythm (D-SUST-03)

- **Continuous nightly session.** No variation. The ritual of showing up is the discipline; duration varies with life.
- **No daily quota.** Some nights are 30 minutes; some are 4 hours. Both count.
- **End-of-night commit** of any in-progress work, even WIP. The git log is the journal.
- **No project work after a sane hour as a default.** Sleep is part of the deliverable (`PHILOSOPHY.md` §IV).

---

## Monthly milestones (D-SUST-04)

Per `D-SUST-04`: phase plans drive monthly milestones. When a phase is planned via `/gsd:plan-phase`, its plans + tasks become the milestone backlog.

- Each plan in the active phase = a milestone.
- Each task within a plan = a sub-milestone.
- `STATE.md` tracks rolling progress: which plans completed this month, which are mid-execution, which are queued.
- Monthly retro asks: *"which planned tasks/plans did I complete this month vs which I'd named in the previous monthly retro?"*

---

## Monthly retro (D-SUST-05)

**Cadence:** last day of the month.
**Duration:** ~2 hours.
**Format:**

1. **Milestones-hit vs planned** — review STATE.md rolling tracking; honest accounting (no rounding up)
2. **Slice-debt log entries** — review `slice-debt.md` Open entries; pay debts cheap-to-pay; mark new debts taken this month
3. **Persona-zero playtest summary** — review the month's `.planning/playtest-log/` entries; surface any failure-mode signatures observed (cross-ref `08-failure-mode-analysis.md`)
4. **STATE.md update** — record session, update progress bar, log any new decisions or blockers
5. **AI-leakage audit** *(per `PHILOSOPHY.md` §VIII)* — Claude scans player-facing or public artifacts for any AI-generated content that may have leaked
6. **Public devlog post** *(at least one per month per `PHILOSOPHY.md` §IV)* — 100-word minimum; Daniel writes; Claude critiques
7. **Next-month milestone naming** — write the list of milestones to attempt next month; this becomes the comparison line for next retro's step 1

---

## Quarterly review (D-SUST-06)

**Cadence:** every 3 months (4× per year).
**Duration:** half-day.
**Format:**

1. **Year-3-Wall tripwire check** — review `21-year3wall-tripwires.md` cascade status (m6 / m12 / m24 / m36); has any tripwire fired since last review? Has any **leading indicator** flashed?
2. **SCOPE.md audit** — review additions / contractions logged this quarter; surface any drift
3. **Phase-level replanning if warranted** — does the current phase still match reality? Is the phase budget honest?
4. **CHANGELOG.md entry** — Keep-A-Changelog format (Added / Changed / Deprecated / Removed / Fixed / Security)
5. **One true week off** *(non-negotiable, per `PHILOSOPHY.md` §IV)* — no project work, no devlog, no persona-zero playtest. Real rest. The burnout-prevention measure.
6. **Pillars review** — are we still in service of persona's core fantasy? Are cozy promises still being kept? (`PHILOSOPHY.md` §IV)
7. **External-comms audit** — has any "Stardew Killer" / overclaim language slipped into devlog or social posts?

---

## Persona-zero playtest ritual (D-SUST-07)

> Detailed protocol lives in `22-personazero-playtest-ritual.md`. Summary for cadence reference:

- **Cadence:** bi-weekly, 30 minutes
- **Format:** Dawn plays whatever's most-buildable for ~20 min while Daniel observes silently; last 10 min is structured questions ("what did you expect to be able to do that you couldn't?", "what felt the worst?", "one thing you'd change?")
- **Pre-Phase-3:** sessions are reading docs and giving reactions instead of play
- **Logging:** notes go in `.planning/playtest-log/YYYY-MM-DD.md`
- **Backup if persona-zero unavailable:** ring-2 testers by Phase 7; explicit pause-and-document if >2 weeks unavailable

Cross-ref: `22-personazero-playtest-ritual.md` (full protocol), `HEALTH-05`.

---

## Productivity tripwire signal (D-SUST-08, D-WALL-06)

The unit for productivity tripwires is **cumulative phase-completion delta vs roadmap estimate.**

If at month N we are X months behind cumulative roadmap-estimated phase completion, this is the productivity-tripwire signal feeding into Year-3-Wall metric thresholds (`21-year3wall-tripwires.md`).

This unit is honest because:
- It's not hour-based (no pressure-creating measurement)
- It's empirically testable (compare actual phase completion dates to estimates)
- It compounds (small deltas in early phases become large deltas later)

Specific delta thresholds at each Year-3-Wall checkpoint are authored in `21-year3wall-tripwires.md` per `D-WALL-07` (deferred to comparable-game research in plan 01-06).

---

## REQUIREMENTS.md HEALTH-04 amendment notice

> **Amendment notice:** `REQUIREMENTS.md` `HEALTH-04` currently reads: *"Project commits to a sustainable solo-dev cadence (target ~25 hours/week, daily/weekly/monthly/quarterly rhythms documented)."* This wording **predates** the locked sustainability decision (`D-SUST-01`, `D-SUST-02`, 2026-05-09) which dropped hour-based targets entirely.
>
> Per `CLAUDE.md` Authoritative Documents precedence rule, `PHILOSOPHY.md` and locked CONTEXT.md decisions take precedence over `REQUIREMENTS.md` when in conflict. **`REQUIREMENTS.md` is amended by Phase 1 execution to replace "target ~25 hours/week" with "milestone-based cadence per D-SUST-01..08."** This amendment is a Phase 1 task in plan 01-06 with cross-link to this doc; Daniel signs the amendment.

---

## Daniel signature line

**Sustainable-pace Cadence ratified by:** Daniel Hicks
**Date:** {YYYY-MM-DD — Daniel signs at end of plan 01-02}
**REQUIREMENTS.md HEALTH-04 amendment applied:** {YYYY-MM-DD — at plan 01-06 close}

---

## Cross-references

- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SUST-01..08`, `D-SCOPE-20`, `D-WALL-06`, `D-SCOPE-23` (retention doc)
- `.planning/REQUIREMENTS.md` — `HEALTH-04` (amended by this doc); `HEALTH-05` (persona-zero ritual)
- `PHILOSOPHY.md` §I.6 (sustainability is part of the deliverable), §IV (rhythm cadences), §VIII (AI-leakage audit at monthly retro)
- `21-year3wall-tripwires.md` — productivity tripwire metric defined here
- `22-personazero-playtest-ritual.md` — full persona-zero protocol
- `STATE.md` — rolling milestone tracking
- `slice-debt.md` — monthly review touch-point
- `SCOPE.md` — quarterly audit touch-point
