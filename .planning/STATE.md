---
gsd_state_version: 1.0
milestone: v0.1
milestone_name: milestone
status: planning
last_updated: "2026-05-10T01:27:10.504Z"
progress:
  total_phases: 12
  completed_phases: 0
  total_plans: 0
  completed_plans: 0
---

# Project State: Colisi

**Last updated:** 2026-05-09 (after `/gsd:discuss-phase 1` — vision LOCKED, Phase 1 scope expanded to full 28-artifact mature-studio pre-production set)

---

## Project Reference

**Core value:** Characters and relationships that keep evolving, in a world that never punishes the player.

**Current focus:** Phase 1 — Foundations & Vision Lock. No code yet. **Vision LOCKED 2026-05-09** during `/gsd:discuss-phase 1`: player is a magical helper-sprite enabling each villager's personal magic; matchmaking-via-environmental-manipulation as the central puzzle layer; persona-zero (Dawn) validated and co-developed. Phase 1 scope expanded to full mature-studio pre-production set (28 artifacts across 9 packs). Authoring all the deliverable docs is the work of Phase 1 — Daniel writes all in-world creative content per AI policy; Claude provides templates, structural skeletons, and synthesis-only deliverables.

**Top-line strategic stance:** Architect for the full 30+ hour shipping game from day one. Vertical slice (Milestone 1, phases 1-7) is a checkpoint and wishlist driver, not the endpoint. Full game (Milestone 2, phases 8-11) detailed phasing is deferred until end-of-M1 retro provides honest content-pacing data.

---

## Current Position

**Milestone:** 1 of 2 (Vertical Slice)
**Phase:** 1 of 12 — Foundations & Vision Lock
**Plan:** None active (CONTEXT.md captured 2026-05-09; planning not yet started)
**Status:** Phase 1 CONTEXT.md written; vision LOCKED; Phase 1 scope expanded to full orthodox 28-artifact pre-production set. Awaiting `/gsd:plan-phase 1` to begin Phase 1 planning.

**Progress bar:**

```
M1: [          ] 0/8 phases
M2: [          ] 0/4 phases (sketch only)
v1: [          ] 0/12 phases total
```

**Requirements:** 1/96 mapped requirements satisfied (INFRA-03 complete: repo at `https://github.com/danhicks853/colisi.git`). The other 95 are pending — Phase 1 is planning/decisions/market validation, Phase 2 is infrastructure setup, and shippable game-system REQs begin in Phase 3.

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

- [ ] Run `/gsd:plan-phase 1` to begin Phase 1 planning (full 28-artifact orthodox pre-production set; vision is locked, deliverable authoring is the work)
- [ ] After Phase 1: run `/gsd:plan-phase 2` for infrastructure & repo setup
- [x] Establish persona-zero (Dawn) playtest ritual structure (LOCKED 2026-05-09: bi-weekly 30-min, structured note template, logged to `.planning/playtest-log/YYYY-MM-DD.md`); first 2 sessions must happen during Phase 1 (premise pitch reaction + bi-weekly follow-up)
- [ ] Initialize Git LFS BEFORE first code commit (Phase 2 work, but `.gitattributes` and LFS setup can be staged in Phase 1)
- [ ] Create `.planning/playtest-log/` directory at start of Phase 1 execution
- [ ] First Phase 1 sub-deliverable: premise pitch (1-2 page, Daniel-authored) within first 2 weeks of Phase 1 execution

### Blockers

None currently.

### Slice debt log (HEALTH-02)

Empty — populated during Phase 2+ as architectural shortcuts are intentionally taken with explicit promotion-or-payoff strategies.

### SCOPE.md log (HEALTH-01)

Empty — populated as scope changes occur. **Inaugural entry queued for Phase 1 execution:** Phase 1 scope expansion 2026-05-09 from 7 success criteria to full 28-artifact orthodox pre-production set, with Daniel's directive ("mirror studio orthodoxy; time is not the constraint") as rationale and the vision lock (magical helper-sprite + matchmaking) as the central event of the same session. Second entry: "Two-milestone structure with detailed M1 phasing only" (carry-forward from initial roadmap creation).

---

## Session Continuity

**Last session:** 2026-05-10T01:27:10.501Z

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
