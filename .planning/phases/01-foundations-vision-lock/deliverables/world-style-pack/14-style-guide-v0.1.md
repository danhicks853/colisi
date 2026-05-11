---
deliverable: 14
pack: world-style
title: Colisi Style Guide v0.1
author: Daniel
ai_role: structure-only
depends_on:
  - 12-world-bible-v0.1.md
  - 13-mood-reference-deck.md
decisions_referenced:
  - D-SCOPE-14
  - D-STYLE-01
  - D-STYLE-02
  - D-STYLE-03
  - D-STYLE-04
  - D-STYLE-05
  - D-STYLE-06
  - D-STYLE-07
  - D-VISION-08
downstream_consumers:
  - Phase 3 UI/UX implementation (UI tone principles inform first UI work)
  - Phase 3 / 6 placeholder asset selection (visual direction informs CC0 pack choice)
  - Phase 6 character art commissions / authoring (visual direction informs hero NPC art)
  - Phase 6 audio direction (sourcing CC0 SFX + music selection)
  - Phase 4 / 6 dialogue authoring (narrative voice bible governs every line)
  - 28-greenlight.md (Daniel signs visual / audio / voice direction lock at greenlight)
  - Style Guide v0.2 + (Phase 6 / 9 amendments)
---

> **AI POLICY (PHILOSOPHY.md §V):** Daniel authors **all** content in this file — every palette swatch, every silhouette principle, every audio exemplar, every voice sample, every UI ornament direction. Claude provides ONLY the section structure below and refuses to:
> - Generate palette colors or palette swatches
> - Suggest character silhouettes or proportion rules
> - Generate environment style frames or composition direction
> - Suggest UI typography / iconography / motion principles
> - Generate audio exemplars or sonic palette descriptions
> - Generate voice samples, sentence-shape examples, or tone exemplar prose
> - Generate forbidden-language lists for the voice bible
>
> Claude critiques drafts when Daniel requests.

# Colisi Style Guide v0.1

> Per `D-SCOPE-14` + `D-STYLE-01..07`: Full v0.1 across visual / audio / narrative voice / UI tone. Per `D-STYLE-07`: depth defaulted to Full per studio-orthodoxy directive — Daniel can trim during execution if specific sections turn out to be over-engineered.
>
> Per `D-STYLE-03`: visual direction synthesis is **Daniel's call** because there is a real tension between Sandara Tang's soft-painterly-illustration and Hades' bold-graphic-ink-line. Reconciling these is creative work; Claude does not synthesize.

---

## 0. Document conventions

- **Status conventions:** `LOCKED Phase 1` (don't re-litigate without `SCOPE.md` entry); `OPEN` (Daniel resolves during this doc); `DEFERRED to Phase X` (named phase resolves)
- **Amendment process:** Style Guide v0.1 is the version-floor. Subsequent versions (v0.2, etc.) are amended in later phases with a `SCOPE.md` entry; v0.1 is preserved.

---

## Visual direction (per D-STYLE-01..03)

> Per `D-STYLE-03`: Daniel synthesizes the tension between Sandara Tang (soft-painterly-illustration) and Hades (bold-graphic-ink-line). Leading hypothesis from Dawn's specific reactions in `01-CONTEXT.md` `<specifics>`: cell-shaded painterly stylized 3D, character-art bold-line bias for NPCs (Hades-leaning), environment painterly with brushstroke flourishes (Okami-leaning), thematic warmth via Ghibli sensibility, soft-illustration-painterly accents per Sandara Tang. **Daniel synthesizes; Claude does NOT generate visual content or palettes.**

### Named direction (D-STYLE-03 synthesis)

Per Daniel's reactions to the 7 anchor references in `13-mood-reference-deck.md` (curated 2026-05-10), the visual direction synthesis is:

**"Cozy painterly cel-shading"** *(working name; Daniel may refine at v0.2)*

Sterling renders as **painterly brushstroke environments** (Okami / Sandara Tang anchor — Daniel's reaction: *"VERY close to the aesthetic I want to see in Colisi"*) with **anime-proportion bold-stylized human characters** (Hades / Jen Zee anchor — *"anime-leaning proportions with distinct stylized character concepts"*) and **Ghibli-style anthropomorphic non-human characters** (Studio Ghibli anchor — *"the stylization of how anthropomorphic animals are styled is close to my vision"*), all rendered with **cel-shading technique** (Borderlands anchor — *"cel-shading technique only, not the broader Borderlands aesthetic"*) at a **cozy / intimate / calm** tonal register (Sandara Tang anchor — *"brushstrokes almost seem alive, invoked calm, eastern themes, very painterly without being too abstract"*).

This synthesis resolves the D-STYLE-03 tension between Sandara Tang's soft-painterly-illustration and Hades' bold-graphic-ink-line: **environments are Sandara/Okami-leaning (painterly brushstroke); characters are Hades-leaning (bold-graphic stylized).** The two schools coexist by layer rather than fighting on the same surface.

[Design note: specific palette swatches, silhouette rules, environment composition reference frames, and UI typography choices are Daniel-authored per AI policy. v0.1 commits to the named direction above; Phase 5 visual production lands palette / silhouette / composition specifics; Phase 3 UI work consumes UI typography direction. v0.1 named direction is locked; v0.2 may refine the working name.]

### Color palette principles + hero palettes

*Per `D-STYLE-01`: principles first (palette logic), then 1–2 specific hero palettes (5–7 swatches each).*

**Palette principles (derivable from Mood Deck synthesis + cozy register):**

- **Warm-skewing baseline.** Painterly brushstroke environments (Okami / Tang anchor) tend warm earth tones; cozy register (per CLAUDE.md cozy promise) reinforces. Cool palettes appear by intent (rain scenes, winter Yule, contemplative Samhain) but warmth is the baseline.
- **Saturation modulated by tonal state (D-VISION-14).** Early-game terse/sleepy/strife state = lower saturation, cooler temperature; late-game warmth/coalition/cooperation state = higher saturation, warmer temperature. Seasonal arrangement (per AUDIO architectural commitment 2026-05-10) extends to visual palette: Yule (cool muted) / Ostara (gentle warm) / Litha (high saturation warm) / Mabon (warm earth-tones at peak).
- **Magic effects use single complementary spike.** Wisp catalysis effects (e.g., fruit-ripening glow, magic-tutoring minigame feedback) use a single saturated complementary color against environment palette. Visual identity: magic is *highlight*, not background.
- **Per-villager identity-magic palette signatures** (per §4.6 of World Bible). Each villager's magic has a distinct visual color/feel reflecting their identity:
  - Sprinkles (cooking; cute fireworks) — warm bright (gold + pink + cream territory)
  - Cyrus (psychic; non-visible; sound of rushing wind) — no visible color signature; conveyed by audio + UI subtle pulse
  - Ari (alchemy; swirls and swoops) — cool-purples / greens with internal movement
  - Zhan (magical construction; deliberate not-flashy) — earth warm-browns + soft amber
  - (Future cast palette signatures Phase 6)

**Hero palettes:** *[Specific 5-7 swatch color values per palette deferred to Phase 5 visual production. Daniel-authored at that stage per AI policy. v0.1 commits to the principles above; Phase 5 lands palette values.]*

### Character silhouette / proportion principles

Per the named direction (anime-proportion bold-stylized human characters; Ghibli-style anthropomorphic non-human characters):

- **Human characters:** anime-leaning proportions (heads slightly oversized for expressiveness; eyes large and expressive); bold-graphic-ink-linework for silhouette clarity; flat-but-shaded color rather than realistic rendering.
- **Anthropomorphic characters:** Ghibli-style — recognizable species characteristics retained (Ari is identifiably hedgehog; Zhan is identifiably leonid; future cast members retain species clarity) while still anime-proportion-friendly and stylized for warmth.
- **Silhouette reads at distance.** Every villager's silhouette is distinct enough that the player can identify them from across Sterling's village center without needing to see facial detail. Per Hades anchor (Jen Zee character work).
- **Cozy-register restraint.** No grotesque proportions; no menacing designs; no body-horror anthropomorphic stylings. The cozy promise applies to character design as much as to mechanics.
- **Disability + identity representation visually preserved.** Cyrus's blindness is visually conveyed (eyes that don't fix on the wisp; possibly walking stick / cane; head-tilt when listening). Trans/non-binary identity does not require visual coding (Zhan and Ari are not visually "marked" as trans/non-binary; their identities are present without iconography). Per cast representation principle (locked 2026-05-10).

*[Specific proportion ratios, silhouette test sketches, and character-design grids are Phase 6 character art authoring per Wildflower + Azriel reference workflow per `persona-zero-emergent-feedback.md` 2026-05-10.]*

### Environment style frames (curated from Mood Deck)

*3-4 reference compositions Daniel curates — per the Mood Deck anchors:*

1. **Okami's brushstroke environments** — primary reference for Sterling's outdoor zones (Town Center, Festival Valley, foothills around tree hollow + animal sanctuary path)
2. **Sandara Tang's druid + leaf-fawn calm** — primary reference for Sterling's intimate moments (tree hollow interior, faerie house interiors, contemplative scenes)
3. **Cozy Companion magazine's broader aesthetic** — corroborates Tang reaction; reference for general Sterling cozy register
4. **Ghibli interior warmth** (specifically Spirited Away's bathhouse / Howl's Moving Castle interior reference) — reference for villager interiors (Bakery, Apothecary, Carv, Shimmering Halls, Cafe, Clinic, Elder's Abode)

[Design note: specific reference images for each composition frame are curated in `13-mood-reference-deck.md`. Phase 5 zone authoring + Phase 6 art production land specific environment compositions referencing these frames.]

### UI visual direction

Per cozy register (Pillar 3 approachability) + accessibility commitments (UI-01..10):

- **Typography:** humanist + warm-feeling typeface for body text; secondary typeface for headings/labels can be slightly more decorative (calligraphic? hand-drawn-feel?) without sacrificing legibility. Specific typeface choices Daniel-authored at Phase 3 UI implementation.
- **Iconography:** soft-shape (rounded corners; no sharp angles); cozy-register (e.g., bread icon for cooking minigames could be illustrated with brushstroke feel matching Okami/Tang aesthetic).
- **Ornament:** sparse — UI elements use whitespace generously; no heavy framing or ornamentation crowding the screen.
- **Cozy-genre comparable UI:** Stardew's UI is functional-not-decorated; AC's UI is rounded-warm. Colisi leans closer to AC's tactile-warm direction with restraint matching Disco Elysium's quieter UI moments.

*[Full UI mockups / wireframes / specific typography selections / icon library are Phase 3 UI implementation per D-STYLE-06. v0.1 commits to direction above; Phase 3 lands specifics.]*

---

## Audio direction (per D-STYLE-04)

> Per `D-STYLE-04`: full v0.1 spec. Daniel curates exemplars from existing games / films / albums — **never AI-generated music as reference**. Per `PHILOSOPHY.md` §III: AI-generated music is forbidden in shipped product *and* as reference (training-data ethical concerns apply equally). Daniel sources human-made exemplars only.

### Music — genre + instrumentation principles

Per AUDIO architectural commitment (locked 2026-05-10 per Dawn audit feedback + Daniel approval; SCOPE.md row 13):

- **Character-coded leitmotifs** — each of the 12-15 villagers has a signature leitmotif. Slice cast leitmotifs (Sprinkles cooking + warm; Cyrus psychic + wind-like; Ari alchemy + eccentric; Zhan construction + deliberate) authored in Phase 6.
- **Seasonal arrangements** — each leitmotif has 4 seasonal arrangements (Ostara / Litha / Mabon / Yule); ambient music shifts with season; per Dawn's Stardew-seasonal-audio reference.
- **Genre direction:** cozy / folk-adjacent / non-confrontational; specific genre Daniel-authored at Phase 6 (could lean orchestral-light, folk-acoustic, atmospheric-minimal, or hybrid — per composer / DAW choice).
- **Instrumentation principles:** acoustic-leaning baseline (string instruments, soft woodwinds, gentle percussion); minimal electronic; per cozy register. Specific instrument choices Daniel-authored at Phase 6 / composer-hire decision.

### Music — exemplars

*[Daniel curates exemplars at Phase 6 / Music production decision. Per AI policy, Claude does not propose works. v0.1 commits to the principles above; specific exemplar tracks deferred to Phase 6 + composer-hire decision per `STACK.md` audio production decision.]*

### Ambient soundscape principles per zone

Per WORLD-01 zone architecture + AUDIO architectural commitment per-character/place SFX:

- **Sterling Town Center** — village ambience (distant villager voices, gentle footsteps on stone, breeze, distant ocean-or-mountain echo per geographic boundary, occasional shop-bell)
- **The Elder's Abode** — quiet interior; clock or hearth sound; rare creaking; Cyrus's character-coded leitmotif fragments
- **Sprinkles's Bakery** — warm interior ambient (kneading sounds, oven gentle roar, occasional bell-chime, Sprinkles's leitmotif fragments)
- **Apothecary** — quiet interior; soft simmer / bubble sounds from brewing; Ari's leitmotif fragments
- **Carv** — quiet interior; wood-shaping sounds (gentle plane / chisel / sand); Zhan's leitmotif fragments
- **Shimmering Halls** — communal interior ambient (gentle gathering hum during events; soft echo when empty)
- **Festival Valley** — outdoor open space; bird calls; wind-through-grass; festival ambient when active
- **Cafe** — interior food-drink ambient (cup clinks, soft conversation, future Cafe owner's leitmotif fragments)
- **Clinic** — quiet interior; calm-medical-soothing ambient
- **Francois's** — interior trade ambient (bell on door, shelf rustles)
- **Dock / Boathouse** — coastal ambient (waves, distant gulls, wood creaking)
- **tree hollow** — intimate natural ambient (rustling leaves, distant village echo, wisp's own subtle ambient hum)
- **Animal Sanctuary (post-slice unlock)** — animal sounds (gentle, not chaotic); foothills wind; pet leitmotifs (cat's named-by-player gets a signature)

### SFX tone principles

- **No hard percussion in any UI sound.** All UI interaction SFX use soft-attack envelopes (no click-snap; instead, gentle chime / pad / brush).
- **Magic-tutoring minigame SFX use the wisp's identity-sound** — gentle chime / pulse / whoosh; no harsh or alarm-coded sounds.
- **Confirmation SFX are warm + brief** — never elongated, never tense.
- **Negative-feedback SFX (e.g., missed cloud rings in tutorial)** are GENTLE per Pillar 2 first-5-min anchor — soft-warning chime, not failure-buzz.
- **Footsteps / movement SFX** per surface type (stone in Town Center; wood in interiors; grass in Festival Valley; dirt path to Animal Sanctuary); per character-coded SFX (Cyrus's footsteps slightly different from villagers' due to age/cane-if-present).
- **Per-character/place/activity signature SFX** — per AUDIO architectural commitment 2026-05-10: each villager has signature interaction sounds, each location has signature ambient bed.

### Voice / dialogue audio policy

- **Text-only at v1** (per STACK.md). No voice acting at v1; voice acting is v2-or-never per budget.
- **Reading speed assumption:** ~150-180 wpm for dialog text auto-advance; player override always available (per UI-05 pause-anytime + UI accessibility commitments).
- **Audio stingers for dialogue beats:** gentle chime when new dialog appears; soft brush-stroke sound when player makes a choice; per-character signature stinger if the character has spritesight (Cyrus's wind-like; Sprinkles's bright; Ari's swirling; Zhan's deliberate).
- **Localization-readiness:** all text routed through `tr()` per UI-08; reading-speed assumption holds across translated text.

---

## Narrative voice bible (per D-STYLE-05)

> Per `D-STYLE-05`: full v0.1 voice bible. POV rules, register, sentence-shape tendencies, tone references, forbidden language, narrator presence policy. **Daniel authors fully per AI policy; Claude critiques drafts only.** Voice samples and sentence-shape examples are off the table for Claude (per `01-RESEARCH.md` Anti-Patterns section: *"Don't write voice-bible content; only structure it. A voice bible without Daniel-authored sentence-shape examples is empty; refuse to fill those examples."*).

### POV rules (framework — Daniel-authored samples at Phase 4)

Per D-VISION-01 (wisp as player avatar) + D-VISION-08 (Daniel authors all in-world dialogue/voice content):

- **Second-person addressed to the wisp** for in-world narration when the wisp observes / drifts / acts. Example POV framing template: *"You drift past the bakery; Sprinkles is humming."* (Claude does NOT author specific sentences; this is framework only.)
- **Villager dialogue is first-person from the speaker** (post-spritesight per D-VISION-12). Pre-spritesight villager content is observational only — wisp narrates what it sees, villagers don't speak directly to the wisp.
- **Cyrus is the exception** — sighted from start; his dialogue is first-person from the slice's first contact onward.
- **The wisp's "inner voice"** (when narrating its own observations, considerations, choices) speaks in a way that respects D-VISION-01 (the wisp is nameless, genderless; uses no self-name; first-person-singular when reflecting; second-person when addressing the player as the wisp).
- **No omniscient narrator** above the wisp's perspective. The wisp's perception is the player's perception.

*[Specific POV sentence-shape samples are Daniel-authored at Phase 4 NARR scripting per AI policy. Wildflower + Azriel reference triggers fire at Phase 6 character authoring per `persona-zero-emergent-feedback.md` 2026-05-10.]*

### Register

Per cozy register + cast representation principle + species-heritage acknowledgment:

- **Sterling baseline:** warm, conversational, casual — *not* formal, *not* archaic. Modern-feeling without anachronistic slang.
- **Per-character voice variation:** each villager has a distinctive register reflecting their identity (per §6 cultural framing + per their personality traits):
  - Sprinkles — bright, exuberant, possibly slightly verbose (her bakery name is itself a register example)
  - Cyrus — measured, gravitas, slightly archaic-leaning (ancient elder; uses older turns of phrase without going full archaic)
  - Ari — terse, eccentric, occasionally cryptic; warmer with people she knows well
  - Zhan — quiet, demure, careful word choice; Azriel-character-reference applies at Phase 6 (filtered through cozy promise per `persona-zero-emergent-feedback.md` 2026-05-10)
- **Wisp's internal narration:** observational, attentive, slightly curious; never sarcastic, never aggressive, never condescending. The wisp is *present* with the world, not *commenting on* it from outside.

*[Specific register samples per character are Daniel-authored at Phase 4 dialog scripting + Phase 6 character bio expansion.]*

### Sentence-shape tendencies

Per Disco Elysium voice-bible patterns (referenced in `01-RESEARCH.md`) + cozy register:

- **Short observational sentences for the wisp's drifting narration.** The wisp notices things — short, present-tense, sensory.
- **Medium-length character dialogue** — villagers speak in conversational chunks, not monologues. Most dialog turns are 1-3 sentences.
- **Longer lyrical passages for emotional beats** — first kiss approach, faerie house unlock, replay-as-revelation viewing, Samhain altar moments. These warrant 3-5 sentence lyrical passages.
- **NEVER walls of text.** Cozy register + Pillar 3 approachability + reading-speed accommodation (UI-05 pause anytime; reading-speed assumption per Audio Direction §Voice / dialogue audio policy).

*[Specific sentence-shape examples for each register and each character are Daniel-authored at Phase 4 NARR scripting per AI policy + Pitfall 1 voice-bible discipline.]*

### Period / tone references

References Daniel curates for the voice — *these are reference works only, not content to copy*:

- **Inkle's "variables not branches"** (Inkle's narrative design philosophy per `PHILOSOPHY.md` §I.4) — state-tagged dialogue depth over branching tree explosion. Reinforces D-VISION-13 + NPC-05.
- **Disco Elysium** — slice-of-life observational voice; per-character distinct register; thought-cabinet inner-narration patterns. Per `01-RESEARCH.md` Pattern 6 reference.
- **Studio Ghibli films** — emotional warmth + everyday-magic + character-driven environmental love (per Mood Deck Ghibli anchor; refines to thematic + anthropomorphic-styling).
- **Stardew Valley** — cozy-village dialog patterns; villager bark conventions (short observational lines from villagers in passing); per persona-zero comfort-anchor.
- **Daniel's own writing practice** — narrative writing for state-tagged dialogue per Capability Gap Matrix row +2 target.

*[Additional period/tone references Daniel adds as Wildflower + ACOTAR/Azriel + other character-design reading lands at Phase 6 per `persona-zero-emergent-feedback.md` 2026-05-10.]*

### Forbidden language

Per cozy register + cast representation principle + cozy-promise anti-clauses:

- **NO modern slang / texting abbreviations.** Sterling characters do not speak in "OMG / IDK / TBH / etc." Even Sprinkles's playful register stays away from modern abbreviated speech.
- **NO trauma-coded / heavy backstory dialog.** Per cast representation principle (no mature themes anti-clause). Bittersweet is OK; trauma-narrative is OUT.
- **NO horror / scary / threat-coded language.** Per Pillar 2 + Samhain anti-clause (reflective not haunting); per cozy promise. Even when characters express sadness or concern, register stays gentle.
- **NO combat / weapon vocabulary.** Per combat anti-clause locked 2026-05-10 ("interactive player combat mechanics of any kind, ever"). Characters do not threaten, do not duel, do not menace.
- **NO punishment-coded language directed at the player.** Villagers do not say "you failed me" or "you ruined this." Per Pillar 2 + D-VISION-13 telegraphed-not-judgmental. Bad-matchmaking outcomes use neutral observational register ("they don't seem happy" / "things didn't go the way I'd hoped"), not blame.
- **NO political / preachy framing on identity.** Per cast representation principle "without brow-beating" anti-clause. LGBTQ+ relationships exist as a natural part of village life; villagers do not deliver speeches about acceptance, do not narrate political stances.
- **NO sexual content / mature themes.** Per cast representation principle. Even Beltane (matchmaking-arc climax festival) stays at flowers-and-dancing register, not sensual content.
- **NO god-language / religious-direct dialogue.** Per §3.2 non-deistic. Characters don't pray, don't reference deities, don't have religious framings of their experiences.

### Narrator presence policy

Per D-VISION-01 + the slice scenario's wisp narration pattern:

- **The wisp's perspective IS the narrator.** When the wisp drifts, the player sees what the wisp notices. The wisp's "inner voice" narrates observations + considerations.
- **The narrator is the wisp's voice, not an omniscient one.** When the wisp doesn't perceive something, the player doesn't see it. Pre-spritesight villagers' inner thoughts are not narrated.
- **The wisp comments on the world but not on the player.** The wisp may notice "Sprinkles seems particularly bright today" but does not say "you should give Sprinkles a flower because that would make her happy." Player agency preserved.
- **The wisp's voice carries the tonal arc (D-VISION-14).** In a high-warmth/cooperation playthrough, the wisp's narration is more openly delighted. In a cooler/strife-state playthrough, the wisp's narration is more observational/distant. Per state-tagged narration per NPC-05 amendment queue.
- **In NG+ runs (D-VISION-09), the wisp's voice carries memory.** The wisp may say "this reminds me of last time..." at archetypal trigger points. Per ~20-50 archetypal recall trigger points per playthrough.

*[Specific narration samples are Daniel-authored at Phase 4 NARR scripting per AI policy.]*

---

## UI tone principles (per D-STYLE-06; full mockups Phase 3)

> Per `D-STYLE-06`: principles only at Phase 1; full UI mockups / wireframes are Phase 3 via `/gsd:ui-phase` workflow. The principles below constrain Phase 3 work without prescribing it.

### Typography family direction

Per cozy register + accessibility commitments (UI-01 text scale; UI-02 colorblind-friendly):

- **Body text:** humanist sans-serif or warm humanist serif — open apertures (high legibility); slightly warm/organic feeling. *Specific typeface selection Daniel-authored at Phase 3 UI implementation.*
- **Headings / labels:** secondary typeface may be slightly more decorative (calligraphic-leaning or hand-drawn-feel) but must remain legible at all UI sizes. *Specific selection Phase 3.*
- **Accessibility:** all typography scales to 150%+ per UI-01; sufficient line-height for comfortable reading; serif and sans-serif options if Daniel wants player choice.

### Ornament / iconography principles

- **Soft-shape iconography** — rounded corners; no sharp angles; cozy-register-fitting illustrations
- **Brushstroke-feel for magic-related icons** (per Mood Deck Okami / Tang anchor) — magic-tutoring minigame icons, spritesight gift indicators, etc.
- **Restraint** — UI ornaments are sparse; not heavily-framed; whitespace generous
- **Per-character iconography** (where applicable) — Cyrus's icons may have a gentle wind motif; Sprinkles's may have warmth motifs; Ari's may have swirl motifs; Zhan's may have wood-grain motifs. Reinforces character-coded leitmotif strategy at visual layer.

### Density / whitespace tendency

- **Generous whitespace baseline** — UI panels never feel crowded; cozy register reinforced by visual breath
- **Max ~5 elements per panel** as a soft rule — exceptions for inventory / matchmaking compatibility displays where more is needed
- **Layered surfacing** — complex information surfaces in layers (player can drill down) rather than dumping everything at once

### Animation / motion principles

- **Ease-in-out for state changes** — never abrupt; never bouncy; gentle transitions
- **Springy decel ONLY for matchmaking compatibility confirmations** — a single subtle spring at the moment-of-confirmation gives weight to player choice without violating cozy register
- **No flash / no rapid-pulse** — accessibility (epilepsy considerations) + cozy register
- **The wisp's drifting motion is the reference** — gentle, observant, slightly delayed — UI motion echoes the wisp's character
- **Per-tonal-state motion modulation** (D-VISION-14): in early-strife playthroughs, UI motion is slightly slower / more hesitant; in warm/coalition playthroughs, UI motion is more present and confident

---

## Re-litigation policy

**LOCKED Phase 1.** Style Guide v0.1 is the version-floor for the project. Phase 2+ may not re-open Style Guide v0.1 decisions without a `SCOPE.md` entry justifying displacement per the "buys-its-slot" rule (`PHILOSOPHY.md` §III). Amendments produce v0.2, v0.3, etc.; the v0.1 file is preserved as historical record.

---

## Daniel signature line

**Style Guide v0.1 ratified by:** Daniel Hicks
**Date:** 2026-05-10
**v0.1 state:** Full v0.1 depth across visual / audio / narrative voice / UI tone per D-STYLE-01..07. D-STYLE-03 visual direction synthesis resolved ("Cozy painterly cel-shading" — Okami/Tang painterly environments + Hades anime-proportion characters + Ghibli anthropomorphic styling + cel-shading technique, all at cozy/intimate/calm register). Narrative voice + UI tone derive procedurally from locked decisions + Mood Deck synthesis. Specific palette swatches / voice samples / typography selections / music exemplars / character art deferred to Phase 3-6 production per AI policy (those are creative content Daniel authors at production stage).
**Notes:** Working name "Cozy painterly cel-shading" may refine at v0.2 if Daniel coins a sharper phrase. Visual direction synthesis is locked; Phase 5 visual production lands specifics.

**Daniel signature:** 2026-05-10 — Style Guide v0.1 locked at Full v0.1 depth; v0.2+ amendments per SCOPE.md amendment process; Phase 4-6 production lands creative-content specifics.

---

## Cross-references

- `12-world-bible-v0.1.md` — visual / audio / voice direction must serve world setting
- `13-mood-reference-deck.md` — visual direction synthesis draws from this deck (per `D-STYLE-03`)
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-STYLE-01..07`, `D-VISION-08`
- `PHILOSOPHY.md` §V — AI Use Policy (full content authorship is Daniel's)
- `AI-DISCLOSURE.md` — public disclosure
- Phase 3 `/gsd:ui-phase` workflow — full UI mockups under these principles
- Style Guide v0.2 + (Phase 6 / 9 amendments tracked in `SCOPE.md`)
