# GitHub Actions workflows

Workflows running on this repository.

## Active workflows

| Workflow | File | Trigger | Purpose | Active phase |
|---|---|---|---|---|
| Godot import check | `godot-import-check.yml` | push + PR to main; manual | Verify `godot --headless --import` succeeds — catches scene/script/resource import errors before they ship | Scaffolded Phase 2; activates Phase 3 when `project.godot` lands |

## Why workflows live here

GitHub Actions provides free unlimited minutes on public repositories. The `godot-import-check` workflow uses Linux-based runner (Godot's Linux build matches the same engine version as Daniel's Windows pin per `DEV-ENVIRONMENT.md`).

## Scaffold-vs-active pattern

`godot-import-check.yml` is **scaffolded** during Phase 2 (`INFRA-09`) — the workflow file is present, but its first step detects whether `project.godot` exists at repo root. If not, all subsequent steps are skipped. This avoids the awkward path of "create CI workflow that immediately fails because there's no project" or "wait until Phase 3 to scaffold."

When Phase 3 lands `project.godot`, the workflow activates automatically on the next push.

## Engine version pin

The workflow's `GODOT_VERSION` env variable must stay in sync with `DEV-ENVIRONMENT.md` §"Godot — 4.5.x non-mono (pinned)". Bump the workflow's pin only during phase-boundary engine upgrades per `PHILOSOPHY.md` Amendment Process. Never mid-phase.

Current pin: **Godot 4.5.2 stable** (non-mono).

## Future workflows (deferred per ROADMAP)

- `itch-publish.yml` — automate `butler push` to itch.io. Deferred to ~Phase 8 (Steam Page Launch + Public Demo) per `STACK.md` §"Build & Distribution Pipeline → itch.io".
- `steam-publish.yml` — automate Steam depot upload. Deferred to ~Phase 8 / Phase 11 (Pre-Launch Marketing) once Steam Direct registration completes.
- `gut-tests.yml` — run GUT unit tests. Deferred to ~Phase 3 when first tested system (save/load round-trip) lands.

## Modifying a workflow

1. Make the YAML change on a branch (or directly on main per `CONTRIBUTING.md` §4 trunk-based model).
2. Push and watch the Actions tab.
3. If the workflow itself fails on the change, the previous version is the most recent passing run — `git revert` if needed.

## License + secrets

Workflows do not require any GitHub secrets at this time. Phase 8+ itch.io / Steam workflows will use `BUTLER_API_KEY` and Steam-equivalent secrets — added to GitHub Settings → Secrets at that phase.
