# Colisi — Development Environment

> **Purpose:** Canonical record of how to set up a development environment for Colisi. This is the document a future-you on a new machine, or a future contributor, follows from a fresh OS install to a working dev setup.
>
> **Authority:** This document is reference for local-machine setup. The locked stack lives in [`.planning/research/STACK.md`](.planning/research/STACK.md). When STACK.md and this document conflict, STACK.md is authoritative for *what* to install; this document records *how* and *where* on a real machine.
>
> **Status:** Reflects machine state as of 2026-05-09. Updated whenever local-machine setup changes.

---

## Quick start (fresh machine)

If you already have the locked stack installed, skip to [Per-project setup](#per-project-setup).

```powershell
# 1. Install required tools (PowerShell, Windows 11+)
winget install --id Git.Git --exact --silent
winget install --id GitHub.GitLFS --exact --silent
winget install --id Microsoft.VisualStudioCode --exact --silent
winget install --id BlenderFoundation.Blender.LTS.4.5 --exact --silent
winget install --id GitHub.cli --exact --silent

# 2. Download Godot 4.5.x non-mono manually (winget does not have a current 4.5 listing)
#    See "Required tools — Godot" below for the URL and placement.

# 3. Install VS Code Godot extension
code --install-extension geequlim.godot-tools

# 4. Clone the project and configure LFS
git clone https://github.com/danhicks853/colisi.git D:\Projects\game
cd D:\Projects\game
git lfs install   # one-time, per machine
git lfs pull
```

Then verify with the [Verification](#verification) section at the bottom.

---

## Required tools

These are the tools the project locked stack depends on. Without these, you cannot build, test, or contribute to Colisi.

### Godot — 4.5.x non-mono (pinned)

- **Locked version:** `4.5.x` non-mono (see [`STACK.md`](.planning/research/STACK.md))
- **Currently installed:** `4.5.2-stable` non-mono at `D:\godot\Godot_v4.5.2-stable_win64.exe` (build commit `6ce3de25a`, 2026-03-19)
- **Why this version:** Stability over recency. 4.5 has had ~4 maintenance patches; 4.6 was released 2026-01 and we wait for its 4.x.x patches before considering migration. Pinning to one stable branch for the slice phase reduces engine-change debugging.
- **Why non-mono:** Project is GDScript-only. Mono build adds C# / .NET tooling we will never use.
- **Install:** Manual download — winget has 5.x and 4.6 listings only.
  - Download URL: <https://github.com/godotengine/godot-builds/releases/download/4.5.2-stable/Godot_v4.5.2-stable_win64.exe.zip>
  - Extract `Godot_v4.5.2-stable_win64.exe` to `D:\godot\`
  - The 4.6-stable mono build (already at `D:\godot\` as of audit) may stay alongside — Godot is portable; multiple versions coexist. The project's `.exe` is determined by which one you launch.
- **Upgrades:** Engine version upgrades are a phase-boundary action only, with explicit rationale in `SCOPE.md` per the Amendment Process in [`PHILOSOPHY.md`](PHILOSOPHY.md). Never mid-phase.

### Blender — LTS 4.5.x

- **Locked version:** Latest LTS (currently `4.5 LTS` line)
- **Currently installed:** `4.5.5 LTS` at `C:\Program Files\Blender Foundation\Blender 4.5\blender.exe` (build date 2025-11-18, build commit 2025-11-17)
- **Why LTS:** ~2 years of bug-fix support. 4.5 LTS supported through ~2027, fits the slice timeline cleanly.
- **Install:** `winget install --id BlenderFoundation.Blender.LTS.4.5 --exact --silent`
- **PATH:** Not on PATH by default after winget install. Godot will call Blender by full path via Editor Settings (configured in Phase 3).
- **Add to PATH (optional):** add `C:\Program Files\Blender Foundation\Blender 4.5\` to system PATH if you want `blender` available in any shell.

### Git + Git LFS

- **Currently installed:** Git `2.52.0.windows.1`, Git LFS `3.7.1`
- **Per-machine init:** `git lfs install` (one-time per machine — sets the global hooks)
- **Per-repo:** `.gitattributes` in the repo defines what's tracked by LFS. Configured in Phase 2 (INFRA-01).
- **Why LFS:** Binary assets (textures, models, audio) bloat regular git history catastrophically. LFS keeps the working tree small and the history navigable. Configured *before* the first binary asset is committed.
- **Quota:** GitHub free tier provides 1 GB LFS storage + 1 GB/mo bandwidth. Sufficient for ~6 months of binary asset commits at solo-dev pace; budget $5/mo Data Pack when exceeded.

### VS Code (with Godot extension)

- **Currently installed:** Visual Studio Code `1.113.0` (with `1.119.0` staged for next launch) at `C:\Users\danhi\AppData\Local\Programs\Microsoft VS Code\`
- **Required extension:** `geequlim.godot-tools` (v2.6.1+) — Godot script syntax, debugging, LSP integration
- **Install command:** `code --install-extension geequlim.godot-tools`
- **Role:** Secondary editor. Godot's built-in editor is the primary editor for scenes / nodes / inspector work. VS Code is preferred for long script edits, multi-file refactors, and git operations.
- **Configuration:** `.editorconfig` and `.vscode/` settings will be committed in Phase 2 (INFRA-07).

---

## Recommended tools (not blocking, but valuable)

### GitHub CLI (`gh`)

- **Currently installed:** `2.89.0`
- **Use cases:** Listing/creating issues, fetching releases (used during this setup to find Godot binaries), interacting with Actions runs.
- **Install:** `winget install --id GitHub.cli --exact --silent`

### Node.js

- **Currently installed:** `v24.12.0`
- **Use case:** Running CLI tools (the GSD planning workflow uses Node-based tooling); occasional helper scripts.
- **Not strictly required** for game development itself.

---

## Tools to defer

These tools have specific install windows in the roadmap. Don't install them now; install them when needed.

| Tool | Install when | Purpose |
|---|---|---|
| `butler` (itch.io CLI) | Phase 8 (Steam Page Launch + Public Demo) | Pushes builds to itch.io. Not needed before public demo ships. |
| GodotSteam GDExtension | ~6 months pre-launch (within Phase 12) | Steam achievements, cloud saves, Steam Input. Wrapped behind `SteamService` autoload. |
| GUT (testing addon) | Phase 3 (Project Skeleton & Foundational Systems) | GDScript unit tests — installed *into* the Godot project, not the dev machine. |
| Dialogue Manager (addon) | Phase 3 | Same — installed into the Godot project as an editor plugin. |
| Audio production tooling (LMMS / REAPER trial / Bosca Ceoil) | Phase 6 (Slice Content Production) | Music creation. Defer until it's actually needed for slice content. |
| 2D art tooling (Aseprite / Krita / GIMP) | Phase 6 if needed | UI iconography. Krita and GIMP are free; Aseprite is paid (~$20). Defer the choice. |

---

## Tools NOT to install on this machine for Colisi work

Per [`PHILOSOPHY.md`](PHILOSOPHY.md) Section V and [`AI-DISCLOSURE.md`](AI-DISCLOSURE.md), the following are anti-stack for this project:

- ❌ **Unity, Unreal, GameMaker** — wrong engine. Locked at Godot 4.5.x.
- ❌ **AI image generation tools** for project use (Midjourney clients, Stable Diffusion, Adobe Firefly, ComfyUI, etc.) — including "for reference only." Even reference-art generation is forbidden by AI policy.
- ❌ **AI music generation tools** for project use (Suno, Udio, etc.).
- ❌ **AI dialogue / writing generation for game content** — Claude Code and similar coding-assist tools are fine for code; using them to draft player-facing writing is forbidden.
- ❌ **Paid Synty / Polygon asset packs** at MVP — budget mismatch; CC0 alternatives (Kenney, Quaternius, KayKit) cover slice needs.

If you have any of these installed on the machine for *other* projects, that's fine, but they are not part of Colisi's workflow. Don't accidentally pull a generated asset into the project.

---

## Disk layout

This is the recommended physical layout for Colisi-related files on disk. Adjust as needed but document deviations.

```
D:\
├── godot\
│   ├── Godot_v4.5.2-stable_win64.exe          ← project's pinned engine
│   ├── Godot_v4.5.2-stable_win64_console.exe
│   ├── Godot_v4.6-stable_mono_win64.exe       ← pre-existing, not used by this project
│   └── Godot_v4.6-stable_mono_win64_console.exe
└── Projects\
    └── game\                                   ← repo root (git clone target)
        ├── PHILOSOPHY.md
        ├── AI-DISCLOSURE.md
        ├── README.md
        ├── DEV-ENVIRONMENT.md                  ← this document
        ├── CLAUDE.md
        ├── .planning\                          ← GSD planning artifacts
        ├── (Godot project root, created in Phase 3)
        └── (other artifacts as project grows)

C:\Program Files\Blender Foundation\Blender 4.5\
└── blender.exe                                  ← installed by winget
```

**Why D: drive for Godot and project work:** D: has 1.5 TB free vs C:'s ~600 GB. Godot project + accumulated assets + LFS cache will reach tens of GB over the project's lifetime. Keeping it off the system drive reduces fragmentation risk and leaves C: room for Blender / VS Code / OS.

**Where else dev artifacts may live:**
- `~/.gitconfig` — global git config (don't commit)
- `~/.gitlfsconfig` — global LFS config (don't commit)
- `%APPDATA%\Godot\` — Godot user-level editor settings (don't commit; per-machine)
- `%APPDATA%\Blender Foundation\Blender\4.5\` — Blender user prefs (don't commit; per-machine)

---

## Per-project setup

Once you've cloned the repo and have all required tools installed:

```powershell
cd D:\Projects\game
git lfs install              # if not already done globally
git lfs pull                 # fetch any LFS-tracked content (none yet, becomes relevant Phase 2+)
git config user.name "Daniel Hicks"
git config user.email "[your commit email]"
```

When the Godot project is created (Phase 3):

```powershell
# Open the project in the locked Godot version:
& 'D:\godot\Godot_v4.5.2-stable_win64.exe' --path D:\Projects\game
```

A `.bat` or `.ps1` launcher script will be added in Phase 2 (INFRA-09 / tooling) so you don't have to remember the path.

---

## Backup strategy

(Detailed in Phase 2 / INFRA-04. Brief sketch here so you know what's coming.)

- **Primary:** GitHub remote at <https://github.com/danhicks853/colisi.git> (public)
- **Secondary:** Local cloud-sync of working directory (OneDrive / Dropbox / Google Drive — choice deferred to Phase 2)
- **Tertiary (optional):** External drive snapshot, monthly cadence
- **Restore procedure:** Documented and tested at least once before Phase 3 begins (INFRA-04 success criterion)

LFS quota matters here. If LFS quota is exhausted, the binary assets are still in your local clone but new clones will fail to pull binaries. Watch the quota; budget $5/mo Data Pack at the inflection point.

---

## Verification

After setup, run this verification block. All checks should report "OK":

```powershell
$ok = $true
function Check($label, $test) {
    if ($test) { Write-Host "[OK]  $label" -ForegroundColor Green }
    else { Write-Host "[FAIL] $label" -ForegroundColor Red; $script:ok = $false }
}

Check 'Godot 4.5.2 present' (Test-Path 'D:\godot\Godot_v4.5.2-stable_win64.exe')
Check 'Blender 4.5 LTS present' (Test-Path 'C:\Program Files\Blender Foundation\Blender 4.5\blender.exe')
Check 'Git installed' ((git --version 2>&1) -match 'git version')
Check 'Git LFS installed' ((git lfs version 2>&1) -match 'git-lfs')
Check 'VS Code installed' ($null -ne (Get-Command code -ErrorAction SilentlyContinue))
Check 'godot-tools extension installed' (((& 'C:\Users\danhi\AppData\Local\Programs\Microsoft VS Code\bin\code.cmd' --list-extensions 2>&1) -join "`n") -match 'godot-tools')
Check 'Repo cloned' (Test-Path 'D:\Projects\game\.git')
Check 'GitHub remote configured' ((git -C D:\Projects\game remote get-url origin 2>&1) -match 'colisi')

if ($ok) { Write-Host "`nAll checks passed." -ForegroundColor Green }
else { Write-Host "`nSome checks failed — see above." -ForegroundColor Red }
```

---

## Machine-state snapshot (informational)

This is what *was* on the machine at setup time (2026-05-09). Useful as a reference but not authoritative; the "Required tools" sections above are what matters going forward.

| Tool | Status | Notes |
|---|---|---|
| Godot 4.5.2 stable non-mono | Installed | Project's pinned engine |
| Godot 4.6 stable mono | Pre-existing | Not used by this project |
| Blender 4.5.5 LTS | Installed | Via winget |
| Git 2.52 | Pre-existing | Sufficient |
| Git LFS 3.7.1 | Pre-existing | Sufficient |
| VS Code 1.113.0 (1.119.0 staged) | Pre-existing | Real Microsoft VS Code |
| `geequlim.godot-tools` v2.6.1 | Installed | VS Code extension |
| GitHub CLI 2.89.0 | Pre-existing | Used during setup to fetch release URLs |
| Node.js 24.12.0 | Pre-existing | Used by GSD planning tooling |
| butler (itch CLI) | Not installed | Defer to Phase 8 |
| Audio tools | Not installed | Defer to Phase 6 |
| 2D art tools | Not installed | Defer to Phase 6 if needed |

Disk free space at setup: D: 1548.7 GB free, C: 594.3 GB free.

---

## Updating this document

When local machine setup changes (tool versions, install locations, new tools added, deprecated tools removed):

1. Update the relevant section.
2. Bump the snapshot date in the header.
3. Commit with message `docs(env): [what changed]`.
4. If the change reflects a stack change, also update [`STACK.md`](.planning/research/STACK.md) per the Amendment Process in [`PHILOSOPHY.md`](PHILOSOPHY.md).

---

*Last updated: 2026-05-09 (initial creation; Phase 1 setup)*
