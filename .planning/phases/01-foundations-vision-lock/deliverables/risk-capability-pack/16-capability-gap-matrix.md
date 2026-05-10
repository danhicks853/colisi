---
deliverable: 16
pack: risk-capability
title: Capability Gap Matrix
author: Claude (synthesis from STACK.md + ARCHITECTURE.md + 01-RESEARCH.md Pattern 5); Daniel (current/target proficiency scoring + sign-off)
ai_role: synthesis-allowed (skill list + acquisition plan from research; Daniel scores proficiency)
depends_on:
  - .planning/research/STACK.md
  - .planning/research/ARCHITECTURE.md
  - .planning/research/PITFALLS.md
decisions_referenced:
  - D-SCOPE-16
downstream_consumers:
  - Phase 2 / 3 onboarding (Daniel uses acquisition plan to schedule learning blocks)
  - Phase 6 art pipeline (Blender / Mixamo skill prerequisites)
  - Monthly retro (skill acquisition status reviewed)
  - 28-greenlight.md (capability commitment is part of greenlight)
---

# Capability Gap Matrix — Colisi

> Per `D-SCOPE-16`: skills required vs current proficiency vs acquisition plan + deadline. AIHR / Personio / Valamis-standard skills-matrix format. 1–5 proficiency scale (1 = no exposure, 5 = expert).
>
> **Source format** (per `01-RESEARCH.md` Pattern 5): the rows below are synthesized from `research/STACK.md` (engine + tooling + pipeline + testing skills) and `research/ARCHITECTURE.md` (architecture + dialogue + save system skills). **Daniel scores Current and Target proficiency.** Gap = Target − Current; sortable by gap to prioritize learning.

---

## Matrix

| Skill | Phase needed | Current proficiency (1–5) | Target proficiency (1–5) | Gap | Acquisition plan | Deadline | Status |
|-------|---------------|:--:|:--:|:--:|------------------|----------|--------|
| **GDScript syntax + idiom** | Phase 3 | 0 | 4 | +4 | Godot docs tutorial sequence + GDQuest curriculum (per `STACK.md` Recommended Stack) | End of Phase 2 (~m4) | Open |
| **Godot 4.5.x scene composition** | Phase 3 | 0 | 4 | +4 | Heartbeast / GDQuest 3D-cozy tutorials | Phase 3 | Open |
| **Blender 3D modeling** | Phase 6 | 1 | *DEFERRED (pending INFRA-08)* | *deferred* | YouTube curriculum + indie-cozy character tutorials; Blender LTS pinned | Phase 5 | Open |
| **Blender rigging + glTF export (`STACK.md` 3D Art Pipeline)** | Phase 6 | 0 | 3 | +3 | Blender Studio glTF guide + supermatrix.studio Blender→Godot guide; NLA Strips workflow | Phase 5 | Open |
| **Mixamo + retargeting workflow** | Phase 6 | 0 | 3 | +3 | Asset Library Mixamo Retargeter README + manual bone-map fallback | Phase 5–6 | Open |
| **Dialogue Manager (Nathan Hoad)** | Phase 4 | 0 | 3 | +3 | Dialogue Manager docs + example projects; pin to specific version (`STACK.md`) | Phase 3 | Open |
| **Custom Resource save schema + migrations** | Phase 3 | 1 | 4 | +3 | GDQuest save-game-godot4 article + practice migration; atomic save-write protocol (`STACK.md`) | Phase 3 | Open |
| **Steam Web API (for `MKTG-06` review mining)** | Phase 1 | 3 | 3 | 0 | One-page tutorial; `appreviews` endpoint; LLM helps wrap calls per `D-MKTG-02` | Phase 1 execution (plan 01-07) | Open |
| **Google Forms + Sheets analysis (for `MKTG-06`)** | Phase 1 | 5 | 3 | -2 | Standard usage; LLM helps with formulas | Phase 1 execution (plan 01-07) | Open |
| **GodotSteam GDExtension integration** | Phase 7–8 | 1 | 3 | +2 | godotsteam.com docs (`STACK.md`); defer until ~m18 per stack guidance | ~m18 | Deferred |
| **butler / itch.io publishing** | Phase 8 | 1 | 3 | +2 | itch.io butler docs (`STACK.md`); first manual upload, automate later | ~m18 | Deferred |
| **Music production (Bosca Ceoil → LMMS)** | Phase 6+ | 0 | *DEFERRED (pending composer-hire decision)* | *deferred* | LMMS + Bosca tutorials (`STACK.md` Audio); revisit composer-hire decision post-revenue | Phase 6 | Open |
| **Narrative writing for state-tagged dialogue** | Phase 4+ | 3 | 5 | +2 | Inkle "variables not branches" (`PHILOSOPHY.md` §I.4) + Disco Elysium voice corpus + Daniel's own writing practice | Ongoing | Open |
| **Steam page copy + capsule art commission process** | Phase 8 | 1 | 3 | +2 | Chris Zukowski materials (`research/SUMMARY.md` cites); capsule art commissioned to professional (`MKTG-05`) | ~m18 | Deferred |
| **Solo-dev project management discipline** | All phases | 5 | 4 | -1 | This GSD workflow; monthly retros; Year-3-Wall check-ins (`HEALTH-03..05`) | Ongoing | Open |
| **GUT 9.x test authoring (save/load, calendar, dialogue conditions)** | Phase 3+ | 2 | 3 | +1 | GUT documentation (`STACK.md` Testing Approach); test only systems that hurt to break | Phase 3 | Open |
| **Git LFS configuration + maintenance** | Phase 2 | 4 | 3 | -1 | `STACK.md` Version Control + Git LFS Strategy; INFRA-01 deliverable | Phase 2 | Open |

---

## Acquisition plan summary

**Phase 1 (now):** Steam Web API, Google Forms (for `MKTG-06`).

**Phase 2 (~2–3 weeks):** Git LFS, `.gitignore`, project conventions. Skill load is light — mechanical setup.

**Phase 3 (~4–5 months):** GDScript + Godot scene composition + Custom Resource saves + GUT testing + Dialogue Manager wrapper. **Highest learning load of the project.** R-05 (`15-risk-register.md`) flags this phase's overrun risk.

**Phase 5 (parallel to Phase 3 / 4):** Blender modeling + rigging + glTF + Mixamo workflow. Daniel may begin Blender curriculum during Phase 3 idle weeks to de-risk Phase 6.

**Phase 6 (longest phase, 6–9 months):** all art skills load-bearing; music skills come online here.

**Phase 7–8:** GodotSteam, butler, Steam page copy, capsule art commission process.

---

## Tripwires for skill acquisition

If a skill's deadline is missed by >1 month and the phase that needs it is approaching:

1. Log to `slice-debt.md` if a shortcut is available (e.g., paid asset pack instead of in-house Blender work)
2. Flag at next monthly retro
3. Consider phase-budget extension via `SCOPE.md` entry
4. If chronic delay across multiple skills, this is a `D-WALL-06` cumulative-phase-completion-delta signal that may fire a Year-3-Wall tripwire

---

## Cross-references

- `.planning/research/STACK.md` — source for engine / tooling / pipeline skills
- `.planning/research/ARCHITECTURE.md` — source for architecture / dialogue / save skills
- `.planning/research/PITFALLS.md` — Pitfall on capability-gap underestimation
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-16`
- `15-risk-register.md` R-05 (Phase 3 learning curve), R-06 (Phase 6 art pipeline)
- `17-tools-pipeline-ratification.md` — locked stack tools that frame skill list
- `28-greenlight.md` — capability commitment at greenlight
