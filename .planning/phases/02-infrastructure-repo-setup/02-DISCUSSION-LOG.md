# Phase 2: Infrastructure & Repo Setup - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-05-11
**Phase:** 02-infrastructure-repo-setup
**Areas discussed:** Art-source repo split, CONVENTIONS.md folder structure + naming, PERSONA.md privacy review, Backup strategy + restore-test procedure

---

## Gray-area selection

| Option | Description | Selected |
|--------|-------------|----------|
| Art-source repo split | Option A single repo + LFS vs Option B separate art-source repo | ✓ |
| CONVENTIONS.md folder structure + naming | Godot project layout + naming rules | ✓ |
| PERSONA.md privacy review | Public / redacted / .local / hybrid | ✓ |
| Backup strategy + restore-test | Cloud-sync target + restore procedure | ✓ |

**User's choice:** All 4 selected.

---

## Art-Source Repo Split

| Option | Description | Selected |
|--------|-------------|----------|
| Option A: single repo + LFS for everything | One repo, simpler, may need $5/mo Data Pack at scale | ✓ |
| Option B: separate `colisi-art-source` repo from day one | Two repos, quota-resilient, more complex workflow | |
| Option A initially + migrate to B if quota becomes issue | Defer complexity; migrate later | |

**User's choice:** Option A: single repo + LFS for everything.

### Follow-up: LFS quota upgrade trigger

| Option | Description | Selected |
|--------|-------------|----------|
| When LFS bandwidth or storage hits ~80% of free tier | Reactive upgrade when needed | ✓ |
| Upgrade now during Phase 2 as a precaution | Pre-pay $5/mo from day one | |
| Defer to monthly retro decision | Per-retro decision, no pre-commit | |

**User's choice:** Reactive at ~80% of free tier.

### Follow-up: Quarterly tarball backup

| Option | Description | Selected |
|--------|-------------|----------|
| Yes — quarterly tarball to cloud drive | Manual third-tier backup discipline | ✓ |
| Skip — GitHub + daily cloud-sync are sufficient | Two-tier backup only | |
| Yes but automate via script (defer setup) | Procedure now, automation later | |

**User's choice:** Yes — manual quarterly tarball (automation deferred to Phase 6+).

---

## CONVENTIONS.md Folder Structure + Naming

| Option | Description | Selected |
|--------|-------------|----------|
| By-type | Top-level by file role: scenes/, scripts/, assets/, addons/, autoloads/, etc. | ✓ |
| By-feature | Top-level by gameplay feature: features/dialog/, features/inventory/ | |
| Hybrid: by-type at top, by-feature within scenes/ | Compromise | |

**User's choice:** By-type — Godot-canonical pattern.

### Follow-up: File-naming convention

| Option | Description | Selected |
|--------|-------------|----------|
| snake_case for everything | Godot official style guide | ✓ |
| PascalCase for scenes + scripts, snake_case for assets | Mixed (class-name-matching) | |
| snake_case + per-pattern rules logged in CONVENTIONS.md | Default + explicit exceptions | |

**User's choice:** snake_case for everything.

### Follow-up: Scene + script pairing

| Option | Description | Selected |
|--------|-------------|----------|
| Same folder | Co-located: scenes/dialog/dialog_manager.tscn + scenes/dialog/dialog_manager.gd | ✓ |
| Separate folders | scenes/ for .tscn, scripts/ for .gd (parallel structure) | |
| Hybrid: scene-tied scripts in scenes/, shared utility in scripts/ | Mostly co-located + scripts/ for utilities | |

**User's choice:** Same folder. (Note: this matches the "Hybrid" option semantically — `scripts/` reserved for utility/autoload/shared base classes per CONTEXT.md decision D-INFRA-conv-3.)

### Follow-up: Animation library organization

| Option | Description | Selected |
|--------|-------------|----------|
| Per-character + shared library pattern | `res://animations/<character>/` + `res://animations/_shared/` | ✓ |
| Flat under res://animations/ with naming-convention discipline | Single-level flat structure | |
| Defer organization specifics to first animation work in Phase 3-4 | Principle now, exact path later | |

**User's choice:** Per-character + shared library pattern.

---

## PERSONA.md Privacy Review

| Option | Description | Selected |
|--------|-------------|----------|
| Keep public as-is | Dawn's quotes in public repo | ✓ |
| Redact to anonymized quotes | Strip personal identifiers | |
| Move PERSONA.md to .local/ (ignored path) | Excluded from version control | |
| Hybrid: public redacted + private full version in .local/ | Two versions | |

**User's choice:** Keep public as-is.

### Follow-up: Consent record durability

| Option | Description | Selected |
|--------|-------------|----------|
| Dawn-consented entry in playtest-log + revisit at quarterly review | Documented consent + scheduled revisit | |
| Already discussed, no formal record needed | Informal; no separate consent doc | ✓ |
| Full formal consent doc + revisit trigger | Maximum formality (overkill at this stage) | |

**User's choice:** Informal — already discussed; no separate consent doc.

---

## Backup Strategy + Restore-Test Procedure

### Cloud-sync target

| Option | Description | Selected |
|--------|-------------|----------|
| OneDrive | Windows-native, 5GB free, $1.99/mo for 100GB | |
| Google Drive | 15GB free baseline, $1.99/mo for 100GB, cross-platform | ✓ |
| Dropbox | 2GB free, $9.99/mo Plus | |
| Other / multiple | Mega, Sync.com, pCloud, iCloud, or multi-target | |

**User's choice:** Google Drive.

### Restore-test cadence

| Option | Description | Selected |
|--------|-------------|----------|
| Test now during Phase 2: fresh clone + restore on different machine path | Verify during Phase 2 execution | |
| Test at end of Phase 2 + quarterly retest from there | Final-test at Phase 2 close + ongoing quarterly discipline | ✓ |
| Test once + skip recurring retest | Single test, no recurring verification | |

**User's choice:** Test at end of Phase 2 + quarterly retest from there.

---

## Wrap-up

| Option | Description | Selected |
|--------|-------------|----------|
| Ready for context | Captured enough; remaining items are Claude-discretion | ✓ |
| Discuss CI timing | When to scaffold godot-import-check.yml | |
| Discuss LICENSE wording | Specific wording for All Rights Reserved + future-relicensing note | |
| Discuss README/CONTRIBUTING/CHANGELOG content depth | Content specifics | |

**User's choice:** Ready for context — remaining items deferred to Claude-discretion under locked principles.

---

## Claude's Discretion

The following Phase 2 deliverables are Claude-planned/executed under standard Godot + STACK.md spec without further input required:

- `.gitignore` (Godot 4 standard per STACK.md)
- `.gitattributes` (LFS binary extension list per STACK.md)
- `.editorconfig` (LF line endings, cross-platform standard)
- `LICENSE` (All Rights Reserved + future-relicensing note per criterion 6 default)
- `README.md` additions beyond existing CTA + AI disclosure
- `CONTRIBUTING.md` content (solo-dev-of-future)
- `CHANGELOG.md` Keep-A-Changelog skeleton
- Minimal CI workflow file (scaffold or defer to Phase 3)
- Optional `.vscode/` settings

---

## Deferred Ideas

- CI workflow file scaffold-or-defer decision: Claude-discretion during plan-phase
- Quarterly tarball backup automation script: defer to Phase 6+ when content scale justifies it
- Migration to Option B art-source repo: future-option preserved, not committed
- MKTG-02 devlog timing decision: Phase 2 vs Phase 3 boundary; plan-phase decides
- PERSONA.md privacy revisit: reversible at any time at known cost (history scrub if full removal); no proactive checkpoint

---

*Discussion held: 2026-05-11*
*Decisions captured in `.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md`*
