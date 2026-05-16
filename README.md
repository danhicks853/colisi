# Colisi

> # 📋 PLAYER RESEARCH SURVEY — TAKE 5 MINUTES TO HELP SHAPE THIS GAME
>
> ## **→ [TAKE THE SURVEY](https://forms.gle/hnem8T62us8qn6qd7) ←**
>
> If you play cozy games or life sims, your input would mean a lot. The survey is anonymous, takes ~5–10 minutes, and helps validate (or correct) the player-research thesis this game is being designed around. **No game pitch — just questions about what you like and what makes you bounce off cozy games.**
>
> Survey link: https://forms.gle/hnem8T62us8qn6qd7

---

> Pronounced *COH-LIE-SIGH* (/koʊˈlaɪsaɪ/), an initialism of **CO**zy **LI**fe **SI**m.

A 3D narrative-driven cozy life sim, currently in early development. Built solo. Multi-year horizon.

**Project codename:** Colisi (the shipped game's title may evolve as the world and characters crystallize).

**Status:** Phase 2 of 12 — Infrastructure & Repo Setup (Phase 1 substantially complete; MKTG-06 verdict + Greenlight remaining). No playable game yet. The project is being built in public; planning artifacts, research, and roadmap live in this repo. See [`.planning/STATE.md`](.planning/STATE.md) for live status.

---

## What this is

Colisi is a cozy life sim aimed at players who love deep relationships, branching narrative, and crafting — but who consistently bounce off time-pressure systems, difficulty-curve walls, and "story ends → game ends" content cliffs that plague the genre. The design center is *characters and relationships that keep evolving, in a world that never punishes the player.*

The core fantasy, in the lead persona's own words: *"Talking to the people and finding where I fit in."*

---

## Setup for future contributors

If you are future-Daniel on a fresh machine, or an outside contributor with a green light (see [`CONTRIBUTING.md`](CONTRIBUTING.md) for the contribution process — outside PRs require an issue first):

1. **Install the locked toolchain.** See [`DEV-ENVIRONMENT.md`](DEV-ENVIRONMENT.md) for the complete required-tools list with installation commands (Godot 4.5.2, Blender 4.5 LTS, Git, Git LFS, VS Code + godot-tools extension).
2. **Clone the repo with LFS:**
   ```powershell
   git lfs install
   git clone https://github.com/danhicks853/colisi.git
   cd colisi
   git lfs pull
   ```
3. **Read the load-bearing docs in order:** [`PHILOSOPHY.md`](PHILOSOPHY.md) (project constitution) → [`CLAUDE.md`](CLAUDE.md) (load-bearing rules + AI policy) → [`CONTRIBUTING.md`](CONTRIBUTING.md) (workflow + commit conventions) → [`CONVENTIONS.md`](CONVENTIONS.md) (Godot project folder structure + naming).
4. **Verify your environment** using the verification block at the bottom of [`DEV-ENVIRONMENT.md`](DEV-ENVIRONMENT.md).

No Godot project exists yet (Phase 3 creates it). Once it does, the launch command will be `& 'D:\godot\Godot_v4.5.2-stable_win64.exe' --path D:\Projects\game` (adjust paths to your install).

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
| [`CONVENTIONS.md`](CONVENTIONS.md) | Godot project folder structure + naming conventions (Phase 2+) |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Workflow, commit conventions, AI policy summary |
| [`CHANGELOG.md`](CHANGELOG.md) | Milestone + release log (Keep-A-Changelog format) |

---

## Project structure

High-level overview of what lives where in this repo:

```
colisi/
├── README.md                  ← This file
├── PHILOSOPHY.md              ← Project constitution
├── CLAUDE.md                  ← Load-bearing rules + AI partner brief
├── AI-DISCLOSURE.md           ← Public AI use disclosure
├── CONTRIBUTING.md            ← Workflow + commit conventions
├── CONVENTIONS.md             ← Godot project folder structure + naming
├── CHANGELOG.md               ← Milestone + release log (Keep-A-Changelog)
├── LICENSE                    ← All Rights Reserved
├── DEV-ENVIRONMENT.md         ← Local-machine setup procedure
├── .gitignore                 ← Godot-tuned ignores
├── .gitattributes             ← Git LFS binary tracking
├── .editorconfig              ← Cross-editor consistency
├── .github/                   ← CI workflows (godot-import-check)
├── .planning/                 ← Planning artifacts (GSD)
│   ├── PROJECT.md
│   ├── REQUIREMENTS.md
│   ├── ROADMAP.md
│   ├── STATE.md
│   ├── SCOPE.md               ← Architectural-decision log (HEALTH-01)
│   ├── slice-debt.md          ← Shortcut log (HEALTH-02)
│   ├── research/              ← Foundational research
│   ├── phases/                ← Per-phase planning artifacts
│   └── playtest-log/          ← Persona-zero (HEALTH-05) session logs
└── (Godot project, created in Phase 3 at the repo root level)
```

Conventions for the future Godot project: see [`CONVENTIONS.md`](CONVENTIONS.md).

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
