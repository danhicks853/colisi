# slice-debt.md — Architectural shortcuts log

> **Purpose (HEALTH-02):** Track every shortcut taken for the vertical slice that defers full-game architecture, with explicit promotion-or-payoff strategy. Empty during Phase 1 (no code yet); first real entry expected in Phase 2+. Worked example below illustrates the format.
>
> **The cardinal rule from PHILOSOPHY.md §II:** *Hacky shortcuts taken "just for the slice" must be logged here with an explicit promotion-or-payoff strategy. Silent slice debt is the single biggest threat to the project's long-term viability.*
>
> **Update procedure:** Append at top (newest first) for every shortcut. Each monthly retro audits Open entries per HEALTH-02. Each phase-transition (`/gsd:transition`) reconciles entries — pay debts that are cheap to pay now; carry forward debts that are real with explicit promotion plans.

---

## Format

| Column | Meaning |
|---|---|
| **ID** | `SD-XXX` sequential, never reused |
| **Date** | YYYY-MM-DD when the shortcut landed |
| **Phase** | Active GSD phase at the time of the shortcut |
| **Item** | Short name of the system / mechanic / artifact affected |
| **Hack** | What shortcut was taken (concrete: "X uses Y instead of Z") |
| **Why** | Slice-justified rationale (what production goal was unblocked) |
| **Promotion-or-Payoff strategy** | What happens between slice and full-game ship — either promote (replace shortcut with full-game architecture) or payoff (keep slice-shape with explicit decline rationale) |
| **Owner** | Always Daniel for solo dev (preserved column for future) |
| **Target phase** | Where the strategy executes |
| **Tripwire** | Condition that escalates this debt to "blocking" status before its target phase |
| **Status** | One of `Open`, `Promoted`, `Paid-off`, `Carried-forward-to-M2` |

### Status lifecycle

- **Open** — debt still in place; in-scope for resolution at named target phase
- **Promoted** — full-game architecture in place; debt resolved by replacement
- **Paid-off** — slice-shape kept; full-game work declined with rationale (debt was a false alarm or shortcut survived)
- **Carried-forward-to-M2** — debt deferred past M1 ship; promotion strategy is in M2 backlog

---

## Slice-debt entries

> *Empty during Phase 1 — no code yet. First real entry expected Phase 2+.*

| ID | Date | Phase | Item | Hack | Why | Promotion-or-Payoff strategy | Owner | Target phase | Tripwire | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| `SD-EXAMPLE-01` | YYYY-MM-DD | Phase 6 (hypothetical) | NPC schedule loaded from in-memory dictionary instead of save-system Resource | Hardcoded schedule `Dictionary` at scene-load instead of `NPCScheduleResource` saved/loaded via `SaveManager` | Phase 6 slice content production blocked on schedule format finalization; in-memory hardcoded for slice; full save/load works for player + zone state already | Migrate to `NPCScheduleResource` at Phase 9 (Content Scaling) when full 12+ NPC roster requires data-driven schedules; promotion task already in M2 backlog | Daniel | Phase 9 | If slice ships without resolution AND m24 wishlist count >5k, promotion is blocking — pre-launch polish phase | **`[EXAMPLE — illustrative; first real entry expected Phase 2+]`** |

---

## Debt classes (for monthly retro audit)

When auditing, sort entries by class to surface patterns:

- **Architectural shortcuts** — system implemented partially; full architecture deferred (e.g., the example above)
- **Content shortcuts** — slice ships with content stub instead of full content (e.g., 2 dialogue lines instead of 150 for a placeholder NPC)
- **Tooling shortcuts** — pipeline step manual instead of scripted (e.g., manual `.glb` export instead of automated Blender hook)
- **Polish shortcuts** — visual / audio / UX polish deferred (e.g., placeholder SFX, missing animations)
- **Test-coverage shortcuts** — known untested path that ships with slice

A single entry may belong to multiple classes; use the dominant class for sorting.

---

## Cross-references

- `PHILOSOPHY.md` §II Guideline 2 (vertical slice mindset)
- `PHILOSOPHY.md` §III production guardrail: *"Never take a 'for the slice' shortcut without a `slice-debt.md` entry with promotion-or-payoff strategy."*
- `REQUIREMENTS.md` HEALTH-02
- `SCOPE.md` (sister log; SCOPE.md tracks scope changes, slice-debt.md tracks architectural shortcuts)

---

*slice-debt.md created: 2026-05-10 (during Phase 1 plan 01-00 execution; format spec + worked example only)*
