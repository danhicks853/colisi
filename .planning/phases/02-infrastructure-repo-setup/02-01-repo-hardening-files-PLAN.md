---
phase: 02-infrastructure-repo-setup
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - .gitignore
  - .gitattributes
  - .editorconfig
  - LICENSE
autonomous: true
requirements:
  - INFRA-01
  - INFRA-02
  - INFRA-06
  - INFRA-07

must_haves:
  truths:
    - ".gitignore exists at repo root with Godot-tuned exclusions (.godot/, .import/, OS clutter, build artifacts, secrets)"
    - ".gitattributes exists at repo root with LFS filter rules for all binary asset extensions (.png, .jpg, .ogg, .wav, .mp3, .glb, .gltf, .blend, .fbx, .ttf, .otf, .exr, .hdr, .res, .scn)"
    - ".editorconfig exists at repo root with LF line endings + GDScript indentation conventions"
    - "LICENSE exists at repo root with 'All Rights Reserved' + public-source-visibility note + future-relicensing note"
    - "All four files committed to git on main branch"
  artifacts:
    - path: ".gitignore"
      provides: "Godot-tuned ignore patterns BEFORE first binary asset commit"
      contains: ".godot/"
    - path: ".gitattributes"
      provides: "LFS filter rules for 13+ binary extensions per STACK.md verbatim"
      contains: "filter=lfs diff=lfs merge=lfs -text"
    - path: ".editorconfig"
      provides: "Cross-platform editor config (LF endings, GDScript tab handling)"
      contains: "end_of_line = lf"
    - path: "LICENSE"
      provides: "All Rights Reserved license with future-relicensing note per criterion 6 default"
      contains: "All Rights Reserved"
  key_links:
    - from: ".gitattributes"
      to: "STACK.md §'Version Control + Git LFS Strategy'"
      via: "Verbatim copy of STACK.md .gitattributes block"
      pattern: "filter=lfs"
    - from: ".gitignore"
      to: "STACK.md §'.gitignore (Godot project)'"
      via: "Verbatim copy of STACK.md .gitignore block + butler-key.txt secret"
      pattern: "\\.godot/"
    - from: ".editorconfig"
      to: "Daniel's Windows 11 + cross-platform development environment"
      via: "LF line endings for cross-platform safety per D-INFRA discretion + DEV-ENVIRONMENT.md"
      pattern: "end_of_line"
---

<objective>
Create the four foundational repo-hardening files that lock in Git LFS, .gitignore patterns, editor consistency, and licensing BEFORE any Godot project files or binary assets are committed.

Purpose: These files are *irreversible-ish* infrastructure. Retrofitting LFS to a repo with committed binary blobs requires `git lfs migrate import` (slow, history-rewriting). Retrofitting line-ending conventions causes mass diff noise. Locking these in Wave 1 of Phase 2 means Phase 3 (Godot project creation) and Phase 6 (slice content production) inherit correct infrastructure from day one.

Output: Four files at repo root: `.gitignore`, `.gitattributes`, `.editorconfig`, `LICENSE`. All committed to main.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/ROADMAP.md
@.planning/REQUIREMENTS.md
@.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md
@.planning/research/STACK.md
@CLAUDE.md

# Why no prior plan SUMMARY references: Phase 1 deliverables are documentation/decisions; this plan creates new infrastructure files from scratch based on STACK.md specs and Phase 2 CONTEXT.md locked decisions. Phase 1 SUMMARYs not load-bearing for Phase 2 file creation.
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create .gitignore (Godot-tuned)</name>
  <files>.gitignore</files>
  <read_first>
    - .planning/research/STACK.md §"Version Control + Git LFS Strategy" → ".gitignore (Godot project)" block (current STACK.md lines ~284-313)
    - .planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md §"Claude's Discretion" → confirms Claude-authored per STACK.md spec
    - CLAUDE.md §"Tech stack" Quick reference (Godot 4.5.x + GDScript)
  </read_first>
  <action>
    Create `.gitignore` at repo root (D:\Projects\game\.gitignore) with the following EXACT content (matches STACK.md verbatim plus secret-additions for project-specific items):

    ```
    # Godot 4 specific
    .godot/
    .import/

    # Engine cache
    *.tmp

    # OS / Editor
    .DS_Store
    Thumbs.db
    .vscode/
    *.swp
    *.swo

    # Build artifacts
    /builds/
    /exports/
    *.exe
    *.pck
    *.dmg
    *.zip

    # Secrets
    .env
    *.pem
    butler-key.txt

    # User-specific local overrides (D-INFRA-priv-2 reversible-path placeholder)
    .local/
    ```

    Rationale: `.local/` added at bottom to support D-INFRA-priv-2 future-reversibility option (PERSONA.md can be moved to `.local/` if Daniel/Dawn ever want it private). Per D-INFRA-priv-1 it stays public for now; `.local/` ignored as preventive measure for future personal data.

    Note: `.vscode/` IS in .gitignore per STACK.md. If Daniel later wants shared VS Code settings (per criterion 7 optional), revisit with explicit exception lines (e.g., `!.vscode/extensions.json`). Phase 2 default: ignored.

    Use Write tool. Do not include the surrounding triple-backticks; just the lines from `# Godot 4 specific` through `.local/`.
  </action>
  <verify>
    <automated>cd D:\Projects\game; (Test-Path .gitignore) -and ((Get-Content .gitignore -Raw) -match '\.godot/') -and ((Get-Content .gitignore -Raw) -match 'butler-key\.txt') -and ((Get-Content .gitignore -Raw) -match '\.local/')</automated>
  </verify>
  <acceptance_criteria>
    - File `.gitignore` exists at repo root (`Test-Path D:\Projects\game\.gitignore` returns True)
    - `.gitignore` contains `.godot/` on its own line (`(Get-Content .gitignore) -contains '.godot/'`)
    - `.gitignore` contains `.import/` on its own line
    - `.gitignore` contains `butler-key.txt` on its own line (project-specific secret extension)
    - `.gitignore` contains `.local/` on its own line (D-INFRA-priv-2 reversibility hook)
    - `.gitignore` contains `*.pck` on its own line (Godot pack export artifact)
    - `.gitignore` line count is ≥ 20 (matches STACK.md spec plus additions; sanity check)
    - File uses LF line endings, not CRLF (cross-platform per D-INFRA discretion)
  </acceptance_criteria>
  <done>`.gitignore` created at repo root containing all STACK.md-specified patterns + butler-key.txt + .local/ additions; LF line endings.</done>
</task>

<task type="auto">
  <name>Task 2: Create .gitattributes (LFS configuration)</name>
  <files>.gitattributes</files>
  <read_first>
    - .planning/research/STACK.md §"Version Control + Git LFS Strategy" → ".gitattributes (LFS-track binary asset extensions)" block (current STACK.md lines ~317-345)
    - .planning/REQUIREMENTS.md INFRA-01 → confirms binary extension list (.png, .jpg, .ogg, .wav, .mp3, .glb, .gltf, .blend, .fbx, .ttf, .otf, .exr, .hdr, .tres binary forms)
    - .planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md §"Claude's Discretion" → Claude-authored per STACK.md spec
    - DEV-ENVIRONMENT.md §"Git + Git LFS" → confirms `git lfs install` already happened globally (LFS Daniel-side ready)
  </read_first>
  <action>
    Create `.gitattributes` at repo root (D:\Projects\game\.gitattributes) with the following EXACT content (extends STACK.md spec with REQUIREMENTS.md INFRA-01 explicitly-required extensions including fonts and the binary `.tres`/`.res` clarification):

    ```
    # =============================================================================
    # Colisi Git LFS configuration
    # Source-of-truth: .planning/research/STACK.md §"Version Control + Git LFS Strategy"
    # REQUIREMENT: INFRA-01 — LFS configured BEFORE any binary asset committed
    # =============================================================================

    # 3D models
    *.glb filter=lfs diff=lfs merge=lfs -text
    *.gltf filter=lfs diff=lfs merge=lfs -text
    *.fbx filter=lfs diff=lfs merge=lfs -text
    *.blend filter=lfs diff=lfs merge=lfs -text
    *.blend1 filter=lfs diff=lfs merge=lfs -text
    *.obj filter=lfs diff=lfs merge=lfs -text

    # Images
    *.png filter=lfs diff=lfs merge=lfs -text
    *.jpg filter=lfs diff=lfs merge=lfs -text
    *.jpeg filter=lfs diff=lfs merge=lfs -text
    *.tga filter=lfs diff=lfs merge=lfs -text
    *.webp filter=lfs diff=lfs merge=lfs -text
    *.exr filter=lfs diff=lfs merge=lfs -text
    *.hdr filter=lfs diff=lfs merge=lfs -text
    *.dds filter=lfs diff=lfs merge=lfs -text
    *.psd filter=lfs diff=lfs merge=lfs -text
    *.kra filter=lfs diff=lfs merge=lfs -text

    # Note: *.svg is INTENTIONALLY NOT LFS-tracked — SVG is text/XML and diffs cleanly.
    # If you have a large SVG that should be LFS-tracked, add explicit .gitattributes
    # override for that specific file.

    # Audio
    *.wav filter=lfs diff=lfs merge=lfs -text
    *.mp3 filter=lfs diff=lfs merge=lfs -text
    *.ogg filter=lfs diff=lfs merge=lfs -text
    *.flac filter=lfs diff=lfs merge=lfs -text
    *.aif filter=lfs diff=lfs merge=lfs -text
    *.aiff filter=lfs diff=lfs merge=lfs -text

    # Fonts (per INFRA-01 explicit extension list)
    *.ttf filter=lfs diff=lfs merge=lfs -text
    *.otf filter=lfs diff=lfs merge=lfs -text
    *.woff filter=lfs diff=lfs merge=lfs -text
    *.woff2 filter=lfs diff=lfs merge=lfs -text

    # Godot binary scenes / resources (only the binary form — keep .tscn and .tres as text)
    *.scn filter=lfs diff=lfs merge=lfs -text
    *.res filter=lfs diff=lfs merge=lfs -text

    # Video (for future trailer assets / capsule motion)
    *.mp4 filter=lfs diff=lfs merge=lfs -text
    *.mov filter=lfs diff=lfs merge=lfs -text
    *.webm filter=lfs diff=lfs merge=lfs -text

    # Archives (sometimes committed for asset packs)
    *.zip filter=lfs diff=lfs merge=lfs -text
    *.7z filter=lfs diff=lfs merge=lfs -text

    # Audio DAW project files (D-INFRA-art-1: art-source in main repo via LFS)
    *.lmms filter=lfs diff=lfs merge=lfs -text
    *.rpp filter=lfs diff=lfs merge=lfs -text
    *.aup3 filter=lfs diff=lfs merge=lfs -text

    # =============================================================================
    # Text file line endings (cross-platform safety)
    # =============================================================================

    # Always check out with LF endings (Daniel is on Windows; LF universal works)
    *.gd text eol=lf
    *.tres text eol=lf
    *.tscn text eol=lf
    *.cfg text eol=lf
    *.md text eol=lf
    *.yml text eol=lf
    *.yaml text eol=lf
    *.json text eol=lf
    *.toml text eol=lf
    *.csv text eol=lf
    *.po text eol=lf

    # Shell / batch scripts keep native endings (batch needs CRLF on Windows)
    *.bat text eol=crlf
    *.cmd text eol=crlf
    *.ps1 text eol=crlf
    *.sh text eol=lf
    ```

    Notes:
    - Comment block header references STACK.md as the source-of-truth.
    - Added beyond STACK.md spec: `.blend1` (Blender backup), `.psd`/`.kra` (image-editor sources per D-INFRA-art-1 single-repo-with-LFS art-source decision), `.aif`/`.aiff` (audio), `.woff`/`.woff2` (web fonts for future devlog/Steam page), `.mp4`/`.mov`/`.webm` (video for future trailer), `.zip`/`.7z` (asset pack archives), `.lmms`/`.rpp`/`.aup3` (music/audio DAW projects per D-INFRA-art-1).
    - Text section enforces LF endings on all text files except batch/cmd/ps1 (which Windows requires CRLF for) — cross-platform safety per D-INFRA discretion + Daniel's Win11 + Git Bash mixed environment.
    - SVG intentionally excluded from LFS (text/XML; diffs cleanly) per inline comment.

    Use Write tool.
  </action>
  <verify>
    <automated>cd D:\Projects\game; $a = Get-Content .gitattributes -Raw; ($a -match '\*\.png filter=lfs') -and ($a -match '\*\.glb filter=lfs') -and ($a -match '\*\.blend filter=lfs') -and ($a -match '\*\.ogg filter=lfs') -and ($a -match '\*\.ttf filter=lfs') -and ($a -match '\*\.res filter=lfs') -and ($a -match 'eol=lf')</automated>
  </verify>
  <acceptance_criteria>
    - File `.gitattributes` exists at repo root (`Test-Path D:\Projects\game\.gitattributes` returns True)
    - `.gitattributes` contains `*.png filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.jpg filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.glb filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.gltf filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.blend filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.fbx filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.ogg filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.wav filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.mp3 filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.ttf filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.otf filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.exr filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.hdr filter=lfs diff=lfs merge=lfs -text`
    - `.gitattributes` contains `*.res filter=lfs diff=lfs merge=lfs -text` (binary Resource form per STACK.md)
    - `.gitattributes` contains `*.gd text eol=lf` (GDScript LF enforcement)
    - `.gitattributes` contains `*.bat text eol=crlf` (Windows batch CRLF preservation)
    - `.gitattributes` does NOT contain `*.svg filter=lfs` (SVG intentionally text-tracked per inline comment)
    - File uses LF line endings
  </acceptance_criteria>
  <done>`.gitattributes` created at repo root with all 13 INFRA-01-required binary extensions tracked via LFS plus text-file LF enforcement; STACK.md verbatim plus extensions for D-INFRA-art-1 art-source-in-main-repo decision.</done>
</task>

<task type="auto">
  <name>Task 3: Create .editorconfig</name>
  <files>.editorconfig</files>
  <read_first>
    - .planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md §"Claude's Discretion" → .editorconfig spec (LF cross-platform, GDScript indentation, trailing whitespace)
    - .planning/REQUIREMENTS.md INFRA-07 → "consistent line endings and indentation across machines/editors"
    - .planning/research/STACK.md §"Development Tools" → "Godot built-in editor (primary) + VS Code (secondary)" — editor mix to support
    - DEV-ENVIRONMENT.md §"VS Code" → confirms VS Code 1.113+ with godot-tools extension is the secondary editor
  </read_first>
  <action>
    Create `.editorconfig` at repo root (D:\Projects\game\.editorconfig) with the following EXACT content:

    ```
    # =============================================================================
    # Colisi .editorconfig
    # https://editorconfig.org/
    # REQUIREMENT: INFRA-07 — consistent line endings + indentation across editors
    # =============================================================================

    # Stop editorconfig lookup at repo root
    root = true

    # =============================================================================
    # Default for ALL files (LF endings, UTF-8, trim trailing whitespace, final newline)
    # Cross-platform safety: Daniel is on Windows but LF is universal-safe
    # =============================================================================

    [*]
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    indent_style = tab
    indent_size = 4

    # =============================================================================
    # GDScript — TABS, 4-width display (Godot official style guide convention)
    # Godot built-in editor inserts tabs; mismatch causes diff churn
    # =============================================================================

    [*.gd]
    indent_style = tab
    indent_size = 4

    # =============================================================================
    # Godot scene/resource files — TABS (Godot serializer writes tabs)
    # =============================================================================

    [*.{tscn,tres,res,scn,cfg,godot,import}]
    indent_style = tab
    indent_size = 4

    # =============================================================================
    # Markdown — SPACES (2-width); preserve trailing-2-spaces line breaks
    # =============================================================================

    [*.md]
    indent_style = space
    indent_size = 2
    trim_trailing_whitespace = false

    # =============================================================================
    # YAML / JSON / TOML — SPACES (community convention)
    # =============================================================================

    [*.{yml,yaml,json,toml}]
    indent_style = space
    indent_size = 2

    # =============================================================================
    # CSV (Godot localization tables) — leave as-is, no whitespace normalization
    # =============================================================================

    [*.csv]
    trim_trailing_whitespace = false

    # =============================================================================
    # Shell / batch scripts
    # =============================================================================

    [*.{bat,cmd,ps1}]
    end_of_line = crlf
    indent_style = space
    indent_size = 4

    [*.sh]
    end_of_line = lf
    indent_style = space
    indent_size = 2

    # =============================================================================
    # Web-export and HTML (future MKTG-02 devlog assets)
    # =============================================================================

    [*.{html,css,js,ts}]
    indent_style = space
    indent_size = 2
    ```

    Rationale per locked decisions:
    - `root = true` stops upward lookup so this repo's config is authoritative.
    - `[*]` default = LF, UTF-8, trim trailing whitespace, final newline — cross-platform-safe per D-INFRA discretion.
    - `[*.gd]` = tabs (Godot's official style guide and built-in editor default; using spaces causes daily diff noise as editor re-inserts tabs).
    - `[*.{tscn,tres,res,scn,cfg,godot,import}]` = tabs (Godot's serializer writes tabs; manual edits should match).
    - `[*.md]` = 2-space + preserve trailing whitespace (markdown hard-line-break convention is 2 trailing spaces).
    - `[*.csv]` preserves trailing whitespace (CSV cells may legitimately end in space).
    - `[*.{bat,cmd,ps1}]` = CRLF (Windows interpreter requires CRLF for batch).
    - HTML/CSS/JS at 2-space anticipates future MKTG-02 devlog assets (anticipates Phase 8 Steam page work too, but cheap to include now).

    Use Write tool.
  </action>
  <verify>
    <automated>cd D:\Projects\game; $a = Get-Content .editorconfig -Raw; ($a -match 'root = true') -and ($a -match 'end_of_line = lf') -and ($a -match '\[\*\.gd\]') -and ($a -match 'indent_style = tab') -and ($a -match '\[\*\.md\]') -and ($a -match 'trim_trailing_whitespace = false')</automated>
  </verify>
  <acceptance_criteria>
    - File `.editorconfig` exists at repo root (`Test-Path D:\Projects\game\.editorconfig` returns True)
    - File contains `root = true` (stops upward lookup)
    - File contains `end_of_line = lf` in the `[*]` default section (cross-platform LF default)
    - File contains `[*.gd]` section with `indent_style = tab` (GDScript tab convention)
    - File contains `[*.md]` section with `indent_style = space` AND `trim_trailing_whitespace = false`
    - File contains `[*.{bat,cmd,ps1}]` with `end_of_line = crlf` (Windows batch CRLF)
    - File contains `insert_final_newline = true` in default section
    - File uses LF line endings itself
  </acceptance_criteria>
  <done>`.editorconfig` created at repo root with LF default + GDScript tabs + markdown space + Windows-batch CRLF + Godot scene/resource conventions; supports both Godot built-in editor and VS Code as secondary.</done>
</task>

<task type="auto">
  <name>Task 4: Create LICENSE (All Rights Reserved)</name>
  <files>LICENSE</files>
  <read_first>
    - .planning/REQUIREMENTS.md INFRA-06 → "default lean: All Rights Reserved with future-relicensing note (closed-source commercial game with public source visibility)"
    - .planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md §"Claude's Discretion" → LICENSE default per criterion 6
    - README.md current "License" section → "All Rights Reserved. The repository is public for development transparency, but content is not licensed for reuse. See LICENSE."
    - CLAUDE.md §"Project" Constraints → "Distribution: Steam + itch.io for v1" + "Budget: ~$100 USD lifetime cash spend"
  </read_first>
  <action>
    Create `LICENSE` at repo root (D:\Projects\game\LICENSE) with the following EXACT content:

    ```
    Colisi (project codename) — Copyright (c) 2026 Daniel Hicks. All Rights Reserved.

    The shipped game's title may differ from "Colisi" (codename) once finalized.
    Daniel Hicks is the sole copyright holder for all code, documentation, design,
    and original assets in this repository.

    -----------------------------------------------------------------------------
    Public visibility, no license to reuse
    -----------------------------------------------------------------------------

    This repository is PUBLIC for development-transparency reasons (see
    PHILOSOPHY.md and AI-DISCLOSURE.md for the rationale: the AI use policy and
    persona research are built in the open).

    Public visibility is NOT a license. You may:

      * Read the code and documentation for personal study and education.
      * Quote short excerpts for review, commentary, criticism, journalism, or
        academic work, subject to applicable fair-use / fair-dealing law in
        your jurisdiction.
      * File GitHub issues describing bugs, concerns, or feedback.

    You may NOT, without separate prior written permission from the copyright
    holder:

      * Copy, fork, or redistribute the code or assets (including reposting on
        another platform or mirror).
      * Use the code or assets in another project, commercial or non-commercial.
      * Train machine-learning models on the code or assets.
      * Publish or distribute modified versions.
      * Use the codename, shipped game title (once announced), characters,
        world, names, art, or audio in derivative works.

    -----------------------------------------------------------------------------
    Third-party assets
    -----------------------------------------------------------------------------

    Some assets in this repository (placeholder art / audio / fonts) may be
    sourced from third parties under their own licenses (e.g., CC0, CC-BY).
    Those licenses govern those specific assets and are documented in
    .planning/credits.md (to be created when the first third-party asset is
    committed). Assets carrying their own license retain that license; nothing
    in this LICENSE narrows the rights granted by an asset's original license.

    -----------------------------------------------------------------------------
    Future relicensing
    -----------------------------------------------------------------------------

    The copyright holder reserves the right to relicense any or all of this
    repository's original content under different terms in the future (for
    example: source-available license at v1 launch, open-source license post-
    commercial-life, public-domain dedication on archival). Past contributions
    by the copyright holder may be released under any future license at the
    copyright holder's sole discretion.

    Any contribution received from outside the copyright holder is, unless
    otherwise stated by the contributor, assumed to be licensed back to the
    copyright holder under terms allowing the copyright holder to relicense
    that contribution as part of the project. Outside contributors who wish
    to retain different terms must state them explicitly in the pull request
    or issue thread.

    -----------------------------------------------------------------------------
    No warranty
    -----------------------------------------------------------------------------

    THE REPOSITORY CONTENT IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES,
    OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE,
    ARISING FROM, OUT OF, OR IN CONNECTION WITH THE REPOSITORY CONTENT OR THE
    USE OR OTHER DEALINGS IN THE REPOSITORY CONTENT.

    -----------------------------------------------------------------------------
    Questions
    -----------------------------------------------------------------------------

    Licensing questions, permission requests, or commercial-use inquiries:
    please open a GitHub issue at https://github.com/danhicks853/colisi/issues
    and tag the issue [licensing].

    -----------------------------------------------------------------------------
    ```

    Notes:
    - Title line includes copyright year (2026) and copyright holder name (Daniel Hicks).
    - Honors README.md existing claim ("All Rights Reserved. The repository is public for development transparency, but content is not licensed for reuse.").
    - Explicit "may / may not" clauses prevent ambiguity (especially "train ML models on the code or assets" — current 2026 concern).
    - Third-party-assets clause anticipates `.planning/credits.md` (per STACK.md §"License hygiene rules" rule 1) without creating it now.
    - Future-relicensing clause preserves Daniel's option to source-available / open-source post-launch without legal entanglement.
    - Outside-contributor inbound-license assumption protects future relicensing if community PRs ever happen.
    - No-warranty clause is standard boilerplate; protects against liability.
    - Contact pointer goes through GitHub issues (consistent with README "Contact / questions" section).

    Use Write tool. Use plain text (no markdown headers); LICENSE files are conventionally plain text.
  </action>
  <verify>
    <automated>cd D:\Projects\game; $a = Get-Content LICENSE -Raw; ($a -match 'All Rights Reserved') -and ($a -match 'Daniel Hicks') -and ($a -match 'Future relicensing') -and ($a -match 'Third-party assets') -and ($a -match 'AS IS')</automated>
  </verify>
  <acceptance_criteria>
    - File `LICENSE` exists at repo root (`Test-Path D:\Projects\game\LICENSE` returns True; no extension)
    - LICENSE contains the exact phrase `All Rights Reserved`
    - LICENSE contains `Daniel Hicks` (copyright holder name)
    - LICENSE contains `2026` (copyright year)
    - LICENSE contains a "Future relicensing" section or heading (criterion 6 future-relicensing-note requirement)
    - LICENSE contains a "Third-party assets" section (CC0/CC-BY anticipation per STACK.md)
    - LICENSE contains the AS-IS no-warranty disclaimer (`AS IS`)
    - LICENSE references `https://github.com/danhicks853/colisi/issues` (contact pointer)
    - LICENSE explicitly addresses ML/AI training (`train machine-learning models` or equivalent)
    - File uses LF line endings
  </acceptance_criteria>
  <done>LICENSE file created at repo root with All Rights Reserved + public-visibility-no-reuse + future-relicensing clause + third-party-assets clause + ML-training prohibition + no-warranty disclaimer + GitHub-issue contact pointer; matches README.md license claim.</done>
</task>

</tasks>

<verification>
After all 4 tasks complete:

1. Run `git status` from D:\Projects\game to confirm 4 new files in working tree (`.gitignore`, `.gitattributes`, `.editorconfig`, `LICENSE`).
2. Run `Get-Content .gitignore | Measure-Object -Line` and verify ≥ 20 lines.
3. Run `Get-Content .gitattributes | Select-String -Pattern 'filter=lfs' | Measure-Object | Select Count` and verify ≥ 25 LFS filter lines.
4. Verify line endings via PowerShell: `(Get-Content .gitignore -Raw) -notmatch "\r\n"` should return True (LF endings only).
5. Commit all 4 files in a single atomic commit: `docs(infra): add .gitignore + .gitattributes + .editorconfig + LICENSE (INFRA-01/02/06/07)`.
6. Push to GitHub origin/main and verify push succeeded.

If `git status` shows unexpected files modified, stop and investigate before commit.
</verification>

<success_criteria>
- All 4 files exist at repo root with LF line endings (except `.editorconfig` CRLF section for batch files)
- `.gitignore` matches STACK.md spec + `.local/` reversibility hook + `butler-key.txt` project secret
- `.gitattributes` covers all INFRA-01 mandatory extensions (.png .jpg .ogg .wav .mp3 .glb .gltf .blend .fbx .ttf .otf .exr .hdr) + binary .res form + text-file LF enforcement
- `.editorconfig` has `root = true` + LF default + GDScript tab convention + markdown-2-space-preserve-trailing + Windows-batch-CRLF
- LICENSE has All Rights Reserved + future-relicensing + third-party-assets + ML-training prohibition + no-warranty + GitHub-issue contact
- Single atomic commit pushes all 4 to GitHub origin/main
- INFRA-01, INFRA-02, INFRA-06, INFRA-07 satisfied (Task 5 in plan 02-03 will execute the LFS *verification* test commit)
</success_criteria>

<output>
After completion, create `.planning/phases/02-infrastructure-repo-setup/02-01-repo-hardening-files-SUMMARY.md` per `summary.md` template:
- What was built (4 files; total line counts; commit SHA)
- Requirements satisfied (INFRA-01 config laid down — verification in plan 02-03; INFRA-02 .gitignore complete; INFRA-06 LICENSE complete; INFRA-07 .editorconfig complete)
- Key decisions referenced (D-INFRA-priv-2 `.local/` reversibility hook; D-INFRA-art-1 DAW extensions added; STACK.md verbatim base)
- Downstream consumers (Phase 3 Godot project init inherits .gitignore + .editorconfig; Phase 6 binary assets land via .gitattributes LFS; LICENSE referenced from README and surfaced at GitHub repo top-bar)
</output>
