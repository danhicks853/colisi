# Palia (2707930) — Negative Review Classification

**Source:** Steam Web API filter=recent language=english review_type=negative; only 2 reviews returned; 2026-05-10

## Classification table

| R# | Categories | Quote snippet | Verification |
|---|---|---|---|
| R1 | non-substantive | "WARNING do not spend your money on this game" | UNVERIFIED |
| R2 | **time-pressure** (daily-gate-on-ranching) | "let us pet the animals once every 17 hours to get 15 points towards leveling up ranching" | UNVERIFIED |

## Per-game tally (substantive reviews only)

| Category | Count |
|---|---|
| time-pressure | 1 |
| difficulty | 0 |
| endgame | 0 |
| VN-style | 0 |
| required-multiplayer | 0 |
| other | 0 |
| **non-substantive** | 1 |

**Substantive review count:** 1 of 2 (50% signal rate; very small sample)

## Methodology notes

- **Palia returned only 2 negative reviews via standard endpoint** — Palia is free-to-play, which may affect Steam review aggregation; players who bounced typically wouldn't even create a Steam review for F2P content.
- **Required-multiplayer not surfaced in this sample** — but per `PERSONA.md`, persona-zero bounced Palia explicitly for required-multiplayer. The thesis-test for this category needs supplementation:
  - Sample is too small to detect required-multiplayer signal
  - Persona-zero's documented Palia-bounce is the anchor data point
  - Future supplementation: Daniel could fetch more Palia reviews via `filter=all` (sort by helpfulness) which would surface different reviews
- R2's daily-time-gate complaint (17-hour timer between ranching points) is structurally similar to Cozy Grove's daily-time-gate — same time-pressure anti-feature.
- For verdict purposes: Palia's data is insufficient to confirm or deny the required-multiplayer thesis on its own; persona-zero's documented bounce remains the primary source for this anti-feature dimension.
