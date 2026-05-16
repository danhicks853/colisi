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

## Phase 2.3 additions — pipeline extensions (lamppost, completed 2026-05-15 to 2026-05-16)

The cel-shading pipeline from Phase 2.2 is the foundation. Phase 2.3 added three extensions that apply to many future assets: multi-mesh hierarchy, emissive lighting, authored animation. New gotchas, recipes, and Colisi-specific design DNA below.

### Multi-mesh asset hierarchy pattern

Use this when an asset has parts that need independent behavior — animation, runtime visibility toggle, swappable contents, separate materials per sub-component.

- **Empty as root parent** of the asset (e.g., `Lamppost_Root`). Empty has no geometry; it just holds the group.
- Each functional sub-mesh is a separate object, parented to the Empty.
- Moving/rotating the Empty moves the whole asset as a unit.
- Each child mesh has its own material, modifiers, and animation track.
- glTF export will preserve the hierarchy; Godot scene structure mirrors this.

**Parent-child workflow in Blender:** in Outliner, Ctrl+click each child mesh, then Ctrl+click the Empty LAST (Empty becomes active = brighter outline). Mouse over 3D viewport, `Ctrl+P → Object`. Outliner selection conventions are OPPOSITE to Windows file manager (Shift+click = range select; Ctrl+click = individual toggle).

**Setting origin to a specific point** (critical for animation pivots): in Edit Mode, select target verts/edges (use Alt+click for edge loops). `Shift+S → Cursor to Selected`. Tab out, `Object → Set Origin → Origin to 3D Cursor`. The object's origin (yellow dot) now sits at the target location.

### Emissive lighting recipe (flame, magical orb, torch, sconce, glowing rune)

**Two-element pattern** — visible emission + actual light source. Required for any asset that's supposed to glow AND illuminate surroundings.

1. **Emission shader on the visible mesh:**
   - Material Properties → New material. Switch to Shader Editor.
   - Delete the default Principled BSDF. Add Emission node (`Shift+A → Shader → Emission`).
   - Connect Emission output → Material Output → Surface.
   - Color: warm orange-yellow for fire (~RGB 1.0, 0.5, 0.1); cool blue-white for magic; cool blue for witch-light.
   - Strength: 2-5 for candle, 5-10 for oil lamp, 20+ for dramatic sources.
   - **NO outline (no Solidify modifier) on emissive meshes.** Emissive objects are light sources, not solid edges. Ink outlines on them look wrong.

2. **Point Light at the same position:**
   - Select the emissive mesh. `Shift+S → Cursor to Selected` snaps the 3D cursor to it.
   - `Shift+A → Light → Point` adds a Point Light at the cursor.
   - Object Data Properties (light bulb icon when light is selected):
     - Color: match the emission color (slightly warmer if for ambient warmth).
     - Power: 50W (candle), 200-500W (oil lamp), higher for dramatic scenes.
     - Radius: 0.05m (small — defines soft shadow edge size).
   - Parent the Point Light under the asset's Empty root in Outliner.

3. **Eevee Bloom for visible glow halo:**
   - Render Properties → find "Bloom" section → enable checkbox.
   - Threshold: 0.8 (only objects brighter than this trigger bloom — keeps non-emissive surfaces from glowing).
   - Radius: 6 (size of glow halo in pixels).
   - Intensity: 0.05-0.1 (subtle by default; bump up for dramatic).

4. **Disable shadow casting on the emissive mesh** so light passes through:
   - Two methods (either works):
     - **Material Properties → Settings → Shadow Mode → None** (per-material; cleanest for Eevee)
     - **Object Properties → Visibility → Ray Visibility → Shadow → uncheck** (per-object; works in both Eevee and Cycles)
   - Without this, the Point Light bounces off the inside of the emissive mesh's geometry and can't escape, leaving surrounding surfaces unlit.

### Authored animation pipeline (first Blender animation)

For simple object-level animation (no bones needed) like a swinging sign, a pulsing emissive, a wobbling sign:

1. **Set Timeline End frame** in Timeline panel header (bottom of Blender). Default is 250; for short loop use Start 1, End 60 (~2.5s at 24fps).
2. **Set object's origin to the pivot point** (see "Setting origin" above).
3. **Open Action Editor pane:** split a window or change an editor to Dope Sheet, then in Dope Sheet's top-left dropdown change mode to Action Editor.
4. **Set keyframes at each frame in the cycle:**
   - Set timeline to frame N.
   - Modify the object's transform (G/R/S) as desired.
   - Hover over 3D viewport, press `K → Rotation` (or Location, Scale — opens menu to choose what to keyframe).
   - Repeat for each keyframe in the cycle. Ensure frame 1 and final frame have IDENTICAL pose so the loop is seamless.
5. **Make cyclic via F-Modifier** (so the animation extends infinitely instead of stopping at the last keyframe):
   - Open Graph Editor pane.
   - Select the Sign so its F-curves appear.
   - In Graph Editor: hover, `A` to select all curves.
   - `Channel menu → Extrapolation Mode → Make Cyclic (F-Modifier)`.
6. **Test:** hover viewport, press Spacebar. Animation should loop.

**Blender 4.x keyframe shortcut change** — important for muscle memory:
- **`I`** = insert keyframe using the current Keying Set (whatever properties the active Keying Set covers — often single property only).
- **`K`** = open menu to choose which property to keyframe (Location, Rotation, Scale, etc.).
- Use `K` when you want to choose; use `I` when you've set the Keying Set to your preferred default.

**For shipping in Colisi:** authored Blender animation is the learning artifact. **Runtime procedural sway in Godot is the shipping pattern** — avoids all path-lamps swinging in robotic lockstep with identical animation. Pattern logged in [`handback-to-main-session.md`](handback-to-main-session.md) for Phase 4 Godot import work.

### Curve-based modeling for organic tubular shapes

Bezier curves with bevel depth produce smooth tubular geometry suitable for organic shapes (rope, vine, branch, spiral bracket, hanging cord).

**Steps for a manual Bezier shape:**
1. `Shift+A → Curve → Bezier` (default 2-point curve, flat on XY plane).
2. Numpad 1 for front view. Rotate curve onto vertical plane: `R, X, 90` (in Object Mode).
3. Curve Properties (green curve icon in Properties panel) → Geometry → Bevel → Round, Depth ~0.03 (tunes tube thickness). Bevel Resolution 3-4 for low-poly cross-section, 6+ for smoother.
4. Edit Mode (`Tab`): extrude control points (`E`) to add path segments. Adjust handle dots (`G` after selecting handle dot) to control curve smoothness — short handles = tight curves, long handles = wide sweeps.
5. `Object → Convert → Mesh` when shape is locked.

**For parametric spirals — install "Add Curve: Extra Objects" addon:**
- Blender 4.2+: Edit → Preferences → **Get Extensions** tab → search "Extra Objects" → Install.
- Older Blender: Edit → Preferences → Add-ons → search "Extra Objects" → enable.
- After install: `Shift+A → Curve → Spirals → Archemedian` (spelled this way in the addon).
- Tune Turns, Radius Growth, Steps, Radius in the operator panel for the spiral shape. Set Shape: 3D (not 2D) to avoid edit-mode-rotation collapse.

**Spiral types:**
- **Archemedian** — classic flat spiral, radius grows linearly with rotation. Use for flat scrolls.
- **Logarithmic** — radius grows exponentially. Use for nautilus-like organic spirals.
- **Spheric, Torus** — 3D shapes (wrapping a sphere or donut). NOT flat spirals.

**Curve gotchas:**
- **Curves can't be UV-unwrapped** or accept most modifiers until converted to mesh. Always Convert → Mesh first.
- **After curve-to-mesh, run Merge by Distance** to clean up coincident vertices at endpoints (common Blender quirk).
- **For tubed-curve UV unwrap:** Smart UV Project with Angle Limit **89°** produces fewer/larger islands than the default 66° — cleaner for repeating-texture materials.
- **"Shape: 2D" constraint + rotation = collapse risk:** rotating a 2D-constrained curve in Edit Mode can flatten vertices to a line. Use Shape: 3D for safety, or only rotate in Object Mode (which moves the object, not the verts).

### Additional gotchas from Phase 2.3

- **Mouse-hover context for keyboard shortcuts.** Blender keyboard shortcuts are context-sensitive — they trigger based on what editor the mouse is OVER (not which one was last clicked). `Ctrl+P` (parent) and `U` (UV menu) and `K` (insert keyframe with menu) and `I` (insert keyframe via Keying Set) all only fire when mouse is over the 3D viewport. If a shortcut "does nothing," move mouse to the viewport first. This is THE most common beginner trap in Blender — internalize once, never forget.
- **Outliner selection conventions are OPPOSITE to Windows file manager.** Ctrl+click = individual toggle (add/remove individual item from selection). Shift+click = range select (selects everything between previous click and current click). Mixing them up will clobber your multi-selection.
- **Primitive Cap Fill Type — Triangle Fan vs N-Gon.** When creating cylinders/cones, the operator panel offers Cap Fill Type:
  - **N-Gon** caps create a single polygon face (clean for extrude-to-point operations).
  - **Triangle Fan** caps create N separate triangles meeting at a center vertex (looks similar but has DUPLICATE center vertices — N coincident verts where you'd expect one).
  - If you want to peak-extrude a cap's center vertex up to form a roof: pick N-Gon at creation, OR run Merge by Distance after creation to consolidate the coincident triangle-fan center verts.
- **Solidify thickness scales with mesh size.** The 0.02 thickness that worked perfectly on the mushroom may be invisible on a smaller mesh or absurdly thick on a larger one. Tune per asset; if outline looks too thin/thick, adjust thickness up/down in 0.005 increments.
- **Recalculate Normals Outside (Shift+N) fixes Solidify "outline appearing in wrong direction".** When the Solidify outline protrudes from the middle of a mesh (one face) instead of wrapping the silhouette, the mesh has inconsistent face normals (some pointing inward, some outward). Fix: Edit Mode → Select All → Shift+N (or Mesh → Normals → Recalculate Outside). Common cause: Bevel operations sometimes leave normals inconsistent. Optional: enable Face Orientation overlay (3D viewport overlays dropdown) to visually verify — blue = outward (good), red = inward (problem).
- **UV orientation is arbitrary at unwrap time.** Blender's Unwrap operator picks an orientation that often doesn't match your painting intent. After painting, if the texture appears upside-down or mirrored on the mesh: select the UV island in UV Editor, `Ctrl+M, Y` to mirror vertically (or X for horizontal). Alternative: add a Mapping node in the shader between Texture Coordinate and Image Texture; set Scale Y = -1.
- **Material Backface Culling in Blender 4.x is split into three sub-checkboxes** in Material Properties → Settings → Backface Culling:
  - Camera (controls viewport/render visibility)
  - Shadow (controls shadow ray visibility)
  - Light Probe Volume (controls light probe sampling)
  - For Outline_Black material: all three should be ON.
- **Mesh-to-mesh interpenetration is fine for static stylized assets.** Don't worry about meshes overlapping slightly at attachment points (rope into spiral, spiral into post, etc.). Each mesh unwraps independently; renderer's depth buffer handles which is in front per pixel. Slight overlap actually sells "this is connected" better than clean butt-joints.

### Workflow tip — iPad ↔ PC transfer via iCloud Photos folder

For Procreate texture iteration loops:
- Save UV layout PNGs from Blender into `C:\Users\[user]\iCloudPhotos\Photos\` on PC.
- PNGs sync to iPad Photos app automatically (~30 sec).
- Procreate imports from Photos directly.
- After painting: export from Procreate to Photos.
- Photos syncs back to PC iCloud folder.
- Reload texture in Blender via Shader Editor (right-click texture node → Reload, or File → External Data → Reload All).

Faster than PairDrop for repeated iteration loops in one direction; PairDrop still useful for non-Photos file types or one-shot transfers.

### Watercolor + cel-shader synthesis — confirmed shape

Procreate's watercolor brush family (Wet Acrylic, Wet Ink, Wash brushes) produces soft-edge color variation naturally — no special technique required, the brush IS the technique. When this watercolor base color runs through the Cel Node Group, the result is: **soft watercolor pools of color INSIDE each cel band, separated by HARD graphic boundaries at band edges.** Graphic novel meets watercolor illustration — closest visual sibling is Hades' material aesthetic.

This confirms the Colisi locked-style synthesis (Hades-leaning ink-line + cel-bands + Tang/Ghibli/Okami-leaning watercolor base color) works in practice on real authored assets.

### Style-anchor observation — Ghibli is load-bearing for worn/lived-in register

The four locked anchors are NOT equally applicable to all asset registers:
- **Hades (Jen Zee):** WRONG dominant anchor for worn-state environmental props. Its register is "freshly forged divine artifacts" — pristine, ornate-new, not weathered. Hades is the load-bearing INK-LINE + STRUCTURAL anchor (clean silhouettes, bold graphic shadow bands) but not the surface-treatment anchor for aged objects.
- **Tang (Sandara):** cool-frame/warm-figure logic works for register but doesn't directly address wear/age.
- **Okami:** painterly imperfect quality directly supports worn/aged register (brushy organic edges = visual wear).
- **Ghibli:** **THE load-bearing anchor for "lived-in / worn / takes-care-of" register.** Master of "this thing has been here forever and someone takes care of it." Howl's Castle exteriors, Spirited Away bathhouse, Princess Mononoke villages, Totoro forest paths — all proof.

**Rule of thumb:** for any worn-state environmental prop in Colisi, anchor primarily to Ghibli (form-language, lived-in feel) + Okami (painterly imperfection on surfaces) + Hades (ink-line + graphic structure). Tang for color/temperature logic. Hades-as-dominant is wrong for worn-state.

---

## Colisi lamppost design DNA (canonical record for variant work)

The first sign-lamp variant (Phase 2.3, silhouette #3) established these locked DNA elements that MUST survive every future progression version of the lamppost across all v_n states.

**Locked (constant across all versions):**
1. **Post style:** Slim slender magically-grown wooden column, tapered wider at base. Not built/milled — grown. Reads as "this came from a living tree, or was grown into shape by magic, not carpentered."
2. **Lamp head geometry:** Open-frame wooden-tine lantern with peaked cap, sits canonical UPRIGHT on top of post. In v1: some tines cracked/broken. In later versions: tines intact and regrown.
3. **Flame container:** Inside open lantern frame, flame visible directly through tine gaps. Container housing constant across all versions; flame contents evolve (v1 oil/orange traditional flame → v_mid magical witch-light → v_endgame enchanted-prismatic).

**Variable across progression versions:**
- Base shape (heals/regrows as magic returns to the world)
- Silhouette (slight downstream variation from base reshaping)
- Signature ornament (may only exist at v_endgame as visual reward — magical flourish, fire-sprite presence, blooming new growth)
- Sign attachment + state (for sign-lamp variants — plain-lamp variant has no sign)

**Variable per-instance within a single version:**
- Damage profile (every lamppost in the village has its own damage story; not one canonical look — broken brackets, leaning posts, missing pieces, more/less moss, etc.)
- Position/scale/rotation (placement variability)

**Two lamppost variants in scope for the project:**
- **Sign-lamp** (built in Phase 2.3 — has integrated wooden sign hanging from a wooden Archimedean scroll bracket)
- **Plain-lamp** (future variant — no sign, just post + lantern, simpler)

Both variants share the locked DNA; each can have its own damage profile per instance.

This DNA captured in [`handback-to-main-session.md`](handback-to-main-session.md) Seed 1 for promotion to SCOPE.md amendment or `/gsd:plant-seed` when Daniel returns to main GSD workflow.

### Reference render targets

For any future lamppost variant work, the v1 sign-lamp renders (saved at `D:\Projects\art-scratch\02-blender-fundamentals\lamppost\renders\`) serve as the reference target for:
- Watercolor wood texture treatment
- Cel-shader band density + outline thickness ratio
- Diegetic-damage cue level (cracks, gouges, broken tines)
- Day-lit vs night-lit lighting setup
- Emissive flame + Point Light + Bloom intensity calibration

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
