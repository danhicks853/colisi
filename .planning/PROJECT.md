# Colisi

> **Project codename:** Colisi (locked 2026-05-09).
> **Pronunciation:** *COH-LIE-SIGH* (/koʊˈlaɪsaɪ/)
> **Etymology:** Initialism of **CO**zy **LI**fe **SI**m. Used in repo, planning docs, devlog handles, and internal communication. The shipped *game title* may evolve as the world and characters crystallize; final game title decision deadline is the Steam page launch in Phase 7.

## What This Is

Colisi is a 3D narrative-driven cozy life sim aimed at cozy-genre players who report friction with time-pressure systems, difficulty-curve walls, and "story ends → game ends" content cliffs — friction that is widely documented across the cozy community (Stardew forums, the "14-Heart-Events-For-All" mod, Kitfox/Tanya X. Short's "Designing for Coziness," "best cozy games without time limits" lists, industry post-mortems). *Whether this constitutes a meaningfully "underserved demographic" is a market hypothesis that needs validation before the Steam page launches in Phase 8 — see Phase 2 demographic-validation work.* The game crosses Baldur's Gate 3's companion-driven branching narrative with The Sims' player-expression and life-control loops, wrapped in a whimsical fantasy / magical realism aesthetic. Setting includes spirits, witches, talking animals, and other gentle-magic elements.

The core fantasy, in the lead persona's own words: **"Talking to the people and finding where I fit in."**

## Core Value

**Characters and relationships that keep evolving, in a world that never punishes the player.** If everything else fails, this one thing must work: the people you meet feel real, your choices ripple through their lives in lasting ways, and you can play forever without time pressure or a difficulty wall ever closing the door on you.

## Requirements

### Validated

(None yet — ship to validate)

### Active

> All Active requirements are hypotheses until shipped and validated. Detailed REQ-IDs live in REQUIREMENTS.md.

**Player experience pillars:**
- [ ] Player can build deep, evolving relationships with NPCs that change over time, not just "level up"
- [ ] Player choices and decisions persist and visibly impact NPCs' lives and the world
- [ ] Player can craft items, with crafting tied to narrative (the things you collect have story attached)
- [ ] Player can collect / explore the world to gather materials with narrative attachment
- [ ] Player progresses gradually with no late-game difficulty wall — power curve plateaus, never spikes
- [ ] Player faces no real-time-pressure mechanics — no missable windows, no punishing day clocks
- [ ] Puzzles (when present) are solvable through clear telegraphing — answers discoverable, not ambiguous
- [ ] Game continues to be meaningful after main story arcs resolve (no "story over → nothing to do")
- [ ] Player can express taste / customize / control their living space and life
- [ ] Single-player core (no required multiplayer)
- [ ] Bittersweet endings OK; tragic-no-matter-what endings excluded

**Production and delivery pillars:**
- [ ] Built in Godot 4 (free, MIT license, no royalties)
- [ ] Art produced primarily in Blender (free) with a sustainable solo-dev pipeline
- [ ] Releases on Steam ($100 one-time fee) and itch.io (free)
- [ ] Vertical slice (1 hour of polished, representative gameplay) shipped as wishlist driver before full content production scales
- [ ] Full game architecture and content systems designed to scale to 30+ hours from day one — slice content scopes down, slice systems do not

**Player UX pillars:**
- [ ] Controls are simple and intuitive — beginner-friendly, no complex chord schemes, no hidden mechanics
- [ ] Game does not introduce new core systems mid-game without re-tutorializing
- [ ] No required prior gaming literacy

### Out of Scope

- **Real-time-pressure mechanics (day clocks, missable windows, punishing time gates)** — Hard "no" from persona research; even her #1 game (Stardew @ 1000+ hrs) was named for this as the worst part. Designing without it is the core differentiator.
- **Endgame difficulty curves / stat-check walls** — Persona explicitly bounced off BG3, Fallout, Hogwarts Legacy, and Spiritfarer for this. Cozy means accessible all the way through.
- **Visual novel format** — Persona quit Coffee Talk specifically for this. We are 3D and embodied.
- **Required multiplayer or co-op** — Persona quit Palia for requiring this. Single-player is the design center.
- **Forced tragic endings** — Persona explicitly cited The Stillness of the Wind as a reason to quit early. Bittersweet is allowed; "no matter what you do, it ends in misery" is excluded.
- **Restart-from-beginning CYOA mechanics** — Beacon Pines bounce. Branching choices must persist forward, not require restarting.
- **Console launch in v1** — Devkit cost, certification overhead, and publisher requirements push this to post-launch as a stretch goal.
- **Mobile port in v1** — Different design constraints; defer to post-launch.
- **Photorealistic / high-fidelity 3D art** — Solo dev cannot scale this. Stylized art direction is required, both for production budget and brand identity.

## Context

**Persona research foundation:** Lead persona (Daniel's wife) was interviewed against her Steam library — most-played games and finished-end-to-end games — with structured questions about loves and hates per title, plus quit-early-due-to-frustration data. Full corpus saved to `.planning/research/PERSONA.md`.

**What persona-zero is, and isn't, evidence of:**
- ✓ **A design anchor** — turns general cozy-genre patterns into specific design constraints. Cooper's "design for one specific person" principle: better coherence than designing for an abstract demographic.
- ✓ **A renewable feedback loop** — lead persona lives in the household. Most solo devs lack any feedback loop until late playtest. This is a *development* advantage.
- ✓ **An anti-feature commitment device** — "no time pressure" is hard to hold to without a specific bounce reason; persona's quit-reasons make abstractions concrete.
- ✗ **NOT market evidence.** n=1 is not statistical validation. The market thesis (that the friction patterns persona identifies are widely felt enough to support a commercial product) is *separately* supported by external research cited in FEATURES.md and PITFALLS.md (Stardew forum complaints, mod evidence, "cozy without time limits" lists, Kitfox / Tanya X. Short, industry post-mortems). Persona aligns with and adds specificity to that broader corpus but does not replace it.
- ✗ **NOT a competitive moat.** Anyone could replicate this research approach. The execution and craft are the moat, not the persona research.

**Persona's "dream cross" (her words):** *"If I could find a game that was a cross of Baldur's Gate and the Sims, that would be perfect for me."* Translated:
- *From BG3:* companions ("makes me feel less alone"), gradual progression, decisions impact gameplay, branching narrative, party-feeling
- *From Sims:* control, building a life, expressing taste, affecting others' happiness through choices

**The "endgame problem" pattern:** Across nearly every game persona bounced off (Bear & Breakfast, Spirittea, RCT, Sims, Little Witch in the Woods, Paperbark), the failure mode is the same: content runs out, story ends, or progression flatlines, and there's no reason to keep playing. She loves Stardew at 1000+ hours specifically because NPC interactions kept giving her a reason to return. **Solving the endgame problem is therefore the central design challenge.** Likely solution shapes: characters whose dialogue and arcs continue to evolve indefinitely; multiple intertwining narrative threads so when one ends, others continue; player-driven goals (Sims-style) that don't require new authored content to be meaningful; seasonal / event-driven content that creates ongoing rhythms.

**Market hypothesis (NOT yet validated):** Cozy players want Stardew's relationship depth without its time pressure, BG3's companion-driven branching without its combat-skill demands, and The Sims' expression without its content-cliff "then what" problem. Current market hits some of these but not all in one product. *This is a hypothesis backed by qualitative external sources (cozy community complaints, mod evidence, industry essays) and aligned with persona-zero, but it is not yet validated with market evidence (Steam review mining, demographic surveys, sales-data analysis on similar titles). Validation work is required before the Steam page launches — see Phase 2.*

**Technical environment:**
- Godot 4 chosen as engine: free MIT license (no royalties, no Unity-style pricing risk), strong 3D in v4, GDScript is beginner-accessible
- Blender for 3D modeling, rigging, animation (free)
- Solo developer, near-zero prior game dev experience
- Near-zero cash budget (~$100 lifetime expected; primarily the Steam fee)
- Time-rich, money-poor: schedule should optimize for sustainable solo pace, not parallel hires

**Strategic posture:** Architect-for-the-full-game from day one. Vertical slice is a *checkpoint and learning vehicle*, not the endpoint. Slice content scopes down; slice systems and architecture do not. Hacky shortcuts taken just for the slice are a yellow flag and should be surfaced explicitly, not silently accepted.

## Constraints

- **Tech stack**: Godot 4 + GDScript + Blender — Free/MIT, no royalty risk, sustainable solo toolchain.
- **Budget**: ~$100 USD lifetime cash spend (Steam fee dominates) — Daniel is time-rich, money-poor; tooling and asset choices must default to free/CC0/open-source.
- **Team**: Solo developer, beginner — Architecture and tooling decisions must favor approachability and avoid systems that require team-scale workflows. AI tooling (this project) acts as planning and pair-programming partner.
- **Timeline**: Multi-year (4–6 year horizon for full game) — Roadmap must support sustainable pace, vertical slice as 12–18 month checkpoint, not all-or-nothing big-bang release.
- **Scope at v1**: 30+ hour cozy life sim — Ambitious for solo first project; mitigated by vertical-slice-first delivery and ruthless scope discipline at the system-content boundary (cut content count, never cut systems).
- **Art direction**: Stylized only — Solo dev cannot scale photorealistic 3D production; stylization is both budget reality and brand identity.
- **Performance target**: Modest hardware — Cozy demographic skews to laptops, integrated GPUs, and older machines. Optimize for that floor, not high-end PC.
- **Distribution**: Steam + itch.io for v1 — Console / mobile excluded from v1 scope.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Engine: Godot 4 (not Unity, not Unreal) | Free MIT license, no royalty risk, beginner-accessible GDScript, strong 3D in v4, healthy indie ecosystem | — Pending |
| Setting: Whimsical fantasy / magical realism | Distinctive vs cottagecore-saturated cozy market; allows non-human NPCs (spirits, witches, talking animals) which expand narrative possibility | — Pending |
| Audience: Commercial product for cozy-genre players reporting friction with time pressure / difficulty walls / endgame cliffs | Persona zero is the wife (design anchor + feedback loop, not market evidence). The broader market hypothesis that this is a meaningfully underserved demographic is qualitatively supported by external research but NOT yet validated with market evidence (Steam review mining, surveys, sales-data analysis). Phase 2 includes validation work | — Pending |
| Scope: 30+ hour systems-rich game (not small narrative gem) | User chose this explicitly with full awareness of timeline implications; aligned to commercial ambition | — Pending |
| Strategy: Vertical-slice-first, full-game architecture from day one | Lets us validate the loop and build a wishlist before scaling content; avoids throwaway architecture | — Pending |
| No real-time-pressure mechanics (no day clocks, no missable windows) | Hardest-hitting persona dislike, also strongest market differentiator | — Pending |
| No endgame difficulty walls | Persona bounced off 4+ games for this; cozy means accessible all the way through | — Pending |
| Single-player only | Persona quit Palia for requiring multiplayer; multiplayer also adds enormous solo-dev complexity | — Pending |
| Distribution: Steam + itch.io v1; console / mobile deferred | Cost, certification, and design-port complexity push these out of v1 | — Pending |
| Art: Stylized 3D, Blender pipeline | Solo dev budget reality and brand identity | — Pending |
| Project codename: Colisi (2026-05-09) — pronounced COH-LIE-SIGH, initialism of COzy LIfe SIm | Internal-use name for repo, planning, devlog handles. Final shipped game title is TBD by Phase 7 Steam page launch — early enough to commit a name, late enough to defer the final title until world/characters crystallize | — Pending |
| **D-INFRA-art-1: Single repo + Git LFS for everything (2026-05-16, Phase 2)** — Main `colisi` repo holds both code AND DCC source files (.blend, .psd, .kra, music project files, Audacity .aup3, etc.) tracked via Git LFS. Separate `colisi-art-source` repo NOT created at Phase 2; preserved as a future-option. **D-INFRA-art-2:** LFS quota upgrade is reactive (trigger at ~80% of GitHub free tier: 1 GB storage / 1 GB/mo bandwidth; $5/mo Data Pack 50 GB when needed). **D-INFRA-art-3:** Third-tier backup is quarterly tarball to cloud drive (manual; automation deferred Phase 6+). | Simpler workflow for solo dev; one clone, one mental model. Quota cost is manageable ($60-360 over 4-6yr horizon if needed — well inside $100 lifetime budget). Future migration to Option B (separate art-source repo) preserved if LFS quota becomes unsustainable. See `.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md` §"Art-Source Repo Structure" + `BACKUP.md` §"1. The three-tier strategy". | Resolved 2026-05-16 (closes ROADMAP.md Phase 2 criterion 8) |
| **D-INFRA-priv-1: PERSONA.md stays public (2026-05-16, Phase 2)** — PERSONA.md (containing wife Dawn's interview quotes) stays in the public repo at `.planning/research/PERSONA.md`. Dawn's consent: discussed informally; no separate consent doc. **D-INFRA-priv-2:** Reversible at known cost (move to `.local/` ignored path; optional BFG history scrub for full removal). No proactive revisit checkpoint; decision stands until either Daniel or Dawn raises it. | AI-DISCLOSURE.md open-transparency ethos extends to research artifacts; "Daniel's wife" subject is already public via PROJECT.md so anonymity isn't achievable anyway; maximum research credibility for downstream community engagement. See `.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md` §"Privacy & Public Repo". | Resolved 2026-05-16 (closes ROADMAP.md Phase 2 criterion 11) |
| **D-INFRA-conv-1..4: Godot project conventions locked (2026-05-16, Phase 2)** — Folder structure by-type (11 top-level `res://` folders) + snake_case file naming + scene+script same-folder pairing + per-character + `_shared/` animation library pattern. Documented in `CONVENTIONS.md` BEFORE Phase 3 creates the Godot project. | Locking layout pre-creation prevents retrofit cost. Godot-canonical pattern; mirrors official examples; established cognitive map for the next 4-6 years. See `CONVENTIONS.md` + `.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md` §"CONVENTIONS.md". | Resolved 2026-05-16 |
| **D-INFRA-bkp-1..2: Backup strategy locked (2026-05-16, Phase 2)** — 3-tier: Tier 1 GitHub primary (every commit) + Tier 2 Google Drive cloud-sync (continuous) + Tier 3 quarterly tarball (manual). **D-INFRA-bkp-2:** Phase 2 deliverable includes restore-test executed end-to-end + quarterly retest cadence (next 2026-08-11). | Defense-in-depth across independent failure modes (GitHub outage, account compromise, local hardware death, ransomware). Restore tested 2026-05-16 at `D:\TestRestore\colisi-2026-05-11\` with 4 PASS integrity checks (clean tree + 242 B lfs-test.png + PNG signature + SHA256 bit-identical). See `BACKUP.md` + `.planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md`. | Resolved 2026-05-16 (Tier 1 + Tier 3 procedure DONE; **Tier 2 Drive client install + OAuth + folder-add carry-forward — orchestrator winget install COMPLETE 2026-05-16; Daniel GUI OAuth + sync-folder-selection PENDING; target completion 2026-05-30**) |
| **Phase 2 carry-forward: `sterling-rough-map.png` LFS retro-migration disposition (2026-05-16)** — A 38 KB PNG was committed 2026-05-10 (plan 01-05) BEFORE `.gitattributes` LFS rules landed 2026-05-16 (plan 02-01). The file lives in regular git history as a blob, not LFS-tracked. **Disposition options:** (a) **Recommended pragmatic-leave-as-is** — 38 KB is negligible vs disruption of a history rewrite; (b) Migrate via `git lfs migrate import --include='*.png' --everything` + force-push (clean history, but rewrites the entire commit graph). **Awaiting Daniel decision at Phase 2 closure review.** Slice-debt promotion gated on Daniel selecting option (a) explicitly. If option (b) selected, spawn a separate gap-closure task. | Functional impact zero (file restores correctly via regular git history; bit-identical SHA256 verified during restore test). Storage impact negligible. Principle violated (Phase 2 INFRA-01 promise was "LFS BEFORE any binary asset commit"; this file pre-existed that rule by 6 days). Documented per CLAUDE.md authoritative-doc precedence ("fix the document or fix the reality, but do not let them diverge silently"). See `.planning/phases/02-infrastructure-repo-setup/verification/restore-test-log.md` §"Anomalies". | Recorded 2026-05-16; Daniel decision pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-09 after project codename lock (Colisi)*
