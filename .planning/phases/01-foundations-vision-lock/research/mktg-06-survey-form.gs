/**
 * MKTG-06 Survey Form Builder
 *
 * Creates a Google Form for the Colisi MKTG-06 demographic validation survey.
 * Paste into Apps Script editor (script.google.com or Forms > Extensions > Apps Script),
 * then click Run > grant permissions > check execution log for the form URL.
 *
 * Source: .planning/phases/01-foundations-vision-lock/research/mktg-06-survey-questions.md
 * Author: Daniel (questions); Claude generated this glue script.
 */

function buildMktg06Survey() {
  const form = FormApp.create('MKTG-06 — Cozy Games Player Survey');

  form.setDescription(
    'Thanks for taking a few minutes to share your cozy gaming preferences. ' +
    'This survey supports independent research into what cozy / life-sim players want and what makes them stop playing. ' +
    'All responses are anonymous unless you choose to share your email at the end. ' +
    'Estimated time: 5–10 minutes.'
  );

  // Form-level settings
  form.setCollectEmail(false);          // don't force Google sign-in
  form.setAllowResponseEdits(true);     // let respondents fix mistakes
  form.setShowLinkToRespondAgain(false);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'Thanks for taking the survey! Your responses help shape an in-development cozy life sim. ' +
    'If you opted in to follow-up, you may hear back later about playtesting opportunities.'
  );

  // ──────────────────────────────────────────────────────────────
  // Q1 — Cozy gaming background
  // ──────────────────────────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('How long have you been playing cozy games or life sims (Stardew Valley, Animal Crossing, Spiritfarer, similar)?')
    .setChoiceValues([
      'Less than 1 year',
      '1–3 years',
      '4–10 years',
      'More than 10 years',
      'I don\'t think of any games I play as "cozy" or "life sim"'
    ])
    .setRequired(true);

  // ──────────────────────────────────────────────────────────────
  // Q2 — Time investment
  // ──────────────────────────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('In a typical week, how many hours do you spend playing cozy games or life sims (when you\'re actively playing one)?')
    .setChoiceValues([
      'Less than 2 hours',
      '2–5 hours',
      '6–10 hours',
      '11–20 hours',
      'More than 20 hours'
    ])
    .setRequired(true);

  // ──────────────────────────────────────────────────────────────
  // Q3 — Games played
  // ──────────────────────────────────────────────────────────────
  form.addCheckboxItem()
    .setTitle('Which of these cozy games or life sims have you played?')
    .setHelpText('Select all that apply.')
    .setChoiceValues([
      'Stardew Valley',
      'Animal Crossing (any entry)',
      'Spiritfarer',
      'Coral Island',
      'Coffee Talk',
      'Cozy Grove',
      'My Time at Portia / Sandrock',
      'Disney Dreamlight Valley',
      'Palia',
      'Wylde Flowers',
      'Sun Haven',
      'A Short Hike',
      'Story of Seasons / Rune Factory (any)',
      'None of the above'
    ])
    .setRequired(false);

  // ──────────────────────────────────────────────────────────────
  // Q4 — Bounce reasons
  // ──────────────────────────────────────────────────────────────
  form.addCheckboxItem()
    .setTitle('When you\'ve stopped playing a cozy game or life sim before finishing what you wanted to do, which of these reasons applied?')
    .setHelpText('Select all that apply, or leave blank if none.')
    .setChoiceValues([
      'I felt time pressure (day clocks, missable events, expiring windows)',
      'A difficulty wall or stat-check stopped me from progressing',
      'I reached the end of the main story / content and there wasn\'t more to do',
      'The game required multiplayer / co-op for content I wanted to experience',
      'The game\'s format wasn\'t what I wanted (e.g., I expected gameplay but got mostly reading)',
      'A required combat / boss-fight mechanic',
      'The game\'s pace felt too slow for me',
      'The game\'s pace felt too fast / overwhelming',
      'I just moved on to other games (no specific reason)',
      'I\'ve never stopped a cozy game before finishing — I always complete them'
    ])
    .setRequired(false);

  // ──────────────────────────────────────────────────────────────
  // Q5 — Positive attractors (max 3)
  // ──────────────────────────────────────────────────────────────
  const q5 = form.addCheckboxItem()
    .setTitle('When you\'re shopping for a cozy game or life sim, which of these features attract you most?')
    .setHelpText('Select up to 3.')
    .setChoiceValues([
      'Building relationships with characters',
      'Crafting / collecting / completing collections',
      'Decorating my home / space / island',
      'Exploring the world and finding new places',
      'Romance options',
      'Animals / pets to care for',
      'Magical / fantasy themes',
      'Realistic / grounded themes',
      'A strong story / narrative',
      'Customization (character / home / etc.)',
      'The art style or aesthetic',
      'The music or atmosphere'
    ])
    .setRequired(true);

  const q5Validation = FormApp.createCheckboxValidation()
    .setHelpText('Please select up to 3 options.')
    .requireSelectAtMost(3)
    .build();
  q5.setValidation(q5Validation);

  // ──────────────────────────────────────────────────────────────
  // Q6 — Time-pressure-specific check
  // ──────────────────────────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('Some cozy games have features like day clocks, missable events, energy meters, or tool durability. How do these features affect your experience?')
    .setHelpText('Pick the answer that best describes you.')
    .setChoiceValues([
      'They make the game more interesting / I enjoy the structure',
      'They\'re fine; I don\'t notice them much',
      'They\'re a minor annoyance but I keep playing',
      'They actively detract from my experience and I keep playing reluctantly',
      'They\'ve caused me to stop playing games I otherwise liked'
    ])
    .setRequired(true);

  // ──────────────────────────────────────────────────────────────
  // Q7 — Long-tail engagement preference
  // ──────────────────────────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('Some cozy games can be played for hundreds of hours; others have a more defined ending. Which type appeals to you more?')
    .setChoiceValues([
      'I prefer games with a defined ending and clear completion',
      'I prefer games I can return to indefinitely',
      'Both, depending on the game',
      'I don\'t have a strong preference'
    ])
    .setRequired(true);

  // ──────────────────────────────────────────────────────────────
  // Q8 — Open-ended ideal cozy game
  // ──────────────────────────────────────────────────────────────
  form.addParagraphTextItem()
    .setTitle('In 1–3 sentences, describe what your ideal cozy game would feel like.')
    .setRequired(false);

  // ──────────────────────────────────────────────────────────────
  // Q9 — Open-ended bounce specifics
  // ──────────────────────────────────────────────────────────────
  form.addParagraphTextItem()
    .setTitle('If you\'ve stopped playing a cozy game before finishing what you wanted to do, what specifically happened?')
    .setHelpText('Optional.')
    .setRequired(false);

  // ──────────────────────────────────────────────────────────────
  // Q10 — Other / additional context
  // ──────────────────────────────────────────────────────────────
  form.addParagraphTextItem()
    .setTitle('Anything else you\'d like to share about your cozy gaming preferences or experiences?')
    .setHelpText('Optional.')
    .setRequired(false);

  // ──────────────────────────────────────────────────────────────
  // Q11 — Permission to follow up
  // ──────────────────────────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('If we wanted to follow up with a few additional questions or share the eventual game with you, would you be open to that?')
    .setHelpText('Email is optional and only used for project communication.')
    .setChoiceValues([
      'Yes',
      'No',
      'Maybe'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Email (optional)')
    .setHelpText('Only fill in if you answered Yes or Maybe above and want follow-up. We won\'t share this with anyone.')
    .setRequired(false);

  // ──────────────────────────────────────────────────────────────
  // Output: URLs
  // ──────────────────────────────────────────────────────────────
  const editUrl = form.getEditUrl();
  const publishedUrl = form.getPublishedUrl();
  const shortUrl = form.shortenFormUrl(publishedUrl);

  Logger.log('=== MKTG-06 Survey Form Created ===');
  Logger.log('Edit URL (you):        ' + editUrl);
  Logger.log('Published URL (share): ' + publishedUrl);
  Logger.log('Short URL (share):     ' + shortUrl);
  Logger.log('===================================');
  Logger.log('Next steps:');
  Logger.log('1. Open the Edit URL above to review the form in the Forms UI.');
  Logger.log('2. Tweak settings if desired (response receipt, theme, etc.).');
  Logger.log('3. Use the Short URL when distributing via r/CozyGamers + Discord + Bluesky.');
}
