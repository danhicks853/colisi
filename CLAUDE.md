# CLAUDE.md — Colisi

> ⚠️ **Read this entire top section before doing anything in this project.** This is the load-bearing rule set. The GSD-generated sections that follow are reference; this section overrides them when they conflict.

---

## 🚨 LOAD-BEARING RULES

### 1. AI Use Policy — Strict, Enforced by You (Claude)

Colisi has a **strict AI use policy** documented in [`PHILOSOPHY.md`](PHILOSOPHY.md) Section V and publicly disclosed in [`AI-DISCLOSURE.md`](AI-DISCLOSURE.md). Daniel has explicitly delegated **enforcement** to you. Self-discipline alone is insufficient on a 4-6 year solo project; tired-Daniel will be tempted to bend rules that present-Daniel committed to. Your job is to not let that happen.

#### Refusal list — NEVER generate these for this project

You **refuse** to generate, draft, or author any of the following, even if asked, even if it seems harmless, even if it's "just placeholder," even if Daniel sounds tired or rushed:

- ❌ **Any visual asset** — sprites, textures, 3D models, UI art, particle effects, animations, character art, environment art, icons, concept art, mood boards, reference art, *even if never shipped*. AI placeholder art is forbidden too.
- ❌ **Any audio asset** — music, SFX, voice, ambience.
- ❌ **Any in-game writing** — dialogue lines, item descriptions, menu copy, journal entries, tooltips, character / NPC / place / item / mechanic names.
- ❌ **Procedural-template dialogue at runtime** — even if templates would be human-authored. Off the table.
- ❌ **Level layouts or core gameplay-loop designs** as final artifacts (brainstorming options is OK; final design is Daniel's).
- ❌ **Public-facing creative writing** — Steam page copy, capsule copy, trailer narration, devlog posts, marketing tweets, community posts.
- ❌ **Unsolicited name suggestions** for in-game entities. (Names are allowed *only* if Daniel explicitly asks for idea-generation prompts like "give me 10 forest spirit name ideas.")

When refusing, do all four:
1. Refuse the request directly. No hedging, no "I could but..."
2. Reference the rule (`PHILOSOPHY.md` Section V or this file).
3. Offer the legitimate alternative — brainstorming options, copy-checking Daniel's draft, helping him learn the tool, or finding human-creator resources.
4. If Daniel pushes back out of fatigue or shortcut-seeking, hold the line. The rules exist *for* the moments when Daniel is tired or rushed.

#### Allowed — explicitly

- ✓ Code autocomplete, refactor, bug-finding, lint (Daniel reviews every committed line).
- ✓ Boilerplate code generation.
- ✓ Project planning artifacts (PROJECT.md, ROADMAP.md, this file, etc.).
- ✓ Research synthesis.
- ✓ Brainstorming partner: "what are some possibilities to develop this character," "give me ideas for a story arc," "give me 10 name options."
- ✓ **Critique and copy-check on Daniel's drafts** — for prose he wrote.
- ✓ Tooling scripts (build, deploy, asset-pipeline glue).
- ✓ Localization assist (machine translation as a starting point for human translator review).
- ✓ Help learning a creative tool (Blender, LMMS, Aseprite) so Daniel can create the asset himself.
- ✓ Help locating human-creator resources (CC0 packs, paid freelancers).

#### What you must do beyond refusing

- **Surface near-violations as `slice-debt.md` entries.** If a gray-area request gets handled, propose a slice-debt log entry with a resolution path.
- **At every monthly retro,** offer to scan player-facing or public artifacts for any AI-generated content that may have leaked, flag for replacement.
- **Disclose AI assistance in commits** — substantive AI-assisted commits get tagged.

### 2. Vertical Slice Mindset (Architecture First)

The vertical slice is a checkpoint, NEVER the endpoint. Every system, architecture decision, and pattern is sized for the full 30+ hour shipping game from day one. Slice content scopes down; slice systems do not. Hacky shortcuts go in `slice-debt.md` with a promotion-or-payoff strategy. Silent slice debt is forbidden.

### 3. Cozy Promise — Hard Design Guardrails

Never propose, accept, or implement:
- Real-time-pressure mechanics (day clocks, missable windows, expiring events, stamina, tool durability, bedtime forcing)
- **Real-time forward-timer gating** (wait X real-world minutes/hours for resources/crafted items/growth/unlocks to complete). Locked 2026-05-10 — MKTG-06 corpus (Sandrock R24, Dreamlight R16).
- **Real-world-clock-tied content gating** (NPCs/critters/events/shops available only during specific real-world hours). Locked 2026-05-10 — MKTG-06 corpus (Dreamlight R11).
- Endgame difficulty walls or stat-check failures
- Story-completion-as-game-end
- Restart-to-rebranch CYOA
- Forced tragic endings
- Required combat / required multiplayer
- Skill trees that gate progression
- Mid-game introduction of untaught mechanics
- Ambiguous puzzles without telegraphed solutions
- **Breaking bugs shipped externally** (playtest, tech demo, patch, gameplay). Locked 2026-05-10 — production polish IS accessibility (Pillar 3); empirical anchor MKTG-06 corpus.

These come from PERSONA.md research + MKTG-06 corpus evidence. They are the design center of the game. Treat as immutable.

### 4. Honesty Over Optimism

Distinguish hypothesis from fact. n=1 is design anchor, not market evidence. The "underserved demographic" framing is qualitatively supported but NOT yet validated; MKTG-06 in Phase 1 is the gate. Do not soften assessments to be encouraging. Do not bundle hopes with evidence. Surface uncertainty explicitly.

### 5. The Six Words

When in doubt: **"Architect for the full game. Ship the slice. Respect the player. Don't burn out."**

If a decision violates any of those four clauses, it's the wrong decision.

---

## 📚 Authoritative Documents (precedence order when in conflict)

1. **`PHILOSOPHY.md`** — the project constitution (philosophy, guidelines, guardrails, processes, policy, Claude's enforcement role, amendment process)
2. **`AI-DISCLOSURE.md`** — public-facing AI use disclosure
3. **`PROJECT.md`** — current product context and active requirements
4. **`ROADMAP.md`** — phase ordering and gates
5. **`REQUIREMENTS.md`** — v1 requirements with traceability
6. **`.planning/research/`** — reference research (STACK, FEATURES, ARCHITECTURE, PITFALLS, SUMMARY, PERSONA)

If reality on the ground conflicts with one of these documents, *fix the document or fix the reality, but do not let them diverge silently.* See PHILOSOPHY.md Amendment Process.

---

<!-- GSD:project-start source:PROJECT.md -->
## Project

**Colisi** — pronounced *COH-LIE-SIGH* (/koʊˈlaɪsaɪ/), an initialism of **CO**zy **LI**fe **SI**m. *(Project codename; final shipped game title TBD by Phase 7 Steam page launch.)*

A 3D narrative-driven cozy life sim for the underserved "deep cozy enjoyer" demographic — players who love Stardew-class relationship and crafting loops but who consistently bounce off time-pressure systems, difficulty-curve walls, and "story ends → game ends" content cliffs. The game crosses Baldur's Gate 3's companion-driven branching narrative with The Sims' player-expression and life-control loops, wrapped in a whimsical fantasy / magical realism aesthetic. Setting includes spirits, witches, talking animals, and other gentle-magic elements.

The core fantasy, in the lead persona's own words: **"Talking to the people and finding where I fit in."**

**Core Value:** **Characters and relationships that keep evolving, in a world that never punishes the player.** If everything else fails, this one thing must work: the people you meet feel real, your choices ripple through their lives in lasting ways, and you can play forever without time pressure or a difficulty wall ever closing the door on you.

### Constraints

- **Tech stack**: Godot 4 + GDScript + Blender — Free/MIT, no royalty risk, sustainable solo toolchain.
- **Budget**: ~$100 USD lifetime cash spend (Steam fee dominates) — Daniel is time-rich, money-poor; tooling and asset choices must default to free/CC0/open-source.
- **Team**: Solo developer, beginner — Architecture and tooling decisions must favor approachability and avoid systems that require team-scale workflows. AI tooling (this project) acts as planning and pair-programming partner.
- **Timeline**: Multi-year (4–6 year horizon for full game) — Roadmap must support sustainable pace, vertical slice as 12–18 month checkpoint, not all-or-nothing big-bang release.
- **Scope at v1**: 30+ hour cozy life sim — Ambitious for solo first project; mitigated by vertical-slice-first delivery and ruthless scope discipline at the system-content boundary (cut content count, never cut systems).
- **Art direction**: Stylized only — Solo dev cannot scale photorealistic 3D production; stylization is both budget reality and brand identity.
- **Performance target**: Modest hardware — Cozy demographic skews to laptops, integrated GPUs, and older machines. Optimize for that floor, not high-end PC.
- **Distribution**: Steam + itch.io for v1 — Console / mobile excluded from v1 scope.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Executive Recommendation (read this first)
- **Engine:** Godot **4.5.x** (specifically the latest 4.5 patch — currently 4.5.2). Not 4.6, not 4.7 beta. *(Rationale: stability over features for a 4–6 year solo project; details below.)*
- **Language:** **GDScript** for everything. Defer C# and GDExtension until profiling proves a need. You will likely never need them.
- **3D pipeline:** Blender (latest LTS) → glTF 2.0 (.glb) → Godot. Use the NLA Editor for animations. Use bone maps + Godot's animation retargeting so a single skeleton powers many characters.
- **Asset baseline:** Kenney + Quaternius + KayKit (CC0) for placeholder and possibly final-art-adjacent assets; Mixamo for animation library; expect to replace hero-character art with bespoke Blender work as skill grows.
- **Narrative tooling:** **Dialogic 2** (alpha, GDScript-native). Acceptable risk because alternatives are worse for your specific shape (3D embodied, GDScript codebase, solo dev).
- **Save system:** **Custom Resources** (`.tres` for dev, `.res` for ship). Type-safe, code-light, native to Godot, zero dependencies.
- **Localization:** **CSV** during development, migrate to **gettext PO** before first ship if you intend localized release.
- **Audio:** Freesound + OpenGameArt + Kenney + itch.io CC0 packs for SFX; Bosca Ceoil for placeholder music; LMMS or REAPER trial for final music.
- **Version control:** Git + Git LFS, GitHub private repo. Set up LFS *before first commit*.
- **Editor:** Godot's built-in editor as primary. VS Code with `godot-tools` extension as secondary for long script edits and debugging.
- **Steam:** **GodotSteam GDExtension** (asset-library install). Defer integration until ~6 months pre-launch.
- **itch.io:** **butler** CLI. Manual upload for first ~2 years; automate with GitHub Actions later.
- **Testing:** **GUT 9.x** for GDScript unit tests, kept minimal until vertical slice. Don't TDD a cozy game — test the systems that hurt to break (save/load, dialogue branching, time/calendar logic).
## Recommended Stack
### Core Technologies
| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Godot Engine | **4.5.2** (stable) | Game engine | Latest stable from the prior feature branch. 4.6 (Jan 2026) is current latest stable but is 0–4 months old; 4.5 has had ~4 maintenance patches and is the more battle-tested branch for a solo project that will live in this engine version for 12–18 months before the slice ships. MIT license, no royalties, no per-seat fees. **You can upgrade to 4.6.x later** when the .x patches stabilize, but pinning to one stable branch for the slice phase reduces "did the engine change?" debugging. (HIGH confidence) |
| GDScript | bundled with engine | Primary scripting language | Native to Godot, fastest iteration, every official tutorial uses it, every Asset Library addon ships GDScript or has a GDScript interface. 59% faster Vector ops with type annotations. Beginner-friendly Python-like syntax. **For a beginner solo dev, this is not a close call.** (HIGH confidence) |
| Blender | **Latest LTS** (4.x) | 3D modeling, rigging, animation, UV, baking | Free, MIT/GPL, industry-standard at indie scale, glTF export is first-class and continually improved. LTS branch (not bleeding edge) for stability. (HIGH confidence) |
| glTF 2.0 (.glb) | format spec | Blender → Godot interchange | Officially recommended by both Godot and Blender. Embeds materials, animations, bones, blend shapes in a single binary. **Do not use FBX or .blend direct import** for production assets — glTF is the documented happy path. (HIGH confidence — confirmed by Godot docs and Blender Studio's own pipeline article) |
| Git + Git LFS | Git 2.40+, LFS 3.x | Version control + binary asset storage | Industry standard. LFS is mandatory for a 3D project — without it, repo bloats to gigabytes within months and clones get unusable. (HIGH confidence) |
| GitHub (private repo) | — | Remote hosting | Free private repos with 1 GB LFS storage + 1 GB/mo bandwidth on free tier. For a solo project, that's tight but workable; budget $5/mo for a Data Pack if/when you exceed it (still well inside $100 lifetime). (HIGH confidence) |
### Supporting Libraries / Addons
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **Dialogic 2** | latest alpha (Godot 4.4+ compatible) | Visual node-based dialogue editor + runtime | Use from day one for branching dialogue, character portraits, choice trees, variable-driven dialogue. GDScript-native, artist-friendly UI, the de facto Godot dialogue tool. **Caveat: still alpha**, expect breaking changes between alpha versions — pin to a specific commit and only update during quiet phases. (MEDIUM confidence — tool is excellent, alpha status is the risk) |
| **GodotSteam GDExtension** | 4.18.x (Steamworks SDK 1.64), Godot 4.4+ | Steam achievements, cloud saves, rich presence, workshop | Install ~6 months before first Steam launch. Pure GDScript projects: use the GDExtension flavor (no engine recompile needed). The maintainer ships maintenance updates within ~2 weeks of new Steamworks SDK and Godot patch releases — among the healthiest addons in the ecosystem. (HIGH confidence) |
| **GUT (Godot Unit Test)** | 9.x (Godot 4.x) | Unit + integration testing | Pure GDScript test framework. Use it sparingly — test save/load round-trips, dialogue condition evaluation, calendar/time logic, inventory math. **Don't unit-test visual scenes or level layout**; the cost/value is wrong. Latest release supports up to 4.6. (HIGH confidence) |
| **inkgd** | 0.5.x (Godot 4.2+ branch) | Optional: Ink narrative scripting (GDScript port) | **Only if Dialogic 2 buckles under your branching complexity** and you find yourself fighting the visual editor. inkgd is feature-complete but ~50× slower than the C# Ink runtime. For a cozy game with conversational dialogue (not 100k-word epic VN), this is a non-issue. Default to Dialogic 2; keep inkgd in your back pocket. (MEDIUM confidence) |
| **Mixamo Animation Retargeter** (asset-library addon) | latest, Godot 4.x | Batch-retarget Mixamo FBX → Godot animations | Adds right-click "Retarget Mixamo Animation" on FBX files, batch-processes, saves to Animation Libraries as `.res`. Saves hours over manual bone-mapping. *(If the addon misbehaves on your specific Godot version, fall back to the manual bone-map workflow in the Godot docs — the underlying engine support is solid even when the addon UI lags.)* (MEDIUM confidence — addon quality varies by Godot version) |
| **Quaternius Universal Animation Library** | current | 120+ humanoid animations, ready to retarget | Free, CC0, sized for indie use. Walk/run/idle/sit/wave/pick-up/etc. cover ~80% of cozy-game animation needs without ever opening Mixamo. Pair with Godot's bone map system. (HIGH confidence on existence and license; verify each animation works for your skeleton) |
| **butler** (itch.io CLI) | latest | Push builds to itch.io | Official itch.io tool. One command per channel: `butler push <build-folder> <user>/<game>:<channel>`. Use a dedicated Butler API key (not your account API key). (HIGH confidence) |
### Development Tools
| Tool | Purpose | Notes |
|------|---------|-------|
| **Godot built-in editor** | Primary IDE | Everything works out of the box: scene graph, animation editor, shader editor, debugger, profiler, remote scene tree inspector. **For a beginner, do not split your editor surface area** — fight the temptation to bounce to VS Code for everything. The built-in script editor is good enough for most files. |
| **VS Code + godot-tools** | Secondary IDE | Use for: long script files (>500 lines), heavy refactors, when you want better Git diff UI, debugging with conditional breakpoints. The extension uses Godot's headless LSP — same autocomplete the built-in editor has. Set VS Code as Godot's external script editor in Editor Settings if you want auto-launch on script open. |
| **Blender** | 3D content authoring | One window across Blender + Godot is the daily driver. Pin Blender's glTF export settings: NLA Strips on, "Export all animation actions" off, Backface Culling on for materials. |
| **GIMP or Krita** | 2D textures, UI assets, sprite work | Both free. Krita's brush engine is friendlier for hand-drawn UI and concept art; GIMP's better for clean texture editing and atlas work. Pick one and stick with it. |
| **Bosca Ceoil** (Blue) | Placeholder + chiptune music | Browser or desktop, free, learn it in <30 min. Perfect for "I just need a 16-bar loop for the menu so I can move on" moments. |
| **LMMS** (free) **or REAPER** (trial → $60 discounted) | Final-track music DAW | LMMS if you stay strictly $0. REAPER if you can stretch $60 — its 60-day full-functionality trial is enough for one full slice-music pass before deciding. |
| **Audacity** | SFX editing, audio cleanup | Free. Trim, normalize, export OGG Vorbis (Godot's preferred format for short SFX) or WAV (for music masters). |
| **GitHub Desktop** | Git GUI for beginners | Optional. CLI Git is fine, but GUI helps for visual diff of binary scenes. |
| **Inkscape** | Vector UI elements, icons | Free. SVG → PNG export pipeline for crisp UI icons. |
## Installation
# Windows / PowerShell — assuming chocolatey or winget for system tools
# 1. Engine + DCC tools (manual installers, not package-managed for safety)
#    - Godot 4.5.2 stable: https://godotengine.org/download/archive/4.5.2-stable/
#      Download godot-stable, NOT the .NET version (you're on GDScript)
#    - Blender LTS:        https://www.blender.org/download/lts/
#    - VS Code:            https://code.visualstudio.com/
#    - Audacity:           https://www.audacityteam.org/
#    - Bosca Ceoil Blue:   https://yurisizov.itch.io/boscaceoil-blue
# 2. Git LFS — install BEFORE creating the project repo
# 3. VS Code extensions (after VS Code install)
# 4. butler (itch.io CLI)
#    Download from https://itch.io/docs/butler/
#    Or via itch app: Settings > Install butler
# 5. Godot Asset Library installs (do these inside the Godot editor:
#    AssetLib tab > search > Download > Install to project)
#    - Dialogic 2
#    - GodotSteam GDExtension (only when ~6 months from Steam launch)
#    - GUT
#    - Mixamo Animation Retargeter (when needed)
## 3D Art Pipeline (Blender → Godot)
### Standard pipeline
### Animation library pattern (do this from day one)
- One canonical character skeleton (`hero_skeleton.glb`) with a configured bone map.
- Animations live as separate `.res` Animation resources in `res://animations/<character>/`, organized by Animation Library.
- Each NPC instance loads the same animation library — variations come from skeleton differences, not duplicated animation data.
- This pattern scales from 1 character to 50 without art-pipeline rewrite.
### What NOT to do
- **Do not import `.blend` files directly** in production. It works for prototypes but ties your asset pipeline to Blender being installed at the same path on every machine and slows imports.
- **Do not export FBX** unless an external tool requires it (e.g., Mixamo upload). FBX in Godot is supported but not the recommended path; glTF has fewer edge cases.
- **Do not bake all animations into the character `.glb`.** That ships duplicated bone data per animation and makes iteration painful. Use Animation Libraries.
## Asset Library Recommendations (CC0 / commercial-use-friendly)
| Source | Content | License | Use Case |
|--------|---------|---------|----------|
| **Kenney.nl** | Massive 3D and 2D pack library (low-poly characters, props, nature, UI) | CC0 | First-line placeholder + many shippable props. Cohesive "Kenney style" is recognizable but professional for a cozy game. (HIGH confidence) |
| **Quaternius** | Stylized low-poly 3D models + Universal Animation Library | CC0 | Trees, rocks, foliage, animals, modular dungeon, **and** the 120-animation humanoid library. (HIGH confidence) |
| **KayKit** (Kay Lousberg) | Adventurer characters, dungeon kits, nature pack, mini-game kits | CC0 | Higher-quality stylized characters than Kenney; arguably shippable as final art for a cozy slice. (HIGH confidence) |
| **Mixamo** (Adobe) | Auto-rigged humanoid animations | Free for commercial use, no attribution required (per Adobe's current ToS) | Animation library — upload a model, download retargeted animations. Combine with Godot's Mixamo Retargeter addon. **Verify ToS at integration time** (Adobe has historically tweaked language). (MEDIUM confidence on continued license terms; HIGH on current state) |
| **Polygon style packs (Synty)** | Higher-poly stylized commercial packs | Paid, commercial | **Skip unless wishlist revenue funds them.** Typically $30–$80 per pack, mismatched with $100 lifetime budget. Note for post-slice if revenue allows. |
| **OpenGameArt.org** | Mixed 2D/3D, music, SFX | Mixed (CC0, CC-BY, CC-BY-SA, GPL) | **License-check every download.** CC-BY requires attribution (acceptable); CC-BY-SA and GPL are viral and can poison commercial release — avoid. |
| **itch.io game-assets section** | Mixed | Mixed | Filter to CC0 explicitly. Many cozy-aesthetic packs hide here. |
| **Freesound.org** | SFX | Mixed (filter to CC0 tag) | Best single source for SFX. Filter by `cc0` tag, not just "free." |
| **Sketchfab** | 3D models | Mixed | Filter to "Downloadable" + "CC0" or "CC-BY" with a visible attribution plan. |
### License hygiene rules (non-negotiable)
## Narrative / Dialogue Tooling — The Hard Choice
### Option A — Dialogic 2 (recommended)
- **Status:** Alpha as of May 2026. The team has been honest that they want it polished before declaring stable. Despite the alpha label, it is **used in shipped commercial games**.
- **Language:** GDScript native.
- **Editing surface:** Visual node-based editor inside Godot. Artist-friendly. Can also direct-edit `.dtl` files.
- **Strengths:** Character portraits, choice UI, variable system, integration with Godot signals, audio cues, animation hooks, save-game integration. The right shape for a cozy game with character-driven dialogue.
- **Risks:** Breaking changes between alpha versions. Pin to a specific tag/commit and update only during quiet weeks. Complex branching beyond ~50 nodes per conversation can feel cramped in the visual editor.
- **Confidence:** MEDIUM (excellent fit, real alpha risk).
### Option B — inkgd (Ink, GDScript port)
- **Status:** Feature-complete, not officially released, supports Godot 4.2+ (use the `godot4` branch).
- **Language:** GDScript (the runtime). Story files are in **Ink markup** (a text DSL by inkle, used by 80 Days, Heaven's Vault, Sorcery!).
- **Editing surface:** Inky desktop editor (free) for writing Ink. No visual node editor.
- **Strengths:** Best-in-class for highly branching narrative. Persistent state, save/load, lists/sets, complex conditionals. Used by major studios.
- **Risks:** **~50× slower than the C# Ink runtime** (irrelevant for cozy-game dialogue rates, but worth knowing). Text-first means no visual graph of branching — for a writer who isn't a programmer, this is a real cost.
- **Use only if:** Dialogic 2 buckles for you, OR you discover you love writing in Ink (the syntax is genuinely nice for branching prose).
- **Confidence:** MEDIUM.
### Option C — Yarn Spinner
- **Status:** **Godot support is in alpha as of early 2026** and requires Godot 4.6+. Mature on Unity; immature on Godot.
- **Recommendation:** **Do not pick Yarn Spinner for this project.** The Unity-first development model means Godot is a second-class citizen, and you'd be on the bleeding edge of two alphas (Yarn Godot integration + Dialogic-equivalent niche tooling) without the broader Yarn-on-Godot community to lean on.
- **Confidence:** HIGH that this is the wrong choice **today**. Re-evaluate in 2027 if Yarn Godot reaches stable.
### What about GDQuest's dialogue plugins?
## Save System Pattern (decided, do not re-litigate)
| Approach | Verdict | Reasoning |
|----------|---------|-----------|
| **Custom Resource (`.tres` dev / `.res` ship)** | **Use this.** | Type-safe (compile-time errors instead of runtime KeyError), preserves Godot types natively (Vector2, Color, NodePath, sub-Resources), minimal boilerplate, references between resources just work. |
| JSON | Avoid for save data. | Loses type info (Vector2 → array, ints → floats). Forces conversion code. **Useful only for talking to web APIs** or for human-readable export/import. Cozy game has neither requirement at slice scale. |
| ConfigFile (.ini) | Use for **settings only** (volume, keybinds, language). Not save games. | INI is great for flat key-value. Save games are nested and structured; ConfigFile can do it but with friction. |
| FileAccess.store_var(dict) | Avoid. | No schema. No type safety. Refactors silently break. Tempting for prototypes; you'll regret it. |
### Save architecture pattern
### Critical practices
- **Use `Godot Safe Resource Loader` (community addon) when loading save files** if you ever distribute save sharing. Plain `ResourceLoader.load` on `.tres` will execute embedded code — a save-file remote-code-execution risk. For a single-player cozy game where saves never leave the user's disk, this is low-priority but worth documenting.
- **Version field from day one.** Your save schema will change. Migration code is far easier to write when the original save knows its version.
- **Save to user://, never res://.** Godot enforces this on export, but be explicit in code.
- **Atomic saves: write to `save.tmp`, then rename to `save.res`.** Power-loss-safe. Godot's `DirAccess.rename_absolute` is your friend.
## Localization
### Recommendation by phase
- **Pre-slice (now → year 1):** **CSV format**. Drop `translations.csv` in `res://`, Godot auto-imports per-locale `.translation` resources. Use `tr("KEY_NAME")` everywhere from the start. This costs almost nothing.
- **Vertical slice ship:** English-only is fine. Have all user-visible strings in `tr()` calls already.
- **Pre-full-launch:** Migrate to **gettext PO files** if you commit to localized release. PO is the industry-standard format every professional translator uses (SDL Trados, memoQ, Phrase, Crowdin). CSV cannot represent plural forms (`tr_n()`); PO can.
### Key naming convention
### Anti-patterns
- **Hard-coded English strings in scripts.** Refactor cost compounds linearly with project age. Wrap in `tr()` from day one even if you only have one locale.
- **Concatenating translated strings.** Every locale has different word order. Use full sentence keys with format placeholders: `tr("DIALOG_GIFT_RECEIVED").format({"item": item_name})`.
## Audio Sourcing & Production
| Need | Free / cheap path |
|------|-------------------|
| **Placeholder SFX** | Freesound.org filtered to `cc0` tag. Kenney's audio packs (CC0). Free SFX bundles on itch.io. |
| **Final SFX** | Mix of high-quality CC0 packs + light editing in Audacity (trim, normalize, EQ, export OGG). For a cozy game, layered ambient SFX (birds, water, paper rustle, footsteps) is more important than punchy combat SFX — both Freesound and Kenney cover this well. |
| **Placeholder music** | **Bosca Ceoil Blue** — write a 30-second loop in 30 minutes. The cozy aesthetic is forgiving of chiptune-adjacent placeholders. |
| **Final music** | Three options, pick one: (a) **LMMS** (free, deeper learning curve, can do orchestral with sample packs), (b) **REAPER** ($60 discounted license, industry-standard, indefinite trial period), (c) **Hire a composer** post-wishlist-revenue. For solo-budget Phase 1, default to LMMS or extend Bosca for the slice. |
| **Audio editing** | Audacity for everything (trim, fade, denoise, format conversion). |
| **Generative tools** | **Avoid AI-generated music for commercial release** — copyright provenance is unsettled, Steam has rejected games with AI assets, and your persona-zero will likely care once she finds out. AI for inspiration/scratch only. |
### File format conventions
- **Music:** OGG Vorbis, ~128–192 kbps for cozy-game dynamic range. Streaming.
- **SFX:** WAV at 44.1 kHz for short stings (<2 sec) so they load instantly. OGG for longer ambient loops.
- **Voice acting (if ever):** OGG Vorbis. Out of scope for solo budget — assume text-only.
## Version Control + Git LFS Strategy
### `.gitignore` (Godot project)
# Godot 4 specific
# Engine cache
# OS / Editor
# Build artifacts
# Secrets
### `.gitattributes` (LFS-track binary asset extensions)
# 3D models
# Images
# Audio
# Godot binary scenes / resources (only the binary form)
### Critical rules
- **Use text scenes (`.tscn`) and text resources (`.tres`) during development.** They diff cleanly. Save binary forms (`.scn`, `.res`) only for shipped builds or final-art freezes.
- **Commit the `.import/` directory? NO.** It's regenerated. Keep it gitignored.
- **Do not commit `.godot/` directory.** Project metadata and editor cache.
- **Use a private GitHub repo** (free for unlimited collaborators on personal accounts as of 2026).
- **Backup strategy beyond GitHub:** Once a quarter, push a tarball to a personal cloud drive. GitHub outages happen; LFS quotas can lock pushes.
### LFS quota math
## Testing Approach
### Use GUT for these systems (high failure cost)
- **Save / load round-trip**: serialize → load → assert equal. Catch save schema regressions immediately.
- **Calendar / time logic**: day-rollover, season transitions, scheduled events firing on the right day. (You don't have time *pressure*, but you presumably have time *passage*.)
- **Dialogue conditional evaluation**: NPC X says line Y when relationship_level >= Z and quest_flag.delivered == true.
- **Inventory math**: stack splits, max-stack edges, currency overflow.
- **Crafting recipes**: input → output correctness, missing-ingredient rejection.
- **Relationship state transitions**: gift → relationship_score change, threshold crossings, milestone unlocks.
### Don't write GUT tests for
- Visual scene layout. (Look at it instead.)
- Animation playback. (Eye test.)
- Shader output. (Eye test + screenshot regression at most.)
- UI exact layout. (Manual.)
### Cadence
- Run GUT before every commit that touches a tested system.
- Add a regression test only after a bug bites you. Don't pre-test imaginary failure modes.
- A solo cozy-game project should have **dozens, not hundreds, of tests**, focused on the systems that, when broken, ruin a player's save or progression.
### GUT vs gdUnit4
| Criterion | GUT 9.x | gdUnit4 |
|-----------|---------|---------|
| Language support | GDScript only | GDScript + C# |
| Maturity in 2026 | Mature, stable, large community | Active, modern, growing |
| IDE integration | VS Code extension available | Embedded editor inspector + VS/Rider for C# |
| Learning curve | Lower | Slightly steeper |
| **Recommendation** | **Use this** for GDScript-only project | Switch only if you adopt C# for parts of codebase |
## Build & Distribution Pipeline
### Steam (~6 months pre-launch, not now)
### itch.io (start using now, even for private builds)
### Web export (HTML5)
- **Possible with GDScript.** *(Not* possible with C# — that's a Godot 4.x limitation that informs the GDScript recommendation.)
- **For a 30+ hour 3D narrative game, web export is unrealistic** as a primary platform — load times, save persistence, performance. But: a **2-minute HTML5 demo of one scene** posted to itch.io can be a wishlist driver. Consider it a marketing tool, not a product platform.
## Alternatives Considered
| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Godot 4.5 | Godot 4.6.2 (latest stable) | If you start the project mid-2026 and 4.6.x has had ≥3 maintenance patches. Re-evaluate at the 12-month mark. |
| Godot 4.5 | Godot 4.7 beta / dev | Never for production code. OK for one experimentation branch to test new features. |
| GDScript | C# | (a) You already know C# deeply and have proven .NET tooling preferences, **and** (b) you've decided to skip web export forever, **and** (c) your codebase is projected past ~10k lines (likely true for 30hr game, but C# for that alone isn't enough). For your profile (beginner, solo, time-poor): GDScript wins. |
| GDScript | GDExtension (C++ / Rust) | Profiling has identified a specific hotspot in scripting, AND that hotspot can't be solved with type annotations, AND you've measured a >2× perf gap. Almost never true for a cozy life sim. |
| Dialogic 2 | inkgd (Ink GDScript) | Branching complexity exceeds Dialogic's visual editor (rare for cozy games). Or: writer prefers Ink syntax over node graphs. |
| Dialogic 2 | Yarn Spinner | **Re-evaluate in 2027.** Yarn Godot integration is alpha; Unity is its primary target. |
| Custom Resources (save) | JSON | Cross-platform save sharing, web-API-style sync, modding (player-readable saves). |
| Custom Resources (save) | SQLite (`godot-sqlite` addon) | Persistent world with thousands of entities and frequent partial-save needs (e.g., RimWorld-scale). Way overkill for cozy slice. |
| GUT | gdUnit4 | You adopt C# for part of the codebase. |
| Godot built-in editor | JetBrains Rider + Godot plugin | C# codebase. (Not relevant for GDScript.) |
| GitHub + LFS | Self-hosted Gitea + S3 | LFS bandwidth costs exceed $5/mo and you have homelab infrastructure. |
| GitHub + LFS | **Diversion** (Anchorpoint partner) | If LFS painful even on paid tier. Diversion targets game-dev binary asset workflows. **Probably overkill for solo project.** |
## What NOT to Use
| Avoid | Why | Use Instead |
|-------|-----|-------------|
| **Unity** | Per-install fee saga (2023) destroyed indie trust. Even after rollback, royalty risk is non-zero, license terms shift, runtime is closed. **Specifically wrong for $100-budget solo project planning a 4–6yr horizon** — license terms will change again. | Godot 4 (zero royalty risk, MIT). |
| **Unreal Engine 5** | Powerful but **wrong shape for cozy stylized solo work**: heavy editor, 5% royalty after $1M (low risk for indie cozy but real), C++/Blueprints learning curve, photoreal-default art pipeline conflicts with stylized brand. | Godot 4. |
| **GameMaker** | 2D-first, 3D is bolt-on. Project is 3D. Non-starter. | Godot 4. |
| **Direct .blend import in Godot** | Tied to local Blender install path; slow re-imports; more import-error surface. | Export to `.glb` via Blender's glTF exporter. |
| **FBX as primary format** | Works, but not the recommended path. Edge cases (scale, units, embedded media) bite. | glTF 2.0 (.glb). |
| **Godot 4.7 beta or 4.x dev builds for production** | Bleeding edge; breaking changes; bugs uncaught. | Stable 4.5.x or 4.6.x. |
| **C# with Godot if you want web export** | Godot 4.x C# does not support web export as of 4.6, no committed timeline. Hard constraint. | GDScript. |
| **AI-generated music or art for shipped content** | Steam has rejected games. Copyright provenance unsettled. Persona-zero (and the cozy demographic broadly) tends to value human-made craft. Reputation risk. | CC0 packs + your own work in Blender/LMMS. AI fine for *inspiration* and *placeholder* internally, not in shipped assets. |
| **Yarn Spinner on Godot today** | Alpha integration, Unity-first project, small Godot user base. Wrong risk profile for solo project. | Dialogic 2. |
| **GodotInk if your game is GDScript-only** | Forces .NET runtime, pulls in C# tooling for no benefit. Use only if you already chose C#. | Dialogic 2 or inkgd. |
| **JSON for save data** | Loses type info, requires conversion code, no schema. Tempting because "everyone uses JSON" — wrong tool for Godot's grain. | Custom Resources. |
| **Polygon (Synty) or other paid asset packs at MVP** | $30–$80 each, $100 lifetime budget can't absorb. | Kenney + Quaternius + KayKit (CC0). Revisit post-revenue. |
| **Visual Studio 2022 (full IDE) for GDScript** | Massive overhead, no GDScript LSP, no real benefit. | Godot built-in editor + VS Code with godot-tools. |
| **CC-BY-SA, GPL, or "non-commercial only" assets** | Copyleft contamination; commercial-license violation on Steam release. | CC0, CC-BY (with attribution), permissive commercial licenses. |
| **Mid-project engine upgrades to a new minor (4.5 → 4.6)** during slice work | Distraction; chase-bug risk; no feature you need. | Pin engine version through slice ship. Upgrade between phases. |
| **Multiplayer networking (ENet, WebSocket, dedicated servers)** | Not in scope (persona quit Palia for required multiplayer). Skip the entire networking surface area. | Single-player only; design for it intentionally. |
## Stack Patterns by Variant
### If you decide to add C# later (e.g., year 2 for a perf-sensitive subsystem):
- Use the **.NET version of Godot** (separate download). Cannot mix Mono and non-Mono in the same project.
- **You will lose web export** for the entire project. Permanent.
- Install **gdUnit4** for cross-language testing.
- Wrap C# logic in nodes that GDScript can call via signals or method calls — don't try to share complex types across the language boundary.
- **Don't make this decision before vertical slice.** GDScript will not be the bottleneck for cozy-game logic at slice scale.
### If LFS storage costs spiral past $5/mo:
- Audit asset directory; find unused assets (Godot has a project-wide reference checker).
- **Move pre-final art to a separate "art-source" repo** that's only checked out when needed (Blender source files, Photoshop .psd, music project files). Game repo only ships final exports.
- Move to a paid Data Pack at $5/mo for 50 GB. Past 50 GB? Time to audit again.
### If vertical slice ships and gets traction:
- Hire a composer ($500–$2k for 30 minutes of music). Persona research likely values audio mood for cozy fit.
- Buy 1–2 paid Synty / Polygon packs if they fit your aesthetic. Prefer one cohesive pack over many.
- **Keep tooling stack frozen** through the rest of v1. Do not upgrade Godot major versions mid-production once revenue is on the line.
### If you fall in love with branching narrative writing in Ink:
- Switch to **inkgd** for the dialogue surface. Keep Dialogic 2 for character portraits + UI shell, with Ink as the script source. This hybrid is unusual but ships in real games. Decide at vertical-slice retrospective, not before.
## Version Compatibility
| Tool | Godot 4.5.x | Godot 4.6.x | Notes |
|------|-------------|-------------|-------|
| **Dialogic 2** | Yes (4.4+) | Yes | Pin alpha version; test before engine upgrade. |
| **GodotSteam GDExtension** | Yes (4.4+) | Yes | Updated within ~2 weeks of new engine releases. |
| **GUT 9.x** | Yes | Yes (latest release tested on 4.6) | — |
| **Mixamo Retargeter addon** | Yes | Possibly — verify | Some addon versions lag engine; manual fallback always works. |
| **inkgd** | Yes (4.2+ branch) | Likely | No tagged release; pin to a specific commit hash. |
| **Jolt Physics** | Native option | Native option (still not default) | 4.6 makes Jolt the default in some build configs but flagged experimental. **Stick with Godot Physics for cozy game** — you don't need Jolt's perf advantages and stability is the priority. |
| **VS Code godot-tools** | Yes | Yes (LSP autodetects engine version) | — |
| **Blender LTS** | glTF compatible | glTF compatible | Blender 3.5+ has many glTF exporter fixes; use newer LTS. |
## Confidence Summary
| Recommendation | Confidence | Rationale |
|----------------|------------|-----------|
| Godot 4.5.x as primary engine pin | HIGH | Stability over recency, well-documented release policy, 4–6 month maintenance track record. |
| GDScript over C# / GDExtension | HIGH | Beginner profile + web-export option + ecosystem alignment all point one way. |
| Blender + glTF pipeline | HIGH | Officially endorsed by both Godot and Blender; documented best practice. |
| Custom Resources for saves | HIGH | GDQuest, official Godot recipes, and community consensus all align. |
| Git LFS from day one | HIGH | Universal Godot 3D-project advice; reversal cost is high. |
| GodotSteam GDExtension | HIGH | Active maintainer, 2-week patch cadence, widely used. |
| GUT 9.x for testing | HIGH | Mature, GDScript-native, well-documented. |
| Kenney + Quaternius + KayKit for assets | HIGH | License (CC0) and quality both verified; widely used in shipped indie games. |
| **Dialogic 2 for narrative** | **MEDIUM** | Excellent fit for the project's shape, but alpha software with breaking-change risk. The least-bad of the real options; firm up at slice scope. |
| inkgd as fallback | MEDIUM | Feature-complete but unreleased; pinned commit acceptable. |
| Mixamo + retargeter addon | MEDIUM | Adobe ToS could shift; addon quality varies by Godot version. Manual retargeting is HIGH-confidence fallback. |
| CSV → PO localization migration | HIGH | Both formats are first-class in Godot; migration tooling exists. |
| LMMS / Bosca Ceoil for music | HIGH on tools existing; MEDIUM on whether you'll produce shippable music yourself vs eventually hiring a composer. |
| butler for itch.io | HIGH | Official tool; documented; in active maintenance. |
| GitHub Actions + butler automation | MEDIUM-HIGH | Documented patterns exist but specific YAML configs evolve; defer until needed. |
## Sources
- [Godot Releases (GitHub)](https://github.com/godotengine/godot/releases) — version history, 4.5.2 / 4.6.2 maintenance status
- [Godot Engine Blog](https://godotengine.org/blog/) — 4.6 release announcement (January 2026)
- [endoflife.date / Godot](https://endoflife.date/godot) — release support policy
- [Godot release policy docs](https://docs.godotengine.org/en/stable/about/release_policy.html) — 4.5 partial support, 4.4 EOL
- [Chickensoft: GDScript vs C# in Godot 4](https://chickensoft.games/blog/gdscript-vs-csharp) — language tradeoffs
- [StraySpark: GDScript vs C# in Godot 2026](https://www.strayspark.studio/blog/gdscript-vs-csharp-godot-2026-choosing-scripting-language) — 2026-current analysis
- [Blender Studio: Our Workflow with Blender and Godot](https://studio.blender.org/blog/our-workflow-with-blender-and-godot/) — official-shape pipeline reference
- [Godot docs: Importing 3D scenes](https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/exporting_3d_scenes.html) — official format guidance
- [Supermatrix Studio: Blender to Godot Animation 2026 Guide](https://supermatrix.studio/blog/best-workflow-for-exporting-animated-characters-from-blender-to-godot) — NLA strips workflow
- [Godot glTF 2.0 scene exporter announcement](https://godotengine.org/article/introducing-the-godot-gltf-2-0-scene-exporter/) — official format endorsement
- [Mixamo Animation Retargeter (Asset Library)](https://godotengine.org/asset-library/asset/3429) — addon listing
- [Godot4-OpenAnimationLibraries (jwelchgames fork)](https://github.com/jwelchgames/Godot4-MixamoLibraries) — Mixamo libraries pre-converted for Godot 4
- [Quaternius](https://quaternius.com/) — CC0 3D + Universal Animation Library
- [Kenney.nl](https://kenney.nl/) — CC0 asset packs (huge catalog)
- KayKit on itch.io — CC0 stylized 3D
- [itch.io game-assets CC0 tag](https://itch.io/game-assets/assets-cc0/tag-3d) — broader CC0 3D catalog
- [Awesome CC0 list](https://github.com/madjin/awesome-cc0) — community-maintained index
- [Dialogic GitHub](https://github.com/dialogic-godot/dialogic) — alpha status, requires 4.4+
- [Dialogic docs](https://docs.dialogic.pro/) — features, getting-started
- [inkgd (ephread/inkgd)](https://github.com/ephread/inkgd) — Godot 4.2+ branch, GDScript port
- [godot-ink (paulloz/godot-ink)](https://github.com/paulloz/godot-ink) — C# integration
- [inkgd vs godot-ink decision guide](https://inkgd.readthedocs.io/en/latest/advanced/choosing_between_inkgd_and_godot_ink.html) — official comparison
- [Yarn Spinner roadmap 2026](https://yarnspinner.dev/blog/yarn-spinner-in-2026) — confirms Godot alpha status
- [GDQuest: Saving and Loading Games in Godot 4 with Resources](https://www.gdquest.com/library/save_game_godot4/) — recommended pattern
- [GDQuest: Choosing the right save game format](https://www.gdquest.com/tutorial/godot/best-practices/save-game-formats/) — format trade-offs
- [UhiyamaLab: Implementing Save/Load Systems comparison](https://uhiyama-lab.com/en/notes/godot/save-load-system/) — JSON / ConfigFile / Resource benchmarks
- [Boyquotes/different-save-load-methods-demo](https://github.com/Boyquotes/different-save-load-methods-demo) — runnable comparison
- [Godot docs: Localization using gettext (PO)](https://docs.godotengine.org/en/stable/tutorials/i18n/localization_using_gettext.html)
- [Godot docs: Localization using spreadsheets (CSV)](https://docs.godotengine.org/en/latest/tutorials/i18n/localization_using_spreadsheets.html)
- [SandVox: Godot Engine Localization Pipeline](https://sandvox.io/game-localization/godot-localization/) — PO / LocQA workflow
- [GodotSteam main site](https://godotsteam.com/) — current version 4.18.x, SDK 1.64
- [GodotSteam GDExtension Asset Library entry](https://godotengine.org/asset-library/asset/2445) — install path
- [Steamworks docs: Godot integration](https://partner.steamgames.com/doc/steamframe/engines/godot) — official Valve doc
- [butler official docs (itch.io)](https://itch.io/docs/butler/) — CLI reference
- [Maxim Maeder: Automate Publishing Godot Games to Itch.io](https://maximmaeder.com/how-to-automate-publishing-godot-games-to-itch-io/) — GitHub Actions pattern
- [Godot docs: Version control systems](https://docs.godotengine.org/en/stable/tutorials/best_practices/version_control_systems.html) — official LFS guidance + extension lists
- [karbassi gist: Godot 4 .gitignore + .gitattributes](https://gist.github.com/karbassi/ce1f3cb68b3c6fc3c471cf992aed0053) — battle-tested config
- [Anchorpoint: Git Version Control for Godot](https://www.anchorpoint.app/blog/git-version-control-for-godot) — workflow walkthrough
- [GUT GitHub (bitwes/Gut)](https://github.com/bitwes/Gut) — current 9.x, 4.6 support
- [GUT Asset Library entry](https://godotengine.org/asset-library/asset/1709)
- [GUT documentation](https://gut.readthedocs.io/) — assertion reference, doubles, parameterized tests
- [gdUnit4 GitHub](https://github.com/godot-gdunit-labs/gdUnit4) — alternative for GDScript + C# projects
- [Freesound.org](https://freesound.org/) + their `cc0` tag — primary SFX source
- [OpenGameArt.org CC0 music](https://opengameart.org/content/cc0-music-0) — CC0 music collection
- [Bosca Ceoil Blue (Yuri Sizov)](https://yurisizov.itch.io/boscaceoil-blue) — beginner DAW
- [Top free DAWs 2026 (MIDINation)](https://midination.com/daw/free-daw/best-free-daw/) — LMMS, REAPER, alternatives
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
