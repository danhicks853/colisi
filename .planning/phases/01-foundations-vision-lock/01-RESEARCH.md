# Phase 1: Foundations & Vision Lock - Research

**Researched:** 2026-05-09
**Domain:** Pre-production documentation orthodoxy + indie market validation methodology + solo-dev sustainability practice
**Confidence:** HIGH on document templates and risk/skills matrices (well-established studio practice); HIGH on Chris Zukowski / Steam-marketing methodology; MEDIUM on specific narrative-voice-bible templates (Disco Elysium / Obsidian voice docs are not fully public — patterns derived from collaborative-writing interviews); HIGH on the AI policy boundary (CLAUDE.md and PHILOSOPHY.md §V are unambiguous)

## Summary

Phase 1 produces 28 pre-production deliverables across 9 packs. The deliverables are documents, not code. The research challenge is twofold: **(1)** anchor the document templates Claude drafts AGAINST real studio orthodoxy rather than inventing them from first principles, and **(2)** keep a hard line on the AI policy — Claude provides scaffolding (matrices, structural skeletons, headings, methodology checklists) but never generates in-world creative content (names, lore, dialogue, voice samples, reference imagery, marketing copy, premise prose).

Studio orthodoxy for pre-production documents is well-established and convergent. Pillars-of-play docs follow a consistent paragraph + design-implications + anti-pillar shape (Hades' Star, GameDesignSkills, GDC corpus). Risk registers follow PMI/PMBOK columns adapted for game dev (likelihood × impact × mitigation × early-warning, with PMI's standard 5-point scales). Capability/skills-gap matrices are a 30+ year HR-and-PM standard (proficiency scale 1-5 + target + acquisition plan + deadline). Player-journey maps split into discovery / onboarding / scaffolding / endgame phases with hour-anchored detail rows. World bibles at v0.1 have a stable indie-and-AAA TOC (geography → cultures → magic-system → calendar → cosmology → naming-system → tone). Narrative voice bibles are less publicly documented but the elements are stable across Disco Elysium / Obsidian / Larian interviews: POV, register, sentence-shape, period references, forbidden language, narrator presence.

For MKTG-06, the Chris Zukowski / "How to Market a Game" canon is the indie-Steam-marketing standard; Steam review mining + community survey + sales-data triangulation is exactly his recommended methodology, and CONTEXT.md's locked rubric (D-MKTG-01..06) maps cleanly onto best practice. The methodology does not need re-litigation — only specifics (game-list, survey wording) need to be authored during execution.

For solo-dev sustainability, ConcernedApe's 4.5-year, 10-hour-day cadence is the cautionary anti-example (he burned out post-launch); Daniel's locked cadence (no hour tracking, milestone-based, monthly retro + quarterly true week off, persona-zero playtest ritual) explicitly inverts the ConcernedApe pattern, which is correct. Year-3-Wall pivot tripwires don't have a single canonical industry template — the pattern (multi-checkpoint cascade + structured pause-and-replan + outside reviewer co-sign) is synthesized from PMI risk-management practice + indie post-mortem corpus + scenario-planning practice. Confidence MEDIUM on whether specific metric thresholds (m6/12/24/36) match comparable-game data; that's why CONTEXT.md correctly defers specifics to Phase 1 execution after comparable-game research.

**Primary recommendation:** Treat each of the 28 deliverables as a Daniel-authored document with a Claude-drafted *structural skeleton + filled synthesis where allowed*. Build a single shared template-set (vision/pillars/world-bible/risk-register/etc.) early in Phase 1 execution as the "deliverable scaffolding pack," then Daniel fills creative content into the templates. Wave 0 of the plan should produce the templates; subsequent waves are Daniel-authoring against the templates, with Claude's role limited to (a) structuring matrices, (b) critique on drafts, (c) synthesis-only docs (risk register, capability matrix, anti-positioning structure), and (d) MKTG-06 LLM-classification work with Daniel verifying every tag.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Vision Lock — THE PREMISE (locked, persona-zero-validated)

- **D-VISION-01:** Player is a magical helper-sprite — not a human protagonist. The sprite drifts/floats through a village; sprite does not walk on legs. Third-person camera from CTRL-01 still satisfied; movement model differs from human-character cozy-sim convention.
- **D-VISION-02:** Each villager has their own *personal magic* (cooking magic, farming magic, hedge-witchery, sky-watching, mending magic, song-magic, etc. — final taxonomy authored during Phase 1 World Bible work). The magic is *latent* in the villager until the player-sprite helps it surface through relationship.
- **D-VISION-03:** Power distribution rule — the sprite *gives* magic, never accumulates it. Sprite's power scales with the relationship, not with stat-grinding. This satisfies the locked "power curve plateaus, never spikes" principle structurally (Sanderson's First Law dodged: cozy problems can't be power-fantasy'd because sprite-magic only works through trust).
- **D-VISION-04:** Central puzzle layer is **matchmaking-via-environmental-manipulation**. Sprite observes villagers, schedules, items, dialogue cues; identifies pairing opportunities; gently manipulates environment (a falling petal, a redirected breeze, a kettle whistling a moment too long) to spark a meet-cute. Some encounters become friendships, some become love, some never spark — all are valid outcomes. Solution discovery is observation-based; satisfies NARR-07 (puzzles must telegraph).
- **D-VISION-05:** Persona-zero (Dawn) validated this premise direction in real-time during this discussion AND co-developed the matchmaking layer. The 14-day persona-zero gate originally proposed is **passed**; premise is locked, not locked-pending.
- **D-VISION-06:** This is the BG3 × Sims dream cross translated to mechanics: Sims-like world manipulation (engineering the meet-cute) → BG3-like dialogue branching (the conversation the villagers then have). Persona-zero's "talking to people and finding where I fit in" core fantasy is satisfied.
- **D-VISION-07:** Romance content in v1 is **between villagers**, not player-to-villager. Sprite cannot romance. v2 may revisit a "sprite-can-be-romanced" arc if design supports it.
- **D-VISION-08:** Per AI policy (PHILOSOPHY.md §V), Daniel and Dawn author all in-world content — sprite name, villager names, place names, magic-system codifications, dialogue, lore, story. Claude does NOT generate any of this. Claude structures design space, critiques drafts, helps with synthesis-only documents (matrices, analysis tables, risk registers).

#### Phase 1 Scope Expansion — Full mature-studio pre-production set

**Locked: Phase 1 incorporates the full orthodox 28-artifact deliverable set** (~18 net new vs original ROADMAP.md Phase 1 scope). Daniel's directive: *"Take the full orthodox set and amend any documents needed. I dont care how long it takes, this project will be done right the first time, and I will have time to learn."*

Full 28 deliverables organized in 9 packs (D-SCOPE-01 through D-SCOPE-28); see CONTEXT.md `<decisions>` for the canonical list — copied verbatim into the Phase Requirements section below.

#### Time Model (locked partial)

- **D-TIME-01:** Pure action-driven contract. In-game time advances ONLY on explicit player actions.
- **D-TIME-02:** Day/night cycle is player-controlled; visuals snap on rest, Stardew/ACNH-style.
- **D-TIME-03:** NPC schedules use continuous pathing during play between intra-slot stations.
- **D-TIME-04:** Tension flagged for Phase 5: NPCs move during play while sun does not.
- **D-TIME-05:** Trigger list deferred — derives from Core Loops Pack (D-SCOPE-05); locks during Phase 1 execution OR explicitly defers to Phase 4/5.

#### Year-3-Wall Tripwires Protocol (locked)

- **D-WALL-01:** Cascade cadence — four checkpoints at month 6 / 12 / 24 / 36.
- **D-WALL-02:** Multi-OR triggers — any single metric below threshold fires the tripwire.
- **D-WALL-03:** Pause-and-replan protocol with 1-week time-boxed pause + Replan Document (3 scenarios) + outside reviewer co-signature.
- **D-WALL-04:** Re-arm-and-rebaseline if continue-as-is.
- **D-WALL-05:** Enforcement: pre-committed in writing in the Greenlight document.
- **D-WALL-06:** Productivity-tripwire metric unit = cumulative phase-completion delta vs roadmap estimate.
- **D-WALL-07:** Specific metric thresholds at each checkpoint deferred to Phase 1 execution per D-SCOPE-21.

#### MKTG-06 Demographic Validation Methodology (locked)

- **D-MKTG-01:** Hybrid game-list selection — selection rule first (Steam tag = Cozy + Life Sim, top 20 by review count) + Daniel curation. Sample size 10-20 games.
- **D-MKTG-02:** LLM-assisted classification + Daniel verification of every tag.
- **D-MKTG-03:** Formal Google Form survey (~10 questions) distributed to r/CozyGamers + 2-3 cozy Discords + cozy social tags. Target 50-100 responses minimum.
- **D-MKTG-04:** Triangulation decision rubric — Confirmed / Refined / Rejected verdict criteria pre-committed.
- **D-MKTG-05:** Specific games-to-mine list and survey question wording deferred to Phase 1 execution.
- **D-MKTG-06:** Output deliverable: `MARKET-EVIDENCE.md` with explicit verdict + supporting data tables.

#### Sustainability Rhythms (locked)

- **D-SUST-01:** Hour-based targets dropped — milestones-shipped vs milestones-planned.
- **D-SUST-02:** No hour tracking at all — not even observational.
- **D-SUST-03:** Daily rhythm — continuous nightly session, no variation.
- **D-SUST-04:** Phase plans drive monthly milestones.
- **D-SUST-05:** Monthly retro — last day of month, ~2 hr session.
- **D-SUST-06:** Quarterly review — half-day session every 3 months.
- **D-SUST-07:** Persona-zero (Dawn) playtest ritual — bi-weekly 30-min, structured note template, logged to `.planning/playtest-log/YYYY-MM-DD.md`. Pre-Phase 3, session is reading docs and giving reactions.
- **D-SUST-08:** Productivity tripwire signal = cumulative phase-completion delta.

#### World Bible v0.1 (locked depth + tone)

- **D-WORLD-01:** Depth: DEEP — full v1 setting bible at Phase 1 close.
- **D-WORLD-02:** Magic tone: soft magic with codified vibes (Brandon Sanderson terminology — codified what magic CAN'T do).
- **D-WORLD-03:** Calendar: Stardew-style with Colisi-flavored season names + festival framework.
- **D-WORLD-04:** "Magic tier list" interpreted as cultural/vocational archetypes + atmospheric scale, NOT mechanical TTRPG-style power tiers.
- **D-WORLD-05:** Player premise locked early in Phase 1; premise pitch document is FIRST Phase 1 deliverable.
- **D-WORLD-06:** Specific zone names, magic-system codification specifics, calendar season names, culture details, naming-system rules per culture deferred to Phase 1 execution per D-SCOPE-12.

#### Style Guide v0.1 (locked depth)

- **D-STYLE-01:** Visual direction: Full v0.1 spec.
- **D-STYLE-02:** Visual reference deck collected — Sandara Tang (primary anchor), Hades character art, Okami, Borderlands cel-shading, Ghibli themes.
- **D-STYLE-03:** Visual direction synthesis is Daniel's call (tension between soft-painterly and bold-graphic-ink-line schools); Claude does NOT generate visual content or palettes.
- **D-STYLE-04:** Audio direction: Full v0.1 spec.
- **D-STYLE-05:** Narrative voice: Full v0.1 voice bible (POV / register / sentence-shape / period references / forbidden language / narrator presence). Daniel authors fully; Claude critiques drafts only.
- **D-STYLE-06:** UI tone: principles only inside Style Guide v0.1; full mockups Phase 3.
- **D-STYLE-07:** Style depth defaulted to Full per orthodoxy directive.

#### Premise Authorship + Persona-Zero Gate Process

- **D-PREMISE-01:** Premise pitch is the first Phase 1 deliverable (sub-step 0.1). Daniel authors a 1-2 page pitch.
- **D-PREMISE-02:** 3-alternatives-sketch idea honored as a side artifact: Daniel sketches 2-3 alternative premises briefly (1-paragraph each) for the World Bible / Anti-positioning record.

### Claude's Discretion

Areas where Claude has flexibility during Phase 1 execution:

- Document templates and section structures for Risk Register, Capability Gap matrix, Pillar × Mechanic matrix, Failure-mode analysis matrix (mechanical synthesis tools Claude can draft)
- Loops diagram template/skeleton (Claude proposes; Daniel fills in content)
- Player Journey table skeleton (same)
- Tools/pipeline doc structure (Claude can draft from STACK.md)
- Anti-positioning doc structure (Claude can draft outline; Daniel writes voice)
- Failure-mode analysis structure
- The structural format of "Why play at hour 200" doc (the four-engine application is an existing strategy from SUMMARY.md; Claude structures, Daniel authors content)

### Deferred Ideas (OUT OF SCOPE)

Deferred to Phase 1 execution (will be authored, not by Claude):

- Specific Year-3-Wall metric thresholds at each cascade checkpoint (months 6/12/24/36) — needs comparable-game research
- Specific games-to-mine list for MKTG-06 + survey question wording
- Recovery rule when daily ritual breaks (illness, life events, motivation dips)
- Time-model trigger list (canonical actions that advance time) — derives from Core Loops Pack
- Specific zone names, magic-system codification specifics, calendar season names, culture details, naming-system rules (World Bible v0.1 authoring)
- Style Guide v0.1 specific palette, character silhouettes, audio exemplars, narrative voice principles
- Hard-magic-tier-list vs soft-magic reconciliation final wording
- Sprite home / sanctum design — open question across Phase 1 World Bible
- Player movement / camera spec for sprite-drift premise — Phase 1 sketches, Phase 3 implements
- Premise pitch authoring (Daniel writes 1-2 page pitch as first Phase 1 sub-deliverable)

Deferred to later phases (not Phase 1 work):

- Specific NPC content (Phase 6)
- Specific dialogue (Phase 4 hero-NPC-happy-path; Phase 6 slice content)
- Festival specifics (Phase 6)
- HOME, CRAFT, COMP REQUIREMENTS.md interpretation amendments (Phase 1 documents direction; REQUIREMENTS.md amendment may happen at Phase 2 transition)
- Match-puzzle compatibility model details (Phase 4 single-NPC; Phase 6 multi-NPC slice)
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description (from REQUIREMENTS.md) | Research Support |
|----|------|------|
| HEALTH-01 | Project tracks a `SCOPE.md` log of every system / feature change, with rationale and tradeoff | Studio orthodoxy: a SCOPE-style change log is standard PM practice (Asana / ClickUp / Confluence templates all share the same columns); inaugural entry queued in CONTEXT.md (Phase 1 scope expansion 2026-05-09) means Wave 0 has a worked example to seed |
| HEALTH-02 | Project tracks a `slice-debt.md` log of every shortcut taken for the slice, with explicit promotion-or-payoff strategy | Pattern is borrowed directly from Martin Fowler / Ward Cunningham's "technical debt" log practice, adapted for game dev's slice context. Format: what was shortcut / why / promotion-or-payoff strategy / target phase. Wave 0 deliverable: format spec + worked example (the inaugural entry's worked example can be a hypothetical slice shortcut for illustration; first real entry will populate at Phase 2+) |
| HEALTH-03 | Project has pre-committed Year-3-Wall pivot tripwires (specific milestones whose miss triggers a scope cut or pause-and-reassess) | Protocol locked in CONTEXT.md D-WALL-01..07. Specific metric thresholds at m6/12/24/36 deferred to Phase 1 execution after comparable-game wishlist research; need light external research on indie wishlist trajectories (1k by m18, 5k by m24, 10k by m36 are SUMMARY.md's existing leans) |
| HEALTH-04 | Project commits to a sustainable solo-dev cadence (target ~25 hours/week, daily/weekly/monthly/quarterly rhythms documented) | **Note: REQ wording says "~25 hours/week" but CONTEXT.md D-SUST-01 LOCKED milestone-based, not hour-based. The REQ wording reflects pre-discuss-phase research; the locked decision overrides. Phase 1 execution should amend REQUIREMENTS.md HEALTH-04 wording to match D-SUST-01..08.** Authoring deliverable D-SCOPE-20 satisfies the underlying intent. |
| HEALTH-05 | Persona-zero playtest ritual established and maintained from project month 1 | Locked in D-SUST-07. Bi-weekly 30-min sessions with structured note template; pre-Phase 3 sessions are doc-reactions instead of play. Wave deliverable: ritual doc + first 2 sessions executed (premise pitch reaction + bi-weekly follow-up). |
| MKTG-06 | Demographic-validation evidence collected and documented before any external marketing copy is finalized | Methodology fully locked in D-MKTG-01..06. Three-leg triangulation (Steam review mining + Google Form survey + persona research) maps onto Chris Zukowski's standard indie-game-validation pattern. Output: `MARKET-EVIDENCE.md` with Confirmed/Refined/Rejected verdict per D-MKTG-04 rubric. |
</phase_requirements>

## Project Constraints (from CLAUDE.md)

> ⚠️ Read these directives first. They override defaults and constrain every Phase 1 deliverable.

### AI Policy — Hard refusal list (PHILOSOPHY.md §V + CLAUDE.md Section 1)

Claude **refuses** to generate any of the following, even if asked, even if it seems harmless, even if it's "just placeholder," even if Daniel sounds tired or rushed:

- ❌ Any visual asset — sprites, textures, 3D models, UI art, particle effects, animations, character art, environment art, icons, concept art, mood boards, reference art, *even if never shipped*
- ❌ Any audio asset — music, SFX, voice, ambience
- ❌ Any in-game writing — dialogue lines, item descriptions, menu copy, journal entries, tooltips, character / NPC / place / item / mechanic names
- ❌ Procedural-template dialogue at runtime — even with human-authored templates
- ❌ Level layouts or core gameplay-loop designs as final artifacts (brainstorming options is OK; final design is Daniel's)
- ❌ Public-facing creative writing — Steam page copy, capsule copy, trailer narration, devlog posts, marketing tweets, community posts
- ❌ Unsolicited name suggestions for in-game entities

### Allowed — explicitly

- ✓ Code autocomplete / refactor / bug-finding / lint
- ✓ Boilerplate code generation
- ✓ Project planning artifacts (PROJECT.md, ROADMAP.md, this file, the 28 Phase 1 deliverables-as-templates, etc.)
- ✓ Research synthesis
- ✓ Brainstorming partner: "what are some possibilities," "give me 10 options"
- ✓ Critique and copy-check on Daniel's drafts
- ✓ Tooling scripts
- ✓ Localization assist (machine translation as starting point for human review)
- ✓ Help learning a creative tool
- ✓ Help locating human-creator resources

### What Claude must do beyond refusing

- Surface near-violations as `slice-debt.md` entries with resolution paths
- At every monthly retro, offer to scan for AI-generated content that may have leaked
- Disclose AI assistance in commits — substantive AI-assisted commits get tagged

### Other CLAUDE.md directives that constrain Phase 1

- **Vertical slice mindset:** every system architected for the full 30+ hour game; slice content scopes down, slice systems do not
- **Cozy promise:** never propose, accept, or implement real-time-pressure mechanics, endgame difficulty walls, story-completion-as-game-end, restart-to-rebranch CYOA, forced tragic endings, required combat / multiplayer, skill trees that gate progression, mid-game introduction of untaught mechanics, ambiguous puzzles
- **Honesty over optimism:** distinguish hypothesis from fact; n=1 is design anchor, not market evidence; the "underserved demographic" framing is qualitatively supported but NOT yet validated; MKTG-06 in Phase 1 is the gate; do not soften assessments to be encouraging
- **The Six Words:** "Architect for the full game. Ship the slice. Respect the player. Don't burn out."
- **Authoritative-document precedence:** PHILOSOPHY.md > AI-DISCLOSURE.md > PROJECT.md > ROADMAP.md > REQUIREMENTS.md > research artifacts. If Phase 1 deliverables conflict with these documents, the documents win — fix the document or fix the reality, never silently drift.
- **GSD workflow enforcement:** Daniel uses GSD commands; do not make direct repo edits outside a GSD workflow.

### CLAUDE.md compliance verification points for the planner

When the planner creates plans:

1. Every deliverable Claude produces must be **structural / synthesis** (matrices, headings, tables, methodology). If a deliverable would require generating in-world creative content, reroute to "draft template; Daniel authors content."
2. Every deliverable involving creative content (premise pitch, world bible content, voice bible content, dialogue voice samples, naming systems, narrative voice, reference deck curation) must be assigned to Daniel with Claude's role limited to template-drafting + critique-on-drafts.
3. The MKTG-06 LLM-classification step (D-MKTG-02) is allowed because Daniel verifies 100% of LLM tags before they enter the verdict; this is a research-synthesis use, not authoring.
4. The `slice-debt.md` and `SCOPE.md` worked examples (D-SCOPE-18, D-SCOPE-19) should use real content (the inaugural Phase 1 scope-expansion entry already exists in CONTEXT.md history; that's the worked example).
5. No deliverable should propose any of the prohibited content categories above. If a planning hint suggests "generate placeholder villager names so we can illustrate the naming system," refuse and route to Daniel.

## Standard Stack

> Phase 1 is a documents-only phase. There is no code stack. The "stack" is the **set of authoring tools, document conventions, and methodology references** Daniel will use to produce the 28 deliverables.

### Core Document/Methodology Stack

| Element | Version / Standard | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Markdown (CommonMark) | current | All Phase 1 deliverables | Already the project standard; renders on GitHub; diff-friendly; PR-reviewable; AI-tooling friendly. (HIGH) |
| Plain ASCII tables in Markdown | — | Risk register / capability matrix / Pillar×Mechanic matrix / journey map / verdict tables | GitHub-rendered Markdown tables are the lowest-friction option for synthesis docs; no spreadsheet round-trip required; diff-friendly. (HIGH) |
| Semantic versioning of doc revisions | `v0.1` for Phase 1 docs | World Bible / Style Guide / Voice Bible labeled `v0.1` | Standard practice for design-document evolution; signals "intentionally incomplete, revised at milestone boundaries." (HIGH) |
| Google Form (free tier) | current | MKTG-06 survey instrument | Free; mobile-friendly; CSV export for analysis; CONTEXT.md D-MKTG-03 specifies it. (HIGH) |
| Google Sheets / CSV | current | MKTG-06 review-mining tally + classification working data | CSV exports + LLM round-trip + manual verification all easiest in Sheets; final tallies copy back into MARKET-EVIDENCE.md tables. (HIGH) |
| Steam Web API + manual scraping | current | MKTG-06 negative-and-mixed-review collection per game | The Steam Web API exposes review data via `appreviews` endpoint; per-game scraping is feasible at 10-20 games scale without rate-limit issues. (HIGH; verify endpoint terms at execution time) |
| Reddit (r/CozyGamers, ~250k members) | community | MKTG-06 survey distribution (one channel) | Per CONTEXT.md D-MKTG-03; r/CozyGamers exceeded 250k subscribers per Rolling Stone cozy-gaming reporting; moderator approval required before posting per subreddit rules. (HIGH on community size; MEDIUM on moderator response time) |
| Cozy gaming Discord servers (2-3) | community | MKTG-06 survey distribution (additional channels) | Per CONTEXT.md D-MKTG-03; specific servers TBD during Phase 1 execution. (MEDIUM — need to identify and request distribution permission from each) |
| Bluesky / Mastodon cozy-gaming tags | current social | MKTG-06 survey distribution (passive channel) | Per CONTEXT.md D-MKTG-03; lower yield but zero-friction, useful for sample diversification. (MEDIUM) |

### Methodology / Reference Stack

| Element | Source | Purpose | Confidence |
|---------|--------|---------|-----------|
| Chris Zukowski / "How to Market a Game" canon | <https://howtomarketagame.com/> | Indie-Steam marketing methodology baseline; capsule-art ROI thesis already adopted in PHILOSOPHY.md | HIGH (industry standard for indie-Steam marketing) |
| PMI/PMBOK risk register conventions | PMI standards documents | Risk register columns (likelihood × impact × mitigation × early-warning trigger × owner) | HIGH |
| AIHR / Personio / Valamis skills-matrix templates | <https://www.aihr.com/blog/create-skills-matrix-competency-matrix/>, <https://www.personio.com/hr-lexicon/skills-matrix/> | Capability gap matrix conventions (skill / current proficiency / target proficiency / acquisition plan / deadline) | HIGH |
| Brandon Sanderson's First Law of Magic | Brandon Sanderson essay | Soft vs. hard magic distinction; rule for D-WORLD-02 ("we name what magic CAN'T do") | HIGH |
| Inkle / Jon Ingold "variables, not branches" | inkle blog + GDC talks | Persistent narrative branching pattern — already locked in PHILOSOPHY.md §I.4 and ARCHITECTURE.md | HIGH |
| Tanya X. Short / Kitfox "Designing for Coziness" | Kitfox dev blog | Cozy-genre design vocabulary; framing for failure-mode analysis | HIGH |
| ConcernedApe / Eric Barone Stardew development cadence | gamedeveloper.com / Wikipedia interview corpus | Cautionary anti-example: 4.5y, 10hr/day, post-launch burnout — Daniel's locked cadence inverts this pattern, which is correct | HIGH |
| Hades / Hades' Star design pillars (Supergiant + others) | <https://blog.hadesstar.com/2016/08/the-three-design-pillars-of-hades-star.html> | Pillars-of-play format reference (3-5 pillars, each a phrase + paragraph + design implications) | HIGH |
| Disco Elysium narrative voice + collaborative writing process | gamedeveloper.com + GamesHub interviews | Voice-bible elements: POV, micro-reactivity, distinctive-skill-voices pattern | MEDIUM (no public voice bible; patterns derived from interviews) |
| Yu-kai Chou / "experience phases" framework | <https://yukaichou.com/gamification-examples/experience-phases-game/> | Player-journey phase framing (Discovery / Onboarding / Scaffolding / Endgame); useful structure for D-SCOPE-06 | HIGH |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Markdown for deliverables | Notion / World Anvil | Both have richer worldbuilding features; both lock content out of git history and out of GSD workflow; rejected for Phase 1 |
| Google Forms for MKTG-06 | Typeform / SurveyMonkey | Free tier of either is more limited; Google Forms is the lowest-friction option that satisfies D-MKTG-03 |
| LLM-assisted classification (D-MKTG-02) | Manual classification only | Manual scales poorly to 10-20 games × ~100 reviews each = 1000-2000 reviews; LLM-then-Daniel-verify is the right hybrid |
| Brandon Sanderson's First Law for magic codification | Mark Rosewater color-pie style codification | Sanderson's framing maps directly to D-WORLD-02 "soft + codified vibes"; Rosewater's frame is more mechanical and would push toward harder magic |
| World Anvil for World Bible | Plain Markdown world bible in repo | World Anvil offers richer linking but locks content out of git; Plain Markdown is the right call for Colisi's repo discipline |

### Installation / Setup

```bash
# No code installation. Phase 1 setup steps:

# 1. Create planning subdirectories needed by Phase 1 deliverables
mkdir -p .planning/playtest-log
mkdir -p .planning/phases/01-foundations-vision-lock/deliverables  # if planner chooses this layout

# 2. Verify Google account access for Google Forms + Sheets (Daniel's task; no Claude action)

# 3. Identify and contact 2-3 cozy gaming Discord moderators for MKTG-06 distribution permission
#    (Daniel's task; flagged in deferred per D-MKTG-05)

# 4. Verify Steam Web API access (no auth required for public review endpoints) — test with one game
curl "https://store.steampowered.com/appreviews/413150?json=1&filter=recent&language=english&review_type=all&num_per_page=20"
# Replace 413150 with target appid; this is Stardew Valley as a known-working example
```

**No version verification needed** — Phase 1 deliverables don't depend on package versions. The MKTG-06 Steam Web API endpoint should be checked at execution time for any rate-limit or terms-of-service changes.

## Architecture Patterns

> "Architecture" here = document organization patterns, deliverable structure, and process conventions for Phase 1.

### Recommended Phase 1 Deliverable Structure

```
.planning/phases/01-foundations-vision-lock/
├── 01-CONTEXT.md                      # exists (vision lock + decisions)
├── 01-RESEARCH.md                     # this file
├── 01-PLAN-*.md                       # planner produces these
│
└── deliverables/                      # planner's choice; could also live at .planning/ root
    ├── vision-pack/
    │   ├── 01-vision-pitch.md         # D-SCOPE-01 — Daniel-authored
    │   ├── 02-pillars-of-play.md      # D-SCOPE-02 — Daniel-authored against Claude template
    │   ├── 03-core-fantasy.md         # D-SCOPE-03 — Daniel-authored
    │   └── 04-anti-positioning.md     # D-SCOPE-04 — Claude structures, Daniel writes voice
    ├── loops-journey-pack/
    │   ├── 05-core-loops.md           # D-SCOPE-05 — Claude diagrams, Daniel fills content
    │   ├── 06-player-journey.md       # D-SCOPE-06 — Claude table skeleton, Daniel fills
    │   ├── 07-pillar-mechanic-matrix.md  # D-SCOPE-07 — synthesis matrix (Claude + Daniel)
    │   └── 08-failure-mode-analysis.md   # D-SCOPE-08 — Claude structures, Daniel fills
    ├── scenario-pack/
    │   ├── 09-slice-scenario-sketch.md   # D-SCOPE-09 — Daniel-authored (creative content)
    │   ├── 10-wow-beats.md            # D-SCOPE-10 — Daniel-authored
    │   └── 11-elevator-demo-30s.md    # D-SCOPE-11 — Daniel-authored
    ├── world-style-pack/
    │   ├── 12-world-bible-v0.1.md     # D-SCOPE-12 — Daniel-authored against TOC template
    │   ├── 13-mood-reference-deck.md  # D-SCOPE-13 — Daniel + Dawn curate (no Claude generation)
    │   └── 14-style-guide-v0.1.md     # D-SCOPE-14 — Daniel-authored 4 sections (visual / audio / voice / UI tone)
    ├── risk-capability-pack/
    │   ├── 15-risk-register.md        # D-SCOPE-15 — Claude can populate from research; Daniel verifies
    │   ├── 16-capability-gap-matrix.md  # D-SCOPE-16 — Claude can populate skills list; Daniel scores
    │   └── 17-tools-pipeline-ratification.md  # D-SCOPE-17 — Claude drafts from STACK.md; Daniel signs
    ├── process-pack/
    │   ├── 18-SCOPE.md                # D-SCOPE-18 — moves to repo root after creation
    │   ├── 19-slice-debt.md           # D-SCOPE-19 — moves to repo root after creation
    │   ├── 20-sustainable-pace-cadence.md  # D-SCOPE-20 — Claude structures from D-SUST-01..08
    │   ├── 21-year3wall-tripwires.md  # D-SCOPE-21 — Claude structures from D-WALL-01..07; Daniel + outside reviewer set thresholds
    │   ├── 22-personazero-playtest-ritual.md  # D-SCOPE-22 — Claude structures from D-SUST-07
    │   └── 23-why-play-at-hour-200.md # D-SCOPE-23 — Claude structures four-engine application; Daniel adapts to sprite-matchmaking premise
    ├── decision-lock-pack/
    │   ├── 24-time-model-lock.md      # D-SCOPE-24 — Claude drafts from D-TIME-01..05
    │   ├── 25-stack-ratification.md   # D-SCOPE-25 — Claude drafts from STACK.md
    │   └── 26-architecture-ratification.md  # D-SCOPE-26 — Claude drafts from ARCHITECTURE.md
    ├── validation-pack/
    │   └── 27-MARKET-EVIDENCE.md      # D-SCOPE-27 / MKTG-06 — moves to .planning/ root
    └── greenlight/
        └── 28-greenlight.md           # D-SCOPE-28 — Daniel signs; outside reviewer co-signs Year-3-Wall criteria
```

**Note on file placement:** SCOPE.md, slice-debt.md, MARKET-EVIDENCE.md should ultimately live at `.planning/` (or repo root for SCOPE.md / slice-debt.md if Daniel prefers — REQUIREMENTS.md says "project tracks" without specifying location). The deliverables/ scaffold above is a Phase 1 staging convention; planner chooses final locations. Style Guide / World Bible likely live in `.planning/design/` or similar after Phase 1 completes.

### Pattern 1: The "Claude template + Daniel content" split

**What:** For each deliverable, Claude produces a structural skeleton (headings, tables, methodology, prompts) and Daniel fills in creative content. Claude critiques drafts; Daniel decides.

**When to use:** All 28 Phase 1 deliverables. This pattern IS the AI policy in practice.

**Template-vs-content classification for the 28:**

| Pack | Deliverable | Claude's role | Daniel's role |
|------|-------------|---------------|----------------|
| Vision | 01 Vision pitch | Refuses to draft prose | Authors all prose; Claude critiques |
| Vision | 02 Pillars of Play | Drafts pillar template (slot for word + paragraph + design implications + anti-pillar) | Authors pillar names, content, anti-pillars |
| Vision | 03 Core Fantasy | Refuses to draft fantasy prose | Authors paragraph + capsule sentence |
| Vision | 04 Anti-positioning | Drafts comparison table structure (one row per comparable: Stardew, BG3, Sims, etc.) | Authors what we ARE NOT vs each comparable |
| Loops | 05 Core Loops | Drafts loops diagram skeleton (3 nested loops) | Authors loop content per locked premise |
| Loops | 06 Player Journey | Drafts journey table skeleton (5 rows: 5min / 1hr / 10hr / 100hr / 500hr; 4-5 columns) | Authors journey beats |
| Loops | 07 Pillar × Mechanic matrix | **Synthesis-only** — Claude can populate the grid given pillars + mechanics list | Daniel verifies all entries; flags orphan mechanics |
| Loops | 08 Failure-mode analysis | Drafts failure-mode table skeleton (one row per pillar) | Authors what failure looks like in playtest |
| Scenario | 09 Slice scenario sketch | Refuses to draft scenario prose | Daniel authors screenwriter-style walkthrough |
| Scenario | 10 Wow beats | Refuses to draft beat names/descriptions | Daniel lists |
| Scenario | 11 Elevator demo 30s | Refuses to draft demo content | Daniel sketches |
| World/Style | 12 World Bible v0.1 | Drafts TOC template only (see Pattern 2 below) | Authors all content |
| World/Style | 13 Mood/reference deck | Refuses to generate any reference imagery; can help organize curated references | Daniel + Dawn curate sources; Claude tabulates |
| World/Style | 14 Style Guide v0.1 | Drafts 4-section template (visual / audio / narrative voice / UI tone) | Authors all content |
| Risk/Capability | 15 Risk register | **Synthesis-allowed** — Claude can populate risk rows from PITFALLS.md research | Daniel verifies likelihood / impact / mitigation / tripwire |
| Risk/Capability | 16 Capability gap matrix | **Synthesis-allowed** — Claude can populate skills-required column from STACK.md / ARCHITECTURE.md | Daniel scores current proficiency / target / acquisition plan |
| Risk/Capability | 17 Tools/pipeline ratification | **Synthesis-allowed** — Claude drafts entirely from STACK.md | Daniel signs |
| Process | 18 SCOPE.md | **Synthesis-allowed** — Claude drafts format spec + populates inaugural entry from CONTEXT.md history | Daniel signs |
| Process | 19 slice-debt.md | **Synthesis-allowed** — Claude drafts format spec + worked example | Daniel signs |
| Process | 20 Sustainable-pace cadence | **Synthesis-allowed** — Claude drafts entirely from D-SUST-01..08 | Daniel signs; amends REQ HEALTH-04 wording |
| Process | 21 Year-3-Wall tripwires | **Synthesis-allowed** for protocol structure; Daniel + outside reviewer set specific thresholds | Daniel + outside reviewer co-author |
| Process | 22 Persona-zero ritual | **Synthesis-allowed** — Claude drafts ritual doc + structured note template from D-SUST-07 | Daniel runs sessions with Dawn |
| Process | 23 Why play at hour 200 | **Synthesis-allowed for structure**; four-engine application is from research/SUMMARY.md | Daniel adapts to sprite-matchmaking premise; authors specifics |
| Decision Lock | 24 Time model lock | **Synthesis-allowed** — Claude drafts from D-TIME-01..05 | Daniel signs; trigger list TBD or deferred |
| Decision Lock | 25 Stack ratification | **Synthesis-allowed** — Claude drafts from STACK.md | Daniel signs |
| Decision Lock | 26 Architecture ratification | **Synthesis-allowed** — Claude drafts from ARCHITECTURE.md + flags premise-driven reinterpretations (sprite movement, HOME/CRAFT/COMP) | Daniel signs; logs interpretation amendments |
| Validation | 27 MARKET-EVIDENCE.md | **Methodology + analysis allowed** per D-MKTG-02 (LLM classification with Daniel verifying every tag) | Daniel verifies all tags; signs verdict |
| Greenlight | 28 Greenlight document | Drafts template structure | Daniel authors "knowing what I now know, I commit to this" statement; outside reviewer co-signs Year-3-Wall criteria |

### Pattern 2: World Bible TOC at v0.1 (template-only; Daniel authors content)

Standard indie/AAA world-bible TOC at v0.1 stage (depth: DEEP per D-WORLD-01):

```markdown
# Colisi World Bible v0.1

## 0. Document conventions
- Voice: in-world voice for descriptive sections; design notes in [brackets]
- Naming syntax: per-culture rules in §6
- Tone: soft magic with codified vibes (D-WORLD-02)
- Out of scope at v0.1: [list deferred items]

## 1. World setting overview
- Premise (1 paragraph) — locks the magical-helper-sprite + matchmaking premise
- Tone summary (1 paragraph)
- Genre + influences (1 paragraph; cites Sandara Tang, Hades, Okami, Borderlands, Ghibli per D-STYLE-02)

## 2. Geography (the 8 zones outlined)
- Zone 1 [name TBD by Daniel] — sketch
- Zone 2 [name TBD] — sketch
- ... (8 total)
- Zone-to-zone adjacency map (text or ASCII diagram)

## 3. Cosmology / pantheon / lore
- Cosmology (origin / structure / metaphysics)
- Pantheon (if any; Daniel decides if pantheon exists or if magic is non-deistic)
- Major lore arcs (1-2 paragraphs each, broad strokes only at v0.1)

## 4. Magic system (soft + codified)
- 4.1 What magic IS (atmospheric / vocational / latent in villagers)
- 4.2 What magic CAN'T do (the codified vibes — explicit constraints to prevent deus-ex-machina)
- 4.3 Sprite's role in the magic system (giver, never accumulator — D-VISION-03)
- 4.4 Cultural / vocational tiers (per D-WORLD-04: home witches / hedge witches / sky witches / etc. — Daniel authors final taxonomy)
- 4.5 Atmospheric scale (kitchen magic vs grove magic vs world-magic)
- 4.6 Personal magic per villager (taxonomy; Daniel authors)

## 5. Calendar
- 5.1 Year structure (4 seasons; ~28-day months per D-WORLD-03)
- 5.2 Season names in-world voice (Daniel authors)
- 5.3 Annual festival framework (festival types, not specific festivals — those are Phase 6)

## 6. Cultures (every culture sketched at v0.1)
- 6.1 Culture A — Daniel authors
- 6.2 Culture B — Daniel authors
- ... (one section per culture)
- 6.X Naming-system rules per culture (Daniel authors)

## 7. Cross-cultural elements
- 7.1 Trade / economy (broad strokes)
- 7.2 Languages / writing / numerals
- 7.3 Animism / spirit-life conventions (talking animals, spirits, hedge magic)
- 7.4 Death and afterlife conventions
- 7.5 Romance / partnership conventions (player-villager-vs-villager-villager per D-VISION-07)

## 8. Open design questions for Phase 4-6 resolution
- Sprite home / sanctum design (deferred per CONTEXT.md)
- Sprite movement / camera spec (deferred per CONTEXT.md)
- Match-puzzle compatibility model details (deferred to Phase 4/6)
- Specific festivals (deferred to Phase 6)
- Specific NPC content (deferred to Phase 6)
- HOME/CRAFT/COMP REQUIREMENTS.md interpretation amendments (deferred to Phase 1 → Phase 2 transition)

## 9. Glossary (in-world terms; Daniel authors)
```

**Why this TOC:** synthesizes World Anvil + Notion world-bible templates with the project-specific constraints from CONTEXT.md (8 zones, Stardew-shape calendar, soft magic, sprite premise, every-culture-sketched). Claude drafts the headings; Daniel fills every section.

### Pattern 3: Pillar × Mechanic matrix (synthesis-allowed)

```markdown
| Pillar | Mechanic | Justification (1-2 sentences) | Pillar contribution score (0-3) |
|--------|----------|-------------------------------|----------------------------------|
| {pillar-1 name} | Multi-axis relationships (NPC-03) | {how this advances pillar-1} | {0-3} |
| {pillar-1 name} | State-tagged dialogue (NPC-05) | {how} | {0-3} |
| {pillar-2 name} | Crafting w/ NarrativeMeta (CRAFT-04/05) | {how} | {0-3} |
| ... | ... | ... | ... |
| ORPHAN | {mechanic with no pillar} | {flag for cut or rationale to keep} | 0 |
```

**Pattern:** every mechanic from REQUIREMENTS.md gets a row × every pillar (3-5 columns max). Each cell scores 0-3 (0 = irrelevant; 3 = mechanic is core to pillar). Mechanics with all-zero rows are flagged as ORPHAN — must be cut or have explicit rationale to keep.

**Source for this format:** GameDesignSkills "Game Design Pillars: What Are They and How to Practically Apply Them" + Hades' Star three-pillars doc + Game-Design-Pillars course materials. Convergent across sources.

### Pattern 4: Risk register (PMI-style, synthesis-allowed)

```markdown
| ID | Risk | Likelihood (1-5) | Impact (1-5) | Score (L×I) | Mitigation | Early-warning tripwire | Owner | Status |
|----|------|------------------|--------------|-------------|------------|------------------------|-------|--------|
| R-01 | "Stardew Killer" framing trap (PITFALLS Pitfall 1) | 4 | 5 | 20 | Lead with persona-gap positioning; never use "Stardew killer" externally | Any external comm uses "Stardew killer" or "Stardew but..." phrasing | Daniel | Open |
| R-02 | Scope creep on systems-rich solo project (PITFALLS Pitfall 2) | 5 | 5 | 25 | 7-system cap; "buys-its-slot" rule; SCOPE.md log on every change | New system proposed without displacement; >2 weeks slip per month | Daniel | Open |
| R-03 | Endgame content cliff (PITFALLS Pitfall 3) | 4 | 5 | 20 | Four-engine retention strategy; "why play at hour 200" doc (D-SCOPE-23) | Slice playtest reaches "what now?" within first hour | Daniel | Open (D-SCOPE-23 mitigates) |
| R-04 | Solo-dev burnout across 4-6 year horizon (PITFALLS Pitfall 4) | 4 | 5 | 20 | Sustainable cadence (D-SUST-01..08); quarterly true week off; persona-zero playtest as motivation source | Daily ritual breaks for >1 week; weekly day off skipped | Daniel | Open (D-SUST locks mitigate) |
| R-05 | Phase 3 takes longer than 5 months (Godot/GDScript/Blender learning curve) | 4 | 3 | 12 | Capability gap matrix (D-SCOPE-16) flags learning steps; intentional 4-5mo budget; Year-3-Wall m12 checkpoint catches | At m7, all 9 slice-blocking foundations not in place | Daniel | Open |
| R-06 | Phase 6 art pipeline disaster | 3 | 4 | 12 | Heavy stylization discipline; standardized Blender→Godot pipeline; cap of 12-15 unique NPCs | Blender→Godot pipeline doesn't yield usable character in <3 weeks | Daniel | Open |
| R-07 | Persona-zero (Dawn) unavailability | 2 | 4 | 8 | Bi-weekly cadence flexible; ring-2 testers by phase 7 as backup | Persona-zero playtest cadence broken for >2 consecutive weeks | Daniel | Open |
| R-08 | GitHub LFS quota exhaustion | 4 | 2 | 8 | Budget $5/mo Data Pack; art-source repo split decision (INFRA-08) | LFS storage approaches 1GB free tier limit | Daniel | Open |
| R-09 | Market thesis rejected by MKTG-06 | 2 | 5 | 10 | D-MKTG-04 Confirmed/Refined/Rejected rubric pre-committed; rejection triggers roadmap revisit before Phase 2 | MKTG-06 verdict = Rejected | Daniel | Open |
| R-10 | AI policy violation leaks to shipped product | 1 | 5 | 5 | Claude refusal list (CLAUDE.md / PHILOSOPHY.md §V); monthly audit; AI-DISCLOSURE.md transparency | Any AI-generated content found in player-facing or public artifact | Daniel + Claude | Open |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |
```

**Source for this format:** PMI/PMBOK risk-register conventions (Asana / Atlassian / ClickUp templates all share same columns). Likelihood × Impact 1-5 scales are PMI standard. Adapted for solo-dev: "Owner" is almost always Daniel; "Status" is the lifecycle field (Open / Mitigated / Triggered / Closed).

### Pattern 5: Capability Gap Matrix (synthesis-allowed)

```markdown
| Skill | Phase needed | Current proficiency (1-5) | Target proficiency (1-5) | Gap | Acquisition plan | Deadline | Status |
|-------|---------------|---------------------------|---------------------------|------|------------------|----------|--------|
| GDScript syntax + idiom | Phase 3 | 1 | 4 | -3 | Godot docs tutorial sequence + GDQuest curriculum | End of Phase 2 (~m4) | Open |
| Godot scene composition | Phase 3 | 1 | 4 | -3 | Heartbeast / GDQuest 3D-cozy tutorials | Phase 3 | Open |
| Blender 3D modeling | Phase 6 | {Daniel scores} | {Daniel scores} | — | YouTube curriculum + indie-cozy character tutorials | Phase 5 | Open |
| Blender rigging + glTF export | Phase 6 | {Daniel scores} | {Daniel scores} | — | Blender Studio glTF guide + supermatrix.studio Blender→Godot guide | Phase 5 | Open |
| Mixamo + retargeting workflow | Phase 6 | {Daniel scores} | {Daniel scores} | — | Asset Library Mixamo Retargeter README | Phase 5-6 | Open |
| Dialogue Manager (Nathan Hoad) | Phase 4 | {Daniel scores} | {Daniel scores} | — | Dialogue Manager docs + example projects | Phase 3 | Open |
| Custom Resource save schema + migrations | Phase 3 | {Daniel scores} | {Daniel scores} | — | GDQuest save-game-godot4 article + practice migration | Phase 3 | Open |
| Steam Web API (for MKTG-06) | Phase 1 | {Daniel scores} | 3 | — | One-page tutorial; LLM helps wrap calls | Phase 1 execution | Open |
| Google Forms + Sheets analysis | Phase 1 | {Daniel scores} | 3 | — | Standard usage; LLM helps with formulas | Phase 1 execution | Open |
| GodotSteam integration | Phase 7-8 | 1 | 3 | -2 | godotsteam.com docs; defer until ~m18 per STACK.md | ~m18 | Deferred |
| butler / itch.io publishing | Phase 8 | 1 | 3 | -2 | itch.io butler docs; first manual upload, automate later | ~m18 | Deferred |
| Music production (Bosca Ceoil → LMMS) | Phase 6+ | {Daniel scores} | {Daniel scores} | — | LMMS + Bosca tutorials; revisit composer-hire decision post-revenue | Phase 6 | Open |
| Narrative writing for state-tagged dialogue | Phase 4+ | {Daniel scores} | {Daniel scores} | — | Inkle "variables not branches" + Dialogic / Disco Elysium voice corpus | Ongoing | Open |
| Steam page copy + capsule art commission process | Phase 8 | 1 | 3 | -2 | Chris Zukowski materials; capsule art commissioned to professional | ~m18 | Deferred |
| Solo-dev project management discipline | All phases | {Daniel scores} | 4 | — | This GSD workflow; monthly retros; Year-3-Wall check-ins | Ongoing | Open |
```

**Source for this format:** AIHR / Personio / Valamis skills-matrix templates. 1-5 proficiency scale is standard. "Gap" computed as current - target; sortable. "Status" lifecycle: Open / In Progress / Acquired / Deferred / Failed-replan.

### Pattern 6: Player Journey skeleton (Yu-kai Chou phase model adapted)

```markdown
| Time mark | Discovery / Onboarding / Scaffolding / Endgame phase | What player is doing | What player is feeling | What systems support it | What goes wrong if pillar X fails |
|-----------|---------|----------------------|------------------------|--------------------------|------------------------------------|
| First 5 min | Onboarding | {action} | {feeling} | CTRL, ONB-01 | {failure mode} |
| First hour | Onboarding → Scaffolding | {action} | {feeling} | CTRL, ONB-02, NPC introductions | {failure mode} |
| Hour 10 | Scaffolding | {action; meeting villagers; first match attempt} | {feeling} | NPC, NARR, COMP, match-puzzle | {failure mode} |
| Hour 100 | Endgame | {action; multiple parallel narrative threads} | {feeling} | Multi-axis relationships; state-tagged dialogue | "what now?" — content cliff |
| Hour 500 | Endgame | {action; player-driven goals} | {feeling} | Four-engine retention | The endgame cliff has fully manifested |
```

**Source:** Yu-kai Chou's gamification phase model (Discovery / Onboarding / Scaffolding / Endgame); GameAnalytics player-journey-mapping; relum.com/lifecycle-mapping. Convergent.

### Pattern 7: Anti-positioning doc structure

```markdown
# Anti-positioning: What Colisi is NOT

## Vs. Stardew Valley
- Differentiator: {1 sentence}
- We share: {1-2 lines}
- We diverge: {3-5 bullets — what we explicitly choose differently and why}
- We do NOT claim to be: "Stardew Killer," "Stardew but X" (PHILOSOPHY.md §III communication guardrail)

## Vs. Baldur's Gate 3
- (same shape)

## Vs. The Sims
- (same shape)

## Vs. Spiritfarer
- (same shape)

## Vs. Coral Island, Sun Haven, Coffee Talk, Palia, Disney Dreamlight Valley, Fae Farm
- (same shape, briefer)

## Vs. AI-generated cozy games
- We are NOT: AI-generated content in shipped product (per PHILOSOPHY.md §V)
- We ARE: human-authored throughout; AI as planning/code partner only; AI-DISCLOSURE.md is public
```

**Source:** This is the standard "positioning brief" / "competitor positioning matrix" pattern from indie marketing (Chris Zukowski + breakingthewheel.com Market Positioning corpus). Adapted for cozy specifically by enumerating each comparable persona-zero has bounced off OR loved.

### Anti-Patterns to Avoid

- **Don't ask Claude to draft creative content prose.** Even if "just to get started" or "just placeholder," this violates PHILOSOPHY.md §V. Refuse and route to Daniel.
- **Don't draft villager / place / item / sprite / mechanic names.** Names are explicitly off-limits unless Daniel asks for an idea-generation prompt with "give me 10 options" framing.
- **Don't write voice-bible content; only structure it.** A voice bible without Daniel-authored sentence-shape examples is empty; refuse to fill those examples.
- **Don't generate reference imagery, mood-board contributions, or palette swatches.** Mood deck is Daniel-and-Dawn curation only.
- **Don't conflate "synthesis-allowed" with "voice-allowed."** Risk register entries can come from PITFALLS.md research (synthesis); but a marketing-line summary of a risk is voice (refuse).
- **Don't draft devlog / Steam page / community-post copy.** All public-facing creative writing is Daniel's.
- **Don't trim deliverables for solo-dev pragmatism.** Daniel's directive: time is not the constraint. Mirror studio orthodoxy fully; Daniel will trim during execution if specific sections turn out to be over-engineered.
- **Don't soften refusals to be helpful.** A refusal that hides behind hedging is worse than a clear refusal (PHILOSOPHY.md §VIII).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Risk register format | Custom risk register columns | PMI/PMBOK standard columns (likelihood × impact × mitigation × tripwire × owner × status) | 30+ years of PM practice; convergent across PM tools; already adopted by Asana, Atlassian, ClickUp templates |
| Skills/capability matrix format | Custom skills matrix | AIHR / Personio / Valamis standard format (skill / current 1-5 / target 1-5 / gap / acquisition plan / deadline) | Same — established HR/PM standard |
| Pillars-of-play structure | Custom format | Hades' Star + GameDesignSkills convergent format (3-5 pillars × phrase + paragraph + design implications + anti-pillar) | Cited across multiple shipped studios; minimal cognitive overhead |
| Player journey phase model | Custom phases | Yu-kai Chou Discovery / Onboarding / Scaffolding / Endgame | Industry-standard four-phase model |
| Core loops diagram | Custom diagram convention | Nested moment-to-moment / session / meta loops (GameDesignSkills + GameAnalytics convention) | Standard cozy/life-sim format |
| World bible TOC | Custom TOC from scratch | World Anvil / Notion world-bible-template TOC adapted for Colisi's locked decisions | Years of refined practice; Daniel can recognize what's missing |
| Demographic-validation methodology | Custom methodology | Chris Zukowski / "How to Market a Game" three-leg triangulation (Steam review mining + community survey + persona research) | Already locked in CONTEXT.md D-MKTG-01..06; matches industry indie standard |
| Save schema design | Custom save format | Custom Resource (`GameStateData.tres`) with versioned schema — already locked in STACK.md | Locked decision; do not revisit in Phase 1 |
| Soft-vs-hard magic distinction | Custom magic-system framework | Brandon Sanderson's First Law of Magic (already cited in D-WORLD-02) | Established author-and-game-design vocabulary |
| Persistent narrative branching | Custom branching system | Inkle "variables not branches" — already locked in PHILOSOPHY.md §I.4 | Locked decision; do not revisit in Phase 1 |
| Greenlight document structure | Custom greenlight format | Standard studio greenlight pattern: vision lock + risk acceptance + tripwires + signature line | Studio orthodoxy across publishers |
| Steam Web API client | Custom API client for review mining | Direct curl / Python requests against `appreviews` endpoint with one-page tutorial | Endpoint is simple; 10-20 games × ~100 reviews each is well within free-tier rate limits |

**Key insight:** Phase 1 is the phase where studio orthodoxy is most valuable, because Daniel doesn't know what good pre-production looks like yet. Hand-rolling formats wastes the orthodoxy advantage. Use convergent industry standards; trim during execution if specific sections turn out to be over-engineered.

## Common Pitfalls

### Pitfall 1: AI policy slippage during creative-content deliverables

**What goes wrong:** A deliverable like "World Bible v0.1" or "Style Guide v0.1 — voice section" tempts Claude (or tired-Daniel) to draft content "just to get started." The first line of fictional in-world voice is the violation. Slippage compounds because the sample becomes a reference.

**Why it happens:** The deliverables are documents Claude knows how to write; the AI policy carves out *creative authorship*; the boundary between "structural draft" and "creative content" is fuzzy in voice-bible-style deliverables.

**How to avoid:** Draw the line at sentence-shape examples and named entities. Claude can author: section headings, methodology checklists, bullet prompts, table structures, scoring rubrics. Claude cannot author: in-world place/character/item names, sample dialogue lines, marketing prose, premise prose, voice samples, palette decisions, reference imagery. When a planning task is ambiguous, default to refusal + route to Daniel.

**Warning signs:**
- A draft contains an in-world named entity Daniel hasn't seen before
- A "draft template" includes filled-in voice samples
- A planning task uses verbs like "write," "compose," "describe in voice" for creative content
- Claude tools generate content for review without explicit Daniel-authoring step

**Phase to address:** Phase 1, every plan. The planner should structurally distinguish "Claude template" tasks from "Daniel content" tasks at plan-task granularity.

### Pitfall 2: Premise pitch as gate, instead of as anchor

**What goes wrong:** Treating the premise pitch (D-PREMISE-01) as another opportunity to re-litigate the vision lock. The vision is locked; persona-zero validated; D-PREMISE-01 is for posterity and downstream-doc anchoring, not re-gating.

**Why it happens:** A "pitch document" feels like a decision artifact. It's not — the decision is already in CONTEXT.md.

**How to avoid:** Frame the premise pitch task as "snapshot the locked premise so all 27 other deliverables can derive from a stable, single-source reference." Daniel writes prose; Claude refuses to draft prose. Pitch is short (1-2 page).

**Warning signs:**
- A planning task asks Daniel to "decide" something already in CONTEXT.md
- Pitch document grows beyond 2 pages
- Pitch document contains hedging language about premise alternatives

**Phase to address:** Phase 1, very first sub-deliverable.

### Pitfall 3: Year-3-Wall thresholds set without comparable-game data

**What goes wrong:** Specific m6/m12/m24/m36 metric thresholds (D-WALL-07 deferred) are set on intuition rather than calibrated against shipped indie cozy games. Tripwires fire too late (no signal) or too early (constant false alarms).

**Why it happens:** Comparable-game data takes time to gather; intuition is fast.

**How to avoid:** Phase 1 execution allocates explicit time for comparable-game research. Sources: Chris Zukowski's wishlist-trajectory case studies, Steam SteamDB stats for 5-10 cozy life sims (release-date wishlist counts where available), howtomarketagame.com posts. Triangulate. Document provenance of each threshold ("at m18, Stardew had X wishlists; we expect 0.3-0.5x given solo-dev-with-AI cadence; threshold = Y").

**Warning signs:**
- A threshold is "1000 wishlists by m18" with no comparable-game cite
- The Replan-Doc protocol fires constantly (false alarms eroding trust) or never (missed signals)
- Daniel struggles to defend a threshold to the outside reviewer

**Phase to address:** Phase 1 execution, after D-SCOPE-21 protocol structure is drafted.

### Pitfall 4: MKTG-06 confirmation bias

**What goes wrong:** The market thesis ("underserved deep cozy enjoyer demographic") is something Daniel emotionally wants to be true. Even with the locked rubric (D-MKTG-04), bias creeps in via game selection, classification interpretation, survey-question wording.

**Why it happens:** Researchers naturally confirm hypotheses. Daniel's persona-zero is his wife; rejection of the thesis is personally costly.

**How to avoid:**
- Stick rigorously to the selection rule (D-MKTG-01 hybrid: rule first, then curation) — don't let curation drift toward "games my persona would like"
- Have Claude propose neutrally-worded survey questions; Daniel critiques for leading-question bias
- Pre-commit to Confirmed/Refined/Rejected verdict criteria BEFORE running classification or survey (D-MKTG-04 already does this — the discipline is to honor it)
- LLM-classification (D-MKTG-02) provides a baseline that's harder to bias than self-classification; Daniel's verification of every tag is the human check
- The outside reviewer (D-WALL-05's pre-committed reviewer) reads MARKET-EVIDENCE.md before the verdict is final

**Warning signs:**
- Game selection drifts away from "top 20 by review count" toward subjective fit
- Survey questions presuppose the thesis ("how much do you dislike time pressure?")
- Verdict is set before all data is in
- Critical reviews are explained away rather than counted

**Phase to address:** Phase 1, MKTG-06 work specifically.

### Pitfall 5: Studio-orthodoxy template engineered without planning to actually use the docs

**What goes wrong:** Phase 1 produces beautiful, comprehensive 28-deliverable packs that nobody reads in Phase 2+. The orthodoxy ritual completes; the documents are dead.

**Why it happens:** Phase 1 is the only phase where producing documents is the work. After Phase 1, documents have to be referenced *while* doing the actual work. If they're not designed to be referenced, they won't be.

**How to avoid:**
- Every deliverable lists "consumed by which downstream phases" up front
- Risk register, capability matrix, SCOPE.md, slice-debt.md, time-pressure-audit.md are LIVE documents — they must be updated, not just authored
- Persona-zero playtest ritual + monthly retro + quarterly review are recurring rituals that touch the docs
- Phase transitions (`/gsd:transition`) re-check Year-3-Wall, time-pressure audit, slice-debt, SCOPE — making them touchable
- World Bible v0.1 / Style Guide v0.1 / Voice Bible v0.1 are explicit version-floor documents that get amended at later phases — their value compounds

**Warning signs:**
- A deliverable doesn't have a downstream consumer named
- A deliverable is structured for one-time authoring, not ongoing reference
- After Phase 1, no plan task references a Phase 1 deliverable
- A deliverable is too long to skim in <5 minutes during a phase-transition check

**Phase to address:** Phase 1, every deliverable.

### Pitfall 6: Scope creep on Phase 1 itself

**What goes wrong:** "We should also have a [37th deliverable] because [studio X has one]." Phase 1 expanded once already (7 → 28). It can expand again.

**Why it happens:** Studio orthodoxy is enormous. There's always one more diagram, one more matrix, one more pre-production doc.

**How to avoid:**
- The 28-deliverable list is locked in CONTEXT.md
- Adding a 29th requires a SCOPE.md entry justifying displacement (per "buys-its-slot" rule)
- Phase 1's purpose is to produce the deliverables, not to perfect the deliverable list

**Warning signs:**
- "We should also include..." midway through Phase 1
- A deliverable expands from 1-page scope to 10-page scope mid-authoring
- Phase 1 estimate stretches beyond 8 months

**Phase to address:** Phase 1, every plan. The planner should size each deliverable's scope explicitly and resist expansion.

## Code Examples

> Phase 1 has no code. The "examples" are document scaffolding samples Claude can use as template starting points (with all creative-content slots left for Daniel).

### Example 1: Pillars of Play template (one pillar — Daniel fills brackets)

```markdown
## Pillar 1: {1-3 word pillar name — Daniel authors}

**Statement:** {1 sentence — Daniel authors}

**Why this pillar:**
{1 paragraph elaboration — Daniel authors. Anchors to persona-zero corpus / locked decisions / dream cross}

**Design implications (3-5):**
- {implication 1 — what does this pillar require us to do? — Daniel authors}
- {implication 2}
- {implication 3}

**Anti-pillar clauses (3-5):**
- We will NOT {explicit non-goal that the pillar might be misread to require — Daniel authors}
- We will NOT {...}
- We will NOT {...}

**Failure-mode signature:** {how do we know in playtest that this pillar is failing? — Daniel authors; cross-references D-SCOPE-08 failure-mode analysis}

**Mechanics this pillar justifies (cross-reference D-SCOPE-07):**
- {REQ-ID-1}: {1-line rationale}
- {REQ-ID-2}: {1-line rationale}
```

**Source:** Synthesized from Hades' Star three-pillars doc + GameDesignSkills "Game Design Pillars" + Game-Design-Pillars course materials. The anti-pillar clause is the discriminator pattern from Tearaway's design lore (Media Molecule) and is what makes pillars actually constrain decisions rather than just describe them.

### Example 2: Why play at hour 200 — four-engine retention application skeleton

```markdown
# Why Play Colisi at Hour 200

> The endgame content cliff (PITFALLS Pitfall 3) is the persona's #1-cited bounce reason across 6 games she's quit. This document specifies, before any code is written, why a player still wants to be playing at hour 200.

## The four-engine retention strategy (from research/SUMMARY.md)

### Engine 1: State-tagged authored dialogue (no max state)
**What:** Every dialogue line is gated by world-state combinations, not friendship-level tiers. 6 base barks × 100 world-state combinations = 600 effective lines.
**At hour 200:** {Daniel authors how this manifests in the sprite + matchmaking premise — what new state combinations are still firing in hour 200 that weren't in hour 50}

### Engine 2: 3+ active narrative threads always
**What:** Multi-thread narrative architecture (NARR-03). When one thread resolves, others continue.
**At hour 200:** {Daniel authors how this manifests for sprite-matchmaking — which villager pairings are still in flight, which couplings have spawned new threads, which match-failures have created their own ongoing arcs}

### Engine 3: Seasonal recurrence with persistent variation across years
**What:** Stardew-shape calendar (D-WORLD-03) with named annual festivals; year-2 festivals reference year-1 outcomes.
**At hour 200:** {Daniel authors how this manifests — what changes festival-to-festival based on accumulated village state}

### Engine 4: Player-driven creative goals
**What:** Sims-style player expression — building, customizing, decorating, role-playing, self-direction.
**At hour 200:** {Daniel authors how the sprite premise + village + decoration + craft + companion-on-outings form a system the player drives goals against}

## Re-interpretation under sprite + matchmaking premise

The four-engine strategy was authored before the vision lock. Each engine retunes under the locked premise:

{Daniel authors how matchmaking-as-puzzle compounds with the four engines — e.g., each successful match creates new state combinations for Engine 1, new threads for Engine 2, new festival reactions for Engine 3, new player-driven goals for Engine 4}

## Failure modes for hour-200 retention

If this document's claims don't hold in slice playtest, what are the warning signs?
- {failure mode 1 — Daniel authors}
- {failure mode 2}
- {failure mode 3}

## Cross-references
- PITFALLS Pitfall 3 (the cliff)
- ARCHITECTURE.md state-flag loose branching
- D-SCOPE-07 Pillar × Mechanic matrix
- D-SCOPE-08 Failure-mode analysis
- D-VISION-04 matchmaking puzzle layer
```

**Source:** The four-engine framing is from research/SUMMARY.md (verified above); skeleton is Claude-authored; all manifestation content is Daniel-authored.

### Example 3: Greenlight document structure

```markdown
# Colisi Greenlight Document

**Date:** {YYYY-MM-DD}
**Project state:** Phase 1 complete; Phase 2 (Infrastructure & Repo Setup) ready to begin.
**Signed by:** Daniel Hicks (solo-dev producer)
**Outside-reviewer co-signature on Year-3-Wall criteria:** {name + date}

## Vision lock confirmation

I confirm the locked vision per CONTEXT.md D-VISION-01..08:
- Player is a magical helper-sprite
- Each villager has personal magic the sprite enables through relationship
- Sprite distributes power, never accumulates it
- Central puzzle layer: matchmaking-via-environmental-manipulation
- Persona-zero (Dawn) validated and co-developed

## Decisions ratified

I ratify the locked tech stack (per STACK.md), architecture (per ARCHITECTURE.md), time model (per D-TIME-01..05), sustainability rhythms (per D-SUST-01..08), Year-3-Wall protocol (per D-WALL-01..07), and MKTG-06 verdict (per MARKET-EVIDENCE.md).

## Year-3-Wall tripwire criteria (load-bearing co-signature)

The following are pre-committed; they fire automatically at the named checkpoint and trigger the structured pause-and-replan protocol per D-WALL-03.

| Checkpoint | Metric | Threshold | Source / rationale |
|------------|--------|-----------|---------------------|
| m6 | {metric} | {threshold} | {citation} |
| m12 | Wishlist count (if Steam page is up) | {threshold} | Comparable-game research per D-WALL-07 |
| m12 | Cumulative phase-completion delta | -{N} months from roadmap | D-WALL-06 productivity metric |
| m24 | Wishlist count | {threshold} | Comparable-game research |
| m24 | Slice ship status | {bar} | Roadmap timeline |
| m36 | Wishlist count | {threshold} | Comparable-game research |
| m36 | "Vol. 1 pivot" criteria | {bar} | The existential checkpoint |

**Outside reviewer:** {name + relationship to project + signature}. The reviewer agrees to read any Replan Doc filed during a tripwire pause and to co-sign or reject the chosen scenario per D-WALL-03 step 5.

## Knowing-what-I-now-know commitment

{Daniel writes — "Knowing what I now know about the scope, the timeline, the AI policy, the four killers, the cozy promise, the vertical slice, my own capabilities, persona-zero's reactions, and the locked architecture — I commit to this." Plus any caveats or watch-items Daniel wants to flag now rather than later. — Daniel authors all prose}

## Sign-off

Signed: {Daniel}
Date: {date}

Co-signed (Year-3-Wall criteria only): {outside reviewer}
Date: {date}
```

**Source:** Standard studio greenlight pattern (publisher / studio greenlight docs are not generally public, but the load-bearing-cosignature pattern is industry-standard for go/no-go decisions). Adapted for Colisi's solo-dev context.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| AI generates draft creative content for editing | AI refuses creative-content authorship; provides scaffolding only | 2024-2026 industry shift; cozy/indie community hardened against AI-generated content | PHILOSOPHY.md §V is the project's adoption of this stance; Steam disclosure is mandatory; reputation downside is asymmetric |
| Procedural-template runtime dialogue | Hand-authored dialogue only | Project decision 2026-05-09 | Endgame retention leans on the other three engines (state-tagged authored dialogue, multiple narrative threads, seasonal recurrence) plus player-driven goals; dialogue authoring load is ~higher; this is accepted as the cost of holding the AI line |
| Hour-based productivity targets ("25 hr/week") | Milestone-based productivity (no hour tracking) | Project decision 2026-05-09 (D-SUST-01..02) | REQUIREMENTS.md HEALTH-04 wording needs amending in Phase 1 to match locked decision |
| Single solo-dev burnout-after-launch (ConcernedApe pattern) | Pre-committed Year-3-Wall pivot tripwires + structured pause-and-replan | Industry post-mortem corpus (last 5 years) | Daniel's locked cadence inverts the ConcernedApe pattern; quarterly true week off + monthly retro + bi-weekly persona-zero are the discipline |
| Friendship-level dialogue gating ("5 hearts") | State-tagged dialogue with world-state combinations | Architecture decision 2026-05-09 (NPC-05) | Already locked; combinatorially scales authored content |
| Branching narrative trees | "Variables, not branches" (Inkle's pattern) | Architecture decision 2026-05-09 | Already locked in PHILOSOPHY.md §I.4 + ARCHITECTURE.md |
| Wall-clock time pressure | Pure action-driven contract | CONTEXT.md decision 2026-05-09 (D-TIME-01) | Trigger list deferred to Phase 1 execution; ARCHITECTURE.md and Phase 5 design align |
| "Stardew Killer" external positioning | Persona-gap positioning ("evolving relationships in a world that never punishes you") | Project decision 2026-05-09 | Communication guardrail in PHILOSOPHY.md §III; D-SCOPE-04 anti-positioning doc enforces |

**Deprecated/outdated (in Phase 1 context):**

- **Procedural-template dialogue layer (PROC-02 — REMOVED 2026-05-09):** Was M2 plan; removed per AI policy; explicitly noted in REQUIREMENTS.md and ROADMAP.md Phase 9
- **HEALTH-04 "~25 hours/week" target:** REQ wording is pre-discuss-phase; D-SUST-01..02 LOCKED milestone-based; REQUIREMENTS.md amendment needed in Phase 1 execution
- **AI placeholder art at any scale:** PHILOSOPHY.md §V hard guardrail; removes from consideration even for internal mood-board scratch work

## Open Questions

1. **Specific Year-3-Wall metric thresholds at m6/m12/m24/m36**
   - **What we know:** Protocol structure locked (D-WALL-01..07). Need wishlist-trajectory data for cozy comparables; SUMMARY.md proposed 1k by m24, 5k by m36, 10k+ by launch as leans.
   - **What's unclear:** Whether 1k by m24 is realistic-vs-aggressive given Phase 1's expanded 4-8 month scope shifting M1 to 22-32 months total; whether productivity-delta thresholds at m6/m12 should be percentage-based or month-count-based.
   - **Recommendation:** Phase 1 execution allocates ~4-8 hours of comparable-game research (2-3 cozy life sims with public wishlist trajectory data; SteamDB historical data; Chris Zukowski case studies). Outside reviewer (per D-WALL-05) sees the proposed thresholds before sign-off.

2. **Magic-tier reconciliation final wording**
   - **What we know:** D-WORLD-04 interprets "magic tier list" as cultural/vocational archetypes + atmospheric scale (NOT mechanical TTRPG tiers). Daniel can correct during Phase 1 World Bible authoring if the interpretation is wrong.
   - **What's unclear:** Whether Daniel's actual creative direction matches the interpretation.
   - **Recommendation:** World Bible v0.1 §4 is where this reconciles. If Daniel authors §4 and finds the interpretation cramps the design, log a SCOPE.md entry for the deviation and update D-WORLD-04 wording.

3. **Style Guide v0.1 visual direction synthesis**
   - **What we know:** Real tension between Sandara Tang's soft-painterly-illustration and Hades' bold-graphic-ink-line schools (D-STYLE-03). Leading hypothesis: cell-shaded painterly-stylized 3D, character-art bold-line bias for NPCs (Hades-leaning), environment painterly with brushstroke flourishes (Okami-leaning), thematic warmth via Ghibli sensibility, soft-illustration-painterly accents per Sandara Tang.
   - **What's unclear:** Whether this synthesis holds when Daniel actually composes a style frame, OR whether one school must dominate.
   - **Recommendation:** Daniel synthesizes during Style Guide v0.1 authoring. Claude does NOT generate visual content or palettes (D-STYLE-03 explicit). If synthesis fails, log SCOPE.md and revisit.

4. **HOME / CRAFT / COMP REQUIREMENTS.md interpretation amendments under sprite premise**
   - **What we know:** CONTEXT.md `<specifics>` flags HOME-01..05, CRAFT-01..07, COMP-01..04, CTRL-01, NPC-09, NPC-06, ROM-01/02 for re-interpretation under the sprite premise. None get cut.
   - **What's unclear:** Whether interpretation amendments belong in Phase 1 (documents direction in World Bible) or at Phase 1 → Phase 2 transition (when REQUIREMENTS.md is amended).
   - **Recommendation:** Phase 1 World Bible v0.1 §8 (open design questions) lists the affected REQs; Phase 1 → Phase 2 transition runs `/gsd:transition` and amends REQUIREMENTS.md with interpretation amendments. CONTEXT.md `<specifics>` already specifies this.

5. **Sprite home/sanctum design + sprite movement/camera spec**
   - **What we know:** Both deferred to Phase 1 World Bible authoring (sketch-level) and Phase 3 implementation.
   - **What's unclear:** Whether sprite has a sanctum at all; what drift-vs-walk traversal means in 3D; how camera follows a non-grounded entity.
   - **Recommendation:** Phase 1 World Bible v0.1 §8 sketches; Phase 3 implements. CTRL-01 satisfied by a third-person camera regardless of traversal model.

6. **Time-model trigger list (canonical actions that advance time)**
   - **What we know:** Pure action-driven contract locked (D-TIME-01); trigger list derives from Core Loops Pack (D-SCOPE-05); D-TIME-05 says "lock during Phase 1 execution OR explicitly defer to Phase 4/5 with rationale."
   - **What's unclear:** Whether Core Loops authoring will surface a clean canonical list in Phase 1, or whether the list is genuinely premature until slice content shapes it.
   - **Recommendation:** Phase 1 plan should attempt to lock during Core Loops Pack drafting; if Daniel finds the trigger list ambiguous post-Loops, defer with documented rationale. Don't force-lock.

7. **MKTG-06 specific games-to-mine list and survey question wording**
   - **What we know:** Methodology locked (D-MKTG-01..06); specifics deferred per D-MKTG-05.
   - **What's unclear:** Specific 10-20 games passing the hybrid selection rule; specific ~10 survey questions.
   - **Recommendation:** Phase 1 execution generates the list (selection rule applied first; Daniel curates additions/drops with rationale per dropped game); Claude proposes neutrally-worded survey questions; Daniel critiques for leading-question bias before distribution.

## Environment Availability

> Phase 1 is documents-only; external dependencies are minimal. Audit included for completeness.

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Markdown editor (any) | All deliverables | ✓ | — | — |
| GitHub (private repo at `https://github.com/danhicks853/colisi.git`) | All commit-tracked deliverables | ✓ | — | Local-only commits if GitHub outage |
| Google account (Forms + Sheets) | MKTG-06 D-MKTG-03 survey | ✓ (Daniel has) | — | — |
| Steam Web API access | MKTG-06 D-MKTG-02 review mining | ✓ (no auth required for public review endpoints) | — | If endpoint changes terms, scrape via headless browser |
| LLM access (Claude) | MKTG-06 D-MKTG-02 LLM-assisted classification | ✓ | — | Manual classification (much slower) |
| Reddit account in good standing for r/CozyGamers post | MKTG-06 D-MKTG-03 distribution | {Daniel verifies} | — | Skip Reddit channel; rely on Discord + social |
| Cozy gaming Discord server moderator approval | MKTG-06 D-MKTG-03 distribution | {Daniel pursues during execution} | — | Skip those channels; broader social distribution |
| Outside reviewer (pre-committed) | D-WALL-05 Year-3-Wall co-signature | {Daniel must designate before D-SCOPE-28 Greenlight} | — | If no reviewer designated, Greenlight cannot complete; treat as Phase 1 blocker |
| Persona-zero (Dawn) availability | D-SUST-07 bi-weekly playtest, D-VISION-05 already-passed gate | ✓ (in household) | — | Per D-SUST-07: ring-2 testers by Phase 7 as backup; if Dawn unavailable for >2 weeks, document pause |
| Daniel's writing capacity for in-world creative content | All Daniel-authored deliverables | ✓ (per directive: time is not the constraint) | — | Phase 1 has no calendar deadline; pace is sustainable nightly session |

**Missing dependencies with no fallback:**
- **Outside reviewer (D-WALL-05)** — must be designated before Greenlight document (D-SCOPE-28) can complete. This is a Phase 1 blocker for Greenlight specifically.

**Missing dependencies with fallback:**
- Reddit / Discord distribution channels — if any channel is unavailable, MKTG-06 leans more heavily on the other channels and broader social tags. Triangulation rubric (D-MKTG-04) still works with reduced sample size, though sample-size note should appear in MARKET-EVIDENCE.md verdict.

## Validation Architecture

> `workflow.nyquist_validation: true` per `.planning/config.json`. Validation Architecture section is included.
>
> **Phase 1 caveat:** Phase 1 has no code. "Validation" for Phase 1 deliverables is **document peer-review by Daniel + persona-zero (Dawn) reactions + outside reviewer signature on Greenlight**. There are no automated tests in Phase 1.

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None for Phase 1 (documents-only). Phase 3 introduces GUT 9.x for GDScript unit tests per STACK.md. |
| Config file | None for Phase 1 |
| Quick run command | None for Phase 1; document validation is human peer-review |
| Full suite command | None for Phase 1 |

### Phase Requirements → Validation Map

| Req ID | Behavior | Validation Type | Validation Method | Artifact Exists? |
|--------|----------|-----------------|--------------------|-------------------|
| HEALTH-01 | SCOPE.md log exists with rationale-tracking template + worked example | manual-only | Daniel signs off on file existence + format compliance + inaugural entry presence | ❌ Wave 0 — needs SCOPE.md drafting |
| HEALTH-02 | slice-debt.md log exists with format spec + worked example | manual-only | Daniel signs off on file existence + format compliance | ❌ Wave 0 — needs slice-debt.md drafting |
| HEALTH-03 | Year-3-Wall pivot tripwires doc exists with cascade m6/12/24/36 + Replan Doc protocol + outside reviewer co-sign criteria | manual-only | Daniel + outside reviewer co-sign Greenlight section | ❌ Wave 0 — needs D-SCOPE-21 doc + threshold research |
| HEALTH-04 | Sustainable-pace cadence doc exists per D-SUST-01..08 | manual-only | Daniel signs off on file + REQUIREMENTS.md HEALTH-04 wording amended | ❌ Wave 0 — needs D-SCOPE-20 doc |
| HEALTH-05 | Persona-zero playtest ritual established + at least 2 sessions executed | observable | (a) ritual doc exists; (b) `.planning/playtest-log/YYYY-MM-DD.md` has ≥2 entries | ❌ Wave 0 — needs ritual doc + first 2 sessions |
| MKTG-06 | MARKET-EVIDENCE.md exists with explicit Confirmed/Refined/Rejected verdict per D-MKTG-04 rubric | observable | (a) file exists at `.planning/MARKET-EVIDENCE.md`; (b) all locked methodology elements (D-MKTG-01..06) reflected; (c) verdict statement + supporting tables | ❌ Wave 0 — needs full MKTG-06 work |

### Sampling Rate

- **Per task commit:** human review by Daniel of the changed deliverable; AI-policy-compliance check (no creative content slipping into Claude-authored sections)
- **Per wave merge:** wave-level peer review of all deliverables in the wave by Daniel; cross-reference checks (deliverable references resolve)
- **Phase gate:** all 28 deliverables present; Greenlight document signed; outside reviewer co-signature present on Year-3-Wall criteria; persona-zero (Dawn) has read all major deliverables and given reactions; MKTG-06 verdict logged

### Wave 0 Gaps

- [ ] `.planning/playtest-log/` directory created (currently does not exist; first action of Phase 1 execution)
- [ ] Document-template scaffolding pack (skeletons for all 28 deliverables) — Wave 0 deliverable enabling subsequent waves
- [ ] Comparable-game wishlist-trajectory research for D-WALL-07 thresholds — small research budget (~4-8 hours) early in Phase 1
- [ ] Outside reviewer designation — Daniel-only task; gates Greenlight (D-SCOPE-28)
- [ ] `r/CozyGamers` post permission inquiry + 2-3 cozy Discord moderator inquiries — Daniel-only task; gates MKTG-06 distribution

*(No automated test infrastructure to install — Phase 1 deliverables are documents validated by human peer review and persona-zero reactions.)*

## Sources

### Primary (HIGH confidence)

- **CLAUDE.md** (project instructions, working directory) — load-bearing AI policy, refusal list, six words, AI policy enforcement role
- **PHILOSOPHY.md** (project constitution) — §V AI Use Policy, §III Guardrails (cozy promise + production guardrails), §VIII Claude's enforcement role
- **AI-DISCLOSURE.md** (referenced via CLAUDE.md) — public-facing AI use disclosure
- **`.planning/phases/01-foundations-vision-lock/01-CONTEXT.md`** — Phase 1 vision lock + 28-deliverable scope expansion + all D-VISION/D-SCOPE/D-TIME/D-WALL/D-MKTG/D-SUST/D-WORLD/D-STYLE/D-PREMISE decisions
- **`.planning/REQUIREMENTS.md`** — Phase 1 maps to HEALTH-01..05, MKTG-06; full requirement traceability table
- **`.planning/STATE.md`** — current project state and decisions logged
- **`.planning/ROADMAP.md`** — Phase 1 success criteria amended to 28-artifact set; brutally honest timeline
- **`.planning/PROJECT.md`** — locked project vision (Colisi)
- **`.planning/research/SUMMARY.md`** — top-line strategic stance, four-engine retention strategy, capsule-art ROI thesis, four killers
- **`.planning/research/PERSONA.md`** — persona-zero (Dawn) corpus
- **`.planning/research/STACK.md`** — feeds D-SCOPE-17 ratification (locked)
- **`.planning/research/ARCHITECTURE.md`** — feeds D-SCOPE-26 ratification (locked); five-autoload pattern, multi-axis relationships, action-driven time
- **`.planning/research/PITFALLS.md`** — feeds Risk Register (D-SCOPE-15) population; four killers + Tier-2 critical pitfalls
- **`.planning/config.json`** — verified `nyquist_validation: true`, `commit_docs: true`, `mode: "yolo"`

### Secondary (MEDIUM-HIGH confidence — methodology references)

- [Game Design Pillars: What Are They and How to Practically Apply Them — GameDesignSkills](https://gamedesignskills.com/game-design/design-pillars/) — pillars-of-play format reference
- [Hades' Star Three Design Pillars — Hades' Star blog](https://blog.hadesstar.com/2016/08/the-three-design-pillars-of-hades-star.html) — example of 3-pillar pattern with name + paragraph + design implications
- [Game-Design-Pillars (open course)](https://orioldedios.github.io/Game-Design-Pillars/) — pillars discriminator pattern
- [How to Create a Skills Matrix — AIHR](https://www.aihr.com/blog/create-skills-matrix-competency-matrix/) — capability gap matrix conventions
- [Skills Matrix Guide — Personio](https://www.personio.com/hr-lexicon/skills-matrix/) — proficiency scale conventions
- [Skills Matrix How-To — Valamis](https://www.valamis.com/hub/skills-matrix) — skills-matrix template format
- [Risk Register: How to Create One — Asana](https://asana.com/resources/risk-register) — PMI-style risk register format
- [Free Risk Register Template — Atlassian Confluence](https://www.atlassian.com/software/confluence/templates/risk-register) — convergent format
- [Video Game Developers Risk Register Template — ClickUp](https://clickup.com/templates/risk-register/video-game-developers) — game-dev-adapted risk register
- [Managing Risk in Video Game Development — Game Developer](https://www.gamedeveloper.com/business/managing-risk-in-video-game-development) — game-dev risk-management practice
- [Designing The Core Gameplay Loop — GameDesignSkills](https://gamedesignskills.com/game-design/core-loops-in-gameplay/) — nested loops convention
- [What Is a Gameplay Loop — vsquad.art](https://vsquad.art/blog/what-gameplay-loop-types-core-loops-explained) — moment / session / meta loop pattern
- [How to design your player journey map — Gamigion](https://www.gamigion.com/how-to-design-your-player-journey-map/) — player-journey conventions
- [Gamification Design: Understanding Player's Journey — Yu-kai Chou](https://yukaichou.com/gamification-examples/experience-phases-game/) — Discovery / Onboarding / Scaffolding / Endgame phases
- [The Player Journey: Lifecycle Mapping — Relum](https://www.relum.com/news/the-player-journey-lifecycle-mapping) — additional player-journey reference
- [How To Market A Game — Chris Zukowski](https://howtomarketagame.com/) — indie-Steam marketing canon
- [How To Market A Game / About — Chris Zukowski](https://howtomarketagame.com/about/) — methodology context
- [How Stardew Valley creator Eric Barone coped with a four year dev cycle — Game Developer](https://www.gamedeveloper.com/production/how-i-stardew-valley-i-creator-eric-barone-coped-with-a-four-year-dev-cycle) — solo-dev cadence cautionary anti-example
- [Eric Barone — Wikipedia](https://en.wikipedia.org/wiki/Eric_Barone) — ConcernedApe biography + cadence
- [The Last Humble Bee postmortem: Staying sane in solo development — Game Developer](https://www.gamedeveloper.com/business/the-last-humble-bee-postmortem-staying-sane-in-solo-development) — solo-dev sustainability post-mortem
- [Disco Elysium: How collaborative writing shaped the game — GamesHub](https://www.gameshub.com/news/features/disco-elysium-narrative-writing-process-18597/) — collaborative writing process for narrative voice bibles
- [Understanding the meaningless, micro-reactive, and marvellous writing of Disco Elysium — Game Developer](https://www.gamedeveloper.com/business/understanding-the-meaningless-micro-reactive-and-marvellous-writing-of-i-disco-elysium-i-) — voice + register patterns
- [Disco Elysium had so much text it broke the branching narrative software — PC Gamer](https://www.pcgamer.com/games/rpg/disco-elysium-had-so-much-text-it-broke-the-branching-narrative-software-we-were-writing-too-much/) — cautionary on dialogue authoring scale
- [Worldbuilding Templates for Gamemasters & Writers — World Anvil](https://www.worldanvil.com/features/worldbuilding-templates) — world-bible TOC reference
- [World Bible Template — Notion Marketplace](https://www.notion.com/templates/world-bible) — world-bible TOC reference
- [Why Cozy Gaming Went From Pandemic Stress Release to Thriving Online Community — Rolling Stone](https://www.rollingstone.com/culture/rs-gaming/what-are-cozy-games-online-community-1235032742/) — r/CozyGamers community size confirmation (250k+)
- [Curled up with a good game: A survey study on personality traits and game motives of cozy game players — Eludamos Journal](https://septentrio.uit.no/index.php/eludamos/article/view/7938) — academic context for cozy-genre demographic research
- [Cozy Gaming: What Developers and Brands Need to Know — Sago](https://sago.com/en/resources/insights/the-rise-of-cozy-gaming-across-borders/) — cross-border cozy-gaming demographic data
- [Designing The Core Gameplay Loop — GameDesignSkills](https://gamedesignskills.com/game-design/core-loops-in-gameplay/) — core-loops nested-loop convention

### Tertiary (LOW confidence — flagged for verification at use time)

- [Market Positioning: The Art of Fighting Without Fighting — Breaking The Wheel](https://www.breakingthewheel.com/market-positioning-fighting-without-fighting/) — anti-positioning framing (single source; verify when using)
- [How to Perfect Your Game's Core Loop — GameAnalytics](https://www.gameanalytics.com/blog/how-to-perfect-your-games-core-loop) — supplementary core-loop reference
- [Tearaway development concepts — PlayStation Blog](https://blog.playstation.com/2017/03/31/tearaway-eight-unseen-concepts-for-media-molecules-papercraft-adventure/) — pillars + design constraints (anecdotal reference for the anti-pillar pattern)

## Metadata

**Confidence breakdown:**
- Document templates (pillars / risk register / capability matrix / world bible TOC / voice bible structure): **HIGH** — convergent across PMI, AIHR, GameDesignSkills, World Anvil sources; multiple-source verified
- AI policy boundaries for each deliverable: **HIGH** — CLAUDE.md and PHILOSOPHY.md §V are unambiguous; classification of each of 28 deliverables grounded in the explicit refusal list
- MKTG-06 methodology: **HIGH** — locked in CONTEXT.md D-MKTG-01..06; matches Chris Zukowski indie-validation canon
- Sustainable-pace cadence: **HIGH** — locked in CONTEXT.md D-SUST-01..08; ConcernedApe anti-example verified in multiple sources
- Year-3-Wall protocol structure: **MEDIUM-HIGH** — protocol locked in CONTEXT.md; specific m6/12/24/36 thresholds genuinely deferred (D-WALL-07) and require comparable-game research during Phase 1 execution
- Architecture / stack ratification: **HIGH** — locked in research/STACK.md and research/ARCHITECTURE.md; Phase 1 records the lock, does not re-research
- World Bible TOC depth: **MEDIUM-HIGH** — DEEP scope per D-WORLD-01; TOC synthesized from World Anvil + Notion templates + project-specific constraints; Daniel may trim during execution per D-STYLE-07's orthodoxy memory rule
- Style Guide v0.1 visual-direction synthesis: **MEDIUM** — real tension flagged in D-STYLE-03; Claude does NOT generate visual content; Daniel synthesizes
- Validation architecture (Phase 1 documents-only): **HIGH** — no code in Phase 1; validation is peer-review + persona-zero reactions + outside-reviewer co-sign; structurally complete

**Research date:** 2026-05-09

**Valid until:** ~2026-08-09 (90 days for stable methodology references; longer for project-locked decisions which are durable). Specific to revisit before use:
- Steam Web API endpoint terms (revisit at MKTG-06 execution time)
- Subreddit and Discord distribution requirements (revisit at MKTG-06 distribution time)
- AI policy regulatory landscape (revisit at every monthly retro per PHILOSOPHY.md §VIII auditing)
