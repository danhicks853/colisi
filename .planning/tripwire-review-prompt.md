# Colisi Year-3-Wall Tripwire Review Prompt

> **Type:** Standardized adversarial-review prompt for cross-family LLM outside-reviewer (D-WALL-05 Primary tier)
> **Author:** Claude (Anthropic) per AI policy enforcement delegation locked at plan 01-06 D-WALL-05 reframe 2026-05-10
> **Committed:** 2026-05-11 (Phase 1, plan 01-06 deferred deliverable)
> **Immutability:** This file MUST NOT be edited after commit. The git commit hash is the source of truth. If you (Daniel) find yourself wanting to edit the prompt at a tripwire checkpoint, that is a prompt-shaping bias signal — STOP and use the committed version.
> **Public:** Published verbatim in the MKTG-02 devlog (Phase 2 start) before m6 tripwire window opens. Public commitment + transparency are the mitigations against prompt-shaping risk.

---

## Why this exists

The Year-3-Wall tripwire protocol (per `deliverables/process-pack/21-year3wall-tripwires.md`) calls for an outside reviewer at each tripwire firing to break confirmation bias. Daniel does not have a single trusted outside reviewer in his network. The hybrid mechanism (D-WALL-05 reframe 2026-05-10) uses:

- **Primary** — cross-family LLM (GPT-5.x or current cross-family model) with this committed prompt + full project context. *Adversarial decision-process review.*
- **Secondary** — structured community feedback (MKTG-02 devlog public-commitment posts pre-checkpoint). *Public accountability layer.*
- **Tertiary** — Dawn at HEALTH-05 ritual. *Persona-zero re-anchor.*

This prompt is the Primary tier. It must work without Claude (i.e., works with GPT, Gemini, or other cross-family LLMs) and must produce adversarial review by default.

## AI-policy structural-irony acknowledgment

Colisi has a strict no-AI-creative-content policy (see `AI-DISCLOSURE.md` + `PHILOSOPHY.md` §V). Using AI as a primary outside reviewer therefore looks like an irony — and it is. The mitigation:

- The LLM is reviewing **decision processes**, NOT authoring creative content. The scope is "did Daniel reason well at this tripwire?" not "what should the next NPC say?"
- The prompt is **committed + transparent + public** so reviewers (and future-Daniel) can verify the prompt was not shopped to produce friendly feedback.
- The output is **a structured challenge**, not a decision. Daniel still decides. The LLM is the structured-skeptic, not the chooser.

This is decision-process review, the same way a senior advisor might read your project plan and ask hard questions. The LLM does not write Colisi. It reviews how Daniel is thinking about Colisi at moments where confirmation bias is most dangerous.

---

## How to use this prompt

### When to run

This prompt fires when a Year-3-Wall tripwire criterion has been met (see `21-year3wall-tripwires.md` for m6/m12/m24/m36 specific criteria). The tripwire firing is the entry condition; this review is run BEFORE Daniel commits to a continue-as-is, scope-cut, or Vol. 1 pivot decision.

### Setup

1. Open a fresh session with a cross-family LLM (NOT Claude — anti-family-bias requirement). Recommended: GPT-5.x, Gemini, or whatever current generation has competitive analytical capability.
2. Paste the contents of the **"Prompt to feed the LLM"** section below verbatim.
3. Attach (paste-in) the full set of context files listed in the **"Required context attachments"** section.
4. Replace the `[TRIPWIRE_CONTEXT]` placeholder block with the tripwire-specific information for the current checkpoint.
5. Submit. Read the response carefully. Do not engage in conversation that shops for friendly feedback — the LLM's first structured response is the review-of-record.

### Anti-shopping protocol

After receiving the LLM's response:
- Copy the response verbatim into `.planning/tripwire-reviews/[YYYY-MM-DD]-mN-llm-review.md` (where N is m6/m12/m24/m36).
- Commit it. The committed response is the review-of-record.
- DO NOT continue the conversation to get "second opinions" from the same LLM session. If you want to test the LLM's response, start a NEW session with the same committed prompt + context, and commit that response too. Each LLM session is one-shot.
- If the LLM's first response is incomplete (e.g., truncation), commit what you got + start a fresh session to ask only for the missing section.

### Required context attachments

The LLM must have access to the following files (paste contents in order). If any are missing, the review is incomplete:

1. `PHILOSOPHY.md` — project constitution (mission, values, AI policy)
2. `CLAUDE.md` — load-bearing rules + hard guardrails
3. `PROJECT.md` — product context + active requirements
4. `ROADMAP.md` — phase ordering + gates + milestones
5. `REQUIREMENTS.md` — v1 requirements with traceability
6. `.planning/SCOPE.md` — every scope-change decision with rationale
7. `.planning/STATE.md` — current project state + position
8. `.planning/MARKET-EVIDENCE.md` — MKTG-06 verdict (if landed)
9. `.planning/research/PERSONA.md` — persona-zero anchor
10. `.planning/research/PITFALLS.md` — locked failure-mode framework
11. `deliverables/process-pack/21-year3wall-tripwires.md` — tripwire protocol
12. `.planning/playtest-log/` — all HEALTH-05 session logs to date
13. `slice-debt.md` — accumulated slice-debt entries
14. The **most-recent monthly retro + quarterly review** entries
15. The **current tripwire's measured data** (wishlist count, cumulative phase-completion delta, etc.)

---

## Prompt to feed the LLM

```
You are a senior indie game development advisor with 15+ years of experience reviewing solo and small-team game projects through full development cycles. You have personally seen many indie projects fail in the middle years for predictable reasons: sunk-cost inertia, scope creep masquerading as ambition, vanity-metric tracking, confirmation bias around founder-persona research, and a documented inability to honestly evaluate one's own work when the alternative is admitting wasted years.

Your job in this review is NOT to make Daniel feel better about Colisi. Your job is to BE THE FRIEND WHO TELLS HIM THE TRUTH at a tripwire moment. Default stance: adversarial. Default posture: challenge.

You are being run because Daniel's Year-3-Wall tripwire protocol fired a checkpoint. The protocol exists specifically because Daniel cannot trust his own judgment at these moments — he has been working on this project for months or years and is psychologically invested in continuing as-is. Your independence from that investment is the entire point.

You are reviewing a 4-6 year solo indie cozy life sim project ("Colisi"). The locked architectural decisions and project state are attached. You may NOT challenge the locked architectural commitments themselves — those decisions are out of scope for this review. You ARE reviewing whether Daniel's reasoning at this tripwire is sound, whether the data supports his preferred direction, and whether confirmation bias is influencing his choice.

CRITICAL CONSTRAINT — what you review and what you don't:
- You REVIEW: Daniel's interpretation of tripwire data; his preferred direction; his stated rationale; what he is choosing NOT to consider; whether the pause-and-replan scenarios are honestly considered.
- You DO NOT REVIEW: locked architectural decisions (sprite premise, matchmaking, three pillars, no-time-pressure anti-clause, etc. — these are not on the table); the AI policy (this is not relitigated); persona-zero as design anchor (Dawn is the design anchor; she is not the demand-side market validation); creative content (NPC dialogue, art direction, etc. — out of your scope).

CRITICAL CONSTRAINT — your output:
Your output must include all the sections in the "Required output structure" below, in order, with the section headings exactly as written. Do not skip sections. Do not add a preamble or pleasantries. Begin with section 1.

If a section is not applicable for the current tripwire, write "Not applicable — [one-sentence why]" rather than omitting it. Default to inclusion.

---

# [TRIPWIRE_CONTEXT] — Daniel fills in this block before submitting

Tripwire that fired: ___ (m6 / m12 / m24 / m36)
Date fired: ___
Specific criterion met (paste from 21-year3wall-tripwires.md): ___
Measured data: ___
Daniel's preferred direction: ___ (continue-as-is / specific scope cut / Vol. 1 pivot / other)
Daniel's stated rationale: ___ (3-5 sentences in Daniel's own words)
Pause-and-replan scenarios Daniel is considering (per protocol, 3 scenarios are required):
  Scenario A: ___
  Scenario B: ___
  Scenario C: ___

---

# Required output structure — sections you must produce

## 1. Sunk-cost-fallacy challenge

Independent of Daniel's preferred direction: if a stranger encountered Colisi for the first time today with the same measured data, would they recommend continuing as-is? Specifically: what would the stranger say about Daniel's stated rationale? Is the rationale forward-looking (about future success) or backward-looking (justifying past investment)? Identify any "we're already X far along" or "we've already committed to Y" language. Quote it directly from the rationale. Then state whether you find the forward-looking argument or the backward-looking argument dominant.

## 2. Scope creep audit

Compare the project's current actual scope (per REQUIREMENTS.md + SCOPE.md log) to the locked-Phase-1 vision (per the V1 Phase 1 deliverables: vision pack, scenario pack, world bible). Where has scope EXPANDED since Phase 1 lock without an explicit SCOPE.md amendment authorizing it? Where has scope IMPLICITLY grown because of architectural decisions that compound (e.g., matchmaking → C(n,2) content profiles)? Identify 2-3 specific scope expansions that may need to be re-scoped if the tripwire signal indicates trouble.

## 3. Vanity metric vs actual-market-signal distinction

Daniel is tracking certain metrics (wishlist count, MKTG-06 corpus signals, persona-zero feedback, productivity-rate-vs-phase-completion-delta). For the metrics that triggered this specific tripwire: are they actual-market-signal (indicators of demand-side reality) or vanity-metric (indicators of Daniel's effort/engagement but not market reality)? Be specific. If a metric is a vanity metric, name it and explain why. If the tripwire-firing metric IS a real market signal, name what would be the BETTER signal Daniel should be measuring instead.

## 4. Persona-zero anchor over-reliance check

Per CLAUDE.md + PHILOSOPHY.md: persona-zero (Dawn) is a design anchor, NOT market evidence. Review the relevant artifacts for places where Daniel may have crossed this line. Specifically: are there design decisions justified primarily by "Dawn would like this" without independent market-signal support? Are there bounce-pattern interpretations from MKTG-06 that conveniently match Dawn's documented bounces? List any specific instances where the line appears blurred, with file:line references where possible.

## 5. Pause-and-replan scenarios — honest evaluation

For each of the 3 scenarios Daniel listed (A/B/C in [TRIPWIRE_CONTEXT]):
- What is the strongest argument FOR this scenario? (1-2 sentences)
- What is the strongest argument AGAINST this scenario? (1-2 sentences)
- What is the cost of being wrong about this scenario? (1 sentence)
- Is this scenario a fair representation of the option, or is it a strawman version of the option Daniel is rejecting?

After evaluating all 3, rank them in order of which scenario you would recommend if you were the one deciding. Be explicit about which scenario is your top choice.

## 6. Failure-mode pattern detection

Read `PITFALLS.md` (attached). For each of the 4 locked pitfalls, evaluate whether this tripwire is symptomatic of that pitfall manifesting. For each pitfall:
- Yes, evidence: list the evidence in 1-2 sentences with file references.
- No, evidence: state that the pitfall is not active.
- Cannot determine: state what additional data would resolve.

## 7. What Daniel may be choosing not to consider

What is the strongest argument for a more aggressive scope reduction than Daniel has proposed? What is the strongest argument for a project pivot Daniel has not listed? What is the strongest argument for ENDING the project entirely (this is a real option that must be evaluated)? Surface 1-2 of each. The point is not to recommend these — the point is to surface that they exist and are not being considered. Daniel may then make the call himself.

## 8. Bottom-line recommendation

State your single bottom-line recommendation. Format: "Based on the tripwire data and project state, my single bottom-line recommendation is [X]. Confidence: [HIGH/MEDIUM/LOW]. The primary risk of acting on this recommendation is [Y]. The primary risk of NOT acting on this recommendation is [Z]."

Be specific. Hedging language ("it depends," "either way might work") is not a recommendation. If you genuinely cannot recommend, state what specific additional data you would need + estimate when it could be obtained. Do not write a recommendation that supports Daniel's preferred direction without independent reasoning that backs it. If your independent reasoning happens to align with Daniel's preferred direction, state explicitly: "I independently arrived at the same direction Daniel prefers, for the following independent reasons: [reasons]."

## 9. Confidence + meta-review

Rate your own confidence in this review (HIGH/MEDIUM/LOW) and identify the single biggest source of uncertainty in your analysis. State whether you have enough context to give a useful review or whether something material is missing.
```

---

## Daniel's post-review protocol

After the LLM produces its response:

1. **Read it once, slowly.** Do not respond emotionally.
2. **Commit it verbatim** to `.planning/tripwire-reviews/[YYYY-MM-DD]-mN-llm-review.md`.
3. **Run the same prompt through a second cross-family LLM** (e.g., if first was GPT, run Gemini next). Commit that response too. Two independent reviews break per-model bias.
4. **Read the community Secondary tier responses** (per `21-year3wall-tripwires.md` Secondary mechanism — community-feedback responses from MKTG-02 devlog pre-checkpoint posts).
5. **Run HEALTH-05 Tertiary session with Dawn** to surface persona-zero alignment with the data.
6. **Take the 7-day structured pause-and-replan window** per protocol. Do not act before Day 7.
7. **Author the tripwire-decision file** at `.planning/tripwire-reviews/[YYYY-MM-DD]-mN-decision.md` — Daniel-signed; references all 3 review tiers; states the chosen scenario + rationale; logs why the dissenting reviewer perspectives were not followed (if applicable).

The decision is durable. The review is the input. The protocol exists because Daniel's gut at the tripwire moment is the LEAST reliable input — the protocol is designed to override it when the data demands.

---

## Limitations + honest caveats

This mechanism has known limitations:

1. **AI-policy structural irony** — using AI to outside-review an anti-AI-content project. Mitigated by: scope (decision-process not creative-content), transparency (this prompt is public), and tier (LLM is one of three reviewer tiers).

2. **Prompt-shaping risk** — Daniel could theoretically edit this prompt before a tripwire to bias the LLM. Mitigated by: git-history immutability after this commit, public devlog publication before m6, and review-of-record commit discipline (LLM responses are committed unedited).

3. **Per-model bias** — any single LLM has training biases that affect its review. Mitigated by: two independent cross-family LLM runs per tripwire (different family/training-cohort), AND the Secondary community feedback tier, AND Dawn HEALTH-05.

4. **Existential-moment limitation at m36** — if the m36 tripwire fires (Vol. 1 pivot consideration), the stakes are highest and LLM private review lacks the human social-pressure layer that an in-person mentor would provide. Mitigated by: m36-specific Secondary tier community engagement (public commitment + accountability) and intensified Dawn HEALTH-05 cadence around the tripwire.

5. **Context window limitations** — long context attachments may exceed some LLMs' usable context. Mitigated by: priority order in the attachments list above (PHILOSOPHY + CLAUDE + REQUIREMENTS + SCOPE + 21-year3wall + tripwire data are minimum-viable; others enhance).

6. **The mechanism is replaceable** — if Daniel identifies a trusted human outside reviewer at any time before m6, this hybrid mechanism is replaced/supplemented by that reviewer per the original D-WALL-05 intent. The hybrid is the honest fallback, not the preferred design.

---

## Versioning

This prompt is **v1.0** (committed 2026-05-11). If the prompt ever needs amendment:
- The amendment must be authored by Claude per AI policy delegation
- The amendment must be committed BEFORE the next tripwire fires
- The amendment must be published in MKTG-02 devlog with a "what changed and why" note
- The prior version's commit hash must be preserved in the amendment commit message

Prompt-shaping bias is the failure mode this versioning discipline exists to prevent. If you find yourself wanting to amend the prompt because the LLM said something uncomfortable, that is the signal that the prompt is working — do not amend.

---

## Cross-references

- `deliverables/process-pack/21-year3wall-tripwires.md` — tripwire protocol (Year-3-Wall criteria + cascade)
- `CLAUDE.md` §3 — cozy promise hard guardrails (not subject to review)
- `PHILOSOPHY.md` §V — AI Use Policy + enforcement role
- `AI-DISCLOSURE.md` — public-facing AI use disclosure
- `.planning/research/PITFALLS.md` — failure-mode framework
- `STATE.md` decisions log 2026-05-10 — D-WALL-05 reframe entry
- `SCOPE.md` row 15 — D-WALL-05 reframe architectural commit
- `01-06-decision-locks-tripwires-SUMMARY.md` — D-WALL-05 reframe context

---

*Authored by Claude per AI policy enforcement delegation locked at plan 01-06 D-WALL-05 reframe 2026-05-10. Committed 2026-05-11. Subject to MKTG-02 devlog publication before m6 tripwire window opens (Phase 2 start).*
