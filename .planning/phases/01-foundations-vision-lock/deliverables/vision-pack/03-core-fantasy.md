---
deliverable: 03
pack: vision
title: Core Fantasy Statement
author: Daniel
ai_role: structure-only
authored: 2026-05-10
depends_on:
  - 01-vision-pitch.md
  - .planning/research/PERSONA.md
decisions_referenced:
  - D-SCOPE-03
  - D-VISION-01
  - D-VISION-02
  - D-VISION-03
  - D-VISION-04
  - D-VISION-05
  - D-VISION-06
downstream_consumers:
  - 02-pillars-of-play.md (pillars must serve core fantasy)
  - 23-why-play-at-hour-200.md (retention engines must keep core fantasy alive)
  - 04-anti-positioning.md (each comparable's divergence section answers "how does Colisi serve the core fantasy where this comparable does not")
  - PROJECT.md "Core Value" line (cross-checked against this fantasy statement)
  - Phase 8 marketing copy (capsule line + Steam page derive from core fantasy)
---

> **AI POLICY (PHILOSOPHY.md §V):** Daniel authors all content in this file. Claude provides ONLY the section structure and refuses to draft prose. Claude critiques drafts when Daniel requests.

# Core Fantasy Statement — Colisi

> Per `D-SCOPE-03`: one paragraph + one capsule sentence answering "what is the player's core fantasy in this game — what does it feel like to be this character, in this world, doing these activities?"
>
> **Persona-zero anchor (citation, not authorship):** From `PERSONA.md`, Dawn's stated core fantasy is *"talking to people and finding where I fit in."* Per `D-VISION-06`, the locked premise satisfies this anchor: the sprite's whole purpose IS finding-where-it-fits with each villager. The core fantasy statement below resonates with this anchor without being a paraphrase of it.

---

## Capsule sentence

You're a curious wisp intent on helping a small village unlock their latent magical potential, creating an individual bond with everyone who lives there.

---

## Paragraph elaboration

After being alone for so long, you discovered this quaint village in passing. It's remote, isolated, but there's something special here. The villagers don't know it yet, but there is latent magical energy within every one of them, waiting to be freed. You just know if you work with each person, you'll be able to free that latent energy and improve their lives, and maybe even make some new friends. You also notice some budding romances you may be able to "Assist" with...

---

## Anchor: persona-zero core fantasy

This Core Fantasy is the synthesis of five verbatim statements from persona-zero (Dawn) during the structured persona interview on 2026-05-09 (`research/PERSONA.md`). Every word of the capsule and paragraph above is in service of these quotes:

> *"Talking to the people and finding where I fit in."*
> — Dawn, identified core gameplay loop (`PERSONA.md` line 110)

The entire game's central verb. The wisp's *intent on helping a small village... creating an individual bond with everyone who lives there* IS this quote translated into mechanics. Dawn's "finding where I fit in" maps directly to the wisp's belonging-after-loneliness arc in the paragraph above.

> *"It makes me feel like I'm less alone."*
> — Dawn, on Baldur's Gate 3 (`PERSONA.md` line 37)

The emotional anchor of *"After being alone for so long, you discovered this quaint village..."* The wisp's loneliness-into-belonging arc IS Dawn's *less alone* feeling, embodied as the player avatar.

> *"If I could find a game that was a cross of Baldur's Gate and the Sims, that would be perfect for me."*
> — Dawn, stated dream (`PERSONA.md` line 107)

The lineage statement that **D-VISION-06** turns into architectural commitment: the BG3 × Sims dream cross translates to mechanics specifically to deliver this fantasy. Sims-like world manipulation (engineering meet-cutes) → BG3-like dialogue branching (the conversations villagers then have). The dream cross IS the Core Fantasy delivery system.

> *"Interacting with the characters is what kept me coming back."*
> — Dawn, on Stardew Valley (her #1 game at 1000+ hours) (`PERSONA.md` line 73)

The retention proof. Dawn played Stardew for 1000+ hours despite *"very time-management based; punishing time-window mechanics"* (`PERSONA.md` line 74) — *because* of the relationship core. Colisi's persona-gap pivot is structural: keep the relationship core that worked, drop the time pressure that didn't. This Core Fantasy is what's preserved.

> *"Having control, building a life, seeing how I can affect the happiness of others with my choices."*
> — Dawn, on The Sims (`PERSONA.md` line 45)

The agency anchor for *"you'll be able to free that latent energy and improve their lives"* in the paragraph. The wisp's helping role is *the inversion* of the Sims' god-of-small-lives fantasy: rather than directly controlling villagers, the wisp catalyzes them into agency over themselves (D-VISION-02 latent magic surfacing through relationship; D-VISION-03 sprite gives, never accumulates).

### Architectural commitment

Per **D-VISION-06**: *"This is the BG3 × Sims dream cross translated to mechanics... Persona-zero's 'talking to people and finding where I fit in' core fantasy is satisfied: the sprite's whole purpose IS finding-where-it-fits with each villager."*

The five quotes above aren't just inspiration — they're the load-bearing requirement the entire game architecture is in service of. When Phase 3+ system designs are evaluated, *"does this serve Dawn's core fantasy?"* is the canonical test. A system that doesn't trace back to one of these five quotes is an orphan.

### Validation chain

- 2026-05-09 — Dawn co-developed the premise during `/gsd:discuss-phase 1`; D-VISION-05 records the persona-zero validation timestamp
- 2026-05-10 — Core Fantasy authored by Daniel (capsule + paragraph + anchor section)
- *Pending* — persona-zero session 1 (HEALTH-05): Dawn reads the Vision Pitch + this Core Fantasy doc; reaction logged at `.planning/playtest-log/{YYYY-MM-DD}-vision-pack-reaction.md`. Continuity check: *"Does this still feel like the game we co-developed?"*

---

## Cross-references

**Primary anchors:**
- `01-vision-pitch.md` — capsule sentence aligns with the pitch's central premise
- `02-pillars-of-play.md` — all 3 pillars (Character Development × Never Punishing × Approachability) serve this fantasy
- `.planning/research/PERSONA.md` — persona-zero corpus; the 5 anchor quotes above

**Locked decisions:**
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-SCOPE-03` (Core Fantasy structure); `D-VISION-01..06` (the locked premise serving this fantasy)
- `.planning/STATE.md` decisions log — 2026-05-09 vision lock; 2026-05-10 D-VISION-04 sharpening

**Downstream consumers:**
- `23-why-play-at-hour-200.md` — retention must protect this fantasy at hour 200; the four-engine retention strategy is in service of keeping the wisp's belonging-arc alive
- `04-anti-positioning.md` — each comparable's "we diverge" section answers *how does Colisi serve this Core Fantasy where this comparable does not?*
- `09-slice-scenario-sketch.md` — slice walkthrough must demonstrate the wisp's belonging arc (or a meaningful subset of it) within first 60 minutes
- `10-wow-beats.md` — every wow-beat candidate is tested against *"does this beat deliver on the Core Fantasy?"*
- `PROJECT.md` "Core Value" line — *"Characters and relationships that keep evolving, in a world that never punishes the player"* — cross-validates with this fantasy
- Phase 8 marketing copy — Steam page short description and trailer narration derive from the capsule sentence

**Persona-gap framing:**
- `.planning/research/SUMMARY.md` — *"evolving relationships in a world that never punishes you"* is the persona-gap pull-quote that this Core Fantasy delivers
