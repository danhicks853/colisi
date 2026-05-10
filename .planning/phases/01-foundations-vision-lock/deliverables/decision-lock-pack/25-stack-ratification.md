---
deliverable: 25
pack: decision-lock
title: Stack Ratification
author: Claude (synthesis from research/STACK.md); Daniel (sign-off)
ai_role: synthesis-allowed (Phase-1 lock of stack from STACK.md)
depends_on:
  - .planning/research/STACK.md
  - 17-tools-pipeline-ratification.md
decisions_referenced:
  - D-SCOPE-25
downstream_consumers:
  - Phase 2+ implementation plans (stack decisions locked here)
  - 28-greenlight.md (Daniel signs ratification at greenlight)
  - SCOPE.md (any displacement requires SCOPE.md entry)
---

# Stack Ratification — Colisi

> Per `D-SCOPE-25`: ratifies `research/STACK.md` decisions as the locked v1 stack. **LOCKED Phase 1.** Phase 2+ may not re-open stack decisions without a `SCOPE.md` entry justifying displacement per the "buys-its-slot" rule (`PHILOSOPHY.md` §III).
>
> Companion document: `17-tools-pipeline-ratification.md` (full tools/pipeline detail). This document is the **executive lock**; full detail lives in `research/STACK.md` and `17-tools-pipeline-ratification.md`.

---

## Locked stack reference

Full source of truth: `research/STACK.md`.

---

## Re-litigation policy

**LOCKED Phase 1. Phase 2+ may not re-open stack decisions without a `SCOPE.md` entry justifying displacement per the "buys-its-slot" rule.**

Phase-boundary upgrades only (`PHILOSOPHY.md` §III architecture guardrail: *"Never upgrade Godot versions mid-phase"*). Re-evaluation triggers:
- Engine version: re-evaluate at the 12-month mark (Phase 3 → Phase 4 boundary)
- Dialogue tooling: re-evaluate at slice retrospective (end of Phase 7)
- Asset pack purchases: re-evaluate post-wishlist-revenue (Phase 8+)

---

## Specific locked items

| Locked item | Decision | Source citation |
|-------------|----------|-----------------|
| **Engine** | Godot 4.5.x stable (currently 4.5.2) | `research/STACK.md` Executive Recommendation |
| **Language** | GDScript for everything | `research/STACK.md` Executive Recommendation |
| **3D pipeline** | Blender LTS → glTF 2.0 (`.glb`) → Godot | `research/STACK.md` 3D Art Pipeline |
| **Animation workflow** | NLA Editor + Animation Library pattern + bone maps | `research/STACK.md` 3D Art Pipeline |
| **Dialogue tooling** | Nathan Hoad's Dialogue Manager *(NOT Dialogic 2 — overridden 2026-05-09)* | `STATE.md` decisions log 2026-05-09 |
| **Save format** | Custom Resource (`.tres` dev / `.res` ship) with versioned schema | `research/STACK.md` Save System Pattern |
| **Localization** | CSV during slice → gettext PO before localized release | `research/STACK.md` Localization |
| **Music tooling** | Bosca Ceoil Blue (placeholder) → LMMS or REAPER trial (final) | `research/STACK.md` Audio |
| **Audio editing** | Audacity | `research/STACK.md` Audio |
| **Version control** | Git + Git LFS, GitHub repo (`https://github.com/danhicks853/colisi.git`) | `research/STACK.md` Version Control |
| **Steam integration** | GodotSteam GDExtension (deferred to Phase 7+) | `research/STACK.md` Build & Distribution |
| **itch.io publishing** | butler CLI | `research/STACK.md` Build & Distribution |
| **Testing** | GUT 9.x (used sparingly; save/load + calendar + dialogue conditions + inventory math) | `research/STACK.md` Testing Approach |
| **Asset baseline (placeholder + slice)** | Kenney + Quaternius + KayKit (CC0); Mixamo for animations; Freesound for SFX | `research/STACK.md` Asset Library Recommendations |

---

## Daniel signature line

**Stack Ratification accepted by:** Daniel Hicks
**Date:** 2026-05-10

**Daniel signature:** 2026-05-10 — Stack Ratification locked Phase 1; no re-litigation without SCOPE.md entry justifying displacement.

---

## Cross-references

- `research/STACK.md` — full source of truth
- `17-tools-pipeline-ratification.md` — full tools/pipeline ratification doc (companion)
- `26-architecture-ratification.md` — sister architecture ratification
- `STATE.md` decisions log 2026-05-09 — Dialogue Manager override
- `28-greenlight.md` — Daniel signs at greenlight
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-25`
