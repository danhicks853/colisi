---
author: Daniel
end_product: GDD — every mechanic in REQUIREMENTS.md scored against every pillar; orphan mechanics flagged for cut/adopt
canonical_path: .planning/phases/01-foundations-vision-lock/deliverables/loops-journey-pack/07-pillar-mechanic-matrix.md
source_decisions: D-SCOPE-07
input_dependencies:
  - 02-pillars.md (column headers come from your pillar names)
  - .planning/REQUIREMENTS.md (mechanic rows come from REQ-IDs)
length_target: full matrix (every REQ × every pillar) + orphan-flag table
hard_guardrails:
  - Score each cell: 2 = mechanic strongly serves pillar; 1 = mechanic weakly serves; 0 = neutral; -1 = mechanic UNDERMINES pillar
  - Any mechanic scoring 0 across all pillars is an orphan candidate — must justify or cut
  - Any mechanic scoring -1 against any pillar is a contradiction signal — must reconcile or cut
  - Claude can pre-fill the matrix shell (REQ rows × pillar columns from your pillars) once pillars + REQUIREMENTS.md are stable
order: third doc in Game Design Doc group; depends on pillars (group 1) + REQUIREMENTS.md being stable
---

# Pillar × Mechanic Matrix

## Mechanic × Pillar scoring matrix

## Orphan-mechanics flag table

## Cross-references

*(Claude can build matrix shell from pillar names + REQ-IDs once pillars are locked.)*
