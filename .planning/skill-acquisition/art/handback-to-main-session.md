# Handback to Main Colisi Session

> Breadcrumbs from the art skill-acquisition thread. When art training pauses or closes, Claude (or future-Daniel) reads this file to surface open threads for the main GSD workflow. Update as new handback-worthy items emerge during art sessions.

---

## Seeds to plant via `/gsd:plant-seed`

Daniel surfaced these creative directions DURING the Phase 2.3 lamppost session (2026-05-15). They are NOT in scope for art training. They need to be captured as proper seeds with trigger conditions so they emerge at the correct phase.

### Seed 1: Asset-progression-as-story-progression with diegetic damage

**Daniel's framing (verbatim, accumulated across the Phase 2.3 lamppost session):**
> "every asset in the game solowly gets nicer / more magical as the game story progresses... it will always be the 'same' lamppost"
>
> "the villagers won't have to light it and put it out anymore later!"
>
> [on silhouette #1, illustrating the diegetic-damage language] "without damage, the lantern would be upright at the top of the post, that's broken and hanging by a thread, but they just keep lighting it upside down!"
>
> [on silhouette #3, the design that won the round] "this was grown like this and it's starting to crack"

**The design language Daniel committed to (4 layers):**

1. **Distinct asset versions, not shader-progression on a single mesh.** Each progression version is its own `.glb` file. "Same lamppost" feeling preserved via locked design DNA across versions.

2. **Diegetic damage with narrative intent.** v1 lampposts are not just "weathered" — they are *specifically broken* in ways that TELL A STORY. Players read damage as world-state, not noise. Three damage philosophies were explored as competing silhouettes:
   - **#1 (rejected):** Bracket broken, lantern dangling, villagers cope by lighting upside-down — "village pragmatism, broken physical infrastructure"
   - **#2 (rejected):** Tree-branch broken, sign nailed directly to salvage trunk — "village pragmatism, nature-touched"
   - **#3 (WON):** Magically-grown wooden lamppost is cracking, broken lantern tines — "broken MAGIC infrastructure, magic is receding from the world"
   - Silhouettes #1 and #2 are captured as alternate design ideas in [technique-notes.md](technique-notes.md) for future variant work but are NOT being built.

3. **Variable damage across instances within a single version.** Daniel committed (100% confirmed) — every v1 lamppost in the village has a DIFFERENT damage profile. Today's Phase 2.3 build (silhouette #3) is one canonical damage configuration. Future sessions will design additional v1 variants for placement variability.

4. **Progression-state mapping for the lamppost specifically:**
   - **v1 (today's Phase 2.3 build):** Magically-grown wooden lamppost with cracks in trunk, broken lantern tines, oil flame visible through open frame, manually lit/extinguished by villagers
   - **v_mid stages:** Cracks beginning to heal, tines regrowing, possibly flame transitioning toward magical
   - **v_endgame:** Vibrant healed wood (possibly sprouting/blooming new growth), magical flame, no manual lighting needed, possibly fire-sprite presence (see Seed 2)
   - Each v-state is a separate `.glb`, shared design DNA

**Design DNA (refined through Phase 2.3 — must survive every version):**
- **Post style:** Slim slender *magically-grown* wooden column, tapered wider at base
- **Lamp head geometry:** Open-frame *wooden-tine* lantern with peaked cap, sits CANONICAL upright on top of post. In v1 some tines are cracked/broken; later versions show intact + regrown tines.
- **Flame container:** Inside the open lantern frame, flame visible directly through tine gaps. Container housing is constant across versions; flame contents evolve (oil → witch-light → enchanted).

**Variable across versions:**
- Base shape (heals/regrows with returning magic)
- Silhouette (slight downstream variation)
- Signature ornament — may only exist at endgame (blooming growth? magical flourish? fire-sprite presence?)
- Sign attachment + state (for sign-lamp variants specifically)

**Setting / lore implication — NEW commitment surfaced during silhouette #3 critique:**

Sterling's lampposts were **grown, not built.** This was Daniel's explicit framing for silhouette #3 ("this was grown like this") and is now a setting-level commitment, not just an aesthetic. Implications that need addressing at PROJECT.md / SCOPE.md amendment time:
- Sterling's world has (or had) magic that grew functional infrastructure
- Magic has receded; grown infrastructure is now cracking/failing
- As magic returns, grown infrastructure heals
- **Open questions:** Who or what grew the lampposts originally? Is OTHER infrastructure also grown vs. built? Does Sterling's architecture have a mix of grown + built elements? Daniel has NOT extended the "grown" framing beyond lampposts — that's a separate decision when this seed promotes.

**Trigger condition — potentially elevated from plant-seed to SCOPE.md amendment candidate:**

Originally framed as "plant for whenever world-mechanics / environmental-art systems get planned." Given the depth of design language now committed (diegetic damage + per-instance variability + grown-vs-built lore + progression-state arc tied to magic-return core loop), this may warrant elevation to direct PROJECT.md / SCOPE.md / REQUIREMENTS.md work rather than parking-lot status. The v1 lamppost will exist as a reference proof-of-concept after Phase 2.3 closes. **Daniel's call at handback time** — promote to active scope, or leave as seed.

**Claude's analytic note (NOT Daniel-authored, for context only):**

This design language is now load-bearing for an apparent "magic returns to the world" core loop. Comparable cozy-genre references: Cozy Grove (color-returns), Spiritfarer (island-grows), A Short Hike (visible-area-unlock). The "diegetic damage that heals" pattern is a specific subspecies — visible repair of broken-but-loved infrastructure driven by player action.

If this is in fact a core loop and not an environmental flourish, the authoring discipline implication is significant: **every environmental asset Daniel builds going forward should be designed with progression states in mind** — even props that aren't lampposts. This is not a small commitment; surface at the next setting/scope review.

### Seed 2: Fire sprite returns to village

**Daniel's framing (verbatim):**
> "Maybe even a small fire sprite that returns to the village after a certain amount of magic has returned!!!"

**Trigger condition for the seed:** Whenever character design / NPC roster work happens, OR after Seed 1's magic-restoration mechanic gets defined (since the sprite's return is gated on "enough magic returned" — that gate has to exist first).

**What is explicitly NOT decided (Daniel must author when the seed surfaces — Claude will not pre-author):**
- The sprite's name
- Its personality / behavior / role
- What "enough magic" means as a quantifiable trigger
- Whether it has dialogue (and what that dialogue is)
- Its visual design
- Whether it's an NPC, background charm, or gameplay-effecting entity

**Claude instruction at promotion time:** Do NOT design, name, or pre-author this sprite. Daniel authors. Claude may only brainstorm options if Daniel explicitly asks for them.

---

## Other open art-session threads (Phase 2.3 closed — items below are for handback to main GSD)

- **Capability matrix amendments pending** — propose six rows for `16-capability-gap-matrix.md` on return to main GSD:
  - "Blender 3D modeling" — advance to advanced (multi-mesh hierarchy + topology cleanup with damage + curve-based modeling)
  - "Cel-shading shader development" — established (reusable Cel Node Group proven across mushroom + lamppost)
  - "Hand-painted texture work (Procreate)" — established (5 textures painted with watercolor brush family)
  - **NEW row:** "Blender Action Editor / glTF animation" — basic (first authored animation; cyclic F-Modifier)
  - **NEW row:** "Emissive lighting in Eevee" — basic-established (Emission + Point Light + Bloom + Shadow disable recipe proven)
  - **NEW row:** "Blender curves (Bezier + parametric spirals)" — basic (curve-to-mesh for organic tubular shapes)
- **Phase 2.3 lamppost session — COMPLETE.** Magic-receding wooden sign-lamp (silhouette #3) shipped to `D:\Projects\art-scratch\02-blender-fundamentals\lamppost\` with day-lit + night-lit Eevee renders. Full session record in [`learning-log.md`](learning-log.md) Session 08-N. All techniques + gotchas + design DNA captured in [`technique-notes.md`](technique-notes.md) §Phase 2.3 additions.
- **Phase 2 module — COMPLETE.** All three modules (2.1 donut, 2.2 mushroom, 2.3 lamppost) closed. Daniel has reflexively-internalized the locked-style Blender prop pipeline plus three extensions (multi-mesh hierarchy, emissive lighting, authored animation).
- **Phase 2.3 design-DNA captured** — locked DNA for Colisi lampposts (post style + lamp head geometry + flame container) in [`technique-notes.md`](technique-notes.md) §Colisi lamppost design DNA. Variable per-instance damage commitment also captured. Reference for future variant work.
- **Alternate-design records captured** in [`technique-notes.md`](technique-notes.md) and Seed 1 above — silhouettes #1 (cross-arm asymmetric, broken-bracket) and #2 (tree-trunk organic, rope-improvised) recorded for future variant lamppost design work even though not built today.
- **Style-anchor observation captured** in [`technique-notes.md`](technique-notes.md) §Phase 2.3 additions — Ghibli is the load-bearing anchor for "lived-in / worn / takes-care-of" register; Hades is the wrong dominant anchor for worn-state props (Hades is for ink-line + structural anchor, not surface-treatment of aged objects).
- **Parallel-anchor question still pending:** Ni no Kuni added to PureRef study board during Phase 1.1; canonicalizing as a mood-deck anchor would require SCOPE.md amendment. Decision deferred. No urgency.
- **Procedural runtime sway vs authored Blender animation** — Phase 2.3's swinging-sign work uses authored Blender animation as the learning artifact. In shipped Colisi, runtime procedural sway in Godot is the better pattern (avoids all path-lamp signs swinging in robotic lockstep). Slice-debt entry candidate; surface at Phase 4 Godot import/scene work.
- **Workflow tip captured for future texture iteration:** iCloud Photos folder works as bidirectional PC ↔ iPad transfer shortcut for Procreate iteration loops (save to `C:\Users\[user]\iCloudPhotos\Photos\`, syncs to iPad Photos, Procreate imports from there). Faster than PairDrop for repeated iterations.

## Suggested handback sequence (Daniel's call when ready)

When returning from art training to main GSD workflow:

1. **Run `/gsd:plant-seed`** on both seeds above. Seed 1 (asset-progression with diegetic damage + "grown not built" lore) may warrant elevation to SCOPE.md amendment rather than parking-lot status given depth of commitment. Seed 2 (fire sprite) stays as seed with explicit "Claude must not pre-author" instruction at promotion time.
2. **Capability matrix amendments** via GSD edit of `16-capability-gap-matrix.md` — six rows listed above.
3. **Decide on syllabus next-step:** Phase 3 (modular architecture kit-bash) is next in art syllabus, OR pause art training and return to main GSD threads (survey-distribution Task 3, REQUIREMENTS/PROJECT work, etc.).
4. **Consider:** does the "Sterling's lampposts were grown, not built" framing extend to other infrastructure (buildings, fences, doorways, signs in general)? If yes, SCOPE.md amendment to lock the "grown-vs-built" world property. If no, keep scoped to lampposts only. Daniel-authored decision.
