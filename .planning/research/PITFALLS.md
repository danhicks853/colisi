# Pitfalls Research

**Domain:** 3D narrative-driven cozy life sim (Godot 4, solo dev, multi-year, near-zero budget)
**Researched:** 2026-05-09
**Confidence:** HIGH overall — most findings verified across multiple post-mortems, dev blogs, and live shipped-game evidence; Godot-specific items verified against official migration docs.

> **Reading order for this document:** Critical Pitfalls (the things that kill projects like ours) → Solo-Dev Sustainability → Cozy-Genre Specific → Technical (Godot) → Marketing/Release → Tables and Mappings. The "honesty rating" on each pitfall is a deliberate provocation — it is intentionally pessimistic so we plan against the realistic case, not the inspirational case.

---

## Critical Pitfalls

These are the project-killers. Every one of them has buried a game very much like the one we are planning.

---

### Pitfall 1: The "Stardew Killer" Delusion

**What goes wrong:**
The project is conceptually framed as "Stardew Valley but better" or "Stardew without time pressure." Every cozy-genre solo dev attempts a version of this. Almost none ship. Of those that ship, almost none commercially succeed at Stardew-comparable levels.

**Why it happens:**
1. **Anchor bias.** Stardew is the reference point because it is the persona's #1 game. But Stardew is a 4.5-year, 10-hours-a-day, seven-days-a-week solo project from a developer with a CS degree who happened to also be a competent pixel artist and a competent composer (Eric Barone / ConcernedApe). It is a statistical outlier, not a baseline.
2. **"Fix what I hated" thinking.** "I just need to remove the time pressure and add deeper relationships" sounds like a small delta. It is not. Stardew's time pressure is structurally entangled with its progression pacing, its NPC schedule simulation, its festival economy, and its sense of accomplishment per day. Removing it without replacing the loop function it served leaves a dead game.
3. **Genre saturation.** Steam's cozy life-sim space is now crowded. Established giants (Stardew, Animal Crossing, Coral Island, Sun Haven, Fae Farm, Disney Dreamlight Valley, Palia) plus dozens of smaller cozy releases per Steam Next Fest mean discovery is dramatically harder than 2016.

**How to avoid:**
- Reframe project north star away from "Stardew killer" and toward the **persona's gap**: deep evolving relationships + no time pressure + no endgame cliff. That is a *positioning thesis*, not a comparison-to-Stardew thesis.
- Make the differentiator load-bearing in marketing: never use the words "Stardew killer" or "Stardew but..." in any external communication. Lead with the unique promise.
- Build the **one thing** that no shipping cozy game does well: the persistent-evolving-relationship system. If that one thing is differentiated and excellent, the rest can be 80% as good as competitors. If that one thing is mediocre, no amount of farming-system polish will save us.

**Warning signs:**
- Pitching the game in any context (Discord, dev log, family dinner) using the phrase "but better than Stardew" / "Stardew with X."
- Feature lists that read like Stardew's feature list with one item changed.
- Comparing scope-budget against Stardew's launch state instead of against shippable solo-dev reality.

**Phase to address:**
Phase 0 (Pre-development branding/messaging) and Phase 1 (Vision lock). The framing must be set before any system design or marketing copy is written.

**Honesty rating:** 9/10. This kills more cozy-genre solo projects than anything except scope creep, and they are usually the same disease wearing different masks. PROJECT.md already partially addresses this with the "underserved deep cozy enjoyer" framing — protect that framing fiercely.

---

### Pitfall 2: Scope Creep on Systems-Rich Solo Projects

**What goes wrong:**
A solo project with multiple intersecting systems (relationships, crafting, dialogue, world simulation, narrative branching, customization) accumulates "just one more system" decisions. Each addition seems small, but each new system multiplies integration cost with every existing system. A 9-month plan becomes 27 months. A 4-year plan becomes never-ships.

**Why it happens:**
1. **Combinatorial integration cost.** N systems require O(N²) integration thought. Adding a 6th system to an existing 5 doesn't add 1/5 more work; it adds N more touchpoints.
2. **"It would be cool if..." compounding.** Every playtest, every devlog comment, every tweet from a fan suggests one more feature. Saying yes to 5% of these still doubles the project.
3. **Architect-first projects breed system seduction.** Because we have explicitly committed to "full-game architecture from day one," there is constant pressure to add the next system to the architecture *now* rather than constraining systems to an MVP set.
4. **Survey data:** Over 70% of indie devs cite "scope too large" as the primary reason their game missed deadlines or was abandoned. Average scope creep adds 4 months to 60% of projects. (See Wayline post-mortem corpus.)

**How to avoid:**
- **System budget, not just content budget.** Define a hard cap (suggest: 7 named systems for v1, no more) before any system implementation begins. Adding system N+1 requires removing or merging an existing system.
- **"Buys its slot" rule.** Any new system proposed mid-development must justify its slot by displacing something else. If nothing is displaced, it is rejected.
- **Devlog discipline.** Track scope changes in a single `SCOPE.md` log. Any new system or major feature gets a row with: date proposed, slot displaced, decision, rationale. Read this monthly.
- **Vertical slice as scope-truth.** When the slice ships, measure: (a) how long it actually took, (b) how much of the time was the systems vs. the content. Use the ratio to honestly project full-game timeline. If the slice took >18 months, the full game is 5+ years; cut accordingly.

**Warning signs:**
- "I just want to add one more thing before I move on."
- The number of systems in the design doc has grown since project start.
- Vertical slice scope is being expanded ("we should also include the festival in the slice").
- Implementation timeline keeps slipping by 2-4 weeks per month.

**Phase to address:**
Every phase. Bake scope review into every milestone transition (`/gsd:transition`).

**Honesty rating:** 10/10. This is the single biggest killer of multi-year solo projects, and PROJECT.md correctly flags it. The discipline must hold for 4-6 years, which is very hard.

---

### Pitfall 3: The Endgame Content Cliff (The Persona's #1 Hate)

**What goes wrong:**
The game has 30+ hours of designed content. A motivated player burns through it in 25-40 hours. Then... nothing. The persona's most-cited reason for bouncing off a cozy game in PERSONA.md. Bear & Breakfast, Spirittea, RCT, Sims, Little Witch, Paperbark — all bounced for the same reason.

**Why it happens:**
1. **Authored content is finite by definition.** Every dialogue line, every character arc, every quest is hand-written. Once consumed, it's gone.
2. **"Story complete" framing.** Games designed around a story arc end when the story ends. The player's reason-to-return collapses with the credits roll.
3. **Cozy genre expectation has shifted.** Stardew set the bar at 1000+ hours of meaningful return play. Players now arrive expecting indefinite returnability and feel cheated when content runs out.
4. **Stardew's own 14-heart problem.** Even the genre leader hits this — once spouse hearts are maxed, dialogue rotates through a small pool. The community responded with mods like "Fourteen Heart Events for All" because the base game's content runs out. If Stardew has this problem, every smaller cozy game has it worse.

**How to avoid:**
- **Generative + authored hybrid by design from day one.** Authored content (heart events, story beats, quest arcs) is the spine. **Generative content** (procedural NPC reactions to player choices, world-state-driven barks, schedule-driven combinatorial encounters, seasonal/relational ambient dialogue) is the connective tissue that fills the gaps and persists past authored-content exhaustion.
- **Multiple intertwining narrative threads.** Don't have one "main story" that ends. Have 6-10 character arcs that progress on independent timelines. When one ends, others continue. When all authored arcs end, ambient evolution continues.
- **State-driven dialogue, not friendship-level dialogue.** Don't gate content behind "5 hearts," gate it behind world-state combinations. A character has different things to say in winter, after the festival, when the player is dating their friend, when their sibling moved away. State-combinations grow combinatorially even with linear authoring effort.
- **Player-driven goals (Sims-style).** Provide tools, not just goals. A player who can build, customize, decorate, role-play, and self-direct can find meaning past authored content. (PROJECT.md's "control / building / creativity / expression" pillar already reflects this.)
- **Critical design exercise:** Before writing the slice, write a 1000-word document titled "Why does a player still want to play this in hour 200?" If the answer is hand-wavy, the cliff is unsolved.

**Warning signs:**
- Writing dialogue per friendship-level rather than per world-state.
- Designing the "main story" first and treating ambient/repeat dialogue as an afterthought.
- The vertical slice has authored content for hour 1 but no plan for hour 100.
- Inability to articulate, in concrete terms, what the player does in hour 50.

**Phase to address:**
Phase 1 (Vision/Design pillars) — the endgame solution must be designed in, not bolted on. Re-validated every milestone.

**Honesty rating:** 10/10. PROJECT.md identifies this as "the central design challenge." It is. If we don't solve it the project still might commercially succeed for 30 hours of play, but we will fail the persona and the demographic the project is built for.

---

### Pitfall 4: Choosing 3D as a Beginner

**What goes wrong:**
3D adds a multiplier of complexity to nearly every dimension of game development: art pipeline (Blender → Godot has documented friction), animation (rigging, NLA, glTF export edge cases), camera, lighting, performance, collision, level design, UI, and asset storage. A 2D project with the same systems would ship in roughly half to two-thirds the time.

**Why it happens:**
1. **3D feels modern and ambitious.** It's an aesthetic and emotional choice as much as a technical one.
2. **Stylized 3D ≠ easy 3D.** Stylization reduces art-quality bar but does not reduce the technical pipeline cost. Rigging a stylized character is the same skill as rigging a realistic one.
3. **Hidden complexity surfaces late.** Beginners successfully model characters, then discover skinning is hard. They successfully animate, then discover Godot's animated-skeleton reparenting limitations. They build a level, then hit performance issues from undisciplined draw-call counts.

**How to avoid:**
*The decision to go 3D is locked in PROJECT.md, so prevention focuses on mitigation, not reversal:*
- **Adopt the stylization-as-budget principle ruthlessly.** Low-poly with flat-shaded materials, minimal texture work, hand-painted textures only where load-bearing. Avoid PBR. Avoid normal maps. Avoid baked lighting where dynamic lighting is "good enough."
- **Standardize the Blender→Godot pipeline early and don't deviate.** Use the Michael Jared "Blender to Godot 4 Pipeline" addon (or melvspacestudio's open-source equivalent) and commit to one workflow. The most common pipeline failure is bespoke per-asset workflows.
- **Use the NLA Editor + glTF 2.0 export pattern for animations.** Per supermatrix.studio's 2026 guide, this is the only workflow that reliably preserves multiple animations per character without merging into one track.
- **Don't reparent animated skeletons in Godot.** This is a documented engine-level limitation; AnimationPlayer breaks. Decide character setup once at import and don't move them under different parents.
- **Cap the character count.** Stylized 3D scales by character count more than by world size. Plan for 12-15 unique NPCs maximum, with strong silhouettes and shared rig.
- **Performance-budget every scene.** Set a draw-call ceiling (e.g., 200 draw calls in any scene) and a vertex ceiling (per Godot's optimization guide). Profile early and often.

**Warning signs:**
- Spending weeks on a single character model.
- Animation count exploding ("each NPC needs idle, walk, run, sit, eat, talk, work...").
- Frame rate dropping below 60 fps on the target hardware (laptops, integrated GPUs) before content is dense.
- Considering normal maps, PBR, or baked GI to "make it look better."

**Phase to address:**
Phase 2 (Pre-slice tooling/pipeline) is the make-or-break window. If the pipeline is wrong by the time slice production starts, every subsequent month is paying interest on the bad foundation.

**Honesty rating:** 8/10. This is the single most common reason ambitious solo projects either pivot to 2D or never ship. The decision is locked, so the project's success now depends on heavy mitigation discipline.

---

### Pitfall 5: The Vertical Slice Trap (Slice Doesn't Translate)

**What goes wrong:**
The slice gets built. It is polished, demoable, wishlist-worthy. Production then begins on the rest of the game and... immediately falls behind by 5-10x. Why? The slice was built in "hero mode" — late nights, stretching mental resources, ignoring tooling investment, copy-pasting where systems should have been generalized. Slice work doesn't translate; it has to be largely redone.

**Why it happens:**
1. **Polish tax is paid twice.** Polishing the slice teaches what polish costs. If the cost is high and there are 30x more sections, the rest-of-game timeline is suddenly visible and terrifying.
2. **Slice-only shortcuts lurk.** Hardcoded values, scene-specific scripts, manual content-pipeline steps. They worked for 1 hour of game; they implode at 30 hours.
3. **No tooling investment.** Solo devs under slice pressure skip building dialogue importers, save inspectors, content validators, scene templates. Then the post-slice phase is unblocked by content production, but content production is unbearably slow because tooling was never built.
4. **PROJECT.md already flags this** ("Hacky shortcuts taken just for the slice are a yellow flag and should be surfaced explicitly, not silently accepted") — the prevention is the discipline of actually surfacing them.

**How to avoid:**
- **Treat the slice's *systems* as production code; treat the slice's *content* as throwaway.** Content (one of each NPC, one quest, one biome) can be hand-built. Systems (dialogue, save, scene transitions, interaction, schedules) cannot be hand-built; they must be data-driven and tooling-supported even at slice scale.
- **Build the content authoring tools as part of the slice.** A solo dev's productivity post-slice is dominated by content production, which is dominated by tooling. If the dialogue editor is bad in the slice, the dialogue editor will still be bad when writing 20,000 lines of NPC dialogue.
- **Maintain a "slice debt log."** Every shortcut taken just for the slice gets logged with: what was shortcutted, why, what proper version looks like, when it must be paid down. This must be surfaced in every milestone retrospective.
- **Honestly project from slice metrics.** When the slice ships, count: hours per dialogue line authored, hours per quest authored, hours per character modeled-and-animated. Multiply by full-game targets. If the math says 6+ years, cut content count *now*.

**Warning signs:**
- "I'll do that properly later" appears more than 5 times in slice development without entries in the debt log.
- The slice has special-case code paths that "shouldn't exist" in production.
- Content authoring requires opening Godot's editor and clicking through scenes (i.e., no data-driven authoring pipeline).
- Slice is "polished" but slice-debt is not measured.

**Phase to address:**
Phase 3-5 (slice production phases). Critical handoff at Phase 6 (post-slice retrospective and content scaling).

**Honesty rating:** 8/10. The phrase "vertical slice trap" is a real, documented phenomenon. PROJECT.md addresses it explicitly, but knowing about it doesn't prevent it; the discipline does.

---

### Pitfall 6: Solo Dev Burnout Across a Multi-Year Horizon

**What goes wrong:**
Year 1 is exciting. Year 2 is grindy. Year 3 is a slog. By Year 4, motivation is gone, the codebase feels unlovable, and shipping seems impossible. The project either ships in a damaged state, ships years late, or doesn't ship.

**Why it happens:**
1. **Cumulative mental load.** Even when "taking a break," a solo project sits in the back of the head for years. The longer the project, the more the weight compounds.
2. **No external feedback rhythm.** Teams have natural ceremony — standups, demos, retros — that pace and re-energize. Solo dev has none of this unless designed in.
3. **Sunk-cost paralysis.** After 18+ months, cutting features feels like throwing away work. Refactoring for sanity feels like starting over. Both block progress.
4. **Identity fusion.** "I am the developer of this game" becomes the developer's identity. When the game struggles, self-worth struggles. (Derek Yu's "Death Loops" essay is the canonical source on this pattern.)
5. **Eric Barone (Stardew) worked 10 hours/day, 7 days/week, for 4.5 years.** This is held up as inspirational; it is closer to a cautionary tale. He has spoken publicly about not being able to walk away from Stardew years after release — it ate his identity.

**How to avoid:**
- **Sustainable pace, codified.** Set a working-hours target (e.g., 25 productive hours/week) and *track adherence*. Crunch is a debt; it is borrowed against the next month's productivity.
- **Mandatory rhythms.**
  - Daily: ~4 hour work block (Pomodoro-able), then stop.
  - Weekly: one full day off the project.
  - Monthly: written retrospective and rolling 90-day plan adjustment.
  - Quarterly: a 1-week true break (no project thoughts, no devlog).
- **Externalize the feedback loop.** Public devlog (even small audience), Discord community of fellow solo devs, monthly post in r/gamedev or itch.io devlog. Visibility creates accountability and harvests motivational energy.
- **Plan for the "Year 3 Wall."** Most multi-year solo projects hit a deep motivation crisis around month 24-36. Pre-commit to: (a) a project-pause protocol, (b) a possible scope reduction triggered specifically by Year-3-Wall morale dip, (c) a "hire a contractor for one week" budget exception (yes, even at near-zero budget; one week of contractor work to break a blocker can save a project).
- **Identify ship-or-pivot tripwires.** "If at month X I have not shipped Y, I will pivot to Z." Pre-committing makes the pivot decision possible later, when emotional investment makes it impossible.
- **Persona is your spouse.** Use that. A solo dev whose primary playtester lives in their house has a near-unique advantage. Ritualize playtest sessions (even 15-minute ones); they are a renewable source of motivation.

**Warning signs:**
- Working harder produces less output (declining productivity per hour).
- Dread of opening the project file.
- Inability to take real time off (always thinking about it).
- Avoiding hard problems by working on easy/cosmetic ones.
- Shrinking devlog frequency (silence often precedes abandonment).

**Phase to address:**
Every phase, but specifically Phase 1 (set sustainable cadence as a project pillar), and re-evaluated every milestone.

**Honesty rating:** 10/10. Burnout is the #2 killer of multi-year solo projects after scope. The project plan must treat sustainable pace as a hard constraint, not a "nice to have."

---

### Pitfall 7: Underestimating Content Production Time

**What goes wrong:**
Systems are estimated relatively well. Content is wildly underestimated. "I'll write the dialogue when the system is done" turns into a year of writing. "I'll model the NPCs once the rig is set" turns into 3 weeks per NPC.

**Why it happens:**
1. **Content scales linearly with no economies of scale.** Each dialogue line is one dialogue line of effort. The 1000th line is not faster than the 100th.
2. **Tooling debt.** Without dialogue importers, schedule editors, item validators, content production rate is bottlenecked by tool friction.
3. **Cozy games are extremely content-dense.** Stardew has ~40 NPCs with multi-heart event chains — that's hundreds of thousands of words. The persona's expectation calibration is set by Stardew. Anything less feels thin.
4. **Quality content takes longer than quantity content.** Persona research says "characters that feel real, evolving relationships." That is *high-quality* content — voice, distinct mannerisms, evolving arcs. 2-5x slower than throwaway dialogue.

**How to avoid:**
- **Estimate content production rate from the slice, not from hope.** Time to write one NPC's full slice content × NPC count = a real number. Compare to project budget.
- **Cap NPC count.** 12-15 distinct NPCs with deep evolving arcs > 30 NPCs with shallow arcs. PERSONA.md says depth matters; count does not.
- **Reuse and recombine.** State-driven dialogue is more reusable than friendship-level dialogue. A "winter morning" line plays many days. A "5-hearts cutscene" plays once.
- **Generative content multiplies authored content.** A relationship system that combines authored barks based on world state stretches each line further. (See Pitfall 3.)
- **Prefer text over voice.** Voice acting is a content-cost multiplier of 5-50x depending on quality. Text-only is the only sustainable choice for solo dev at this scope.
- **Use placeholder content honestly.** Lorem-ipsum-style placeholder for *system* validation, but *do not* mistake placeholder-content milestones for content-production milestones. They are different work streams.

**Warning signs:**
- "Content phase" is a single line item in the roadmap with no per-NPC, per-arc breakdown.
- Authoring tools are not built; content is being entered directly into Godot scene files.
- Voice acting is on the roadmap.
- Total dialogue word count is not estimated.

**Phase to address:**
Phase 1 (estimation honesty), Phase 2 (tooling), Phase 6+ (content production).

**Honesty rating:** 9/10. This is the surprise that ambushes most narrative-rich indie projects in Year 2 and accelerates Pitfall 6.

---

## Solo-Dev Sustainability Pitfalls

---

### Pitfall 8: The "I'll Wear All Hats" Trap

**What goes wrong:**
Solo dev means writing every line of code, modeling every asset, animating every character, writing every line of dialogue, composing every track, designing every system, managing every release, and marketing every wishlist. No human has all these skills at production quality. Some hats will fit badly. Wearing them anyway produces work that drags down the whole.

**Why it happens:**
1. **Identity / pride.** "I made this entirely myself" is emotionally powerful but commercially indifferent.
2. **Budget anchoring.** "I have $100" anchors the dev to free options exclusively, blocking even small targeted spends that would 10x output.
3. **Skill optimism.** "I'll learn music when I get there" rarely produces production-quality music in the time available.

**How to avoid:**
- **Inventory hats honestly.** For each: code, 3D modeling, animation, rigging, narrative writing, dialogue editing, system design, UX/UI, music composition, sound design, marketing copy, trailer editing, capsule art — rate self 1-5. Anything ≤2 is a candidate for outsource/asset/cut.
- **Targeted micro-budget allocations.** Even at near-zero budget, $50-300 spent on the right thing produces outsize value:
  - **Music:** Royalty-free libraries (Ovani Sound, free tier of Pixabay/incompetech, $30-200 for a curated cozy bundle) outperform a beginner's first attempts at composition.
  - **Capsule art / trailer.** A $300 commission for a single great capsule image moves wishlist conversion noticeably. If we have $400 lifetime, spend $300 here.
  - **Sound effects.** 99Sounds, Freesound CC0, $30-50 cozy SFX bundles. Building from scratch is wasted hours.
- **Free-and-open-source-first stack.** Audacity, LMMS, Bosca Ceoil for any audio work the dev does themselves. Krita for 2D art. Inkscape for UI. These are all free, all production-capable.
- **The one paid tool exception.** Steam Direct fee ($100). This is locked.

**Warning signs:**
- Spending a week trying to compose a track when a $20 royalty-free track would be 10x better.
- The capsule art is being made by the dev instead of commissioned.
- Trailer editing takes more than a week.

**Phase to address:**
Phase 0 (stack/tooling decisions), Phase 7+ (marketing prep).

**Honesty rating:** 7/10. This kills polish more than it kills shipping. But poor polish kills wishlist conversion, which kills launch, which kills the project commercially.

---

### Pitfall 9: Working Alone Without Feedback Until Too Late

**What goes wrong:**
Solo dev writes code, designs systems, builds content for 12-24 months without external eyes. Then ships a slice. Discovers core assumptions are wrong. Major rework needed. Morale crashes (see Pitfall 6).

**Why it happens:**
1. **Embarrassment delay.** "I'll show people when it's good." It's never quite good enough, so it's never shown.
2. **No playtest culture established.** Testing requires a tester pool, a feedback loop, a way to triage. None of these exist by default for solo devs.
3. **Echo chamber of one.** What seems obvious to the dev (controls, UI flows, mechanics) is often unintuitive to fresh eyes — and the dev has no fresh eyes.

**How to avoid:**
- **Persona zero (the wife) is the early playtester.** Per PROJECT.md: she is the lead persona. Playtest sessions with her start at the earliest playable build, not at slice completion.
- **Three feedback rings:**
  - **Ring 1 (week 1+):** Persona zero. Plays anything playable.
  - **Ring 2 (month 6+):** 3-5 trusted testers from cozy game communities. Free, NDA-light, regular cadence.
  - **Ring 3 (month 18+ / slice ship):** Public demo, Steam Next Fest, broader community feedback.
- **Early playtests are about direction, not polish.** "Does this feel cozy?" "Do you like this character?" "What did you expect to happen?" Not "is this fun yet." (Source: indieop.com on first playtests.)
- **Public devlog from month 3.** Forces articulation. Articulation surfaces hidden assumptions. Hidden assumptions are where the worst bugs in design live.

**Warning signs:**
- The first non-self person to play the game is the slice demo audience.
- Devlog is private or doesn't exist.
- "I'll show people when it's better."

**Phase to address:**
Phase 2 (establish feedback rhythm), every phase after.

**Honesty rating:** 8/10. Especially because the PERSONA.md research is unusually strong — leveraging it actively (not just consulting it as a doc) is a major project edge.

---

### Pitfall 10: Skill Acquisition Order — Learn Wrong Thing First

**What goes wrong:**
Beginner picks the most exciting skill to learn first (e.g., character animation, shader programming, procedural generation) and spends months on it before learning the foundational skills the project actually needs (input handling, save systems, UI basics). Project bottlenecks on the unlearned-foundational, not on the deep-but-flashy.

**Why it happens:**
1. **Tutorial-driven learning.** Tutorials prioritize impressive-looking outputs (a glowing shader, a procedural cave) over boring-but-load-bearing skills (a robust save system, a clean menu).
2. **Avoidance pattern.** Hard, less-immediately-rewarding skills get deferred. Save systems are widely rated "the hardest part of game dev"; they tend to get pushed to the end.
3. **Sunk-cost in wrong skills.** Time invested in deep shader knowledge that the cozy game doesn't need feels wasted if abandoned.

**How to avoid:**
- **Learning order based on the slice's critical path.** Roughly: (1) Godot scene tree + nodes + signals; (2) GDScript basics; (3) Input handling + UI; (4) Save/load (do this *early*, not late); (5) Dialogue system; (6) Blender → Godot pipeline; (7) Animation; (8) Shaders only as needed for stylization, never as a learning side-project.
- **Just-in-time learning principle.** Don't learn a skill in advance "because I'll need it." Learn it when the next milestone requires it. This avoids the trap of learning skills the project's evolving design ends up not needing.
- **Save the tutorial graveyard.** Keep a list of tutorials/patterns explored. When tempted to start a new tutorial, check: does this skill match a real upcoming milestone? If no, defer.

**Warning signs:**
- Spending more than a week on a skill that doesn't have a corresponding milestone.
- Build-up of half-finished tutorial projects.
- Strong opinions on advanced topics (shaders, ECS) before basic project ships.

**Phase to address:**
Phase 0-2 (foundational learning), continuous after.

**Honesty rating:** 6/10. Slows projects significantly but rarely kills them outright. More commonly leads to lost months than lost projects.

---

## Cozy-Genre Specific Pitfalls

---

### Pitfall 11: "Cozy but Boring" — Removing All Friction Removes Engagement

**What goes wrong:**
Designer hears "no time pressure, no difficulty, no punishment" and removes every form of friction. Result: a game with no stakes, no anticipation, no reason to choose, no reason to return. The persona quits in 2 hours, citing "nothing to do."

**Why it happens:**
1. **Misreading the persona.** "No time pressure" ≠ "no stakes." "No difficulty wall" ≠ "no challenge."
2. **The relaxation/engagement balance is hard.** Per Kitfox's Tanya X. Short ("Designing for Coziness"), coziness requires *intrinsic satisfaction*, which requires the activity itself to be worth doing. A frictionless activity is not intrinsically satisfying.
3. **Stardew's secret:** The activities (fishing, farming, mining) have moment-to-moment friction (the fish minigame, the cow's mood, the energy meter) that creates engagement, but the macro structure has no permanent loss. The persona loved Stardew at 1000+ hours despite naming time pressure as the bad part. The micro-friction is what kept her playing.

**How to avoid:**
- **Distinguish micro-friction (good) from macro-pressure (bad).**
  - Micro-friction = the fishing minigame, choosing what to plant, choosing dialogue, choosing decoration. Stakes within an activity, no stakes between activities.
  - Macro-pressure = day timer, missable windows, energy that gates progress, season-locked content with permanent consequences for missing.
  - We want the first, never the second.
- **Stakes via meaningful choice, not via failure.** "What you say to this NPC matters" creates stakes without any failure state. "Will you help character A or character B with their conflicting requests" creates stakes.
- **Anticipation via rhythm, not via deadline.** "The autumn festival is coming and I want to bring my friend" is anticipation. "I have until day 13 or I miss it forever" is deadline.

**Warning signs:**
- Playtester (or persona) feedback: "I don't know what to do" or "there's nothing pulling me back."
- Sessions don't have natural arc/peak; they are flat.
- Removing every "fail state" ended up removing every "win" feeling too.

**Phase to address:**
Phase 1 (design pillars must distinguish friction types), Phase 3-5 (slice playtests verify).

**Honesty rating:** 8/10. This is the inverse risk of Pitfall 12. Both are real. The design must thread the needle.

---

### Pitfall 12: Subtle Time Pressure Sneaking In Despite "No Time Pressure"

**What goes wrong:**
The design doc says "no time pressure." The game ships with: an energy meter, weekly festivals (with characters that "appear at the festival, otherwise can't be found"), seasons that lock crops, day-night cycles where shops close, characters with weekly schedules, and an in-game clock that displays day/season/year. The persona feels exactly the time pressure she said she didn't want.

**Why it happens:**
1. **Genre conventions are infectious.** Every cozy game the dev plays has these systems. They feel natural. They sneak in unchallenged.
2. **Time-pressure feels like *content*.** "Festivals are content!" "Seasons are content!" Yes, but each one is also a missable-window mechanic.
3. **"Punishing" is interpreted as "hard," not as "permanently lost."** A season-locked crop isn't "hard," but missing it for the year IS a punishing time-pressure mechanic from the persona's perspective.

**How to avoid:**
- **Time-pressure audit checklist.** Before any system ships, run it against:
  - Does this system have a clock? → flag
  - Does this system have a "missable window"? → flag
  - Does this system tie content availability to a real-time or in-game-time variable? → flag
  - Does this system penalize the player for inaction? → flag
  - Can the player play for 100 hours without ever encountering this system's deadline? → if no, flag
- **Reframings that work:**
  - Season-locked content → repeatable each year; no consequence for skipping.
  - Festivals → opt-in events that can be revisited indefinitely on the next cycle.
  - NPC schedules → patterns the player learns, never gates that punish (NPC X is at the cafe at 2pm on Tuesday — but you can also catch them at home in the evening, or at the market on Saturday).
  - Energy meter → use only as pacing for the *current activity*, not as a hard wall on the day.
  - Day-night cycle → aesthetic and rhythm only; no shop closures, no NPC sleep that locks them out.

**Warning signs:**
- Design discussion includes phrases like "by [date X]" or "before [event Y] passes."
- A first-time player who decides to ignore the main quest is locked out of optional content within a few in-game hours.
- The clock UI is large and prominent (cognitively shouts "your time is limited").
- Quests have expiration timers.

**Phase to address:**
Phase 1 (vision pillars must explicitly itemize this), every system review.

**Honesty rating:** 9/10. The persona literally named this as her #1 hate, and her #1 game commits this sin. The temptation to recreate Stardew's structure is enormous because Stardew's structure works mechanically. Resisting is a discipline.

---

### Pitfall 13: NPC Dialogue Rot (The 14-Heart Problem)

**What goes wrong:**
Players grind to maximum relationship with their favorite NPCs. New dialogue dries up. NPCs repeat. The character that felt real becomes a vending machine of repeated lines. Engagement collapses; persona-style players quit.

**Why it happens:**
1. **Fixed authored content + finite levels = inevitable cap.** "5 heart event," "10 heart event" structures hit a ceiling and stop generating new content.
2. **Stardew's same problem.** Even the genre leader has this; the most-installed Stardew mod category is "more 14-heart content."
3. **Underestimating returnability.** Cozy players return to favorite characters dozens or hundreds of times. The content budget per character must reflect that.

**How to avoid:**
- **State-driven dialogue, not level-driven.** A character has different things to say in 100+ world states (season, weather, festival proximity, recent player actions, recent player relationships, time of day, recent NPC events, NPC mood, NPC routine). 6 base barks × 100 states = 600 effective lines for the cost of 6.
- **Conversation topics, not conversations.** Stardew's mod community evolved this pattern: a character mentions a topic recently relevant in their life. Topics rotate based on world state.
- **Evolving NPC arcs that don't end.** Instead of "5 hearts → friendship event → end," design arcs as ongoing micro-arcs: this season, the character is anxious about their sibling; next season, recovering from that; next season, planning a project; etc. The arcs continue past the player's relationship cap.
- **"Player choice ripples" hooks.** When the player makes a major choice (helped X with Y), every other NPC has new lines about it for weeks of play. Each major choice is a content multiplier.
- **Pet phrases per character.** Each NPC has 4-6 quirky verbal tics. Even when the line is generic ("good morning"), the character voicing makes it feel character-specific.

**Warning signs:**
- The dialogue system is keyed on "friendship_level" and nothing else.
- The 5-heart event chain is in the design doc; the "what comes after 14" is not.
- The same NPC says the same thing on Day 1 and Day 200 if no event was triggered.

**Phase to address:**
Phase 1 (dialogue system architecture decision), Phase 3-5 (slice's dialogue must demonstrate state-driven approach, not level-driven).

**Honesty rating:** 9/10. This is *the* central design challenge per PROJECT.md. PERSONA.md identifies it across 6+ games she bounced from.

---

### Pitfall 14: Branching Narrative Combinatorial Explosion

**What goes wrong:**
Designer commits to "your choices ripple through the world." Implements branching: choice A leads to states X1, X2; choice B leads to states Y1, Y2. Combine 5 choices: 2^5 = 32 world states. Combine 10 choices: 1024 states. Each state needs distinct content. Content production becomes infinite. Project either ships flat (choices don't actually matter) or doesn't ship.

**Why it happens:**
1. **Naive branching tree implementation.** Each choice spawns subtree.
2. **"Persistent choice" is harder than "branching choice."** PROJECT.md correctly identifies that branches must persist forward, but persisting forward without combinatorial explosion requires careful design.
3. **CYOA framing.** PROJECT.md correctly excludes Beacon-Pines-style restart-from-beginning CYOA. But "non-restart branching" still has the explosion problem.

**How to avoid:**
- **Inkle's solution: variables, not branches.** Use Ink (Inkle's open-source narrative scripting language) or equivalent. Choices set variables in world state. Future content checks variables. The same "scene" plays slightly differently based on variables — *no exponential branching*.
- **Embrace state, not subtree.** Player choice = "Did help_anna_with_letter = true." Future content references this variable. Anna mentions it. Other NPCs mention it. World decoration changes. No new "branch" was created; the *same* world plays slightly differently.
- **Bounded rippling.** Each major choice ripples for a finite scope (e.g., for that character's arc and their immediate relationships). Choices don't ripple to all NPCs. Cost stays linear.
- **Authoring discipline.** Per Inkle's "Embracing the Combinatorial Explosion" R&D approach: track world state in a small set of variables, not many; reference state in many places, write fewer outright forks.
- **Tooling = Ink integration.** Either Ink or a Godot-native equivalent (Dialogue Manager has powerful conditional support; Dialogic 2 supports variables) is non-negotiable.

**Warning signs:**
- Design doc has a tree structure with branching nodes.
- The number of "scenes" required grows exponentially with the number of choices.
- Choices are framed as "lock me into path X" rather than "set variable Y."

**Phase to address:**
Phase 1 (narrative architecture decision), Phase 2 (dialogue tooling decision).

**Honesty rating:** 9/10. Naive branching is the most common way narrative-rich projects collapse under their own weight.

---

### Pitfall 15: Crafting That's Just Menus and Grind, Not Delight

**What goes wrong:**
Crafting system is implemented as: open menu, select recipe, click craft, gather more materials, repeat. It's mechanically fine but emotionally flat. PERSONA.md cited crafting in 5+ favorite games specifically; it must produce delight, not just function.

**Why it happens:**
1. **Crafting-as-feature-checklist.** Adding a crafting system because cozy games have crafting systems, without designing the *moment* of craft.
2. **Recipe-database paradigm.** Games default to "list of recipes, ingredients required." This is informationally clear but emotionally inert.
3. **No narrative attachment.** PERSONA.md is *very* specific: "going out and collecting things *with story attached*, crafting." The "story attached" part is what made it work for her in Spiritfarer, Spirittea, Winter Borough, Strange Antiquities, Strange Horticulture, Creature Kitchen.

**How to avoid:**
- **Every crafted item has narrative attachment.** Where does the recipe come from? (a character taught you, you found it on an old note, an event unlocked it). Where do the ingredients come from? (specific places with stories, specific NPCs who give them with reactions, specific events). Who are you making it for? (some craft is "for me," much of it is "for them").
- **Craft as moment, not menu.** The act of crafting has presence: the workbench, the animation, the sound, the result-reveal. It is a *scene*, not a transaction.
- **Tactile recipe discovery.** Recipes are discovered, not listed. The persona explicitly hates ambiguous puzzles, so discovery must be *telegraphed*: a character mentions they like X; you learn X requires Y; you encounter Y; the recipe surfaces.
- **Result-mattering loop.** Crafted items are *given*, *placed*, *used in narrative*, not just stockpiled. PERSONA.md's Sims hate ("you build the perfect Sim... then what?") applies here: a stockpile is not an experience.

**Warning signs:**
- Crafting UI is the dominant UI element.
- "Recipe book" is a major game mechanic.
- Items have stat numbers but no story.
- The player's inventory is full of unused crafted items with no purpose.

**Phase to address:**
Phase 1 (crafting design pillar — must explicitly tie to narrative), Phase 3-5 (slice's crafting must demonstrate "moment + narrative attachment," not menu-and-grid).

**Honesty rating:** 8/10. Crafting can be the secret weapon (PERSONA.md says it's a top-3 love) or the secret weakness (most cozy games' crafting is forgettable).

---

### Pitfall 16: Companion Systems That Feel Like Quest Dispensers

**What goes wrong:**
NPCs are designed as quest givers. The player meets them, they offer a quest, the player completes it, gets reward, moves on. The "relationship" is a stat that goes up. PERSONA.md says BG3 companions made her "feel less alone." Quest dispensers do not make players feel less alone.

**Why it happens:**
1. **MMO/RPG genre contamination.** Quest-giver-NPC is the standard pattern; it imports without question.
2. **Hard to design alternatives.** "What does an NPC *do* if not give quests?" requires more inventive design than the default.
3. **Solo dev under content pressure prefers the formula.** Quest dispensers are content-cheap; companions are content-expensive.

**How to avoid:**
- **NPCs have agency, not quests.** They have desires, anxieties, ongoing projects. The player can help, hinder, ignore, or join. Help isn't a quest with a reward; it is a relationship moment with a consequence.
- **Companions react to your life, not just yours to theirs.** NPC: "I saw you talking with Anna at the festival. You looked happy." This is content-cheap (one line, one trigger) but feels alive.
- **Shared activities.** Per BG3's loadbearing companion mechanic: the player and a character do a thing together. Walk to a place. Cook a meal. Watch a sunset. The activity is the relationship, not the quest.
- **Companions evolve outside player attention.** A character has things happen to them over the months — illness, romance, a new hobby — that the player observes rather than triggers. The world doesn't pause for the player.
- **Shared memory, not friendship-level.** "Remember when we..." is the relationship. Stat-bars are not.

**Warning signs:**
- NPC design doc has a "quests offered" section but no "ongoing arcs" or "ambient state" section.
- The first thing every NPC says when met is "Could you help me with...?"
- Friendship is measured in hearts/levels and that's the primary relationship surface.

**Phase to address:**
Phase 1 (NPC design pillars), Phase 3-5 (slice must demonstrate non-quest relationship moments).

**Honesty rating:** 7/10. This is more "differentiates good from great" than "kills the project," but PERSONA.md's "less alone" insight makes it core to our value prop.

---

### Pitfall 17: Difficulty Walls Even Though "Cozy"

**What goes wrong:**
Designer says "no difficulty walls." Game ships with: a mini-game that some players cannot complete (Stardew's fishing); a stat check (BG3-style); a tutorial moment that some players can't pass; a UI flow that confuses some players into a dead-end (Sunhaven, Travelers Rest — both quit by persona for this reason).

**Why it happens:**
1. **"Difficulty" interpreted narrowly.** Designer thinks of combat difficulty. Doesn't think of: control complexity, UI confusion, mechanic discoverability, puzzle ambiguity, mini-game skill walls.
2. **ConcernedApe himself regrets this.** Per Gamesradar interview, he has said the early-game fishing minigame is "too hard when you start out" — this is a feature, not a bug, in the genre's most successful entry. Imitating it imitates the flaw.
3. **PERSONA.md hates ambiguous puzzles** (Strange Antiquities, Strange Horticulture). Persona profile from PROJECT.md: "VERY low patience for complicated control schemes."

**How to avoid:**
- **Wall audit checklist.** Every interaction surface gets evaluated:
  - Can a 60-year-old non-gamer complete this on first try?
  - Is the failure state recoverable, or does the player get stuck?
  - Is the solution telegraphed clearly?
  - Is the input requirement within "WASD + click + space" complexity?
- **Skill-checks replaced by patience-checks.** Where Stardew has "hit the fish-bar with timing skill," consider "wait while the line tugs; click when ready." Same activity, no mechanical wall.
- **Multi-path puzzles.** Every puzzle must have an obvious solution discoverable from prior content. Optional clever solutions are fine; obscure-only solutions are excluded.
- **Persona zero is the wall-detector.** Playtest every interaction with her. Anything she gets stuck on is a wall, regardless of whether the dev considers it "easy."

**Warning signs:**
- A mini-game requires "feel" or timing-based skill.
- Tutorial confusion leads to a stuck state with no exit.
- Controls require modifier keys (shift+click, ctrl+drag) for core actions.
- Anywhere the player can save in a state from which they cannot progress.

**Phase to address:**
Phase 1 (UX pillars), every playtest milestone.

**Honesty rating:** 7/10. Won't kill the project but will narrow the audience and damage retention if not addressed.

---

## Technical Pitfalls (Godot 4 Specific)

---

### Pitfall 18: Save System Built Late or Built Wrong

**What goes wrong:**
Save system gets implemented at month 18 because it wasn't fun. By then, every system stores state in incompatible ways, every Resource has been refactored multiple times, save-format migrations are required for old saves, and the save system rewrite cascades into 2 months of refactor.

**Why it happens:**
1. **Save systems are "boring."** They get deferred.
2. **Naive Resource serialization.** Godot allows `ResourceSaver.save()` on Resources, which feels easy and is. But Resources can contain references to other resources/scripts; security and version-migration become problems on save format evolution.
3. **JSON gotchas.** JSON doesn't natively serialize Vector2/3/Color/etc.; integer/float ambiguity. Per GDQuest cheat-sheet, JSON is the "wrong default" most beginners pick.

**How to avoid:**
- **Build the save system in the first 2 months of code.** Even crude. Refactor it later if needed. But every system added must answer "how does this save?" from day one.
- **Use FileAccess.store_var() over JSON.** Per Godot docs, it natively supports Vector2/3/Color, is binary, smaller, faster, and crucially safer (doesn't load arbitrary scripts/scenes).
- **Avoid Resource-as-save-format for player saves.** Resources as save format are convenient *during development* (editor inspection), but Resources can contain scripts, which is a code-execution risk if save files are ever shared (mods, cloud sync, etc.). For player save data, prefer `store_var` + structured Dictionaries.
- **Version every save.** Save file includes a `save_version` integer. Migration code is required for any breaking change. Migration code is added to a registry. Old saves still load (or are rejected with a clear message).
- **Save-system test scene.** A persistent test scene that creates an artificial complex world state, saves, loads, and verifies state matches. Run this every milestone.

**Warning signs:**
- Save is "just JSON dump" with no migration plan.
- Save is "ResourceSaver" with no security/version awareness.
- Major systems added without thinking about persistence.
- 6 months in and nobody has saved-then-loaded a complex state.

**Phase to address:**
Phase 2 (foundational systems). Save-system-first principle.

**Honesty rating:** 8/10. Won't kill v1 but will eat 1-2 months of refactor if deferred. The "looks done but isn't" problem.

---

### Pitfall 19: Godot 4 Version Migration Headaches

**What goes wrong:**
Project starts on Godot 4.3. Six months later, Godot 4.5 ships with features the project needs. Migration breaks the project. Solo dev spends 2-3 weeks debugging migration instead of building game.

**Why it happens:**
1. **Godot 4 minor versions have real breaking changes.** Per official docs, every minor version has a migration guide; not all changes are automatically handled.
2. **Plugins are version-fragile.** Dialogic, Dialogue Manager, third-party pipeline addons may lag behind the engine.
3. **Pinning is unsexy.** Devs are tempted to upgrade for new features.

**How to avoid:**
- **Pin Godot version per phase.** Lock to a specific minor version at the start of each phase. Upgrade only at phase boundaries, with a dedicated migration milestone.
- **Read every migration guide before upgrading.** Even "safe" upgrades have notable changes (e.g., 4.4's `@export_file` change to `uid://` references).
- **Maintain a known-good commit / branch before upgrade.** Easy rollback if migration fails.
- **Verify all addons support the target version before upgrade.** If Dialogic hasn't released its 4.6-compatible version, do not upgrade until it has.
- **Skip versions if no needed feature.** Don't upgrade because it's available; upgrade because something is needed.

**Warning signs:**
- "I'll just update to 4.X today" without reading migration notes.
- Multiple in-flight engine upgrades simultaneously.
- Plugins broken after upgrade with no fix in sight.

**Phase to address:**
Phase 0 (lock initial version), every phase boundary (consider upgrade).

**Honesty rating:** 6/10. Causes painful weeks but rarely kills projects. Manageable with discipline.

---

### Pitfall 20: 3D Performance Death by a Thousand Draw Calls

**What goes wrong:**
The game runs fine in the test scene (one character, one room). The first full-village scene chugs at 25fps on the target hardware. Investigation reveals 1500 draw calls, dozens of unique materials, no occlusion culling, no LOD, no static batching, every prop a separate node with its own physics body.

**Why it happens:**
1. **Beginner 3D habit.** Each asset imported is a separate node with default settings. No batching. No optimization.
2. **Per Godot docs:** Material changes are huge, draw calls are huge. The fewer different materials, the faster rendering. Per object can cause many draw calls if it has many surfaces.
3. **Cozy demographic = low-end hardware.** PROJECT.md correctly identifies the "modest hardware, laptop, integrated GPU" target. But this means performance budget is much smaller than gamer-hardware-dev intuitions assume.

**How to avoid:**
- **Atlas materials aggressively.** Combine multiple props into shared atlases, shared materials. Aim for <10 unique materials per scene.
- **Combine static geometry per-region.** Walls + floor + roof of a building should be one mesh, not three.
- **Use MultiMeshInstance for repeated objects.** Trees, grass, rocks: one MultiMesh draws hundreds in one call.
- **Level scenes are budget-limited.** Set a per-scene budget: 200 draw calls, 100k vertices visible at once. Profile every scene against budget.
- **Cull aggressively.** Distance fade. Occlusion (Godot 4 supports occluders). Disable nodes outside the camera's interest area.
- **Profile early.** Open the Monitor panel at every milestone. Note draw call count, vertex count, FPS on the target hardware (not the dev machine).
- **Avoid per-frame `_process` work on every node.** Pool, disable, or defer.

**Warning signs:**
- Frame rate drops below 60 fps when a normal-density scene loads.
- Draw call count over 500 in any scene.
- Each prop is a separate scene with its own physics body.
- The dev machine runs the game fine, but the target laptop drops frames.

**Phase to address:**
Phase 2 (set performance budget), every level/scene production milestone.

**Honesty rating:** 7/10. Common cause of pre-launch panic. Rarely a project killer if caught by month 12, but a project killer if caught by month 36.

---

### Pitfall 21: Plugin / Addon Abandonment Risk

**What goes wrong:**
Project depends on Dialogic for dialogue, Blender-to-Godot Pipeline addon for asset import, Phantom Camera for camera control. Maintainer of one plugin disappears or stops supporting the current Godot version. Project either freezes on old engine version or rewrites that whole subsystem.

**Why it happens:**
1. **Indie addon ecosystem is mostly volunteer-maintained.** Maintainers burn out, change jobs, lose interest.
2. **Mid-project, the dependency is invisible.** Then the engine upgrades, the addon hasn't, and suddenly it's a crisis.
3. **Dialogic specifically:** Maintainers have publicly noted bandwidth limits. Active, but not infinitely so.

**How to avoid:**
- **Audit every addon dependency before adoption.**
  - When was the last commit?
  - How many recent issues are open?
  - How active is the maintainer?
  - How long has the addon existed?
  - Is there a credible alternative if it dies?
- **Prefer addons with multiple maintainers / community forks.** Solo-maintained addons are higher risk.
- **Vendor critical addons.** Fork critical dependencies into the project repo. If upstream dies, the project still has its known-good version.
- **Wrap addons behind project-owned interfaces.** All dialogue calls go through a thin `DialogueService` wrapper. If Dialogic dies, only the wrapper rewrites — the rest of the project is insulated.
- **Default to Dialogue Manager (Nathan Hoad) over Dialogic for this project.** Reasoning: text-file-based source format (script-like), simpler to wrap behind own interface, simpler to fall back to a custom impl if it dies, less framework-heavy. Dialogic has a richer editor but more lock-in.

**Warning signs:**
- Addon hasn't released in 6+ months while engine has had 2+ minor releases.
- GitHub issues piling up unanswered.
- Direct addon API calls scattered through the codebase rather than wrapped.

**Phase to address:**
Phase 2 (addon adoption decisions), continuous monitoring.

**Honesty rating:** 6/10. Can cost weeks but rarely months unless unwrapped APIs were used pervasively.

---

### Pitfall 22: Localization as Afterthought

**What goes wrong:**
Game ships in English. Devs decide to localize for launch boost. Discover that thousands of strings are hardcoded, that text rendering breaks for Asian languages (font glyphs missing), that UI breaks for German (long words), that pluralization is missing from dialogue, that string interpolation doesn't translate. Localization either ships broken or doesn't ship.

**Why it happens:**
1. **"I'll add it later" assumption.** Adding it later is dramatically more expensive than building it in.
2. **Godot pluralization gotcha.** Godot's gettext implementation doesn't fully implement GNU gettext; pluralization in particular requires `tr_n()` rather than `tr()`. Easy to miss.
3. **Font-handling.** Cozy genre has a strong East Asian audience (Japan, Korea, China). English-only fonts won't render their text.

**How to avoid:**
- **Every player-facing string goes through `tr()` from day one.** Even when the only translation is English-to-English, the discipline pre-positions the project for localization.
- **Use POT generation from Godot 4's editor.** Auto-generates the template; one less manual step.
- **Pluralization upfront with `tr_n()`.** Even if not used now.
- **Choose localization-friendly fonts early.** Noto Sans is the safest free, broad-glyph-coverage option for global launch.
- **Keep all strings in PO/MO files.** No hardcoded "Hello" anywhere.
- **Mark strings in dialogue/narrative for localization** even when the translation hasn't happened. The infrastructure is already there.
- **At launch, pick 1-2 high-leverage languages.** Simplified Chinese and Japanese have strong cozy markets. Spanish and German are big general markets. Don't try to do everything.

**Warning signs:**
- The string "Hello" appears in code or scenes literally.
- No PO file exists.
- UI elements have fixed widths designed for English string lengths.

**Phase to address:**
Phase 2 (foundational tooling), Phase 7+ (actual translations).

**Honesty rating:** 5/10. Won't kill the project. But adding localization later costs ~3x what it costs to build in from start.

---

## Marketing / Release Pitfalls

---

### Pitfall 23: "If You Build It, They Will Come" — They Don't

**What goes wrong:**
4 years of development. Steam page goes up 2 weeks before launch. 200 wishlists. Launches to ~20 sales. Project has no commercial outcome to speak of, no community to update, no momentum for v1.1.

**Why it happens:**
1. **Marketing-as-distraction myth.** Solo devs see marketing as taking time from "the real work" (development). It is the real work.
2. **Wishlist math.** Per Chris Zukowski: ~7000 wishlists is the threshold for Steam's Popular Upcoming list (which itself drives more wishlists). 30,000-50,000 wishlists for "Gold tier" ($250K+ revenue). Building wishlists takes 12-18+ months of consistent presence; impossible in 2 weeks.
3. **Genre algorithms.** Steam's algorithm rewards "this game is similar to other successful games in the genre." That signal is set by tags, store page assets, capsule art, and *traffic patterns over months* — none of which exist when launching from cold.

**How to avoid:**
- **Steam page goes up at the slice (~month 18), not at launch.** Even with no demo, the page existing collects wishlists from devlog readers, community members, and serendipitous discovery.
- **Wishlists are the only metric that matters before launch.** Track weekly. Set milestone targets: 1000 by month 24, 5000 by month 36, 10000+ by launch.
- **Devlog is part of the deliverable.** Public devlog (preferred: a Steam Page News, a Twitter/Bluesky/Mastodon presence, a YouTube/TikTok account) from month 3-6 onward.
- **TikTok specifically for cozy.** Cozy demographic is heavily TikTok-active. Short-form gameplay clips, especially "before/after" decoration, character reveals, cozy atmosphere — these convert visitors to wishlists. Per HowToMarketAGame.com: cozy games disproportionately benefit from short-form video.
- **Demos at Steam Next Fest.** Every Next Fest is a wishlist injection. Plan for at least 2 (slice ship + pre-launch).
- **Steam tags are critical.** Cozy / Life Sim / Casual / Crafting / Story Rich / Cute. Tag carefully; Steam's algorithm uses them heavily.

**Warning signs:**
- Steam page does not exist 12 months before planned launch.
- No social media presence.
- "I'll start marketing once the game is ready" thinking.
- Wishlist count not tracked.

**Phase to address:**
Phase 7+ (Steam page, devlog presence, community building), Phase 8+ (demo / Next Fest).

**Honesty rating:** 9/10. The single most common cause of "good game, no commercial outcome." More projects fail at marketing than at development.

---

### Pitfall 24: Capsule Art / Trailer Quality Underinvested

**What goes wrong:**
The store page has placeholder-feeling capsule art the dev made themselves, a trailer that's 90 seconds of game footage with no music or pacing. Conversion rate (page visitor → wishlist) is 1-2% instead of the 8-12% that a good capsule + trailer achieves. 5x fewer wishlists from the same traffic.

**Why it happens:**
1. **Solo dev pride trap (see Pitfall 8).**
2. **Capsule art is judged in 0.5 seconds.** It's the visual hook. Done badly, it's invisible. Done well, it's a wishlist click.
3. **Trailer-as-recording mistake.** Most solo dev trailers are screen-captures. Real trailers are *edited*: pacing, music, beats, hook in the first 5 seconds.

**How to avoid:**
- **Spend money on capsule art.** Suggest $300-500 for a commissioned capsule from a freelance illustrator (Fiverr, Reddit /r/HungryArtists, ArtStation). Even at near-zero budget, this is the single highest-ROI dollar.
- **Trailer is its own production.** Allow 1-2 weeks of dedicated work post-slice. Music: licensed track from one of the budget-friendly libraries (suggest: Streambeats / Pretzel / royalty-free game-music libraries; verify license before use).
- **Hook in 5 seconds.** First clip must convey the cozy fantasy (a character moment, a cozy setting, a key feature). No logo intros.
- **Reference: Chris Zukowski's "How To Market a Game" trailer breakdowns.** Watch a few; pattern is well-documented.

**Warning signs:**
- Capsule was made in Krita/Photoshop by the dev.
- Trailer is a single take with no edits.
- Trailer doesn't have a hook in the first 5 seconds.

**Phase to address:**
Phase 7+ (Steam page launch), Phase 9+ (final pre-launch trailer).

**Honesty rating:** 7/10. Common cause of "good game, lukewarm wishlist conversion."

---

### Pitfall 25: Pricing Mistakes (Cozy Genre Range Sensitivity)

**What goes wrong:**
Game prices at $30, market expects $15-20 for cozy life sim. Reviews mention "overpriced" even before quality is judged. Or: game prices at $5, market reads it as "cheap = shallow," and serious cozy players skip in favor of $20 games.

**Why it happens:**
1. **No price benchmarking.** Stardew at $15. Spiritfarer at $30 (but with significant team behind it). Coral Island at $25. Sun Haven at $25. Median for cozy life sim is $15-25 with most successful titles in $15-20.
2. **Effort-priced thinking.** "I worked on this for 5 years; it's worth $30." Market doesn't care about effort.
3. **Discount strategy underused.** Cozy games regularly drop 40-75% in seasonal sales; the launch price needs to anchor high enough that sale prices remain attractive.

**How to avoid:**
- **Benchmark against 5-10 cozy life sims at the time of launch.** Look at their reviews, their hours-to-price ratio, their wishlist counts.
- **Target price range $15-22.** Don't be the cheapest; price below the most-expensive recent successes.
- **Plan for a 10-20% launch-week discount.** Common cozy launch tactic; rewards early adopters, signals price-flexibility for future sales.
- **Don't drop price too aggressively early.** Reduces perceived value; harms full-price sales for years.

**Warning signs:**
- Pricing decision being made in the last week before launch.
- No comparison-shopping done against current cozy titles.

**Phase to address:**
Phase 8+ (launch prep).

**Honesty rating:** 5/10. Won't kill the project. But getting it wrong leaves 20-40% of revenue on the table.

---

### Pitfall 26: Demo Strategy — When and What to Show

**What goes wrong:**
Demo released too early (game isn't representative; tarnishes reputation). Or demo released too late (after the wishlist-pumping windows passed). Or demo includes too much (reduces purchase incentive). Or demo includes too little (can't convey the loop).

**Why it happens:**
1. **Pressure to "show something" trumps strategy.**
2. **Steam Next Fest scheduling.** The Festival's value is concentrated in 1 week (3 per year). A demo 2 weeks before or after is dramatically less valuable.
3. **Misreading "vertical slice" as "demo."** They serve different purposes: slice is for the dev; demo is for the player.

**How to avoid:**
- **Sync demo to a Next Fest.** Schedule the demo to drop *into* a Next Fest, not before or after.
- **Demo is 30-60 minutes of polished gameplay.** Long enough to convey the loop. Short enough to leave the player wanting more.
- **Demo is *one* representative slice.** Not "everything." A first-day-in-village experience that surfaces: characters, the relationship feel, the world's tone, one crafting moment, one choice that matters.
- **Demo state does not carry to full game.** Or it does. Decide based on persona feedback (Stardew did, made fans feel rewarded; some games don't, avoiding save-format complications). Either is fine; communicate clearly.
- **Don't release demo until Steam page is up + community is warm.** Demo without page presence wastes the Next Fest pulse.

**Warning signs:**
- Demo dropping in calendar gaps between Next Fests.
- Demo is "the slice with placeholders removed" without separate UX consideration.
- Demo length is under 15 minutes or over 2 hours.

**Phase to address:**
Phase 8+ (demo prep).

**Honesty rating:** 6/10. Demo strategy is one of the most leveraged decisions; getting it right amplifies launch.

---

### Pitfall 27: Community Building Started Too Late

**What goes wrong:**
2 weeks before launch, dev creates Discord. 5 people join. Launch happens. Discord is dead. There's no community to update for v1.1, no advocates to write reviews early, no voices defending the game when reviews come in mixed.

**Why it happens:**
1. **"I'll have something to share once the game is real."** By then, momentum is impossible to build.
2. **Discord is intimidating to start.** What channels? What rules? Who joins?
3. **Solo devs fear "What if nobody comes?"** A Discord with 20 people is fine. A Discord with 0 people is fine too. A Discord that doesn't exist is the problem.

**How to avoid:**
- **Start Discord at Steam page launch (~month 18).** Even if 5 people join, they're 5 advocates.
- **Cross-post devlog to Discord, social, Steam page News, itch.io devlog.** One write, four channels.
- **Show up consistently.** Once a week minimum. Cozy audiences value warmth and consistency over volume.
- **Cozy-genre community engagement specifically:** join r/CozyGamers, r/CozyGames, the Cozy Gaming Discord servers, Cozy Gamer Facebook groups, ItchIO Cozy collections. Engage as a member; mention the project where appropriate; never spam.
- **TikTok is the discovery layer.** Discord is the retention layer.

**Warning signs:**
- No public communication channel exists 12 months before launch.
- Devlog is 1 post per quarter or less.
- "I'll do social media when there's something to show."

**Phase to address:**
Phase 7+ (community presence), continuous.

**Honesty rating:** 7/10. Compounds over years. Late community building rarely catches up.

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Hardcoded strings (no `tr()`) | Skip i18n setup time | Localization rewrite touches 100% of UI/dialogue | Never — `tr()` is one extra character |
| JSON save format | "Easy to start" | Vector/Color conversions, version migration, integer/float bugs | Never (use `store_var`) |
| Resource-as-save for player data | Editor inspection | Code-execution risk on shared/cloud saves; harder to version | Editor-only debug saves OK |
| Hardcoded NPC dialogue in scene files | Fast first NPC | Scales linearly until intolerable; no localization path | Never (use Ink/Dialogue Manager from start) |
| Per-prop separate node + physics body | Easy to drag-and-drop | 1000+ draw calls, performance collapse | Slice exploration only; refactor before content scaling |
| Direct addon API calls (no wrapper) | Faster initial integration | Plugin abandonment = full rewrite | Never for critical addons (dialogue, save, animation) |
| Heart/level-based dialogue triggers | Easy to design first arc | Hits 14-heart problem; no path to indefinite play | Slice may demo this pattern; full game must replace |
| Branching tree narrative | Maps cleanly to writing tools | Combinatorial explosion at scale | Never (use variables) |
| Voice acting placeholder ("we'll record later") | Trailer feel | Sustainable solo dev cannot ship voice acting | Never — text-only is the design |
| Skipping playtester discipline pre-slice | More dev hours | Direction errors compound; slice ships wrong | Never — Persona zero playtests from week 1 |
| Single Godot version target | Matches dev environment | Doesn't help users on integrated GPU laptops | Internal builds OK; releases must verify on min-spec |
| Steam page deferred to launch | Less marketing time pressure | 12+ months of wishlist-building lost; launch flops | Never |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Blender → Godot animations | Exporting all actions; using direct .blend import for character | Use NLA Editor + glTF 2.0 export; uncheck "Export all actions" |
| Blender → Godot character rigs | Reparenting AnimatableBody3D in Godot post-import | Set rig parenting once, never reparent (Godot engine limit) |
| Dialogic / Dialogue Manager | Direct API calls scattered throughout | Wrap behind project-owned `DialogueService` interface |
| Save system (FileAccess) | Using JSON; not validating loaded data type | Use `store_var`; validate Dictionary structure before applying |
| Localization (gettext) | Using `tr()` for plurals | Use `tr_n()` for plurals; Godot doesn't auto-handle CLDR rules |
| Steam Direct | Filing late; not understanding 30-day waiting period | File 60 days before planned page launch; budget for the $100 fee in Phase 1 |
| Steam tags | Picking obvious "cozy" only | Mix cozy + life sim + crafting + story rich + cute (~10 tags); align to genre algorithms |
| Itch.io launch | Ignoring it because Steam is bigger | Free; cozy audience overindexes there; mirror release |
| Asset library plugins | Loading multiple, overlapping addons | Audit before adopt; vendor critical addons into repo |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Unbounded draw calls | FPS drops as scene density grows | <200 draw calls per scene; atlas materials; combine static geometry | When village scene reaches realistic density (~500+ props) |
| Per-frame `_process` on every node | Steady FPS drop independent of camera | Disable inactive nodes; pool; defer | When NPC count > 8 and all are simulated each frame |
| Unique materials per object | Sluggish even on simple scenes | Shared materials across props; texture atlases | When unique material count > 20 in a scene |
| No occlusion culling | Indoor scenes with hidden geometry rendered | Use occluder nodes; LODs; distance fade | At 30+ rooms / multi-floor buildings |
| Physics on decorative props | High physics frame time, low render frame time | Decoration props are visual-only; no collision body unless interactive | When decorative density > 100 props per scene |
| Naive AnimationPlayer per NPC | Stutter on NPC-heavy scenes | Reuse AnimationLibrary across NPCs; share rigs; reduce per-NPC bone count | At 6+ visible NPCs with full animation |
| GDScript hot loops on per-tile data | Frame stutters on world updates | Move to typed arrays; pre-cache; consider `RefCounted` lookups | At grid size > 100x100 |
| Loading every dialogue file at startup | Long initial load times | Lazy-load per character / per scene | At 50+ NPCs with full dialogue |

## Security Mistakes

(Cozy game, single-player; security surface is small. The few real concerns:)

| Mistake | Risk | Prevention |
|---------|------|------------|
| `ResourceLoader.load()` on user-provided save files | Code execution from malicious save (Resources can contain scripts) | Use `FileAccess.store_var` / `bytes_to_var` for player save data; do not load Resources from untrusted origin |
| Mod support without sandboxing | Modders can ship malicious mods | If mod support added: documented mod-loading API, never auto-execute scripts from mod folders without warning |
| Cloud save format leaks PII | Any user data in cloud save (assume not, but verify) | Save format contains only game state; no email/account info |
| Unsigned external assets in shipped build | Can't catch tampering | Steam handles binary signing; for itch, verify integrity hashes pre-launch |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Tutorial dump in opening minutes | Persona ("low patience for complex schemes") quits | Just-in-time tutorialization; teach when needed; never re-tutorialize mid-game |
| Modifier-key controls (Ctrl+Click, Shift+Drag) for primary actions | Confuses casual players; controller users locked out | Single-key / single-click for everything that's load-bearing |
| Modal dialogues that block movement | Player wants to look around mid-conversation; can't; quits | Dialogue lets player look around; advance is an explicit action |
| Inventory/menu UI dense and unscannable | Confusion during play; "where do I find X?" friction | Visual hierarchy, generous spacing, large hit areas, search/sort built in |
| New core systems introduced mid-game | "I learned this game already; now I'm relearning it" — direct violation of PROJECT.md UX pillar | Introduce all core systems in first 2 hours; later content is content, not new mechanics |
| Tiny clickable / interactable areas | Frustrating, especially on touchpad | Generous hitboxes; outlines on hover |
| Save anywhere implied but blocked in places | Player loses progress, quits | True save-anywhere; auto-save frequently |
| Settings menu hides accessibility options | Persona excluded; reviews mention it | Accessibility (text size, colorblind, motion reduction) on first-screen settings |
| First five minutes is exposition | Player sees no gameplay; bounces | First 5 minutes: player has agency. Story comes after agency. |
| Camera control demands precision | Persona's "VERY low patience" — quit-causing | Camera follows naturally; minimal manual rotation; never "fight the camera" moments |

## "Looks Done But Isn't" Checklist

- [ ] **Save system:** Often missing version-migration code — verify older save files load on a newer build
- [ ] **Save system:** Often missing complex-state round-trip test — verify a fully-progressed save reloads identically
- [ ] **Dialogue system:** Often missing localization-readiness — verify all dialogue passes through `tr()`
- [ ] **Dialogue system:** Often missing state-driven reactivity — verify dialogue varies on >5 distinct world states beyond friendship level
- [ ] **NPC behaviors:** Often missing "what if I never advance their arc" path — verify NPC has dialogue/behavior across all phases of the game even if player ignores them
- [ ] **Endgame:** Often missing "100 hours later" plan — verify hour-100 player has reasons to keep playing without new authored content
- [ ] **Crafting:** Often missing narrative attachment — verify each craftable item has discoverable story / character connection
- [ ] **Performance:** Often missing target-hardware test — verify game runs at 60fps on integrated GPU laptop, not dev machine
- [ ] **Performance:** Often missing dense-scene test — verify largest planned scene with full prop density runs within budget
- [ ] **Localization:** Often missing pluralization (`tr_n()`) — verify pluralized strings in dialogue and UI
- [ ] **Localization:** Often missing East Asian font support — verify Noto Sans CJK or equivalent is available and used
- [ ] **Steam page:** Often missing all required assets — verify capsule + library + header + screenshots + tags + 5 languages of description before submitting
- [ ] **Demo:** Often missing "demo state separate from full game" decision — make this decision explicitly
- [ ] **Tutorial:** Often missing "fresh-eyes test" — verify a non-gamer can complete the first 30 minutes without help
- [ ] **Accessibility:** Often missing colorblind / text-size / motion-reduction options — verify before launch
- [ ] **Marketing:** Often missing wishlist-tracking — verify weekly snapshot of wishlist count exists from page launch onward
- [ ] **Cozy promise:** Often missing time-pressure audit — verify no system penalizes a player for inaction

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Scope creep discovered (Pitfall 2) | MEDIUM if early, HIGH if late | (1) Freeze new systems; (2) categorize systems as keep/cut/defer; (3) re-plan timeline from current state; (4) communicate scope cut to community as a feature ("focused launch"); (5) move cut content to v1.1 / DLC roadmap |
| Endgame cliff revealed in playtest (Pitfall 3) | HIGH | (1) Don't ship; (2) implement state-driven dialogue layer; (3) implement at least 3 ongoing arcs that don't end; (4) re-test with persona at 30+ hours of play |
| Burnout (Pitfall 6) | LOW if caught early, HIGH if ignored | (1) 1-week true break; (2) reduce hours by 30% for 4 weeks; (3) re-evaluate scope; (4) re-engage community for motivation infusion; (5) consider one-week paid contractor to break a stuck blocker |
| Slice debt overload (Pitfall 5) | MEDIUM | (1) Stop new content production; (2) read slice debt log; (3) prioritize debt items by integration cost; (4) pay down highest-ROI items in dedicated 2-week sprint; (5) resume only after debt < threshold |
| Save format incompatibility post-release | HIGH | (1) Patch with version-migration code; (2) clear messaging to players; (3) backup-old-save logic; (4) consider rollback-friendly save format from this point |
| Performance collapse (Pitfall 20) | MEDIUM | (1) Profile to identify hot spots; (2) materials atlas; (3) MultiMesh repeated props; (4) occlusion / LOD / distance fade; (5) per-scene budgets enforced going forward |
| Cold launch / no wishlists (Pitfall 23) | VERY HIGH | (1) Don't launch yet; (2) delay 6-12 months; (3) re-build community presence; (4) Next Fest re-entry; (5) consider Early Access rather than full launch |
| Plugin abandoned (Pitfall 21) | MEDIUM | (1) Use vendored fork; (2) decide whether to rewrite-replace or fix-and-maintain-fork; (3) wrapper interface protects rest of project |
| Time pressure crept in (Pitfall 12) | LOW if caught early | (1) Audit every system against time-pressure checklist; (2) reframe: season-locked → repeatable; missable festival → recurring; (3) re-test with persona |
| Burnout-driven shipping a damaged game | Project-killer | Prevention only. There is no good recovery from this; the launch reputation is set. |

## Pitfall-to-Phase Mapping

(Phases are notional — actual phase structure is set by the roadmap. Map is "earliest phase that should address" — many require continuous re-attention.)

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| 1. Stardew Killer Delusion | Phase 0 (vision/branding) | Marketing copy never uses "Stardew" comparisons; positioning audit |
| 2. Scope Creep | Every phase | SCOPE.md log; system count never exceeds 7; system-budget enforced |
| 3. Endgame Content Cliff | Phase 1 (design pillars) | "Why play at hour 100?" doc exists; state-driven dialogue demonstrated in slice |
| 4. 3D as a Beginner | Phase 2 (pipeline) | Stylization style guide; Blender→Godot pipeline standardized; per-scene perf budget enforced |
| 5. Vertical Slice Trap | Phase 3-5 (slice production) | Slice debt log maintained; tooling built alongside content; honest slice-to-full extrapolation |
| 6. Burnout | Phase 1 (set cadence), continuous | Hours-per-week tracking; weekly retrospective; mandatory breaks; Year-3-Wall pre-commitments |
| 7. Content Production Underestimation | Phase 1 (estimation), Phase 6+ | Per-NPC content estimate from slice; cap on NPC count; voice acting excluded |
| 8. All-Hats Trap | Phase 0, Phase 7+ | Hat inventory; targeted micro-budget allocations approved; capsule art commissioned |
| 9. No Feedback | Phase 2, continuous | Persona zero playtest sessions logged; ring 2 testers identified; public devlog from month 3 |
| 10. Skill Order | Phase 0-2 | JIT learning; tutorial graveyard tracked |
| 11. Cozy but Boring | Phase 1, slice playtests | Distinguished micro-friction (kept) from macro-pressure (excluded) in design pillars |
| 12. Subtle Time Pressure | Phase 1, every system review | Time-pressure audit checklist run on every system |
| 13. NPC Dialogue Rot | Phase 1, slice | State-driven dialogue, not level-driven, demonstrated in slice |
| 14. Branching Explosion | Phase 1, Phase 2 (tooling) | Variables-not-branches; Ink or equivalent adopted |
| 15. Crafting Menus & Grind | Phase 1, slice | Every craftable has narrative attachment; craft is "moment" not "transaction" |
| 16. Companion-as-Quest-Dispenser | Phase 1, slice | NPC has ambient state and arcs, not just quests |
| 17. Difficulty Walls (cozy) | Phase 1, every playtest | Wall audit checklist; persona zero validates |
| 18. Save System Late | Phase 2 (foundational) | Save built in first 2 months; round-trip tests; versioning from day one |
| 19. Godot Version Migration | Phase 0 (lock), every phase boundary | Version pinned per phase; migration milestones explicit |
| 20. 3D Performance | Phase 2 (budget), continuous | Per-scene draw call budget enforced; min-spec target hardware test exists |
| 21. Plugin Abandonment | Phase 2 (adoption decisions) | Wrapper interfaces; vendored forks; addon health audit |
| 22. Localization Late | Phase 2 (foundational) | All strings via `tr()`; PO file exists; pluralization considered |
| 23. "Build It and They Will Come" | Phase 7+ (Steam page launch) | Steam page up at slice; weekly wishlist tracking; devlog cadence |
| 24. Capsule / Trailer Underinvested | Phase 7+, Phase 9+ | Capsule commission budgeted; trailer treated as separate production |
| 25. Pricing Mistakes | Phase 8+ | Benchmark against 5-10 cozy life sims at launch time |
| 26. Demo Strategy | Phase 8+ | Demo synced to Next Fest; 30-60 min length; representative slice |
| 27. Late Community Building | Phase 7+, continuous | Discord live at Steam page launch; cross-posting cadence; cozy-genre community engagement |

## Sources

### Primary references (HIGH confidence)
- [Godot 4.4 Migration Guide (official)](https://docs.godotengine.org/en/stable/tutorials/migrating/upgrading_to_godot_4.4.html)
- [Godot 4.3 Migration Guide (official)](https://docs.godotengine.org/en/stable/tutorials/migrating/upgrading_to_godot_4.3.html)
- [Godot Optimizing 3D Performance (official)](https://docs.godotengine.org/en/stable/tutorials/performance/optimizing_3d_performance.html)
- [Godot Saving Games (official)](https://docs.godotengine.org/en/stable/tutorials/io/saving_games.html)
- [Godot Localization with gettext (official)](https://docs.godotengine.org/en/stable/tutorials/i18n/localization_using_gettext.html)
- [GDQuest: Save and Load — Godot 4 Cheat Sheet](https://www.gdquest.com/library/cheatsheet_save_systems/)
- [Inkle: ink scripting language for narrative branching](https://www.inklestudios.com/ink/)
- [Embracing the Combinatorial Explosion (R&D paper)](https://www.researchgate.net/publication/220920169_Embracing_the_Combinatorial_Explosion_A_Brief_Prescription_for_Interactive_Story_RD)

### Solo-dev post-mortems and dev wisdom (MEDIUM-HIGH confidence)
- [Derek Yu: Indie Game Dev Death Loops](https://www.derekyu.com/makegames/deathloops.html)
- [Derek Yu: Getting Feedback](https://www.derekyu.com/makegames/feedback.html)
- [Eric Barone (ConcernedApe) — Wikipedia](https://en.wikipedia.org/wiki/Eric_Barone)
- [Last Humble Bee post-mortem: staying sane in solo development](https://www.gamedeveloper.com/business/the-last-humble-bee-postmortem-staying-sane-in-solo-development)
- [Adam Saltsman: Profitable Indie Game Development](https://www.gamedeveloper.com/business/profitable-indie-game-development-with-adam-saltsman)
- [Lessons From a Master: Adam Saltsman](https://www.gamedeveloper.com/design/lessons-from-a-master-adam-saltsman)
- [Spiritfarer: Inside the thoughtful design (Game Developer)](https://www.gamedeveloper.com/design/inside-the-thoughtful-design-of-thunder-lotus-i-spiritfarer-i-)

### Scope creep and burnout (MEDIUM confidence)
- [Wayline: Scope Creep — The Silent Killer of Solo Indie Game Dev](https://www.wayline.io/blog/scope-creep-solo-indie-game-development)
- [Wayline: Solo Dev Playbook — First Indie Game Without Burnout](https://www.wayline.io/blog/solo-dev-playbook-first-indie-game-without-burnout)
- [Game Developer: The Fire Fades — Burnout in game dev](https://www.gamedeveloper.com/production/the-fire-fades-dealing-with-the-scourge-of-burnout-in-game-dev)

### Marketing (MEDIUM-HIGH confidence)
- [Chris Zukowski (How To Market A Game): hit games of early 2025](https://howtomarketagame.com/2025/04/11/the-hit-games-of-early-2025/)
- [Chris Zukowski: Steam Next Fest October 2025 — what broke through](https://howtomarketagame.com/2025/10/20/steam-next-fest-october-2025-checking-in-on-the-games-that-broke-through/)
- [presskit.gg: How Many Wishlists Do You Need to Launch](https://presskit.gg/field-guides/how-many-wishlists-to-launch)
- [Steamworks: Steam Next Fest October 2025 documentation](https://partner.steamgames.com/doc/marketing/upcoming_events/nextfest/2025october)

### Cozy genre design (MEDIUM confidence)
- [Kitfox Games / Tanya X. Short: Designing for Coziness](https://www.gamedeveloper.com/design/designing-for-coziness)
- [Lostgarden: Cozy Games](https://lostgarden.com/2018/01/24/cozy-games/)
- [SDLC: Balancing Relaxation and Engagement in Cozy Game Mechanics](https://sdlccorp.com/post/balancing-game-mechanics-for-relaxation-and-engagement-in-cozy-games/)
- [The Gamer: Cozy Games Without Time Pressure](https://www.thegamer.com/cozy-games-dont-have-time-limits/)
- [Stardew Valley Wiki: Friendship](https://stardewvalleywiki.com/Friendship)
- [Nexus Mods: Fourteen Heart Events for All (evidence of dialogue rot)](https://www.nexusmods.com/stardewvalley/mods/14212)
- [GamesRadar: ConcernedApe regrets fishing minigame difficulty](https://www.gamesradar.com/games/simulation/concernedape-regrets-making-stardew-valleys-fishing-minigame-too-hard-when-you-start-out-but-still-thinks-its-good-overall-i-know-its-controversial/)

### Pipeline and tooling (MEDIUM confidence)
- [Blender Studio: Workflow with Blender and Godot](https://studio.blender.org/blog/our-workflow-with-blender-and-godot/)
- [Supermatrix: Best Workflow for Animated Characters Blender→Godot 2026](https://supermatrix.studio/blog/best-workflow-for-exporting-animated-characters-from-blender-to-godot)
- [Blender to Godot 4 Pipeline Addon (Michael Jared)](https://michaeljared.itch.io/blender-to-godot-4-pipeline-addon)
- [Dialogic on GitHub](https://github.com/dialogic-godot/dialogic)
- [Dialogue Manager (Nathan Hoad) on GitHub](https://github.com/nathanhoad/godot_dialogue_manager)

### Audio resources (LOW-MEDIUM confidence)
- [Ninichi: 6 Ways to Manage Burnout as an Indie Game Developer](https://ninichimusic.com/blog/6-ways-to-manage-burn-out-as-an-indie-game-developer)
- [Ovani Sound (royalty-free audio for solo devs)](https://indiegamebusiness.com/indie-game-sound-design/)
- [99Sounds: Free CC0 sound library](https://www.nightquestgames.com/best-free-audio-tools-and-resources-for-game-development/)

### Project context
- D:\Projects\game\.planning\PROJECT.md
- D:\Projects\game\.planning\research\PERSONA.md

---
*Pitfalls research for: 3D narrative-driven cozy life sim, solo dev, Godot 4, ~$100 budget, 4-6 year horizon*
*Researched: 2026-05-09*
