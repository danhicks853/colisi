# Roadmap: Colisi

**Created:** 2026-05-09
**Last revised:** 2026-05-09 (added Phase 2: Infrastructure & Repo Setup; Phase 1 scope expanded to full mature-studio pre-production set + vision LOCKED to magical-sprite + matchmaking premise)
**Granularity:** standard
**Coverage:** 96/96 v1 requirements mapped
**Project horizon:** 4-6 years (likely the upper end — see "Brutally Honest Timeline" below)

> **Scope reminder:** v1 = the full 30+ hour shipping game. The vertical slice is Milestone 1 within v1, NOT v1 itself. Architectural systems are sized for the full game from day one; only content scopes down for the slice.

---

## Brutally Honest Timeline

The synthesizer recommended **12-18 months for the slice**. After mapping all requirements against actual phase work for a **solo beginner**, my honest assessment is:

- **Milestone 1 (Vertical Slice + Steam page):** **22-32 months** is the current honest estimate (revised 2026-05-09 after Phase 1 scope expanded to the full 28-artifact mature-studio pre-production set; Phase 1 alone now estimated 4-8 months at sustainable nightly pace). The slice-blocking foundations (Phase 3) are still ~4-5 months for a beginner who has never written GDScript or rigged a Blender character. Phase 6 (slice content production) is ~6-9 months once you account for art pipeline learning. This is not a discouragement — it's planning honesty so the Year-3-Wall tripwires actually fire correctly. Per Daniel's directive 2026-05-09: time is not the constraint; quality is. M1 ships when M1 ships.
- **Milestone 2 (Production & Launch):** **3-4 additional years** to ship 30+ hours. The 4-year horizon is achievable only if the slice ships at month 19-25 AND content scaling productivity hits ~2-3× slice rate (because tools and pipelines are now built). The 6-year horizon is the more probable outcome for a solo beginner. **Plan for 5-6 years total. Celebrate if you ship in 4.**
- **Year-3-Wall tripwire (HEALTH-03):** If at month 36 you don't have a shipped slice with 1k+ wishlists AND productivity data showing 30hr scope is reachable in 24-36 more months, that's the pre-committed pivot point. Cut to 15-20hr scope, ship as "Colisi Vol. 1," do Vol. 2 as DLC if commercially warranted.

**The four killers** are baked into the phase structure (Phase 1 vision lock, SCOPE.md discipline gates at every transition, sustainable-pace cadence, the four-engine endgame retention strategy). Rhetorical commitment alone won't save the project; the structure has to.

---

## Milestone Structure

This roadmap details **Milestone 1** (phases 1-8). **Milestone 2** (phases 9-12) is sketched only — detailed phasing is deferred until end-of-M1 retro provides honest content-pacing data. This is intentional. Trying to fully detail M2 today is the trap.

---

## Phases

### Milestone 1: Vertical Slice (months 0 to ~19-25)

- [ ] **Phase 1: Foundations & Vision Lock** — Lock pillars, four-killer mitigations, sustainability rhythms before code
- [ ] **Phase 2: Infrastructure & Repo Setup** — Git LFS, .gitignore, GitHub remote, license, conventions, backup, minimal CI, README/CONTRIBUTING/CHANGELOG, art-source split decision, public-repo privacy review
- [ ] **Phase 3: Project Skeleton & Foundational Systems** — Build the nine slice-blocking foundations (autoloads, save w/ versioning, controller, dialogue integration, input remap)
- [ ] **Phase 4: One-NPC Happy Path** — Prove dialogue + relationships + state-flag branching + narrative-meta architecture end-to-end with a single NPC
- [ ] **Phase 5: Zones & World Systems** — 3-4 zones with transitions, persistent zone state, visual day/night, schedule-driven NPCs
- [ ] **Phase 6: Slice Content Production** — 4 NPCs with full state-tagged dialogue, 1 spirit/animal companion w/ outings, narrative-tied recipes, decoration
- [ ] **Phase 7: Slice Polish & Hardening** — 2026 accessibility verified, controller/KBM parity, perf budget on min-spec, save migration hardened, ring-2 playtester
- [ ] **Phase 8: Steam Page Launch + Public Demo** — Wishlist machine starts. Steam page with capsule art, slice as free demo at Next Fest, itch.io page, Discord, weekly tracking

### Milestone 2: Production & Launch (years 2-4+, sketch only)

- [ ] **Phase 9: Content Scaling** — Full NPC roster (12+), more zones, full crafting/decoration breadth, festivals, NPC gossip, romance arcs. *(Procedural-template dialogue layer REMOVED — see Phase 9 detail; AI policy decision means all dialogue must be hand-authored, increasing the authoring load.)*
- [ ] **Phase 10: Polish, Accessibility Re-Audit, Localization** — CSV-to-PO migration, 1-2 high-leverage non-English languages, full a11y re-audit
- [ ] **Phase 11: Pre-Launch Marketing** — Second Next Fest demo, commissioned trailer, pricing benchmark, launch-week discount strategy
- [ ] **Phase 12: Launch + Post-Launch v1.x** — Ship, monitor, hotfix, post-launch content cadence

---

## Phase Details

### Phase 1: Foundations & Vision Lock
**Goal:** Lock the project vision and produce the full mature-studio pre-production deliverable set (28 artifacts across 9 packs) before any code or content is written. Per directive 2026-05-09 (logged in `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md`): mirror established studio orthodoxy; do not trim deliverables for solo-dev pragmatism; time is not the constraint.

**Vision LOCKED 2026-05-09 (this phase's central creative breakthrough, validated by persona-zero in real-time):** Player is a magical helper-sprite. Each villager has their own kind of personal magic that the player-sprite enables through relationship. Sprite distributes power, never accumulates it. Central puzzle layer: matchmaking-via-environmental-manipulation — the sprite observes villagers and gently engineers meet-cute encounters between compatible pairs. See `01-CONTEXT.md` D-VISION-01 through D-VISION-08 for the full premise lock.

**Depends on:** Nothing (first phase)
**Estimated duration:** As long as it takes — Daniel's directive: "I dont care how long it takes; this project will be done right the first time." First sub-deliverable (premise pitch + persona-zero gate confirmation) within first 2 weeks. Full 28-artifact set: estimate 4-8 months at sustainable nightly pace; will not gate Phase 2 entry on calendar.
**Requirements:** HEALTH-01, HEALTH-02, HEALTH-03, HEALTH-04, HEALTH-05, MKTG-06
**Authorship boundaries (AI policy — PHILOSOPHY.md §V):** Daniel authors all in-world creative content (premise pitch, world bible content, magic system codifications, voice bible content, dialogue voice samples, naming systems, narrative voice, reference deck curation). Claude provides document templates, structural skeletons (matrices, tables), and synthesis-only deliverables (risk registers, capability matrices, anti-positioning structure), and critiques drafts. Claude does NOT generate names, lore, dialogue, reference imagery, or any creative content.

**Success Criteria** (what must be TRUE — organized into 9 deliverable packs per studio orthodoxy):

**Vision Pack:**
  1. Vision pitch / one-pager exists (elevator + paragraph + capsule line) anchored on the locked sprite-helper + matchmaking premise
  2. Pillars of Play doc exists with 3-5 pillars, each having paragraph elaboration + 3-5 specific design implications + 3-5 anti-pillar clauses
  3. Core Fantasy statement exists (one paragraph + one capsule sentence)
  4. Anti-positioning doc exists with explicit divergence sections vs Stardew, BG3, Sims, Spiritfarer, Coral Island, Coffee Talk, Palia (and anything else relevant)

**Loops & Journey Pack:**
  5. Core Loops diagram exists showing nested moment-to-moment / session / meta loops, derived from the locked sprite premise
  6. Player Journey map exists covering first 5 min / first hour / hour 10 / hour 100 / hour 500
  7. Pillar × Mechanic matrix exists; every proposed mechanic justified against ≥1 pillar; orphan mechanics flagged for cut or held aside with rationale
  8. Failure-mode analysis exists; each pillar has a "bounce signature" describing what failing it looks like in playtest

**Scenario Pack:**
  9. Slice Scenario sketch exists (screenwriter-style walkthrough of slice content end-to-end, ≥ "first hour of slice")
  10. Wow beats list exists (the trailer/marketing screenshots in advance — what the slice demonstrates that makes a player wishlist)
  11. 30-second elevator demo sketch exists (what plays in the first half-minute of public demos)

**World & Style Pack:**
  12. World Bible v0.1 exists at DEEP scope (full v1 setting bible: all 8 zones outlined, full pantheon/lore, magic system spec interpreted as soft-magic-with-cultural-tier-vocabulary, Stardew-shape calendar with Colisi-flavored season names + festival framework, every culture sketched, naming-system rules per culture). Magic tone locked: soft magic with codified vibes per `01-CONTEXT.md` D-WORLD-02 and D-WORLD-04.
  13. Mood/reference deck exists; human-curated only (Daniel + Dawn); zero AI-generated reference art per AI policy. Already-collected anchor: Sandara Tang druid + leaf-fawn (Cozy Companion); Hades character art; Okami art style; Borderlands cel-shading corroboration; Studio Ghibli thematic delight.
  14. Style Guide v0.1 exists at Full depth across visual / audio / narrative voice / UI tone — visual direction named with palette + silhouette + style frames + UI visual direction; audio direction with genre + instrumentation principles + soundscape per zone archetype + SFX tone + voice/dialogue policy; narrative voice bible with POV rules + register + sentence-shape tendencies + tone references + forbidden language + narrator presence; UI tone principles only (full mockups Phase 3)

**Risk & Capability Pack:**
  15. Risk register exists with explicit risks + likelihood + impact + mitigation + early-warning tripwire per risk
  16. Capability gap matrix exists with skills required vs current proficiency vs acquisition plan + deadline
  17. Tools/pipeline ratification doc exists (STACK.md ratified into a Phase-1-locked tools doc)

**Process Pack:**
  18. SCOPE.md log exists with rationale-tracking template + a worked example (the inaugural entry: "Phase 1 scope expansion 2026-05-09 to full orthodox 28-artifact set")
  19. slice-debt.md log exists with a worked example
  20. Sustainable-pace cadence doc exists per `01-CONTEXT.md` D-SUST-01–08: continuous nightly session, no hour tracking, milestone-based goals, monthly retro + quarterly review, bi-weekly persona-zero playtest ritual
  21. Year-3-Wall pivot tripwires doc exists per `01-CONTEXT.md` D-WALL-01–07: cascade m6/12/24/36 with multi-OR triggers, 1-week structured pause-and-replan protocol, Replan Doc with 3-scenario evaluation, pre-committed outside reviewer co-sign, re-baseline-and-rearm if continue-as-is. Specific metric thresholds per checkpoint authored during this phase.
  22. Persona-zero playtest ritual is established and at least 2 sessions have occurred (initial + one bi-weekly follow-up)
  23. "Why play at hour 200" retention doc exists, explicitly applying the four-engine retention strategy (state-tagged authored dialogue, 3+ active narrative threads, seasonal recurrence, player-driven goals — now reinterpreted for the sprite-matchmaking premise)

**Decision Lock Pack:**
  24. Time-model lock recorded per `01-CONTEXT.md` D-TIME-01–05: pure action-driven contract, player-controlled day/night, continuous NPC pathing during play. Trigger list (canonical actions that advance time) authored from Core Loops Pack output (D-SCOPE-05) within this phase, OR explicitly deferred to Phase 4 with rationale.
  25. Stack ratification recorded — STACK.md decisions locked, no re-litigation in Phase 2+
  26. Architecture ratification recorded — ARCHITECTURE.md ratified as the locked v1 architecture; any premise-driven re-interpretations (sprite movement model, HOME/CRAFT/COMP shifts) noted as REQUIREMENTS.md interpretation amendments

**Validation Pack:**
  27. **MKTG-06 demographic validation** — `MARKET-EVIDENCE.md` exists with: hybrid game-list (selection rule + Daniel curation, 10-20 games), LLM-assisted negative-review classification + Daniel verification of every tag, formal Google Form survey distributed to r/CozyGamers + 2-3 cozy Discords + cozy social tags (target 50-100 responses), explicit thesis-confirmed/refined/rejected verdict using the triangulation rubric in `01-CONTEXT.md` D-MKTG-04. If verdict is "rejected" or "significantly refined," rest of roadmap revisited before Phase 2.

**Greenlight:**
  28. Greenlight document exists, dated, signed by Daniel as solo-dev producer, with explicit "knowing what I now know, I commit to this" statement. Gates Phase 2 entry. Includes pre-committed Year-3-Wall tripwire criteria as load-bearing co-signature.

**Plans:** 9 plans (1 wave-1 scaffolding + 7 wave-2/3 deliverable-pack plans + 1 wave-4 greenlight)
- [x] 01-00-deliverable-scaffolding-PLAN.md — Wave 1: Claude scaffolds all 28 deliverable skeletons + .planning/SCOPE.md + .planning/slice-debt.md + .planning/playtest-log/ infrastructure
- [x] 01-01-vision-pack-PLAN.md — Wave 2: Daniel authors Vision Pitch + Pillars + Core Fantasy + Anti-positioning; persona-zero session 1 (HEALTH-05)
- [ ] 01-02-risk-capability-process-PLAN.md — Wave 2: Daniel verifies + signs Risk Register / Capability Matrix / Tools-Pipeline / Stack / Architecture / Persona-zero ritual / Sustainable-pace; amends REQUIREMENTS.md HEALTH-04 wording
- [ ] 01-03-loops-journey-PLAN.md — Wave 3: Daniel authors Core Loops + Player Journey + Pillar×Mechanic matrix + Failure-mode analysis (depends on Vision Pack pillars)
- [ ] 01-04-scenario-pack-PLAN.md — Wave 3: Daniel authors Slice Scenario + Wow Beats + 30s Elevator Demo (depends on Vision Pack)
- [ ] 01-05-world-style-pack-PLAN.md — Wave 3: Daniel authors World Bible v0.1 (DEEP) + Mood Deck (zero-AI) + Style Guide v0.1 (Full)
- [ ] 01-06-decision-locks-tripwires-PLAN.md — Wave 3: Daniel populates Year-3-Wall thresholds (after comparable-game research) + writes Hour-200 retention four-engine application + finalizes Time-model lock; designates outside reviewer
- [ ] 01-07-mktg-06-validation-PLAN.md — Wave 2 (long-tail): Build game list + draft + critique survey + Steam review LLM classification with 100% Daniel verification + survey distribution + verdict authoring
- [ ] 01-08-greenlight-PLAN.md — Wave 4: Persona-zero session 2 (HEALTH-05 minimum reached) + Daniel signs Greenlight + outside reviewer cosigns Year-3-Wall criteria — gates Phase 2 entry

---
**Amendment log:**
- 2026-05-09: Phase 1 scope expanded from 7 success criteria (process docs + decision-locks + MKTG-06) to full 28-artifact orthodox pre-production deliverable set. Driver: vision-lock breakthrough during `/gsd:discuss-phase 1` session + Daniel's explicit directive to mirror mature-studio practice. Premise locked the same session (magical sprite + matchmaking) with persona-zero validation. Inaugural SCOPE.md entry will retroactively log this expansion as the bootstrap precedent.

---

### Phase 2: Infrastructure & Repo Setup
**Goal:** Set up the parts of project infrastructure that are *irreversible-ish* — the kind where retrofitting costs days or weeks of cleanup. By end of phase, the repo is hardened against the next 4-6 years of solo development: binary assets cannot bloat the repo (LFS configured), the engine cannot pollute commits (.gitignore tuned), the project structure is documented (folder conventions and naming locked), the repo is properly licensed and visible at the right level, the work cannot vanish (backup tested with documented restore), and CI catches import errors before they merge.
**Depends on:** Phase 1
**Estimated duration:** ~2-3 weeks (decisions take half the time; mechanical setup the rest)
**Requirements:** INFRA-01, INFRA-02, INFRA-03, INFRA-04, INFRA-05, INFRA-06, INFRA-07, INFRA-08, INFRA-09, INFRA-10, INFRA-11
**Success Criteria** (what must be TRUE):
  1. **Git LFS is configured before any binary asset lands.** `.gitattributes` tracks .png, .jpg, .ogg, .wav, .mp3, .glb, .gltf, .blend, .fbx, .ttf, .otf, .exr, .hdr (and any binary `.tres` forms). A test binary is committed and verified to be stored in LFS, not the main repo blob.
  2. **`.gitignore` is Godot-tuned.** Engine cache (`.godot/`), generated import metadata, per-developer build configs, export-preset secrets, OS clutter (`.DS_Store`, `Thumbs.db`), and editor temporary files are all excluded. Verified by attempting to commit a test cache directory and confirming it's ignored.
  3. **GitHub remote is the source of truth.** Repo lives at `https://github.com/danhicks853/colisi.git` (DONE 2026-05-09). Main branch is the trunk. At least one push has succeeded.
  4. **Backup/redundancy strategy is implemented and tested.** Primary: GitHub. Secondary: a documented local cloud-sync of the working directory (OneDrive / Dropbox / Google Drive — Daniel's choice). A restore procedure document exists and has been **tested at least once** by simulating a fresh clone + restore on a different machine path.
  5. **Project conventions are documented in `CONVENTIONS.md`.** Folder structure for the eventual Godot project (where scenes / scripts / assets / addons / resources / dialogue files / translations live) plus naming rules for scenes, scripts, resources, dialogue files. Documented BEFORE Phase 3 creates the Godot project so structure isn't retrofit.
  6. **License decision is recorded** with a `LICENSE` file at repo root. Default lean: All Rights Reserved copyright notice with future-relicensing note (this is a commercial closed-source game with public source visibility; people can read the code but not use it).
  7. **`.editorconfig` is committed** with consistent line endings (LF for cross-platform safety, even on Windows), tab vs space convention for GDScript, and trailing-whitespace handling. Optional `.vscode/` settings if VS Code is the secondary editor.
  8. **Art-source repo split decision is recorded.** Option A: Blender source files live in main repo via LFS (simpler, but eats the GitHub free 1GB LFS quota faster). Option B: Separate `colisi-art-source` repo dedicated to source art with the main repo only carrying exported `.glb` files (more complex but quota-resilient). Decision recorded in PROJECT.md Key Decisions; if Option B, the secondary repo is created.
  9. **Minimal CI is configured.** `.github/workflows/godot-import-check.yml` runs `godot --headless --import` on every push to main, catches import errors before they ship. Free unlimited Actions minutes on public repo, so cost is zero. (Skip if Phase 3 hasn't initialized a Godot project yet — defer to Phase 3 only if blocking.)
  10. **`README.md`, `CONTRIBUTING.md`, `CHANGELOG.md` skeletons exist.** README covers: codename + pronunciation, project status (early development), intended audience, setup instructions for future contributors. CONTRIBUTING captures conventions for solo-Daniel-of-the-future. CHANGELOG follows Keep-A-Changelog format.
  11. **Privacy review is complete.** Decision recorded on whether `PERSONA.md` (containing wife's interview quotes) stays in the public repo, gets redacted to anonymous quotes, or moves to a `.local/` ignored path. Daniel's call; the requirement is that the call has been *made* and recorded.
**Plans:** 5 plans (3 waves)
- [x] 02-01-repo-hardening-files-PLAN.md - Wave 1: .gitignore + .gitattributes (LFS for 13+ binary extensions) + .editorconfig + LICENSE
- [x] 02-02-conventions-and-documentation-PLAN.md - Wave 1: CONVENTIONS.md (D-INFRA-conv-1..4) + CONTRIBUTING.md + CHANGELOG.md + README.md updates
- [x] 02-03-lfs-verification-and-ci-PLAN.md - Wave 2: LFS routing verified + .gitignore verified + .github/workflows/godot-import-check.yml scaffolded
- [x] 02-04-backup-and-restore-test-PLAN.md - Wave 3: BACKUP.md (3-tier per D-INFRA-bkp-1..2 + D-INFRA-art-3) + checkpoint:human-verify restore test
- [ ] 02-05-decisions-recorded-and-phase-closure-PLAN.md - Wave 3: PROJECT.md Key Decisions (D-INFRA-art-1 + D-INFRA-priv-1) + SCOPE row 18 + REQUIREMENTS.md INFRA-01..11 Complete

---

### Phase 3: Project Skeleton & Foundational Systems
**Goal:** Build the nine slice-blocking foundations identified by the architecture researcher. Every system here is the real shipping system, not a slice-only stub. By end of phase, an empty world exists where a player character can move, interact with placeholder objects, open menus, save/load, and have all settings persist — with localization scaffolding and versioned save schema in place from day one.
**Depends on:** Phase 2
**Estimated duration:** ~4-5 months (this is "learning Godot/Blender/GDScript while building the real systems"; the SUMMARY estimate of "3-4 months" is optimistic for a beginner)
**Requirements:** CTRL-01, CTRL-02, CTRL-03, CTRL-04, CTRL-05, CTRL-06, CTRL-07, CTRL-08, SAVE-01, SAVE-02, SAVE-03, SAVE-04, SAVE-05, UI-01, UI-04, UI-05, UI-06, UI-07, UI-08, LOC-01, LOC-03, DIST-06, ONB-01
**Success Criteria** (what must be TRUE):
  1. Player can move a 3D character through an empty test scene with WASD or analog stick, rotate camera with mouse or right stick, run with one modifier, and interact with a context-sensitive placeholder object using one button (no chord schemes anywhere)
  2. Player can open a settings menu, remap any control on KBM and gamepad, adjust independent volume sliders, change window mode and graphics preset, scale UI text to 150%, and have all of it persist across game restarts
  3. Player can manually save to one of three slots, see the game autosave at a triggered event, and load a saved game with all state restored — including a successfully applied schema migration from version 1 to version 2 in a test
  4. Every player-visible string in the test scene routes through `tr()`; a CSV translation table exists; Noto Sans CJK fallback font is configured and a test Chinese-character string renders without missing glyphs
  5. The five autoloads (EventBus, GameState, SaveManager, TimeService, Settings) plus DialogueManager are loaded; performance budget is documented (200 draw calls, 100k visible verts target on integrated GPU)
  6. Onboarding stub: a new player who has never played the project can move, interact, open inventory, and trigger placeholder dialogue within 5 minutes of starting the test build
**Plans:** TBD
**UI hint:** yes

---

### Phase 4: One-NPC Happy Path
**Goal:** Prove the entire NPC + dialogue + relationships + state-flag branching + narrative-metadata-on-items architecture stack end-to-end with a single named NPC before scaling content. This phase de-risks the highest-leverage system in the project; if any pattern (eligibility cascade, multi-axis relationships, mutation discipline, persistent branching) fails here, fix it now while there are 150 lines to refactor — not 1500.
**Depends on:** Phase 3
**Estimated duration:** ~2-3 months
**Requirements:** NPC-03, NPC-05, NPC-07, NARR-01, NARR-02, NARR-06, NARR-07, CRAFT-04, CRAFT-05, CRAFT-06, CRAFT-07
**Success Criteria** (what must be TRUE):
  1. One named NPC exists with multi-axis relationship state (trust, intimacy, respect, familiarity) — not a single hearts integer — and the player's gifts and dialogue choices visibly move different axes
  2. Player can have ~150 lines of state-tagged dialogue with the NPC; the dialogue-eligibility cascade picks lines based on world flags, arc state, and recent player actions, not friendship tier
  3. At least one persistent branching choice is in the NPC's dialogue; the choice mutates a flag on GameState, that flag is checked by the NPC's later dialogue (and ideally by an item description elsewhere), and a save/reload preserves the consequence; the player never has to restart to re-branch
  4. Narrative-metadata-on-items is demonstrated: at least 3 items have `NarrativeMeta` (first-collected dialogue, lore entry, NPC reference); collecting one for the first time triggers a one-shot dialogue line; gifting one to the NPC triggers a recipe unlock or new conversation
  5. Player has a journal/log that displays past choices and their outcomes (NARR-06); puzzles in this phase (if any) telegraph their solution clearly enough that a non-developer can solve them in under 10 minutes
  6. Player has a usable inventory with no degradation, no durability, and capacity sufficient that nothing in the slice content gets blocked by inventory management
**Plans:** TBD

---

### Phase 5: Zones & World Systems
**Goal:** Move from "test scene" to "world." Build the 3-4 zones the slice will use, with persistent zone state, fast-travel between unlocked zones, schedule-driven NPC location, and a visual day/night cycle that is fully decoupled from any gameplay clock. Lock the action-driven time model in code (the decision was made in Phase 1; this phase implements it).
**Depends on:** Phase 4
**Estimated duration:** ~2-3 months
**Requirements:** NPC-02, WORLD-01, WORLD-02, WORLD-03, WORLD-05, WORLD-06, WORLD-07, ONB-04
**Success Criteria** (what must be TRUE):
  1. Player can move between 3-4 zones via clear transitions; zones load with autosave; zone-specific state (placed items, harvested resources, NPC locations) persists across zone exits and re-entries and across save/load
  2. World has a visible day/night cycle that affects lighting, NPC schedule positions, and ambient audio — but never imposes any gameplay penalty, time limit, or missable content; the player can stand still indefinitely and nothing closes
  3. NPCs in a zone are at scheduled locations driven by an in-game time-of-day; the schedule is visible to the player (NPC is physically there to see) without any pressure on the player to be there at a specific moment
  4. In-game time advances on player rest action or major event completion, never on wall-clock; the player can pause anywhere mid-conversation, mid-decoration, mid-action and the world holds state
  5. Once a zone is discovered, the player can fast-travel back to it from any other unlocked zone via a journal/map UI
  6. A new player with no prior cozy-game or 3D-game experience can navigate between two zones, find an NPC, and trigger dialogue without external help (ONB-04 verified informally with persona-zero)
**Plans:** TBD
**UI hint:** yes

---

### Phase 6: Slice Content Production
**Goal:** Produce the actual slice content — 4 NPCs (one of which is a non-human spirit/talking-animal companion who can accompany the player on outings), narrative-tied crafting and decoration, soft-pinned future events. This is the longest phase by wall time. Slice debt is logged honestly throughout (HEALTH-02 in continuous use).
**Depends on:** Phase 5
**Estimated duration:** ~6-9 months (longest single phase; art pipeline learning + content authoring at solo-beginner pace)
**Requirements:** NPC-01 (slice subset of 4), NPC-04, NPC-06, NPC-08, NARR-03, NARR-04, NARR-05, COMP-01, COMP-02, COMP-03, COMP-04, WORLD-04, CRAFT-01, CRAFT-02, CRAFT-03, HOME-01, HOME-02, HOME-03 (slice subset of ~10), HOME-04, HOME-05, ONB-02, AUDIO-01, AUDIO-02, AUDIO-03
**Success Criteria** (what must be TRUE):
  1. Slice contains 4 named NPCs (3 human, 1 non-human spirit/talking-animal companion); each has distinct personality and schedule, an arc state machine with at least 3 stages, ~150 state-tagged dialogue lines, and references to seasons/events when relevant
  2. Player can invite the spirit/talking-animal companion on at least one outing; companion provides reactive location-aware and activity-aware dialogue while accompanying; the companion accompaniment moves the multi-axis relationship state and arc; companion never permanently leaves or dies as a fail-state
  3. At least 3 narrative threads are active concurrently in the slice; each has a satisfying (bittersweet allowed, no forced-tragic) resolution path; the slice demonstrates that the game continues to be meaningful after the most prominent thread resolves
  4. Player can gather resources (foraging at minimum), craft 5-10 narrative-tied recipes at a crafting station, with recipes unlocked through NPC interaction not skill trees; gifting crafted items triggers NPC reactions
  5. Player has a customizable home with 5-10 placeable furniture/decoration items; placement, rotation, move, and remove all work; NPCs comment on the home when they visit; home decoration state fully saves and restores
  6. First-day onboarding sequence introduces NPCs, gathering, crafting, and journal in a way persona-zero (or another ring-1 tester) can complete without external help
  7. Original or CC0 music score has at least one day-themed and one season-themed track; SFX coverage exists for player actions, world ambience, NPC barks, and UI; audio buses can be muted independently
**Plans:** TBD
**UI hint:** yes

---

### Phase 7: Slice Polish & Hardening
**Goal:** Take the rough-but-complete slice and harden it for public release. 2026 accessibility baseline verified end-to-end, full controller/KBM parity tested, performance budget met on integrated-GPU min-spec hardware, save migration framework hardened (because once it ships publicly, you can't break saves). First ring-2 playtester (someone outside the household) plays the slice and you watch.
**Depends on:** Phase 6
**Estimated duration:** ~2-3 months
**Requirements:** NPC-09 (slice version — 4 NPCs gossiping about each other), UI-02, UI-03, UI-09, UI-10, ONB-03, SAVE-06
**Success Criteria** (what must be TRUE):
  1. Slice debt log is fully reconciled: every entry either marked resolved with the real implementation in code, or marked carried-forward-to-M2 with explicit promotion-or-payoff strategy
  2. Full 2026 accessibility baseline verified: text scaling at 150% works in all menus and dialogue, colorblind-friendly palette confirmed, all dialogue/narrative content has accurate subtitles by default, content warning shows at first launch, optional gentle tutorial available for first-run players, no new core mechanic ever appears in slice without re-tutorialization
  3. Slice plays at 60fps on integrated-GPU hardware (minimum spec target); draw call and vertex budgets met; controller and KBM both fully navigate every UI screen with no mouse required
  4. Save migration framework is hardened with at least 2 real migrations applied (v1->v2->v3); saves cloud-sync via Steam Cloud (SteamService autoload wired); 3 rolling autosaves preserved alongside the 3 manual slots
  5. NPCs in the slice reference what other NPCs have done or said when world state permits (gossip layer working at slice scale of 4 NPCs — not the full M2 propagation)
  6. At least one ring-2 playtester (not Daniel, not the lead persona — someone unfamiliar with the project) completes the first hour of slice content; their session is observed and notes are logged for the slice-retro doc
**Plans:** TBD
**UI hint:** yes

---

### Phase 8: Steam Page Launch + Public Demo
**Goal:** The wishlist machine starts. Steam page goes up at slice ship (synthesizer was emphatic: this is the highest-ROI moment in the entire project's marketing posture). Slice ships as a free demo synced to a Steam Next Fest. itch.io page goes live. Discord exists. The capsule art commission (~$300, the project's single highest-ROI dollar) ships. By end of phase, weekly wishlist tracking is the project's heartbeat.
**Depends on:** Phase 7
**Estimated duration:** ~2 months (the work is mostly external — Steam approval timelines, Next Fest scheduling, capsule art turnaround — not engineering)
**Requirements:** DIST-01, DIST-02, DIST-03, DIST-04, DIST-05, MKTG-01, MKTG-02, MKTG-03, MKTG-04, MKTG-05
**Success Criteria** (what must be TRUE):
  1. Steam page is live with: commissioned professional capsule art, screenshots from the slice, a slice-derived trailer (or at minimum a slice-derived gameplay video), accurate genre/tag set positioned around "deep cozy enjoyer" (no "Stardew killer" framing anywhere)
  2. Slice ships as a free playable demo on Steam, scheduled to be live during a Steam Next Fest; Steam integration includes achievements, cloud saves, and Steam Input controller support
  3. Itch.io page is live with the slice build pushed via butler (automation pattern documented even if first push was manual)
  4. Public devlog has been live since approximately month 3 of development (MKTG-02 — this requirement first becomes verifiable here but the cadence began long ago); Discord server exists for community building
  5. Weekly wishlist count is being tracked in a project log; first 1000-wishlist target is named with a date by which it should be hit
  6. Game runs on Windows, macOS, and Linux from Steam; itch.io build covers at minimum Windows and Linux
**Plans:** TBD
**UI hint:** yes

---

### Phase 9: Content Scaling (Milestone 2 — sketch only)
**Goal:** Scale slice systems to full-game content — the full NPC roster (slice has 4, full game has 12+), more zones to reach 8 total, full crafting recipe set, festival/event system with year-over-year evolution, full NPC-to-NPC gossip propagation, full companion-on-outings for 4-6 NPCs, romance arcs (cozy-tuned, no punishing fail states).

**IMPORTANT design change (logged 2026-05-09):** The procedural-template dialogue layer that was previously planned here is REMOVED per the AI policy in PHILOSOPHY.md Section V. Decision: all dialogue lines must be hand-authored — Mad-Libs-style runtime template-filling is off the table even though the templates would be human-written. Endgame retention now leans entirely on the other three engines from SUMMARY.md (state-tagged authored dialogue with no max state, always 3+ active narrative threads, seasonal recurrence with persistent variation across years) plus player-driven creative goals. **Net effect: the dialogue authoring load for full game is substantially higher than originally planned.** This is a known cost of holding the AI line; it does not change the design center. Phase 9 will need an explicit dialogue-authoring budget and pacing plan derived from slice metrics at end-of-M1 retro.
**Depends on:** Phase 8 + end-of-M1 retro
**Estimated duration:** TBD at end-of-M1 retro (rough: 18-30 months)
**Requirements:** NPC-01 (full 12+ NPC roster — slice covered 4), HOME-03 (full 50+ furniture items — slice covered ~10)
**Success Criteria:** TBD — derive from M1 actuals and persona-zero feedback during M1
**Plans:** TBD (detailed phasing deferred until end-of-M1 retro)

---

### Phase 10: Polish, Accessibility Re-Audit, Localization (Milestone 2 — sketch only)
**Goal:** Pre-launch polish pass. CSV-to-PO migration done; pick 1-2 high-leverage non-English languages and ship localizations; full accessibility re-audit against 2027/2028 baseline (the bar will have moved by then).
**Depends on:** Phase 9
**Estimated duration:** TBD at end-of-M1 retro (rough: 6-9 months)
**Requirements:** LOC-02
**Success Criteria:** TBD — derive at end-of-M1 retro
**Plans:** TBD (detailed phasing deferred until end-of-M1 retro)

---

### Phase 11: Pre-Launch Marketing (Milestone 2 — sketch only)
**Goal:** Wishlist conversion play. Second Next Fest demo (improved over Phase 8's), commissioned trailer at professional quality, pricing benchmarked against 5-10 cozy life sims at launch, launch-week discount strategy planned, review-copy distribution plan ready.
**Depends on:** Phase 10
**Estimated duration:** TBD (rough: 3-4 months)
**Requirements:** (no new REQ-IDs — MKTG-05 was already mapped to Phase 8 for capsule; the trailer commission cadence here is a continuation of MKTG-05's "professional quality" intent, planned in M2 retro)
**Success Criteria:** TBD — derive at end-of-M1 retro
**Plans:** TBD (detailed phasing deferred until end-of-M1 retro)

---

### Phase 12: Launch + Post-Launch v1.x (Milestone 2 — sketch only)
**Goal:** Ship. Monitor reviews and crash reports. Hotfix critical issues. Establish post-launch content cadence — v1.1, v1.2 content updates that satisfy the cozy-genre player expectation of continued investment from the dev.
**Depends on:** Phase 11
**Estimated duration:** TBD (rough: 6-12 months for v1.0 + v1.x patches before any v2 work)
**Requirements:** (no new REQ-IDs — all 95 v1 requirements are mapped to phases 1-9; v2 requirements are tracked separately)
**Success Criteria:** TBD — derive at end-of-M1 retro
**Plans:** TBD (detailed phasing deferred until end-of-M1 retro)

---

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundations & Vision Lock | 1/9 | In Progress | - |
| 2. Infrastructure & Repo Setup | 0/5 | Planned | - |
| 3. Project Skeleton & Foundational Systems | 0/0 | Not started | - |
| 4. One-NPC Happy Path | 0/0 | Not started | - |
| 5. Zones & World Systems | 0/0 | Not started | - |
| 6. Slice Content Production | 0/0 | Not started | - |
| 7. Slice Polish & Hardening | 0/0 | Not started | - |
| 8. Steam Page Launch + Public Demo | 0/0 | Not started | - |
| 9. Content Scaling (M2 sketch) | 0/0 | Not started | - |
| 10. Polish, Accessibility Re-Audit, Localization (M2 sketch) | 0/0 | Not started | - |
| 11. Pre-Launch Marketing (M2 sketch) | 0/0 | Not started | - |
| 12. Launch + Post-Launch v1.x (M2 sketch) | 0/0 | Not started | - |

---

## Coverage Notes

### Coverage map (all 95 v1 requirements)

**Phase 1 (6):** HEALTH-01, HEALTH-02, HEALTH-03, HEALTH-04, HEALTH-05, MKTG-06

**Phase 2 (11):** INFRA-01, INFRA-02, INFRA-03, INFRA-04, INFRA-05, INFRA-06, INFRA-07, INFRA-08, INFRA-09, INFRA-10, INFRA-11

**Phase 3 (23):** CTRL-01, CTRL-02, CTRL-03, CTRL-04, CTRL-05, CTRL-06, CTRL-07, CTRL-08, SAVE-01, SAVE-02, SAVE-03, SAVE-04, SAVE-05, UI-01, UI-04, UI-05, UI-06, UI-07, UI-08, LOC-01, LOC-03, DIST-06, ONB-01

**Phase 4 (11):** NPC-03, NPC-05, NPC-07, NARR-01, NARR-02, NARR-06, NARR-07, CRAFT-04, CRAFT-05, CRAFT-06, CRAFT-07

**Phase 5 (8):** NPC-02, WORLD-01, WORLD-02, WORLD-03, WORLD-05, WORLD-06, WORLD-07, ONB-04

**Phase 6 (24):** NPC-01 (slice subset), NPC-04, NPC-06, NPC-08, NARR-03, NARR-04, NARR-05, COMP-01, COMP-02, COMP-03, COMP-04, WORLD-04, CRAFT-01, CRAFT-02, CRAFT-03, HOME-01, HOME-02, HOME-03 (slice subset), HOME-04, HOME-05, ONB-02, AUDIO-01, AUDIO-02, AUDIO-03

**Phase 7 (7):** NPC-09 (slice version), UI-02, UI-03, UI-09, UI-10, ONB-03, SAVE-06

**Phase 8 (10):** DIST-01, DIST-02, DIST-03, DIST-04, DIST-05, MKTG-01, MKTG-02, MKTG-03, MKTG-04, MKTG-05

**Phase 9 (M2 — content scale-up of slice REQs):** NPC-01 full roster, HOME-03 full set

**Phase 10 (M2):** LOC-02

**Phase 11 (M2):** (continuations only — no new REQ-IDs)

**Phase 12 (M2):** (launch — no new REQ-IDs)

**Total mapped:** 96 unique REQ-IDs (6 + 11 + 23 + 11 + 8 + 24 + 7 + 10 + slice-spans + 1 + 0 + 0). Coverage = 96/96 ✓.

### Coverage notes (intentional cross-phase mappings)

A few requirements span multiple phases by design — they are anchored to the phase where they FIRST become required, with explicit notes in later phases about ongoing or scaled-up work:

- **NPC-01 ("at least 12 named NPCs in v1"):** Anchored to Phase 6 for the slice subset (4 NPCs); the remaining 8+ NPCs come in Phase 9 (Content Scaling).
- **HOME-03 ("at least 50 placeable furniture/decoration items by end-game"):** Anchored to Phase 6 for the slice subset (~10 items); remaining ~40 come in Phase 9. Same anchoring rationale as NPC-01.
- **NPC-09 ("NPC-to-NPC gossip layer"):** Anchored to Phase 7 at slice scale (4-NPC gossip working); full propagation across 12+ NPCs in Phase 9.
- **HEALTH-04, HEALTH-05 (sustainability and persona-zero playtest rituals):** Anchored to Phase 1 where they FIRST become required, but they are explicitly ongoing across every phase. No phase is "done" with HEALTH-04 — every transition checks the cadence is being held.
- **MKTG-02 ("public devlog launches by month 3"):** Anchored to Phase 8 in the coverage table (where it's *verified* as live — Steam page and devlog both have public presence). The actual devlog launch happens during Phase 3 timeline (~month 3 absolute).
- **INFRA-03 ("repo on GitHub"):** Anchored to Phase 2 but already complete (DONE 2026-05-09 — repo at `https://github.com/danhicks853/colisi.git`).

### No orphaned requirements

All 96 v1 requirements have a phase. Coverage is complete.

### v2 requirements (deferred, not in v1 scope)

ROM-01, ROM-02, REPLAY-01, REPLAY-02, PROC-01, PROC-02, MOD-01, MOD-02, PLAT-01, PLAT-02 — tracked in REQUIREMENTS.md, not roadmapped.

---

## Risks That Could Force a Re-Plan

1. **Year-3-Wall tripwire fires** (HEALTH-03): if at month 36 the slice has shipped but wishlist count is below the pre-committed threshold, scope cut to 15-20hr "Vol. 1" is the planned response. Will require a roadmap revision.
2. **Phase 3 takes longer than 5 months:** if Godot/GDScript/Blender learning overhead exceeds estimate, Phase 3 budget extends and pushes everything right. This is the most likely overrun. Tripwire: at month 7, if all 9 slice-blocking foundations aren't in place, take a hard look before starting Phase 4.
3. **Phase 6 art pipeline disaster:** 4 NPC characters at full quality is the biggest single solo-dev unknown. If Blender pipeline doesn't yield a usable character in <3 weeks, consider reducing to 3 NPCs in slice or buying a paid asset pack (single biggest budget-exception candidate after capsule art).
4. **Persona-zero unavailability:** the persona-zero playtest rhythm (HEALTH-05) depends on the lead persona being available. If she becomes unavailable for an extended period, the project loses one of its most cited unique advantages and a contingency feedback loop must be designed.
5. **GitHub LFS quota / public-repo visibility issues:** Free 1GB LFS quota will likely be exhausted within the first year of binary asset commits; budget $5/mo Data Pack at that point. Public-repo visibility means design / code is open during development; if a competitor rapidly clones the design, accept it (the persona research and execution quality are the moat, not the code).

---

*Roadmap created: 2026-05-09*
*Last updated: 2026-05-09 after Phase 1 scope expansion + vision lock (magical helper-sprite + matchmaking puzzle layer)*
