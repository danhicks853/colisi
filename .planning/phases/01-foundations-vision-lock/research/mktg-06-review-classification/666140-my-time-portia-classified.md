# My Time at Portia (666140) — Negative Review Classification

**Source:** Steam Web API filter=recent language=english review_type=negative; 30 reviews; 2026-05-10

## Classification table

| R# | Categories | Quote snippet | Verification |
|---|---|---|---|
| R1 | other (boring, grindy) | "incredibly boring with an empty yet grindy start" | UNVERIFIED |
| R2 | other (bug, save-loss) | "constantly crashes... no ability to manually save" | UNVERIFIED |
| R3 | other (bugs-unfixed) | "developers have a very bad habit of not fixing old bugs" | UNVERIFIED |
| R4 | other (writing-bland) | "every NPC is like talking to monotone AIs" | UNVERIFIED |
| R5 | other (bugs) | "It crashed on day 2" | UNVERIFIED |
| R6 | other (bug-achievements) | "bugged achievements" | UNVERIFIED |
| R7 | non-substantive | "not good" | UNVERIFIED |
| R8 | other (production-quality) | "Immersive is a deranged description... jank" | UNVERIFIED |
| R9 | other (mac-crashes) | "random crashes on Mac" | UNVERIFIED |
| R10 | **time-pressure** | "map doesn't stay active so you can find your destination before the sun goes down" | UNVERIFIED |
| R11 | other (slow, surface-level) | "very surface-level, scattered/confusing, and slow" | UNVERIFIED |
| R12 | other (mac-crashes, save-loss) | "crashes... lose like half a day's worth of progress" | UNVERIFIED |
| R13 | other (grinding) | "too much grinding to progress" | UNVERIFIED |
| R14 | non-substantive (bugs-only) | "really glitchy and broken" | UNVERIFIED |
| R15 | other (game-didn't-click) | "really tried" but couldn't connect | UNVERIFIED |
| R16 | **time-pressure**, other (crash-save) | "racing back to your bed (and save point) before your timer for the next scheduled crash" + crashes | UNVERIFIED |
| R17 | other (grindy, repetitive) | "grindy and repetitive" | UNVERIFIED |
| R18 | **required-combat-anti-clause** (closest to "other-but-cozy-violation") | "Thought I finally found a casual game that doesn't make you go in caves and do fighting. Nope, you have to do fighting zZz!!! Ruined it for me" | UNVERIFIED |
| R19 | other (crash, poor-first-impression) | "greeted me with a crash before I even got to the menu" | UNVERIFIED |
| R20 | **time-pressure**, other (save-system) | "crafting that's on timers and has you racing across the world map" + save-only-at-day-end | UNVERIFIED |
| R21 | other (buggy, crashes) | "freezes every so often... crashing nearly every other time" | UNVERIFIED |
| R22 | other (mac-crashes) | "crashes every 15-20 minutes" | UNVERIFIED |
| R23 | non-substantive | "so much jank" | UNVERIFIED |
| R24 | other (unfinished-feel) | "feels unfinished and rough" | UNVERIFIED |
| R25 | non-substantive | "Kind of boring" | UNVERIFIED |
| R26 | non-substantive | "overall feel of the game just puts me off" | UNVERIFIED |
| R27 | other (quest-blocking-bug) | "bugs in the main narrative quest line... no point in continuing" | UNVERIFIED |
| R28 | difficulty (crafting), **time-pressure** (crafting-on-timers implicitly) | "crafting recipes are quite difficult, and require building more and more machines just to keep up" | UNVERIFIED |
| R29 | **time-pressure** | "Why do the days go by so fast?" | UNVERIFIED |
| R30 | difficulty (crafting), other (poor-UX) | "crafting is too difficult, the character design looks inflexible, the camera angles are terrible" | UNVERIFIED |

## Per-game tally (substantive reviews only)

| Category | Count |
|---|---|
| **time-pressure** | **5 (R10, R16, R20, R28, R29)** |
| difficulty | 2 (R28, R30) |
| endgame | 0 |
| VN-style | 0 |
| required-multiplayer | 0 |
| **required-combat (cozy-mismatch)** | **1 (R18)** — note: maps to "required combat" anti-clause per cozy promise, technically not in D-MKTG-02 5-category framework but is one of Colisi's locked Out-of-Scope anti-clauses |
| other | 19+ (bugs, crashes, save-loss, grindy, mac-issues, writing-bland) |
| **non-substantive** | 6 (R7, R14, R23, R25, R26 + 1 ambiguous) |

**Substantive review count:** 24 of 30 (80% signal rate)
**time-pressure rate (of substantive):** 5 of 24 = 21%
**Bug/crash rate:** 13+ of 24 = 54% (dominant, technical)

## Methodology notes

- **Strong time-pressure signal** — Portia's daily-clock (day timer) combined with save-only-at-end-of-day creates compounded time-pressure-coded complaints. R20's quote ("racing across the world map to complete tasks") and R29's "Why do the days go by so fast?" are particularly relevant.
- **R18 is direct support for combat anti-clause** — player explicitly wanted casual cozy + got required combat = bounced. Aligns with persona-zero's BG3/Fallout/Hogwarts Legacy bounces per `PERSONA.md`.
- **Bugs dominate**, but the time-pressure signal is still substantial (21%).
