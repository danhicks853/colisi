---
phase: 01-foundations-vision-lock
plan: 05
type: execute
wave: 3
depends_on:
  - 01-00-deliverable-scaffolding
  - 01-01-vision-pack
files_modified:
  - .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md
  - .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md
  - .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md
autonomous: false
requirements:
  - HEALTH-01

must_haves:
  truths:
    - "World Bible v0.1 covers all 9 TOC sections at DEEP scope per D-WORLD-01: 8 zones outlined, full pantheon/lore, magic system spec (soft + codified vibes per D-WORLD-02), Stardew-shape calendar with Colisi-flavored season names + festival framework (D-WORLD-03), every culture sketched, naming-system rules per culture"
    - "Magic system codification (§4) interprets 'tier list' as cultural/atmospheric tiers per D-WORLD-04 — NOT mechanical TTRPG-style power tiers; codifies what magic CAN'T do (Sanderson's First Law)"
    - "Mood/reference deck has zero AI-generated reference art — human-curated only (Daniel + Dawn) per D-STYLE-02 + AI policy"
    - "Style Guide v0.1 has Full v0.1 depth across all 4 sections (visual / audio / narrative voice / UI tone) per D-STYLE-01..07"
  artifacts:
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md"
      provides: "Daniel-authored DEEP-scope World Bible v0.1 — feeds Phase 4 hero NPC + Phase 5 zones + Phase 6 slice content"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md"
      provides: "Daniel + Dawn-curated reference deck (zero AI-generated content) — feeds Style Guide visual direction synthesis"
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md"
      provides: "Daniel-authored Style Guide v0.1 (visual + audio + narrative voice + UI tone) — gates art-source pipeline decisions Phase 2 + visual production Phase 5-6"
  key_links:
    - from: "12-world-bible-v0.1.md §6 cultures + naming rules"
      to: "Phase 6 slice content NPC names + Phase 5 zone names"
      via: "World Bible naming rules constrain Phase 6 NPC authoring"
      pattern: "naming.*system|naming-system rules"
    - from: "13-mood-reference-deck.md"
      to: "14-style-guide-v0.1.md visual direction"
      via: "Curated references inform visual direction synthesis (D-STYLE-03)"
      pattern: "Sandara Tang|Hades|Okami|Ghibli"
    - from: "14-style-guide-v0.1.md narrative voice section"
      to: "Phase 4 NPC dialogue authoring + Phase 6 state-tagged dialogue"
      via: "Voice bible constrains all Daniel-authored dialogue"
      pattern: "POV|register|sentence-shape"
---

<objective>
Daniel authors the World & Style Pack — three creative deliverables that establish the deepest non-code creative artifacts of Phase 1: the World Bible v0.1 at DEEP scope (per Daniel's mature-studio-orthodoxy directive), the human-curated mood/reference deck, and the Full v0.1 Style Guide across visual / audio / narrative voice / UI tone.

These three deliverables together set creative constraints on every subsequent phase: Phase 4 hero NPC needs naming-system rules + voice bible. Phase 5 zones need zone outlines + visual direction. Phase 6 slice content needs cultures + magic codification + festival framework + audio direction + voice samples (Daniel writes voice samples as part of style guide; Phase 6 follows them).

Purpose: Largest creative-content authoring load of Phase 1 (4-8 month estimate per CONTEXT.md). NOT to be rushed — Daniel's directive: time is not the constraint. This plan sets the structure; pace per D-SUST-01..08.

Output: 3 Daniel-authored World & Style Pack files.

**AI-policy boundary (CRITICAL — this plan is the highest AI-policy-violation risk in Phase 1 per `01-RESEARCH.md` Pitfall 1):** EVERY zone name, culture name, magic-tier name, season name, festival name, character / NPC / place / item name, dialogue line, voice sample, mood-board reference image, palette swatch is creative content Daniel authors. Claude REFUSES every request to draft these. Claude can: (a) verify TOC completeness against scaffold, (b) spot-check that sections reference D-WORLD / D-STYLE decision IDs, (c) verify Mood Deck has zero AI-generated content, (d) critique drafts when Daniel requests on (anchor consistency / soft-magic-codification discipline / no-AI-content compliance / visual-direction-tension resolution per D-STYLE-03). Claude does NOT generate names, lore, voice samples, palettes, or reference imagery.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/ROADMAP.md
@.planning/REQUIREMENTS.md
@.planning/phases/01-foundations-vision-lock/01-CONTEXT.md
@.planning/phases/01-foundations-vision-lock/01-RESEARCH.md
@.planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md
@.planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md
@.planning/research/PERSONA.md
@CLAUDE.md
@PHILOSOPHY.md
</context>

<tasks>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 1: Daniel authors World Bible v0.1 (D-SCOPE-12) at DEEP scope</name>
  <authored_by>daniel</authored_by>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md (scaffold from plan 01-00 — 9-section TOC at DEEP scope per D-WORLD-01),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/01-vision-pitch.md (premise anchor),
    .planning/phases/01-foundations-vision-lock/deliverables/vision-pack/02-pillars-of-play.md (pillars anchor cultural / magic-tone / calendar choices),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-WORLD-01..06 locked depth + tone + calendar + premise; specifics section for personal-magic archetypes hint),
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (Pattern 2 World Bible TOC at lines 366..427; Pitfall 1 AI-policy slippage warning on World Bible specifically; Don't Hand-Roll table on Sanderson First Law),
    .planning/research/PERSONA.md (persona-zero corpus — cultural / magical-realism / setting reactions),
    PHILOSOPHY.md (§V — re-confirm refusal list before authoring; this is the highest-risk creative-content task)
  </read_first>
  <action>
    **Daniel authors the World Bible v0.1 to fill all 9 TOC sections** (per scaffold from plan 01-00):

    **§0. Document conventions** — Daniel writes voice rules (in-world voice for descriptive sections; design notes in [brackets]); naming syntax cross-ref to §6; tone reminder (soft + codified per D-WORLD-02); v0.1 deferred items list.

    **§1. World setting overview** — Daniel writes premise (1 paragraph anchored on D-VISION-01..08), tone summary (1 paragraph), genre + influences (1 paragraph citing the curated references from CONTEXT.md `<specifics>` — Sandara Tang, Hades, Okami, Borderlands, Ghibli; CITATION not invention).

    **§2. Geography (8 zones at DEEP scope)** — Daniel names and outlines all 8 zones. Each zone: name, brief description (~1 paragraph), key locations within, NPCs found there at slice scale (cross-ref to slice scenario in plan 01-04). Zone-to-zone adjacency map (text or ASCII diagram).

    **§3. Cosmology / pantheon / lore** — Daniel writes cosmology (origin / structure / metaphysics; soft-magic-compliant per D-WORLD-02). Pantheon (decide if pantheon exists or magic is non-deistic). Major lore arcs (1-2 paragraphs each, broad strokes only at v0.1).

    **§4. Magic system (soft + codified)** — Daniel codifies per D-WORLD-02 + D-WORLD-04:
    - §4.1 What magic IS — atmospheric / vocational / latent in villagers (sprite catalyzes, doesn't grant — D-VISION-03)
    - §4.2 What magic CAN'T do — explicit constraints (Sanderson's First Law). The codified vibes. Examples: magic does not raise the dead, does not predict precise outcomes, does not bypass relationship-building, does not solve cozy-game problems via deus ex machina.
    - §4.3 Sprite's role — giver, never accumulator (D-VISION-03)
    - §4.4 Cultural / vocational tiers — Daniel authors final taxonomy. CONTEXT.md `<specifics>` hints (cooking magic, farming magic, hedge-witchery, sky-watching, mending magic, song-magic) but Daniel finalizes. Per D-WORLD-04: tiers are CULTURAL not mechanical (no TTRPG spell list).
    - §4.5 Atmospheric scale — kitchen magic vs grove magic vs world-magic (Daniel calibrates).
    - §4.6 Personal magic per villager — Daniel authors taxonomy (~10-15 archetypes).

    **§5. Calendar** — Per D-WORLD-03 (Stardew-style with Colisi-flavored season names):
    - §5.1 Year structure (4 seasons; ~28-day months)
    - §5.2 Season names in-world voice — Daniel authors the 4 season names (NOT just Spring/Summer/Fall/Winter; Daniel invents in-world flavor per D-WORLD-03).
    - §5.3 Annual festival framework — Daniel sketches festival types (categories, not specific festivals — those are Phase 6).

    **§6. Cultures (every culture sketched at v0.1)** — Daniel decides culture count and authors one section per culture: name, brief sketch, tone, distinctive practices. **§6.X Naming-system rules per culture** — Daniel writes naming rules so future NPC naming has constraints (e.g., "Culture A uses two-syllable names with soft consonants; Culture B uses occupation-anchored compound names").

    **§7. Cross-cultural elements** — Daniel writes:
    - §7.1 Trade / economy (broad strokes)
    - §7.2 Languages / writing / numerals
    - §7.3 Animism / spirit-life conventions (talking animals, spirits, hedge magic per `<specifics>` line 261-262)
    - §7.4 Death and afterlife conventions
    - §7.5 Romance / partnership conventions (between villagers, not player-villager per D-VISION-07)

    **§8. Open design questions for Phase 4-6 resolution** — Daniel lists deferred items (sprite home/sanctum, sprite movement, match-puzzle compatibility model, specific festivals, specific NPC content, HOME/CRAFT/COMP REQ interpretation amendments). The scaffold from plan 01-00 already lists these — Daniel confirms / refines.

    **§9. Glossary** — Daniel writes in-world glossary terms (lightweight at v0.1; expanded as content authoring progresses).

    **Discipline:**
    - Per `01-RESEARCH.md` Pitfall 1: Claude does not draft any prose, name, or in-world content here. The first in-world voice line Claude writes would be the violation. Refuse.
    - Per Pitfall 6 (scope creep on Phase 1 itself): Daniel keeps v0.1 at sketch depth — full content authoring continues across phases. Don't try to ship World Bible v1.0 here.
    - If hard-magic-tier interpretation conflicts with Daniel's design (D-WORLD-04 reconciliation question per `01-RESEARCH.md` Open Question 2): Daniel logs SCOPE.md entry + updates D-WORLD-04 wording in next CONTEXT.md amendment cycle. Don't silently drift.

    **Per AI policy:** Every name (zone, culture, season, magic archetype, deity, festival type), every lore paragraph, every cultural sketch, every naming-system rule is Daniel's. Claude refuses generation requests; Claude can critique on (a) all 9 TOC sections present and substantively populated, (b) D-WORLD-01..06 references throughout, (c) magic codification stays soft per D-WORLD-02 (no TTRPG-style mechanics).
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md" && grep -cE '^## [0-9]\. ' ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md"</automated>
  </verify>
  <acceptance_criteria>
    - All 9 top-level sections present: `grep -cE '^## [0-9]\. ' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns ≥9.
    - All 8 zones populated (no `{name TBD}` markers): `grep -F '{name TBD' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns 0.
    - Zone count maintained at 8: `grep -cE '^### Zone [1-8]' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns 8.
    - Magic system §4 has all 6 subsections (4.1-4.6): `grep -cE '^### 4\.[1-6] ' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns ≥6.
    - Calendar §5 has 4 season names authored (not placeholder): `grep -F '{Daniel authors' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns 0 in §5.2 area (manual check by Daniel — autotest cannot verify "season names are in-world flavor").
    - References D-WORLD decisions: `grep -cE 'D-WORLD-0[1-6]' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns ≥4.
    - References D-VISION decisions (premise anchor): `grep -cE 'D-VISION-0[1-8]' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns ≥1.
    - Sanderson's First Law / "what magic CAN'T do" codification present: `grep -ciE "(can.t do|cannot do|sanderson|first law)" .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns ≥2.
    - Substantive content (DEEP scope): `wc -w .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns ≥3000 words (DEEP scope means substantive — sketch v0.1 of all sections + deep magic + 8 zones + cultures).
    - No `{Daniel authors}` placeholders remaining anywhere in body: `grep -cF '{Daniel authors' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns 0.
    - AI-policy banner intact: `grep -F 'AI POLICY (PHILOSOPHY.md §V)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` returns ≥1.
  </acceptance_criteria>
  <done>World Bible v0.1 Daniel-authored at DEEP scope across all 9 TOC sections; 8 zones named; magic codified per soft + Sanderson First Law; cultures + naming-system rules established; feeds Phase 4-6 content authoring.</done>
</task>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 2: Daniel + Dawn curate Mood/Reference Deck (D-SCOPE-13) — zero AI-generated content</name>
  <authored_by>daniel</authored_by>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md (scaffold from plan 01-00 with anchor references already cited from CONTEXT.md `<specifics>`),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (`<specifics>` lines 250..256 — already-curated reference deck),
    PHILOSOPHY.md (§V refusal list — confirms zero AI-generated reference imagery, palettes, mood-board contributions),
    CLAUDE.md (load-bearing rule 1: Claude refuses every visual asset request, including reference art)
  </read_first>
  <action>
    **Daniel + Dawn extend the curated reference deck** beyond the CONTEXT.md anchor list. Per D-STYLE-02 — already-collected references:
    - Sandara Tang's druid + leaf-fawn (Cozy Companion magazine spread) — primary anchor
    - Sandara Tang broader work (kid fishing with mossy creature, sleeping moss-companions, blue-water-spirit kimono figure, dragons-with-sweets)
    - Cozy Companion magazine covers
    - Hades character art (Jen Zee / Supergiant)
    - Okami art style
    - Borderlands cel-shading
    - Studio Ghibli themes

    For each reference (anchor + new additions Daniel + Dawn curate over time):
    - **Source:** citation (artist name, work title, where to find it, year)
    - **Why curated:** Daniel writes 1-2 sentences (his/Dawn's specific reaction)
    - **License/attribution status:** Daniel verifies and records before any use beyond reference

    **Sections to populate:**
    1. **Reference deck rules** — already populated by scaffold. Daniel verifies and signs.
    2. **Anchor references** — populate Why curated + License/attribution fields for the 6-7 anchor references from CONTEXT.md.
    3. **Additional curation** — Daniel + Dawn add references over time (this section can grow across Phase 1 execution and beyond — it's a live deck).

    **Critical AI-policy compliance:**
    - **No AI-generated reference imagery.** Per PHILOSOPHY.md §V refusal list: no AI-generated visual asset, even as reference, even as placeholder, even if never shipped.
    - **No links to AI art generators** (Midjourney / DALL-E / Stable Diffusion / etc.) as reference sources.
    - **No "AI helped find this" notes** — reference discovery is human-curated.
    - **License/attribution must be tracked** for every reference (Daniel verifies CC0 / CC-BY / fair-use applicability before any internal mood-board reproduction).

    **Per AI policy:** Claude does NOT generate references. Claude does NOT search for reference imagery. Claude can: (a) verify the file lists only references already in CONTEXT.md or that Daniel has named, (b) verify each reference has Source + Why curated + License fields, (c) refuse any in-task request to "find more references" or "generate placeholder mood imagery."
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md"</automated>
  </verify>
  <acceptance_criteria>
    - File exists with all 3 sections (Reference deck rules / Anchor references / Additional curation): `grep -cE '^## (Reference deck rules|Anchor references|Additional curation)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md` returns 3.
    - Anchor references populated (CONTEXT.md citations preserved): `grep -cE '(Sandara Tang|Hades|Okami|Borderlands|Studio Ghibli|Cozy Companion)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md` returns ≥4.
    - Each anchor reference has Source / Why curated / License fields: `grep -cE '\*\*(Source|Why curated|License)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md` returns ≥18 (3 fields × 6 anchor refs minimum).
    - **AI-policy compliance — no AI-art-generator links:** `grep -ciE '(midjourney|dall-?e|stable diffusion|leonardo\.ai|civit\.ai|playground\.ai|adobe firefly)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md` returns 0.
    - **AI-policy compliance — no AI-generated content notes:** `grep -ciE '(AI-generated|generated by AI|AI helped|prompt: )' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md` returns 0 (the file may MENTION the AI policy itself in the rules section — that's not generation; manual confirmation needed).
    - Reference deck rules section affirms zero AI-generated content: `grep -ciE '(zero AI|no AI-generated|human-curated only|D-STYLE-02)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md` returns ≥1.
    - AI-policy banner intact: `grep -F 'AI POLICY (PHILOSOPHY.md §V)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md` returns ≥1.
    - Daniel signature line: `grep -F 'Daniel signature' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md` returns ≥1 (Daniel signs after curating his + Dawn's anchor reactions).
  </acceptance_criteria>
  <done>Mood/reference deck Daniel + Dawn curated; zero AI-generated content; license/attribution tracked per reference; deck is live and grows as Phase 1+ continues.</done>
</task>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 3: Daniel authors Style Guide v0.1 (D-SCOPE-14) — Full v0.1 across visual / audio / narrative voice / UI tone</name>
  <authored_by>daniel</authored_by>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md (scaffold from plan 01-00 — 4-section TOC at Full v0.1 depth per D-STYLE-01..07),
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/13-mood-reference-deck.md (just curated — feeds visual direction synthesis),
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md (just authored — narrative voice and audio direction reference cultures + magic tones),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-STYLE-01..07 locked depth + visual-direction-synthesis tension per D-STYLE-03; deferred items for visual / palette / audio exemplars per `<deferred>`),
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (Disco Elysium voice-bible patterns; Open Question 3 visual-direction synthesis),
    PHILOSOPHY.md (§V — confirm refusal list before authoring narrative voice section)
  </read_first>
  <action>
    **Daniel authors all 4 Style Guide v0.1 sections** at Full v0.1 depth per D-STYLE-01, D-STYLE-04, D-STYLE-05, D-STYLE-06, D-STYLE-07.

    **§Visual direction (per D-STYLE-01..03):**
    - Named direction (Daniel writes — e.g., a phrase that captures the look like "painterly cel-shaded with brushstroke flourishes")
    - Color palette principles (Daniel writes principles — warm-skewing? muted? high-saturation?) + 1-2 hero palettes (Daniel curates color values, not Claude)
    - Character silhouette/proportion principles (Daniel writes)
    - Environment style frames (3-4 reference compositions from mood deck — Daniel curates from 13-mood-reference-deck.md, citation-based)
    - UI visual direction (typography family, iconography style — Daniel chooses)
    - **Visual direction synthesis** per D-STYLE-03 — Daniel resolves the tension between Sandara Tang soft-painterly and Hades bold-graphic-ink-line schools. Per `01-RESEARCH.md` Open Question 3: leading hypothesis is cell-shaded painterly stylized 3D with character-art bold-line bias for NPCs (Hades-leaning), environment painterly with brushstroke flourishes (Okami-leaning), thematic warmth via Ghibli sensibility, soft-illustration-painterly accents per Sandara Tang. Daniel either ratifies this hypothesis OR authors his own synthesis. Per AI policy, Claude does NOT generate the synthesis decision.

    **§Audio direction (per D-STYLE-04):**
    - Music genre + instrumentation principles (Daniel curates exemplars from existing games/films/albums — never AI-generated music as reference)
    - Ambient soundscape principles per zone archetype (Daniel writes principles per WORLD §2 zone archetypes)
    - SFX tone principles (Daniel writes — e.g., "no hard percussion in any UI sound")
    - Voice/dialogue audio policy (text-only v1; reading speed assumptions — Daniel writes)

    **§Narrative voice bible (per D-STYLE-05):**
    - POV rules (Daniel writes — third-person? sprite-internal? villager-omniscient?)
    - Register (formal / casual / archaic / modern — Daniel decides)
    - Sentence-shape tendencies (Daniel writes — short and punchy? lyrical and trailing? Disco Elysium-style observer barks?)
    - Period / tone references (which authors / games does the voice feel like — Daniel curates)
    - Forbidden language (modern slang? anachronisms? — Daniel writes)
    - Narrator presence policy (omniscient narrator? sprite-as-narrator? no narrator? — Daniel decides)

    **§UI tone principles (per D-STYLE-06; full mockups Phase 3 not here):**
    - Typography family direction (Daniel chooses)
    - Ornament/iconography principles (Daniel writes)
    - Density / whitespace tendency (Daniel writes)
    - Animation / motion principles (Daniel writes — gentle? snappy? hand-drawn-feel?)

    **Discipline:**
    - Per `01-RESEARCH.md` Pitfall 1 + Anti-Patterns: voice-bible content is the highest AI-policy-violation risk (Claude knows how to write narrative voice samples and may try to be helpful). REFUSE every request to draft sentence-shape examples, sample voice paragraphs, or "show me what the voice sounds like." Daniel writes voice samples; Claude critiques.
    - Per D-STYLE-03: visual direction synthesis is Daniel's call. Claude does NOT generate visual content or palettes. Claude can verify the synthesis section EXISTS and resolves the soft-painterly vs bold-ink tension explicitly.
    - Per D-STYLE-07: orthodoxy memory rule — Daniel may TRIM during execution if specific sections turn out over-engineered. Claude does NOT trim on Daniel's behalf; Daniel logs SCOPE.md entry if trimming.

    **Per AI policy:** All voice samples, palette swatches, sentence-shape examples, music exemplars, named direction phrases — Daniel-authored. Claude refuses generation; Claude can verify (a) all 4 sections present, (b) D-STYLE-01..07 cross-references, (c) visual-direction synthesis section addresses D-STYLE-03 tension explicitly, (d) Mood Deck references propagated correctly into visual direction.
  </action>
  <verify>
    <automated>test -f ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md" && grep -cE '^## (Visual direction|Audio direction|Narrative voice|UI tone)' ".planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md"</automated>
  </verify>
  <acceptance_criteria>
    - All 4 top-level sections present: `grep -cE '^## (Visual direction|Audio direction|Narrative voice|UI tone)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns 4.
    - Visual direction has all required subsections (Named direction / Color palette / Character silhouette / Environment style frames / UI visual direction): `grep -cE '^### (Named direction|Color palette|Character silhouette|Environment style|UI visual)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns ≥5.
    - Visual direction synthesis (D-STYLE-03 tension resolution) explicitly addressed: `grep -ciE '(synthesis|resolution|tension|Sandara Tang|painterly|bold-graphic|cel-shaded)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns ≥3.
    - Narrative voice section has all 6 subsections (POV / Register / Sentence-shape / Period references / Forbidden language / Narrator presence): `grep -cE '^### (POV|Register|Sentence-shape|Period|Forbidden language|Narrator presence)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns ≥6.
    - References D-STYLE decisions: `grep -cE 'D-STYLE-0[1-7]' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns ≥4.
    - References Mood Deck (visual direction citations): `grep -cF '13-mood-reference-deck.md' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns ≥1, OR `grep -cE '(Sandara Tang|Hades|Okami|Ghibli)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns ≥3.
    - Substantive content (Full v0.1 depth): `wc -w .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns ≥1500 words across all 4 sections.
    - No `{Daniel authors}` placeholders remaining: `grep -cF '{Daniel authors' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns 0.
    - **AI-policy compliance:** No AI-generated voice samples — manual check by Daniel that voice section examples are his writing. No automated check possible for this; Daniel signs the Style Guide affirming compliance.
    - AI-policy banner intact: `grep -F 'AI POLICY (PHILOSOPHY.md §V)' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns ≥1.
    - Daniel signature line: `grep -F 'Daniel signature' .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` returns ≥1.
  </acceptance_criteria>
  <done>Style Guide v0.1 Daniel-authored at Full v0.1 depth across visual / audio / narrative voice / UI tone; visual-direction synthesis tension resolved per D-STYLE-03; mood deck references propagated.</done>
</task>

</tasks>

<verification>
After all 3 tasks:
1. **All 3 World & Style Pack files Daniel-authored.**
2. **AI-policy compliance audit (CRITICAL):** Daniel does a manual review of all 3 files for any leaked Claude-generated names / lore / voice samples / palette swatches / reference imagery. Per VALIDATION.md sampling rate (per task commit) + monthly retro auditing per PHILOSOPHY.md §VIII.
3. **World Bible §6 naming-system rules** in place — gates Phase 6 NPC name authoring discipline.
4. **Style Guide visual-direction synthesis** resolved per D-STYLE-03 — feeds Phase 2 art-source repo split decision (INFRA-08).
5. **Mood Deck zero AI content verified** — feeds AI-DISCLOSURE.md update if needed.
</verification>

<success_criteria>
- 3 Daniel-authored World & Style Pack files committed at DEEP / Full v0.1 scope per D-WORLD-01 + D-STYLE-01..07.
- ROADMAP success criteria 12, 13, 14 satisfied.
- World Bible feeds Phase 4 hero NPC + Phase 5 zones + Phase 6 slice content.
- Style Guide gates Phase 2 art-pipeline decisions + Phase 5-6 visual production.
- Zero AI-policy violations: no Claude-generated names / lore / voice / palettes / reference imagery.
- HEALTH-01 progresses (any scope deviations during World Bible / Style Guide authoring logged to SCOPE.md).
</success_criteria>

<output>
After completion, create `.planning/phases/01-foundations-vision-lock/01-05-world-style-pack-SUMMARY.md` documenting: 3 file outcomes, World Bible word count + zone names list (factual extract — not Claude renaming), Mood Deck reference count + AI-policy compliance attestation, Style Guide visual-direction synthesis decision (Daniel's chosen reconciliation).
</output>
