# Colisi

> Pronounced *COH-LIE-SIGH* (/koʊˈlaɪsaɪ/), an initialism of **CO**zy **LI**fe **SI**m.

A 3D narrative-driven cozy life sim, currently in early development. Built solo. Multi-year horizon.

**Project codename:** Colisi (the shipped game's title may evolve as the world and characters crystallize).

**Status:** Phase 1 of 12 — Foundations & Vision Lock. No playable game yet. The project is being built in public; planning artifacts, research, and roadmap live in this repo.

---

## What this is

Colisi is a cozy life sim aimed at players who love deep relationships, branching narrative, and crafting — but who consistently bounce off time-pressure systems, difficulty-curve walls, and "story ends → game ends" content cliffs that plague the genre. The design center is *characters and relationships that keep evolving, in a world that never punishes the player.*

The core fantasy, in the lead persona's own words: *"Talking to the people and finding where I fit in."*

---

## 🤖 AI use disclosure (please read)

This project is being built with AI assistance, but with strict limits on **what** AI is and isn't used for. We are publicly disclosing this from day one because the cozy / indie community is rightly skeptical of AI-generated content, and you deserve to know exactly what you are getting.

**Short version:**

- ✓ AI is used as a **tool** for code assistance, project planning, research synthesis, and design brainstorming.
- ❌ Colisi will ship with **zero AI-generated creative content**. Every visual asset, every audio asset, every line of dialogue, every name, every level, every public-facing piece of writing is human-authored.

**Read the full disclosure:** [`AI-DISCLOSURE.md`](AI-DISCLOSURE.md)

The detailed policy and enforcement mechanism (we hold ourselves accountable through the AI tool itself) lives in [`PHILOSOPHY.md`](PHILOSOPHY.md) Sections V and VIII.

This disclosure document is updated whenever AI usage scope changes. There will not be a silent change.

---

## Project documents

| Document | What it is |
|---|---|
| [`PHILOSOPHY.md`](PHILOSOPHY.md) | The project constitution — philosophy, guidelines, guardrails, processes, policy |
| [`AI-DISCLOSURE.md`](AI-DISCLOSURE.md) | Public-facing AI use disclosure |
| [`.planning/PROJECT.md`](.planning/PROJECT.md) | Current product context and active requirements |
| [`.planning/ROADMAP.md`](.planning/ROADMAP.md) | Phase structure (12 phases across 2 milestones) |
| [`.planning/REQUIREMENTS.md`](.planning/REQUIREMENTS.md) | v1 requirements with phase traceability |
| [`.planning/research/`](.planning/research/) | Foundational research artifacts |
| [`CLAUDE.md`](CLAUDE.md) | AI development partner brief and load-bearing rule set |

---

## Stack

- **Engine:** Godot 4.5.x
- **Language:** GDScript
- **3D pipeline:** Blender → glTF 2.0 → Godot
- **Dialogue:** Nathan Hoad's Dialogue Manager
- **Save:** Custom Resource with versioned schema
- **Source control:** Git + Git LFS, public repo
- **Distribution:** Steam + itch.io (v1)

Full stack details: [`.planning/research/STACK.md`](.planning/research/STACK.md)

---

## License

All Rights Reserved. The repository is public for development transparency, but content is not licensed for reuse. See [`LICENSE`](LICENSE).

---

## Contact / questions

If you have a question, concern, or accusation about anything in this project (especially regarding the AI use policy), please open a GitHub issue. Once a Discord exists, that will be the second channel.
