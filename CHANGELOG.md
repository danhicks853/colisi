# Changelog

All notable changes to Colisi will be documented in this file.

The format is based on [Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
starting at v0.1.0 (vertical-slice ship) and v1.0.0 (full game launch).

Phases 1-7 (pre-slice) are tracked here as **milestone entries**, not semver
releases — the project has no playable build yet. Once the vertical slice
ships publicly (Phase 8), every public release gets a semver version.

## [Unreleased]

### Added
- Phase 2 infrastructure files: `.gitignore`, `.gitattributes` (Git LFS), `.editorconfig`, `LICENSE` (All Rights Reserved + future-relicensing note), `CONVENTIONS.md` (Godot project conventions per D-INFRA-conv-1..4), `CONTRIBUTING.md` (solo-dev future-self conventions), `CHANGELOG.md` (this file)

### Changed
- `README.md` updated with setup-for-future-contributors section, project structure overview, and Phase 2 status (existing survey CTA + AI disclosure preserved)

## [Phase 1 milestone — Foundations & Vision Lock] - 2026-05-09 to (in progress)

> Phase 1 is a planning phase, not a code phase. No playable build was produced. Documents and decisions only.

### Added (decisions and documents)
- **Vision lock 2026-05-09**: Player is a magical helper-sprite; villagers each have their own magic that the sprite enables; matchmaking-via-environmental-manipulation is the central puzzle layer.
- **9-plan Phase 1 plan set** (7 complete + 01-07 partial as of 2026-05-11)
- **Vision Pack** (4 deliverables, plan 01-01): Vision Pitch, Pillars of Play, Core Fantasy, Anti-positioning
- **Risk/Capability/Process Pack** (7 deliverables, plan 01-02): Risk Register, Capability Matrix, Tools/Pipeline Ratification, Stack Ratification, Architecture Ratification, Persona-zero Ritual, Sustainable-pace Cadence
- **Loops & Journey Pack** (4 deliverables, plan 01-03): Core Loops, Player Journey, Pillar×Mechanic Matrix, Failure-mode Analysis
- **Scenario Pack** (3 deliverables, plan 01-04): Slice Scenario, Wow Beats, 30-second Elevator Demo
- **World & Style Pack** (3 deliverables, plan 01-05): World Bible v0.1, Mood Reference Deck, Style Guide v0.1
- **Decision Locks & Tripwires** (4 files, plan 01-06): Year-3-Wall tripwires doc, Hour-200 retention doc, Time-model lock, year3wall-comparable-games research note
- **MKTG-06 Validation** (plan 01-07, substantially complete 2026-05-11): 362 Steam reviews across 12 cozy life sims classified and Daniel-verified; survey published; verdict authoring pending
- **17 architectural commits** to SCOPE.md across Phase 1 (D-VISION-09 NG+ time-loop, D-VISION-10 HOME 3-layer, D-VISION-11 stray-cat companion, D-VISION-12 Spritesight, D-VISION-13 any-to-any matchmaking, D-VISION-14 bidirectional tonal arc, Pillar 3 polish-as-accessibility, Pillar 2 anti-clause extension, more)
- **27 REQUIREMENTS.md amendments** applied at Phase 1→2 transition
- GitHub repo at `https://github.com/danhicks853/colisi.git` (INFRA-03, done 2026-05-09)
- Public-facing survey at https://forms.gle/hnem8T62us8qn6qd7 (MKTG-06 data collection, started 2026-05-11)
- HEALTH-05 ritual established; persona-zero (Dawn) session 1 logged 2026-05-10

### Removed
- Procedural-template dialogue layer removed from Phase 9 scope (PROC-02 → Out-of-Scope per AI policy)
- Stardew-killer marketing framing explicitly out-of-scope

## [Project initialized] - 2026-05-09

### Added
- Initial repo structure under `.planning/`
- `PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`, `config.json`
- Research artifacts: `STACK.md`, `ARCHITECTURE.md`, `FEATURES.md`, `PERSONA.md`, `PITFALLS.md`, `SUMMARY.md`
- Root-level governance: `PHILOSOPHY.md`, `AI-DISCLOSURE.md`, `CLAUDE.md`, `README.md`, `DEV-ENVIRONMENT.md`

---

## Versioning policy

- **v0.0.x**: Pre-slice (Phases 1-7). Internal-only milestones tracked here.
- **v0.1.0**: First public vertical slice (Phase 8 Steam page launch + Next Fest demo).
- **v0.1.x**: Slice patches before full-game development resumes.
- **v0.2.x → v0.9.x**: Milestone 2 content scaling milestones (Phases 9-11).
- **v1.0.0**: Full game launch (Phase 12).
- **v1.x.x**: Post-launch content updates and patches.
- **v2.x.x**: Major content expansion if commercially warranted.

See [`.planning/ROADMAP.md`](.planning/ROADMAP.md) for phase definitions.

## Format

Each release section uses Keep a Changelog v1.1.0 subsection types:

- **Added** — new features
- **Changed** — changes in existing functionality
- **Deprecated** — soon-to-be-removed features
- **Removed** — removed features (with rationale)
- **Fixed** — bug fixes
- **Security** — vulnerabilities fixed

For pre-slice milestone entries (Phases 1-7), the same subsections apply to decisions, documents, and process changes — not yet to features users can experience.
