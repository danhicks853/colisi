# Feature Research

**Domain:** 3D narrative-driven cozy life sim with companion-rich gameplay
**Researched:** 2026-05-09
**Confidence:** MEDIUM-HIGH (genre conventions are well-documented; differentiator-tier features draw on cross-genre extrapolation from BG3 / Disco Elysium and are flagged accordingly)

---

## Reading Guide

This document is the feature landscape for the project. The audience is the requirements author and roadmap planner. Three-layer structure:

1. **Table stakes** — non-negotiable for a 3D cozy life sim in 2026. Audience that bounces if these are missing: the broad cozy-game demographic. *Persona zero will also bounce.*
2. **Differentiators** — features that make this product specifically work for the underserved "deep cozy enjoyer" demographic identified in PERSONA.md. These are where we compete.
3. **Anti-features** — features that "every cozy game has" or "every life sim has" that we will deliberately NOT build, because PERSONA.md tells us they will drive our audience away.

Complexity ratings are calibrated for **solo dev, beginner, Godot 4 + Blender, multi-year horizon.** They are conservative — assume "looks easy" usually masks 2–4 weeks of work for a beginner.

- LOW = days to a couple weeks
- MEDIUM = weeks to ~2 months
- HIGH = 2–6 months of focused work
- VERY HIGH = a "tentpole feature" that anchors a phase or milestone (3–12 months)

---

## Feature Landscape

### Table Stakes (Users Expect These)

Missing any of these and the cozy demographic bounces in the first hour. These are not differentiators — they are the cost of admission to the genre.

#### Core gameplay

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 3D third-person character controller (walk, run, jump-or-traversal, interact prompt) | Persona explicitly excluded VN format; world must be embodied. Comparable: Coral Island, Palia, Sandrock. | MEDIUM | Godot 4 has solid `CharacterBody3D` examples. Beginner risk: getting feel right takes iteration. |
| Single playable avatar with name, basic appearance customization | Identity / "this is me" anchor. Comparable: every life sim. | MEDIUM | Even a small set of hair / clothing / skin tone options is multiple weeks of UI + asset work. Don't underscope. |
| NPC roster with distinct visual identity, name, voice/portrait | Comparable: Stardew, Sandrock, Palia. Without this, NPCs feel interchangeable. | HIGH | Solo-dev cost dominated by art. 8–12 NPCs is a realistic vertical-slice cap; full game probably 20–30. |
| Dialogue system (branching, speaker-tagged, advance-with-input) | Genre baseline. Comparable: Stardew (low-end), Sandrock (mid), BG3 (high). | MEDIUM | Use a data-driven approach (Ink, Yarn Spinner, or Godot Dialogic plugin) — do NOT hand-roll dialogue trees in code. |
| Day/night visual cycle (purely cosmetic — see Anti-Features for the time-pressure variant) | Cozy genre expects light/dark world states; persona's anti is the *clock-as-pressure*, not the visual cycle itself. | LOW-MEDIUM | Cheap with Godot's WorldEnvironment + DirectionalLight3D. The discipline is decoupling visual time from any gameplay clock. |
| Seasonal world variation (spring/summer/fall/winter visuals) | Cozy / life-sim genre staple. Animal Crossing, Stardew, Cozy Grove. Without it, world feels static. | MEDIUM-HIGH | Seasonal terrain shaders + per-season decorations + ambient audio. Tractable if all four seasons share core meshes and only swap materials/decorations. |
| Save / load system with autosave | Genre baseline; persona has low patience for losing progress. | MEDIUM | See "Save System" deep-dive below. |
| Inventory system (stack, sort, equip/use) | Crafting and collection require it. | MEDIUM | Data-driven item registry from day one. Refactoring inventory mid-project is brutal. |
| Crafting system (recipes, ingredients, output) | Persona named crafting in 5+ games she loves. Genre baseline. | MEDIUM-HIGH | See "Crafting" deep-dive below. |
| Resource gathering / collection (forage, fish, dig, harvest, etc.) | Persona explicitly loves "going out and collecting things." Genre baseline. | MEDIUM | Tractable; depth comes from item variety + narrative attachment, not from complex mechanics. |
| Player housing / personal space they can decorate | Sims, Animal Crossing, Stardew, Sandrock — universal. Persona loves "control / building / expression." | HIGH | Furniture placement, rotation, snapping, layering. See "Decoration" deep-dive. |
| Settings menu with audio/video/controls | Baseline expectation across all games. | LOW-MEDIUM | Godot has good defaults; needs polish pass. |
| Pause menu (pause-from-anywhere) | Cozy genre — persona wants to step away mid-conversation, mid-action, mid-decoration without losing state. | LOW | Critical for the "no time pressure" promise. Must NOT advance world while paused. |
| Tutorial / onboarding for core systems | Persona explicitly named not understanding controls as the reason she quit Travelers Rest, Sunhaven. | MEDIUM | Diegetic / spaced-introduction tutorial. NOT a wall of tooltips. |

#### UI / accessibility / polish (table stakes in 2026)

This is a *2026 industry baseline*, not a 2014 one. Cozy demographic skews to laptop / accessibility-needs players. Missing these is a real bounce risk.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| UI text scaling (≥125%, ≥150%) | WCAG-aligned baseline; older players in cozy demographic | LOW-MEDIUM | Build font-size into UI theme system from day one — retrofitting is expensive. |
| Subtitles on (default) for any voiced/audio content | Baseline 2026 accessibility. Even unvoiced cozy games caption ambient sound. | LOW | If we go full text-only (no VO), this is partly free. |
| Colorblind-friendly palette + non-color cues for any UI signals | Baseline accessibility. Stardew, Hades, Chicory all do this. | LOW | Discipline issue more than complexity issue: never gate info on color alone. |
| Control remapping (keyboard + gamepad) | Baseline. Persona has low patience for finicky controls — ability to remap to comfort matters. | LOW-MEDIUM | Godot 4 has built-in InputMap remapping; the UI for it is the work. |
| Gamepad-first navigable UI (every menu) | Cozy demographic plays on Steam Deck and couch. Mouse-only UIs lose 30%+ of audience. | MEDIUM | Expensive if retrofitted late. Build menus with `Control` focus chains from day one. |
| Content warning / intro disclaimer | 2026 baseline, especially with grief/loss themes possible (spirits, witches). | LOW | Lost Records: Bloom & Rage / Spiritfarer-style upfront warning screen. |
| Adjustable text speed + skip text | Cozy demographic includes both fast readers and slow readers. | LOW | Standard dialogue system feature. |
| Mute individual audio channels (music, SFX, ambient, dialogue) | 2026 baseline. | LOW | Buses in Godot's audio system handle this trivially. |

#### "It feels like a real game" polish

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Main menu with new game / continue / settings / quit | Baseline. | LOW | |
| Splash screen / intro | Baseline. | LOW | |
| Credits screen | Baseline; meaningful for solo dev marketing. | LOW | |
| Diegetic ambient audio (footsteps, birds, water, wind) | Massive cozy-feel multiplier. Cheap to add, devastating to omit. | LOW | CC0 audio packs cover most of this. |
| Diegetic music (calm, layered, looping; varies by area / time / activity) | Genre-defining — Stardew, Cozy Grove, Spiritfarer all anchored on soundtrack. | MEDIUM | Music is one of the highest-leverage cozy investments; consider commissioning early or using a generative system. |
| Photo mode / screenshot button | 2026 cozy expectation. Players share screenshots = free marketing. | LOW-MEDIUM | Even a simple "hide HUD" toggle covers 80% of the value. |

---

### Differentiators (Competitive Advantage)

This is where the product wins. Each item below maps directly to a `PERSONA.md` love or hate that current market hits don't address well.

#### Tier 1: Differentiators that *must* work or the product fails

These are the core thesis. If these don't land, the project doesn't have a reason to exist. Listed in order of strategic priority.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Evolving NPC dialogue system** (state-aware, history-aware, never devolves to "robotic loop") | Solves Stardew's #1 critique: NPCs become repetitive after heart events maxed. Persona's #1 game; #1 retention driver. | VERY HIGH | See "Evolving NPC Dialogue" deep-dive below. This is the tentpole. |
| **Persistent branching choices that ripple forward** (no restart-to-rebranch CYOA) | Solves Beacon Pines bounce. Mirrors BG3's strength. Persona's "decisions impact gameplay" love. | HIGH | Save-state schema is the long-pole here — if you don't design the persistence model up front, every later choice retroactively breaks things. |
| **No real-time-pressure mechanics anywhere in core loop** | Removes #1 hate (cited in Stardew, Winter Borough). Single largest market gap. | MEDIUM (mostly discipline, not code) | The cost is in design discipline + replacing the structuring role time-pressure normally plays. See "Pacing without time pressure" deep-dive. |
| **Power curve that plateaus, never spikes** (no endgame difficulty wall) | Removes #2 hate (BG3, Fallout, Hogwarts, Spiritfarer). | MEDIUM | This is a *systems-design discipline* feature, not a feature you build. Combat (if any) caps in early-mid. Skill checks always have non-skill-gated alternatives. |
| **Meaningful post-main-story content loop** (relationships continue evolving, seasonal events, player-driven goals) | Solves the "endgame problem" — the central design challenge per PROJECT.md. | VERY HIGH | See "Endgame Problem" deep-dive below. |
| **Companion-style NPC arc system** (BG3-inspired but cozy-tuned: approval, personal questlines, persistent relationship state) | Persona's stated dream cross. Differentiates from Stardew's flat heart-level model. | HIGH | See "Companion Arcs" deep-dive below. |
| **Always-clear puzzle telegraphing** (every puzzle has a discoverable in-fiction hint set) | Removes Strange Horticulture / Antiquities frustration. Persona named this twice. | MEDIUM | Discipline + design rule, not a single feature. See "Puzzle Telegraphing" deep-dive. |
| **Crafting tied to narrative** (recipes are story rewards; ingredients have lore; outputs unlock conversations / arcs) | Persona's #1 explicit feature love after relationships. Differentiates from "crafting as resource sink". | HIGH | The system isn't novel; the *narrative integration* is. Recipe registry needs a dialogue/event hook layer. |

#### Tier 2: Differentiators that strengthen the thesis

These are not the core thesis, but each one reinforces it and creates a "this game gets me" moment. Cut any of these and the game still works; cut all of them and it feels less special.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Schedule-driven NPC behavior** (NPCs have realistic daily routines visible in world) | Makes evolving NPCs feel alive (Sandrock's strength). Underpins emergent encounters. | MEDIUM-HIGH | Stardew has this already; we need the same baseline + the dialogue layer above to capitalize. |
| **NPC-to-NPC relationships visible to player** (gossip, rivalries, friendships between NPCs that the player can influence) | The Sims' "affecting others' happiness" love translated to narrative-cozy. BG3 companions also do this. | HIGH | Adds enormous depth-perception without adding many systems. Sandrock partially does this; we'd push it further. |
| **Diegetic, "soft" goals system** (instead of timed quests: "next time you see X, you might want to bring Y") | Replaces time pressure with self-paced direction. | MEDIUM | UI tells player *what's possible* without telling them *when it expires*. |
| **Decoration that NPCs notice and react to** (companions comment on your house; bring it up later in dialogue) | Closes the gap between "decoration as expression" and "decoration as social signal." Sims has this; cozy peers don't. | MEDIUM-HIGH | High emotional ROI per unit of dialogue authored. |
| **Seasonal / festival events that recur and evolve** (year 2's festival differs from year 1's based on choices) | Solves "infinite repetition" problem of Stardew festivals. | HIGH | Branches the festival event scripts based on persistent state. |
| **A spirit / talking-animal companion** (a non-human party member the player can take exploring) | Setting differentiator (whimsical fantasy). "Less alone" feeling persona named in BG3. Iconic marketing hook. | HIGH | See "Setting differentiation" — not just an NPC, but a follow-the-player mechanic. |
| **Letters / journals / documents the player collects with NPC backstory** | Disco Elysium / Spiritfarer style — passive narrative depth without dialogue cost. | LOW-MEDIUM | High ratio of narrative depth to author-cost. |
| **Photo album / scrapbook (player-curated, in-game)** | Memory capture loop. Spiritfarer's hugs / Animal Crossing's photos. Drives sentimental retention. | MEDIUM | Photo mode + persistent photo storage + UI to flip through. |
| **Multi-island / multi-region world structure** (small interconnected zones, no giant open world) | Solo-dev-friendly scoping; also each zone can have its own narrative tone (Spiritfarer ferry model). | MEDIUM | Architectural decision more than feature. |

#### Tier 3: Differentiators worth keeping in mind for v1.x / v2

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Romance arcs with persistent partner dialogue post-commitment | Solves Stardew's "post-marriage dialogue dies" problem | HIGH | High dialogue-author cost; defer until base relationship system proven. |
| New Game+ that carries over knowledge (not items) | Replayability without reset | MEDIUM | Cheap relative to value; consider for v1.x. |
| "Memory Lane" — replay key cutscenes from journal | Sentimental retention; helps players who took a 6-month break re-orient | LOW | Don't underestimate the re-orient value for cozy games specifically. |
| Procedural minor NPCs (visitors, traders) layered on authored core NPCs | Depth without authoring cost; Animal Crossing Switch 2's "Deep Memory" approach | HIGH | Risk of feeling shallow; only do this if core authored NPCs are already excellent. |

---

### Anti-Features (Commonly Requested, Often Problematic)

Each of these is in the cozy / life sim genre playbook. Each is **actively excluded** because PERSONA.md tells us it kills the product.

| Anti-Feature | Why Requested | Why Problematic for THIS Product | Alternative |
|--------------|---------------|----------------------------------|-------------|
| **Day-clock with bedtime / energy depletion** (Stardew, Sandrock, Coral Island) | Genre baseline; structures pacing. | Persona's #1 hate, cited in Stardew (1000+ hr) and Winter Borough. The single biggest market gap we're addressing. | See "Pacing without time pressure" deep-dive: visual day cycle for ambience + activity-based "willingness/interest" + narrative pacing replace the day clock entirely. |
| **Missable events / time-windowed quests** (Stardew festivals if missed; Persona-series ranks) | "Drives players to play regularly." | Persona named this for Stardew. Punishes life-disruption (sick day, vacation). Cozy demographic has unpredictable sessions. | All events recur; arcs wait for player; "soft" reminders, never "expired" notices. |
| **Stamina / energy bar that depletes per action** | Genre baseline since Harvest Moon. | Implicit time pressure. "The game is telling me to stop" violates player-autonomy promise. | No stamina cap. Animations and pacing can naturally rate-limit; tools never break or run out. |
| **Tool durability / decay** | Sandbox / survival staple. | Adds chore-management. Persona explicitly wants "control / expression" not maintenance. | Tools are permanent; upgrades are narrative milestones, not consumables. |
| **Endgame difficulty curve** (combat ramps, boss fights at level cap) | RPG / action staple. | Persona bounced off BG3, Fallout, Hogwarts, Spiritfarer for this. | Power curve plateaus by mid-game; if combat exists at all, late-game encounters reward narrative resolution, not skill checks. |
| **Story-completion = game-end** (credits roll, no further content) | Linear narrative game default. | Persona named Little Witch in the Woods, Paperbark for this. PROJECT.md identifies this as the central design challenge. | Endgame is *new arcs continuing to unfold*, seasonal events, NPC evolution. See deep-dive. |
| **Restart-to-rebranch CYOA (Beacon Pines)** | Saves authoring cost. | Persona explicitly bounced. | Branches persist forward. Save scumming a single decision is fine; restart-to-rebranch is excluded. |
| **Permadeath / save-deletion / iron-man modes** | Roguelite / hardcore appeal. | Cozy demographic actively avoids. | Multiple save slots; autosave + manual save; "are you sure?" on overwrite. |
| **Required combat** | RPG genre staple; persona loves BG3 (which has combat). | Persona's *love* for BG3 was companions + decisions, not combat (and she bounced off the difficulty wall). | Combat may exist as a small optional or narrative-only system; never gates progression; always has a non-combat path. |
| **Required multiplayer / co-op** | Palia, Loftia trend. | Persona explicitly quit Palia for this. | Single-player core. Async social features (e.g., postcards from the dev / share-codes for builds) are fine; required real-time multiplayer is not. |
| **Forced tragic-no-matter-what ending** | Literary "art" appeal. | Persona explicitly cited The Stillness of the Wind. | Bittersweet OK; "no win path" excluded. Every major arc has at least one positive resolution available. |
| **Visual-novel format / static portraits + text** | Lower production cost. | Persona explicitly quit Coffee Talk. | 3D embodied world; dialogue happens in-scene with animated characters. |
| **Skill-tree gating that locks content behind investment** (Fallout-style) | RPG depth signal. | Persona named "I don't feel like I've built up the skills" as the BG3 / Fallout bounce reason. | Progression is access (unlocked locations, recipes, relationships), not stat checks. |
| **Ambiguous puzzles / "deduce from minimal cues"** (Strange Horticulture, Strange Antiquities) | Hardcore puzzle audience. | Persona named twice as a quit reason. | Every puzzle has a discoverable in-fiction hint. See "Puzzle Telegraphing" deep-dive. |
| **Random or procedural-only narrative content** | Replay value at low cost. | Persona's love is *characters*, which require authored writing. Procedural feels hollow. | Authored core arcs; procedural only for *flavor* layered on top, never *substance*. |
| **Microtransactions / DLC paywalls for narrative** | Revenue model. | Cozy demographic is sensitive to feeling gouged. Wrong fit for one-time purchase positioning. | Single one-time-purchase price; future DLC OK only as substantial new content. |
| **Hidden / secret-locked best endings** (Persona-style "you didn't know to talk to NPC X on day 47") | Replay incentive. | Punishes the persona's playstyle. | All paths discoverable from in-game cues; player journal surfaces relevant pending decisions. |
| **Complex chord-button input** (e.g., Sims' "shift+ctrl+drag" interactions, Travelers Rest's combos) | Power-user shortcut. | Persona named finicky controls in Sims, Sunhaven, Travelers Rest. | Single-button or two-button context-sensitive interactions; always discoverable from on-screen prompts. |
| **Mid-game introduction of a new core mechanic that wasn't taught** | Adds variety. | Persona explicitly stated "difficulty learning new systems mid-game." | Any new mechanic post-tutorial gets its own mini-tutorial moment, *every time*. |
| **Single save slot / can't have parallel playthroughs** (Animal Crossing classic limitation) | Console-era constraint, no modern reason. | Cozy players experiment with builds. | Multiple slots; cloud-save where Steam supports it. |

---

## Deep-Dives on Specific Design Questions

### 1. The Endgame Problem — "What do I do when the story ends?"

**The persona's words frame the design problem:** *"When you get bored with it, what do you do?"* This is named explicitly for Bear & Breakfast, Spirittea, RCT, Sims, Little Witch, Paperbark.

**Patterns that work (evidence):**

| Pattern | Game | What we take |
|---------|------|--------------|
| Real-world clock + daily ritual | Animal Crossing, Cozy Grove | Daily check-in shape — but DON'T copy AC's "punish if you don't show up" patterns. Take the rhythm, leave the pressure. |
| Indefinitely-evolving relationships | Stardew (partial — fails after hearts max) | What persona herself did for 1000 hr. Solve the dialogue-loop ceiling Stardew hits. |
| Multiple intertwined narrative threads | BG3, Disco Elysium | When one arc ends, others continue. Always 3+ active threads. |
| Player-driven creative goals | Sims, Tiny Glade, RCT | Decoration / building / collection that has no ceiling. Combine with NPC reactivity for emotional ROI. |
| Seasonal / yearly recurring events that *evolve* | (no perfect example — Stardew repeats identically) | Year 2 festival differs from year 1 based on persistent state. Open design space. |
| Hidden depth / Easter eggs / late-revealing zones | Stardew Ginger Island, Spiritfarer secrets | Reserve content gated by total-playtime, not story progression. |
| Collection completionism with narrative attachment | Spiritfarer, Spirittea, Cozy Grove | Persona explicitly loves "going out and collecting things with story attached." |

**Patterns that DON'T work:**

| Anti-pattern | Game | Failure mode |
|--------------|------|--------------|
| Story arc as game arc | Little Witch in the Woods, Paperbark | Story over → motivation gone. |
| Repeat-the-same-festival forever | Stardew | Eventually feels like a loop. |
| Endgame difficulty mountain | BG3, Spiritfarer | Persona bounces. |
| Achievement chase as endgame | many | Cozy demographic doesn't engage with extrinsic-only goals. |
| New Game+ as "the answer" | many | Doesn't solve the problem; just delays it one playthrough. |

**Recommended endgame design (synthesis):**

Stack four overlapping retention engines so no single one carrying the whole load creates the failure mode:

1. **NPC arcs that don't have a "max" state** — characters keep generating new content drawn from a state-aware authored library (see Evolving Dialogue). Even after every story beat, conversations reflect current world state.
2. **Always 3+ active narrative threads** — when one arc resolves, two are still live and a new one has likely opened. Inspired by BG3's overlapping companion quests.
3. **Seasonal recurrence with persistent variation** — each in-game year layers state on the previous. Year 5's spring festival is different from year 1's because the cast, relationships, and town are different.
4. **Player-driven creative goals** — building, decorating, collecting, with explicit NPC reactivity so creative work feeds the relationship loop.

This is a *VERY HIGH* complexity bundle. It's the central design challenge of the project per PROJECT.md and should anchor a roadmap phase.

---

### 2. Evolving NPC Dialogue — "Beyond heart-level loops"

**The Stardew failure mode (verified):** NPCs have 2–3 daily lines they cycle through; once heart events are maxed, dialogue settles into a robotic loop. Mods like "Canon-Friendly Dialogue Expansion" (~4200 lines added) are the player's workaround.

**The taxonomy of solutions:**

| Approach | Example | Strengths | Weaknesses | Solo-dev fit |
|----------|---------|-----------|------------|--------------|
| **Pure heart-level** (line set per heart tier) | Stardew | Simple to author; predictable | Repetitive ceiling; doesn't react to world | Low cost, low payoff. Avoid as primary. |
| **State-tagged authored library** (lines tagged with required world states; pick most-specific match) | Disco Elysium, BG3 | Feels reactive; high authored quality; bounded scope | Authoring cost scales with state space | **Recommended primary approach for this project.** |
| **Schedule + location triggers** (NPCs have lines tied to time/place) | Sandrock, Stardew (partial) | Cheap depth; sells "alive world" | Doesn't deepen relationship | **Recommended secondary layer.** |
| **Event-driven cutscenes** (heart events / story beats) | Stardew, Sandrock | High emotional impact when triggered | Finite; player runs out | **Recommended tertiary layer for milestones.** |
| **NPC-to-NPC gossip propagation** (NPCs talk about other NPCs based on global state) | Sandrock, Sims, BG3 | Massive depth-perception per line authored | Requires global state model | **Recommended depth multiplier.** |
| **Procedural / AI-generated** (Inzoi's NVIDIA SLM, Petit Planet's AI barista) | Inzoi, Petit Planet | Theoretically infinite | Off-tone risk; tech risk; ethical questions; persona's "feels like a real character" love is at stake | **Avoid** for v1. Authored content is the brand promise. |
| **Hybrid: authored fragments + procedural assembly** ("how are you" + "I'm thinking about [recent event]") | Animal Crossing Switch 2 "Deep Memory" | Stretches authored content via state-driven assembly | Risks bland-Mad-Libs feel if not careful | **Worth prototyping** in vertical slice as differentiator if budget allows. |

**Recommended dialogue architecture:**

```
NPC Dialogue Library
├── State-tagged authored line pool (PRIMARY)
│   ├── tags: { time_of_day, season, weather, recent_event,
│   │           player_relationship_tier, last_gift_type,
│   │           known_secrets, npc_mood_state, ... }
│   └── pick most-specific match; tie-break by least-recently-used
├── Schedule-locked vignettes (SECONDARY — at the bakery on Tuesday morning)
├── Event-driven cutscenes (TERTIARY — heart-event analogue, milestone moments)
└── NPC-to-NPC gossip layer (DEPTH MULTIPLIER — NPCs reference world events involving other NPCs)
```

**Authoring scale realism:** ~150–250 tagged lines per major NPC for a feeling of richness. With 12 major NPCs at vertical slice, that's 2,000–3,000 tagged lines authored over time. Plan tooling to support this from day one — spreadsheet-driven authoring with hot-reload is the indie norm.

**Confidence:** MEDIUM — solutions are well-documented in the Disco Elysium / BG3 / Sandrock space; the cozy-genre-specific application is more extrapolation than precedent.

---

### 3. Pacing Without Time Pressure — "What replaces the day clock?"

The day clock does several real jobs in cozy games:
1. **Structures the session** — gives the player a natural stopping point ("end of day → save → bed").
2. **Rate-limits content** — prevents binge-completing all dialogue / events.
3. **Creates anticipation** — "I can't wait until tomorrow when X."
4. **Forces choice** — limited time per day means picking activities.

If we remove the clock, we have to replace each of these jobs with something the persona doesn't hate:

| Job | Day-clock solution | Cozy-without-pressure replacement |
|-----|-------------------|-----------------------------------|
| Session structure | Bedtime | **Visual day cycle (cosmetic only) + manual rest action that advances time.** Player decides when to "end the day." |
| Content rate-limiting | Limited daytime hours | **Activity-based rate-limiting**: NPCs only have certain new conversations after the player completes specific *content events*, not after specific *time windows*. |
| Anticipation | "Tomorrow's the festival" | **Soft-pinned future events** in the journal: "When you visit X, Y will be ready" — never expires. |
| Forced choice | Can't do everything in one day | **No forced choice**. Player can do everything; *order* matters because of relationship state, not because of the clock. |

**Key principles:**

1. **Visual time is decoupled from gameplay time.** The world has a day cycle (sun moves, NPCs sleep at night) for ambience and schedule-driven NPC behavior. Player time-of-day advances **only when the player rests** (manual action) or **completes a major event** (e.g., a dinner cutscene fast-forwards to evening).
2. **Pause-anywhere works.** Player can stop a conversation, decorate, sleep at the keyboard for two days IRL, return — world is exactly as left.
3. **No expiring content.** Every event recurs or persists. NPC at festival? They're at festival until the player triggers the next thing.
4. **"Willingness" replaces stamina.** If we want to rate-limit player activity at all (we may not), use a *narrative* gate ("you're tired — go home and rest, or push through and a small bad-feeling thing happens"), never a hard one. Likely we just don't gate.
5. **Pacing comes from authored sequencing, not clocks.** The narrative team controls when arcs unlock; arcs unlock based on prior arcs and player actions, never based on day count.

**Cozy Grove counterexample to study:** Cozy Grove uses a real-world clock. Persona did not name CG in her loved-or-bounced list, but the design pattern is relevant. The strength: daily ritual without forcing same-session play. The weakness: limits how much a player can engage when they want to engage. **We should not adopt the real-world clock** because it still creates "missed day" feeling for vacation / illness players.

**Confidence:** HIGH on principles; MEDIUM on the specific replacement design — this is design space we'll need to iterate on in vertical slice.

---

### 4. Companion Arcs (BG3-Style) Translated to Cozy

BG3's companion system has multiple loadbearing pieces:

| BG3 mechanic | What it does | Cozy translation |
|--------------|--------------|------------------|
| Approval rating per companion (-50 to +50ish) | Persistent metric of how a companion feels about player | **KEEP** — but rename to "trust" or "warmth" and don't surface a number; surface descriptors. Persona dislikes finicky numerical optimization. |
| Approval-driven dialogue branches | Companions speak differently as relationship grows | **KEEP** — core differentiator. |
| Personal questline per companion | Each has their own arc the player can engage with | **KEEP** — core differentiator. Probably 3–5 milestone events per companion in v1. |
| Companion approval or disapproval expressed reactively to player choices | Real-time NPC reaction to player decisions | **KEEP** — but cozy-tune. Disapproval is a furrowed brow / a "we should talk later" line, not "they leave the party forever." |
| Companion leaves party at -50 | Hard fail-state | **EXCLUDE** — persona's "punishing" hate. Replace with: companion may temporarily distance themselves; always recoverable. |
| Inter-companion dynamics (Astarion vs. Wyll) | Companions react to each other | **KEEP** — see "NPC-to-NPC relationships visible to player" in Tier 2 differentiators. |
| Romance arcs gated by approval | Romance-as-progression | **KEEP** — but gentler gating; no "you triggered the wrong dialogue, romance locked." |
| Companions in active combat party | Combat coordination | **EXCLUDE** — no required combat. |
| Companions traveling with player in world | Physical presence as exploration buddy | **PARTIAL KEEP** — a lighter version: a chosen companion can accompany the player on certain expeditions, with reactive dialogue triggered by what they encounter. Solo-dev expensive but very high "less alone" emotional payoff. |

**The "less alone" feeling persona named is the load-bearing emotion.** Translating this from BG3's combat-party model to cozy is roughly:

- Player has a "companion" they can choose to invite along on outings (collecting trips, festival visits, errand runs).
- Companion has react-lines triggered by environment + events while accompanying.
- Players' decisions while accompanied feed back to that companion's arc state.
- Different companions react differently to the same things — Stardew has a *little* of this with gift preferences; we go much further: companion A loves quiet, companion B narrates everything, companion C gets emotional at the gravesite.

**Solo-dev complexity reality check:** Companion-on-outings is HIGH complexity (camera, AI navigation, dialogue triggering, animation). Vertical slice could ship with one companion who can go on outings. Full game scales to 4–6 outing-capable companions out of 12+ total NPCs.

**Confidence:** HIGH (BG3 mechanics well-documented), MEDIUM on cozy translation fidelity (untested combination).

---

### 5. Crafting — Depth Without Grind

Persona named crafting in 5+ games. Universal love. The risk is that *crafting* turns into *grinding for crafting materials*, which becomes the time-sink the persona hates.

**Patterns that work:**

| Pattern | Source | Application |
|---------|--------|-------------|
| Recipes are story rewards | Spiritfarer (each spirit gives a recipe), Disco Elysium (thoughts unlock options) | Recipes are unlocked through narrative beats, not RNG drops or stat checks. |
| Ingredients have lore attached | Spiritfarer, Strange Antiquities (persona named both for crafting love) | Each ingredient has a description, a way to find it, and ideally a story beat associated with discovery. |
| Crafted items unlock dialogue | (no perfect cozy precedent) | Bringing a specific crafted item to a specific NPC unlocks new conversation. **Differentiator.** |
| No tool durability, no stamina | Tiny Glade, Cozy Grove | Tools are permanent; gathering is unlimited per session. |
| Smart crafting stations / batch crafting | Sandrock | Quality-of-life feature; "make 10" button etc. |
| Customization layer over base recipe | Hokko Life (color/material per part) | Extends value of single recipe; cheap content multiplier. |

**Recommended crafting-system shape:**

1. **Two crafting tracks**: practical (food, tools, useful gear) + decorative (furniture, ornaments, gifts). Both progress in tandem.
2. **Recipes acquired through narrative**, not crafting-skill-XP. (Persona's "skill-buildup" hate maps here.)
3. **Materials gathered through exploration**, with each material having a 1–2 paragraph in-game description and at least one NPC who has something to say about it.
4. **Crafted items can be**: used, gifted (NPC reaction), placed in home (NPC notice on visit), "shown" to a specific NPC for dialogue unlock.
5. **Quality / variant system** for visual variety without progression complexity. Example: a crafted "lantern" comes out with one of three lampshade variants; the variant is for player taste, not for stat differences.
6. **No durability, no consumed-tool friction.**

**Complexity:** HIGH because of the narrative-integration layer (the crafting system itself is MEDIUM; the dialogue-trigger plumbing is what tips it).

---

### 6. Puzzle Telegraphing — "Solutions discoverable, never ambiguous"

Persona named Strange Horticulture and Strange Antiquities both for ambiguous-puzzle bounce. Verified critique of Strange Horticulture: tearing on flower cards too subtle, drawer handle blends with background.

**Design rule:** Every puzzle has a discoverable in-fiction hint set sufficient to solve it. The player may need to *find* the hints, but the hints exist.

**Telegraphing patterns that work:**

| Pattern | Example | When to use |
|---------|---------|-------------|
| Visual highlight on interactable | Many cozy games | Always — every interactable should have a hover/proximity affordance. |
| Hint NPC ("Have you tried...?") | Stardew help wanted | When player is genuinely stuck — track session-level stuck-detection. |
| Optional hint button | A Short Hike, modern adventure | Always available; never required. |
| Telegraph by elimination | Good escape rooms | Show all puzzle elements; player learns by trying. Cheap to implement. |
| Diegetic journal that records observed clues | Disco Elysium, Outer Wilds | Player can review what they've found. Critical for cozy demographic that may take long breaks. |
| Multiple solution paths | Disco Elysium ("you can fail this skill check and still progress") | Fallback for stuck players. |

**Anti-patterns to avoid:**

- Pixel-hunting / "the solution is hidden in this 1px area"
- "Use an obscure item from earlier in a non-obvious place" without telegraph
- Time-based puzzle solutions (the hate compounds)
- Solutions that require external research

**Recommended rule for the project:** Every puzzle is playtested with the question *"can a player solve this from in-game cues alone, in under 10 minutes of trying?"* — if no, add telegraphing.

---

### 7. Save System

**Recommendation:** Multiple save slots + autosave + manual save anywhere.

| Pattern | Source | Adopt? |
|---------|--------|--------|
| End-of-day autosave only (Stardew) | Stardew | **NO.** Persona hates losing time. |
| Single save slot (Animal Crossing: NH classic) | AC | **NO.** Multiple save slots are 2026 baseline expectation. |
| Manual save + autosave (Sandrock, BG3, most modern RPGs) | Many | **YES.** |
| Save anywhere | BG3 | **YES.** |
| Cloud save via Steam | Steam baseline | **YES.** Steam Cloud just works if you store saves in the right path. |
| Backup save rotation (last N autosaves preserved) | BG3 | **YES.** Cheap insurance against corruption / regret. |

**Specific recommendation:**
- 5+ named save slots
- Autosave on major events (entering new area, finishing a cutscene, completing an arc beat) — keep 3 rolling autosaves
- Manual save at any moment
- "Continue" on main menu loads most recent save
- Save metadata visible (date, in-game day, location, screenshot)

**Complexity:** MEDIUM. Save schema design is the long-pole risk (if not designed for forward-compatibility, post-launch patches break old saves). Plan for versioned save format from day one.

---

### 8. Decoration / Customization Depth

Persona's "control / building / expression" love + "having control" Sims love map directly to a robust decoration system.

**Recommended decoration features:**

- Furniture placement with snapping + free placement modes
- Rotation in 90° steps (and free rotate as accessibility option)
- Wall-mount, floor-place, ceiling-place layers (Animal Crossing baseline)
- Color / material variants on craftable items (Hokko Life-style)
- Indoor + outdoor decoration
- "Move whole room" tool (move multiple items at once)
- NPC reactions on visit (differentiator — Sims has it, AC and Stardew do not)
- Photo mode / screenshot share (organic marketing engine)

**Complexity:** HIGH overall, but tractable to build in layers. Start with furniture-place-and-rotate in vertical slice; add layers, snapping, NPC reactions in subsequent phases.

**Solo-dev pitfall:** Decoration systems eat asset-production time. Plan a small, expandable furniture set (~30 items in vertical slice; ~150 in v1) with strong color/material variant support to multiply visual variety without authoring more meshes.

---

## Feature Dependencies

```
[Save System (versioned schema)]
    ├──required-by──> [Persistent branching choices]
    ├──required-by──> [Evolving NPC dialogue (state-tagged)]
    ├──required-by──> [Companion arcs]
    └──required-by──> [Decoration]

[Dialogue System (data-driven, state-tagged)]
    ├──required-by──> [Evolving NPC dialogue]
    ├──required-by──> [Companion arcs]
    ├──required-by──> [NPC-to-NPC gossip layer]
    ├──required-by──> [Crafting tied to narrative]
    └──required-by──> [Decoration NPC reactions]

[Inventory / Item Registry]
    ├──required-by──> [Crafting]
    ├──required-by──> [Resource gathering]
    ├──required-by──> [Decoration]
    └──required-by──> [Gifts -> NPC reactions]

[3D Character Controller + Interaction Prompt]
    ├──required-by──> [NPC dialogue triggers]
    ├──required-by──> [Resource gathering]
    └──required-by──> [Companion-on-outings]

[NPC Schedule + AI Navigation]
    ├──required-by──> [Schedule-driven NPC behavior]
    ├──required-by──> [Companion-on-outings]
    └──enhances────> [Evolving NPC dialogue (location-tagged lines)]

[Visual Day/Night + Seasonal Cycle]
    ├──required-by──> [Schedule-driven NPC behavior]
    ├──required-by──> [Seasonal world variation]
    └──enhances────> [Evolving NPC dialogue (time-tagged lines)]

[Photo Mode]
    └──enhances────> [Photo album / scrapbook]

[Player housing + Decoration]
    └──enhances────> [Decoration NPC reactions]

[Single-button context-sensitive interaction]
    ├──conflicts-with──> [Complex chord controls]
    └──enhances────> [Beginner accessibility]
```

### Dependency Notes

- **Save system schema is the critical path.** Persistent branching, evolving dialogue, companion arcs, decoration — all require the save system to track world state and player choices durably and migration-safely. Build versioned saves from day one. Refactoring saves mid-project corrupts every existing player save.
- **Dialogue system is the second critical path.** Evolving NPC dialogue, companion arcs, NPC-to-NPC gossip, decoration reactions, narrative-tied crafting — all depend on the dialogue system being state-aware and tag-based. A simple linear dialogue tree won't extend; pick a state-tag-capable system (Yarn, Ink, Articy, or build minimal one in Godot) up front.
- **Inventory schema underlies crafting AND decoration AND gifts.** A unified item registry from day one prevents three parallel systems.
- **Visual day/night cycle should be in vertical slice.** It enables schedule-driven NPCs, seasonal variation, and time-tagged dialogue — all major depth multipliers.
- **NPC AI navigation** (pathing through the world on schedule) is medium-complexity in Godot 4 and is *required* for the "NPCs feel alive" promise; do not skip it.
- **Companion-on-outings** is a *huge* differentiator but high complexity; it's a candidate to demonstrate in vertical slice with one companion only.

---

## MVP Definition

### Vertical Slice (the 1-hour validation build per PROJECT.md)

The vertical slice is the wishlist driver and validation checkpoint. It must demonstrate **the core thesis is real** — not a feature list. Cut content scope ruthlessly; do NOT cut systems.

**Must demonstrate:**
- [ ] 3D embodied world (small but polished)
- [ ] 2–3 NPCs with state-tagged evolving dialogue (rich enough to *feel* like the full game's NPCs at small scale)
- [ ] 1 companion who can accompany player on a small outing
- [ ] At least 1 persistent branching decision that the player visibly experiences ripples from
- [ ] No time-pressure mechanics anywhere — pause works, no clock punishes
- [ ] Crafting with at least 1 narrative-tied recipe (player crafts X, gives to NPC, unlocks new dialogue)
- [ ] Resource gathering for at least 1 item type
- [ ] Player home with basic decoration (5–10 placeable items, NPC notices visit)
- [ ] Save / load (full save schema; not a hack)
- [ ] Tutorial / onboarding works for someone who has never played a cozy game
- [ ] Settings menu with text scaling, control remap, audio sliders
- [ ] At least one "evolving over time" element visible within the 1-hour play session

**Explicitly defer to v1 full game:**
- Full NPC roster (slice has 2–3, full game 12+)
- Full seasonal cycle (slice can be one season)
- Multiple regions / islands
- Full crafting recipe set
- Full decoration item set
- Festival / event system
- NPC-to-NPC gossip layer
- Romance arcs
- Photo mode / scrapbook (consider light version in slice for marketing)

### Add After Slice Validation (toward v1)

- [ ] Full NPC roster
- [ ] All four seasons
- [ ] Multiple connected regions
- [ ] Full crafting system breadth
- [ ] Festival / seasonal event system
- [ ] NPC-to-NPC gossip layer
- [ ] Full companion-on-outings for 4–6 companions
- [ ] Full decoration breadth
- [ ] Romance arcs
- [ ] Photo album / scrapbook
- [ ] Letters / journals / collectible documents

### Future Consideration (v1.x / v2)

- [ ] New Game+ that carries knowledge, not items
- [ ] Memory Lane cutscene replay
- [ ] Procedural minor NPCs layered on authored core
- [ ] Steam Workshop / mod support — only after v1 ships and demand demonstrated
- [ ] Console port — explicit out-of-scope per PROJECT.md
- [ ] Mobile port — explicit out-of-scope per PROJECT.md

---

## Feature Prioritization Matrix (Selected Highest-Stakes)

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Evolving NPC dialogue (state-tagged) | **HIGH** | **VERY HIGH** | **P1** — tentpole |
| Persistent branching choices | **HIGH** | **HIGH** | **P1** |
| No time pressure (discipline) | **HIGH** | **MEDIUM** | **P1** |
| Companion arcs (BG3-style cozy) | **HIGH** | **HIGH** | **P1** |
| Crafting tied to narrative | **HIGH** | **HIGH** | **P1** |
| Player housing + decoration | **HIGH** | **HIGH** | **P1** |
| Endgame loop (multiple threads + seasonal evolution) | **HIGH** | **VERY HIGH** | **P1** |
| Always-clear puzzle telegraphing | **HIGH** | **MEDIUM** (discipline) | **P1** |
| Save system (versioned, multi-slot, autosave + manual) | **HIGH** | **MEDIUM** | **P1** |
| Accessibility baseline (text scaling, remap, color, subtitles) | **MEDIUM** | **LOW-MEDIUM** | **P1** |
| Photo mode | **MEDIUM** | **LOW-MEDIUM** | **P2** |
| NPC-to-NPC gossip | **HIGH** | **HIGH** | **P2** |
| Companion-on-outings | **HIGH** (emotional) | **HIGH** | **P2** for full game; **P1 for one companion in slice** |
| Romance arcs | **MEDIUM-HIGH** | **HIGH** | **P2** |
| Seasonal recurring events | **HIGH** | **HIGH** | **P2** |
| Festival / event system | **MEDIUM-HIGH** | **HIGH** | **P2** |
| Letters / collectibles | **MEDIUM** | **LOW-MEDIUM** | **P2** |
| Photo album / scrapbook | **MEDIUM** | **MEDIUM** | **P2** |
| Memory Lane cutscene replay | **LOW-MEDIUM** | **LOW** | **P3** |
| New Game+ | **LOW-MEDIUM** | **MEDIUM** | **P3** |
| Mod / Workshop support | **MEDIUM** (long-tail retention) | **HIGH** | **P3** — defer |

**Priority key:**
- **P1**: Must have. Cutting kills the thesis or the game.
- **P2**: Should have for v1. Cutting weakens but doesn't kill.
- **P3**: Nice to have; consider post-launch.

---

## Competitor Feature Analysis

| Feature | Stardew Valley | Animal Crossing: NH | BG3 | Spiritfarer | The Sims | **Our Approach** |
|---------|----------------|---------------------|-----|-------------|----------|------------------|
| Time pressure | Day clock + bedtime | Real-world clock, missable seasonal events | None (turn-based) | None | None | **None — design center** |
| NPC dialogue depth | Heart-tier loops, repetitive after max | Personality archetypes, large pool | State-tagged + approval-driven | Per-spirit arcs, finite | Procedural emotion-driven | **State-tagged authored library + schedule + gossip layer + cutscenes** |
| Decisions persist | Mostly cosmetic | Minimal | Heavily — defining | Linear arcs with choice | Sandbox emergent | **Heavy persistent branching, BG3-inspired** |
| Companions | Marriage / spouse | None | Core mechanic | Each spirit briefly | Family / friends sandbox | **Cozy adaptation of BG3 companions** |
| Endgame | Story ends → repeat | Indefinite (real-world clock) | Story ends → game ends | Story ends → game ends | Lifecycle ends → restart | **Multi-threaded evolving arcs + seasonal recurrence + creative goals** |
| Crafting | Recipes from quests/level | DIY recipes | Item crafting / alchemy | Recipes from spirits | Skill-based | **Narrative-unlocked recipes + lore-tagged ingredients + dialogue hooks** |
| Decoration | Limited | Deep | None | Per-ship | Very deep | **Deep, with NPC reactivity** |
| Difficulty curve | Light combat ramp (mines) | None | Steep | Steep | None | **Plateau, never spike** |
| Save system | End-of-day autosave only | Single save (limit) | Multi-slot + autosave | Auto + manual | Multi-slot + auto | **Multi-slot + autosave + manual + cloud + versioned schema** |
| Multiplayer | Optional co-op | Local + online | Optional co-op | Single | Single | **Single-player only** |

---

## Sources

Persona research:
- `D:\Projects\game\.planning\research\PERSONA.md` — primary signal, structured interview corpus

Project context:
- `D:\Projects\game\.planning\PROJECT.md` — pillars, constraints, decisions

External references (with confidence levels):
- [Stardew Valley NPC dialogue critique — forums and modding community](https://forums.stardewvalley.net/threads/more-post-marriage-dialogue-variety-for-npc-spouses.49114/) — MEDIUM (forum sources, but multiple corroborating)
- [Stardew Valley endgame discussion](https://steamcommunity.com/app/413150/discussions/0/1694919808741544103/) — MEDIUM
- [What To Do After Completing The Community Center In Stardew Valley](https://www.thegamer.com/stardew-valley-things-do-after-beat-game/) — MEDIUM
- [Inzoi AI-driven NPCs (NVIDIA SLM partnership)](https://www.pcgamer.com/games/life-sim/inzoi-is-creating-a-newfangled-life-sim-npc-that-can-grow-and-develop-its-own-personality-with-nvidias-ai-tech/) — HIGH (PC Gamer, named partnership)
- [GDC: Disco Elysium Meaningless Choices](https://gdcvault.com/play/1027160/-Disco-Elysium-Meaningless-Choices) — HIGH (GDC talk, primary source)
- [Disco Elysium dialogue tree analysis](https://lbreede.github.io/www/posts/what-disco-elysium-taught-me-about-dialogue-trees/) — MEDIUM (independent analysis)
- [BG3 Companion Approval Guide (Fextralife)](https://baldursgate3.wiki.fextralife.com/Companion+Approval+Guide) — HIGH (well-curated wiki)
- [BG3 Approval (bg3.wiki)](https://bg3.wiki/wiki/Approval) — HIGH (community wiki)
- [Tiny Glade design philosophy (Steam page)](https://store.steampowered.com/app/2198150/Tiny_Glade/) — HIGH (primary)
- [Tiny Glade review — PC Gamer](https://www.pcgamer.com/games/city-builder/tiny-glade-review/) — HIGH
- [Spiritfarer / Cozy Grove narrative analysis](https://hercozygaming.com/spiritfarer-game-review/) — MEDIUM (cozy-game-focused critic site)
- [Cozy games without time pressure — TheGamer](https://www.thegamer.com/cozy-games-dont-have-time-limits/) — MEDIUM
- [Game Accessibility Guidelines — full list](https://gameaccessibilityguidelines.com/full-list/) — HIGH (industry standard reference)
- [2025 Video Game Accessibility Recap (Access-Ability)](https://access-ability.uk/2025/12/05/2025-video-game-accessibility-recap/) — HIGH
- [ESA Accessibility Games Initiative (2025)](https://gamespace.com/all-articles/news/how-new-accessibility-features-are-changing-modern-game-design/) — MEDIUM
- [Strange Horticulture review (puzzle ambiguity critique)](https://forgepress.org/strange-horticulture-review-a-plant-puzzle-game-that-channels-your-inner-sherlock/) — MEDIUM
- [Sandrock relationship system depth](https://www.switchbladegaming.com/cozy-games/best-life-sim-2026-complete-guide/) — MEDIUM
- [Hokko Life decoration depth](https://www.gamespot.com/gallery/games-like-animal-crossing/2900-5635/) — MEDIUM
- [Cozy game compelling continuous gameplay design (gamedeveloper.com)](https://www.gamedeveloper.com/design/creating-compelling-and-continuous-gameplay-in-a-cozy-farming-life-sim-adventure) — HIGH (game industry trade)
- [Stardew Valley world building lessons](https://www.kokutech.com/blog/gamedev/design-patterns/world-building/stardew-valley) — MEDIUM
- [Save system expectations — Animal Crossing single-save criticism](https://gamerant.com/animal-crossing-save-problem-limitations-new-game-plus-fix/) — MEDIUM

---

*Feature research for: 3D narrative-driven cozy life sim with companion-rich gameplay*
*Researched: 2026-05-09*
