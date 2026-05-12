# Art Skill-Acquisition Syllabus — Colisi

> **Version:** v0.2 (2026-05-11) — focused on direct Colisi deliverables per Daniel direction 2026-05-11. v0.1 had broader general-art-skill scope; v0.2 cuts everything not load-bearing for Colisi's specific asset pipeline.
> **Status:** Living document. Daniel revises as the project's actual needs sharpen.
> **Scope:** Take Daniel from near-zero 3D + minimal traditional art experience to capable of authoring Colisi's slice + full-game art deliverables.
> **Locked style direction:** "Cozy painterly cel-shading" per [`14-style-guide-v0.1.md`](../../phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md).
> **Pacing rule:** Milestone-based, not time-based (per D-SUST-01..08 + HEALTH-04). No hour or week estimates. Advance when criteria met.
> **AI policy:** Claude teaches, critiques, locates human-authored tutorials. Claude does NOT produce art, propose palette values, or curate canonical Colisi references. Practice files live outside the repo (`D:\Projects\art-scratch\` recommended).

---

## Deliverables this syllabus targets

Everything below justifies its existence by directly enabling one or more of these. If a module doesn't trace to a deliverable, it's been cut.

| ID | Deliverable | Source |
|----|-------------|--------|
| **A** | 4 slice cast characters: Sprinkles (halfling baker), Cyrus (ancient human elder), Ari (anthropomorphic hedgehog), Zhan (anthropomorphic leonid) | World Bible §4.6 + §6 |
| **B** | The stray black cat (quadruped) | D-VISION-11 + World Bible §2.3 |
| **C** | The wisp visual effect (particle/glow; not modeled) | D-VISION-01 + §4.3 |
| **D** | Sterling environments visible in slice (subset of 13 locations) | World Bible §2 |
| **E** | Per-villager faerie houses (1 in slice; 12-15 full game) | D-VISION-10 |
| **F** | Props for each location (bread, lathe, alchemy tools, books, mugs, furniture) | World Bible §2 |
| **G** | Per-villager magic-signature VFX (cooking fireworks, psychic wind, alchemy swirls, construction deliberate) | World Bible §4.6 |
| **H** | Animation library — humanoid skeleton + retargeting per STACK.md | STACK.md 3D Art Pipeline |
| **I** | UI iconography (soft-shape, brushstroke-feel magic icons) | Style Guide §UI tone |
| **J** | Slice character animations (idle, walk, work-action per villager, spritesight gesture) | World Bible §4 + slice scenario |

Full-game scope adds: 8-11 more humanoids, more anthropomorphics, more Sterling locations, more faerie houses, 4 festival scenes, animal sanctuary residents. The pipeline this syllabus builds scales to those without re-learning.

**Out of scope** (not Daniel-authored, or different syllabus):
- Capsule art — commissioned per PHILOSOPHY.md (~$300 Phase 8 budget exception)
- Music + SFX — separate syllabus
- Writing — separate authoring track (Wildflower / Azriel reference workflow at Phase 6)

---

## How to use

1. Each session, open `learning-log.md` and this syllabus.
2. Pick the current module's next concrete step. Modules are ordered by dependency.
3. Do the work yourself. Save practice files to `D:\Projects\art-scratch\<phase>\`.
4. Paste screenshots / renders into chat for Claude critique.
5. Append to `learning-log.md` (date, module, what you built, technique learned, style-direction checks, next step).
6. Advance only when the module's **advance-when** criteria pass.

---

## Phase 1 — Setup + targeted foundations

> **Goal:** Only the foundation skills that directly serve later modules. No general drawing curriculum. No master copies. Just the three things that make cel-shading + cozy-warm register + reference workflow possible.

### 1.1 — Reference workflow (PureRef)

- **Goal:** Have a working reference-board tool so every later module can study the anchor works systematically.
- **Tools:** PureRef (free).
- **Practice piece:** Set up PureRef. Build one board with at least 10 references you find across all four locked-style anchors — Okami environment stills, Sandara Tang work, Hades character art, Ghibli interiors. You curate (per AI policy I do not).
- **Advance when:** Board exists, spans all four anchor categories.
- **Deliverable impact:** Supports every later module.

### 1.2 — Light + value for cel-shading

- **Goal:** Understand where light bands fall on form. Cel-shading is a flat-banded simplification of continuous light; you can't choose where to band until you can see continuous light.
- **Resources:** **Marco Bucci** YouTube "10 minutes to better painting" series (free) — pick his light-on-form videos.
- **Practice piece:** Five sphere value studies (pencil OR digital, your call). Render a sphere under: (a) warm overhead key, (b) cool side rim, (c) warm-cool split, (d) overcast diffuse, (e) golden-hour rake light. Identify on each: cast shadow, form shadow, terminator, half-tone, light, highlight.
- **Advance when:** Five studies exist; you can identify those six regions on any subject.
- **Deliverable impact:** A, B, F, G — every shaded surface in the project depends on this.

### 1.3 — Color theory through the cel-shading lens

- **Goal:** Understand warm/cool, complementary, value vs. chroma, palette logic — focused on what cel-shaded cozy work needs. NOT a general color curriculum.
- **Resources:**
  - **James Gurney's** free YouTube channel (Gurney Journey) — pick his warm/cool light videos.
  - Optional book: **James Gurney's** *Color and Light* (~$25 used) — the single highest-leverage color book for someone learning representational work.
- **Practice piece:** One anchor analysis — pick one Okami screenshot, one Sandara Tang piece, one Ghibli still. For each, document in `technique-notes.md`: dominant value range, color temperature pattern (warm-light/cool-shadow or reverse?), where the chroma spikes (focal saturation), how the palette holds together.
- **Style-direction checks:** Analysis identifies what makes each piece read as cozy + warm.
- **Advance when:** Three anchor analyses written.
- **Deliverable impact:** A, B, D, F — every color decision in the project.

---

## Phase 2 — Blender fluency + first props + cel-shading pipeline

> **Goal:** Become fluent in Blender; produce your first Colisi-style-aligned props end-to-end (model → UV → hand-paint → cel-shade → ink-outline → painterly-accent → Eevee render). Cel-shading is integrated into prop work, not a separate phase.

### 2.1 — Blender Guru donut (full series)

- **Goal:** Trial-by-fire of Blender's whole interface in one project.
- **Resources:** **Andrew Price (Blender Guru) — "Donut Tutorial" series**, free YouTube.
- **Practice piece:** Complete donut + icing + sprinkles + plate + render.
- **Advance when:** Render exists; you can describe Edit Mode vs. Object Mode, modifiers, UV unwrap, materials, render.
- **Deliverable impact:** Foundation for all of A, B, D, E, F.

### 2.2 — First stylized prop with full cel-shading pipeline (a mushroom)

- **Goal:** One complete Colisi-style-aligned prop. End-to-end: model → topology → UV → hand-paint texture → cel-shade → ink outline → painterly accent → Eevee render.
- **Tools introduced:** Krita (for hand-painted texture); cel-shading shader nodes; Solidify-modifier ink outline.
- **Resources:**
  - Modeling: **Imphenzia's "Learn Low Poly Modeling"** YouTube; **Grant Abbitt's** modeling-for-beginners series.
  - UV: **Grant Abbitt's** UV series.
  - Texture (Krita): **Stylized Station's** hand-painted texture tutorials.
  - Cel-shading: **Default Cube's** "Cel Shading in Blender" YouTube.
  - Outline: **Default Cube's** "Outlines in Blender" tutorial (Solidify + flipped-normals method).
  - Painterly accent: **Lightning Boy Studio's** painterly-shader breakdowns (free portions).
- **Practice piece:** One stylized mushroom. <500 tris. Hand-painted texture in Krita. Cel-shaded (2-3 bands). Ink-outlined. Painterly noise accent layer. Eevee three-point light setup.
- **Style-direction checks:**
  - Silhouette reads at distance (squint test).
  - Cel-shading bands are intentional (you can articulate where they fall and why).
  - Outline reads at expected viewing distance, doesn't break at surface discontinuities.
  - Painterly accent reads warm + hand-touched without overwhelming the cel-shading clarity.
  - Material is warm-skewing (per locked style baseline).
  - <500 tris, 1024x1024 texture max.
- **Advance when:** Mushroom renders Colisi-style-aligned; documented as a milestone in `learning-log.md`.
- **Deliverable impact:** F (first prop with the full pipeline working).

### 2.3 — Second prop, lessons applied (a wooden mug or stylized lantern)

- **Goal:** Repeat the pipeline on a different shape. Internalize the workflow so it's reflexive.
- **Practice piece:** Stylized wooden mug OR stylized lantern (your choice; both slice-relevant per World Bible §2 — mug for Cafe/Bakery interiors, lantern for tree hollow / outdoor scenes). <500 tris. Full pipeline.
- **Style-direction checks:** Same as 2.2.
- **Advance when:** Second prop exists; you no longer need to look up most steps.
- **Deliverable impact:** F.

---

## Phase 3 — Sterling structure (modular architecture)

> **Goal:** Scale from individual props to building-sized assets. One Sterling location modeled end-to-end. Modular kit-bash so the pattern scales to all 13+ locations + faerie houses.

### 3.1 — Hard-surface furniture set (chair + table)

- **Goal:** Practice hard-surface modeling on simpler structures before tackling architecture.
- **Resources:** **Imphenzia's** hard-surface tutorials.
- **Practice piece:** A matched chair + table set (Sterling village interior style). Full pipeline (model, UV, paint, cel-shade, outline, accent). Set reads as a set.
- **Style-direction checks:** Cozy register; matched palette across the set; passes all Phase 2 checks.
- **Advance when:** Furniture set exists; reads cohesive.
- **Deliverable impact:** F (interior props for any slice location).

### 3.2 — Modular building kit

- **Goal:** Wall + corner + window + door + roof pieces that grid-snap together. This is the canonical scalable architecture approach for indie 3D.
- **Resources:** **Travis Davids's** modular environment tutorials; **Imphenzia's** modular environment workflow.
- **Practice piece:** Small modular kit (5-6 pieces) — straight wall, corner wall, window wall, door wall, roof slope. Designed for grid-snap.
- **Style-direction checks:** Pieces snap cleanly without z-fighting; reads consistent.
- **Advance when:** Kit exists; assembled into at least one small test building.
- **Deliverable impact:** D, E (Sterling buildings + faerie houses both use modular kits).

### 3.3 — One Sterling structure (slice-relevant)

- **Goal:** First full named Sterling building. Pick from slice-relevant locations: **tree hollow** (the wisp's sanctum, §2.10), **Bakery** (§2.3), **Apothecary** (§2.4), **Carv** (§2.5), or **Elder's Abode** (§2.2).
- **Practice piece:** One Sterling building, exterior + minimal interior. Uses 3.2 modular kit where possible. Has at least one signature feature making it character-coded (e.g., bakery has chimney + bread sign; apothecary has bottle-silhouettes; Carv has lathe visible through window).
- **Style-direction checks:**
  - Silhouette reads at distance.
  - Building reads as Sterling (cozy register, painterly-cel-shaded synthesis from Phase 2).
  - Character-coded silhouette feature identifies the building's owner / function.
- **Advance when:** Building renders Colisi-style; logged as a milestone.
- **Deliverable impact:** D (one slice location built); pipeline established for E (faerie houses, which are smaller character-coded structures).

---

## Phase 4 — The cat (quadruped character, full pipeline)

> **Goal:** Your first character. Quadruped first — simpler rig than humanoid, and the stray black cat is directly slice-relevant (D-VISION-11). Establishes the entire character pipeline (form-study → model → sculpt → retopo → UV → paint → cel-shade → rig → animate → glTF → Godot).

### 4.1 — Cat form study (targeted drawing)

- **Goal:** Train your eye for cat anatomy and stylized cat gesture. Targeted; not general drawing.
- **Resources:** **Proko's** animal anatomy YouTube series (free); reference photos from your PureRef board (you curate).
- **Practice piece:** 15 cat drawings total — 10 gesture sketches from photo reference (30s-1min each) + 5 form-construction sketches showing underlying volumes (spheres for head/body/haunches, cylinders for legs/tail).
- **Style-direction checks:** Drawings show *form*, not outline.
- **Advance when:** You can draw a cat in any pose without freezing.
- **Deliverable impact:** B.

### 4.2 — Cat model (block → sculpt → retopo → UV → hand-paint → cel-shade)

- **Goal:** Production-quality cat through full modeling pipeline.
- **Resources:**
  - Block-out + low-poly: **YanSculpts's** stylized creature tutorials.
  - Sculpting: **YanSculpts** + **Grant Abbitt's** sculpting series.
  - Retopology: **Speedchar's** retopo tutorials.
  - UV + texture: techniques from Phase 2.
- **Practice piece:** Stray black cat. Block-out → sculpt fur direction hints + face detail → retopo to ~2000-3000 tris → UV unwrap (seams down belly, inside legs, behind ears) → hand-paint texture in Krita (warm-black, not RGB pure black — Phase 1.3 color theory applies) → cel-shade + outline + painterly accent.
- **Style-direction checks:**
  - Silhouette reads as a cat from any angle.
  - Ghibli-anthropomorphic-leaning (warm, stylized, species-clear).
  - Cozy register; reads as Sterling-stray, not as generic 3D cat.
  - Within ~3000-tri budget.
- **Advance when:** Cat renders Colisi-style-aligned in Eevee with three lighting variations.
- **Deliverable impact:** B (character model complete).

### 4.3 — Cat rig (armature + weight paint + IK)

- **Goal:** Production-grade quadruped rig.
- **Resources:** **Pierrick Picaut's** "Quadruped Rig in Blender" YouTube series (free, comprehensive).
- **Practice piece:** Cat rigged — armature, weight-painted, IK legs, spine/tail/head controls. Bone naming follows convention so STACK.md bone-map pattern works (you'll use the same convention for humanoid in Phase 5).
- **Style-direction checks:** Cat poses cleanly to known positions (sitting, walking-frame, lying-down) without weight artifacts.
- **Advance when:** Rig is functional; cat poses without artifacts.
- **Deliverable impact:** B + sets up H (animation library pattern).

### 4.4 — Cat animation (idle, walk, sit)

- **Goal:** Three production animations on the cat. Builds animation fundamentals through doing.
- **Resources:**
  - **AlanBeckerTutorials** YouTube — 12 principles of animation (free, well-paced; watch a few before animating, not all).
  - **Pierrick Picaut's** Blender Animation series.
- **Practice piece:** Three cat actions — idle-breathe loop (~24f), walk cycle (~24-32f, quadruped gait), sit-down transition.
- **Style-direction checks:** Each action reads cozy + alive; quadruped walk has proper weight + leg phase.
- **Advance when:** Three actions play cleanly in Blender.
- **Deliverable impact:** B + J (animation pattern established).

### 4.5 — Cat Animation Library + glTF export + Godot import

- **Goal:** Full pipeline working end-to-end. STACK.md pattern: one canonical skeleton, animations as Animation Library Resource, glTF export with NLA Strips on.
- **Resources:**
  - STACK.md 3D Art Pipeline section (re-read; this is THE pipeline reference).
  - **Supermatrix Studio's** Blender→Godot Animation 2026 Guide (cited in STACK.md sources).
- **Practice piece:** Cat exported as `.glb` (NLA Strips: on; +Y Up: on; Animation: NLA Strips on; Export-all-actions: off, per STACK.md). Imported into a Godot test scene. All three animations playable from the Animation Library Resource.
- **Style-direction checks:** N/A — pipeline check.
- **Advance when:** Cat plays all three animations in Godot. **Milestone: full quadruped character pipeline working end-to-end.**
- **Deliverable impact:** B complete + H, J pattern established.

---

## Phase 5 — Anthropomorphic humanoid + Mixamo retargeting

> **Goal:** Your first humanoid character. **Make it an anthropomorphic villager (animal-headed humanoid)** — this practices BOTH humanoid shape AND anthropomorphic shape in one practice piece, since the slice has both (Sprinkles + Cyrus are humanoid; Ari + Zhan are anthropomorphic). The practice character is a generic NPC, not slice cast.

### 5.1 — Anime-proportion + anthropomorphic form study (targeted drawing)

- **Goal:** Understand the proportional shifts (realistic → anime-stylized → anthropomorphic-on-anime-base).
- **Resources:**
  - **Proko's** figure proportion tutorials (free YouTube).
  - Reference: PureRef board with Hades/Jen Zee characters + Ghibli anthropomorphics (Spirited Away, Howl's Moving Castle).
- **Practice piece:** 15 drawings total — 5 realistic anatomy reference sketches, 5 anime-proportion sketches (head ~1/6 to 1/7 body height; eyes large; expressive face), 5 anthropomorphic studies (humanoid form + animal head/features). Document the proportional deltas in `technique-notes.md`.
- **Style-direction checks:** Sketches preserve gesture; anthropomorphic versions retain animal species-clarity.
- **Advance when:** Notes complete; you can draw an anime-proportion anthropomorphic figure that stands on its feet.
- **Deliverable impact:** A.

### 5.2 — Practice anthropomorphic humanoid (full model pipeline)

- **Goal:** One generic anthropomorphic villager (e.g., a rabbit, fox, bird — *your* choice; explicitly NOT slice cast Ari or Zhan; practice piece). Full pipeline.
- **Resources:**
  - Character modeling: **YanSculpts's** stylized character series; **Speedchar's** character modeling.
  - Topology: **Speedchar's** topology lessons.
  - Sculpting: **YanSculpts**.
- **Practice piece:** Anthropomorphic humanoid. Anime-leaning proportions (per locked style). Animal head/features. Game-ready topology (~5000-10000 tris). Hand-painted Krita texture. Cel-shaded + outlined + painterly-accented.
- **Style-direction checks:**
  - Anime-leaning proportions per Style Guide §Character silhouette / proportion principles.
  - Species-clarity retained (anthropomorphic anchor per Style Guide).
  - Cozy-register restraint (no grotesque, no menacing).
  - Bold ink-line per Hades anchor.
  - Silhouette readable at distance.
- **Advance when:** Character renders Colisi-style-aligned.
- **Deliverable impact:** A (humanoid + anthropomorphic pipeline both established in one piece).

### 5.3 — Humanoid rig + bone map per STACK.md

- **Goal:** Production-grade humanoid rig with the bone-map convention that lets Mixamo/Quaternius animations retarget cleanly.
- **Resources:**
  - **Pierrick Picaut's** "Blender Rigging" humanoid series.
  - STACK.md 3D Art Pipeline + Godot bone-map docs.
- **Practice piece:** Humanoid armature on your 5.2 character. Weight-painted. IK arms and legs. Bone names match Godot's expected bone-map convention.
- **Advance when:** Bone map verified; character poses cleanly.
- **Deliverable impact:** A + H.

### 5.4 — Mixamo + Quaternius retargeting workflow

- **Goal:** Test the canonical animation-library approach. Without this, every villager animation is custom-authored, which is unsustainable for 12-15 characters.
- **Resources:**
  - **Mixamo official docs** (Adobe).
  - **Mixamo Animation Retargeter** addon (Asset Library, per STACK.md).
  - **Quaternius Universal Animation Library** (CC0; per STACK.md no-ToS-risk alternative).
  - **Jwelchgames's Godot4-MixamoLibraries** (STACK.md cited source).
- **Practice piece:** Test both pathways — upload your 5.2 humanoid to Mixamo, download 3 animations, retarget. Then import Quaternius UAL, retarget 3 more. All 6 animations on the same character via one Animation Library.
- **Style-direction checks:** Animations read cozy (no aggressive/combat motions — Mixamo + Quaternius both have plenty of cozy-friendly clips).
- **Advance when:** 6 animations play cleanly; you understand which workflow you prefer for future villagers.
- **Deliverable impact:** H + J (most slice villager animations will come from these libraries; only character-coded gestures need custom authoring).

### 5.5 — Custom character-coded gesture (one animation)

- **Goal:** Author one custom animation. Slice cast each needs character-coded gestures (Sprinkles flour-dusting; Cyrus listening-head-tilt; Ari swirl-flourish; Zhan deliberate-hammer-tap). This module proves you can author one.
- **Practice piece:** One custom animation on your 5.2 character. Cozy register. ~24-48 frames.
- **Style-direction checks:** Gesture reads in-character for the practice villager you designed.
- **Advance when:** Custom animation plays cleanly + added to the Animation Library.
- **Deliverable impact:** J.

### 5.6 — Animation Library + glTF export + Godot import

- **Goal:** Pipeline working end-to-end for humanoid (cat pipeline already proved in Phase 4.5; this proves it scales).
- **Practice piece:** 5.2 character exported as `.glb` with NLA Strips. Imported into Godot. All animations play. Cat (from 4.5) + humanoid (from here) both in the same test scene playing their animations.
- **Advance when:** Both characters work in Godot. **Milestone: full character pipeline (quadruped + humanoid + anthropomorphic) production-capable.**
- **Deliverable impact:** A pattern + B + H + J all proven working end-to-end.

---

## Phase 6 — Sterling environment

> **Goal:** Painterly Eevee environment scene with characters in it. One Sterling location, fully realized.

### 6.1 — Anchor analysis (one piece)

- **Goal:** Deep-study ONE locked-style anchor at composition + lighting level. Builds the eye for painterly environment work.
- **Resources:** Re-watch Okami gameplay at 0.25x speed; OR study one Sandara Tang environment piece; OR study one Ghibli interior still. (You pick which.)
- **Practice piece:** Documented analysis in `technique-notes.md` — the chosen piece's palette, composition (focal hierarchy, leading lines, value masses), lighting setup, brushstroke density.
- **Style-direction checks:** Analysis identifies *why* the piece reads as cozy + painterly + warm.
- **Advance when:** Analysis complete.
- **Deliverable impact:** D.

### 6.2 — Eevee painterly scene template

- **Goal:** Reusable Eevee + post-processing setup for cozy-painterly environment work. Saved as a `.blend` template.
- **Resources:** **Blender Studio's** *Coffee Run* breakdown (free; production-grade stylized Eevee setup).
- **Practice piece:** Template scene with cel-shading shader pre-built, ink-outline post-process pre-configured, painterly accent pre-set, lighting rig (warm key + cool fill + rim) pre-positioned. Drop a new asset in; it renders consistent.
- **Advance when:** Template exists; reusable.
- **Deliverable impact:** D (and reduces per-scene setup cost forever).

### 6.3 — One Sterling scene (slice-relevant)

- **Goal:** First complete Sterling location. Pick: tree hollow interior, Bakery interior, Apothecary interior, Carv interior, Festival Valley exterior, OR Town Center exterior. Slice-relevant per World Bible §2.
- **Practice piece:** Full scene — environment (from Phase 3.3 building OR new), props (from Phase 2 + 3.1), character (your Phase 5.2 humanoid OR Phase 4 cat) in the space. Eevee render at one lighting variation (e.g., golden-hour for warmth).
- **Style-direction checks:**
  - Painterly brushstroke environment feel.
  - Cozy register; warm baseline.
  - Character reads in the space, not "pasted on top."
  - Sterling-aligned (matches the World Bible description of the chosen location).
- **Advance when:** Scene renders Colisi-style-aligned. **Milestone: first complete Sterling scene.**
- **Deliverable impact:** D.

---

## Phase 7 — Magic VFX (Godot particle + shader work)

> **Goal:** The wisp's drift effect (C) + one magic-signature VFX proof-of-concept (G). This phase crosses from pure-art into Godot work — Godot scripting/scene basics from main project Phase 3 are prerequisite.

### 7.1 — Godot particle + shader basics

- **Goal:** Basic Godot VFX literacy. Shader fundamentals; particle system fundamentals.
- **Resources:**
  - **Godot official docs** on GPUParticles3D + ParticleProcessMaterial.
  - **Garbaj's** Godot shader tutorials (free YouTube).
  - **Godot Shaders site** (free shader library; study only, license-check before any use).
- **Practice piece:** A test particle effect (any cozy-register effect — gentle sparkles, drifting motes). Runs in a Godot test scene.
- **Advance when:** Particle effect runs; you can articulate what particle parameters do what.
- **Deliverable impact:** Prerequisite for C + G.

### 7.2 — Wisp drift effect

- **Goal:** The player avatar's visual identity. Gentle, cozy, calm — per World Bible §4.3 + §1.2.
- **Practice piece:** Wisp drift effect in Godot. Subtle trail; warm glow; no harsh flashing. Should read as "magical entity drifting through Sterling," not as a video-game cursor.
- **Style-direction checks:**
  - Gentle, not aggressive.
  - Warm-glow palette.
  - Reads at expected viewing distances.
- **Advance when:** Effect runs; matches Style Guide §Magic effects use single complementary spike principle.
- **Deliverable impact:** C.

### 7.3 — One magic-signature proof-of-concept

- **Goal:** Per-villager identity-magic visual. Pick one slice villager's signature to prototype: Sprinkles cute fireworks, Ari swirls/swoops, OR Zhan deliberate-not-flashy. (Cyrus is non-visible audio-led; skip for this phase.) Per World Bible §4.6.
- **Practice piece:** One magic-signature VFX in Godot. Triggered effect (not continuous).
- **Style-direction checks:**
  - In-character per the villager (Sprinkles playful warmth; Ari eccentric swirl; Zhan quiet earth-warm).
  - Magic = highlight, not background (per Style Guide §Color palette principles).
  - Cozy register; no horror/threat coding.
- **Advance when:** Effect runs; reads in-character.
- **Deliverable impact:** G (one of four; pattern established for remaining three).

---

## Phase 8 — UI art

> **Goal:** Soft-shape iconography per Style Guide §UI tone. Krita brush vocabulary established; magic icons in brushstroke feel; vector workflow for crisp scaling. Typography candidates noted for Phase 3 UI implementation to pick from.

### 8.1 — Krita brush vocabulary (if not already established)

- **Goal:** Document which Krita brushes feel like which style anchor. Reused throughout UI + 2D work.
- **Resources:** **GDQuest's Krita series** (free YouTube); Krita's official documentation.
- **Practice piece:** Brush vocabulary page in `technique-notes.md` — for each anchor (Okami brushstroke, Hades ink, Ghibli paint), list 2-3 Krita brushes that feel close.
- **Advance when:** Vocabulary page exists.
- **Deliverable impact:** Prereq for 8.2 + 8.3.

### 8.2 — Soft-shape UI icons (3 icons)

- **Goal:** Cozy register UI iconography.
- **Resources:**
  - **Material Design icon guidelines** (Google, free) — general principles.
  - **Game UI Database** site for cozy-game UI study.
- **Practice piece:** Three soft-shape UI icons in Inkscape (vector) for Colisi systems — *you decide which three* (examples: rest, interact, journal, settings; you pick). Export PNG at 64x64 + 128x128.
- **Style-direction checks:**
  - Soft-shape (rounded corners; no sharp angles per Style Guide §UI).
  - Reads at 64x64.
  - Cozy register.
- **Advance when:** Three icons exist.
- **Deliverable impact:** I.

### 8.3 — Brushstroke-feel magic icons (2 icons)

- **Goal:** UI icons for magic-themed systems. Per Style Guide §Ornament / iconography principles — "brushstroke-feel for magic-related icons."
- **Practice piece:** Two magic-themed icons painted in Krita using your 8.1 brush vocabulary. Examples: a "magic-tutoring" icon, a "spritesight gift" icon — *you decide*.
- **Style-direction checks:**
  - Brushstroke feel (per Okami/Tang anchor).
  - Cozy register.
  - Reads at expected UI sizes.
- **Advance when:** Two icons exist.
- **Deliverable impact:** I.

### 8.4 — Typography candidates

- **Goal:** Three body-font + three heading-font candidates that fit Style Guide §UI typography family direction. No commit — that happens at Phase 3 UI implementation per project workflow.
- **Resources:**
  - **Practical Typography** by Matthew Butterick (free online book).
  - **Google Fonts** library (free, commercial-OK).
- **Practice piece:** Six candidate fonts documented in `technique-notes.md` with why each was considered.
- **Style-direction checks:** Candidates align with humanist/warm + cozy register.
- **Advance when:** Candidates documented.
- **Deliverable impact:** Prereq for Phase 3 UI implementation; not directly I but feeds it.

---

## Phase 9 — Slice production

> **Goal:** Bridge from skill-acquisition into Phase 6 production. First slice cast character authored through the full pipeline you've built. This phase's output IS Colisi slice content (unlike Phases 1-8 where outputs were practice).

### 9.1 — First slice cast character bible

- **Goal:** Production character bible for ONE slice villager. Per `persona-zero-emergent-feedback.md` Wildflower + Azriel reference workflow + AI policy (all Daniel-authored).
- **Practice piece:** Character bible for Sprinkles, Cyrus, Ari, OR Zhan (your choice for first). Includes: reference board (PureRef), pose sheet, expression sheet, color/palette study, magic-signature design study. **All Daniel-authored per AI policy.** Claude critiques drafts when asked; Claude does not propose specific designs, palettes, or canonical Colisi visual content.
- **Style-direction checks:** Character reads in-character per World Bible §4.6 + §6 + persona-zero emergent feedback.
- **Advance when:** Character bible complete.
- **Deliverable impact:** A (first slice cast member, design phase).

### 9.2 — First slice cast character produced

- **Goal:** Author the actual first slice cast member through the full pipeline. No longer practice — this is slice content.
- **Practice piece:** First slice cast character: designed (from 9.1) → modeled → rigged → textured → cel-shaded → animated (idle + walk + work-action + spritesight gesture) → magic-signature VFX wired up → glTF exported → Godot test scene.
- **Style-direction checks:** Production-quality. Passes every check from Phases 2-7. Passes Phase 6 production review per project workflow.
- **Advance when:** Character ships into Phase 6 production directory in the repo. **Syllabus success criterion: first slice cast member shipped.**
- **Deliverable impact:** A (1 of 4 slice cast complete).

### 9.3 — Capability matrix amendment

- **Goal:** Bridge to project's GSD workflow. Update `16-capability-gap-matrix.md` to reflect achieved capabilities.
- **Practice piece:** Draft amendments to capability matrix. Daniel commits via normal GSD workflow when ready (the matrix is project-architectural per the prompt's GSD exemption boundary).
- **Advance when:** Amendments drafted; ready for `/gsd:execute-phase` 6 to begin remaining slice cast (Sprinkles + Cyrus + Ari + Zhan minus the one done in 9.2).
- **Deliverable impact:** Bridges to ongoing project execution.

---

## Risks + tripwires

- **A project phase needs a syllabus skill before that syllabus phase completes.** Surface in `learning-log.md` + at monthly retro. Candidate `slice-debt.md` entry — consider paid CC0 packs as bridge (per `15-risk-register.md` R-06).
- **Style-direction checks fail repeatedly on the same milestone.** May indicate the Style Guide needs revision OR the skill needs more time. Daniel decides; not Claude's call.
- **Practice files leak into the repo.** Audit `art-scratch/` location quarterly.

---

## Cross-references

- `.planning/research/STACK.md` — pipeline (glTF, NLA strips, Animation Libraries, bone maps, Eevee).
- `.planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md` — locked style; every module's checks reference it.
- `.planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md` — Sterling setting + what the art depicts.
- `.planning/phases/01-foundations-vision-lock/deliverables/risk-capability-pack/16-capability-gap-matrix.md` — capability rows advanced.
- `PHILOSOPHY.md` §V + `AI-DISCLOSURE.md` — AI policy holds throughout.
- `CLAUDE.md` — load-bearing rules (performance target, refusal list).

---

## Version history

- **v0.1** (2026-05-11) — Initial draft, broad scope including general-art-skill curriculum.
- **v0.2** (2026-05-11) — Focused on direct Colisi deliverables per Daniel direction. Cut general-art modules. Combined related modules. Each module now traces to a specific deliverable A-J. Drawing happens as targeted form-study before character modules, not as ongoing curriculum.
