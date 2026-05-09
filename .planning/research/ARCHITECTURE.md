# Architecture Research

**Domain:** 3D narrative-driven cozy life sim (Godot 4, solo dev, ship-vertical-slice-then-scale)
**Researched:** 2026-05-09
**Confidence:** MEDIUM-HIGH (Godot patterns HIGH; cozy-genre-specific synthesis MEDIUM — patterns adapted from Stardew/BG3/Sims design literature, not from a single shipped Godot reference of this exact genre)

---

## North Star Constraints (the lens for every decision below)

1. **Solo dev + beginner.** No pattern that requires a team to maintain. Prefer tools and patterns with shallow learning curves and excellent docs over theoretically superior architectures.
2. **Slice content scopes down; slice systems do not.** Every system listed below must be the real shipping system, not a slice-only stub. Stubs are explicitly flagged.
3. **30+ hour scale.** Dozens of NPCs with persistent multi-axis relationships, branching narrative that persists forward, save state that survives content updates and migration.
4. **No real-time pressure.** Schedules exist but never punish — NPCs move through days; players never miss content because of a clock.
5. **Localization-ready from line one.** Translation keys, not raw strings. POT pipeline wired up before authored dialogue exists.
6. **Persona controls profile.** Simple, no chord schemes, easy rebinding, full controller + KBM parity.

---

## System Overview

```
┌────────────────────────────────────────────────────────────────────────┐
│                         AUTOLOAD LAYER (singletons)                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ EventBus │  │  GameState│ │ SaveMgr  │  │TimeService│ │  Settings│  │
│  │ (signals)│  │  (facade) │  │          │  │ (in-game) │ │ (input,  │  │
│  │          │  │           │  │          │  │           │ │  audio,  │  │
│  │          │  │           │  │          │  │           │ │  a11y)   │  │
│  └────┬─────┘  └─────┬────┘  └─────┬────┘  └─────┬────┘  └─────┬────┘  │
└───────┼──────────────┼──────────────┼──────────────┼─────────────┼────┘
        │              │              │              │             │
        │ everyone     │ NPCs,        │ all          │ NPCs,       │ UI,
        │ emits/       │ dialogue,    │ persistable  │ events,     │ input
        │ listens      │ quests read  │ entities     │ schedules   │ remap
        │              │              │              │             │
┌───────┴──────────────┴──────────────┴──────────────┴─────────────┴────┐
│                         GAMEPLAY SCENE LAYER                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │   Player     │  │     NPCs     │  │  Interactables│                 │
│  │ (Character-  │  │ (Character-  │  │  (collectibles,│                 │
│  │  Body3D +    │  │  Body3D +    │  │   doors, beds, │                 │
│  │  StateMachine│  │  StateMachine│  │   crafting     │                 │
│  │  + Inventory │  │  + Schedule  │  │   stations)    │                 │
│  │  + Camera)   │  │  + Relation- │  │                │                 │
│  │              │  │   ship)      │  │                │                 │
│  └──────────────┘  └──────────────┘  └──────────────┘                  │
│         │                  │                  │                         │
│         └──────────────────┴──────────────────┘                         │
│                            │                                            │
│                ┌───────────▼────────────┐                               │
│                │   Zone (root scene)    │                               │
│                │  - terrain / props     │                               │
│                │  - NavigationRegion3D  │                               │
│                │  - lighting / ambient  │                               │
│                │  - persistent state    │                               │
│                └────────────────────────┘                               │
├────────────────────────────────────────────────────────────────────────┤
│                       DIALOGUE / NARRATIVE LAYER                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  DialogueManager (Nathan Hoad addon — "stateless")                │  │
│  │  reads: variables and functions on GameState autoload             │  │
│  │  writes: via "mutations" → calls into GameState                   │  │
│  │  outputs: balloon/UI scene listening to its signals               │  │
│  └──────────────────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────────────────┤
│                            DATA LAYER                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Items   │  │ Recipes  │  │  NPCs    │  │ Schedules│  │ Dialogue │  │
│  │  (.tres) │  │  (.tres) │  │  (.tres) │  │  (.tres) │  │ (.dialogue│ │
│  │          │  │          │  │          │  │          │  │   files) │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│  ┌─────────────────────────────────────────────┐                        │
│  │  GameStateData (.tres) — single Resource    │                        │
│  │  containing all save-relevant runtime state │                        │
│  └─────────────────────────────────────────────┘                        │
└────────────────────────────────────────────────────────────────────────┘
```

**Reading guide.** Autoloads at top are global singletons that anyone can talk to. Scene layer is the live world. Dialogue layer reads/writes GameState through documented mutation hooks — it is never the source of truth for anything. Data layer is authored content (`.tres`, `.dialogue`, `.csv`) plus the runtime save blob.

---

## Component Responsibilities

### Autoloads (kept deliberately small and well-justified)

| Autoload | Owns | Why it must be global | Anti-scope |
|----------|------|-----------------------|------------|
| `EventBus` | Project-wide signals (e.g., `npc_relationship_changed`, `item_collected`, `zone_entered`, `time_changed`) | Decouples publishers from subscribers across scenes | Holds zero state. Dispatch only. |
| `GameState` | Facade over the runtime save blob: `relationships`, `quest_flags`, `world_flags`, `inventory`, `player_meta` | Dialogue, quests, schedules, and UI all need read access from anywhere | Does not know about scenes, nodes, or rendering |
| `SaveManager` | Serializing/deserializing `GameStateData` resource, slot management, autosave, version migration | One owner of the disk format prevents drift | Does not implement gameplay rules |
| `TimeService` | In-game time of day / day / season; emits `time_changed`, `day_started`, `season_changed` | NPC schedules, lighting, and seasonal content all subscribe | NEVER imposes pressure: time is decorative, not failure-causing |
| `Settings` | Input remaps (`ControlsRemap`-style resource), audio levels, accessibility flags, locale | Loaded before any scene; needed by every input/UI surface | No gameplay state |
| `DialogueManager` (addon-provided) | Loaded dialogue resources, line evaluation, mutation execution | Already global by addon design; treat as if I authored it | Don't extend it; integrate via mutations and signals |

**Anti-autoloads** (what NOT to make global, even when tempting):
- `PlayerRef` / `WorldRef` — get a reference through the scene tree or via signals; global pointers create lifecycle traps when scenes unload.
- `UIManager` — UI is its own scene tree branch; communicate via EventBus signals.
- `AudioManager` — Godot's bus system + a thin scene-local player covers cozy needs; a global music director can come later.
- `NPCRegistry` — tempting, but NPC presence is a function of the active zone; instead, GameState tracks *where each NPC is logically* and the zone instantiates the ones present when loaded.

### Scene Layer

| Component | Responsibility | Implementation |
|-----------|----------------|----------------|
| `Player` | Movement, camera, interaction probe, inventory carry, animation | `CharacterBody3D` + node-based StateMachine + `SpringArm3D` camera + `Area3D` interaction probe |
| `NPC` | Schedule-driven location, dialogue eligibility, relationship-state mutations on interact, idle animations | `CharacterBody3D` + StateMachine (Idle/Walking/Working/Talking/Sleeping) + `ScheduleComponent` + `RelationshipComponent` + `NavigationAgent3D` |
| `Interactable` | Anything the player can press the action button on: doors, beds, items on the ground, crafting stations | Static or `StaticBody3D` with a child `InteractableComponent` script that emits a signal on prompt + on activate |
| `Zone` | Root scene of a play area; instantiates the NPCs scheduled to be there now; loads/unloads on transition | `Node3D` containing terrain, props, `NavigationRegion3D`, lighting, and a `ZoneSpawner` that reads GameState for "who is in this zone right now" |
| `UI Root` | HUD, dialogue balloon, menus, inventory screen, settings; lives in its own CanvasLayer | Mostly `Control` nodes; subscribes to EventBus and DialogueManager signals; never directly pokes gameplay state |

### Reusable Components (composition over inheritance)

These are scripts attached as **child nodes** to entities, accessed via `$ComponentName` or `get_node`:

- `StateMachineComponent` — the `Node`-with-children pattern; each child is a state script (`Idle.gd`, `Walking.gd`, etc.). Owner passes a `host` reference; states call `transition_to("Walking")`. Established Godot 4 pattern (GDQuest).
- `InteractableComponent` — declares interaction prompt key, emits `interacted(actor)` signal. Player's interaction probe finds these by group and calls `interact()`.
- `InventoryComponent` — wraps an `Inventory` resource (see Crafting section). NPCs can have one too (gift inventories, shop stock).
- `RelationshipComponent` — per-NPC; reads/writes `GameState.relationships[npc_id]` rather than holding state itself, so it survives scene unloads automatically.
- `ScheduleComponent` — reads NPC's `Schedule` resource, listens to `TimeService.time_changed`, requests state transitions. See NPC section.
- `DialogueTriggerComponent` — picks the right `.dialogue` file and starting title for the current NPC × relationship × world state.

**Why components-as-nodes (not just plain GDScript classes):** Godot's editor lets you see and configure them in the scene tree, hot-reload them when iterating, and the lifecycle hooks (`_ready`, `_process`, `_exit_tree`) are automatic. This is the idiomatic Godot 4 way. ([GDQuest](https://www.gdquest.com/tutorial/godot/design-patterns/entity-component-pattern/))

---

## Subsystem Architecture (the questions, answered)

### 1. Narrative / Dialogue System

**Recommendation: Nathan Hoad's `Dialogue Manager` addon.** Lock this in.

Why over alternatives:
- **vs Dialogic.** Dialogic is more visual but is a heavier engine-coupled framework; Dialogue Manager is "stateless" — it asks your `GameState` autoload for variables and calls back into it via mutations. That decoupling is exactly what we want for a 30+ hour game with persistent state. Dialogic also has historically had churn between major versions; Dialogue Manager is widely considered "production ready" by the Godot community. ([dialogic vs godot_dialogue_manager](https://www.libhunt.com/compare-dialogic-vs-godot_dialogue_manager))
- **vs Ink (inkgd) / Yarn Spinner.** Ink and Yarn are battle-tested in shipped games (Sorcery!, Dredge, A Short Hike) but their Godot 4 integrations are second-class: the GDScript port of Ink (`inkgd`) is reportedly ~50× slower than C# Ink, and Yarn Spinner's Godot support is alpha and requires Godot 4.6+. For a beginner solo dev on GDScript, that's risk we don't need. ([narrativeflow comparison](https://narrativeflow.dev/blog/twine-vs-yarn-spinner-vs-ink-vs-narrativeflow-which-branching-dialogue-tool-is-right-for-your-game/))
- **vs custom node-graph tool.** Tempting; do not. Building a narrative tool steals 6+ months from building the game.

**Authoring model.** `.dialogue` files live in `content/dialogue/` organized by character (`elara.dialogue`, `theo.dialogue`, `village_events.dialogue`). Each file contains many titled blocks (titles are `~ start_morning_chat` style). A `DialogueTriggerComponent` on each NPC selects the title at interaction time based on state.

**Persistent choice/consequence — the loose-branching pattern (do this, not branching trees):**

Instead of one giant tree, store *flags and counters* on `GameState` and gate dialogue/events on those.

```
World flags:    GameState.world_flags["spirit_grove_awakened"] = true
NPC flags:      GameState.relationships["elara"].flags["knows_my_name"] = true
Counters:       GameState.relationships["theo"].axes.trust = 12
Topics:         GameState.topics["theo_lost_pendant"] = "in_progress"
Conversation
  history:      GameState.conversations_had["elara_first_meeting"] = day_3
```

Inside dialogue:
```
~ greet
if GameState.relationships.elara.axes.intimacy >= 30 and GameState.world_flags.spirit_grove_awakened
    Elara: "Did you feel it too? When the grove woke?"
elif GameState.relationships.elara.axes.intimacy >= 15
    Elara: "You're back! Tea?"
else
    Elara: "Oh — hello. Welcome to the village."
```

This is the exact pattern Stardew Valley and most narrative-driven cozy games use. Stardew calls these "conversation topics" — temporary flags checked in event preconditions ([Stardew Modding:Dialogue](https://stardewvalleywiki.com/Modding:Dialogue)). They prevent combinatorial explosion because **each conversation only knows about the few flags it cares about**, never the full state space.

**Character arc state machines.** A character's "arc" is itself a tiny state machine on `GameState`:
```
GameState.arcs["theo"] = {
    state: "trust_earned",       # enum-string: stranger | acquainted | trust_earned | bonded | crisis | resolved
    progress_within_state: 2,    # how many beats into this arc state
    history: ["stranger", "acquainted", "trust_earned"]  # never lost
}
```
This is much richer than a single "hearts" number AND much simpler to author against than a true graph. Multi-axis relationships (`trust`, `intimacy`, `respect`, `familiarity`) live alongside it as float counters that gate which dialogue lines unlock — but the *arc state* is what the character's larger story is doing.

**Confidence:** HIGH on tool choice, MEDIUM-HIGH on arc pattern (synthesized from Stardew + BG3 design discussions; will need iteration during slice).

### 2. NPC System

**Schedule pattern: data-driven location-keyed schedule, evaluated lazily.**

```
# content/schedules/elara_default.tres  (custom Resource)
extends Schedule
@export var entries: Array[ScheduleEntry] = [
    # ScheduleEntry: { start_time: 6.0, location_id: "elara_cottage_kitchen", state: "WORKING" }
    # ScheduleEntry: { start_time: 9.0, location_id: "village_square_well",  state: "IDLE" }
    # ScheduleEntry: { start_time: 13.0, location_id: "spirit_grove_clearing", state: "WORKING" }
    # ScheduleEntry: { start_time: 19.0, location_id: "elara_cottage_bed",    state: "SLEEPING" }
]
```

A `ScheduleComponent` on each NPC subscribes to `TimeService.time_changed`. When the active entry changes, it asks the NavigationAgent3D to walk there (if NPC is in the same zone) or it just teleports the NPC's *logical* location in `GameState` (if the player isn't around to see). When the player enters a zone, the `ZoneSpawner` queries `GameState` for "which NPCs have logical_location in this zone right now?" and instantiates only those.

**Critically: time is informational, not punitive.**
- NPCs are at scheduled places, but missing them never closes content. Every dialogue/event reachable from the schedule is also reachable through alternative discovery paths (find Theo at the bakery any morning; find him at the lake on weekends; find him by following his journal entries he leaves around).
- `TimeService` may not even be tied to wall-clock — many cozy games run "in-game time" as a function of player actions (talking, walking, harvesting), with the player free to "rest" to skip ahead. **Strongly consider action-driven time over real-time clocks** — this is the cleanest way to honor the no-time-pressure pillar.

**NPC relationship state — multi-axis, not hearts:**

```
# content/data/relationship_template.tres
@export var axes: Dictionary = {
    "trust":       0.0,   # 0..100, hard to gain, hard to lose
    "intimacy":    0.0,   # 0..100, gated by arc state, not gift-spammable
    "respect":     0.0,   # 0..100, earned via competence/choices
    "familiarity": 0.0,   # 0..100, accrues just from being around
}
@export var arc_state: String = "stranger"
@export var flags: Dictionary = {}     # boolean memories: knows_name, met_at_grove, etc
@export var topics: Dictionary = {}    # "in_progress" / "resolved" temporary topics
@export var last_interacted_day: int = -1
@export var gift_history: Array = []   # last N gifts, for "you already gave that"
```

**Dialogue eligibility pattern.** When the player presses interact on an NPC, the `DialogueTriggerComponent` runs an *eligibility cascade* and picks the highest-priority match:

```
1. Triggered events    (an arc beat is unlocked and player is in the right zone today)
2. Topic conversations (an active "topic" the NPC wants to discuss)
3. Daily fresh line    (one per in-game day, picked from the NPC's pool tagged for current arc_state)
4. Generic banter      (state-tagged pool: morning lines, working lines, low-trust lines, etc.)
```

This is exactly Stardew's pattern, executed cleaner. Each line in the dialogue file is a titled entry; the trigger component just picks the right title. ([Modding:Dialogue](https://stardewvalleywiki.com/Modding:Dialogue))

**Procedural-but-authored content: dialogue templates filled by state.**

Pure authoring scales linearly (and breaks at 30+ hours). Pure proc-gen feels hollow. The middle path:

- ~70% authored, hand-crafted lines for arc beats and signature character moments.
- ~30% template lines with slot-filling: `"That [weather] was something, wasn't it? My [favorite_thing] could barely cope."` Slots are filled at speak-time from world state and NPC personality data.

This is **THE** answer to the "endgame problem" from PERSONA.md: when authored arc content runs out, NPCs still have things to say that are state-aware and feel alive, because the templates pull from current weather, recent player actions, the NPC's mood today, and recent events.

**Confidence:** HIGH on the schedule + multi-axis + cascade structure (these are well-trodden patterns in narrative-cozy design). MEDIUM on the proc-template hybrid (high-leverage but needs careful tuning to avoid feeling Mad-Libs-y).

### 3. World / Zones

**Scene loading: per-zone scenes, on-demand instantiation.**

Each zone is a `.tscn` file (`zones/village_square.tscn`, `zones/spirit_grove.tscn`, `zones/player_home_interior.tscn`). The transition flow:

```
1. Player enters trigger Area3D at zone boundary
2. EventBus.emit("zone_transition_requested", "spirit_grove", "south_entrance")
3. ZoneManager (a node, not autoload — lives under root):
     - Calls SaveManager.snapshot_zone(current_zone)
     - ResourceLoader.load_threaded_request(target_scene_path)
     - Shows brief transition UI
     - Polls load progress, instantiates when ready
     - ZoneSpawner on new zone reads GameState, spawns scheduled NPCs and persistent items
     - Emits "zone_entered"
```

For a 12–18 month vertical slice with maybe 4–6 zones, **synchronous load with a half-second fade is fine** — implement it that way for the slice, but build the function signature `load_zone(zone_id, entry_point)` so swapping in `load_threaded_request` later is a one-function change. ([Background loading docs](https://docs.godotengine.org/en/latest/tutorials/io/background_loading.html))

For 30+ hour scale: stay with discrete zones (not seamless streaming). Streaming open-world is solo-dev hell and the cozy genre doesn't need it (Stardew, Spiritfarer, Spirittea all use discrete zones). If a zone gets too big, split it.

**Persistent zone state.** Anything that changes about a zone — felled trees regrowing, picked herbs respawning, rearranged furniture, NPC changes to the world — is keyed in `GameState.zone_state[zone_id]` as a dictionary. Zones write deltas, not full snapshots: `{"tree_42": "felled", "herb_patch_3": {"regrows_at_day": 14}}`. The `ZoneSpawner` reapplies these on load.

**Asset organization for stylized 3D:**

```
project_root/
├── assets/
│   ├── models/
│   │   ├── characters/        # one folder per character, contains .glb + .tres material overrides
│   │   ├── props/             # furniture, decoration, interactables
│   │   ├── environment/       # terrain pieces, foliage, rocks
│   │   └── architecture/      # buildings, walls, doors, windows
│   ├── animations/            # shared animation libraries (.res); per-character ones live with the character
│   ├── textures/              # palette, gradient, atlas textures organized by use
│   ├── audio/
│   │   ├── music/
│   │   ├── sfx/
│   │   └── voice/             # optional, character grunt/laugh stems
│   └── shaders/               # toon, water, foliage shaders (cozy stylized look)
├── scenes/
│   ├── zones/                 # one .tscn per zone
│   ├── player/
│   ├── npcs/                  # one .tscn per character (composition-built)
│   ├── interactables/
│   └── ui/
├── components/                # reusable scripts (StateMachine, Inventory, Relationship)
├── autoloads/
├── content/                   # all authored data
│   ├── data/
│   │   ├── items/             # .tres files
│   │   ├── recipes/
│   │   ├── npcs/              # NPC definitions (name, schedule path, dialogue path)
│   │   └── schedules/
│   ├── dialogue/              # .dialogue files, one per character + shared events
│   └── locales/               # game.csv (CSV translations) or .po files
├── resources/                 # base Resource class definitions (Item.gd, Recipe.gd, etc)
└── tests/                     # GUT tests
```

Naming conventions: snake_case for files, PascalCase for class names, `npc_<name>.tscn` and `item_<name>.tres` prefixes for grep-ability, all imported `.glb` files paired with a versioned `.tres` material so Blender re-imports don't blow away tweaks.

### 4. Crafting / Items / Inventory

**Recipe & item data: custom `Resource` subclasses serialized as `.tres` files.** Do not use JSON for primary content — Godot's Inspector becomes your authoring tool, and Resources support typed exports, sub-resources, and references. ([Kodeco Resources](https://www.kodeco.com/43227199-using-and-creating-resources-in-godot-4/page/2))

```
# resources/Item.gd
class_name Item extends Resource
@export var id: StringName            # stable key — never localize, never change
@export var display_name_key: String  # translation key, e.g. "ITEM_MOON_LILY_NAME"
@export var description_key: String
@export var icon: Texture2D
@export var stack_size: int = 99
@export var category: ItemCategory    # enum
@export var tags: Array[StringName]   # ["flower", "spirit_grove", "spring"]
@export var narrative_metadata: NarrativeMeta  # nested resource — see below

# resources/NarrativeMeta.gd  (the "story-attached" handle from PROJECT.md)
class_name NarrativeMeta extends Resource
@export var first_collected_dialogue: String   # dialogue title to play on first pickup, e.g. "first_moon_lily"
@export var lore_entry_id: StringName          # codex entry unlocked
@export var associated_npc_ids: Array[StringName]  # NPCs who react to this in inventory
@export var collection_milestones: Array[int]  # [1, 10, 50] — trigger events at these counts
```

This is **the** mechanism that fulfills the "things you collect have story attached" pillar from PROJECT.md. Every item carries optional narrative metadata; the inventory system emits `item_collected(item, count)` and any subscribed system (codex, dialogue trigger, NPC reaction) can act on it.

```
# resources/Recipe.gd
class_name Recipe extends Resource
@export var id: StringName
@export var display_name_key: String
@export var ingredients: Array[ItemStack]   # ItemStack = { item: Item, count: int }
@export var outputs: Array[ItemStack]
@export var station_required: StringName    # "kitchen", "alchemy_table", "" for hand
@export var unlock_flag: String = ""        # GameState.world_flags key — "" means always unlocked
@export var crafting_time_seconds: float = 0.0  # 0 = instant; cozy default
```

**Inventory data structure.**

```
# resources/Inventory.gd
class_name Inventory extends Resource
@export var slots: Array[InventorySlot]   # InventorySlot = { item_id: StringName, count: int }
@export var capacity: int = 30

# Lookup index built at runtime, not serialized:
var _id_to_slot_indices: Dictionary  # item_id -> [slot_index, ...]
```

Build the lookup index on `_init` and on every add/remove — counting items by linear scan is fine for ~30 slots but kills you at full game scale with hundreds of recipes.

**Optional: `gloot` addon.** It's the most popular Godot inventory plugin and handles grids, constraints, etc. ([gloot](https://github.com/peter-kish/gloot)) **My recommendation: don't adopt it for v1.** It adds a learning curve and a dependency. A flat list-with-stacks plus the lookup index handles cozy-genre needs (Stardew, Animal Crossing, Spiritfarer all use simple grid inventories — no Tetris shapes). Build your own; it's ~150 lines and you'll understand every line.

**Confidence:** HIGH.

### 5. Save System

**Recommendation: single `GameStateData` Resource saved via `ResourceSaver.save()` to `user://saves/slot_N.tres`.** Backed by `FileAccess.store_var` for the actual binary write (the engine handles this when you save a Resource). ([GDQuest Save Cheatsheet](https://www.gdquest.com/library/cheatsheet_save_systems/))

```
# resources/GameStateData.gd
class_name GameStateData extends Resource
@export var save_format_version: int = 1   # bump on breaking changes
@export var created_at_iso: String
@export var last_played_iso: String
@export var play_time_seconds: float
@export var current_zone: StringName
@export var player_position: Vector3
@export var player_inventory: Inventory
@export var player_meta: PlayerMeta        # name, appearance, etc
@export var time_state: TimeState          # day, season, time_of_day
@export var relationships: Dictionary      # npc_id -> RelationshipData
@export var arcs: Dictionary               # arc_id -> ArcState
@export var world_flags: Dictionary        # arbitrary string -> bool/int/string
@export var quest_flags: Dictionary
@export var topics: Dictionary             # active conversation topics
@export var zone_state: Dictionary         # zone_id -> {object_id: state}
@export var collection_log: Dictionary     # item_id -> first_seen_day, total_collected
```

**Why Resource over JSON:**
- Native support for `Vector3`, `Color`, custom Resource subclasses (so `Inventory` and nested types serialize themselves).
- The Inspector becomes a save file viewer/editor during dev.
- No manual `to_dict`/`from_dict` boilerplate.

**Why over `FileAccess.store_var` directly on a Dictionary:**
- Type safety. `@export var relationships: Dictionary` is fine, but `@export var player_inventory: Inventory` is much better — typos crash at load, not three hours into testing.

**Migration strategy.** This is critical for a multi-year project where you WILL change save format.

```
# autoloads/save_manager.gd
const CURRENT_FORMAT_VERSION = 1

func load_slot(n: int) -> GameStateData:
    var path = "user://saves/slot_%d.tres" % n
    if not FileAccess.file_exists(path):
        return null
    var data: GameStateData = ResourceLoader.load(path)
    if data.save_format_version < CURRENT_FORMAT_VERSION:
        data = _migrate(data)
    return data

func _migrate(data: GameStateData) -> GameStateData:
    # Run migrations sequentially: 1->2, 2->3, etc.
    while data.save_format_version < CURRENT_FORMAT_VERSION:
        var migration = MIGRATIONS[data.save_format_version]
        data = migration.call(data)
        data.save_format_version += 1
    return data
```

Maintain a migrations registry. When you add a field, write a migration that fills it with a default. When you remove a field, write a migration that drops it. **Test migrations every release** — a broken save migration kills player trust.

**Slots & autosave.** Pattern: 3 named slots + 1 autosave slot. Autosave triggers on: zone transition, day change, dialogue conclusion. NEVER on player damage / failure (no failure exists in this game). Display "saving..." indicator briefly so players know it happened.

**What to save: full state, not deltas.** At our scale, a full snapshot is kilobytes. Deltas are clever, complicated, and explode in the migration path.

**Confidence:** HIGH.

### 6. Player / Input / Camera

**Character controller.** Start from GDQuest's free third-person controller demo as a learning reference; write your own based on its patterns rather than dropping it in unmodified. Reasons: cozy movement is gentler than what GDQuest's TPS demo showcases (no double-jump, no sprint-cancel-to-roll), and writing your own teaches the StateMachine pattern you'll reuse for NPCs. ([GDQuest TPC](https://www.gdquest.com/news/2022/12/godot-4-third-person-controller/))

Components:
- `CharacterBody3D` with `_physics_process` calling `move_and_slide()`.
- `StateMachineComponent` with states: `Idle`, `Walking`, `Running` (optional, gentle), `Interacting`, `InDialogue`, `InMenu`.
- `SpringArm3D` camera rig with `Camera3D` child. Default behavior: orbit on right stick / mouse, collision via SpringArm. Auto-recenter when moving.
- `Area3D` interaction probe in front of player; collides with `Interactable` group; tracks "best candidate" for interact prompt.

**Camera systems for 3D third-person cozy:**
- Default: free orbit + soft auto-recenter + collision via SpringArm. ([Third Person Camera asset](https://godotengine.org/asset-library/asset/1815))
- Zone-overrides: some zones (interiors, narrative moments) lock to top-down or fixed angle. Implement as a `CameraStyle` Resource on the zone, applied on zone enter.
- Cinematic mode for dialogue: a virtual camera blends in for over-the-shoulder during important conversations. Not slice-blocking; can be a simple straight-cut at first.

**Input — KBM + controller, no chord schemes, easy rebinding:**

Use Godot's `InputMap` + a `ControlsRemap`-style Resource for persistence ([KoBeWi/Godot-Input-Remap](https://github.com/KoBeWi/Godot-Input-Remap)). Define every action up front in `project.godot` with both KBM and controller defaults bound:

```
# Action set (define in project.godot Input Map):
move_forward / move_back / move_left / move_right
camera_x_axis / camera_y_axis  (mouse + right stick)
interact         (E / A button)
inventory        (Tab / Y button)
dialogue_advance (Space / A button)
dialogue_choose_1..4 (1-4 keys / D-pad)
menu             (Esc / Start)
journal          (J / View / Select)
```

Every one of these has both keyboard and gamepad defaults from day one. Settings menu offers per-action rebinding using the standard "press a button to capture" UI. Persist remaps to `user://settings.tres` via `Settings` autoload.

**No chord schemes.** Persona dislikes complex controls (per PERSONA.md, "VERY low patience for complicated control schemes"). Single-button interactions, contextual prompts ("press E to talk to Theo"), no Shift+E or hold-Q sequences. If something needs more options, surface a radial or a menu, not a chord.

**Controller input prompts.** Detect last-used input device via `InputEvent` type, swap UI prompt icons (`E` vs `A button`) automatically. Plan the icon set early; rebinding-aware glyphs.

**Confidence:** HIGH.

### 7. Data / Content Pipeline

**Where authored content lives:**
- **Game data** (items, recipes, NPC definitions, schedules, dialogue): `content/` folder, mostly `.tres` files. Inspector-editable.
- **Dialogue text:** `.dialogue` files (Dialogue Manager format) under `content/dialogue/`. Plain-text, version-controllable, diff-friendly.
- **Translations:** `content/locales/game.csv` for all UI/system strings during slice. Dialogue Manager auto-includes `.dialogue` files in POT generation; switch to `.po` before localization actually happens. ([Dialogue Manager Translations](https://github.com/nathanhoad/godot_dialogue_manager/blob/main/docs/Translations.md))
- **Authored animations:** `.glb` from Blender, sliced into `AnimationLibrary` resources.

**Content reload during dev.** Godot reloads `.tres` files automatically when changed in the FileSystem dock. For dialogue files, Dialogue Manager has live-reload. Build the habit of using the Inspector to tweak data instead of code paths — every minute spent there is a minute saved later.

**Authoring without engine knowledge (future contractors / wife-as-writer / etc.).** Two paths:
1. **`.dialogue` files are plain text with a documented syntax.** A non-engineer can write them with a markdown-ish reference card. This is the primary writer experience.
2. **For more structured data (item names + descriptions, NPC schedules), provide CSV templates.** Write a small Editor-side script that imports the CSV into `.tres` files. The contractor edits a Google Sheet, you export CSV, run the importer, commit.

Avoid asking non-engineers to use the Godot editor's Inspector for content. It's powerful for you; it's intimidating for everyone else.

### 8. Localization Readiness (must-have decisions BEFORE writing dialogue)

**Decisions to make NOW, before any dialogue is authored:**

1. **All player-visible strings are translation keys, not literal text.** The codebase contains `tr("DLG_ELARA_GREETING_FIRST")`, never `"Hello, traveler!"`. The English text lives in a translation file. ([Godot i18n docs](https://docs.godotengine.org/en/stable/tutorials/i18n/internationalizing_games.html))
2. **Key naming convention.** `<DOMAIN>_<SUBJECT>_<DETAIL>` — e.g. `UI_INVENTORY_TITLE`, `DLG_ELARA_GREETING_FIRST`, `ITEM_MOON_LILY_NAME`, `ITEM_MOON_LILY_DESC`.
3. **CSV for slice, PO for v1.** CSV is simpler and good enough for a one-language slice. PO files (gettext) handle plurals (`tr_n("YOU_HAVE_N_FLOWERS", "YOU_HAVE_N_FLOWERS", count)`) and translator notes — switch before localization actually starts. The migration is mechanical.
4. **Right-to-left and CJK character widths.** Godot supports them via fonts; just pick fonts now that have CJK glyph fallback — DynamicFont stack with CJK fallback in font fallback list. Don't bake assumptions about text being narrow.
5. **No baked text in textures or 3D models.** Signs in the world either use 3D `Label3D` (translatable) or they're flavor (no readable text).
6. **Date and time formatting.** Wrap any date-display in a util that handles locale.
7. **Dialogue Manager writes POT entries automatically when configured.** Wire this on day one.

This is the architectural fork-in-the-road that costs *months* if missed. Do it before writing line one of dialogue.

**Confidence:** HIGH.

### 9. Architecture Patterns (deep dives)

**Composition over inheritance for entities.**
Player and NPC both extend `CharacterBody3D` directly, not a custom `Character` base. Shared behavior lives in components (`StateMachineComponent`, `InventoryComponent`, `RelationshipComponent`) attached as child nodes. This avoids the diamond problem when, three years in, you want a "ghost NPC" that walks through walls — you swap the movement component, not refactor an inheritance tree.

**Signal patterns for decoupling.**
- *Local signals* (within a scene): direct connect via `$Child.signal_name.connect(_on_thing)`. Always.
- *Across-scene events* (e.g., NPC's relationship changed → UI codex updates): emit on `EventBus`. ([Febucci on Godot Signals](https://blog.febucci.com/2024/12/godot-signals-architecture/))
- *Rule:* if both sides of a connection live in the same scene tree branch and have a parent-child relationship, use direct connect. If they don't, EventBus.
- *Anti-pattern:* using EventBus for things a parent could just connect to its child directly. EventBus is "I don't know who's listening" — not "I'm too lazy to connect properly."

**State machines.**
Use the GDQuest node-based pattern. ([GDQuest FSM](https://www.gdquest.com/tutorial/godot/design-patterns/finite-state-machine/)) Each state is a child node with `_enter()`, `_exit()`, `_physics_update()`, `_handle_input()`. The `StateMachine` parent dispatches. Reused for player, NPCs, doors with animation phases, anything stateful.

**Scene tree as service locator.**
You'll be tempted to pass references everywhere. Don't. Use `get_tree().root.get_node("Autoload")` indirectly via short autoload names (`GameState.foo`, not deep paths), and use `get_tree().get_first_node_in_group("player")` for finding the player from NPCs. Groups (`add_to_group("npc")`, `add_to_group("interactable")`) are Godot's idiomatic discovery mechanism.

**Anti-patterns to avoid:**
- *God-autoload.* A single `Game.gd` autoload that knows everything is the most common Godot mistake. Split by responsibility.
- *Process-tick polling.* If something can be a signal, make it a signal. `_process` polling for "did the player enter this area?" wastes CPU and tangles dependencies; use `Area3D.body_entered` instead.
- *Tightly-coupled UI.* Never have UI scripts directly query `Player.inventory.slots[3].count`. Inventory emits `inventory_changed`; UI subscribes and re-renders.
- *Inheritance as a relationship contract.* `class_name FriendlyNPC extends NPC extends Character extends Body` is a smell. Use components.

---

## Data Flow

### The "player gives Elara a moon lily" flow (representative)

```
[Player presses Y over Elara with moon lily selected]
         │
         ▼
[Player.InteractionProbe] picks up Elara's InteractableComponent
         │
         ▼
[InteractableComponent on Elara] emits interacted(player) with context
         │
         ▼
[Elara.DialogueTriggerComponent] receives context
   • inspects player.inventory.equipped_gift = moon_lily
   • inspects GameState.relationships.elara
   • picks dialogue title: "receive_gift_loved" (Elara loves moon lilies, NarrativeMeta says so)
         │
         ▼
[DialogueManager] starts dialogue at that title
   • during the dialogue, mutation calls:
        GameState.modify_relationship("elara", "intimacy", +5)
        GameState.modify_relationship("elara", "familiarity", +2)
        GameState.add_topic("elara_remembers_moon_lily_gift")
        Player.inventory.consume_one("moon_lily")
         │
         ▼
[GameState.modify_relationship] mutates internal state, emits:
   EventBus.relationship_changed("elara", {"intimacy": +5, ...})
         │
         ▼
[Subscribers]
   ├── UI codex panel: re-renders affection bar
   ├── Achievement system: checks "first gift" milestone
   ├── Arc evaluator: checks if "stranger → acquainted" threshold crossed
   └── Autosave manager: marks state dirty, schedules autosave on next zone change
         │
         ▼
[DialogueManager finishes]
   • emits dialogue_ended
[Elara.DialogueTriggerComponent] returns NPC to schedule-driven state
[Player] returns to free-control state
```

### State Management (read/write rules)

```
┌──────────────────────────────────────┐
│     GameState (autoload, facade)     │
│  ┌────────────────────────────────┐  │
│  │  GameStateData (Resource)      │  │
│  │  - relationships               │  │
│  │  - flags / topics              │  │
│  │  - inventory                   │  │
│  │  - zone_state                  │  │
│  └────────────────────────────────┘  │
└────────────────────────────────────-─┘
       ▲ writes (via methods only)
       │  modify_relationship()
       │  set_flag() / clear_flag()
       │  add_topic() / resolve_topic()
       │  add_to_inventory() / remove_from_inventory()
       ▼ emits via EventBus
       │  relationship_changed
       │  flag_set, topic_added, topic_resolved
       │  inventory_changed
       │  ...
   ┌───┴────────────────────────────────────┐
   │  Subscribers (read-only access OK)     │
   │  - UI                                  │
   │  - Dialogue conditions                 │
   │  - Schedule eligibility                │
   │  - Achievement / journal               │
   └────────────────────────────────────────┘
```

**Rule:** Nobody mutates `GameState` directly. All mutations go through methods. This is the linchpin that makes save migrations and the EventBus emission pattern actually work. If someone reaches in and writes `GameState.relationships.elara.axes.trust = 100`, no signal fires, no autosave schedules, no UI updates. **Enforce this by code review with yourself.**

### Key Data Flows

1. **Time → world.** `TimeService` emits `time_changed(new_time)`; ScheduleComponents update; lighting updates; some interactables (a sleeping NPC's bed) update prompt.
2. **Item collected → narrative.** `Inventory.add` emits `item_collected`; the Item's `NarrativeMeta` triggers a one-shot dialogue if it's a first-encounter item; codex updates.
3. **Dialogue choice → arc.** Dialogue Manager mutation calls `GameState.modify_relationship` and possibly `GameState.advance_arc`. Arc state changes feed back into future dialogue eligibility.
4. **Zone transition → world snapshot.** Zone transition triggers autosave; SaveManager writes `GameStateData`; new zone reads it on instantiate.

---

## Scaling Considerations (1 hour slice → 30+ hour full game)

| Scale | What needs to change |
|-------|---------------------|
| **Slice (1h, 4 NPCs, 4 zones)** | Synchronous zone load. ~4 dialogue files. ~30 items. ~10 recipes. Single-language CSV. All systems already real, content scoped down. |
| **Mid-game (10h, 12 NPCs, 8 zones)** | Add async zone loading. Add procedural-template dialogue layer. Maybe split NPC dialogue files (one per NPC was already the plan). Add the journal/codex if not in slice. |
| **Full game (30h+, 25+ NPCs, 15+ zones)** | Add NPC pool eviction (don't keep all NPC scenes loaded — only those in active zone). Possibly switch CSV to PO for plural support and translator notes. Profile relationship lookups; consider `Dictionary` instead of `Array` for any inventories. Possibly partition GameState (split off `zone_state` to its own file to reduce save size). |

**First bottleneck:** likely save file size if you carelessly serialize node references or large arrays. Mitigation: keep `GameStateData` *data*-only; never serialize textures, scene nodes, or anything visual — those are reconstructed from the data.

**Second bottleneck:** dialogue eligibility evaluation if every NPC re-evaluates on every signal. Mitigation: lazy evaluation (only the NPC the player is approaching) and caching per-day eligible-line picks.

**Third bottleneck:** asset memory (3D models for 25+ characters). Mitigation: instantiate only NPCs in the active zone; use shared rig + swap meshes/textures rather than fully-distinct skeletons per character.

---

## Anti-Patterns

### Anti-Pattern 1: One Mega-Tree Dialogue File

**What:** Single `dialogue.dialogue` containing every line every NPC ever says.
**Why wrong:** Merge conflicts, slow Editor, breaks writer mental model, can't hand off to a co-writer per character.
**Do instead:** One file per character + one `events.dialogue` for cross-character cutscenes. Each file <2000 lines.

### Anti-Pattern 2: Hearts-as-Single-Number

**What:** `npc.affection: int = 50`.
**Why wrong:** Cozy genre's reputation problem — players gift-spam to max it; relationships feel transactional; can't represent "respects you but doesn't trust you yet" or "intimate but feeling distant."
**Do instead:** Multi-axis (`trust`, `intimacy`, `respect`, `familiarity`) + arc state. Different actions move different axes. Different content gates on different axes.

### Anti-Pattern 3: Time-of-Day Punishment

**What:** "It's 11 PM, the shop is closed, come back tomorrow."
**Why wrong:** Direct contradiction of persona pillar #1 from PERSONA.md.
**Do instead:** Shopkeeper has different schedule positions; if she's at home in evening, the player can still get her attention — narratively, she'll give you what you came for, just with different flavor text. NEVER block content on a clock.

### Anti-Pattern 4: Saving the Scene Tree

**What:** Using Godot's `PackedScene` save-every-node approach.
**Why wrong:** Tightly couples save format to scene structure; rename a node and old saves break.
**Do instead:** Save *data* only (positions, IDs, state values). Reconstruct scenes from data on load.

### Anti-Pattern 5: Literal Strings in Dialogue/Code

**What:** `print("Hello!")`, `dialogue_text = "Welcome to the village"`.
**Why wrong:** Localization becomes a multi-month rewrite of every line. Discovered too late.
**Do instead:** `tr("UI_GREETING_HELLO")` from line one. Even for English-only slice. The cost is one extra step now; the cost of retrofitting is months.

### Anti-Pattern 6: Autoload-as-Codebase

**What:** Adding 12 autoloads. `WeatherManager`, `NPCRegistry`, `QuestSystem`, `MusicDirector`, `CutsceneManager`, etc.
**Why wrong:** Globals are hard to test, hard to reason about lifecycle, create implicit dependencies.
**Do instead:** Limit to 5–7 autoloads (the ones in this doc). Other systems are scenes/nodes that live in their proper place.

---

## Build Order Implications (Phase Mapping)

This section is the bridge to the roadmap.

### Slice-blocking foundations (build FIRST, before any content)

These are non-negotiable for the slice. Build all of these in the first phase, scope content to one zone + 2 NPCs to validate them.

1. **Project skeleton & autoloads.** EventBus, GameState (with stub data), SaveManager (with versioning baked in), TimeService, Settings. ~1 week of focused work. *Foundation for everything.*
2. **Localization scaffolding.** `tr()` everywhere from day one, CSV authoring for English. ~2 days. *Cannot retrofit.*
3. **Player controller + camera + interaction probe.** ~2 weeks. *No game without this.*
4. **State machine pattern (used for player first, then reused for NPCs).** ~1 week, mostly reading and adapting GDQuest's reference. *Reused everywhere.*
5. **Item resource + Inventory component + minimal inventory UI.** ~2 weeks. *Crafting and narrative-attached items both depend.*
6. **Dialogue Manager integration + GameState mutation hooks + balloon UI.** ~2 weeks including learning the addon. *The single highest-leverage system.*
7. **One-NPC happy path.** Single character with schedule, relationship state, dialogue eligibility, gift-receiving — proves the whole stack. ~3 weeks. *De-risks the architecture before scaling content.*
8. **Save/load round-trip with one migration applied.** ~1 week. *Catch save-format issues before there are saves to migrate.*
9. **Input remap UI + KBM/controller parity.** ~1 week. *Persona requirement.*

**Total slice-blocking foundation:** ~3–4 months of focused solo dev work for a beginner; allow for learning overhead.

### Slice-finishing layers (build during slice content production)

These exist for the slice but are scoped down:

10. **Recipe / Crafting station.** ~2 weeks. Slice ships with maybe 5 recipes.
11. **Zone transitions.** ~2 weeks. Slice has 3–4 zones.
12. **Persistent zone state.** ~1 week. Trees regrow, herbs respawn.
13. **Settings menu + accessibility flags.** ~1 week.
14. **Polish camera, juice, audio.** Throughout.

### Deferrable (post-slice, before vertical slice ships? or full-game scaling?)

These can be temp-stubbed during the slice:

- **Procedural-template dialogue** layer. Stub: hand-author all banter for slice NPCs. Real: implement template engine for full-game scale.
- **Async zone loading.** Stub: fade-to-black sync load. Real: `load_threaded_request` with progress UI.
- **Cinematic dialogue camera.** Stub: hard cut. Real: virtual camera blends.
- **Save migration framework.** Stub: bump version, refuse to load older. Real: migration registry. **Lock this in before slice ships to public** — once players have saves, you can't break them.
- **Codex / journal.** Stub: skip. Real: cross-references item collection, NPC arcs, world events.
- **PO files & translator workflow.** Stub: CSV English-only. Real: switch when first non-English translator boards.

### Phase Suggestion (rough; roadmap document will refine)

**Phase 1 — Foundations:** items 1–9 above. ~3–4 months.
**Phase 2 — One Vertical Hour:** items 10–14, plus all slice content (1 zone, 4 NPCs, ~30 items, 5 recipes, ~1500 lines of dialogue, polish). ~6–10 months.
**Phase 3 — Slice Hardening:** save migration framework hardening, accessibility audit, controller/KBM full parity, localization-readiness verification, public demo build. ~1–2 months.
**Phase 4+ — Content scaling, procedural template dialogue, more zones, more NPCs.** Years 2–4.

---

## Integration Points

### External Services

None at v1. (Steam achievements integration exists post-launch as a stretch goal; design `Achievement` resources now so the wiring is straightforward later — emit signals on milestones, route to a stub `AchievementService` until Steamworks is wired in.)

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Player ↔ NPC | InteractableComponent signal + DialogueManager session | Never direct method calls between Player and NPC scripts |
| NPC ↔ GameState | Read direct; write via `GameState.modify_*` methods only | Discipline issue, not enforced by language; review yourself |
| Dialogue ↔ GameState | Reads via Dialogue Manager's variable expressions; writes via mutation calls | Stateless dialogue is a feature, not a limitation |
| UI ↔ Gameplay | One direction: UI subscribes to EventBus, never reaches into scenes | UI never holds gameplay state |
| Zone ↔ Zone | None (zones don't know about each other); only via GameState and ZoneManager | Prevents cross-zone coupling |
| Save ↔ Everything | One direction: SaveManager reads GameStateData; everything writes through GameState facade | Single point of serialization |

---

## Confidence Assessment

| Area | Level | Reason |
|------|-------|--------|
| Autoload selection & responsibilities | HIGH | Standard Godot pattern, validated against multiple production sources |
| Dialogue Manager choice | HIGH | Strong community consensus for narrative-heavy GDScript projects |
| NPC schedule / multi-axis relationship pattern | MEDIUM-HIGH | Well-trodden in Stardew/cozy genre but synthesized for Godot — will need iteration during slice |
| Save system using Resources | HIGH | GDQuest and official docs both endorse |
| Localization-from-day-one architecture | HIGH | Godot's i18n story is well-documented; cost of retrofitting is well-known |
| Asset organization conventions | MEDIUM | Reasonable defaults; will evolve with Blender pipeline |
| State machine pattern | HIGH | GDQuest reference is canonical for Godot 4 |
| Procedural-template dialogue | MEDIUM | High-leverage but needs prototyping; flagged as deferrable |
| Build order phase suggestions | MEDIUM | Best-effort solo-dev-beginner estimates; roadmap will refine |

---

## Sources

### Authoritative Godot Documentation
- [Godot 4 Background Loading docs](https://docs.godotengine.org/en/latest/tutorials/io/background_loading.html)
- [Godot 4 Internationalization docs](https://docs.godotengine.org/en/stable/tutorials/i18n/internationalizing_games.html)
- [Godot 4 Localization with gettext](https://docs.godotengine.org/en/latest/tutorials/i18n/localization_using_gettext.html)
- [Importing Translations docs](https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_translations.html)

### Dialogue / Narrative Tools
- [Nathan Hoad — Dialogue Manager (GitHub)](https://github.com/nathanhoad/godot_dialogue_manager)
- [Dialogue Manager — Conditions & Mutations](https://github.com/nathanhoad/godot_dialogue_manager/blob/main/docs/Conditions_Mutations.md)
- [Dialogue Manager — Translations](https://github.com/nathanhoad/godot_dialogue_manager/blob/main/docs/Translations.md)
- [Dialogic vs Dialogue Manager comparison](https://www.libhunt.com/compare-dialogic-vs-godot_dialogue_manager)
- [Twine vs Yarn vs Ink vs NarrativeFlow](https://narrativeflow.dev/blog/twine-vs-yarn-spinner-vs-ink-vs-narrativeflow-which-branching-dialogue-tool-is-right-for-your-game/)

### GDQuest Patterns (canonical for Godot 4)
- [Event Bus Singleton pattern](https://www.gdquest.com/tutorial/godot/design-patterns/event-bus-singleton/)
- [Finite State Machine pattern](https://www.gdquest.com/tutorial/godot/design-patterns/finite-state-machine/)
- [Entity-Component pattern](https://www.gdquest.com/tutorial/godot/design-patterns/entity-component-pattern/)
- [Save/Load with Resources](https://www.gdquest.com/library/save_game_godot4/)
- [Save System Cheat Sheet](https://www.gdquest.com/library/cheatsheet_save_systems/)
- [Free 3D Third-Person Controller](https://www.gdquest.com/news/2022/12/godot-4-third-person-controller/)

### Cozy / Narrative Game Design References
- [Stardew Valley Modding:Dialogue (state-flag patterns)](https://stardewvalleywiki.com/Modding:Dialogue)
- [Stardew Valley Friendship system](https://stardewvalleywiki.com/Friendship)

### Inventory / Crafting / Items
- [StraySpark — Inventory & Crafting in Godot 4](https://www.strayspark.studio/blog/godot-4-inventory-crafting-system-complete-guide)
- [GLoot inventory addon](https://github.com/peter-kish/gloot)
- [Kodeco — Resources in Godot 4](https://www.kodeco.com/43227199-using-and-creating-resources-in-godot-4/page/2)

### Input / Settings
- [KoBeWi — Godot-Input-Remap](https://github.com/KoBeWi/Godot-Input-Remap)
- [How to Remap Input Actions in Godot 4 (gamedevartisan)](https://gamedevartisan.com/tutorials/godot-fundamentals/input-remapping)

### Architecture Pattern Discussions
- [Febucci — Godot Signals Architecture](https://blog.febucci.com/2024/12/godot-signals-architecture/)
- [thedivergentai — Autoload Architecture skill](https://github.com/thedivergentai/gd-agentic-skills/blob/main/skills/godot-master/references/autoload-architecture.md)

### Open World / Streaming
- [DigitallyTailored — Godot Open World Database](https://github.com/DigitallyTailored/Godot-Open-World-Database)
- [AsyncScene addon](https://github.com/EiTaNBaRiBoA/AsyncScene)

---

*Architecture research for: 3D narrative-driven cozy life sim, Godot 4, solo developer, vertical-slice-then-scale strategy.*
*Researched: 2026-05-09*
