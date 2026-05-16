# Contributing to Colisi

This document is primarily a **note from past-Daniel to future-Daniel** about how Colisi work happens. Outside contributors are not expected in the near term; if you are an outside contributor, the policies here still apply and the License ([`LICENSE`](LICENSE)) governs your contribution.

**Authority:** When this document and [`PHILOSOPHY.md`](PHILOSOPHY.md) disagree, PHILOSOPHY.md wins. When this document and [`CLAUDE.md`](CLAUDE.md) disagree, CLAUDE.md wins (load-bearing rules). When this document and a downstream plan disagree on workflow specifics, this document is authoritative.

---

## 1. Who can contribute

- **Solo developer Daniel Hicks** is the sole intended contributor through at least Milestone 1 (vertical slice).
- **Outside contributions are not actively solicited** but may be considered case-by-case. If you want to contribute, **open an issue first** describing what you'd like to work on. Do not submit a PR cold — it will likely be closed without review.
- Outside contributions are accepted under the **inbound-license assumption** in [`LICENSE`](LICENSE) (the copyright holder retains the right to relicense as part of the project; see the "future-relicensing" clause).

---

## 2. Workflow: GSD-based phase planning

All non-trivial work happens through the **GSD (Get Shit Done)** workflow. See [`CLAUDE.md`](CLAUDE.md) §"GSD Workflow Enforcement" for the load-bearing rule.

**Entry points:**

- `/gsd:quick` — small fixes, doc updates, ad-hoc tasks
- `/gsd:debug` — investigation and bug fixing
- `/gsd:execute-phase` — planned phase work

Direct edits to the repo outside a GSD workflow are forbidden unless explicitly requested in the session. Planning artifacts live in `.planning/`. Every phase has a directory with the following lifecycle:

```
.planning/phases/XX-name/
├── XX-CONTEXT.md         ← gathered before planning; captures decisions + canonical refs
├── XX-YY-...-PLAN.md     ← per-plan execution spec
└── XX-YY-...-SUMMARY.md  ← per-plan execution outcome + decisions + commits
```

---

## 3. Commit conventions

### Commit message format

**Conventional Commits** style (already in practice — see `git log`).

**Format:** `<type>(<scope>): <short description>`

**Types in use:**

| Type | When |
| --- | --- |
| `feat` | New feature, endpoint, component |
| `fix` | Bug fix, error correction |
| `docs` | Documentation only |
| `refactor` | Code cleanup, no behavior change |
| `test` | Test-only changes (TDD RED, or test-suite work) |
| `chore` | Config, tooling, dependencies |
| `perf` | Performance improvement |
| `style` | Formatting only |
| `ci` | CI / GitHub Actions changes |

**Scope** is usually the phase + plan: e.g., `feat(01-04): add slice scenario sketch`, `docs(02-02): add CONVENTIONS.md`. For cross-cutting changes that don't fit a plan, use a domain scope: `docs(infra): ...`, `chore(env): ...`.

**Body** is multi-line markdown allowed; reference REQUIREMENTS.md IDs and SCOPE.md rows where relevant.

**Example** (from actual commit history):

```
docs(02): create phase plan

Creates 5 PLAN.md files for Phase 2 (Infrastructure & Repo Setup) per
INFRA-01..11. Plans organized into 3 waves for parallel execution.
```

### Atomic commits

- **One logical change per commit.** If a single commit message needs the word "and" between two unrelated changes, split the commit.
- File-scoped staging via `git add <file>` is preferred over `git add .` or `git add -A` — those can accidentally include unrelated work-in-progress or sensitive files (`.env`, credentials).
- Pre-commit hooks (none configured Phase 2; may add in Phase 3+) must pass. Do not bypass with `--no-verify` unless explicitly requested in the session.
- **Commits never amend prior commits unless explicitly requested.** When a commit fails (hook failure, mistake), create a new commit; don't `--amend` it.

### AI-assistance disclosure

- **Substantive AI-assisted commits should be tagged.** See [`CLAUDE.md`](CLAUDE.md) §"Disclose AI assistance in commits".
- **Code-completion / refactor / lint-fix assistance is fine without disclosure** (Daniel reviews every committed line; that's the human-in-the-loop guarantee).
- **AI-drafted full files** (e.g., this CONTRIBUTING.md, CONVENTIONS.md, CHANGELOG.md) get a `Co-Authored-By:` trailer or a body note.

---

## 4. Branch model

- **Trunk-based development on `main`** (single branch).
- `main` is the source of truth (per INFRA-03).
- **Feature branches are optional.** If used, branch-name format: `feat/<phase>-<plan>-<slug>` (e.g., `feat/02-01-repo-hardening`).
- No long-lived feature branches; merge or delete within ~1 week.
- **Direct pushes to `main` are normal for solo work.** This is not a team workflow.
- **Force-push to `main` is forbidden** without explicit reason recorded in `.planning/SCOPE.md`. Even with reason, prefer a revert commit over a force-push.

---

## 5. Pull requests

- **Outside contributors only:** PRs from forks. Open an issue first (see §1).
- **Daniel:** Optional feature branches → PR for review-by-future-self (rarely worth the overhead for solo work; usually direct commit to `main`).
- PR template (when added Phase 3+): summary, requirements addressed, test plan, screenshots/recordings if UI work.

---

## 6. Amendments to project foundations

Foundational documents — [`PHILOSOPHY.md`](PHILOSOPHY.md), [`PROJECT.md`](.planning/PROJECT.md), [`ROADMAP.md`](.planning/ROADMAP.md), [`REQUIREMENTS.md`](.planning/REQUIREMENTS.md), and the locked decisions in `.planning/phases/*/XX-CONTEXT.md` — change **only via the Amendment Process** documented in PHILOSOPHY.md.

**Brief restatement:** log the change in [`.planning/SCOPE.md`](.planning/SCOPE.md) with rationale and impact analysis, then update the source document. Both happen in the same commit (or a tightly coupled pair).

- **Locked decisions** (e.g., D-VISION-XX, D-INFRA-XX, D-SUST-XX, D-WALL-XX, D-MKTG-XX) are **not revisited casually**. Reversal requires an explicit SCOPE.md entry titled `REVERSAL: <decision ID>` with rationale, evidence, and the consequences accepted.
- **The four hard guardrails are immutable for v1:**
  1. No real-time-pressure mechanics (day clocks, missable windows, stamina, tool durability, bedtime forcing)
  2. No real-time forward-timer gating (wait X real-world minutes/hours for resources/items)
  3. No real-world-clock-tied content gating (NPCs/critters locked to real-world hours of day)
  4. No AI-generated creative content (visual assets, audio assets, in-game writing, names, public-facing copy)

  Reversal of any of these requires reverting the affected SCOPE rows AND a CLAUDE.md update AND a PHILOSOPHY.md amendment AND an AI-DISCLOSURE.md update. Don't.

---

## 7. AI use policy (load-bearing — read this)

Colisi has a **strict AI use policy** documented in [`PHILOSOPHY.md`](PHILOSOPHY.md) Section V and publicly disclosed in [`AI-DISCLOSURE.md`](AI-DISCLOSURE.md). Claude is delegated to **enforce** it. Verbatim summary of CLAUDE.md §1:

### Refusal list — NEVER for this project

- **No AI-generated visual assets** — sprites, textures, 3D models, UI art, particle effects, animations, character art, environment art, icons, concept art, mood boards, reference art. Even placeholder. Even internal-only.
- **No AI-generated audio assets** — music, SFX, voice, ambience.
- **No AI-generated in-game writing** — dialogue lines, item descriptions, menu copy, journal entries, tooltips, character / NPC / place / item / mechanic names.
- **No procedural-template dialogue at runtime** — even if templates would be human-authored. Off the table.
- **No AI-final level layouts or core gameplay-loop designs** — brainstorming options is OK; final design is Daniel's.
- **No AI public-facing creative writing** — Steam page copy, capsule copy, trailer narration, devlog posts, marketing tweets, community posts.
- **No unsolicited entity name suggestions.** (Names allowed only if Daniel explicitly asks for an idea-generation prompt.)

### Allowed — explicitly

- Code autocomplete, refactor, bug-finding, lint (Daniel reviews every committed line)
- Boilerplate code generation
- Project planning artifacts (PROJECT.md, ROADMAP.md, CLAUDE.md, this file, etc.)
- Research synthesis
- Brainstorming partner ("what are some possibilities," "give me 10 ideas")
- Critique and copy-check on Daniel's drafts (for prose he wrote)
- Tooling scripts (build, deploy, asset-pipeline glue)
- Localization assist (machine translation as a starting point for human translator review)
- Help learning a creative tool (Blender, LMMS, Aseprite) so Daniel can create the asset himself
- Help locating human-creator resources (CC0 packs, paid freelancers)

### Enforcement

Claude is delegated to refuse — see CLAUDE.md for the four-step refusal protocol (refuse directly; reference the rule; offer legitimate alternative; hold the line when Daniel pushes back from fatigue).

---

## 8. Slice-debt and SCOPE discipline

- **Every shortcut taken for the slice** goes in [`.planning/slice-debt.md`](.planning/slice-debt.md) per HEALTH-02. Format spec at the top of that file.
- **Every architectural decision** goes in [`.planning/SCOPE.md`](.planning/SCOPE.md) per HEALTH-01. Format spec at the top of that file.
- **Silent slice-debt or silent scope changes are forbidden.** If you skip the log, you owe yourself a retro entry explaining why.
- Slice debt entries require a **promotion-or-payoff strategy** at the time the debt is taken, not at the time it's repaid. "I'll figure it out later" is not a promotion plan.

---

## 9. Testing discipline

Brief sketch (full conventions Phase 3+):

- **GUT tests are written for these systems** per STACK.md §"Testing Approach":
  - Save/load round-trip
  - Dialogue conditional evaluation
  - Calendar/time logic
  - Inventory math
  - Crafting recipes
  - Relationship state transitions
- **GUT tests are NOT written for:**
  - Visual scenes
  - Animation playback
  - Shader output
  - UI exact layout
- **Test cadence:** run GUT before every commit that touches a tested system.
- **Add a regression test only after a bug bites you.** Don't pre-test imaginary failure modes.

A solo cozy-game project should have **dozens, not hundreds, of tests**, focused on the systems that, when broken, ruin a player's save or progression.

---

## 10. Sustainable pace (no hour tracking)

- This project is paced by **milestones, not hours**, per D-SUST-01..08 (locked Phase 1).
- There is **no commit-velocity target**. There is no hours-per-week target.
- **Cadence:**
  - Continuous nightly session ritual
  - Monthly retro
  - Quarterly review
  - Bi-weekly persona-zero playtest (HEALTH-05)
- If you (future-Daniel) feel burnout signals, see [`.planning/phases/01-foundations-vision-lock/deliverables/process-pack/20-sustainable-pace-cadence.md`](.planning/phases/01-foundations-vision-lock/deliverables/process-pack/20-sustainable-pace-cadence.md) and the Year-3-Wall tripwires document at [`.planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/21-year3wall-tripwires.md`](.planning/phases/01-foundations-vision-lock/deliverables/decision-lock-pack/21-year3wall-tripwires.md).

The ritual of showing up is the discipline. Productivity unit is cumulative phase-completion delta vs roadmap estimate, not hours logged.

---

**Last updated:** 2026-05-11 (Phase 2 initial creation per INFRA-10)
**Source authority:** [`PHILOSOPHY.md`](PHILOSOPHY.md) (governance) + [`CLAUDE.md`](CLAUDE.md) (load-bearing rules) + D-SUST-01..08 locked decisions
**Amendment:** log to [`.planning/SCOPE.md`](.planning/SCOPE.md), then edit this file.
