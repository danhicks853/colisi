---
deliverable: 17
pack: risk-capability
title: Tools / Pipeline Ratification
author: Claude (synthesis from research/STACK.md); Daniel (sign-off)
ai_role: synthesis-allowed (Phase-1 ratification of locked stack from STACK.md)
depends_on:
  - .planning/research/STACK.md
decisions_referenced:
  - D-SCOPE-17
  - D-SCOPE-25
downstream_consumers:
  - Phase 2 INFRA-01..11 (LFS / .gitignore / conventions setup uses these locks)
  - Phase 3+ implementation plans (engine + language + addons locked here)
  - 28-greenlight.md (Daniel signs ratification at greenlight)
  - SCOPE.md (any displacement of a locked tool requires SCOPE.md entry per "buys-its-slot" rule)
---

# Tools / Pipeline Ratification — Colisi

> Per `D-SCOPE-17` + `D-SCOPE-25`: synthesizes `research/STACK.md` Executive Recommendation into the Phase-1-locked tools doc. **Locked Phase 1.** No re-litigation in Phase 2+ unless a `SCOPE.md` entry justifies displacement per the "buys-its-slot" rule (`PHILOSOPHY.md` §III).
>
> Full source of truth: `research/STACK.md`. This document is the Phase-1 commitment that the stack decisions are no longer open.

---

## Locked engine + language

| Item | Locked decision | Source |
|------|-----------------|--------|
| **Engine** | Godot **4.5.x** (specifically the latest 4.5 patch — currently 4.5.2). Not 4.6, not 4.7 beta. | `research/STACK.md` Executive Recommendation |
| **Language** | **GDScript** for everything. Defer C# and GDExtension until profiling proves a need. | `research/STACK.md` Executive Recommendation |

Rationale: stability over recency for a 4–6 year solo project; latest 4.5 patch has had ~4 maintenance patches and is the more battle-tested branch for the 12–18 months the slice will live in this engine version. GDScript is native, beginner-friendly, and supports web export (which C# does not).

---

## Locked 3D pipeline

| Step | Locked tool / format |
|------|----------------------|
| **3D modeling / rigging / animation** | Blender (latest LTS, 4.x) |
| **Interchange format** | glTF 2.0 (`.glb`) |
| **Animation workflow** | Blender NLA Editor → glTF export with NLA Strips on |
| **Skeleton workflow** | One canonical character skeleton (`hero_skeleton.glb`) with bone map; animations live as separate `.res` Animation resources in `res://animations/<character>/`, organized by Animation Library; same library across NPC instances |
| **What NOT to use** | `.blend` direct import (prototype-only); FBX (only when Mixamo upload requires) |

Source: `research/STACK.md` 3D Art Pipeline section.

---

## Locked addons + libraries

| Addon / Library | Version | Purpose | Pin policy |
|-----------------|---------|---------|-----------|
| **Dialogue Manager (Nathan Hoad)** *(NOT Dialogic 2 — overridden during research per `STATE.md` 2026-05-09)* | latest stable | Branching dialogue + character portraits + variable system | Pin to specific version; only update during quiet weeks |
| **GodotSteam GDExtension** | 4.18.x (Steamworks SDK 1.64), Godot 4.4+ compatible | Steam achievements, cloud saves, rich presence | Install ~6 months pre-Steam-launch (Phase 7+); GDExtension flavor (no engine recompile) |
| **GUT 9.x** | latest tagged release | GDScript unit + integration testing | Used sparingly; tests for save/load, calendar, dialogue conditions, inventory math, crafting recipes |
| **Mixamo Animation Retargeter** (asset-library addon) | latest, Godot 4.x | Batch-retarget Mixamo FBX → Godot animations | Manual bone-map workflow as fallback if addon misbehaves on specific Godot version |
| **Quaternius Universal Animation Library** | current | 120+ humanoid animations, ready to retarget | CC0; pair with Godot's bone map system |
| **butler** (itch.io CLI) | latest | Push builds to itch.io | Manual upload first ~2 years; automate via GitHub Actions later |
| **Save format** | Custom Resource (`.tres` dev / `.res` ship) with versioned schema | Save game serialization | `save_format_version` field from day one; `Godot Safe Resource Loader` if save-sharing ever distributed |

Out of scope (rejected alternatives): Dialogic 2 (Dialogue Manager replaces — see `STATE.md` 2026-05-09 decision), Yarn Spinner on Godot (alpha, Unity-first), inkgd (kept in back pocket for future Ink-narrative pivot, not in slice).

---

## Locked asset baseline

| Source | Content | License | Use case |
|--------|---------|---------|----------|
| **Kenney.nl** | Massive 3D + 2D pack library (low-poly characters, props, nature, UI) | CC0 | First-line placeholder + many shippable props |
| **Quaternius** | Stylized low-poly 3D + Universal Animation Library (120+ humanoid animations) | CC0 | Trees, rocks, foliage, animals, modular dungeon, animations |
| **KayKit** (Kay Lousberg) | Adventurer characters, dungeon kits, nature pack, mini-game kits | CC0 | Higher-quality stylized characters than Kenney; arguably shippable as final art |
| **Mixamo** (Adobe) | Auto-rigged humanoid animations | Free for commercial use, no attribution required (verify ToS at integration time) | Animation library — combine with Mixamo Retargeter addon |
| **Freesound.org** (filtered to `cc0` tag) | SFX | CC0 (when filtered) | Best single source for SFX |
| **OpenGameArt.org CC0 music** | Music | Mixed (use only CC0 tag) | Music supplement; license-check every download |

Out of scope (rejected): paid Synty / Polygon packs at MVP ($30–80 each, mismatched with $100 lifetime budget); CC-BY-SA / GPL / non-commercial-only assets (copyleft contamination); AI-generated assets of any kind (`PHILOSOPHY.md` §V).

Source: `research/STACK.md` Asset Library Recommendations.

---

## Locked version-control + LFS strategy

| Item | Locked decision |
|------|-----------------|
| **Version control** | Git + Git LFS, GitHub private repo (now public per privacy decision) |
| **Repo URL** | `https://github.com/danhicks853/colisi.git` (DONE 2026-05-09 per `INFRA-03`) |
| **LFS configuration** | Set up BEFORE first binary commit per `INFRA-01`; `.gitattributes` tracks `.png`, `.jpg`, `.ogg`, `.wav`, `.mp3`, `.glb`, `.gltf`, `.blend`, `.fbx`, `.ttf`, `.otf`, `.exr`, `.hdr`, binary `.tres` |
| **Quota plan** | Free 1 GB tier; budget $5/mo Data Pack at quota approach; quarterly LFS audit |
| **Backup strategy** | Primary: GitHub. Secondary: documented local cloud-sync of working directory. Quarterly: tarball push to personal cloud drive. Restore tested at least once per `INFRA-04`. |

Source: `research/STACK.md` Version Control + Git LFS Strategy.

---

## Locked editor configuration

| Tool | Role | Notes |
|------|------|-------|
| **Godot built-in editor** | Primary IDE | Scene graph, animation, shader, debugger, profiler — all native |
| **VS Code + godot-tools extension** | Secondary IDE | Long script files (>500 lines), heavy refactors, Git diff UI, debugging with conditional breakpoints |
| **Blender** | 3D content authoring | One-window-per-window with Godot |
| **GIMP or Krita** | 2D textures, UI assets | Pick one and stick with it |
| **Bosca Ceoil Blue** | Placeholder + chiptune music | Fast 16-bar loops |
| **LMMS** (free) **or REAPER** (trial → $60 discounted) | Final-track music DAW | LMMS if strictly $0; REAPER trial for slice-music pass |
| **Audacity** | SFX editing, audio cleanup | Trim, normalize, OGG/WAV export |

Source: `research/STACK.md` Development Tools.

---

## Locked localization strategy

| Phase | Format | Tooling |
|-------|--------|---------|
| **Pre-slice (now → year 1)** | CSV (`translations.csv` in `res://`) | Godot auto-imports per-locale `.translation` resources; `tr("KEY_NAME")` everywhere |
| **Vertical slice ship** | English-only is fine | All user-visible strings already in `tr()` calls |
| **Pre-full-launch** | gettext PO files | Industry-standard translator tooling (SDL Trados, memoQ, Phrase, Crowdin); supports plurals via `tr_n()` |

Source: `research/STACK.md` Localization section. Key naming convention: `DOMAIN_SUBJECT_DETAIL` (e.g., `DIALOG_GIFT_RECEIVED`).

---

## Locked testing approach

| Test target | Why test it |
|-------------|-------------|
| Save / load round-trip | Catches save schema regressions immediately |
| Calendar / time logic | Day-rollover, season transitions, scheduled events firing on right day |
| Dialogue conditional evaluation | NPC says line Y when `relationship_score >= Z and quest_flag.delivered == true` |
| Inventory math | Stack splits, max-stack edges, currency overflow |
| Crafting recipes | Input → output correctness, missing-ingredient rejection |
| Relationship state transitions | Gift → relationship_score change, threshold crossings, milestone unlocks |

**Don't test:** visual scene layout, animation playback, shader output, UI exact layout.

Cadence: dozens of tests, not hundreds. Run GUT before every commit that touches a tested system.

Source: `research/STACK.md` Testing Approach.

---

## Re-litigation policy

**LOCKED Phase 1. No re-litigation in Phase 2+ unless a `SCOPE.md` entry justifies displacement per the "buys-its-slot" rule (`PHILOSOPHY.md` §III).**

Phase-boundary upgrades only. Mid-phase Godot version bumps are forbidden per `PHILOSOPHY.md` §III architecture guardrail (`research/STACK.md` Stack Patterns by Variant: *"Mid-project engine upgrades to a new minor (4.5 → 4.6) during slice work"* — listed under "Avoid").

Re-evaluation triggers:
- Engine version: re-evaluate at the 12-month mark (Phase 3 → Phase 4 boundary). Move to 4.6.x only if 4.6 has had ≥3 maintenance patches and a clear reason exists.
- Dialogue tooling: re-evaluate at slice retrospective (end of Phase 7) if Dialogue Manager has buckled under branching complexity (unlikely for cozy game).
- Asset packs: re-evaluate post-wishlist-revenue (Phase 8+) when paid packs become budget-feasible.

---

## Daniel signature line

**Tools / Pipeline Ratification accepted by:** Daniel Hicks
**Date:** {YYYY-MM-DD — Daniel signs at end of plan 01-02}
**Notes:** {Daniel may flag any item still feeling unresolved at ratification}

---

## Cross-references

- `research/STACK.md` — full source of truth (this doc is a ratification)
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-17`, `D-SCOPE-25`
- `STATE.md` decisions log 2026-05-09 — Dialogue Manager override of Dialogic 2
- `25-stack-ratification.md` — sister ratification doc (architecture-side)
- `26-architecture-ratification.md` — locked architecture
- `28-greenlight.md` — Daniel signs ratification at greenlight
- `INFRA-01..11` (Phase 2) — implementations of these locked decisions
