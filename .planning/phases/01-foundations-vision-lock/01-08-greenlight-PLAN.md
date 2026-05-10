---
phase: 01-foundations-vision-lock
plan: 08
type: execute
wave: 5
depends_on:
  - 01-00-deliverable-scaffolding
  - 01-01-vision-pack
  - 01-02-risk-capability-process
  - 01-03-loops-journey
  - 01-04-scenario-pack
  - 01-05-world-style-pack
  - 01-06-decision-locks-tripwires
  - 01-07-mktg-06-validation
files_modified:
  - .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md
  - .planning/playtest-log/{YYYY-MM-DD}-bi-weekly-followup.md
autonomous: false
requirements:
  - HEALTH-01
  - HEALTH-03
  - HEALTH-05

must_haves:
  truths:
    - "Persona-zero (Dawn) bi-weekly follow-up session 2 of ≥2 executed; reactions logged at .planning/playtest-log/{YYYY-MM-DD}-bi-weekly-followup.md (HEALTH-05 Phase 1 ritual minimum complete)"
    - "Greenlight document signed by Daniel with explicit 'knowing what I now know, I commit to this' statement"
    - "Outside reviewer co-signature present on Year-3-Wall criteria within Greenlight (per D-WALL-05 + 21-year3wall-tripwires.md outside reviewer designation)"
    - "All 28 Phase 1 deliverables present + signed off + cross-referenced in Greenlight 'Decisions ratified' section"
    - "MKTG-06 verdict from MARKET-EVIDENCE.md cited in Greenlight 'Decisions ratified' section; if verdict = Rejected or Refined-significantly, Greenlight is NOT signed until ROADMAP.md amendment is processed at Phase 1 → Phase 2 transition"
  artifacts:
    - path: ".planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md"
      provides: "Final Greenlight document — gates Phase 2 entry"
    - path: ".planning/playtest-log/{YYYY-MM-DD}-bi-weekly-followup.md"
      provides: "HEALTH-05 session 2 (bi-weekly follow-up)"
  key_links:
    - from: "28-greenlight.md Year-3-Wall criteria section"
      to: "deliverables/process-pack/21-year3wall-tripwires.md"
      via: "Greenlight cosignature is on the same threshold table as in the tripwires doc"
      pattern: "Year-3-Wall|outside reviewer"
    - from: "28-greenlight.md Decisions ratified section"
      to: "All 27 prior deliverables (D-SCOPE-01..27)"
      via: "Greenlight ratifies the entire Phase 1 set; cross-references all"
      pattern: "D-SCOPE-(0[1-9]|1[0-9]|2[0-7])"
    - from: ".planning/playtest-log/{YYYY-MM-DD}-bi-weekly-followup.md"
      to: "deliverables/process-pack/22-personazero-playtest-ritual.md"
      via: "Session 2 follows the structured note template established in the ritual doc"
      pattern: "structured note template|bi-weekly"
---

<objective>
Final Phase 1 plan. Two tasks:

1. **Persona-zero (Dawn) bi-weekly follow-up session** (HEALTH-05 session 2 of ≥2 minimum) — Dawn reads the Phase 1 deliverables that have landed since session 1 (Loops, Scenario, World Bible, Style Guide, Hour-200 retention doc, MARKET-EVIDENCE.md verdict) and reacts. Logs to `.planning/playtest-log/{YYYY-MM-DD}-bi-weekly-followup.md`.

2. **Greenlight document signed** — Daniel signs the Phase 1 Greenlight per D-SCOPE-28 with explicit "knowing what I now know, I commit to this" statement. Outside reviewer (designated in plan 01-06) co-signs Year-3-Wall criteria. This gates Phase 2 entry.

Purpose: Phase 1 is complete only when Greenlight is signed. The four killers are mitigated by structure now, not just intent. Daniel commits to the project knowing the scope, timeline, AI policy, persona's reactions, and market verdict. Outside reviewer's cosignature is the load-bearing accountability for Year-3-Wall pivot decisions over the next 36 months.

Output: 1 signed Greenlight + 1 persona-zero session log entry.

**AI-policy boundary:** Greenlight "knowing what I now know" prose is Daniel-only — load-bearing creative content per RESEARCH.md Example 3. Claude does NOT draft this paragraph. Persona-zero session log is Daniel-only (Dawn's quotes are Daniel-transcribed, not Claude-paraphrased).

**MKTG-06 gate:** Per CONTEXT.md / RESEARCH.md / ROADMAP — if MKTG-06 verdict from plan 01-07 is "Rejected" or "Significantly Refined," Greenlight CANNOT be signed until ROADMAP.md amendment is processed at Phase 1 → Phase 2 transition. The Greenlight signature would otherwise be making a commitment without acknowledging the verdict's impact on roadmap.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/ROADMAP.md
@.planning/REQUIREMENTS.md
@.planning/SCOPE.md
@.planning/MARKET-EVIDENCE.md
@.planning/phases/01-foundations-vision-lock/01-CONTEXT.md
@.planning/phases/01-foundations-vision-lock/01-RESEARCH.md
@.planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md
@.planning/phases/01-foundations-vision-lock/deliverables/process-pack/21-year3wall-tripwires.md
@.planning/phases/01-foundations-vision-lock/deliverables/process-pack/22-personazero-playtest-ritual.md
@CLAUDE.md
@PHILOSOPHY.md
</context>

<tasks>

<task type="checkpoint:human-verify" gate="blocking">
  <name>Task 1: Persona-zero (Dawn) bi-weekly follow-up session 2 — reactions to Loops / Scenario / World / Style / Hour-200 / MARKET-EVIDENCE</name>
  <files>
    .planning/playtest-log/{YYYY-MM-DD}-bi-weekly-followup.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/process-pack/22-personazero-playtest-ritual.md (signed ritual doc — defines structured note template),
    .planning/playtest-log/*-vision-pack-reaction.md (session 1 from plan 01-01 — continuity check),
    .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/05-core-loops.md (Dawn reads),
    .planning/phases/01-foundations-vision-lock/deliverables/scenario-pack/09-slice-scenario-sketch.md (Dawn reads — first hour of slice walkthrough),
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/12-world-bible-v0.1.md (Dawn reads relevant sections — likely §1 overview + §6 culture sketches she's most interested in),
    .planning/phases/01-foundations-vision-lock/deliverables/world-style-pack/14-style-guide-v0.1.md (Dawn reads — visual direction synthesis is Daniel's call but Dawn's reaction matters per D-VISION-05 co-developer status),
    .planning/phases/01-foundations-vision-lock/deliverables/process-pack/23-why-play-at-hour-200.md (Dawn reads — does the four-engine retention argument LAND for her at hour 200?),
    .planning/MARKET-EVIDENCE.md (Dawn reviews verdict — for emotional context as the persona-zero whose framing this validates / refines / rejects),
    PHILOSOPHY.md (§V — Claude does not paraphrase Dawn's quotes)
  </read_first>
  <action>
    **Daniel runs Phase 1's persona-zero session 2 (HEALTH-05 minimum reached at 2 sessions).** Per D-SUST-07 + ritual doc 22.

    Per the ritual format (still pre-Phase-3 docs-and-reactions mode):

    1. **Setup:** Schedule 30-min session with Dawn. Have on-screen the Phase 1 deliverables that have landed since session 1: Slice Scenario sketch, World Bible v0.1 §1 + §6, Style Guide visual direction synthesis, Why-Play-at-Hour-200, MARKET-EVIDENCE.md verdict.

    2. **Reading + observation (~20 min, Daniel observes silently):** Dawn reads. Daniel tracks her reactions — does the slice walkthrough feel like the game they co-developed? Does the world bible's cultural sketch land? Does the visual direction synthesis match what Dawn pictured? Does the four-engine retention argument convince her she'd still want to play at hour 200?

    3. **Structured questions (~10 min):**
       - "What did you expect this game to be that the docs didn't deliver?"
       - "What part of the docs felt off, confusing, or wrong?"
       - "One thing you'd change?"
       - **Plus session-specific anchor:** "If you were playing the slice walkthrough scene-by-scene right now, where would you bounce? Where would you keep going?" (Hour-200 retention doc gates this question.)

    4. **Logging (Daniel writes log entry — Claude does not paraphrase):** Daniel creates `.planning/playtest-log/{YYYY-MM-DD}-bi-weekly-followup.md` with:
       - Date, Build version (Phase 1 docs — slice walkthrough + world + style + retention + MKTG verdict), Setup, Observations (timed), Quotes (Dawn's exact words), Daniel's reactions, Action items.

    5. **Action items routing:** If reactions surface scope-impacting concerns (e.g., "the matchmaking puzzle layer feels confusing in the scenario"), Daniel decides whether action item is:
       - Copy-edit revision before Greenlight (fix in deliverable + commit)
       - SCOPE.md entry + queue for Phase 2 / 3 deeper resolution
       - Roadmap-amending concern (which would block Greenlight per Phase 1 → Phase 2 transition rules)

    **Per AI policy:** Claude does not write the log entry. Claude does not paraphrase Dawn. Claude can verify the file exists at the right path with required template sections. Claude can flag if the file accidentally contains AI-generated content (won't happen in this session — habit per PHILOSOPHY.md §VIII auditing).
  </action>
  <verify>
    <automated>ls .planning/playtest-log/*-bi-weekly-followup.md 2>/dev/null | wc -l</automated>
  </verify>
  <acceptance_criteria>
    - At least one `*-bi-weekly-followup.md` file exists in `.planning/playtest-log/`: `ls .planning/playtest-log/*-bi-weekly-followup.md | wc -l` returns ≥1.
    - Total persona-zero session log count ≥2 (HEALTH-05 minimum): `ls .planning/playtest-log/*.md 2>/dev/null | wc -l` returns ≥2.
    - File follows structured note template: `grep -cE '^## (Date|Build version|Setup|Observations|Quotes|Daniel.s reactions|Action items)' .planning/playtest-log/*-bi-weekly-followup.md` returns ≥6.
    - Filename matches ISO-date pattern: `\d{4}-\d{2}-\d{2}-bi-weekly-followup.md`.
    - File is non-empty: `wc -l .planning/playtest-log/*-bi-weekly-followup.md` returns ≥10.
    - **Manual confirmation by Daniel:** Dawn read the relevant Phase 1 deliverables; reactions captured authentically (not paraphrased); action items (if any) routed correctly. Daniel signs: `**Session conducted by:** Daniel`.
    - **AI-policy compliance:** Quotes are Daniel's transcription of Dawn's words. (Manual check at commit.)
  </acceptance_criteria>
  <done>HEALTH-05 session 2 executed; log file committed; HEALTH-05 Phase 1 minimum (≥2 sessions) reached; any action items routed.</done>
</task>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 2: Daniel signs Greenlight document; outside reviewer co-signs Year-3-Wall criteria — gates Phase 2 entry</name>
  <authored_by>daniel</authored_by>
  <files>
    .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md
  </files>
  <read_first>
    .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md (Claude-populated structure scaffold from plan 01-00 + Example 3 from RESEARCH.md),
    .planning/MARKET-EVIDENCE.md (verdict),
    .planning/phases/01-foundations-vision-lock/deliverables/process-pack/21-year3wall-tripwires.md (Daniel-signed thresholds + outside reviewer designation),
    .planning/phases/01-foundations-vision-lock/01-CONTEXT.md (D-VISION-01..08; D-SCOPE-28; D-WALL-05 enforcement),
    .planning/phases/01-foundations-vision-lock/01-RESEARCH.md (Example 3 Greenlight document at lines 757..804),
    PHILOSOPHY.md (§V — Greenlight commitment paragraph is Daniel's; load-bearing creative content),
    CLAUDE.md (Six Words: "Architect for the full game. Ship the slice. Respect the player. Don't burn out.")
  </read_first>
  <action>
    **Pre-Greenlight gate check (CRITICAL):**
    Before Daniel signs, Claude verifies the gating conditions:
    - All 28 deliverables present in `.planning/phases/01-foundations-vision-lock/deliverables/`.
    - All synthesis-allowed deliverables Daniel-signed (15, 16, 17, 20, 21, 22, 23, 24, 25, 26).
    - All creative-content deliverables Daniel-authored (01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14).
    - MARKET-EVIDENCE.md verdict present at `.planning/MARKET-EVIDENCE.md`.
    - **MKTG-06 gate:** If verdict = Rejected or Refined-significantly, **Greenlight is NOT signed in this plan.** Daniel runs `/gsd:transition` first to amend ROADMAP.md per the verdict's impact, THEN re-runs Greenlight. The transition is a separate workflow; the Greenlight task is paused until amendment lands. (Per ROADMAP.md success criterion 27 + RESEARCH.md MKTG-06 verdict logic.)
    - HEALTH-05 ≥2 sessions complete (logs at .planning/playtest-log/).
    - Outside reviewer designated in 21-year3wall-tripwires.md.
    - SCOPE.md updated with all Phase 1 amendments (HEALTH-04 wording, MKTG-06 verdict, any orphan-mechanic cuts, any sprite-premise REQ interpretation queues).

    If gates pass, proceed.

    **Daniel populates the Greenlight document:**

    Per scaffold + RESEARCH.md Example 3:

    **§Vision lock confirmation** — Already populated by scaffold with D-VISION-01..08 citations. Daniel verifies + adds: "Persona-zero (Dawn) validated and co-developed; vision was locked 2026-05-09 in `/gsd:discuss-phase 1`."

    **§Decisions ratified** — Daniel populates with cross-references:
    - Stack ratified per `research/STACK.md` + `25-stack-ratification.md` (Daniel signed)
    - Architecture ratified per `research/ARCHITECTURE.md` + `26-architecture-ratification.md` (Daniel signed; sprite-premise REQ interpretation amendments queued for Phase 2)
    - Time model locked per `D-TIME-01..05` + `24-time-model-lock.md` (Daniel signed; trigger list status: LOCKED with list / DEFERRED to Phase 4-5)
    - Sustainability rhythms locked per `D-SUST-01..08` + `20-sustainable-pace-cadence.md` (Daniel signed; REQUIREMENTS.md HEALTH-04 amended)
    - Year-3-Wall protocol locked per `D-WALL-01..07` + `21-year3wall-tripwires.md` (Daniel signed)
    - MKTG-06 verdict per `MARKET-EVIDENCE.md` (verdict: {Confirmed | Refined | Rejected})
    - World Bible v0.1 deep scope per `D-WORLD-01..06` + `12-world-bible-v0.1.md`
    - Style Guide v0.1 Full per `D-STYLE-01..07` + `14-style-guide-v0.1.md`

    **§Year-3-Wall tripwire criteria (load-bearing co-signature)** — Daniel copies the threshold table from `21-year3wall-tripwires.md`. The cosignature line at the bottom is for the outside reviewer.

    **§Knowing-what-I-now-know commitment** — **Daniel writes this paragraph (load-bearing creative content; Claude does NOT draft).** Per RESEARCH.md Example 3 lines 794..796: "Knowing what I now know about the scope, the timeline, the AI policy, the four killers, the cozy promise, the vertical slice, my own capabilities, persona-zero's reactions, and the locked architecture — I commit to this." Plus any caveats or watch-items Daniel wants to flag now rather than later. Daniel-authored prose. ~150-300 words.

    **§Sign-off:**
    Daniel signature line: `Signed: Daniel Hicks` + date.
    Outside reviewer co-signature line (Year-3-Wall criteria only): `Co-signed (Year-3-Wall criteria only): {outside reviewer name}` + date.

    **Outside reviewer cosignature process:**
    Daniel sends the populated Greenlight (specifically the Year-3-Wall section + thresholds) to the designated outside reviewer for cosignature. Reviewer reads, asks questions, may challenge thresholds. Daniel responds. Once reviewer signs, Daniel commits the Greenlight to git.

    **Per AI policy:** The "knowing what I now know" paragraph is Daniel's. The cross-references in Decisions ratified are factual citations Claude can verify but Daniel writes the section. Outside reviewer cosignature is between Daniel and reviewer; Claude does not pose as reviewer.

    **Add SCOPE.md entry for Phase 1 completion** (per HEALTH-01):
    `| {YYYY-MM-DD} | Phase 1 | Greenlight signed by Daniel + outside reviewer cosigned Year-3-Wall criteria; Phase 1 complete | All 28 deliverables present + signed; MKTG-06 verdict {Confirmed/Refined/Rejected}; HEALTH-05 ritual minimum reached | One-way-door (Phase 1 → Phase 2 transition; ROADMAP amendments before Phase 2 if any from MKTG-06 or persona-zero) | .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md |`
  </action>
  <verify>
    <automated>grep -F 'Signed: Daniel' ".planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md" && grep -F 'Co-signed' ".planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md"</automated>
  </verify>
  <acceptance_criteria>
    - Daniel signature present: `grep -E '^Signed: Daniel' .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md` returns ≥1.
    - Outside reviewer cosignature present: `grep -F 'Co-signed' .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md` returns ≥1, AND outside reviewer name not "{name}" placeholder: `grep -F '{outside reviewer}' .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md` returns 0.
    - Vision lock confirmation references D-VISION-01..08: `grep -cE 'D-VISION-0[1-8]' .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md` returns ≥8.
    - Decisions ratified section cross-references all key Phase 1 deliverables: `grep -cE '(STACK.md|ARCHITECTURE.md|24-time-model-lock|20-sustainable-pace|21-year3wall|MARKET-EVIDENCE|12-world-bible|14-style-guide)' .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md` returns ≥6 unique deliverable refs.
    - Year-3-Wall threshold table populated (matches 21-year3wall-tripwires.md): `grep -cE '\| m(6|12|24|36) \|.*\| [0-9]+' .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md` returns ≥4.
    - Knowing-what-I-now-know paragraph present (no `{Daniel writes}` placeholder remaining): `grep -F '{Daniel writes' .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md` returns 0.
    - MKTG-06 verdict cited: `grep -ciE '(Confirmed|Refined|Rejected)' .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md` returns ≥1 (matches the verdict from MARKET-EVIDENCE.md).
    - SCOPE.md has new entry for Greenlight signing: `grep -F 'Greenlight signed' .planning/SCOPE.md` returns ≥1.
    - **MKTG-06 gate respected:** If verdict = Rejected or Refined-significantly, Greenlight has explicit acknowledgment that ROADMAP.md amendment is queued before Phase 2 entry: `grep -ciE '(roadmap revision|amendment.*queued)' .planning/phases/01-foundations-vision-lock/deliverables/greenlight/28-greenlight.md` returns ≥1 IF verdict ≠ Confirmed (manual check by Daniel).
  </acceptance_criteria>
  <done>Greenlight document signed by Daniel + outside reviewer cosigned Year-3-Wall criteria; SCOPE.md entry logged; Phase 1 complete; Phase 2 entry unblocked (subject to /gsd:transition processing any roadmap amendments).</done>
</task>

</tasks>

<verification>
After both tasks:
1. **HEALTH-05 ritual minimum reached** (≥2 persona-zero session logs at .planning/playtest-log/).
2. **Greenlight signed** with both Daniel signature + outside reviewer cosignature on Year-3-Wall criteria.
3. **All 28 Phase 1 deliverables present and signed** (file existence + signature presence checks).
4. **SCOPE.md current** with all Phase 1 amendments and Greenlight entry.
5. **MARKET-EVIDENCE.md verdict acknowledged** in Greenlight; if non-Confirmed, ROADMAP amendment queued for /gsd:transition.

This is the phase-gate. After Greenlight signature, run `/gsd:transition` to advance to Phase 2.
</verification>

<success_criteria>
- 28 Phase 1 deliverables present + signed (auto-check via existence + signature greps across deliverables/).
- Greenlight signed by Daniel + Outside reviewer co-signed.
- HEALTH-05 progresses to Phase 1 minimum (≥2 sessions).
- HEALTH-03 progresses (Year-3-Wall criteria pre-committed in writing in Greenlight per D-WALL-05).
- HEALTH-01 progresses (Phase 1 completion entry in SCOPE.md).
- ROADMAP success criterion 28 satisfied (Greenlight document exists, dated, signed, "knowing what I now know" statement, Year-3-Wall criteria as load-bearing co-signature).
- Phase 1 → Phase 2 transition unblocked (subject to ROADMAP amendment processing if MKTG-06 verdict ≠ Confirmed).
</success_criteria>

<output>
After completion, create `.planning/phases/01-foundations-vision-lock/01-08-greenlight-SUMMARY.md` documenting: persona-zero session 2 outcomes (Dawn's reactions summarized — Daniel writes; Claude does not paraphrase), Greenlight signature dates (Daniel + outside reviewer), Year-3-Wall threshold table snapshot, MKTG-06 verdict re-cited, ROADMAP amendment queue status (none / queued for /gsd:transition).

This is also the trigger for `/gsd:transition` to Phase 2.
</output>
