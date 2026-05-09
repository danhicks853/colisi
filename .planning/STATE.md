# Project State: Colisi

**Last updated:** 2026-05-09 (after roadmap creation + project codename lock)

---

## Project Reference

**Core value:** Characters and relationships that keep evolving, in a world that never punishes the player.

**Current focus:** Phase 1 — Foundations & Vision Lock. No code yet. Locking pillars, four-killer mitigations, sustainability rhythms, and resolving the open architectural questions (action-driven vs wall-clock time; Dialogue Manager confirmed) before any code is written.

**Top-line strategic stance:** Architect for the full 30+ hour shipping game from day one. Vertical slice (Milestone 1, phases 1-7) is a checkpoint and wishlist driver, not the endpoint. Full game (Milestone 2, phases 8-11) detailed phasing is deferred until end-of-M1 retro provides honest content-pacing data.

---

## Current Position

**Milestone:** 1 of 2 (Vertical Slice)
**Phase:** 1 of 11 — Foundations & Vision Lock
**Plan:** None active (planning not yet started)
**Status:** Roadmap created. Awaiting `/gsd:plan-phase 1` to begin Phase 1 planning.

**Progress bar:**
```
M1: [          ] 0/7 phases
M2: [          ] 0/4 phases (sketch only)
v1: [          ] 0/11 phases total
```

**Requirements:** 0/84 mapped requirements satisfied (none yet — phase 1 is a planning/decisions phase, no REQs verifiable until Phase 2 work begins).

---

## Performance Metrics

**Project age:** 1 day (initialized 2026-05-09)
**Estimated total horizon:** 4-6 years (likely upper end — see roadmap "Brutally Honest Timeline")
**M1 estimated duration:** 18-24 months
**M2 estimated duration:** 3-4+ additional years

**Current pace target:** ~25 hours/week sustainable solo cadence (HEALTH-04 — to be formalized in Phase 1)

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

### Open decisions (to resolve in Phase 1)

1. **Action-driven vs wall-clock time model.** Strong lean: action-driven. Lock in Phase 1.
2. **Year-3-Wall pivot tripwires (specific miss-criteria with dates and numbers).** Pre-commit in Phase 1.
3. **NPC count cap for full game.** Lean: 12 for v1, architecture supporting 15. Decide before Phase 5 content scoping.
4. **Music production path.** Self-author with LMMS/Bosca for slice, contract composer post-slice with wishlist revenue. Decide in Phase 2 or 5.

### Active todos (project-level)

- [ ] Run `/gsd:plan-phase 1` to begin Phase 1 planning (vision lock, decisions, sustainability docs — no code)
- [ ] After Phase 1: run `/gsd:plan-phase 2` for the foundational systems
- [ ] Establish persona-zero 15-min playtest ritual (HEALTH-05) — first session must happen during Phase 1
- [ ] Initialize Git LFS BEFORE first code commit (Phase 2 work, but `.gitattributes` and LFS setup can be staged in Phase 1)

### Blockers

None currently.

### Slice debt log (HEALTH-02)

Empty — populated during Phase 2+ as architectural shortcuts are intentionally taken with explicit promotion-or-payoff strategies.

### SCOPE.md log (HEALTH-01)

Empty — populated as scope changes occur. First entry should be Phase 1 itself: "Two-milestone structure with detailed M1 phasing only" with rationale.

---

## Session Continuity

**Last session:** Project initialization (2026-05-09)
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
