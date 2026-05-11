---
deliverable: 12
pack: world-style
title: World Bible v0.1
author: Daniel (creative content + design decisions); Claude (structural arrangement of Daniel's stream + procedural restatement of locked decisions, per Daniel directive 2026-05-10)
ai_role: structure-from-stream + procedural-restatement (Daniel streams design content; Claude arranges + restates locked decisions in procedural sections; all in-world creative content Daniel-authored per AI policy)
depends_on:
  - 01-vision-pitch.md
  - 02-pillars-of-play.md
  - 05-core-loops.md
  - 06-player-journey.md
  - 09-slice-scenario-sketch.md
decisions_referenced:
  - D-SCOPE-12
  - D-WORLD-01..06
  - D-VISION-01..14
  - D-TIME-01..05
downstream_consumers:
  - Phase 4 NARR scripting (dialog + voice + matchmaking telegraphs per D-VISION-13)
  - Phase 5 zone authoring (atmospheric depth deferred from v0.1)
  - Phase 6 slice content production (specific villager bios + dialog + faerie houses + festival content)
  - Phase 7 vertical slice ship
  - 13-mood-reference-deck.md (visual references inform Style Guide)
  - 14-style-guide-v0.1.md (visual + audio + narrative voice + UI tone draws from bible's cultural/magical/cozy register)
  - 28-greenlight.md (World Bible commitment at greenlight)
authored_at: authoring/4-world-bible/12-world-bible.md (migrated to canonical 2026-05-10)
length: ~10,000+ words (DEEP scope per D-WORLD-01)
required_sections:
  - 0. Document conventions (what's locked / what's open / how to extend)
  - 1. World setting overview (tone, scale, what kind of world this is)
  - 2. Geography — the 8 zones (each zone: name, biome, vibe, key locations, who lives there, what magic is native)
  - 3. Cosmology / pantheon / lore (origin myth, deities/spirits if any, why the world is the way it is)
  - 4. Magic system — soft + codified (per D-MAGIC: whimsical/atmospheric/cultural tiers; what magic CAN'T do; the codified vibes)
  - 5. Calendar (Stardew-shape per D-WORLD-CAL; season names, length, key festivals/observances; player-controlled day/night per D-TIME-02)
  - 6. Cultures (each culture: aesthetic, beliefs, language flavor, naming conventions, relationship to magic)
  - 7. Cross-cultural elements (how cultures interact in the village; trade; tension; ritual)
  - 8. Open design questions (deferred to later phases — explicitly listed)
  - 9. Glossary (in-world terms, both the rules and the registry of named things)
hard_guardrails:
  - EVERY name in this doc is yours — sprite name, villager names, place names, magic taxonomies, season names, deity names, item names
  - Soft magic with codified vibes per D-MAGIC: codify what magic CAN'T do; whimsical, atmospheric, NEVER deus-ex-machina to solve plot problems
  - 8 zones is the lock; if you discover the world wants 6 or 10, that's a SCOPE.md entry + amendment, not a quiet redefinition
  - Magic tiers are CULTURAL/ATMOSPHERIC, not mechanical TTRPG tiers — confirm this interpretation in Document conventions section
  - Romance lives between villagers per D-VISION-07 — sprite cannot romance; world bible doesn't accommodate sprite-romance content
  - Glossary IS the canonical naming registry — every place/character/magic/season referenced anywhere else in Phase 1 docs must appear here
order: write after Game Design Doc + Slice Pitch groups land. This is the deepest single doc — expect days, not hours. Take the time it needs.
---

# World Bible v0.1

## 0. Document conventions

This is the World Bible v0.1 for Colisi (project codename; final shipping title TBD at Phase 7). It is a long-lived design document — every artist, writer, level designer, and Phase 4-6 content author will reference it for years. v0.1 establishes the structural commitments and sketches each section at DEEP scope per D-WORLD-01; full content authoring continues across Phases 4-9.

### 0.1 Voice rules

This document operates in two registers. **In-world voice** is used for descriptive prose, lore passages, cultural sketches, glossary entries, and the §1 setting overview. **Design notes** appear in `[brackets]` and are not in-world content — they're notes to future authors, Phase-N TODOs, scope-deferral markers, or design-rationale annotations. Cross-references to locked decisions appear as `D-VISION-XX`, `D-WORLD-XX`, `D-STYLE-XX`, `D-TIME-XX`, `D-SUST-XX`, `D-MKTG-XX`, `D-WALL-XX`, or `D-SCOPE-XX` and resolve to entries in `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md`. Where in-world voice and design intent diverge, design intent governs and any reconciliation is logged in `.planning/SCOPE.md` per HEALTH-01 + PHILOSOPHY.md Amendment Process.

### 0.2 Naming syntax

Naming conventions per culture are defined in §6 under each culture's subsection (§6.X). Slice cast names — **Sprinkles** (halfling baker), **Cyrus** (ancient human elder), **Ari** (anthropomorphic hedgehog hedgewitch / alchemist), **Zhan** (leonid carpenter) — and slice location names — **Sterling** (the village), **Town Center**, **The Elder's Abode**, **Sprinkles Amazing Bakery of Unimaginably delicious treats**, **Apothecary**, **Carv**, **tree hollow** (the wisp's starting sanctum) — were authored during plan 01-04 (Scenario Pack) and precede this bible's §6 naming-rules authoring. Consistency between slice names and §6 rules is verified at Phase 6 content authoring; if a slice name conflicts with §6 rules established here, the slice name is preserved (it's already canonical) and §6 rules accommodate it or the rule is amended. The wisp itself is **nameless and genderless** by design (player avatar; no proper noun assigned). The stray black cat is **player-named** at discovery via text input (UI surface; persists per save).

### 0.3 Tone reminder

Magic in this bible is **atmospheric and culturally-codified, not mechanical** (per D-WORLD-02). What magic CAN'T do is named explicitly in §4.2 — Sanderson's First Law of Magics compliance. References to "magic tiers" in §4.4 are **CULTURAL/VOCATIONAL tiers** (per D-WORLD-04), not TTRPG-style power tiers — no spell levels, no DCs, no caster classes, no damage formulas. The sprite (wisp) is a **giver, not an accumulator** (per D-VISION-03) — magic flows through villagers' latent capabilities; the wisp catalyzes, never hoards. The cozy promise (per CLAUDE.md hard guardrails) governs every magical convention: no real-time-pressure mechanics, no fail states, no missable windows, no expiring magic, no required combat, no skill-gate progression. If a passage in this bible suggests otherwise, it's a drafting error — log to SCOPE.md and correct.

### 0.4 Scope (v0.1)

**v0.1 covers** (DEEP scope per D-WORLD-01): the 9 TOC sections sketched substantively; 8 zones outlined; full magic-system principles + Sanderson First Law codification; soft cosmology + lore arcs (broad strokes); Stardew-shape calendar with Colisi-flavored season names; cultural sketches with naming-system rules per culture; cross-cultural elements; deferred items list; lightweight glossary.

**v0.1 explicitly defers to v1.0+** (Phase 4-9 authoring): per-zone interior layouts and detailed POIs beyond slice locations; festival-by-festival specifics (only frameworks here); full NPC roster beyond slice 4 (cast expansion to 12-15 full game); language/script samples beyond naming-rule conventions; specific magical practices per craft (e.g., Sprinkles's exact cooking-magic incantations live in Phase 6 dialog authoring, not here); post-spritesight character voice samples (those live in Style Guide §Narrative voice and Phase 4 NARR scripting); economy specifics (only broad strokes here per §7.1); detailed death/afterlife ritual content beyond conventions (the bible names what these conventions ARE but doesn't author specific funeral rites or post-death narrative content).

**Phase 1 → Phase 2 transition REQUIREMENTS.md amendment queue** (cumulative across plans 01-01 through 01-04) is the authoritative list of REQ wording amendments this bible's content implies: HOME-01..05 + HOME-06 (D-VISION-10 transmutation + faerie houses), WORLD-01..02 (zone architecture clarification per slice plan), CRAFT-01..05 (wisp-catalyzes + wisp-as-courier reinterpretation), COMP-01..04 (wisp-as-companion inversion), NPC-05..06 + NPC-09 (state-tagged dialogue pre/post-spritesight + diverse non-human cast + gossip-as-match-info), NARR-01..06 (any-to-any matchmaking + telegraphed compatibility per D-VISION-13), AUDIO-01..02 (character-coded + seasonal), SAVE-04 (event-log + multi-playthrough + spritesight state + cat name + village aesthetic state), HEALTH-04 (already amended). Spritesight (D-VISION-12) may require new REQ at Phase 1→2 transition. This bible is consistent with the amendment queue; specific REQ rewording happens at the transition gate, not here.

---

## 1. World setting overview

### 1.1 Premise (the world Sterling exists in)

Sterling sits between the ocean and the mountains. Beyond that, the world is deliberately undefined. Is Sterling the only town that exists in this world? Is Sterling a metaphor? Does it really exist at all? The bible does not commit either way. *Some things can always be a mystery, and we don't need to define everything.* The wisp's origins are a perfect example — the wisp drifts above clouds at dawn, aimlessly playing with vapor, bored after some indeterminate stretch of existence. Where it came from, how long it has existed, why it found Sterling now: unknowable by design. [Design note: this mystery-as-principle bounds the bible's authoring load — Daniel writes Sterling deeply, the wider world stays implicit. Cozy-genre comparables: Stardew's Zuzu City is referenced but never visited; AC's wider world is implicit through villager backstories; Disco Elysium's Revachol is just one city in a hinted-at larger world. v2 / sequel could explore wider world if it ever happens; v1 does not.]

The wisp arrives as an external catalyst, never a substitute. The villagers of Sterling have latent magic — capabilities that exist within them dormant until activated. The wisp's presence is the activation. The wisp does not grant magic, does not hold magic, does not accumulate magic (per D-VISION-03). It catalyzes what is already there.

### 1.2 Tone summary

Magic in Sterling is latent until acted upon by an outside force to activate in a very special way that is meaningful to the wielder. A carpenter cannot bake bread with magic, even if they know how to bake bread traditionally. Magic is a gift, not a deus ex machina (per D-WORLD-02). Magic is a representation of the soul of the villager, and manifests as such — **magic is an expression of identity, over everything else.** Vocation is the most common identity-anchor, which is why magic typically manifests vocationally. But not always. The Elder, Cyrus, has no vocation; his identity is non-vocational (wisdom-keeper, perceiver, the one who knows), so his magic manifests through *that* identity. Knowing IS what Cyrus does; his magic is knowing. The rubric for every villager: *what's their identity? their magic manifests through that.*

Magic's visual register varies per soul. Sprinkles's cooking magic appears as cute fireworks (her playful identity). Zhan's construction magic is deliberate, not-flashy (his shy/demure identity). Ari's alchemy magic moves in swirls and swoops, self-entertaining (her eccentric identity). Cyrus's psychic knowledge is completely non-visible — heard, not seen — like the sound of rushing wind (his blind seer identity; air-associated). Each villager's magic visually *signs* them: Phase 6 art direction has rich material to differentiate.

Sterling's emotional register evolves across the game's arc (per D-VISION-14). Early game holds hints of terse, sleepy, strife — villagers in unfulfilled routines, small frustrations between them, a slight under-energization to the village. The wisp's catalyzing slowly shifts the register toward warmth, coalition, cooperation as villagers grow into themselves and into each other. **This evolution is bidirectional.** If the player consistently chooses non-altruistic options (pursues poor matchmaking despite telegraphed warnings per D-VISION-13; leaves villager arcs unfinished; ignores cascading thread seeds), the tonal arc remains in or regresses toward terse / sleepy / strife. The world *reflects* player choices; it does not *judge* them.

### 1.3 The cozy promise the world holds

Sterling promises specific things to the player. These are not marketing claims — they are commitments the world bible holds the rest of the game to:

- **No real-time pressure.** Time in Sterling advances on player action (rest at sanctum or festival participation per D-TIME-01..05 + few-trigger model). Standing still is always valid. The wisp can drift indefinitely without consequence.
- **No fail states.** The player cannot lose access to content through choice. The cozy promise applies at every horizon: missed cloud rings produce gentle wisp feedback; missed magic-tutoring inputs produce villager-encouragement, not failure; pursued-poor matchmaking produces telegraphed warnings and consequence, not punishment.
- **No missable windows.** Events recur. Seasons cycle. The third Harvest Festival is different from the first because of accumulated context, but it is never missed-forever. (Per D-VISION-09 NG+ time-loop + D-VISION-04 cascading thread + seasonal-recurrence anchor type.)
- **Always something to do.** Even at the slice's cliffhanger and at hour 100+ saturation, Sterling rewards return. Per the four-engine retention strategy (state-tagged dialogue depth, multi-thread narrative, seasonal recurrence, player-driven goals — `research/SUMMARY.md`).
- **Telegraphed, never hidden.** Every consequence the player faces is foreseeable. Every "are you sure?" warning fires before the moment of commitment. Per Pillar 3 (Approachability) + D-VISION-13 telegraphed compatibility.
- **The world is responsive, not judgmental.** Sterling reflects what the player does. It does not author moral verdicts. Non-altruistic playthroughs are valid play — the world's tonal arc tracks them honestly (per D-VISION-14) but does not punish them.

[Design note: §1.3 reinforces what the rest of the bible must respect. If any passage in §2-§9 contradicts these commitments, the contradiction is logged to SCOPE.md and the passage is corrected — not the other way around. The cozy promise governs.]

---

## 2. Geography — Sterling and its zones

> Sterling is the entire game map. Per §1.1, the world beyond Sterling is deliberately undefined. v0.1 establishes 13 named zones within and adjacent to Sterling, plus 3-4 Phase 6 cast-expansion slots (unnamed at v0.1; filled when the full 12-15-villager cast lands). Atmospheric vibe / sensory detail / native magic flavor per zone is deferred to Phase 5 / v1.0 zone authoring per D-WORLD-01 v0.1 scope.

### 2.0 Sterling layout overview

Sterling sits between the ocean (west) and the mountains (northeast). A festival valley opens to the south. The animal sanctuary sits in the mountain foothills to the east, accessed by a switchback path. The wisp's starting sanctum — the tree hollow — also sits in the mountain foothills, between the buildings and the animal sanctuary's path.

[Design note: Daniel-authored rough map exists as hand-drawn sketch — save to `.planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/assets/sterling-rough-map.png` for canonical embedding. Per AI policy, the map is Daniel-authored visual content; not AI-generated. Phase 5 zone authoring will produce a refined cartography pass at v1.0.]

**Adjacency (per Daniel's rough map):**

```
                          NORTH
                            ↑
   [Mountains]
       │
   [foothills + tree hollow + path → Animal Sanctuary]
       │
[Ocean] ── [Sterling Town Center + buildings] ── [eastern foothills]
       │
   [Festival Valley]
       │
                            ↓
                          SOUTH
```

**Building layout within Sterling** (approximate positions per Daniel's hand-drawn map):

- **Northwest:** Francois's (general store) + cast-expansion slot #1
- **North:** Cast-expansion slot #2 + Cast-expansion slot #3
- **Northeast:** The Elder's Abode + Shimmering Halls (adjacent buildings forming a complex)
- **West coast:** Dock / Boathouse (ocean access)
- **West-center:** Sprinkles Amazing Bakery of Unimaginably delicious treats + the stray black cat nearby; **Cafe** (stacked above Bakery — adjacent / connected building)
- **Center:** Town Center
- **Center-east:** **Clinic** (medical / healing space)
- **East-center:** Carv (Zhan's workshop)
- **South-center:** Cast-expansion slot #4
- **Southwest:** Apothecary (Ari)
- **East (foothills):** tree hollow, then switchback path → Animal Sanctuary
- **South:** Festival Valley

### 2.1 Town Center

The cohesive village hub. Where Sterling's villagers gather for daily routines, casual encounters, and village-wide events. **Function:** main gathering area; spritesight gift ceremonies likely visible here in passing; the wisp's first sustained exploration zone after dipping below the clouds. **NPCs at slice:** all 4 slice villagers pass through. **Atmospheric vibe + native magic:** *[Deferred to Phase 5 / v1.0]*

### 2.2 The Elder's Abode

Cyrus's home. **Function:** first contact site (the wisp's first sustained dialog with anyone happens here); spritesight gift bestowal site (Cyrus bestows the gift on visiting villagers here); the wisp's regular check-in point throughout slice. **Native magic:** psychic-knowledge resonance (Cyrus's identity-magic — non-visible, the sound of rushing wind). **Atmospheric vibe:** *[Deferred — gravitas, measured per Cyrus's character; full sensory detail v1.0]*

### 2.3 Sprinkles Amazing Bakery of Unimaginably delicious treats

Sprinkles's bakery. **Function:** cooking-magic minigame venue; first-impression bakery space upon slice exploration. **Native magic:** cooking-magic (Sprinkles's identity-magic — cute fireworks). **Stray black cat nearby:** the cat hangs out adjacent to the bakery (likely drawn by scraps + warmth); cat discovery beat naturally lands here. **Atmospheric vibe:** *[Deferred — warm light, flour-dust haze per slice scenario reference; full sensory detail v1.0]*

### 2.4 Apothecary

Ari's space. **Function:** alchemy minigame venue; brewing of potions / poultices / remedies; Ari's solitary working space. **Native magic:** alchemy (Ari's identity-magic — swirls and swoops, self-entertaining). **Atmospheric vibe:** *[Deferred — austere, minimal per Ari's character; full sensory detail v1.0]*

### 2.5 Carv

Zhan's workshop. **Function:** magical construction minigame venue; furniture / building / wood-joining magic. **Native magic:** magical construction (Zhan's identity-magic — deliberate, not-flashy). **Atmospheric vibe:** *[Deferred — quiet, focused per Zhan's character; full sensory detail v1.0]*

### 2.6 Shimmering Halls

The town's community center. **Function:** village gatherings; social events; potential dance / mixer hosting; D-VISION-10 Layer 2 village-as-canvas upgrade slot candidate (interior amenities can shift based on villager milestones — *deferred to Phase 5 specification*). **Adjacent to:** The Elder's Abode (forming a complex). **Atmospheric vibe + native magic:** *[Deferred to Phase 5 / v1.0]*

### 2.7 Francois's

The general store. **Function:** standard village amenity — supplies, dry goods. **Naming wink:** playful homage / jab at SDV's Pierre's; the name itself is positioning. **Atmospheric vibe + native magic:** *[Deferred to Phase 5 / v1.0]*

### 2.8 Dock / Boathouse

Sterling's ocean access. **Function:** maritime infrastructure; potential fishing / coastal content in full game; could host a future cast-expansion villager (a fisher, a boatwright, a seafaring traveler — *deferred to Phase 6 cast expansion*). **Atmospheric vibe + native magic:** *[Deferred to Phase 5 / v1.0]*

### 2.9 Festival Valley

Festival grounds during seasonal festivals; valley space for villagers' dates and contemplation when no festival is active (dual-purpose). **Function:** seasonal festival hosting (per D-WORLD-03 Stardew-shape calendar); cozy date location between festivals — particularly suited to romantic moments (e.g., Ari × Zhan post-meet-cute walks once slice arc continues into full-game). **Atmospheric vibe + native magic:** *[Deferred — outdoor, open, seasonally-themed; full sensory detail v1.0]*

### 2.10 tree hollow

The wisp's starting sanctum. **Function:** default rest location pre-faerie-house unlock; sole D-TIME-03 rest trigger location for the wisp in early slice; the wisp's first "home." **Location:** mountain foothills, between Sterling's buildings and the switchback path to the animal sanctuary. **Atmospheric vibe:** *[Deferred — intimate, natural; the wisp's first sense of "home" in the world; full sensory detail v1.0]*

### 2.11 Animal Sanctuary

Unlock-gated post-slice content (per D-VISION-11). **Function:** appears only after the black cat match completes; serves as the home base for the animal rescue meta-loop anchor type; sanctuary's own faerie house unlocks when X-animals-adopted milestone + sanctuary-owner-arc completes (the first concrete village-wide milestone aggregation example per WORLD-01 scope clarification). **Location:** eastern foothills, accessed by switchback path from tree hollow's area. **Slice scope:** visible-but-inaccessible during slice (player may glimpse the sanctuary or its path but cannot enter; arc unlocks post-cat-completion). **Atmospheric vibe + native magic:** *[Deferred to Phase 5 / v1.0]*

### 2.12 Cafe

Adjacent to Sprinkles's Bakery (stacked / connected building). **Function:** social gathering hub centered on food/drink; potential cozy date location (a softer / more intimate counterpart to Festival Valley's open-air dating space); could host a future cast-expansion villager (a barista, drinks-magic specialist, or social-hub resident — *deferred to Phase 6 cast expansion*) OR may be operated by Sprinkles as a connected business. **Atmospheric vibe + native magic + resident:** *[Deferred to Phase 5 / v1.0]*

### 2.13 Clinic

Center-east of Town Center. **Function:** medical / healing space; pairs naturally with Ari's alchemy / remedies (Apothecary supplies remedies, Clinic dispenses them); could be operated by a future cast-expansion villager (a healer, doctor, or care-magic specialist — *deferred to Phase 6 cast expansion*) OR may interface with Ari's existing remedy practice. **Atmospheric vibe + native magic + resident:** *[Deferred to Phase 5 / v1.0]*

### 2.14 Cast-expansion slots (3-4 unnamed buildings)

Per Daniel's rough map, Sterling has 3-4 additional building footprints unnamed at v0.1. These are **Phase 6 cast-expansion slots** for the full game's 12-15 villager cast beyond the slice's 4. Each will receive a name, archetype, resident NPC, and full §2.X subsection at Phase 6 content authoring.

[Design note: Existence of slots in v0.1 is a structural commitment — Sterling's spatial layout anticipates cast expansion; the layout doesn't get redesigned at Phase 6, only filled. Per D-WORLD-01 DEEP scope. Cafe + Clinic occupy two slots that previously read as "?" — Daniel's progressive naming brings them out of cast-expansion-only status; their resident NPCs are still Phase 6 work.]

---

## 3. Cosmology / pantheon / lore

## 3. Cosmology / pantheon / lore

> **§3 is intentionally minimal at v0.1 + v1.0 and possibly forever.** Per §1.1's mystery-as-design-principle (locked 2026-05-10 by Daniel + enthusiastically approved by Dawn during World Bible §3 discussion): some things stay unknown by design. Cosmology / pantheon / detailed lore arcs are among them. v0.1 records what the bible *commits to NOT defining* — and the few small commitments that emerge from already-locked decisions.

### 3.1 Cosmology

**The world IS.** No origin myth is committed at v0.1. Sterling exists. Magic exists. The wisp exists. Where Sterling came from, when, by whom, or whether any of it has a creator-figure or origin-event: deliberately undefined.

This is not a placeholder for future cosmology authoring — it is the cosmology. Cozy-genre comparables follow this pattern (Stardew commits to no cosmology; AC commits to no cosmology; Spiritfarer's cosmology only structures what serves its mechanics, not more). Sterling does the same.

[Design note: any future temptation to expand cosmology must be checked against §1.1 mystery principle + D-WORLD-02 soft-magic + Pillar 2 cozy promise (no deus-ex-machina solutions). If an authoring need surfaces (e.g., a Phase 6 storyline that requires a creation myth), revisit via SCOPE.md amendment — don't quietly drift cosmology into existence.]

### 3.2 Pantheon

**Non-deistic.** Sterling has no pantheon at v0.1.

What Sterling *does* have:
- **Animism** — talking animals exist (D-VISION-11 black cat; potentially others in full game cast). Spirits exist (the wisp itself; possibly hedge spirits, household spirits, place-spirits per future authoring). Animism is ambient, not theological — there's no creation myth, no pantheon hierarchy, no clergy class.
- **The wisp itself** — a magical entity of unknown origin (per §1.1). The wisp is a *presence in the world*, not a member of a pantheon. The wisp does not represent any deity. The wisp does not have a deity of its own.
- **Latent magic in villagers** — per §1.2, magic is identity expression. Its source is the villager's soul, not a deity. The wisp catalyzes, never grants. No villager prays to a god for magic; their magic is *theirs*.

[Design note: future authoring may surface specific spirits (e.g., a hedge-spirit Ari occasionally consults at the Apothecary; the wisp's possible kin if any are ever revealed). These would be *spirits*, not *deities*, and would not constitute a formal pantheon. Track via SCOPE.md if scope expands.]

### 3.3 Major lore arcs

**Minimal at v0.1.** The bible commits to no specific historical events or named lore arcs. What's known:

- **Sterling has existed for some indeterminate amount of time.** Long enough to have an ancient elder (Cyrus); old enough for traditions, festivals, the rhythm of seasonal recurrence. How old: undefined.
- **The wisp's arrival is recent** (in the scope of the game's start). Whether the wisp has visited before, whether it has visited other places, whether other wisps exist anywhere: unknown by design.
- **No catastrophic past, no looming threat.** Per cozy promise: Sterling does not have a "fallen empire" backstory, a "great calamity," or an "ancient evil" to threaten its present. The village's early-game terse / sleepy / strife register (per D-VISION-14 default trajectory) is *unfulfilled routine*, not *recovery from disaster*.

[Design note: at v1.0 / Phase 6 character authoring, individual villager backstories may surface small personal-lore beats (e.g., Cyrus's history with spritesight, Ari's origin story if relevant to her arc). These are personal lore, not world lore. Track in §6 cultures + per-villager bio authoring at Phase 6.]

---

## 4. Magic system — soft + codified

> Magic in Sterling is *atmospheric and culturally-codified*, not mechanical (per D-WORLD-02 + §0.3 tone reminder). This section codifies what magic IS, what magic CAN'T do, the wisp's role, the locked taxonomy, the scale, and per-villager personal magic.

### 4.1 What magic IS

Per §1.2 (Daniel-authored 2026-05-10): magic in Sterling is **latent until acted upon by an outside force** to activate in a way that is meaningful to the wielder. A carpenter cannot bake bread with magic, even if they know how to bake bread traditionally. **Magic is a gift, not a deus ex machina.** Magic is a representation of the soul of the villager and manifests as such — **magic is an expression of identity, over everything else.** Vocation is the most common identity-anchor (which is why magic typically manifests vocationally), but not always (Cyrus exemplifies non-vocational identity-magic).

The wisp's presence is the activating outside force. Pre-wisp, every villager has latent magic but it sits dormant. The wisp's catalyzing presence — combined with each villager's awareness of the wisp (via the spritesight gift per D-VISION-12) — activates the magic into manifest form.

### 4.2 What magic CAN'T do (Sanderson's First Law of Magics — codified vibes)

The cozy promise governs magic absolutely. The following are **explicit constraints** on what magic in Sterling can and cannot accomplish:

- **Magic does not raise the dead.** No resurrection, no necromancy, no "we bring back the lost loved one" plot resolution.
- **Magic does not predict precise outcomes.** No prophecy specificity (Cyrus's psychic knowledge is *impressions and patterns*, not "on day 47 at 3pm the following will happen"). No future-state queries that resolve as game-state spoilers.
- **Magic does not bypass relationship-building.** No "love potion" / "charm spell" / "force-bond" magic. Matchmaking happens through environmental manipulation + telegraphed compatibility (D-VISION-04 + D-VISION-13), never through magical compulsion.
- **Magic does not solve plot problems via deus-ex-machina.** Per D-WORLD-02 — magic is a *gift*, not an *out*. Narrative tensions resolve through character interaction, not magical intervention.
- **Magic is not weapons.** No combat magic. No fireballs-as-attacks. Per Pillar 2 (Never Punishing) + combat anti-clause (locked 2026-05-10) — no interactive player combat mechanics of ANY kind. Magic does not aggregate into a power-curve.
- **Magic is not a skill tree.** No experience points, no levels, no power scaling, no progression gates locked behind magical mastery thresholds. Per cozy promise anti-clause.
- **Magic is not real-time-pressure.** No "spell timer," no "energy depletion," no "magic burnout" mechanics. Per WORLD-05 + D-TIME-02.
- **Magic does not punish.** Mis-cast magic does not produce dangerous side-effects, backfire damage, or lasting penalties. Missed magic-tutoring inputs produce gentle wisp feedback per Pillar 2 first-5-min anchor.
- **Magic does not exceed everyday scale at v0.1** (per §4.5 below).
- **Magic does not cross identity boundaries.** A carpenter cannot bake-magic; a cook cannot construction-magic; identity-coupled magic per §4.1 means each villager's magic is THEIRS, not a generic toolkit.
- **The wisp does not grant new magic.** The wisp activates existing latent magic. Per D-VISION-03 + §4.3.

### 4.3 The wisp's role

The wisp is a **giver, never an accumulator** (per D-VISION-03). Magic flows through the wisp's catalyzing presence into villagers' latent identity-magic; the wisp does not absorb, hoard, or wield magic of its own beyond catalysis.

The wisp's specific magical capabilities:
- **Catalyzing villager magic via proximity + intent** — the wisp's drift through a villager's space + co-presence during magic-tutoring activates and refines that villager's identity-magic. Pre-spritesight, the wisp can still catalyze (e.g., the fruit-ripening covert-guidance chain in slice scenario §0:25-0:35 demonstrates wisp-catalyzed-effect without requiring sighted-villager dialog).
- **Environmental manipulation at small scale** — the wisp can gently nudge environmental conditions (per D-VISION-04 matchmaking + D-VISION-12 covert guidance). Ripening fruit. Drawing attention via small sparkles. Subtle wind / light / temperature shifts. **Never large-scale environment change** — no terraforming, no weather-summoning, no zone-altering effects. Per §4.5 everyday scale.
- **Cross-playthrough memory (NG+ per D-VISION-09)** — the wisp retains event-log knowledge across playthroughs. Memory is the wisp's only persistent magic-of-its-own.

What the wisp CANNOT do:
- **Direct dialog with villagers pre-spritesight** (D-VISION-12). Cyrus is the exception (always sighted via psychic knowledge); other villagers require Cyrus's spritesight gift.
- **Granting magic that doesn't already exist in a villager.** The wisp catalyzes existing latent magic; cannot create new magical capability where there is no latent identity-magic.
- **Refusing to catalyze.** The wisp's presence catalyzes by *being*, not by choice. (Design note: this is mechanic-level — the wisp catalyzes when present. If Daniel later wants to introduce "wisp can choose to suppress catalysis" as a mechanic, that's a Phase 4/6 design decision logged via SCOPE.md.)

### 4.4 Cultural / vocational tier taxonomy

**Locked 2026-05-10** (Daniel-authored taxonomy). Magic in Sterling falls into 10 cultural/vocational categories. Each category is a *vocational identity*; each villager's specific magic is a *personalized instance* of one (or rarely more) of these categories.

| # | Category | Slice resident | Description |
|---|---|---|---|
| 1 | **Cooking** | Sprinkles | Magical infusion into food/drink; bread-rising magic; flavor-blending magic; warm-hospitality magic |
| 2 | **Psychic / Knowing** | Cyrus | Knowing magic (non-vocational identity); pattern-perception; impression-reading; spritesight-bestowal |
| 3 | **Alchemy / Hedge-witching** | Ari | Mixture and distillation magic; potions, poultices, remedies; ingredient-knowing |
| 4 | **Magical construction** | Zhan | Building and joining magic; wood-craft, furniture-making, structure-raising |
| 5 | **Healing** *(beings, not materials)* | Future Clinic resident | Medical / care magic for living beings; sickness-soothing, injury-mending (in flesh, not objects) |
| 6 | **Mending** *(materials, not beings)* | Future villager | Repair magic for inanimate objects — distinct from construction (which builds new) and healing (which addresses living beings) |
| 7 | **Telekinesis** | **Cafe owner** (future villager) | Moving objects with magical intent — particularly suited to a cafe environment (drinks gliding to patrons, chairs sliding out, dishes returning to wash) |
| 8 | **Farming** | Future villager | Magical infusion into plant growth, harvest abundance, season-coupling |
| 9 | **Fishing** | Future villager (likely Dock / Boathouse resident) | Magical attuning to water and aquatic life; fish-calling, current-reading |
| 10 | **Hunting** | Future villager | Magical attuning to forest/mountain wildlife; tracking, listening, ethical-take ritual |

[Design note: 10 categories cover Sterling's full ~12-15 villager cast comfortably. Some villagers may share categories (e.g., two cooking-magic users with distinct specialties — savory vs sweet). Some categories may remain unfilled at v1.0 if Phase 6 cast doesn't include that vocational identity. Daniel-authored taxonomy is the v0.1 lock; can be amended via SCOPE.md if Phase 6 character authoring surfaces a needed addition. Note the Telekinesis + Cafe owner pairing — Daniel's "!!" enthusiasm flags this as a confirmed Phase 6 character slot with specific identity-magic already assigned.]

### 4.5 Atmospheric scale

**Everyday magic only at v0.1.** All locked magic in Sterling operates at *individual villager craft* scale — the kitchen, the workshop, the apothecary, the bedside, the field. Magic does not operate at larger scales in v0.1.

What this excludes:
- **Grove-scale magic** — region-affecting magic (e.g., "summoning the harvest goddess," "healing the village's water source") is NOT in v0.1 scope.
- **World-scale magic** — cosmic-effect magic (e.g., "shifting Sterling between dimensions," "communing with the ocean's spirit at world-altering scale") is NOT in v0.1 scope.
- **Combat-scale magic** — see §4.2 anti-clauses; magic is not weapons.

[Design note: Daniel flagged future possibility of grove-scale magic as "a HUGE defining scripted event" — meaning if grove-scale ever lands, it would be a singular narrative beat with significant ceremony, not a regular game mechanic. v0.1 does not commit to grove-scale magic; future v1.0+ amendments via SCOPE.md if Daniel introduces such a scripted event. World-scale magic explicitly does NOT match the §3 minimal cosmology framing and would conflict with §1.1 mystery-as-design-principle; world-scale is therefore not part of any future addition path.]

### 4.6 Personal magic per villager

Per §4.1 (identity expression) + §1.2 (visual manifestation per soul): each villager's specific magic is a personalized instance of one §4.4 category, expressed through their unique identity.

**Slice cast (locked 2026-05-10):**

| Villager | Category | Visual manifestation | Identity expression |
|---|---|---|---|
| **Sprinkles** | Cooking | Cute fireworks | Silly / playful — magic delights as it works |
| **Cyrus** | Psychic / Knowing | Completely non-visible; the sound of rushing wind | Ancient / measured / blind seer — knowing IS what he does; magic perceived through other senses, not sight |
| **Ari** | Alchemy / Hedge-witching | Swirls and swoops, self-entertaining | Eccentric / anti-social — magic plays for itself when no one's watching |
| **Zhan** | Magical construction | Deliberate, not-flashy | Shy / demure — magic is quietly competent; doesn't announce itself |

**Future cast (Phase 6 expansion — partial assignments):**

- **Cafe owner**: Telekinesis (locked design slot per Daniel's enthusiasm 2026-05-10; resident NPC's name, personality, and full bio Phase 6)
- **Clinic resident**: Healing (likely Phase 6 assignment; resident details Phase 6)
- **Dock / Boathouse resident**: Likely Fishing (Phase 6)
- **Other cast-expansion slots**: Farming, Mending, Hunting, plus possible second-instance of slice categories (e.g., a second cooking-magic user with distinct specialty); resident assignments at Phase 6

[Design note: Each Phase 6 villager bio will specify identity → category → visual manifestation, following the slice cast's pattern. Phase 6 character authoring uses the Wildflower + Azriel references logged in `persona-zero-emergent-feedback.md` 2026-05-10 for character interiority work; cozy promise filter applied per cast representation principle.]

---

## 5. Calendar

> Per `D-WORLD-03`: Stardew-shape calendar with Colisi-flavored season names. 4 seasons + 4 cross-quarter transition festivals = 8 named time-markers per year. Names locked 2026-05-10 from the Wheel of the Year tradition (4 solar sabbats as season names; 4 cross-quarter sabbats as transition festivals). Specific festival content (which villagers participate, scene blocking, dialog) is Phase 6 content authoring; v0.1 establishes the framework + register + anchor mechanics.

### 5.1 Year structure

Sterling's year has **4 seasons of ~28 days each = ~112-day year** (Stardew-shape per D-WORLD-03). Each season ends at its solar peak (solstice or equinox) and transitions into the next via a **cross-quarter festival** ~halfway between season peaks. The full annual rhythm:

```
Yule (Winter)
   ↓ ... Imbolc (transition festival)
Ostara (Spring)
   ↓ ... Beltane (transition festival)
Litha (Summer)
   ↓ ... Lammas (transition festival)
Mabon (Fall)
   ↓ ... Samhain (transition festival)
[back to Yule]
```

[Design note: 8 time-markers per year gives Phase 6 narrative content authoring a rhythm. Per D-WORLD-04: tier-references are cultural/atmospheric, not mechanical — no "level up at season-end" mechanics. Per few-trigger model (`05-core-loops.md` Trigger list LOCKED 2026-05-10): festival participation consumes the festival day (advances to next morning). Rest at sprite home/sanctum advances time; no other action does. Player can stand still indefinitely within a day (D-TIME-02).]

### 5.2 Season names (in-world voice)

The 4 seasons of Sterling, taking their names from the Wheel of the Year tradition (solar sabbats — each season is named after its peak/solstice day):

- **Ostara** *(Spring)* — vernal equinox season; awakening; first warmth returning; the village stirring from Yule's stillness
- **Litha** *(Summer)* — summer solstice season; long days, full warmth; Sterling at its most active; growing season
- **Mabon** *(Fall)* — autumnal equinox season; harvest; turning inward; the year's accumulated work coming to fruition
- **Yule** *(Winter)* — winter solstice season; long nights; village gathered close; reflective season

[Design note: per D-WORLD-04 atmospheric tiers, these are *cultural seasons* with the in-world meaning above; not mechanical "Spring DOT effect" buffs. Per D-WORLD-02 + §1.1 mystery-as-design-principle, no creation-myth backstory committed for why Sterling uses these names — they exist in the village's cultural tradition without theological framework. Sterling's residents simply call them this.]

### 5.3 Annual festival framework

**4 cross-quarter transition festivals** punctuate Sterling's year, marking the move between named seasons. Each festival has a distinct emotional register + anchor mechanic + village-fit:

| Festival | Position | Emotional register | Anchor mechanic | Sterling village-fit |
|---|---|---|---|---|
| **Imbolc** | Yule → Ostara *(~early February equivalent)* | Stirring / awakening / contemplation | New-beginnings beat; villager-arc kickoffs; candle-lighting; the first warmth of the returning year | Cyrus likely spiritual anchor (psychic-knowing + ancient elder pairs with candle/contemplation tone); Shimmering Halls plausible venue |
| **Beltane** | Ostara → Litha *(~May 1 equivalent)* | Partnership / celebration / warmth | **Matchmaking-puzzle climax** — D-VISION-04 matchmaking arcs culminate here per year; partnerships consolidate; flower-crown / maypole dancing register | Festival Valley natural venue (dancing space; cozy date location between festivals + festival day itself); slice's Ari × Zhan first-kiss cliffhanger plausibly happens at or just before Beltane |
| **Lammas** *(Lughnasadh)* | Litha → Mabon *(~August 1 equivalent)* | Harvest / abundance / community | First-harvest beat; village-wide celebration; possible D-VISION-10 Layer 2 upgrade trigger (community projects culminating); bread-making festival (cozy-game perfect for Sprinkles's bakery resonance) | Sprinkles's Amazing Bakery natural anchor (bread festival = her vocation); Town Center or outdoor village space; pairs with future farming-archetype villager |
| **Samhain** | Mabon → Yule *(~November 1 equivalent)* | Memory / reflection / gathering | NARR-06 replay-as-revelation thematic anchor; honoring past playthroughs / villagers / village memory; reflective register | Shimmering Halls plausible (gathering / reflection); could anchor a "village memory" tradition (recording stories, paying attention to what has accumulated) |

**Cozy-filter anti-clauses** *(locked 2026-05-10)*:

- **Beltane is matchmaking-energy at cozy register, NOT sensual content.** Per "no mature themes" anti-clause (cast representation principle 2026-05-10 SCOPE.md row). Beltane is flower-crowns + maypole-dancing + village-pair-celebration + matchmaking-arc resolution at the COZY register. Phase 6 content authoring must hold this line — Beltane's traditional fertility associations are explicitly OUT of scope.
- **Samhain is memory/reflection at cozy register, NOT horror or scary content.** Per cozy promise. Pagan Samhain's spirit-world associations and Halloween origins do NOT apply to Colisi's Samhain — Sterling's Samhain is gentle reflection on the village's accumulated history (per playthrough; per in-world year), honoring of villagers' personal stories, NARR-06 replay context. Phase 6 content authoring must keep Samhain's register reflective-not-haunting.

[Design note: festival-by-festival specifics — exact activities, scene blocking, villager participation per festival, mini-game integration — are Phase 6 content authoring per D-WORLD-03 + plan 01-05 v0.1 scope deferral. v0.1 establishes the framework, register, anchor mechanics, and cozy-filter anti-clauses. Phase 6 content lands the actual festival scenes.]

[Design note 2: D-VISION-14 bidirectional tonal arc applies to festivals — a Beltane held during a non-altruistic playthrough has a cooler register than a Beltane during an altruistic playthrough; per state-tagged dialogue (NPC-05) + village state per save. Phase 6 NARR + dialog authoring lands the tonal variants per festival per tonal-state.]

### 5.4 Villager birthdays

**Every villager has a birthday on Sterling's calendar** (Dawn-recommended 2026-05-10; cozy-genre pattern per Stardew + AC). Birthdays are personal celebrations, not festivals — smaller-scale than the 4 cross-quarter festivals (§5.3) but threaded through Sterling's annual rhythm.

**Framework at v0.1:**
- ~12-15 villagers + cat = ~13-16 birthdays distributed across Sterling's ~112-day year (~1 per ~7-8 days average)
- Birthdays appear on the in-game calendar so the player can anticipate them
- Gifting a villager a preferred item on their birthday boosts the multi-axis relationship (NPC-03); per cozy promise, missing a birthday does NOT punish — the villager might casually mention it after, but no relationship penalty applies
- D-VISION-09 NG+ wisp memory: across playthroughs, the wisp recalls each villager's preferred gifts ("last time we gave Sprinkles a flower bouquet — try something different this time?")
- D-VISION-14 bidirectional tonal arc applies: villager mood on their birthday varies per cumulative village tonal state

**Phase 6 content authoring:**
- Each villager's specific birthday (day-in-calendar)
- Each villager's preferred gifts (per identity / vocation / personality)
- Birthday-scene dialog per villager × per tonal state
- The wisp + cat: do they have birthdays? (Wisp: probably not per §1.1 mystery-of-origins; Cat: maybe player-assigned at adoption, or randomly generated — Phase 6 decision)
- Slice scope: 4 slice villagers may have birthdays mentioned but slice's ~3-day span likely doesn't cover any — Phase 6 decides if any slice birthday falls in slice time

---

## 6. Cultures

> **Sterling has one baseline culture** — locked 2026-05-10 (Daniel chose Option D: pan-Sterling single culture + acknowledgment of species heritage). Villagers from various species (halfling, human, leonid, hedgehog, others) share Sterling's calendar, festivals, magic system, and traditions as their primary cultural baseline. Each villager carries *optional personal heritage threads* from their species background — but species-heritage is **personal, not cultural-bloc.** Sterling does not have a "halfling quarter" or "leonid district"; everyone lives mixed together in the village.

### 6.1 Sterling baseline culture (shared by all villagers)

What every Sterling resident shares as the primary cultural baseline:

- **Calendar + festivals** (§5) — Ostara / Litha / Mabon / Yule seasons; Imbolc / Beltane / Lammas / Samhain cross-quarter festivals. All villagers participate in Sterling's annual rhythm regardless of species.
- **Magic system** (§4) — latent identity-magic per villager; Cyrus as spritesight-bestowal anchor; the wisp's catalytic presence applies equally to all villagers.
- **Cozy register** (per §1 cozy promise) — Sterling's culture is gentle, attention-rewarding, non-punishing, never-in-a-hurry. Customs respect this register.
- **No formal religion / pantheon** (per §3) — Sterling's culture is non-deistic. Practices are atmospheric (candle-lighting at Imbolc, dancing at Beltane, bread at Lammas, reflection at Samhain) without theological framework.
- **Trade + economy + village interdependence** (sketched in §7) — villagers share Sterling's economic + social structure.

### 6.2 Species heritage threads (optional, personal)

Villagers can honor their species heritage through personal practices, but heritage is *additive to* Sterling's baseline culture — never a substitute for it, never a separator. A halfling living in Sterling participates fully in Sterling baseline culture AND may also keep some personal halfling-heritage practices.

**Slice cast species heritage (Phase 6 content authoring lands specifics):**

- **Sprinkles** (halfling) — may keep personal halfling-tradition practices alongside Sterling baseline. Phase 6 authoring decides which specific halfling-tradition practices Sprinkles personally honors (e.g., a particular dish, song, family ritual — Daniel-authored at Phase 6).
- **Cyrus** (ancient human) — given his age, may carry deeper-heritage threads than the rest of the slice cast. As the village's elder, his heritage may overlap with what Sterling's baseline culture has accumulated (Sterling-baseline-as-something-Cyrus-helped-shape). Phase 6 authoring lands specifics.
- **Ari** (hedgehog) — anthropomorphic hedgehog with personal hedge-spirit / forager / solitary-craft heritage threads (consistent with her alchemy archetype). Phase 6 authoring lands specifics.
- **Zhan** (leonid) — leonid heritage threads (possibly relating to craftsmanship lineage, family wood-working tradition, or species-specific ritual). Phase 6 authoring lands specifics per Wildflower + Azriel character-reference work (per `persona-zero-emergent-feedback.md` 2026-05-10).

**Future cast (Phase 6 expansion):**
Each future villager carries their own species' heritage threads. Phase 6 character bio authoring decides which heritage practices each villager personally honors.

[Design note: per AI policy, Claude does NOT invent specific halfling / leonid / hedgehog / other species cultural practices, rituals, holidays, or traditions. Specific heritage content is Daniel-authored at Phase 6 villager bio authoring, informed by Wildflower + Azriel character references (Dawn-recommended 2026-05-10) and Daniel's own design instincts. v0.1 establishes ONLY that species heritage exists as personal-not-cultural-bloc; the specific content is deferred.]

### 6.3 Naming-system rules (Sterling-wide loose)

Per Option D framing, Sterling's naming conventions are **loose and mixed**. There is no rigid per-species naming pattern — villagers' names are personal choices (their own, their families', or whoever named them at birth) and the diversity reflects Sterling's pan-cultural nature.

**The slice cast as precedent:**

| Villager | Species | Name | Style |
|---|---|---|---|
| Sprinkles | halfling | "Sprinkles" | Descriptive English, cute-coded (fits halfling stereotype + her playful personality but not a HARD halfling-naming-rule) |
| Cyrus | ancient human | "Cyrus" | Classical (Greek/Persian origin), gravitas-coded (fits an ancient elder, not a HARD human-naming-rule) |
| Ari | hedgehog | "Ari" | Short, ambiguous origin, androgynous (fits non-binary identity; pan-cultural-feeling, no species-coding) |
| Zhan | leonid | "Zhan" | Short, possibly East Asian / invented (fits trans-male identity; pan-cultural-feeling, no species-coding) |

**Naming guidelines for Phase 6 cast expansion:**

- **Names are loose** — pull from any naming tradition, language, or invented word that fits the villager's identity. No rigid per-species rule.
- **Avoid one-to-one species-name-pattern coding** — don't make all halflings have food names (Sprinkles is descriptive-food-cute, but halflings broadly don't have to be). Don't make all leonids have East-Asian-sounding names. Etc.
- **Match name to character** — name should fit the villager's personality, vibe, and arc more than their species. The wisp is *nameless*; the cat is *player-named*; the 4 slice villagers each got names that fit their specific characters.
- **Honor location names too** — Sterling places (Town Center, Elder's Abode, Sprinkles's Bakery, Apothecary, Carv, tree hollow, Francois's, Shimmering Halls, Festival Valley, Cafe, Clinic, Dock/Boathouse, Animal Sanctuary) follow a similar pan-cultural mixed naming convention. No rigid place-naming rule.

[Design note: at Phase 6 villager bio authoring, Daniel may surface specific personal-heritage-coded names for individual villagers if doing so serves the character (e.g., a Phase 6 villager who deeply honors their species heritage may have a name from that heritage's naming tradition). This is per-character choice, not a §6.3 rule expansion.]

---

## 7. Cross-cultural elements

> With Option D pan-Sterling culture locked (§6), "cross-cultural" reads as "cross-cutting world elements" — aspects of Sterling that apply across all villagers regardless of species heritage. v0.1 sketches the frameworks; Phase 6 content authoring lands specifics.

### 7.1 Trade / economy

**Sterling is completely self-sufficient. No outside trade.** Locked 2026-05-10. Sterling's economic life is entirely intra-village.

What Sterling has:
- **Francois's** (general store) — supplies, dry goods, sundries
- **Sprinkles's Amazing Bakery of Unimaginably delicious treats** — bread, pastries, prepared food
- **Apothecary** (Ari) — remedies, potions, poultices
- **Carv** (Zhan) — furniture, building, wood-craft
- **Cafe** — social hub centered on food/drink
- **Clinic** — medical / healing services
- **Dock / Boathouse** — local fishing infrastructure (not a trade port; for Sterling residents' own fishing)
- **Shimmering Halls** — community gathering space; not a commercial venue
- Future cast-expansion villagers may add: farming/produce; hunting/forage; other vocational services per §4.4 magic taxonomy

All economic exchange happens between Sterling residents. There are no traders from outside the village; there are no imports; there is no "the next village over" to barter with. Per §1.1 mystery-of-world-beyond-Sterling, the outside simply does not reach Sterling economically.

[Design note: this self-sufficiency framing strengthens §1.1 mystery-as-design-principle — Sterling functions as a closed economic system; the world beyond doesn't need to be defined because Sterling doesn't depend on it. Cozy-genre comparables: Stardew technically has Joja Corporation as an outside entity, but Sterling more closely resembles Animal Crossing's island model (self-contained economy). Phase 6 + Phase 5 content authoring: any new villager introduced must be Sterling-native or long-immigrated; no "newcomer from the kingdom-up-the-coast" framing.]

### 7.2 Languages / writing / numerals

Sterling shares a **common tongue** — all villagers (regardless of species) speak the same primary language. Writing exists (shop signs, books, journals, letters, dialog rendered on-screen). Numerals are standard arithmetic counting (no exotic numeric system at v0.1).

Specific script samples, numerical conventions, alphabet samples, or in-world inscriptions are deferred to Phase 6 if relevant to specific scenes (e.g., a sign at Francois's, a recipe at Sprinkles's Bakery, a remedy label at Apothecary). v0.1 commits only to "Sterling has a common tongue and writes things down."

[Design note: per §1.1 + §3 minimal cosmology, no creation-myth for Sterling's language is committed; the language simply exists. Phase 6 may need ~5-10 specific phrases / written items for slice content; those land as Phase 6 NARR authoring.]

### 7.3 Animism / spirit-life conventions

Per §3.2: Sterling is non-deistic but animist. Spirits exist as ambient world-presence, not as a theological pantheon. The wisp itself is a spirit-of-unknown-origin. Talking animals exist (D-VISION-11 black cat; potential cast expansion). Hedge spirits, place-spirits, household spirits may exist as ambient presences in §6.2 species-heritage threads or as future Phase 6 content authoring.

Cross-references: §3.2 pantheon framing (non-deistic), §4.4 cultural/vocational magic taxonomy (alchemy/hedge-witching as one tier — Ari's archetype interfaces with spirit-life), §6.2 species heritage (per-villager personal animist practices possible).

### 7.4 Death and mourning

**Death is part of Sterling's reality but is NOT a gameplay mechanic.** Per cozy promise + locked anti-clauses (no permadeath; no death-as-punishment). Villagers do not die during play; mourning content references villagers' personal histories (deceased family members, past loved ones) rather than in-game death events.

**Sterling's mourning tradition** (locked 2026-05-10):

At **Samhain** (§5.3 cross-quarter festival), **every family that feels drawn may set up an altar in Town Center**. Altars are voluntary — no family is obligated to participate, and Sterling's culture does not judge participation either way. Altars carry photos, flowers, mementos, and personal tokens honoring those the family wishes to remember. The altar-setting is a personal-collective practice — each family's altar is personal; the gathering of altars in shared space is collective.

This tradition:
- **Pairs with Samhain's emotional register** (memory / reflection / gathering per §5.3)
- **Pairs with NARR-06 replay-as-revelation** thematically — the wisp can witness families' altars and, in NG+, can recall past Samhain altars from prior playthroughs ("last time, the carpenter brought a photo of his old workshop partner — different photos this year")
- **Honors cast representation principle** — altars can include partners of any gender, family structures of any composition, friendships honored as family-bonds; per cast representation principle (LGBTQ+ + disability + normalized representation across the cast)
- **Cozy-register preserved** — Samhain altars are reflective, not haunting; gentle, not scary. The villager experience is warm sadness + community + remembrance, not horror or supernatural-anxiety.

[Design note: specific altars, specific honored figures, specific village stories told at Samhain are Phase 6 content authoring. v0.1 establishes the framework: voluntary, personal-collective, Town Center venue, photos/flowers/mementos, NARR-06 + D-VISION-09 NG+ replayability dimensions. Per cozy promise + Pillar 2, Samhain altar content must NOT introduce trauma-coded backstories beyond what's gentle-cozy-bittersweet permitted.]

### 7.5 Romance / partnership conventions

Per D-VISION-07: **romance is between villagers, not player-villager.** The wisp does not romance any villager; the wisp catalyzes matchmaking *between* villagers via environmental manipulation (D-VISION-04 + D-VISION-13).

Per D-VISION-13 (locked 2026-05-10): **any villager can be matched with any other villager** (or with a rescued animal per D-VISION-11 — e.g., Cyrus × rescued pet post-slice). Quality of the match depends on per-pair compatibility; poor matches are telegraphed ("Hrm, are you sure? They don't really seem like a great fit because XYZ") but pursuable — non-altruistic playthroughs valid per D-VISION-14 bidirectional tonal arc.

Per cast representation principle (locked 2026-05-10): LGBTQ+ relationships are normalized across the cast. Same-gender pairings are treated equally to any other; backstory partners of any gender are mentioned without ceremony; no "coming-out arc" or political framing required. Anti-clauses: no preachy/political framing; no mature/sexual content.

**Beltane (§5.3) is the matchmaking-arc climax festival** — Sterling's annual rhythm of partnership / pairing-formation culminates at Beltane each year. Slice's Ari × Zhan first-kiss cliffhanger (per `09-slice-scenario-sketch.md`) plausibly lands at or just before Beltane depending on which season slice begins in.

Sterling's romance + partnership life:
- Marriages / committed partnerships happen between villagers as matchmaking arcs resolve
- Partners of any gender, any species heritage, any combination are equally treated by Sterling's culture
- Per §3 minimal pantheon, partnership formation has no theological framing — it's a personal/community celebration, not a religious sacrament
- Partnership longevity tracks village state — a partnership formed during low-compatibility playthrough may become unhappy or end per D-VISION-13; partnership in high-compatibility playthrough deepens with state-tagged dialogue depth per NPC-05

[Design note: specific partnership ceremonies, marriage scenes, breakup content (if a low-compat pair separates), and post-pairing relationship-state dialog are all Phase 6 content authoring. v0.1 establishes the framework; Phase 6 lands specifics. Per cast representation principle, all partnership content is authored with normalized LGBTQ+ presence.]

---

## 8. Open design questions (deferred to later phases)

> Items explicitly deferred from v0.1 World Bible authoring. Each entry includes where the resolution lives (which phase / plan / mechanism). Per HEALTH-01, if any of these is silently resolved without an explicit logging, that's drift — log to SCOPE.md.

**Deferred to Phase 1 → Phase 2 transition** (REQUIREMENTS.md amendment queue):
- HOME-01..05 + HOME-06 (faerie houses) — D-VISION-10 transmutation
- WORLD-01..02 — zone architecture clarification (Sterling layout)
- CRAFT-01..02, CRAFT-05 — wisp-catalyzes + wisp-as-courier reinterpretation
- COMP-01..04 — wisp-as-companion inversion
- NPC-05 (pre/post-spritesight state-tagged dialogue branching), NPC-06 (diverse non-human cast + optional discoverable companions), NPC-09 (gossip-as-match-info)
- NARR-01..06 — any-to-any matchmaking + telegraphed compatibility + bidirectional tonal arc
- AUDIO-01..02 — character-coded + seasonal architectural commitment
- SAVE-04 — event-log + multi-playthrough + spritesight state + cat name + village aesthetic state + tonal-state
- Possibly new REQ for spritesight (D-VISION-12)
- Combat anti-clause tightening (queued from plan 01-01)

**Deferred to Phase 3** (engine + save schema):
- Sprite movement spec (drift mechanics; collision; pathfinding; navmesh — leveraging D-TIME-04 continuous-NPC-pathing infrastructure)
- Cinematic camera (for Sterling reveal + NARR-06 replays + spritesight gift ceremony reveal + faerie house unlock scenes)
- SAVE-04 schema implementation per amendments queued above
- CTRL-01..08 (controls per slice scenario)
- UI-01..10 (accessibility surface)

**Deferred to Phase 4** (NARR / dialogue scripting):
- Per-villager dialogue authoring (slice 4 first; Phase 6 expands to 12-15)
- State-tagged dialogue lines per tonal-state register (per D-VISION-14 bidirectional tonal arc)
- Pre/post-spritesight dialogue state branching (per D-VISION-12)
- D-VISION-13 telegraphed compatibility warnings per matchmaking pair (slice has 4 telegraph lines; full game scales to 66 pair combinations × telegraphs)
- D-VISION-09 NG+ wisp-recall narration variants per archetypal trigger point
- Multi-day arc beat specifics (per D-TIME-05 deferred trigger class)
- Specific written items: Francois's signage, Sprinkles's recipe titles, Apothecary remedy labels, Carv project naming
- Wisp's narration voice + register conventions (anchored by Style Guide §Narrative voice)

**Deferred to Phase 5** (zones + assets pipeline):
- Per-zone atmospheric vibe (sensory detail, time-of-day shine, native magic flavor) — explicitly deferred at §2 v0.1
- Per-zone visual production (3D environment art per Style Guide §Visual direction)
- Tree hollow specific design (the wisp's first home physical detail)
- Animal Sanctuary content (post-slice unlock per D-VISION-11; visual + scene authoring)
- NPC schedule data per villager (D-TIME-04 continuous pathing infrastructure)

**Deferred to Phase 6** (slice content production + cast expansion):
- Faerie house designs (12-15 unique themed designs full game; 1 in slice)
- Village-as-canvas upgrade slots (~50+ shared-space upgrade slots × 2-4 alternatives = ~100-200 aesthetic variations full game; 2 slots in slice)
- Full villager cast expansion from 4 (slice) to 12-15 (full game)
- Specific cast assignments to existing zones with archetypes locked: Cafe owner (telekinesis); Clinic resident (healing); Dock/Boathouse resident (likely fishing); other cast-expansion slots (farming, mending, hunting, possible second-instance slice categories)
- Per-villager personal heritage thread specifics (§6.2 — informed by Wildflower + Azriel character references per `persona-zero-emergent-feedback.md` 2026-05-10)
- Per-villager birthday date + preferred gifts (§5.4)
- Per-festival specific scene content (Imbolc / Beltane / Lammas / Samhain — §5.3)
- Samhain altar specific content (§7.4) — voluntary family altars; specific villager honored figures
- Magic-tutoring minigame design per archetype (4 in slice — psychic / cooking / alchemy / construction; plus telekinesis / healing / mending / farming / fishing / hunting at Phase 6)
- Covert-guidance chain content per villager (e.g., the slice's fruit-ripening Sprinkles chain — Phase 6 lands chains for each of the 12-15 villagers)
- Cat arc content beyond slice (cat's full arc; magic-imbuement minigames; matchmaking with owner)
- Per-pair matchmaking outcome content (high-compat full meet-cute + happy arc; low-compat telegraph + attempt + unhappy outcome)

**Deferred to Phase 6 with character-design reference triggers** (per `persona-zero-emergent-feedback.md` 2026-05-10):
- Wildflower playthrough by Daniel before Phase 6 character authoring begins
- Azriel from ACOTAR reference applied to Zhan's character interiority (filtered through cozy promise per cast representation principle)

**Deferred to Phase 7** (vertical slice ship):
- Slice opening sequence — 30-second elevator demo arc implementation
- Cliffhanger "thanks for playing please wishlist" overlay at Ari × Zhan first kiss
- MKTG-05 capsule art commission brief authoring (Daniel-authored at Phase 8 per AI policy)
- MKTG-03 Steam Next Fest demo build

**Deferred to Phase 8** (Steam + marketing):
- Steam page short-text descriptions
- Trailer narration script (Daniel-authored per AI policy)
- Wow beat-name marketing-style refinement (Daniel-authored)

**Permanently mysterious** (deliberately undefined; not deferred to any phase):
- Wisp origins (§1.1)
- World beyond Sterling (§1.1)
- Sterling's age / founding history (§3.3)
- Sterling's cosmology beyond "the world IS" (§3.1)
- Whether other wisps exist anywhere (§3.3)
- Formal pantheon (§3.2)

**Future-trigger candidates** (may amend cosmology / scale via SCOPE.md if Daniel ever introduces):
- Grove-scale magic ("HUGE defining scripted event" per §4.5; not currently planned but possibility flagged)
- Sterling's wider-world connection (currently locked as "no outside trade" per §7.1; could amend via SCOPE.md if Phase 6+ design surfaces a need)

---

## 9. Glossary (in-world terms)

> Lightweight at v0.1 (per D-WORLD-01 v0.1 scope). Captures locked mechanic-terms + locked location names + locked character names + locked design-vocabulary terms. Expanded as Phase 4-6 content authoring progresses.

### 9.1 Mechanic terms (locked)

- **Spritesight** *(D-VISION-12, locked 2026-05-10)* — the gift bestowed by Cyrus that enables a villager to perceive the wisp. Pre-spritesight: villager observes-only; post-spritesight: direct dialog + magic-tutoring + matchmaking-eligibility opens.
- **Magic-tutoring activity** *(D-VISION-04, sharpened 2026-05-10)* — the moment-to-moment loop activity where the wisp catalyzes a villager's identity-magic mid-craft (cooking minigame, alchemy minigame, magical construction minigame, psychic minigame, etc.).
- **Matchmaking-via-environmental-manipulation** *(D-VISION-04 meta puzzle layer)* — the meta-loop layer where the wisp orchestrates villager pairings by manipulating environmental conditions.
- **Cascading thread** *(D-VISION-04 closure mechanic)* — the way village changes from one arc plant seeds for the next anchor type.
- **NG+ time-loop** *(D-VISION-09, locked 2026-05-10)* — the post-completion replayability mechanic where the wisp retains event-log knowledge across playthroughs; cap of 3 NG+ runs total.
- **Village-as-canvas** *(D-VISION-10 Layer 2, locked 2026-05-10)* — milestone-driven shared-space transformation with the wisp as chooser among 2-4 authored alternatives per upgrade slot.
- **Faerie house** *(D-VISION-10 Layer 3, locked 2026-05-10 from Dawn 2026-05-10 contribution)* — instanced themed space placed by a villager upon arc-completion as a gift to the wisp; 12-15 unique designs full game; serves as rest location alongside starting sanctum.
- **Few-trigger model** *(D-TIME-05, locked 2026-05-10)* — Sterling's pure action-driven time advancement mechanism; only rest at sanctum + festival participation advance time.
- **Replay-as-revelation** *(NARR-06 amendment 2026-05-10)* — the player picks a villager and watches a fast-forward replay of that villager's life since the wisp's arrival, slowing at critical choice junctures.
- **Any-to-any matchmaking with telegraphed compatibility** *(D-VISION-13, locked 2026-05-10)* — any villager can be matched with any other; quality-based outcomes; poor matches telegraphed but pursuable; non-altruistic playthroughs valid.
- **Bidirectional tonal arc** *(D-VISION-14, locked 2026-05-10)* — Sterling's emotional register evolves with player choices; default trajectory altruistic = early-strife → late-warmth; regression possible if non-altruistic choices made.
- **Starting sanctum** *(D-VISION-10 Layer 1)* — the wisp's default rest location pre-faerie-house unlock. In Sterling: tree hollow.

### 9.2 Location names (locked — see §2)

- Sterling, Town Center, The Elder's Abode, Sprinkles Amazing Bakery of Unimaginably delicious treats, Apothecary, Carv, tree hollow, Animal Sanctuary, Francois's, Shimmering Halls, Festival Valley, Dock / Boathouse, Cafe, Clinic.

### 9.3 Cast names (locked — see §2.X + Phase 6 expansion)

- The wisp (nameless, genderless, player avatar)
- Sprinkles (halfling F, cooking magic)
- Cyrus (ancient human M, psychic knowledge, blind seer)
- Ari (anthropomorphic hedgehog NB, alchemy / hedge-witching)
- Zhan (leonid trans-M, magical construction)
- The stray black cat (player-named; D-VISION-11 discoverable optional companion)
- Cafe owner: Phase 6 character; telekinesis archetype locked
- Other cast-expansion slots: ~7-10 future villagers; species + names + archetypes Phase 6

### 9.4 Calendar terms (locked — see §5)

- Seasons: **Ostara** (Spring), **Litha** (Summer), **Mabon** (Fall), **Yule** (Winter) — Wheel of the Year solar sabbats
- Cross-quarter festivals: **Imbolc** (Yule→Ostara), **Beltane** (Ostara→Litha; matchmaking-arc climax), **Lammas / Lughnasadh** (Litha→Mabon), **Samhain** (Mabon→Yule; family-altar mourning tradition)

### 9.5 Design-vocabulary terms

- **Cozy promise** (project-level commitment; CLAUDE.md hard guardrails) — Sterling commits to: no real-time pressure / no fail states / no missable windows / no required combat / no skill-tree progression / no mid-game-introduction of untaught mechanics / telegraphed-not-hidden / consequence-not-punishment / world-reflects-not-judges.
- **Identity-coupled magic** (§4.1) — the rubric that each villager's magic manifests through their identity (vocation most commonly, but not always — Cyrus is non-vocational).
- **Sanderson's First Law of Magics** (§4.2) — soft-magic discipline rule: codify what magic CAN'T do; magic is gift, not deus-ex-machina.
- **Pillar 1 / Pillar 2 / Pillar 3** — the three locked design pillars (Character Development / Never Punishing / Approachability). See `02-pillars-of-play.md`.
- **D-VISION-XX / D-WORLD-XX / D-STYLE-XX / D-TIME-XX / D-SUST-XX / D-MKTG-XX / D-WALL-XX / D-SCOPE-XX** — locked decision IDs cross-referenced throughout this bible. Resolve to `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` entries.

[Design note: glossary will expand as Phase 4-6 content authoring lands specific in-world terms (festival ritual names; specific magical techniques; specific items; in-world phrases). Per AI policy, Daniel-authored.]

---

## Daniel signature

**World Bible v0.1 signed by:** Daniel Hicks
**Date:** 2026-05-10
**v0.1 scope:** 9 TOC sections at DEEP scope per D-WORLD-01; 13 named zones + 3-4 cast-expansion slots; full magic system codification with 10-category taxonomy + Sanderson First Law; minimal cosmology per §1.1 mystery-as-design-principle (enthusiastically approved by Dawn 2026-05-10); pan-Sterling baseline culture (Option D) + species-heritage acknowledgment; Wheel of the Year season + festival framework; Sterling self-sufficient (no outside trade); Samhain family-altar mourning tradition; D-VISION-14 bidirectional tonal arc locked during §1 authoring; 9 architectural locks during plan 01-05 cumulative (D-VISION-12 through D-VISION-14 + supporting commits).

**Daniel signature:** 2026-05-10 — World Bible v0.1 locked at DEEP scope per D-WORLD-01; v1.0 expansion at Phase 5+ zone authoring + Phase 6 character authoring per deferred-items list (§8).

---

## Cross-references

- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — D-VISION-01..14, D-WORLD-01..06, D-TIME-01..05, D-SUST-01..08, all locked decisions
- `.planning/SCOPE.md` rows 1-14 — all architectural commitments + amendments
- `01-vision-pitch.md` — slice premise anchor
- `02-pillars-of-play.md` — 3 pillars (Character Development / Never Punishing / Approachability)
- `03-core-fantasy.md` — persona-zero anchored fantasy
- `04-anti-positioning.md` — cozy-genre positioning
- `05-core-loops.md` — moment + session + meta loops; few-trigger model; meta-loop anchor catalog including animal rescue per D-VISION-11
- `06-player-journey.md` — 5-horizon journey (first 5 min / first hour / hour 10 / hour 100 / hour 500)
- `07-pillar-mechanic-matrix.md` — REQ-IDs scored against pillars; all 8 weak signals resolved
- `08-failure-mode-analysis.md` — per-pillar bounce signatures + cross-pillar tensions
- `09-slice-scenario-sketch.md` — 16-scene first-hour walkthrough + cliffhanger
- `10-wow-beats.md` — 10 trailer-screenshot moments
- `11-elevator-demo-30s.md` — 30-second public demo arc
- `13-mood-reference-deck.md` (next deliverable in plan 01-05) — Daniel + Dawn curated visual references
- `14-style-guide-v0.1.md` (next deliverable in plan 01-05) — visual + audio + narrative voice + UI tone
- `.planning/persona-zero-emergent-feedback.md` — Dawn-sourced design contributions (9 entries 2026-05-10)
- `.planning/REQUIREMENTS.md` — REQ-IDs (cumulative Phase 1→2 transition amendment queue documented in §8 deferred-items list)
- `CLAUDE.md` cozy promise hard guardrails — overrides bible content where conflict surfaces
- `PHILOSOPHY.md` §V AI Use Policy — refusal list anchors all creative content as Daniel-authored


## Cross-references

*(Claude populates once draft lands.)*
