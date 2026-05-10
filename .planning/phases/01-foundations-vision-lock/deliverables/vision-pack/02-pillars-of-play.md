---
deliverable: 02
pack: vision
title: Pillars of Play
author: Daniel
ai_role: structure-only
depends_on:
  - 01-vision-pitch.md
  - .planning/phases/01-foundations-vision-lock/01-CONTEXT.md
  - .planning/research/PERSONA.md
decisions_referenced:
  - D-SCOPE-02
  - D-VISION-01
  - D-VISION-02
  - D-VISION-03
  - D-VISION-04
  - D-VISION-06
downstream_consumers:
  - 07-pillar-mechanic-matrix.md (matrix is pillar × mechanic; cannot be filled until pillars are named)
  - 08-failure-mode-analysis.md (failure modes are pillar-by-pillar)
  - 23-why-play-at-hour-200.md (retention engines map to pillars)
  - Every Phase 3+ system-design plan (every new system passes "which pillar does this serve" check per PHILOSOPHY.md §II Design guidelines)
---

> **AI POLICY (PHILOSOPHY.md §V):** Daniel authors all content in this file. Claude provides ONLY the section structure below and refuses to draft pillar names, statements, or implications. Claude critiques drafts when Daniel requests.

# Pillars of Play — Colisi

> Per `D-SCOPE-02`: 3–5 emotional/experience pillars, each with paragraph elaboration + 3–5 specific design implications + 3–5 anti-pillar clauses. Defaulting to 4 pillar slots below; Daniel may collapse to 3 or extend to 5 during authoring.
>
> **Source format** (per `01-RESEARCH.md` Pattern 3 / Example 1): Hades' Star three-pillars doc + GameDesignSkills "Game Design Pillars" + Tearaway's anti-pillar clause discriminator pattern from Media Molecule. The anti-pillar clause is what makes pillars *constrain* decisions rather than just describe them.

---

## Pillar 1: {1–3 word name — Daniel authors}

**Statement:** {1 sentence — Daniel authors}

**Why this pillar:**
{1 paragraph elaboration — Daniel authors. Anchors to persona-zero corpus, locked decisions (D-VISION-01..08), or the dream cross.}

**Design implications (3–5):**
- {implication 1 — what does this pillar require us to do? — Daniel authors}
- {implication 2 — Daniel authors}
- {implication 3 — Daniel authors}
- {implication 4 — Daniel authors *(optional)*}
- {implication 5 — Daniel authors *(optional)*}

**Anti-pillar clauses (3–5):**
- We will NOT {explicit non-goal that the pillar might be misread to require — Daniel authors}
- We will NOT {Daniel authors}
- We will NOT {Daniel authors}
- We will NOT {Daniel authors *(optional)*}
- We will NOT {Daniel authors *(optional)*}

**Failure-mode signature:** {how do we know in playtest that this pillar is failing? — Daniel authors; cross-references `08-failure-mode-analysis.md`}

**Mechanics this pillar justifies (cross-ref `07-pillar-mechanic-matrix.md`):**
- {REQ-ID-1}: {1-line rationale — Daniel authors}
- {REQ-ID-2}: {1-line rationale — Daniel authors}
- {REQ-ID-3}: {1-line rationale — Daniel authors *(optional)*}

---

## Pillar 2: {1–3 word name — Daniel authors}

**Statement:** {1 sentence — Daniel authors}

**Why this pillar:**
{1 paragraph elaboration — Daniel authors}

**Design implications (3–5):**
- {Daniel authors}
- {Daniel authors}
- {Daniel authors}
- {Daniel authors *(optional)*}
- {Daniel authors *(optional)*}

**Anti-pillar clauses (3–5):**
- We will NOT {Daniel authors}
- We will NOT {Daniel authors}
- We will NOT {Daniel authors}
- We will NOT {Daniel authors *(optional)*}
- We will NOT {Daniel authors *(optional)*}

**Failure-mode signature:** {Daniel authors}

**Mechanics this pillar justifies:**
- {REQ-ID}: {Daniel authors}
- {REQ-ID}: {Daniel authors}

---

## Pillar 3: {1–3 word name — Daniel authors}

**Statement:** {1 sentence — Daniel authors}

**Why this pillar:**
{1 paragraph elaboration — Daniel authors}

**Design implications (3–5):**
- {Daniel authors}
- {Daniel authors}
- {Daniel authors}

**Anti-pillar clauses (3–5):**
- We will NOT {Daniel authors}
- We will NOT {Daniel authors}
- We will NOT {Daniel authors}

**Failure-mode signature:** {Daniel authors}

**Mechanics this pillar justifies:**
- {REQ-ID}: {Daniel authors}
- {REQ-ID}: {Daniel authors}

---

## Pillar 4: {1–3 word name — Daniel authors *(optional — collapse to 3 if 4 feels redundant)*}

**Statement:** {1 sentence — Daniel authors}

**Why this pillar:**
{1 paragraph elaboration — Daniel authors}

**Design implications (3–5):**
- {Daniel authors}
- {Daniel authors}
- {Daniel authors}

**Anti-pillar clauses (3–5):**
- We will NOT {Daniel authors}
- We will NOT {Daniel authors}
- We will NOT {Daniel authors}

**Failure-mode signature:** {Daniel authors}

**Mechanics this pillar justifies:**
- {REQ-ID}: {Daniel authors}
- {REQ-ID}: {Daniel authors}

---

## Cross-references

- `01-vision-pitch.md` — pillars must align with the locked premise
- `.planning/phases/01-foundations-vision-lock/01-CONTEXT.md` — `D-VISION-01..08`, `D-SCOPE-02`
- `.planning/research/PERSONA.md` — persona-zero love/hate axes inform pillar shape
- `07-pillar-mechanic-matrix.md` — every mechanic in REQUIREMENTS.md scored against these pillars
- `08-failure-mode-analysis.md` — pillar-failure signatures
- `23-why-play-at-hour-200.md` — retention strategy mapped to pillars
