---
purpose: Daniel-authored Phase 1 deliverable workspace, organized by end-product role
canonical_source_of_truth: .planning/phases/01-foundations-vision-lock/deliverables/
integration_protocol: Claude migrates each Daniel-authored draft into its canonical path on commit; this directory preserves authorship history
ai_policy: PHILOSOPHY.md §V — Daniel authors all in-world content; Claude does not draft prose, names, lore, palettes, voice samples, or marketing copy
---

# Phase 1 Authoring Workspace

This is your focused authoring surface. Each `.md` file under the numbered subfolders below is **empty of prose** but keeps the section headers from its canonical scaffold so you can write straight into the structure.

When you finish a doc:
1. Tell me it's done (or paste your draft into the file).
2. I run a critique pass on request (anchor consistency, length, framing).
3. I migrate the content into the canonical `.planning/phases/01-foundations-vision-lock/deliverables/{pack}/{file}` path with proper frontmatter, decision-ID cross-references, and downstream-consumer wiring.
4. I commit with `docs(01-XX): author {doc}` and we advance to the next.

**Source of truth** for downstream Phase 1 plans is the `deliverables/{pack}/` tree, not this `authoring/` tree. This directory is your draft surface; the deliverables tree is the canonical artifact location.

---

## End-product organization

| # | Folder | What it becomes in the project | Docs | Status |
|---|---|---|---|---|
| 1 | `1-vision-bible/` | The design north star — every other Phase 1 doc anchors here | 4 | author from scratch |
| 2 | `2-game-design-doc/` | The GDD core — what players DO; drives Phase 3+ implementation | 4 | author from scratch |
| 3 | `3-slice-pitch/` | What the slice MUST contain; trailer + Steam page source material | 3 | author from scratch |
| 4 | `4-world-bible/` | The creative bible — names, lore, magic, calendar, cultures; long-lived | 1 | author from scratch (deepest creative work) |
| 5 | `5-style-guide/` | Art / audio / narrative voice / UI tone bible | 2 | author from scratch (mood deck = curation) |
| 6 | `6-market-validation/` | MKTG-06 verdict; the market-evidence record | 3 | author + Daniel-verifies-every-classification |
| 7 | `7-production-tripwires/` | Specifics on tripwires/cadence Claude scaffolded — your concrete thresholds | 3 | author specifics into pre-built scaffolds |
| 8 | `8-playtest-log/` | Persona-zero (Dawn) sessions — HEALTH-05 ritual log | 2 | log during the session |
| 9 | `9-greenlight-gate/` | Phase 1 gate sign-off | 1 | sign at end of phase |
| **Total** | | | **23** | |

---

## Recommended authoring order

Because docs anchor to each other, write in this order. Don't strictly serialize — pillars + core fantasy + anti-positioning can run in parallel once the pitch lands. But never start group N until group N-1 is anchor-stable.

```
Group 1 — North star            [vision-bible/01-pitch.md]
                                ↓
Group 2 — Vision pack rest      [pillars, core-fantasy, anti-positioning] (parallel)
                                ↓
   ╳ Persona-zero session 1     [playtest-log/session-1-vision-pack-reaction.md]
                                ↓
Group 3 — Game design doc       [core-loops, player-journey, pillar-mechanic-matrix, failure-modes] (sequential within group)
                                ↓
Group 4 — Slice pitch           [slice-walkthrough, wow-beats, elevator-demo-30s] (sequential)
                                ↓
Group 5 — World bible           [world-bible.md] (deepest single-doc work; expect days, not hours)
                                ↓
Group 6 — Style guide           [mood-reference-deck, style-guide] (mood deck first; style guide cites it)
                                ↓
Group 7 — Production tripwires  [year3wall-thresholds, why-play-hour-200, time-model-triggers] (parallel; depend on prior groups)
                                ↓
Group 8 — Market validation     [game-list, survey-questions, classifications, verdict]
                                (run mostly in parallel with groups 3-7; gates Phase 2)
                                ↓
   ╳ Persona-zero session 2     [playtest-log/session-2-bi-weekly-followup.md]
                                ↓
Group 9 — Greenlight            [phase-1-greenlight.md] (final)
```

---

## Sign-off-only docs (NOT in this authoring tree)

These already have full bodies populated by Claude (synthesis-allowed per AI policy). You **review-and-edit-in-place** at their canonical paths. No empty doc needed:

| Canonical path | Your action |
|---|---|
| `deliverables/risk-capability-pack/15-risk-register.md` | Score subjective Likelihood / Impact / Current Mitigation columns |
| `deliverables/risk-capability-pack/16-capability-gap-matrix.md` | Score Current Proficiency (1–5) for each row |
| `deliverables/risk-capability-pack/17-tools-pipeline-ratification.md` | Sign-off line |
| `deliverables/process-pack/20-sustainable-pace-cadence.md` | Sign-off + approve REQUIREMENTS.md HEALTH-04 amendment |
| `deliverables/process-pack/22-personazero-playtest-ritual.md` | Sign-off line |
| `deliverables/decision-lock-pack/25-stack-ratification.md` | Sign-off line |
| `deliverables/decision-lock-pack/26-architecture-ratification.md` | Sign-off line |
| `.planning/SCOPE.md`, `.planning/slice-debt.md` | Both already populated by 01-00; review structure |

---

## What I (Claude) can do legitimately on each authoring task

- **Brainstorm-on-request:** "give me 10 framing options for X" — you pick or none-of-the-above. Never unsolicited.
- **Critique-on-request:** anchor consistency vs locked decisions, length cap, framing rules (no "Stardew Killer"), persona-zero resonance, cross-reference completeness. I name what's off; you decide.
- **Citation extraction:** pull verbatim quotes from `research/PERSONA.md`, `research/SUMMARY.md`, etc. so you don't context-switch.
- **Synthesis from already-locked decisions:** populate cross-reference sections with decision-ID lists, populate file frontmatter, wire downstream-consumer chains.
- **Structure-only assistance:** help you outline a section if you're stuck on form (not content).

## What I will refuse, even when asked, even in auto mode, even when you sound tired

- Drafting any prose that ships in the pitch / pillars / core fantasy / world bible / scenarios / wow beats / elevator demo / style guide voice / mood deck commentary / greenlight statement.
- Suggesting names — for the sprite, villagers, places, magic system, seasons, items, mechanics, anything in-world.
- Generating mood/reference image descriptions or art-direction prose.
- Paraphrasing Dawn's persona-zero quotes from a session.
- Writing verdict prose for MKTG-06 (Confirmed | Refined | Rejected language is yours; I can pre-fill the methodology / data sections).
- Authoring the greenlight commitment language.

These rules exist for the moments when you're tired or rushed. I will hold the line.

---

## File-naming convention inside each folder

Filenames preserve the canonical 01–28 numbering (so `02-pillars.md` here → `02-pillars-of-play.md` canonical) for clear cross-reference between the two trees.

Playtest-log filenames match the pattern in `process-pack/22-personazero-playtest-ritual.md`: `{YYYY-MM-DD}-{session-tag}.md`. The two empty templates here use generic names; rename to the actual session date when you log.

---

## When you sit down to write

Open the file. Read its frontmatter (anchor decisions, length target). Read the section headers. Write into them in your voice. When done, ping me. I migrate, commit, and we advance.

The sequence isn't a calendar. It's a dependency graph. Take as long as each doc honestly needs.
