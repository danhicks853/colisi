---
title: MKTG-06 Comparable Cozy Life Sim Game List
purpose: Hybrid game list (selection rule + Daniel curation) for D-MKTG-02 Steam review mining
author: Claude (Steam tag + review-count extraction from training knowledge); Daniel (curation decisions)
ai_role: synthesis-allowed (factual data work on public Steam data; Daniel curates final list)
date_compiled: 2026-05-10
caveats:
  - Training data through January 2026; current Steam review counts may differ
  - Daniel should spot-verify review counts on actual Steam pages before final mining (Task 2 Step A) — numbers below are approximate from training
  - Selection rule applied: Steam tags "Cozy" + "Life Sim" (or close adjacency) + sorted by review count
---

# MKTG-06 Game List — Hybrid Selection

## Selection rule applied

**Query:** Steam tag intersection of "Cozy" + "Life Sim" (and close adjacencies — "Farming Sim," "Casual," "Wholesome").

**Sort:** By Steam review count descending (proxy for community engagement + comment volume).

**Filter:** Exclude pure visual novels, pure city-builders, pure roguelikes. Include narrative cozy + life sim hybrids (Spiritfarer, Coffee Talk) per their cozy-genre placement.

**Date:** Data based on training knowledge through January 2026; Daniel verifies current numbers at mining time.

---

## Candidate game list (Claude-extracted; Daniel curates)

| Game | Steam appid | Tag set | Review count (approx, training) | Inclusion rationale |
|---|---|---|---|---|
| **Stardew Valley** (ConcernedApe) | 413150 | Cozy / Farming Sim / RPG | ~700,000+ | **Must-have per D-MKTG-01** + persona-zero anchor + direct comparable |
| **Spiritfarer** (Thunder Lotus) | 972660 | Cozy / Narrative / Management | ~30,000+ | **Must-have per D-MKTG-01** + narrative-cozy hybrid + persona-zero bounced (cliff) |
| **Coral Island** (Stairway Games) | 1158160 | Cozy / Farming Sim / Life Sim | ~10,000+ | **Must-have per D-MKTG-01** + Stardew successor + persona-zero played |
| **Cozy Grove** (Spry Fox) | 1458100 | Cozy / Life Sim / Daily | ~10,000+ | Rule-based; daily-cadence cozy; experienced studio comparable |
| **Coffee Talk** (Toge Productions) | 914800 | Cozy / VN-adjacent / Slice of Life | ~10,000+ | Rule-based; narrative-cozy hybrid; persona-zero bounced (VN-format) |
| **Wylde Flowers** | 1612710 | Cozy / Witch / Farming Sim | ~5,000+ | Rule-based; witch theme; cozy + magical realism comparable |
| **My Time at Portia** (Pathea Games) | 666140 | Life Sim / Crafting / RPG | ~30,000+ | Rule-based; cozy-leaning life sim with crafting |
| **My Time at Sandrock** (Pathea Games) | 1084600 | Life Sim / Crafting / RPG | ~15,000+ | Rule-based; Portia successor; cozy-leaning |
| **Hokko Life** (Wonderscope) | 824000 | Cozy / Life Sim / Solo Dev | ~3,000+ | Rule-based; solo-dev cozy comparable |
| **Sun Haven** (Pixel Sprout Studios) | 1432860 | Cozy / Farming Sim / RPG | ~15,000+ | Rule-based; cozy farming with fantasy elements |
| **A Short Hike** (adamgryu) | 1055540 | Cozy / Adventure / Wholesome | ~30,000+ | Rule-based; cozy archetype; solo-dev success |
| **Disney Dreamlight Valley** (Gameloft) | 1401590 | Cozy / Life Sim / IP | ~30,000+ | Rule-based; cozy-collect; IP-driven (different audience profile but comparable mechanics) |
| **Palia** (Singularity 6) | 2707930 | Cozy / Life Sim / MMO | ~5,000+ | **Persona-zero bounced** (required multiplayer); useful negative-comparable |
| **Story of Seasons: Pioneers of Olive Town** | 1378760 | Cozy / Farming Sim | ~3,000+ | Rule-based; long-running franchise; cozy farming |
| **Rune Factory 5** | 1599420 | Cozy / Farming Sim / RPG | ~3,000+ | Rule-based; cozy-action hybrid; long-running franchise |
| **Fields of Mistria** (NPC Studio) | 2142790 | Cozy / Farming Sim | ~5,000+ (newer; numbers growing) | Rule-based; recent cozy farming; pixel art Stardew-adjacent |
| **Roots of Pacha** (Soda Den) | 1564050 | Cozy / Farming Sim / Prehistoric | ~3,000+ | Rule-based; cozy with distinctive setting |
| **Travellers Rest** (Isolated Games) | 1139980 | Cozy / Tavern Management | ~5,000+ | Rule-based; cozy management-sim |
| **Garden Paws** (Bitten Toast Games) | 840010 | Cozy / Farming Sim / Animal | ~3,000+ | Rule-based; cozy with animal protagonist |
| **Spirittea** (Cheesemaster Games) | 1840400 | Cozy / Life Sim / Folklore | ~3,000+ | Rule-based; cozy + folklore/animism (magical-realism adjacent to Colisi) |

---

## Daniel curation pass

> **Curation discipline (per `01-RESEARCH.md` Pitfall 4):** Don't drift toward "games my persona would like." Stick to selection rule. Drops + adds logged with rationale.

**Daniel keeps / drops / adds:**

| Action | Game | Rationale |
|---|---|---|
| **KEEP (must-have per D-MKTG-01)** | Stardew Valley | Persona-zero anchor; direct genre comparable; ~700k reviews provides large complaint corpus |
| **KEEP (must-have per D-MKTG-01)** | Spiritfarer | Persona-zero bounced; narrative-cozy hybrid; endgame-cliff complaint signal |
| **KEEP (must-have per D-MKTG-01)** | Coral Island | Stardew successor; persona-zero played; recent comparable |
| {Daniel adds keep/drop decisions here per game} | | |

---

## Final list (Daniel finalizes after curation pass)

> **Per acceptance criteria:** 10-20 games minimum. Persona-zero must-haves (Stardew + Spiritfarer + Coral Island) preserved. Each row has inclusion rationale.

{Daniel finalizes the list after running through the candidate table above. Default: 20 candidates above is upper bound; Daniel can drop 0-10 of the non-must-haves. Recommended scope: 12-15 games balances research scope vs review-mining workload.}

---

## Cross-references

- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` D-MKTG-01..06
- `.planning/phases/01-foundations-vision-lock/01-RESEARCH.md` Pitfall 4 (curation drift)
- `.planning/research/PERSONA.md` Dawn-corpus bounced games (for must-have rationale)
- `27-MARKET-EVIDENCE.md` final game list table imports from here
- `mktg-06-survey-questions.md` survey questions reference these games
