---
deliverable: 08
pack: loops-journey
title: Failure-mode Analysis
author: Daniel
ai_role: structure-only
depends_on:
  - 02-pillars-of-play.md
  - 22-personazero-playtest-ritual.md
decisions_referenced:
  - D-SCOPE-08
  - D-SCOPE-22
downstream_consumers:
  - 22-personazero-playtest-ritual.md (playtest observers watch for these signatures)
  - Phase 4 / 6 / 7 playtest sessions (each row's bounce signature is a watch-item)
  - Monthly retro audits (sustain check — has any signature been observed?)
  - 21-year3wall-tripwires.md (some failure modes can become tripwires if they recur)
---

> **AI POLICY (PHILOSOPHY.md §V):** Daniel authors all content in this file. Claude provides ONLY the table structure below and refuses to draft bounce-signature prose, leading-indicator descriptions, or mitigation strategies. Claude critiques drafts when Daniel requests.

# Failure-mode Analysis — Colisi

> Per `D-SCOPE-08`: for each pillar, what does failing it look like in playtest? "Bounce signature" is the observable behavior in a playtest session that signals the pillar is not landing. The leading-indicator column is the signal you'd catch *before* the bounce — what shows up in metrics or session notes weeks before the bounce signature appears.
>
> **Why this matters:** Pillars without failure-mode signatures are decorative. Failure-mode signatures make pillars **falsifiable** — Daniel can know in playtest that a pillar isn't working and act on it.
>
> **Pre-fill workflow:** Daniel fills the pillar column from `02-pillars-of-play.md` (Pillar 1 → row 1, etc.). One row per named pillar; if `02-pillars-of-play.md` has 3 pillars, only 3 rows; if 5, 5 rows.

---

## Pillar failure-mode table

| Pillar (from `02-pillars-of-play.md`) | Bounce signature in playtest | Early-warning leading indicator | Mitigation if signature appears |
|---|---|---|---|
| **{P1 — Daniel pulls from `02-pillars-of-play.md`}** | {Daniel authors — concrete observable behavior, e.g., "playtester puts the controller down within 10 minutes"} | {Daniel authors — what shows up in playtest notes 2–4 weeks before bounce} | {Daniel authors — what corrective action the team takes} |
| **{P2 — Daniel pulls}** | {Daniel authors} | {Daniel authors} | {Daniel authors} |
| **{P3 — Daniel pulls}** | {Daniel authors} | {Daniel authors} | {Daniel authors} |
| **{P4 — Daniel pulls *(if 4 pillars)*}** | {Daniel authors} | {Daniel authors} | {Daniel authors} |

---

## Cross-pillar failure modes

> Some failure modes do not map cleanly to a single pillar — they emerge from interactions or from missing structural assumptions. Daniel logs cross-pillar failure modes here.

- {Daniel authors — cross-pillar failure mode 1, e.g., "matchmaking puzzle layer (D-VISION-04) lands but feels disconnected from villagers' personal magic (D-VISION-02) — players experience two unrelated games"}
- {Daniel authors}
- {Daniel authors}

---

## Persona-zero playtest hook

Per `D-SCOPE-22` and `22-personazero-playtest-ritual.md`, persona-zero (Dawn) sessions watch for these signatures. The structured 10-minute question template *(from `D-SUST-07`)* — "What did you expect to be able to do that you couldn't? / What felt the worst? / One thing you'd change" — should surface most signatures within 2–4 sessions if a pillar is bouncing.

**Logging:** any signature observed during a persona-zero session is logged in `.planning/playtest-log/YYYY-MM-DD.md` with the row reference and explicit "this is the bounce signature for Pillar X" tag.

---

## Cross-references

- `02-pillars-of-play.md` — pillar column source
- `22-personazero-playtest-ritual.md` — playtest session structure
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-08`, `D-SUST-07`
- `06-player-journey.md` — "what goes wrong if pillar X fails" column overlaps with this analysis
- `.planning/research/PERSONA.md` — historical bounce signatures from cited games
- `21-year3wall-tripwires.md` — sustained failure of a pillar in playtest can become a tripwire
