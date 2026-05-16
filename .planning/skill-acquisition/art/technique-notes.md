# Technique Notes — Colisi Art Skill Acquisition

> Daniel's notes on technique, observation, and learned principles. Append-only. Claude provides structural scaffolding; Daniel authors content per AI policy.

---

## Phase 1.1 — Anchor analysis from PureRef board (2026-05-12)

Daniel's articulations of the locked-style anchors, captured from session 02 PureRef review:

- **Sandara Tang — tiger and son piece:** "Very close to the design for Zhan." *(Note: Zhan is leonid per World Bible §6, same big-cat family — Tang piece is fair direction-anchor for proportional/anatomy study; lion-specific reference work happens at Phase 9.)*
- **Hades / Jen Zee — Artemis & Zagreus:** "High detail, strong lines, bold." *(Matches mood deck: "ornate detail, flat-but-shaded color, anime-leaning proportions.")*
- **Ni no Kuni:** "Cel shading and ghibli vibes: warm, fun, playful." *(Not in canonical mood deck; sensible parallel anchor for cel-shaded JRPG painterly direction. Mood-deck amendment via SCOPE.md if canonicalizing later.)*
- **Okami:** "Cel shading, painted aesthetic, imperfect but beautiful." *(Captures the painterly-accent layer that gets implemented shader-side in Phase 2.2/2.3 — intentional rough organic edges, hand-touched quality.)*
- **Studio Ghibli:** "Peaceful, mystical, calm. Ponyo specifically (and by extension most Ghibli) impresses me with how much emotion can be portrayed in lack of detail (simple faces, few lines, etc)." *(Load-bearing observation for the locked style — clarity-through-simplification is the synthesis principle behind cel-shading + anime-proportion + ink-line. Run this as a check on every character + UI choice.)*

---

## Phase 1.2 — Sphere studies (light + value for cel-shading) — completed 2026-05-12

**Six light regions** (vocabulary to retain):
- **Highlight** — small specular peak; brightest point on the form (often a dot, not a region).
- **Light** — surface directly facing the light source.
- **Half-tone** — surface partially turning away from light; the gradient zone between light and terminator.
- **Terminator** — the *narrow band* (not line) where light gives way to shadow; often the darkest region on the form itself.
- **Form shadow** — surface turned away from light, still lit by ambient bounce.
- **Cast shadow** — shadow the form throws onto another surface. Contact shadow (right at form-meets-surface) is typically darkest.

**Foundational lessons (from iterating on the studies):**
- Edges of 3D forms are **value transitions, not lines.** Drawing an outline flattens the form. This is the #1 beginner reflex to unlearn.
- Highlight is a **peak**, not a **region.** Compress it to a small bright spot, not a large white zone.
- Terminator is a **band**, not a **line.** Soften the densest-shadow transition into a narrow zone, not a crisp edge.
- Contact shadow at form-meets-surface is usually the **darkest spot in the entire scene** — push it.
- **Diffuse lighting = compressed value range.** Trust observation; resist fabricating contrast that isn't there. (Hardest scenario to read; easiest to fake-up.)

**Cel-shading band placement (the bridge to Phase 2.2 shader work):**

**2-band** (classic cel — boundary lands at the terminator):
- Lit band = highlight + light + half-tone
- Shadow band = terminator + form shadow + cast shadow

**3-band** (more depth, keeps graphic clarity):
- Bright band = highlight + light
- Mid band = half-tone
- Shadow band = terminator + form shadow + cast shadow

**Colisi-style implementation note:**
- Band edges stay **hard** (soft gradients between bands defeat the cel clarity).
- Painterly feel comes from the **painterly accent overlay** sitting on top of the cel-shaded bands (built in Phase 2.3 shader work) — not from softening the band boundaries.
- Half-tone band **width** is a per-asset choice:
  - Narrow half-tone band → graphic / Hades-leaning (more clarity).
  - Wide half-tone band → dimensional / Ghibli-leaning (more warmth).
  - Characters likely narrow; environments may use wider.

---

## Phase 1.3 — Color theory anchor analysis (deeper) — completed 2026-05-12

Three anchor analyses (Daniel-authored observations + Claude critique notes):

### Okami (Sakuya village scene)

- **Value range:** Spans true blacks to true whites. Wind wisps go to pure white; cel-borders / ink-lines go true black; Amaterasu (player wolf) is also pure white.
- **Temperature pattern:** Mostly warm earth-tones (browns, ground, wood). Cool sky. Notably the **flowers are cool too** — cool color is *rhythmed through* the warm composition, not isolated to the sky.
- **Chroma spike:** Cranked on player model + moving elements (wisps, pinwheel, flowers). These are the focal points. **Refinement:** Amaterasu is a *warm* focal (white-value spike + red/orange chroma) — dual focal system with cool secondary spots pulling the eye toward the warm primary anchor.
- **Palette structure:** Complementary (warm orange/brown vs cool blue), green as transitional/secondary.
- **Locked-style application:** Okami is the canonical reference for the **ink-line + cel-shading + painterly textures** triplet that the Phase 2 prop pipeline implements.

### Sandara Tang (tiger + cub piece)

- **Value range:** Lives in midtones — compressed compared to Okami's full range. **This is the Tang signature** (calm/intimate register vs Okami's energetic/graphic register).
- **Temperature pattern:** Cool-frame / warm-figure. Cool elements (cloak, water, surroundings) wrap warm focal subjects (tigers, autumn forest). Cool surround = recession + emotional safety; warm subjects = presence + intimacy. **Load-bearing trick for cozy register.**
- **Chroma spike:** The koi fish (small saturated warm-red spike within a cool bubble — focal via surround-contrast, not absolute saturation). Dual-focal: eye flows tigers → fish.
- **Palette structure:** Complementary warm + cool, **moderately muted overall** (compressed chroma). Restraint with saturation = calm register.
- **Additional observation (atmospheric perspective):** Background autumn trees are less saturated + slightly cooler than foreground tigers. Distance desaturates and cools.
- **Locked-style application:** Cool-frame/warm-figure + compressed values + moderate chroma is the lens for Sterling's interior cozy scenes (Bakery interior, tree hollow, Elder's Abode).

### Studio Ghibli (Ponyo — boy and Ponyo meeting on the cliff)

- **Value range:** Full range like Okami (ink-line true black, clouds near true-white).
- **Critical observation — ink-line treatment:** **Ink-line only on characters, NOT on environments.** Characters get clean anime-line outlines; environments are painted painterly without outlines. **Figure-ground separation comes from the line/no-line technique contrast.** This is *exactly* the Colisi locked-style synthesis (Hades-leaning ink-line chars + Okami/Tang-leaning painterly no-outline envs).
- **Temperature pattern:** Warm-light / cool-shadow on volumetric forms (clouds = warm-white with cool-blue shadows). Cool sky as dominant negative space; warm characters + clouds against it.
- **Chroma spike:** **Multiple rhythmic saturation peaks** distributed across the composition (Ponyo's red dress + red hair, the yellow shirt, the green bucket, the red basin) — eye dances between them rather than locking onto one. Softer focal strategy than Okami (one spike) or Tang (one spike via cool-frame contrast).
- **Palette structure:** Warm complementary with cool sky negative space. Animation principle in effect: characters more saturated than background.
- **Locked-style application:** Ghibli is the proof-of-concept for the whole Colisi style synthesis. Ink-line-on-chars + painterly-no-outline-envs is the technique.

### The three-anchor framework (compositional toolbox)

| | Okami | Tang | Ghibli |
|---|---|---|---|
| **Value** | Full range | Compressed midtone | Full range |
| **Chroma strategy** | One cranked spike | One quiet spike via cool-frame | Multiple rhythmic peaks |
| **Ink-line treatment** | Everything (chars + env) | None / soft / painterly | Chars only, NOT env |
| **Energy** | Energetic-graphic | Calm-intimate | Lived-in / wandering |
| **Best fit in Colisi** | Festival Valley daytime, outdoor energy | Bakery interior, tree hollow, contemplative | Sterling overall lived-in default |

**Use as menu, not default.** Every Sterling scene picks from this framework intentionally.

---

## Phase 2 — Blender props (cel-shading pipeline) — completed 2026-05-14

### Canonical Colisi material recipe ("Cozy painterly cel-shading")

Every Colisi asset uses this same pipeline. Author the shader once as a Node Group, reuse forever.

**Four layers of the locked-style synthesis:**

1. **Hand-painted base color texture** (Procreate/Krita)
   - Painted on UV layout (export UV Layout from Blender → import to Procreate as guide layer at ~30% opacity → paint on layer above → HIDE the guide layer before export).
   - Base color only — no painted shadows or highlights (the shader handles lighting).
   - Subtle painterly variation OK; bold shadows NOT (causes double-shading when shader applies cel bands).

2. **Cel-shading shader** (`Cel` Node Group, see structure below)
   - Builds inside Blender's Shader Editor.
   - Hard-banded lighting via Shader-to-RGB + ColorRamp Constant interpolation.
   - Multiplied with base color so shadow tones preserve base hue (warm shadows, not gray).

3. **Bold ink outline** (Solidify modifier + `Outline_Black` material)
   - Solidify modifier on the mesh produces a slightly inflated shell.
   - Shell uses a separate black-Emission material.
   - **Critical:** Backface Culling MUST be enabled on the outline material (in viewport AND render settings — check all available Backface Culling toggles in Blender 5.x).
   - Without Backface Culling, the shell appears as a solid black mass covering the form.

4. **Painterly accent** (inside `Cel` Node Group)
   - Noise Texture → ColorRamp (tight range 0.85–1.0) → Multiply into the cel-shaded result.
   - Subtle hand-touched variation; should NOT read as visible noise/grain.
   - Tightening the ColorRamp range too far = no visible variation. Too wide = aggressive speckling.

### `Cel` Node Group structure (the reusable shader)

Inputs: `Color` (base color from Image Texture)
Outputs: `Emission` (final cel-shaded result)

Internal node chain (in order):
1. **Diffuse BSDF** (Color = white, default Roughness)
2. **Shader to RGB** (converts BSDF lighting to color)
3. **ColorRamp** (set interpolation to **Constant**; 3 stops for 3-band: black/gray/white at positions 0, 0.5, 1)
4. **Multiply node #1** (Blend Type: Multiply, Factor: 1.000)
   - A input: Group Input Color
   - B input: ColorRamp output
5. **Noise Texture** (Scale ~8-20, Detail ~2, Roughness 0.5; for painterly accent)
6. **ColorRamp #2** (set Linear; tight range 0.85–1.0 = subtle painterly variation)
7. **Multiply node #2** (Blend Type: Multiply, Factor: 1.000)
   - A input: Multiply #1 output
   - B input: ColorRamp #2 output
8. **Emission shader** (Color = Multiply #2 output, Strength 1.0)
   - → Group Output

### `Outline_Black` material (the outline)

- **Emission shader** with Color = pure black (or warm-dark-brown for visual separation from cel shadows: RGB ~0.05, 0.03, 0.02).
- **Settings → Backface Culling**: CHECKED (in viewport AND render settings — both must be enabled).
- **Render Method**: Dithered (default).

### Solidify modifier settings (canonical)

- **Mode**: Simple
- **Thickness**: **+0.02 to +0.04** (POSITIVE; adjust for mesh scale)
- **Offset**: **+1.000**
- **Normals → Flip**: ENABLED
- **Materials → Material Offset**: **1** (shell uses slot 2 = Outline_Black)
- **Rim Material Offset**: 1 (matches shell)

**Important polarity note:** Negative thickness with positive offset causes the shell to engulf the mesh and produces all-black output. Positive thickness + positive offset + flip normals is the correct combo.

### Tuning per-asset

Most assets work with the default Cel group settings. Per-asset adjustments:

- **Cel ColorRamp left stop value:** raise from pure black (0.0) to dark gray (0.2-0.3) for Tang-leaning compressed-midtone register (calm/cozy). Keep at 0.0 for Hades-leaning dramatic register.
- **Painterly accent ColorRamp range:** tighter (0.92–1.0) = barely-there hand touch; wider (0.7–1.0) = pronounced spots/speckles.
- **Multiply factors:** stay at 1.000 for canonical strength.
- **Solidify thickness:** scale with mesh size. Smaller mesh = smaller thickness.

### Setup workflow for a new asset

1. Model + UV + paint texture.
2. Apply `Cel` Node Group via material slot 1, plug texture in.
3. Add `Outline_Black` to material slot 2.
4. Add Solidify modifier (canonical settings above).
5. **Shade Smooth** on the mesh (Object Mode right-click → Shade Smooth) for clean band curves.
6. Three-point lighting (warm key ~500-1000W Area light + optional cool fill).
7. Warm background (World Properties → Surface → Color).
8. F12 render.

### Gotchas learned during the mushroom

- **UV layout grid lines baked into texture:** hide the UV guide layer in Procreate BEFORE exporting, or grid appears as artifacts on the model.
- **Procreate via iCloud may force JPEG:** use PairDrop or LocalSend to preserve PNG.
- **JPEG vs PNG for textures:** PNG preferred (lossless); JPEG acceptable for learning but introduces banding artifacts at sharp cel-edge transitions.
- **Subdivision Surface vs Shade Smooth:** Shade Smooth is the production-safe choice — same visual smoothing without inflating tri count. Reserve Subsurf for cases where actual geometry detail is needed.
- **Decimate'd irregular topology:** rescued by Shade Smooth (normal interpolation hides the irregularity under cel-shading).
- **Viewport vs Render discrepancy:** Backface Culling has separate viewport/render settings in some Blender versions. Always verify F12 render before claiming an asset is done.

---

## Phase 3 — Architecture (modular kit-bash)

*To be filled. Notes on grid-snap conventions, signature feature design, Sterling-aligned silhouette choices.*

---

## Phase 4 — Cat (quadruped pipeline)

*To be filled. Notes on form study findings, rig conventions, animation library structure.*

---

## Phase 5 — Humanoid + anthropomorphic + Mixamo pipeline

*To be filled. Bone-map naming convention per STACK.md; Mixamo vs. Quaternius pathway comparison; custom-animation principles.*

---

## Phase 6 — Sterling environment

*To be filled. Per-anchor analysis (deeper than Phase 1.1); Eevee painterly scene template structure; lighting variation principles.*

---

## Phase 7 — Magic VFX

*To be filled. Wisp drift parameters; per-villager magic-signature design principles.*

---

## Phase 8 — UI art

*To be filled. Krita brush vocabulary mapping anchors → brushes; typography candidates; iconography principles.*

---

## Phase 9 — Slice production

*To be filled. First slice cast character bible; production-pipeline retrospective.*

---
