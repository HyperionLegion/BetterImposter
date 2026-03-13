import type { ContentPair } from '../types/game';

export const questionPairs: ContentPair[] = [
  // Would You Rather (12 pairs)
  { normal: 'Would you rather have unlimited money or unlimited free time?', impostor: 'Would you rather have unlimited money or unlimited energy?', category: 'Would You Rather' },
  { normal: 'Would you rather relive freshman year or skip to senior year?', impostor: 'Would you rather relive high school or skip to graduation?', category: 'Would You Rather' },
  { normal: 'Would you rather give up social media or give up Netflix?', impostor: 'Would you rather give up your phone or give up your laptop?', category: 'Would You Rather' },
  { normal: 'Would you rather always be 10 minutes early or always be 10 minutes late?', impostor: 'Would you rather always be overdressed or always be underdressed?', category: 'Would You Rather' },
  { normal: 'Would you rather have a personal chef or a personal trainer?', impostor: 'Would you rather have a personal driver or a personal chef?', category: 'Would You Rather' },
  { normal: 'Would you rather know everyone\'s secrets or have no one know yours?', impostor: 'Would you rather read minds or be invisible?', category: 'Would You Rather' },
  { normal: 'Would you rather never have homework or never have exams?', impostor: 'Would you rather never have group projects or never have presentations?', category: 'Would You Rather' },
  { normal: 'Would you rather travel the world for a year or get a dream job immediately?', impostor: 'Would you rather travel the world for a year or get a full-ride scholarship?', category: 'Would You Rather' },
  { normal: 'Would you rather be famous on TikTok or respected in your field?', impostor: 'Would you rather be famous on YouTube or have a million-dollar startup?', category: 'Would You Rather' },
  { normal: 'Would you rather live in New York or Los Angeles?', impostor: 'Would you rather live in a big city or a small town?', category: 'Would You Rather' },
  { normal: 'Would you rather party every weekend or have every weekend free?', impostor: 'Would you rather go out every night or have the best home setup?', category: 'Would You Rather' },
  { normal: 'Would you rather have perfect memory or perfect creativity?', impostor: 'Would you rather be incredibly lucky or incredibly smart?', category: 'Would You Rather' },

  // Hot Takes (10 pairs)
  { normal: 'What\'s the most overrated thing about college?', impostor: 'What\'s the most overrated thing about high school?', category: 'Hot Takes' },
  { normal: 'What\'s the biggest waste of money in college?', impostor: 'What\'s the biggest waste of time in college?', category: 'Hot Takes' },
  { normal: 'What\'s the most underrated college experience?', impostor: 'What\'s the most underrated life skill?', category: 'Hot Takes' },
  { normal: 'What class should everyone be required to take?', impostor: 'What class should be removed from all curriculums?', category: 'Hot Takes' },
  { normal: 'What\'s the worst advice people give college students?', impostor: 'What\'s the worst advice people give high school seniors?', category: 'Hot Takes' },
  { normal: 'What\'s a hot take about dating in college?', impostor: 'What\'s a hot take about friendships in college?', category: 'Hot Takes' },
  { normal: 'What trend needs to die immediately?', impostor: 'What trend from the past needs to come back?', category: 'Hot Takes' },
  { normal: 'What\'s the most overrated social media platform?', impostor: 'What\'s the most overrated streaming service?', category: 'Hot Takes' },
  { normal: 'What\'s something everyone pretends to like?', impostor: 'What\'s something everyone pretends to understand?', category: 'Hot Takes' },
  { normal: 'What hill will you die on about food?', impostor: 'What hill will you die on about music?', category: 'Hot Takes' },

  // College Confessions (10 pairs)
  { normal: 'What\'s your most embarrassing moment at a party?', impostor: 'What\'s your most embarrassing moment in class?', category: 'College Confessions' },
  { normal: 'What\'s the laziest thing you\'ve done in college?', impostor: 'What\'s the laziest thing you\'ve done at work?', category: 'College Confessions' },
  { normal: 'What\'s the weirdest thing in your dorm room?', impostor: 'What\'s the weirdest thing on your phone?', category: 'College Confessions' },
  { normal: 'What\'s a college rule you always break?', impostor: 'What\'s a social rule you always break?', category: 'College Confessions' },
  { normal: 'What\'s the longest you\'ve gone without sleeping?', impostor: 'What\'s the longest you\'ve gone without studying?', category: 'College Confessions' },
  { normal: 'What\'s the worst meal you\'ve ever made?', impostor: 'What\'s the worst meal you\'ve ever been served?', category: 'College Confessions' },
  { normal: 'What\'s your guilty pleasure TV show?', impostor: 'What\'s your guilty pleasure song?', category: 'College Confessions' },
  { normal: 'What\'s the most impulsive purchase you\'ve made?', impostor: 'What\'s the most impulsive decision you\'ve made?', category: 'College Confessions' },
  { normal: 'What\'s something your parents don\'t know about?', impostor: 'What\'s something your friends don\'t know about?', category: 'College Confessions' },
  { normal: 'What\'s the biggest lie you\'ve told a professor?', impostor: 'What\'s the biggest lie you\'ve told a friend?', category: 'College Confessions' },

  // Social Scenarios (10 pairs)
  { normal: 'How do you handle an awkward silence?', impostor: 'How do you handle an awkward compliment?', category: 'Social Scenarios' },
  { normal: 'What do you do when someone you don\'t like sits next to you?', impostor: 'What do you do when someone you don\'t know talks to you?', category: 'Social Scenarios' },
  { normal: 'How do you leave a boring conversation?', impostor: 'How do you leave a boring party?', category: 'Social Scenarios' },
  { normal: 'What\'s your go-to icebreaker?', impostor: 'What\'s your go-to conversation topic?', category: 'Social Scenarios' },
  { normal: 'How do you respond to \'tell me about yourself\'?', impostor: 'How do you respond to \'what do you do for fun\'?', category: 'Social Scenarios' },
  { normal: 'What do you do when you forget someone\'s name?', impostor: 'What do you do when someone forgets your name?', category: 'Social Scenarios' },
  { normal: 'How do you split the bill at dinner?', impostor: 'How do you split chores with roommates?', category: 'Social Scenarios' },
  { normal: 'What do you do when a friend cancels last minute?', impostor: 'What do you do when plans fall through?', category: 'Social Scenarios' },
  { normal: 'How do you deal with a bad roommate?', impostor: 'How do you deal with a bad group project member?', category: 'Social Scenarios' },
  { normal: 'What\'s the move when the party is dead?', impostor: 'What\'s the move when the restaurant has a long wait?', category: 'Social Scenarios' },

  // Hypotheticals (10 pairs)
  { normal: 'If you could swap lives with anyone for a day, who?', impostor: 'If you could have dinner with anyone dead or alive, who?', category: 'Hypotheticals' },
  { normal: 'If you had to teach a college class, what would it be?', impostor: 'If you had to give a TED talk, what would it be about?', category: 'Hypotheticals' },
  { normal: 'If you could master any skill instantly, what?', impostor: 'If you could forget one thing and relearn it, what?', category: 'Hypotheticals' },
  { normal: 'If you won the lottery tomorrow, first purchase?', impostor: 'If you got $10,000 right now, first purchase?', category: 'Hypotheticals' },
  { normal: 'If you could live in any TV show world, which?', impostor: 'If you could live in any movie world, which?', category: 'Hypotheticals' },
  { normal: 'If you could uninvent one thing, what?', impostor: 'If you could invent one thing, what?', category: 'Hypotheticals' },
  { normal: 'If your life had a theme song, what would it be?', impostor: 'If your life was a movie, what genre would it be?', category: 'Hypotheticals' },
  { normal: 'If you could time travel, past or future?', impostor: 'If you could teleport anywhere right now, where?', category: 'Hypotheticals' },
  { normal: 'If you had to eat one meal forever, what?', impostor: 'If you had to listen to one song forever, what?', category: 'Hypotheticals' },
  { normal: 'If you could add one rule to this school, what?', impostor: 'If you could remove one rule from this school, what?', category: 'Hypotheticals' },
];

export const questionCategories = [...new Set(questionPairs.map(p => p.category))];
