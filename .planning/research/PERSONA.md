# Persona Research: Lead Persona Interview

**Source:** Structured interview by Daniel with his wife (lead persona) on 2026-05-09
**Method:** Took her favorite Steam games (most-played time + finished end-to-end), asked two questions per game (favorite thing, least favorite thing). Then asked about games quit early due to frustration. Then asked for her dream game cross.

This persona is **persona zero** for the project. Design decisions should default to her demographic's needs. When in doubt, return to this corpus.

---

## Most-played / finished-completely (loved games)

### Alba: A Wildlife Adventure
- **Loved:** solving the puzzles, taking pictures of the animals
- **Hated:** can't remember much; frustrated with timing to take the pictures

### The Creature Kitchen
- **Loved:** solving puzzles, interactions with creatures in the kitchen, crafting
- **Hated:** finicky controls, difficulty doing basic things

### Strange Antiquities
- **Loved:** storyline, solving the puzzles, crafting
- **Hated:** when there was no obvious answer to the puzzle; ambiguous solutions not telegraphed plainly

### Beacon Pines
- **Loved:** really interesting narrative, solving the puzzles
- **Hated:** in CYOA, having to go all the way to the end and start over from the beginning *(anti-roguelite signal)*

### Winter Borough
- **Loved:** going out and collecting things that had story attached, crafting
- **Hated:** very time-management based; punishing time-window mechanics

### Bear and Breakfast
- **Loved:** gradual progression
- **Hated:** end-game felt monotonous and pointless

### Baldur's Gate 3
- **Loved:** gradual progression, storyline, decisions impact gameplay, companions, team-based gameplay. *"It makes me feel like I'm less alone."*
- **Hated:** when things get so difficult that I can't progress; "I don't feel like I've built up the skills to finish the game" *(difficulty-curve ramp)*

### Fallout
- **Loved:** gradual progression, storyline, decisions impact gameplay, companions
- **Hated:** difficulty-curve ramp near end-game; same skill-buildup issue as BG3

### The Sims (all)
- **Loved:** having control, building a life, seeing how I can affect the happiness of others with my choices
- **Hated:** finicky controls; *"you have the perfect Sim, you love it, your Sim leads a life, then they die, then what do you do? When you get bored with it, what do you do?"*

### Hogwarts Legacy
- **Loved:** gradual progression, storyline, decisions impact gameplay
- **Hated:** difficulty-curve ramp

### Little Witch in the Woods
- **Loved:** storyline
- **Hated:** once the story was over I lost interest

### Paperbark
- **Loved:** storyline
- **Hated:** once the story was over I lost interest

### Rollercoaster Tycoon
- **Loved:** control, seeing my creativity brought to life and play out in the real world
- **Hated:** *"once you've built this fantastic park, then what?"*

### Spiritfarer
- **Loved:** going out and collecting things with story attached, crafting
- **Hated:** difficulty-curve ramp

### Spirittea
- **Loved:** going out and collecting things with story attached, crafting
- **Hated:** end-game felt monotonous and pointless

### Stardew Valley *(most played, 1000+ hours)*
- **Loved:** *"Interacting with the characters is what kept me coming back."*
- **Hated:** very time-management based; punishing time-window mechanics

### Strange Horticulture
- **Loved:** storyline, solving puzzles, crafting
- **Hated:** when there was no obvious answer; ambiguous solutions not telegraphed

### Wildflowers
- **Loved:** meeting characters, getting to know them, learning the story
- **Hated:** *(none captured)*

---

## Quit early (<2 hours)

### Sunhaven
- terrible, unintuitive controls

### Travelers Rest
- could not understand how to play

### Palia
- required real-life multiplayer collaboration

### Coffee Talk
- visual novel — did not like the genre at all

### The Stillness of the Wind
- *"I don't need a game to break my heart. I don't want a story so sad that even if you do everything right, it still doesn't end well."*

---

## Stated dream

> *"If I could find a game that was a cross of Baldur's Gate and the Sims, that would be perfect for me."*

**Identified core gameplay loop (her words):**
> *"Talking to the people and finding where I fit in."*

---

## Player skill / patience profile (Daniel's note)

> *"My wife has VERY low patience for complicated control schemes. She has a difficult time learning new systems mid-game. She wants easy, but engaging, and extremely intuitive. That's where a lot of games fall short. They're over-complicated for a casual game enjoyer."*

---

## Synthesis — the patterns

### Loves (mentioned 3+ times)
1. Storyline / narrative
2. Crafting (5+ explicit mentions)
3. Going out to collect things *with story attached*
4. Gradual progression
5. Decisions that impact gameplay / world
6. Characters and relationships ("less alone")
7. Solving puzzles (when answers are clear)
8. Control / building / creativity / expression

### Hates (with frequency)

| Pattern | Games it killed for her | Implication for design |
|---|---|---|
| Time-pressure / missable windows | Stardew, Winter Borough | **No real-time-clock punishment, ever.** |
| Difficulty ramp at endgame | BG3, Fallout, Hogwarts, Spiritfarer | **Power curve must plateau, not spike.** |
| "Story ends → game ends" | Little Witch, Paperbark | **Need a meaningful post-story loop.** |
| Monotonous endgame / "then what?" | Bear & Breakfast, Spirittea, RCT, Sims | **Relationships and goals must keep evolving.** |
| Ambiguous puzzles / no telegraph | Strange Horticulture, Strange Antiquities | **Puzzles must be solvable through clear signposting.** |
| Restart-from-beginning CYOA | Beacon Pines | **Branching must persist forward, not reset.** |
| Finicky / complex controls | Sunhaven, Travelers Rest, Sims, Creature Kitchen | **Simple, intuitive controls non-negotiable.** |
| Required multiplayer | Palia | **Single-player core.** |
| Visual-novel format | Coffee Talk | **Embodied 3D world, not VN.** |
| Forced sad endings | The Stillness of the Wind | **Bittersweet OK, tragic-no-matter-what NO.** |

### The biggest insight

Her #1 game is Stardew at 1000+ hours, but she still names time pressure as the bad part. She's effectively saying *"I love Stardew's relationship core despite the time pressure, not because of it."* If we strip the time pressure and double down on the relationship core, that's a market gap.

### The endgame problem

Across nearly every game she bounced off (Bear & Breakfast, Spirittea, RCT, Sims, Little Witch, Paperbark), the failure mode is identical: content runs out, story ends, or progression flatlines, and there's no reason to keep playing. **Solving the endgame problem is the central design challenge for this project.** The implied solution from her own words: characters and relationships that keep evolving indefinitely.
