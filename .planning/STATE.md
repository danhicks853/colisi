---
gsd_state_version: 1.0
milestone: v0.1
milestone_name: milestone
status: executing
last_updated: "2026-05-10T03:40:34.639Z"
progress:
  total_phases: 12
  completed_phases: 0
  total_plans: 9
  completed_plans: 1
---

# Project State: Colisi

**Last updated:** 2026-05-09 (after `/gsd:discuss-phase 1` — vision LOCKED, Phase 1 scope expanded to full 28-artifact mature-studio pre-production set)

---

## Project Reference

**Core value:** Characters and relationships that keep evolving, in a world that never punishes the player.

**Current focus:** Phase 01 — foundations-vision-lock

**Top-line strategic stance:** Architect for the full 30+ hour shipping game from day one. Vertical slice (Milestone 1, phases 1-7) is a checkpoint and wishlist driver, not the endpoint. Full game (Milestone 2, phases 8-11) detailed phasing is deferred until end-of-M1 retro provides honest content-pacing data.

---

## Current Position

Phase: 01 (foundations-vision-lock) — EXECUTING
Plan: 1 of 9 complete (01-00 scaffolding); 8 plans remaining
**Milestone:** 1 of 2 (Vertical Slice)
**Phase:** 1 of 12 — Foundations & Vision Lock
**Plan:** 01-00 (deliverable scaffolding) COMPLETE 2026-05-10; next plan = 01-01 (Vision Pack — Daniel authors)
**Status:** Executing Phase 01

**Progress bar:**

```
Phase 01 plans: [█░░░░░░░░░] 1/9 complete (11%)
M1: [          ] 0/8 phases
M2: [          ] 0/4 phases (sketch only)
v1: [          ] 0/12 phases total
```

**Requirements:** 3/96 mapped requirements satisfied + 1 ritual-established. Complete: INFRA-03 (repo at `https://github.com/danhicks853/colisi.git`); HEALTH-01 (`.planning/SCOPE.md` log created 2026-05-10 plan 01-00); HEALTH-02 (`.planning/slice-debt.md` log created 2026-05-10 plan 01-00). Ritual-established: HEALTH-05 (persona-zero ritual scaffold + playtest-log dir ready; full satisfaction at 2 sessions in plans 01-01 + 01-08). 92 still pending.

---

## Performance Metrics

**Project age:** 1 day (initialized 2026-05-09)
**Estimated total horizon:** 4-6 years (likely upper end — see roadmap "Brutally Honest Timeline")
**M1 estimated duration:** 22-32 months (revised 2026-05-09 after Phase 1 scope expansion to full orthodox pre-production set; Phase 1 alone now 4-8 months at sustainable nightly pace per Daniel's "time is not the constraint" directive)
**M2 estimated duration:** 3-4+ additional years

**Current pace target:** Milestone-based, NOT hour-based (locked 2026-05-09). Continuous nightly session ritual; no hour tracking; phase plans drive monthly milestones; monthly retro + quarterly review; bi-weekly persona-zero playtest. With heavy AI assistance, hours/week is the wrong unit. Productivity tripwire signal = cumulative phase-completion delta vs roadmap estimate.

**Wishlist count:** N/A (Steam page launches at end of Phase 7; tracking begins then)

---

## Accumulated Context

### Decisions logged

| Date | Decision | Rationale | Phase |
|------|----------|-----------|-------|
| 2026-05-09 | Engine: Godot 4.5.x | MIT license, no royalties, GDScript beginner-friendly, strong 3D in v4 | Initialization |
| 2026-05-09 | Language: GDScript | Beginner profile + ecosystem alignment | Initialization |
| 2026-05-09 | Dialogue tooling: Nathan Hoad's Dialogue Manager (NOT Dialogic 2) | Stateless design — reads/writes GameState autoload via mutations — is exactly the decoupling needed for a 30+ hour game; Dialogic 2 still in alpha churn | Synthesizer override during research |
| 2026-05-09 | Save format: Custom Resource (`GameStateData.tres`) with versioned schema from day one | Type-safe, native Godot, migration-safe | Initialization |
| 2026-05-09 | Multi-axis relationships (trust/intimacy/respect/familiarity), NOT hearts | Stardew's repetitive heart-tier loops are a verified persona dislike | Initialization |
| 2026-05-09 | State-flag loose branching (Inkle "variables, not branches"), NOT branching trees | Combinatorial explosion mitigation; matches BG3/Disco Elysium pattern | Initialization |
| 2026-05-09 | No real-time-pressure mechanics anywhere | Persona's #1 dislike across 18+ games; the core market differentiator | Initialization |
| 2026-05-09 | Two-milestone roadmap structure (M1 = slice, M2 = full game) | Synthesizer recommendation; M2 detail deferred to end-of-M1 retro for honest pacing data | Roadmap creation |
| 2026-05-09 | **VISION LOCK: Player is magical helper-sprite; villagers each have personal magic the sprite enables; matchmaking-via-environmental-manipulation is central puzzle layer** | Persona-zero (Dawn) validated and co-developed in real-time during `/gsd:discuss-phase 1`; structural fit verified against locked architectural decisions (BG3 × Sims dream cross translates mechanically; Sanderson's First Law dodged; cozy-without-time-pressure preserved) | Phase 1 — discuss-phase |
| 2026-05-09 | Phase 1 scope expanded from 7 success criteria to full mature-studio pre-production set (28 artifacts, 9 packs) | Daniel directive: mirror established studio orthodoxy; time is not the constraint; AI assistance makes depth cheap | Phase 1 — discuss-phase |
| 2026-05-09 | Time model: pure action-driven contract; player-controlled day/night (Stardew/ACNH-style); continuous NPC pathing during play (ambitious — commits Phase 3 navmesh + animation budget); trigger list deferred to derive from Core Loops Pack | Strong lean already on action-driven; locked the contract during Phase 1 discuss-phase | Phase 1 — discuss-phase |
| 2026-05-09 | Year-3-Wall tripwire protocol: cascade m6/12/24/36, multi-OR triggers, 1-week structured pause-and-replan with 3-scenario evaluation, pre-committed outside reviewer co-sign, re-baseline-and-rearm on continue-as-is. Productivity unit = cumulative phase-completion delta. | Pause-and-replan beats auto-cut for solo dev; structured pause prevents pause-and-rationalize failure mode | Phase 1 — discuss-phase |
| 2026-05-09 | MKTG-06 method: hybrid game-list (selection rule + curation), LLM-assisted classification + Daniel verification of every tag, formal Google Form survey, triangulation decision rubric | Within AI policy; rigorous against confirmation bias; falsifiable verdict criteria pre-committed | Phase 1 — discuss-phase |
| 2026-05-09 | Sustainability rhythms: continuous nightly session, no hour tracking, milestone-based goals (phase-plan-driven), monthly retro + quarterly review, bi-weekly persona-zero (Dawn) playtest with structured note template | Hour-based targets dropped — wrong unit when AI-assisted; ritual of showing up is the discipline | Phase 1 — discuss-phase |
| 2026-05-09 | World Bible v0.1 depth: DEEP (full v1 setting bible — 8 zones, full pantheon/lore, magic system as cultural/atmospheric tiers (NOT mechanical TTRPG tiers), Stardew-shape calendar with Colisi-flavored season names, every culture, naming-system rules) | Mature-studio orthodoxy directive applied | Phase 1 — discuss-phase |
| 2026-05-09 | Magic tone: soft magic with codified vibes (Brandon Sanderson terminology — whimsical, atmospheric, not used to solve plot problems; codified what magic CAN'T do) | Cozy-game tone preservation; deus-ex-machina prevention | Phase 1 — discuss-phase |
| 2026-05-09 | Style Guide v0.1 depth: Full v0.1 across visual / audio / narrative voice / UI tone (per orthodoxy directive). Reference deck anchored on Sandara Tang druid + leaf-fawn (primary), with Hades character art, Okami art style, Borderlands cel-shading, Studio Ghibli themes. Visual direction synthesis is Daniel's call (tension between soft-painterly and bold-graphic-ink-line schools). | Visual references collected with Dawn during session | Phase 1 — discuss-phase |
| 2026-05-10 | **D-VISION-04 sharpened: two-layer puzzle structure with distinct rhythms.** Moment-to-moment layer (frequent) = magic-tutoring through per-villager skill minigames (e.g., cooking minigame with baker, rhythm-spell at lathe with carpenter). Meta layer (rare, high-meaning) = matchmaking-via-environmental-manipulation as story-anchor arcs. Pattern reference: Hades-shape (frequent combat run + meta dialogue arcs) and Stardew-shape (daily activity + seasonal heart-events). Original 2026-05-09 lock understated the moment-to-moment magic-tutoring activity; this refines, does not contradict. | Daniel's design clarification during paragraph-pitch authoring; downstream consumers (05-core-loops.md, 07-pillar-mechanic-matrix.md, 23-why-play-at-hour-200.md) must distinguish the two rhythms when deriving from D-VISION-04 | Phase 1 — execution |
| 2026-05-10 | Plan 01-00 scaffolding complete: 26 deliverable scaffolds + SCOPE.md (HEALTH-01 inaugural log) + slice-debt.md (HEALTH-02 inaugural log) + .planning/playtest-log/ (HEALTH-05 prerequisite). AI policy boundary held on every creative-content slot — zero Claude-generated names / in-world prose / dialogue / palettes / voice samples / marketing copy across all 14 creative-content scaffolds. | 12 synthesis-allowed scaffolds populated from research/STACK.md, research/ARCHITECTURE.md, research/PITFALLS.md, research/SUMMARY.md, and CONTEXT.md decisions. HEALTH-04 wording amendment surfaced (deferred to plan 01-06). Outside-reviewer designation tracked as Phase 1 blocker. | Phase 1 — execute-plan 01-00 |

### Open decisions

**Resolved 2026-05-09 during `/gsd:discuss-phase 1`** (no longer open):

- ~~Action-driven vs wall-clock time model~~ — Pure action-driven contract LOCKED; trigger list deferred to derive from Core Loops Pack during Phase 1 execution
- ~~Year-3-Wall pivot tripwires (protocol)~~ — Cascade + multi-OR + structured pause-and-replan LOCKED; specific metric thresholds per checkpoint authored during Phase 1 execution
- ~~Sustainability cadence structure~~ — LOCKED (milestone-based, no hour tracking, continuous nightly, monthly + quarterly + bi-weekly persona-zero)
- ~~MKTG-06 validation methodology~~ — LOCKED (hybrid game-list + LLM-assisted classification + Daniel verification + formal Google Form + triangulation rubric)
- ~~World Bible depth + magic tone + calendar shape~~ — LOCKED (Deep + soft-magic-with-codified-vibes + Stardew-shape calendar)
- ~~Style Guide depth~~ — LOCKED at Full v0.1 across all four pillars
- ~~Player premise~~ — LOCKED (magical helper-sprite + matchmaking puzzle layer; persona-zero validated)

**Still open (deferred to Phase 1 execution authoring or later):**

1. **Time-model trigger list** (canonical actions that advance time) — derives from Core Loops Pack; locks during Phase 1 execution OR explicitly defers to Phase 4 with rationale
2. **Specific Year-3-Wall metric thresholds at each cascade checkpoint** (m6/12/24/36) — needs comparable-game research; authored during Phase 1 execution
3. **Specific games-to-mine list and survey question wording for MKTG-06** — Phase 1 execution
4. **NPC count cap for full game** — Lean: 12 for v1, architecture supporting 15. Decide before Phase 5 content scoping.
5. **Music production path** — Self-author with LMMS/Bosca for slice, contract composer post-slice with wishlist revenue. Decide in Phase 2 or 5.
6. **Sprite home / sanctum design** — open question; Phase 1 World Bible work resolves
7. **Sprite movement and camera spec** (drift vs walk) — Phase 1 sketch; Phase 3 implements
8. **HOME / CRAFT / COMP REQUIREMENTS.md interpretation amendments under sprite premise** — Phase 1 documents direction; REQUIREMENTS.md amended at Phase 1 → Phase 2 transition
9. **Hard-vs-soft magic-tier reconciliation final wording** — Phase 1 World Bible authoring confirms Claude's interpretation (cultural/atmospheric tiers, not mechanical) or corrects

### Active todos (project-level)

- [x] Run `/gsd:plan-phase 1` to begin Phase 1 planning (DONE: 9-plan set generated 2026-05-09)
- [x] Plan 01-00 (deliverable scaffolding): 26 deliverable scaffolds + SCOPE.md + slice-debt.md + .planning/playtest-log/ — COMPLETE 2026-05-10
- [ ] Plan 01-01 (Vision Pack): Daniel authors Vision Pitch + Pillars + Core Fantasy + Anti-positioning; persona-zero session 1 (HEALTH-05 first session)
- [ ] Plan 01-02 (Risk-Capability-Process): Daniel signs Risk Register / Capability Matrix / Tools-Pipeline / Stack / Architecture / Persona-zero ritual / Sustainable-pace
- [ ] Plan 01-03 (Loops & Journey): Daniel authors Core Loops + Player Journey + Pillar×Mechanic matrix + Failure-mode analysis
- [ ] Plan 01-04 (Scenario Pack): Daniel authors Slice Scenario + Wow Beats + 30s Elevator Demo
- [ ] Plan 01-05 (World & Style Pack): Daniel authors World Bible v0.1 + Mood Deck (zero-AI) + Style Guide v0.1
- [ ] Plan 01-06 (Decision Locks + Tripwires): Daniel populates Year-3-Wall thresholds + Hour-200 retention four-engine application + finalizes Time-model lock + designates outside reviewer
- [ ] Plan 01-07 (MKTG-06 validation): build game list + draft survey + Steam review LLM classification + survey distribution + verdict
- [ ] Plan 01-08 (Greenlight): Persona-zero session 2 + Daniel signs Greenlight + outside reviewer cosigns Year-3-Wall criteria — gates Phase 2
- [x] Establish persona-zero (Dawn) playtest ritual structure (LOCKED 2026-05-09: bi-weekly 30-min, structured note template, logged to `.planning/playtest-log/YYYY-MM-DD.md`); ritual scaffolded in `22-personazero-playtest-ritual.md`; first 2 sessions during plans 01-01 + 01-08
- [ ] Initialize Git LFS BEFORE first code commit (Phase 2 work, but `.gitattributes` and LFS setup can be staged in Phase 1)
- [x] Create `.planning/playtest-log/` directory at start of Phase 1 execution (DONE 2026-05-10 in plan 01-00)
- [ ] First Phase 1 sub-deliverable: premise pitch (1-2 page, Daniel-authored; scaffold ready at `01-vision-pitch.md`); plan 01-01

### Blockers

None currently.

### Slice debt log (HEALTH-02)

Created 2026-05-10 during plan 01-00 execution at `.planning/slice-debt.md`. Format spec + 1 illustrative worked example. Empty of real entries; first real entry expected Phase 2+ as architectural shortcuts are intentionally taken with explicit promotion-or-payoff strategies. See `slice-debt.md`.

### SCOPE.md log (HEALTH-01)

Created 2026-05-10 during plan 01-00 execution at `.planning/SCOPE.md`. Format spec + 2 inaugural entries (both dated 2026-05-09): Phase 1 scope expansion (7 success criteria → 28-artifact orthodox pre-production set) + Two-milestone roadmap structure (M1 = slice; M2 detail deferred). See `SCOPE.md`.

---

## Session Continuity

**Last session:** 2026-05-10T03:40:34.636Z

- Defined PROJECT.md
- Generated PERSONA.md, FEATURES.md, STACK.md, ARCHITECTURE.md, PITFALLS.md research
- Synthesized SUMMARY.md
- Defined REQUIREMENTS.md (84 v1 requirements)
- Created ROADMAP.md (this session)
- Created STATE.md (this session)

**Next session start:**

1. Read STATE.md (this file) for current position
2. Read ROADMAP.md Phase 1 detail
3. Run `/gsd:plan-phase 1` to begin Phase 1 plan generation
4. Phase 1 is decisions/documents/rituals only — no code in this phase

**Phase transition checklist** (run via `/gsd:transition` at end of each phase):

- [ ] All success criteria observable as TRUE
- [ ] All mapped REQ-IDs validated and moved to Validated in PROJECT.md
- [ ] SCOPE.md log updated with phase scope decisions
- [ ] slice-debt.md log reconciled (carry-forward items have payoff plans)
- [ ] Persona-zero playtest happened this phase (HEALTH-05 cadence held)
- [ ] Sustainable-pace cadence held this phase (HEALTH-04 honest check)
- [ ] Year-3-Wall tripwires re-checked (still valid? any need updating?)

---

*State file initialized: 2026-05-09 alongside ROADMAP.md*
