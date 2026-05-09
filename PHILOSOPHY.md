# Colisi — Development Philosophy & Project Constitution

> **Purpose:** This document is the constitution for Colisi. It is the durable record of how this project will be built. It exists so future-Daniel respects what present-Daniel decided, and so any collaborator (human or AI) understands not just *what* we are building but *how* and *why*.
>
> **Status:** Living document. Reviewed at every milestone transition. Amended only with explicit rationale logged in `SCOPE.md`. Never silently drifted.
>
> **Hierarchy of authority** (when documents conflict, this is the precedence):
> 1. PHILOSOPHY.md (this document) — the constitution
> 2. PROJECT.md — current product context and active requirements
> 3. ROADMAP.md — phase ordering and gates
> 4. Research artifacts in `.planning/research/` — reference, not authority
>
> If you find PHILOSOPHY.md conflicts with reality on the ground, **fix the document or fix the reality, but do not let them diverge silently.**

---

## I. Philosophy

The "why" of the project. The principles that drive every decision.

### 1. The player is sacred

The cozy player is the most underestimated demographic in gaming. They are not casual. They are not unsophisticated. They are players who have been disrespected by punishing mechanics, ambiguous design, and "story over → game over" content cliffs in title after title. **Colisi exists to treat them with the respect they deserve.**

Every design decision passes through one filter: *would the lead persona, or someone who shares her stated preferences, feel respected by this?* If the answer is no, the design is wrong, no matter how clever it is.

### 2. Architect for the full game; ship the slice as a checkpoint

The vertical slice is a *milestone and learning vehicle*, not the endpoint. Slice content scopes down. Slice systems and architecture **do not**. Every system in the slice is the real shipping system, sized for the full 30+ hour game from day one.

Hacky shortcuts taken "just for the slice" must be logged in `slice-debt.md` with an explicit promotion-or-payoff strategy. Silent slice debt is the single biggest threat to the project's long-term viability.

### 3. Cozy means accessible all the way through

Cozy is not a difficulty curve setting. It is a design center. Power curves plateau, never spike. There are no walls, no missable windows, no skill checks the player can fail their way out of. A player who picks up Colisi at hour 1 and a player who picks it up at hour 200 should both be in a game that respects them.

### 4. Variables, not branches

Persistent narrative branching is built on world-state flags, multi-axis relationships, and dialogue-eligibility cascades — never on tree-shaped CYOA structures that combinatorially explode. Inkle's rule applies: *embrace the combinatorial explosion by working in variables, not by trying to author every leaf.*

### 5. Honesty over optimism

Estimates are honest. Risk is named. Uncertainty is surfaced. The roadmap's "Brutally Honest Timeline" section is the spirit of the project — preferred over encouraging-but-wrong.

When evidence and hopes diverge, evidence wins. When hopes are mistaken for evidence, that's motivated reasoning. Call it out.

### 6. Sustainability is part of the deliverable

A solo dev who burns out at month 24 ships nothing at month 48. The 4-6 year horizon requires a sustainable pace as a hard constraint, not a wish. **Burning out is a project-killing event, indistinguishable from any other category of project death.** Treat sustainability with the same discipline as scope or schedule.

### 7. The market thesis is a hypothesis until validated

The "underserved cozy demographic" framing is *qualitatively supported* by external research but is *not* statistically validated. Persona-zero is a design anchor and feedback loop, not market evidence. n=1 is never market evidence. The market thesis must be validated (MKTG-06) before any external marketing copy is finalized; if validation refines or rejects it, the roadmap is revised before content production scales.

---

## II. Guidelines

The "how to work" rules. Specific guidance derived from the philosophy.

### Code guidelines

- **GDScript is the language. All of it.** No C#, no GDExtension, until profiling proves an irreducible hotspot. (Confidence: this will never be needed for v1.)
- **Type annotations everywhere.** `var x: int = 0`, `func foo(bar: String) -> bool`. Performance and clarity both improve.
- **Composition over inheritance.** Player and NPC both extend `CharacterBody3D` directly. Shared behavior lives in components (`StateMachineComponent`, `InteractableComponent`, etc.).
- **Five autoloads, no more.** EventBus, GameState, SaveManager, TimeService, Settings. (DialogueManager is provided by the addon.) When tempted to add a sixth, ask: can this be a regular Resource or scene instead?
- **All player-visible strings via `tr()`.** No exceptions. Even English-only slice. Translation keys follow `DOMAIN_SUBJECT_DETAIL` convention.
- **Comments explain WHY, not WHAT.** Default to no comments. Only write one when removing it would confuse a future reader (hidden constraint, surprising behavior, workaround for a specific bug).
- **DRY but not premature.** Three similar lines is better than the wrong abstraction. Wait for the third use.

### Design guidelines

- **Every new system passes the time-pressure audit checklist** before it is built. Document checklist in `time-pressure-audit.md`.
- **Every new system passes the endgame-impact check.** Does it contribute to "why play at hour 200?" If no, why are we adding it?
- **Every player choice should ripple forward, not reset.** Persistence is the design center. Restart-to-rebranch is anti-cozy.
- **Telegraph everything.** Puzzles have visible answers. NPCs have visible schedules. Crafting recipes have visible ingredients. Hidden mechanics are anti-cozy.
- **One companion at a time** (BG3-style outings) for v1. Party-of-many is a v2 question.

### Process guidelines

- **The GSD workflow is the workflow.** discuss → plan → execute → verify. Every phase. No skipping verification because "I know it works."
- **Commit after every plan completes.** Atomic commits with clear messages. The git history *is* the project history.
- **Update STATE.md at every phase transition.** It's the durable progress record.
- **Public devlog cadence** starts at month 3 and never stops. Even a 100-word weekly post counts. The discipline is the deliverable.

---

## III. Guardrails

Hard "never" lines. Crossing one of these is a project-state emergency, not a design choice.

### Design guardrails (the cozy promise)

- ❌ **Never** introduce a real-time-pressure mechanic. No day clocks that punish. No missable windows. No expiring events. No stamina. No tool durability. No bedtime forcing. No "complete by the end of [season] or it's gone."
- ❌ **Never** introduce an endgame difficulty wall or stat-check failure.
- ❌ **Never** allow a story-completion to lock the game out. Every storyline supports continued play after resolution.
- ❌ **Never** require restarting from the beginning to access an alternate branch.
- ❌ **Never** ship a forced tragic ending. Bittersweet is allowed; "no matter what you do, it ends in misery" is excluded.
- ❌ **Never** require combat. Never require multiplayer. Never gate progression behind skill trees.
- ❌ **Never** introduce a new core mechanic mid-game without re-tutorializing it.
- ❌ **Never** ship an ambiguous puzzle whose solution isn't telegraphed somewhere reachable.

### Production guardrails

- ❌ **Never** ship AI-generated art, music, dialogue, or voice as part of the game. (AI as a planning + code partner is fine; AI-generated *content* in the shipped product is not.)
- ❌ **Never** commit binary assets without LFS configured. (Once LFS is set up in Phase 2, this is mechanical; before that, no binaries land.)
- ❌ **Never** hardcode a player-facing string. All player-visible text routes through `tr()`.
- ❌ **Never** add a system without a `SCOPE.md` entry justifying it.
- ❌ **Never** take a "for the slice" shortcut without a `slice-debt.md` entry with promotion-or-payoff strategy.
- ❌ **Never** scale content production without first running the change past persona-zero.
- ❌ **Never** upgrade Godot versions mid-phase. Phase-boundary upgrades only, with a dedicated migration step.

### Architecture guardrails

- ❌ **Never** add a sixth autoload. The five are fixed. (DialogueManager is the addon-provided exception.)
- ❌ **Never** change the save format without bumping `save_format_version` and writing + testing a migration.
- ❌ **Never** mutate `GameState` outside of methods that emit `EventBus` signals. Mutation discipline keeps the architecture coherent.
- ❌ **Never** use friendship-level integers for relationships. Multi-axis (trust / intimacy / respect / familiarity) or nothing.
- ❌ **Never** branch dialogue with tree structures where state flags would do the job.
- ❌ **Never** ship a third-party addon directly without wrapping it behind a project-owned interface (e.g., `DialogueService` wraps DialogueManager, `SteamService` wraps GodotSteam).

### Process guardrails

- ❌ **Never** skip the monthly retrospective.
- ❌ **Never** skip the quarterly true week off. (This is the burnout trigger.)
- ❌ **Never** miss persona-zero playtest cadence for more than 2 consecutive weeks without explicit pause-and-document.
- ❌ **Never** add a system without running it through the time-pressure audit checklist first.
- ❌ **Never** publish external marketing copy before MKTG-06 demographic validation completes.
- ❌ **Never** sprint-and-burnout. The 25 hr/week target is a ceiling for sustained periods, not a starting point to exceed.

### Communication guardrails

- ❌ **Never** use "Stardew Killer," "Stardew but...", or similar comparison framing in any external communication. Lead with persona-gap positioning ("evolving relationships in a world that never punishes you").
- ❌ **Never** overclaim based on n=1 persona evidence. Persona is a design anchor; market claims need market evidence (MKTG-06).
- ❌ **Never** publish a public release date that isn't soft-pinned with explicit "subject to change" framing.
- ❌ **Never** share private playtest data (faces, names, reactions) without explicit consent.
- ❌ **Never** skip the "what changed in the last 30 days" devlog post for more than 30 days. The cadence is the credibility.

### Posture guardrails (for Claude and any future collaborator)

- ❌ **Never** soften honest assessments to be encouraging.
- ❌ **Never** bundle hopes with evidence. Distinguish hypothesis from fact.
- ❌ **Never** silently take a shortcut. If the right way isn't being taken, log it.
- ❌ **Never** expand scope without an offsetting contraction. New systems must displace something or buy their slot with explicit rationale.

---

## IV. Processes

Repeatable workflows. Cadences. The rhythm of the project.

### Daily rhythm

- **One ~4-hour focused block** of project work. (Not a minimum, not a maximum — a target. Some days will be less.)
- **End-of-day commit** of any in-progress work, even if WIP. The git log is the journal.
- **No project work after 9pm** as a default. Sleep is part of the deliverable.

### Weekly rhythm

- **One mandatory day off.** No project work. (This is non-optional. The burnout trigger.)
- **One persona-zero playtest session** (~15 min). Even if there's nothing new to play, narrate progress and capture reactions.
- **Friday end-of-week journal entry** in `journal.md` — what shipped, what's stuck, what's next.

### Monthly rhythm

- **Monthly retrospective** in `retros/YYYY-MM.md`. Format: what went well, what went sideways, what's the one thing to change next month.
- **SCOPE.md review** — any drift?
- **slice-debt.md review** — any debt that should be paid now while small?
- **Year-3-Wall tripwire check** — do we have the data the tripwire requires? (Wishlist count, slice progress, productivity rate.)
- **Public devlog post** — at least one. 100 words minimum.

### Quarterly rhythm

- **One true week off.** No project, no devlog, no persona playtest. Real rest.
- **Pillars review** — are we still in service of the persona's core fantasy? Are the cozy promises still being kept?
- **Roadmap review** — is the phase ordering still right? Are estimates holding?
- **External communication audit** — has any "Stardew Killer" / overclaim language slipped into devlog or social posts? Correct it.

### Per-phase processes (the GSD workflow)

1. **Discuss** — `/gsd:discuss-phase N` to gather context
2. **Plan** — `/gsd:plan-phase N` to create the executable plan
3. **Execute** — `/gsd:execute-phase N` (or per-plan execution)
4. **Verify** — `/gsd:verify-work N` to confirm phase goal achieved
5. **Transition** — `/gsd:transition` to update PROJECT.md, STATE.md, REQUIREMENTS.md

### Per-system process (when adding any new system to v1)

1. **Time-pressure audit checklist** — run through the checklist; if any "yes," redesign or reject.
2. **Endgame-impact check** — does it contribute to "why play at hour 200"? Document the answer.
3. **SCOPE.md entry** — log the addition with rationale and tradeoff.
4. **Buys-its-slot check** — if the v1 system count is already at 7, what's being displaced? Log the displacement.
5. **Architecture fit check** — does it work with the five-autoload + composition + state-flag patterns? If not, redesign.
6. **Persona-zero pulse** — does the lead persona's reaction to a one-paragraph description align with the design intent?

### Per-shortcut process (when taking a "just for the slice" hack)

1. **slice-debt.md entry** with: what was shortcut, why, promotion-or-payoff strategy, target phase for resolution.
2. **No silent shortcuts.** If it doesn't have an entry, the shortcut is illegal.
3. **End-of-phase debt review** — pay debts that are cheap to pay now; carry forward debts that are real with explicit promotion plans.

### Per-content-cut process (when cutting scope)

1. **SCOPE.md entry** with rationale (not just "ran out of time" — what does the cut content's removal cost the player experience? Is the cost acceptable?).
2. **Move cut content to v2 (deferred)** if it might still be valuable, or **out of scope** if it shouldn't return.
3. **Update REQUIREMENTS.md** to reflect the cut.

### Per-public-communication process

1. **MKTG-06 grounding check** — is what I'm saying supported by the demographic-validation evidence, or am I overclaiming?
2. **Stardew-Killer scrub** — has any comparison framing slipped in? Replace with persona-gap positioning.
3. **Soft-pin dates** — any dates have explicit "subject to change" framing.
4. **Quarterly external-comms audit** is the safety net for what slipped through.

---

## V. Policy

Explicit decisions on contentious or default-ambiguous topics. These are the answers to questions a future collaborator might ask.

### Licensing

- **Project license: All Rights Reserved.** This is a commercial closed-source game with public source visibility. Public visibility is a development-transparency choice, not a permission grant. (Recorded in `LICENSE` at repo root in Phase 2 / INFRA-06.)
- **Asset licensing:** all bundled assets must be either CC0, properly licensed for commercial use, or original. `credits.md` tracks every external asset and its license from day one.

### Repository visibility

- **Public.** Trade-off accepted: design and code are visible during development; this surfaces credibility for community building, eats free GitHub Actions minutes, and matches the build-in-public ethos. Anyone could clone the design; the moat is execution and craft, not secrecy.
- **Sensitive personal data exception:** `PERSONA.md` (containing wife's interview quotes) public per Daniel's decision (recorded 2026-05-09); other personal data requires explicit consent per person before any commit.

### AI usage

The cozy / indie community has hardened against AI-generated content. "AI is theft" framing has teeth in our target audience. The persona disproportionately values human craft. Steam disclosure is mandatory. Reputation downside from any AI-generated content slip is asymmetric and project-killing. Therefore, the AI policy is **strict, transparent, and enforced by Claude** (see Section VIII).

#### The underlying principle: TOOLS vs. AUTHORS

AI may act as a **TOOL** (assisting human work). AI may **NOT** act as an **AUTHOR** (making creative decisions that end up in the shipped product, in public-facing communication, or in placeholder content that could leak).

The bright-line test: *"Did the AI make a creative decision that ended up in the player's experience or in how the world sees this game?"* If yes, that crossed a line.

#### Hard "AI not allowed" zones

These are guardrails. Crossing one is a project-state emergency. (Reinforced as numbered guardrails in Section III.)

- ❌ **All visual assets** — sprites, textures, 3D models, UI art, particle effects, animation, character art, environment art, icons. *No exceptions, including placeholders. AI placeholder art is a known pitfall that has delayed and damaged AAA titles; we will not ship art that isn't human-generated, period.*
- ❌ **All audio** — music, SFX, voice, ambience.
- ❌ **All in-game writing** — every dialogue line, every item description, every menu copy string, every journal entry, every tooltip, every character / NPC / place / item name. *Anything in the realm of game storyline whatsoever must be authored by a human.*
- ❌ **Procedural-template dialogue at runtime** — Mad-Libs templates that fill from world state. Even though templates would be human-authored, the produced lines weren't. Off the table. (This was previously in the M2 plan as a content-amplification layer; removed by this decision. The dialogue-authoring load for full game goes up; we accept this as the cost of holding the line.)
- ❌ **Level design and core gameplay loops** — the design artifacts themselves must be human-authored.
- ❌ **Public-facing creative writing** — Steam page copy, capsule copy, trailer narration, devlog posts, marketing tweets, community posts. Voice must be Daniel's; AI prose is detectable and the cozy community is allergic to it.
- ❌ **Concept art / mood boards / reference art** — even if never shipped. Ethical training-data concerns apply equally to art used as reference.
- ❌ **AI-suggested names** (NPC, item, place, mechanic, anything player-visible) *unless explicitly requested by Daniel as an idea-generation prompt*. AI proactively suggesting names is not allowed.

#### Allowed "AI as tool" zones

- ✓ **Code autocomplete, refactor suggestions, bug-finding, lint** — with the discipline that every committed line was understood and approved by Daniel. AI does not own architectural decisions.
- ✓ **Boilerplate code** — file scaffolds, test harness setup, getter/setter generation.
- ✓ **Project planning artifacts** — PROJECT.md, REQUIREMENTS.md, ROADMAP.md, this PHILOSOPHY.md, GSD workflow documents. These are not shipped product; they are tool output reviewed by Daniel.
- ✓ **Research synthesis** — STACK.md, FEATURES.md, ARCHITECTURE.md, PITFALLS.md, SUMMARY.md. Same rationale.
- ✓ **AI as design brainstorming partner** — *general* questions like "what are some possibilities to develop this character" / "give me some ideas for a story arc here" / "what are common cozy-genre patterns for X." Daniel makes the call; AI provides options. Brainstorming is not authoring.
- ✓ **Writing recommendations and copy checks on Daniel's drafts** — for devlog posts, Steam page copy, marketing prose. AI may critique and suggest improvements; AI may not draft.
- ✓ **Tooling scripts** — build automation, deploy scripts, asset-pipeline glue (the scripts themselves, not the assets they process).
- ✓ **Localization assist** — machine translation as a starting point for human translator review. Disclose. Every shipped line reviewed by a human translator.
- ✓ **Help learning a creative tool** — Daniel may ask AI to help him learn Blender / LMMS / Aseprite / etc. so he can create the assets himself. AI teaches; AI does not generate.
- ✓ **Help finding human-creator resources** — AI may help locate human freelancers, CC0 asset packs, or paid artists/composers. AI may not generate the asset itself.

#### Disclosure policy

**Full transparency.** Adoption of the spirit of open-source disclosure even though the project is commercially closed-source.

- **Root-level `AI-DISCLOSURE.md`** at the repo root. The full, public-facing AI usage statement. Updated whenever AI usage scope changes.
- **README.md transparency blurb** with a link to AI-DISCLOSURE.md. First-impression visibility on the GitHub repo.
- **Steam page disclosure** filled out per Steam's policy at Phase 8, consistent with AI-DISCLOSURE.md.
- **Commit messages** that involve substantive AI assistance are tagged with the AI tool used (e.g., `Co-authored-by:` lines, or a `[AI-assisted: planning]` tag).
- **Devlog disclosure** — at least one early devlog post explicitly addresses the AI policy and links to AI-DISCLOSURE.md. Establish the position publicly before the question is asked.

We do not want to get caught with this. We lead with it.

### Pricing & monetization

- **Premium one-time purchase** at launch. Default lean: $20-30 USD pricing for v1 (benchmarked in Phase 11; subject to MKTG-06 evidence).
- **No microtransactions, battle passes, or live-service monetization.** Anti-cozy and reputation-incompatible with this audience.
- **DLC / expansion permitted post-launch** as a v1.x or v2 question, content-driven not gacha-driven.
- **Demos: free, slice-as-demo at Steam Next Fest.** No charge, no time-gated demo, no chapter-locked demo.

### Distribution

- **v1: Steam + itch.io.** Console and mobile deferred per PROJECT.md.
- **No Epic Games Store exclusive deals** (anti-cozy-ethos, smaller cozy audience there).
- **No early-access launch.** Either it ships or it doesn't. (Subject to revision if Year-3-Wall tripwire fires and "Vol. 1" pivot is taken — but that's an explicit, structured decision, not a default.)

### Accessibility

- **2026 baseline is the floor.** Text scaling ≥150%, control remap (KBM + gamepad), gamepad-first navigable UI, colorblind-friendly palette, subtitles by default, content warnings, mute per audio bus. (Listed as v1 requirements UI-01..UI-09.)
- **Accessibility is not a polish-phase concern.** It's load-bearing from Phase 3 onward. Verified end-to-end in Phase 7.

### Marketing posture

- **Lead with persona-gap positioning.** "Evolving relationships in a world that never punishes you." NOT "Stardew Killer."
- **Build-in-public devlog from month 3.** Cadence over volume.
- **Capsule art is the highest-ROI dollar in the project.** ~$300 budget exception locked at Phase 8.
- **Cozy demographic discovery layer: TikTok / short-form video.** Retention layer: Discord. Both planned at Phase 8.

### Crunch / sustainability

- **No crunch.** The 25 hr/week target is the ceiling for sustained periods. If a deadline is at risk, the deadline moves; the work hours don't.
- **Mandatory rhythms** (daily 4-hour block, weekly day off, monthly retro, quarterly true week) are non-optional. Skipping is a project-state emergency, not a design choice.

### Versioning & releases

- **Semantic versioning** for the shipping game (1.0.0, 1.1.0, etc.).
- **Slice ships as 0.x** during Phase 8. (e.g., 0.1 first public demo, 0.2 Next Fest, etc.)
- **CHANGELOG.md** follows Keep-A-Changelog format (Added, Changed, Deprecated, Removed, Fixed, Security).

### Feedback & community

- **Discord exists from Phase 8.** Single source of community. Not Reddit, not Twitter — those are discovery layers, not community.
- **Beta testing limited to ring-2 testers (people outside the household)** until slice ships publicly.
- **No NDA-protected playtests.** Trust over paperwork at this scale.

---

## VIII. Claude's Enforcement Role

Claude is responsible for enforcing this constitution. Self-discipline alone is insufficient on a 4-6 year solo project; tired-Daniel will be tempted to bend rules that present-Daniel committed to. Claude's job is to not let that happen.

### What Claude must do

- **Refuse to generate any prohibited content.** If asked to write a dialogue line, NPC name, item description, devlog post, Steam copy, marketing tweet, or any other in-shipped-product or public-facing creative artifact, Claude refuses, references the relevant rule in PHILOSOPHY.md Section V, and offers the allowed alternative (brainstorming, copy-check, or finding a human resource).
- **Refuse art generation requests.** If asked to generate art, Claude refuses without exception. Even placeholders. Even for personal reference. Reference Section V; offer to help Daniel learn the tool, find a CC0 source, or find a human freelancer.
- **Refuse procedural dialogue at runtime requests.** If asked to design a system that generates dialogue lines at runtime via AI or via Mad-Libs templates that fill creatively, Claude refuses and references the decision.
- **Push back on rule-bending.** If Daniel tries to relax a rule out of fatigue or shortcut-seeking ("just this one item description, I'll come back to it later"), Claude does not silently comply. Claude names the rule, names the precedent if precedent applies, and offers the legitimate path forward.
- **Surface near-violations as slice-debt.** If a gray-area request gets handled, Claude proposes a `slice-debt.md` entry for the resolution path.
- **Audit periodically.** At every monthly retro, Claude offers to scan for any AI-generated content that may have leaked into player-facing or public artifacts and flag it for replacement.

### What Claude will not do

- Will not soften refusals to be "helpful." A refusal that hides behind hedging is worse than a clear refusal.
- Will not negotiate the rule itself in-context. Rule changes go through the Amendment Process (Section VI / VII), not through "but in this case..."
- Will not claim "you didn't really mean to enforce this" when Daniel sounds tired or rushed. The rules are *for* the moments when Daniel is tired or rushed.

### Disclosure of this enforcement role

Claude's enforcement role is itself disclosed in AI-DISCLOSURE.md and CLAUDE.md, so the relationship between developer and AI tool is transparent.

---

## VI. Amendment Process

This document evolves. Amendments are made under the following process:

1. **Propose** — describe the change in `SCOPE.md` with rationale.
2. **Justify** — explain what changed in the world that makes the old rule wrong.
3. **Resolve** — update PHILOSOPHY.md, commit with message `docs(philosophy): amend [section]: [summary]`.
4. **Notice** — at the next monthly retro, surface the amendment for review.

Amendments are not made in the heat of a difficult phase. They are made deliberately, cold, with rationale. The whole point of the constitution is that it's harder to change than ad-hoc decisions.

---

## IX. The Six Words

When in doubt, return to these six words:

> **Architect for the full game. Ship the slice. Respect the player. Don't burn out.**

If a decision violates any of those four clauses, it's the wrong decision. Find another path.

---

*Constitution drafted: 2026-05-09 (Phase 1)*
*Last amended: 2026-05-09 (initial draft)*
