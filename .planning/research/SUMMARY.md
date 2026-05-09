# Project Research Summary

**Project:** Cozy Life Sim (working title)
**Domain:** 3D narrative-driven cozy life sim, Godot 4 + Blender, solo dev, ~$100 lifetime budget, 4–6 year horizon
**Researched:** 2026-05-09
**Confidence:** HIGH on persona, stack, pitfalls; MEDIUM-HIGH on architecture; MEDIUM on the cozy-genre-specific synthesis (it's a novel combination)

> **Read this if you read nothing else:** A 3D cozy life sim built around the persona's stated dream cross of *Baldur's Gate 3 + The Sims*, where the load-bearing differentiator is **"characters and relationships that keep evolving in a world that never punishes the player."** Godot 4.5.x + GDScript + Blender + Dialogue Manager. Vertical slice in 12–18 months as a wishlist-driving checkpoint, full game scoped at 30+ hours over 4–6 years. The four killers — scope creep, burnout, the endgame content cliff, and the "Stardew Killer" framing trap — are baked into the project plan as first-class concerns, not afterthoughts.

---

## Top-Line Strategic Stance

This is a **persona-defined product**: a 3D cozy life sim for the underserved "deep cozy enjoyer" demographic, anchored by an unusually rigorous persona corpus (lead persona's full Steam library interviewed against love/hate axes). The corpus says one thing loudly and consistently — players in this demographic want Stardew's relationship core *without* its time pressure, BG3's companion-driven branching *without* its difficulty wall, and The Sims' expression *without* its content-cliff "then what" problem. No current shipped game hits all three. The commercial thesis is real if executed.

The build strategy is **architect-for-the-full-game-from-day-one + ship-a-vertical-slice-first**. The slice is a checkpoint and wishlist driver, not the endpoint; slice content scopes down, slice systems do not. Every system listed in the architecture research is the real shipping system. Hacky shortcuts are surfaced explicitly in a slice debt log, not silently absorbed.

The four risks that could end the project are pre-named: **(1) "Stardew Killer" framing** (positioning trap that crushes solo cozy projects), **(2) scope creep** (the #1 killer of multi-year solo projects), **(3) burnout** across the 4–6 year horizon, and **(4) the endgame content cliff** (the persona's most-cited bounce reason and PROJECT.md's identified central design challenge). The roadmap must structurally mitigate all four — rhetorical commitment alone is insufficient.

---

## Key Findings

### Recommended Stack (locked — do not re-litigate)

The full STACK.md is decisive. The roadmap commits to this and stops deliberating.

**Locked decisions:**

- **Engine:** Godot **4.5.x** (latest patch in the 4.5 branch). Pin per phase; upgrade only at phase boundaries with a dedicated migration milestone. *Not* 4.6 mid-project — stability over recency.
- **Language:** **GDScript** for everything. C# / GDExtension are not on the table.
- **3D pipeline:** Blender LTS → glTF 2.0 (.glb) → Godot. NLA strips for animations, bone-map + animation retargeting, single canonical character skeleton.
- **Dialogue:** **Nathan Hoad's Dialogue Manager** (text-file based, "stateless" — reads/writes GameState autoload via mutations). *Architecture research overrides STACK research's Dialogic 2 default.* Dialogue Manager is production-ready and lighter to wrap behind a project-owned `DialogueService`; the "wrap addons behind project-owned interfaces" pitfall mitigation is much cleaner with it.
- **Save system:** **Custom Resource (`GameStateData.tres`)** with versioned schema from day one. `ResourceSaver`/`ResourceLoader` for the dev side; switch to `FileAccess.store_var` if save-sharing or modding ever ships.
- **Localization:** `tr()` everywhere from line one. CSV during slice, migrate to gettext PO before localized release. Localization-friendly fonts (Noto Sans CJK fallback) chosen now.
- **Assets (CC0):** Kenney + Quaternius + KayKit for 3D; Mixamo + Quaternius Universal Animation Library for animation; Freesound + Kenney audio for SFX; Bosca Ceoil → LMMS / REAPER for music. Maintain `credits.md` from day one.
- **Version control:** Git + **Git LFS from before first commit**. GitHub private repo; budget $5/mo Data Pack when free tier hits.
- **Steam:** **GodotSteam GDExtension**, integrated ~6 months pre-launch, wrapped behind `SteamService` autoload.
- **Itch.io:** **butler** CLI; manual upload for first 1–2 years.
- **Testing:** **GUT 9.x** for selective unit tests on save/load round-trip, dialogue conditional eval, calendar logic, inventory/crafting math. Don't TDD a cozy game; test only what hurts to break.

**Total cash outlay for the locked stack:** $100 (Steam Direct fee).

**Anti-stack (do not adopt):** Unity, Unreal, GameMaker, Yarn Spinner on Godot today, AI-generated content for shipped product, JSON for save data, paid Synty packs at MVP, direct .blend import, FBX as primary format, multiplayer networking surface area at all.

### Expected Features

**Must have (table stakes — bounce-or-keep gates for the cozy demographic in 2026):**
- 3D third-person controller with single-button context-sensitive interaction (no chord schemes)
- NPC roster with state-tagged evolving dialogue (data-driven, never hand-rolled in code)
- Inventory + crafting + resource gathering
- Player housing with placement / rotation decoration
- Visual day/night + seasonal cycle (cosmetic, *decoupled from gameplay clock*)
- Save / load with multiple slots + autosave + manual save anywhere; versioned schema
- Pause-anywhere
- Tutorial / onboarding for someone who has never played a cozy game
- 2026 accessibility baseline: text scaling ≥150%, control remap (KBM + gamepad), gamepad-first navigable UI, colorblind-friendly palette, subtitles, content warning, mute per audio bus

**Should have (the differentiator stack — the reason this product exists):**
- **Evolving NPC dialogue system** (state-tagged authored library + schedule + gossip + cutscenes) — the tentpole
- **Persistent branching choices that ripple forward** (no restart-to-rebranch CYOA)
- **No real-time-pressure mechanics anywhere** (the design center)
- **Power curve that plateaus, never spikes**
- **Companion-style NPC arc system** (BG3-inspired but cozy-tuned: multi-axis trust/intimacy/respect/familiarity, personal questlines, persistent arc state, never punishing)
- **Crafting tied to narrative** (recipes are story rewards; ingredients have lore; outputs unlock conversations)
- **Always-clear puzzle telegraphing**
- **Companion-on-outings** for at least one companion in slice
- **A spirit / talking-animal companion** as a setting differentiator + iconic marketing hook

**Defer (v1.x / v2):** Romance arcs with rich post-commitment dialogue · New Game+ (knowledge, not items) · "Memory Lane" cutscene replay · Procedural minor NPCs · Steam Workshop / mod support · Console / mobile ports.

**Anti-features (persona-driven hard nos):** Day clocks / bedtime / energy depletion · missable / time-windowed events · stamina · tool durability · endgame difficulty curves · story-completion-as-game-end · restart-to-rebranch CYOA · permadeath · required combat · required multiplayer · forced tragic endings · visual-novel format · skill-tree gating · ambiguous puzzles · purely procedural narrative · microtransactions · hidden/secret-locked best endings · complex chord controls · mid-game introduction of untaught core mechanics · single save slot.

### Architecture Approach (locked commitments)

1. **Exactly five autoloads, no more:** `EventBus` (signals only, zero state), `GameState` (facade over `GameStateData` Resource), `SaveManager`, `TimeService`, `Settings`. (`DialogueManager` is provided by addon.) Resist the temptation to add a sixth.
2. **Composition over inheritance.** Player and NPC both extend `CharacterBody3D` directly. Shared behavior lives in components (`StateMachineComponent`, `InteractableComponent`, `InventoryComponent`, `RelationshipComponent`, `ScheduleComponent`, `DialogueTriggerComponent`).
3. **Multi-axis relationships, not hearts.** Each NPC has `trust`, `intimacy`, `respect`, `familiarity` floats + `arc_state` string + `flags` dictionary + `topics` dictionary.
4. **State-flag loose branching, not branching trees.** All persistent choice/consequence stored as flags, counters, topics on `GameState`; dialogue checks those. Inkle's "variables, not branches" pattern.
5. **Action-driven time, NOT wall-clock.** *Strongly leaning toward* in-game time advancing only on player actions (resting, completing major events). Decision-locked-pending-prototype; flagged as open question for Phase 1.
6. **Versioned save schema from day one.** `GameStateData` Resource with `save_format_version: int`. Migrations registry. Test migrations every release.
7. **Localization from line one.** Every player-visible string is `tr("DOMAIN_SUBJECT_DETAIL")`. CSV for slice, PO before localized launch.
8. **Narrative metadata on items.** Every `Item` Resource carries optional `NarrativeMeta` (first-collected dialogue, lore entry, associated NPCs, collection milestones). The mechanism that fulfills the "things you collect have story attached" pillar.
9. **GameState mutation discipline.** All writes go through methods that emit EventBus signals. Discipline issue, not language-enforced; bake into self-review.
10. **Discrete zones, not seamless streaming.** One `.tscn` per zone; sync load with fade for slice; swap to `load_threaded_request` later as a one-function change.

**Major components:**
1. **Autoload layer** — five global services + DialogueManager.
2. **Scene layer** — Player, NPCs, Interactables, Zones, UI Root.
3. **Dialogue/narrative layer** — Dialogue Manager reads/writes through GameState mutations.
4. **Data layer** — authored content as `.tres` Resources + `.dialogue` files + `.csv` translations + `GameStateData` runtime save blob.

### Critical Pitfalls (the four killers)

1. **The "Stardew Killer" framing trap.** Never use "Stardew killer" or "Stardew but…" externally; lead with persona-gap positioning ("evolving relationships in a world that never punishes you"); protect "underserved deep cozy enjoyer" framing fiercely.
2. **Scope creep on systems-rich solo projects.** Hard cap of 7 named systems for v1; `SCOPE.md` log on every change; "buys-its-slot" rule (new system requires displacement); review monthly; bake into every `/gsd:transition`.
3. **Endgame content cliff.** *Four-engine retention strategy*: (a) state-tagged authored dialogue with no max state, (b) always 3+ active narrative threads, (c) seasonal recurrence with persistent variation across years, (d) player-driven creative goals. The "Why does the player still want to play in hour 200?" doc is written before slice systems are built.
4. **Solo dev burnout across 4–6 year horizon.** Codified sustainable pace (~25 hours/week target); mandatory rhythms (daily 4hr block, weekly day off, monthly retro, quarterly true week off); externalized feedback loop (public devlog from month 3, persona-zero playtest from week 1, ring-2 testers by month 6); pre-committed Year-3-Wall pivot tripwires; **the persona is your spouse — ritualize 15-minute playtest sessions as a renewable motivation source.**

**Tier-2 critical pitfalls** (each can cost months):
5. Vertical Slice Trap — slice debt log mandatory.
6. 3D as a beginner — heavy stylization discipline + standardized Blender→Godot pipeline + per-scene perf budget (200 draw calls, 100k vertices visible) + cap of 12–15 unique NPCs.
7. Subtle time pressure sneaking in — every system gets the time-pressure audit checklist; design discussion forbids "by [date]" / "before [event] passes" framing.
8. NPC Dialogue Rot (the 14-heart problem) — state-driven dialogue (100+ world-state combinations × small bark pool = combinatorial multiplier).
9. Branching narrative combinatorial explosion — Inkle's "variables, not branches" via Dialogue Manager's conditional system.
10. "If you build it, they will come" — Steam page goes up at slice (~month 18), not at launch. Targets: 1k by month 24, 5k by month 36, 10k+ by launch.

---

## Implications for Roadmap

### Resolving the tension between researchers

FEATURES implies 5–6 phases focused on game systems. PITFALLS implies 9+ phases including marketing/branding/community. ARCHITECTURE is system-build-order specific.

**Synthesis:** a **two-milestone structure** where Milestone 1 is "Build & Ship the Slice" (~6–8 phases of game-system work) and Milestone 2 is "Production & Launch" (marketing/community/capsule/demo phases plus content scaling). Marketing isn't ignored in M1 — Steam page launches *at slice* (~month 18), public devlog starts at month 3 — but dedicated marketing phases live in M2 where they're not competing for attention with foundation engineering.

### Suggested Milestone 1 — "Vertical Slice"

**Goal:** Ship a 1-hour polished, representative slice that proves the core thesis and seeds wishlists. Architect for full 30+ hour game; scope content to one zone + 4 NPCs.

#### Phase 1: Foundations & Vision Lock
**Rationale:** Pre-development branding and vision pillars set before any system or marketing copy. Locks the four killers' mitigations into project posture.
**Delivers:** Locked design pillars (time-pressure audit checklist, "why play at hour 200" doc, friction-vs-pressure distinction); locked stack; SCOPE.md log started; sustainable-pace cadence committed; persona-zero playtest ritual established.
**Avoids:** Pitfalls 1, 2, 3, 6, 11, 12.

#### Phase 2: Project Skeleton & Foundational Systems
**Rationale:** Architecture's nine slice-blocking foundations must exist before content production. Save system in particular built early — late = expensive.
**Delivers:** Five autoloads (with versioning baked into SaveManager); localization scaffolding; Player controller + camera + interaction probe; StateMachine pattern; Item Resource + Inventory + minimal UI; Dialogue Manager integration + GameState mutation hooks + balloon UI; save/load round-trip with one migration applied; input remap UI with KBM/controller parity. Git LFS configured. Performance budget defined.
**Implements:** Autoload layer, Player scene, foundational components.
**Avoids:** Pitfalls 18, 22, 19, 20, 21, 10.
**Research flag:** Action-driven vs wall-clock time decision must resolve here.

#### Phase 3: One-NPC Happy Path (de-risk the architecture)
**Rationale:** Single character with schedule, multi-axis relationship, dialogue eligibility cascade, gift-receiving with NarrativeMeta hooks — proves the whole stack end-to-end before scaling content.
**Delivers:** One named NPC with state-tagged dialogue library (~150 lines), schedule, multi-axis relationship state, dialogue-eligibility cascade pattern proven, narrative-metadata-on-items demonstrated end-to-end, persistent branching choice with visible ripple.
**Avoids:** Pitfalls 13, 14, 16, 5.

#### Phase 4: Zones & World Systems
**Delivers:** 3–4 zones, zone transitions with autosave, persistent zone state, visual day/night cycle decoupled from gameplay clock, NPC schedule-driven location.
**Avoids:** Pitfalls 12, 4.
**Research flag:** Zone scoping decision needs cozy-genre playtesting.

#### Phase 5: Slice Content Production (4 NPCs, crafting, decoration, companion-on-outings)
**Delivers:** 4 NPCs with full state-tagged dialogue (~600 total lines) + multi-axis relationships + arc state machines; 1 spirit/talking-animal companion who can accompany player on outings; 5–10 narrative-tied recipes; 5–10 placeable furniture items in player home with NPC-notice-on-visit; collectible-with-narrative items; soft-pinned future events in journal.
**Avoids:** Pitfalls 7, 15, 16, 17.

#### Phase 6: Slice Polish & Hardening
**Delivers:** Slice debt resolved or carried forward with rationale; 2026 accessibility baseline verified; controller/KBM parity tested; performance budget met on min-spec hardware; save migration framework hardened; first non-self playtester (ring-2) plays it.
**Avoids:** Pitfalls 5, 17, 20, 22.

#### Phase 7: Steam Page Launch + Public Demo (slice ships)
**Rationale:** Wishlists are the only metric that matters before launch. Steam page goes up at slice, not at launch.
**Delivers:** Steam page with commissioned capsule art (~$300, the highest-ROI dollar in project); slice published as a free demo synced to a Steam Next Fest; itch.io page live; Discord live; weekly wishlist tracking; first 1000 wishlist target.
**Avoids:** Pitfalls 23, 24, 26, 27, 8.

### Suggested Milestone 2 — "Production & Launch" (years 2–4+)

Detailed phasing deferred to a re-planning session at end of M1. Rough shape:

- **Phase 8: Content Scaling** — full NPC roster, procedural-template dialogue layer, more zones, full crafting recipe set, festival/event system, NPC-to-NPC gossip, full companion-on-outings for 4–6, decoration breadth, romance arcs.
- **Phase 9: Polish, Accessibility Re-Audit, Localization** — CSV → PO; pick 1–2 high-leverage languages.
- **Phase 10: Pre-Launch Marketing** — second Next Fest demo, trailer, pricing benchmarked, launch-week discount planned.
- **Phase 11: Launch + Post-Launch v1.x**.

### Phase Ordering Rationale

- **Foundations + vision together in Phase 1:** the four killers are *posture* problems, not engineering problems.
- **One-NPC happy path in Phase 3 (before zones):** the dialogue + relationships + state-flag branching + narrative-meta system bundle is the highest-leverage system in the project; prove end-to-end with one NPC before scaling content.
- **Steam page at slice (Phase 7), not at launch:** 12–18 months of wishlist building is the difference between hitting Steam's Popular Upcoming list and flopping.
- **Marketing/community phases consolidate in M2:** persona-zero feedback, public devlog (from month 3), and slice-as-demo handle community presence in M1 without dedicated phase.
- **Content scaling waits until M2:** content estimates come *from slice measurements*, not hope. End-of-M1 retro is the moment when the "1500 lines took N hours" math becomes honest.

### Research Flags

**Phases needing deeper research during planning (use `/gsd:research-phase`):**
- **Phase 1:** Action-driven time vs wall-clock — novel cozy execution; brief prototype + decision review.
- **Phase 3:** Dialogue-eligibility cascade tuning is high-leverage but no perfect cozy precedent.
- **Phase 5:** Companion-on-outings is HIGH complexity and emotionally load-bearing; dedicated research for camera/blend behavior.
- **Phase 8 (M2):** Procedural-template dialogue layer needs prototyping before content authors author against it.

**Phases with standard, well-documented patterns (research-phase optional):**
- Phase 2, 4, 6, 7 — canonical Godot 4 patterns, checklist-driven polish, well-documented marketing patterns.

---

## Critical-Path Watchlist

The 5 things that, if we get wrong, will cost months of rework or kill the project:

1. **Versioned save schema from day one.** `save_format_version: int` and migrations registry from Phase 2. Once players have saves, you cannot break them.
2. **State-driven dialogue, not level-driven.** Dialogue eligibility cascade + multi-axis relationships + state flags + arc state machines must be the foundation, not friendship-level integers. Variables, not branches.
3. **Time-pressure discipline.** Every system gets the time-pressure audit checklist before shipping. "Soft-pinned" replaces "expiring." Visual day cycle decoupled from gameplay time. **Lean: action-driven time, not wall-clock.**
4. **Localization scaffolding from line one.** `tr()` everywhere, even for English-only slice. Noto Sans CJK in font fallback. CSV → PO migration path mapped.
5. **Scope discipline at the system-content boundary.** Hard cap of 7 systems for v1. SCOPE.md log on every change. *Cut content count, never cut systems.*

---

## Open Questions to Resolve Early

1. **Time model:** action-driven vs in-game-time-as-decoration vs wall-clock. *Lean: action-driven.* Decide in Phase 1.
2. **Dialogue tooling final pick:** Dialogue Manager (architecture) vs Dialogic 2 (stack). *Lean: Dialogue Manager.* Resolve Phase 1.
3. **Save format:** Custom Resource vs `FileAccess.store_var`. *Lean: Custom Resource for dev convenience.* Document fork in slice debt log.
4. **NPC count cap for full game.** *Lean: 12 for v1, with architecture supporting 15.* Decide before slice content scoping.
5. **Stylization style guide.** Low-poly flat-shaded specifics, palette, character silhouette discipline. Decide in Phase 2.
6. **Zone count and scoping for slice.** *Lean: 3–4 zones, max ~500 props each, 200 draw calls budget.* Decide in Phase 4.
7. **What goes in slice's `companion-on-outings` demo.** One companion, what zone, what events.
8. **Year-3-Wall pivot tripwires.** Pre-commit specific milestones whose miss triggers a scope cut or pause-and-reassess. Decide in Phase 1.

---

## Non-Obvious Wins

1. **Persona-zero feedback rhythm is a unique competitive advantage.** Lead persona lives in the house; ritualize 15-min playtest sessions from week 1, not slice-completion. Renewable motivation + direction-correction no full-time team has cheaper access to.
2. **Capsule art is the highest-ROI dollar in the entire project.** A $300 commissioned capsule moves wishlist conversion from 1–2% to 8–12%. Single most valuable budget exception. Lock for Phase 7.
3. **Steam page launches at slice (~month 18), not at launch.** Most common solo-dev mistake. 12–18 months of wishlist building = difference between commercial success and flop.
4. **No AI-generated content for shipped product.** Steam has rejected games with AI assets. Copyright provenance unsettled. Persona's demographic values human-made craft. Reputation risk asymmetric.
5. **TikTok is the discovery layer; Discord is the retention layer.** Cozy demographic disproportionately benefits from short-form video. Discord doesn't need to be big to matter (5 advocates defending in early reviews).
6. **Narrative-metadata on items is the cheapest depth multiplier.** Every `Item` carries `NarrativeMeta`. Cost: trivial. Payoff: a top-3 persona love. Bake in from Phase 2.
7. **State-tagged dialogue scales combinatorially with linear authoring.** 6 base barks × 100 world-state combinations = 600 effective lines for the cost of 6. The answer to the endgame cliff.
8. **Public devlog from month 3 is part of the deliverable.** Forces articulation; surfaces hidden assumptions; externalizes feedback loop; harvests motivational energy across the multi-year horizon.

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Persona | **HIGH** | Unusually rigorous corpus. Lead persona available for week-1+ playtest. Pattern strength across 18+ games is striking. |
| Stack | **HIGH** | Engine, language, art pipeline, version control, distribution all verified against official docs and 2026-current sources. Only dialogue tooling is MEDIUM (Dialogue Manager production-ready; Dialogic 2 alpha). |
| Features | **MEDIUM-HIGH** | Genre conventions well-documented; differentiator-tier features draw on cross-genre extrapolation and are flagged as needing slice-stage iteration. |
| Architecture | **MEDIUM-HIGH** | Godot 4 patterns are HIGH; cozy-genre-specific synthesis (multi-axis relationships, state-flag branching, action-driven time, dialogue eligibility cascade) is MEDIUM and will need iteration during slice. |
| Pitfalls | **HIGH** | All 27 verified against post-mortems, dev blogs, shipped-game evidence, Godot migration docs. |

**Overall confidence:** **HIGH** for "should we build this and how." **MEDIUM-HIGH** for "exact phase ordering and time estimates" — slice metrics will inform M2 re-planning honestly.

### Gaps to Address

- **Action-driven vs wall-clock time decision (Phase 1).** Single most architecturally consequential open question.
- **Final dialogue tooling pick (Phase 1).** Architecture says Dialogue Manager; stack defaulted to Dialogic 2. Architecture rationale wins.
- **NPC count cap for full game (before Phase 5).**
- **Slice content scoping (before Phase 4–5).** Which 4 NPCs, zone, recipes, companion. Resolve based on persona-zero playtest signal in Phase 3.
- **Pricing benchmark (Phase 7+).** Five-to-ten cozy life sims at slice ship.
- **Year-3-Wall pivot tripwires (Phase 1).** Specific miss-triggers must be pre-committed.
- **Music production path decision (Phase 2 or 5).** Self-author with LMMS/Bosca → contract composer post-slice with wishlist revenue.

---

*Research completed: 2026-05-09*
*Ready for roadmap: yes*
