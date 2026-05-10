---
deliverable: 26
pack: decision-lock
title: Architecture Ratification
author: Claude (synthesis from research/ARCHITECTURE.md + CONTEXT.md sprite-premise re-interpretations); Daniel (sign-off + REQUIREMENTS.md amendment authoring)
ai_role: synthesis-allowed (factual extracts of REQ-IDs and locked architecture from research)
depends_on:
  - .planning/research/ARCHITECTURE.md
  - .planning/phases/01-foundations-vision-lock/01-CONTEXT.md
  - .planning/REQUIREMENTS.md
decisions_referenced:
  - D-SCOPE-26
  - D-VISION-01
  - D-VISION-02
  - D-VISION-03
  - D-VISION-04
  - D-VISION-07
  - D-VISION-08
downstream_consumers:
  - Phase 3+ implementation plans (architecture locked here)
  - REQUIREMENTS.md interpretation amendments (logged at Phase 1 → Phase 2 transition per CONTEXT.md)
  - 28-greenlight.md (Daniel signs ratification at greenlight)
---

# Architecture Ratification — Colisi

> Per `D-SCOPE-26`: ratifies `research/ARCHITECTURE.md` as the locked v1 architecture. Documents the premise-driven re-interpretations (sprite movement model, HOME/CRAFT/COMP shifts) per `D-VISION-08` as REQUIREMENTS.md interpretation amendments. **LOCKED Phase 1.**

---

## Locked architecture reference

Full source of truth: `research/ARCHITECTURE.md`.

Architectural pillars locked from `research/ARCHITECTURE.md`:

- **Five autoloads** (EventBus, GameState, SaveManager, TimeService, Settings) plus DialogueManager (addon-provided)
- **Composition over inheritance** (Player and NPC both extend `CharacterBody3D` directly; shared behavior in components)
- **Multi-axis relationships** (trust / intimacy / respect / familiarity), NOT single-integer hearts (`NPC-03`)
- **State-flag loose branching** (Inkle "variables, not branches"), NOT branching trees (`NARR-01`, `NARR-02`)
- **Action-driven time** (per `D-TIME-01..05` and `24-time-model-lock.md`)
- **Custom Resource saves** with versioned schema from day one (`SAVE-04`)
- **All player-visible strings via `tr()`** from day one (`UI-08`, `LOC-01..03`)
- **Mutation discipline:** `GameState` mutations only via methods that emit `EventBus` signals (`PHILOSOPHY.md` §III architecture guardrail)
- **Wrapped third-party addons** (`DialogueService` wraps `DialogueManager`, `SteamService` wraps `GodotSteam`, etc.)

---

## Sprite-premise interpretation amendments

> Per `D-VISION-08`: REQUIREMENTS.md is **not cut**, but several REQs **re-interpret** under the sprite premise. These get logged as **interpretation amendments** (not removals) at the Phase 1 → Phase 2 transition. The interpretations below are factual extracts of the `01-CONTEXT.md` `<specifics>` lines 269..278; Daniel reviews and signs.

| REQ-ID | Sprite-premise interpretation (cited from `01-CONTEXT.md` `<specifics>`) |
|--------|--------------------------------------------------------------------------|
| **HOME-01** | Sprite likely has a sanctum (tree, shrine, hearth) AND/OR helps villagers decorate; villager-home aesthetic feeds compatibility model. Direction TBD in World Bible (`12-world-bible-v0.1.md` §8 open question). |
| **HOME-02** | Sprite catalyzes villager decoration choices; placement/rotate/move/remove operates on sprite-sanctum AND/OR villager-home. |
| **HOME-03** | 50+ furniture/decoration items split between sprite-sanctum and villager-homes per direction TBD in World Bible. |
| **HOME-04** | NPCs notice and comment on sprite-sanctum AND/OR each other's homes when visiting; gossip layer (`NPC-09`) carries observations. |
| **HOME-05** | Sprite-sanctum + villager-home decoration state both fully save/restore. |
| **CRAFT-01** | Sprite catalyzes villager gathering; gathered materials are magic-imbued essence the sprite shares. Player verb may differ from "harvest" (per `01-CONTEXT.md` `<specifics>` placeholder verbs: redirect, whisper, refresh, bloom — Daniel authors actual verbs). |
| **CRAFT-02** | Sprite catalyzes villager crafting; recipes are co-developed; crafting station is in villager home. |
| **CRAFT-03** | Recipes unlock through sprite-villager relationship arcs, not skill trees. |
| **CRAFT-04** | NarrativeMeta on items remains; first-collected dialogue and lore entries via sprite observation. |
| **CRAFT-05** | Crafted items can be co-gifted (sprite + villager A → villager B) to trigger NPC reactions; gifting reactions feed match-puzzle layer. |
| **CRAFT-06** | Sprite carries gathered essence; inventory applies to sprite, not villager. |
| **CRAFT-07** | No item degradation; preserved unchanged. |
| **COMP-01** | Sprite invites a villager to drift along; companion-presence reveals different cues for matchmaking. Companion mechanic now serves the match-puzzle directly. |
| **COMP-02** | Companion provides reactive contextual dialogue while accompanying sprite (location-aware, activity-aware). |
| **COMP-03** | Companion's accompaniment evolves their multi-axis relationship and arc state; outings advance match-observation. |
| **COMP-04** | Companion never permanently leaves or dies as fail-state. Preserved unchanged from baseline COMP-04. |
| **CTRL-01** | Third-person camera retained; sprite **drifts/floats** rather than walks. Camera and traversal need re-think (Phase 3 sketches; movement spec at `01-CONTEXT.md` deferred list) but req still satisfied. |
| **NPC-09** | Promoted from atmosphere to **central puzzle-information channel** — gossip carries match status; love triangles, jealousy gradients become first-class signal. |
| **NPC-06** | "At least one non-human companion" — sprite IS non-human player; non-human companion (in NPC-06 sense) may mean a non-human NPC like a talking-animal villager. Resolved during World Bible authoring (`12-world-bible-v0.1.md` §6 cultures + §7.3 animism). |
| **ROM-01, ROM-02** *(currently v2)* | Reframed: in v1, romance is **between villagers** per `D-VISION-07`; player romance via sprite is v2-or-never. |

---

## REQUIREMENTS.md amendment notice

Per `01-CONTEXT.md` `<deferred>` list: HOME / CRAFT / COMP REQUIREMENTS.md interpretation amendments are **deferred to Phase 1 → Phase 2 transition**. This document captures the direction; the REQUIREMENTS.md edits land at the transition (not in Phase 1) so Daniel can sign each amendment after final World Bible authoring informs the wording.

Phase 1 → Phase 2 transition checklist will include:
- [ ] For each REQ-ID listed above, append an "interpretation amendment" note to its REQUIREMENTS.md entry (not a removal; the original REQ wording is preserved with the amendment as a footnote)
- [ ] Update `STATE.md` decisions log with the amendment date
- [ ] Cross-link amendments to this doc + `01-CONTEXT.md` D-VISION-08

---

## Daniel signature line

**Architecture Ratification accepted by:** Daniel Hicks
**Date:** {YYYY-MM-DD — Daniel signs at plan 01-02 close}
**Sprite-premise REQ amendments authored:** {YYYY-MM-DD — at Phase 1 → Phase 2 transition}

---

## Cross-references

- `research/ARCHITECTURE.md` — full source of truth
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-26`, `D-VISION-01..08`, `<specifics>` lines 269..278
- `.planning/REQUIREMENTS.md` — REQ-IDs amended at Phase 1 → Phase 2 transition
- `25-stack-ratification.md` — sister stack ratification doc
- `24-time-model-lock.md` — time model is a load-bearing architecture decision
- `12-world-bible-v0.1.md` §8 — open design questions resolve sprite-sanctum direction
- `07-pillar-mechanic-matrix.md` — REQ scoring under sprite premise
- `28-greenlight.md` — Daniel signs at greenlight
