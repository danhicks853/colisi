# AI Use Disclosure — Colisi

> **Last updated:** 2026-05-09
> **Authoritative source:** `PHILOSOPHY.md` Section V. This document is the public-facing summary; the detailed policy lives in PHILOSOPHY.md.

## TL;DR

**Colisi is being built with AI as a planning and code-assist partner. Colisi will ship with zero AI-generated creative content** — every visual asset, every audio asset, every line of dialogue, every name, every level, every public-facing piece of writing is human-authored.

We are publicly disclosing this because:

1. The cozy / indie community is rightly skeptical of AI-generated content, and we want our players to know exactly what they are getting.
2. Steam's storefront policy requires AI usage disclosure; we exceed that policy voluntarily.
3. Transparency is a value we are committing to from day one of the project, not a feature we bolt on at launch.

---

## What AI is used for in this project

AI (specifically: Claude, used through Claude Code as a development environment) is used as a **tool** to support the human author of this game. Specifically:

### ✓ Code

- Code autocomplete, refactor suggestions, bug-finding, lint help.
- Boilerplate code generation (file scaffolds, test harness setup).
- **Discipline rule:** every committed line of code is understood and approved by the developer. AI does not own architectural decisions.

### ✓ Project planning

- Project planning artifacts: `PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `PHILOSOPHY.md`, this disclosure document, GSD workflow documents.
- Research synthesis: stack research, feature research, architecture research, pitfalls research, summary documents.
- These are not shipped product. They are tool output reviewed and edited by the developer.

### ✓ Brainstorming and critique

- "What are some possibilities for developing this character?" — yes. *General* idea-generation prompts.
- "Critique this dialogue draft I wrote." — yes. AI may suggest improvements to drafts the developer wrote.
- "Rewrite this dialogue for me." — no. Drafting authorial content is not allowed.

### ✓ Tooling and workflow

- Build automation scripts, deploy scripts, asset-pipeline glue scripts.
- Localization assist (machine translation as a starting point for human translator review; every shipped line reviewed by a human translator).
- Help learning a creative tool (Blender, LMMS, Aseprite, etc.) so the developer can create assets himself.
- Help locating human-creator resources (CC0 asset packs, paid artists/composers, freelancers).

### ✓ Enforcement of these rules

Claude is given an explicit enforcement role: refuse to generate prohibited content even when asked, surface near-violations as slice-debt, and prevent rule-bending out of fatigue. This relationship is itself disclosed.

---

## What AI is NOT used for in this project

The following are **never** AI-generated in Colisi. No exceptions, no "just for the slice," no placeholders.

### ❌ All visual assets

- Sprites, textures, 3D models, UI art, particle effects, animation, character art, environment art, icons.
- Concept art, mood boards, reference art — even if never shipped.

### ❌ All audio

- Music, sound effects, voice acting, ambience.

### ❌ All in-game writing

- Every dialogue line, every item description, every menu copy string, every journal entry, every tooltip.
- Every character name, NPC name, place name, item name, mechanic name.

### ❌ Procedural-template dialogue at runtime

- Mad-Libs-style templates that fill from world state at runtime are off the table, even though templates would be human-authored. The produced lines must be hand-written.

### ❌ Level design and core gameplay loops

- Level layouts, mechanic design artifacts, gameplay-loop designs.
- AI may be a design *brainstorming partner*; AI may not be the *designer of record*.

### ❌ Public-facing creative writing

- Steam page copy, capsule descriptions, trailer narration.
- Devlog posts, marketing tweets, community posts.
- The voice of the project must be the developer's voice. AI prose is detectable, and the cozy community is rightly allergic to it.

### ❌ Suggested names (unsolicited)

- AI may not proactively suggest names for in-game entities. AI may respond to explicit "give me 10 ideas" prompts as a brainstorming tool, but the choice and the final name is always the developer's.

---

## Why this policy exists

### Player respect

Our target players value human craft. The persona research (qualitative interview + corroborated by external community sources: Stardew forum complaints, "cozy without time limits" lists, mod evidence, industry essays) shows that this demographic disproportionately values stories, characters, music, and art that come from a real person's hand. Generative AI content is precisely what would feel hollow to them.

### Ethical concerns about training data

Generative AI for creative content (art, music, prose) is trained on works whose creators were not asked, paid, or credited. That ethical problem is unresolved. We will not benefit from it in the shipped product.

### Reputation asymmetry

For a small indie game, even one accusation of AI-generated content — even partially true — can sink a launch in the cozy demographic. The reputation downside is asymmetric. Holding the line is cheap; not holding it is project-killing.

### Steam policy

Steam requires AI disclosure on store pages. We exceed that policy voluntarily by publishing this document at the repo root, before launch, and updating it as the project evolves.

### Transparency as a value

We commit to transparency from day one of the project, not as a launch-week feature. Public repo. Public disclosure document. Public devlog. We would rather you disagree with us in public than discover something we hid.

---

## How we enforce this

This is a solo-developer project. Self-discipline is the only line of defense, which is fragile across a 4-6 year horizon. Therefore:

1. **Claude (the AI tool we use for development assistance) is given an explicit enforcement role.** Claude refuses requests to generate prohibited content, surfaces near-violations, and pushes back on rule-bending out of fatigue. This is documented in `CLAUDE.md` and `PHILOSOPHY.md` Section VIII.
2. **Monthly retros include an AI-leakage audit.** Any AI-generated content that may have slipped into a player-facing or public artifact gets flagged for replacement.
3. **Commit messages disclose AI assistance.** Substantive AI-assisted commits are tagged.
4. **The amendment process is deliberate.** Changing the AI policy requires a logged rationale in `SCOPE.md` and a 30-day cooling-off period before taking effect. We don't relax rules in the heat of a difficult phase.

---

## What changes if this policy changes

If we ever amend this policy, we will:

1. Update this document.
2. Update `PHILOSOPHY.md` Section V.
3. Disclose the change in a public devlog post.
4. Make the change visible in the next Steam page update.
5. Date and rationale-log the change in `SCOPE.md`.

There will not be a silent change.

---

## Questions, concerns, or accusations

If you believe Colisi has shipped or is using AI-generated content in a way inconsistent with this disclosure, please open an issue on the GitHub repo or reach out via the project's Discord (when established). We will investigate and respond publicly.

---

*This document is updated whenever AI usage scope changes. The detailed policy lives in `PHILOSOPHY.md` Section V. The enforcement role lives in `PHILOSOPHY.md` Section VIII and `CLAUDE.md`.*
