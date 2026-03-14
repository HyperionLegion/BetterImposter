import type { QuestionPair } from '../types/game';

export const questionPairs: QuestionPair[] = [
  // Would You Rather (12 pairs)
  { normal: 'Would you rather have unlimited money or unlimited free time?', imposter: 'Would you rather have unlimited money or unlimited energy?', category: 'Would You Rather' },
  { normal: 'Would you rather relive freshman year or skip to senior year?', imposter: 'Would you rather relive high school or skip to graduation?', category: 'Would You Rather' },
  { normal: 'Would you rather give up social media or give up Netflix?', imposter: 'Would you rather give up your phone or give up your laptop?', category: 'Would You Rather' },
  { normal: 'Would you rather always be 10 minutes early or always be 10 minutes late?', imposter: 'Would you rather always be overdressed or always be underdressed?', category: 'Would You Rather' },
  { normal: 'Would you rather have a personal chef or a personal trainer?', imposter: 'Would you rather have a personal driver or a personal chef?', category: 'Would You Rather' },
  { normal: 'Would you rather know everyone\'s secrets or have no one know yours?', imposter: 'Would you rather read minds or be invisible?', category: 'Would You Rather' },
  { normal: 'Would you rather never have homework or never have exams?', imposter: 'Would you rather never have group projects or never have presentations?', category: 'Would You Rather' },
  { normal: 'Would you rather travel the world for a year or get a dream job immediately?', imposter: 'Would you rather travel the world for a year or get a full-ride scholarship?', category: 'Would You Rather' },
  { normal: 'Would you rather be famous on TikTok or respected in your field?', imposter: 'Would you rather be famous on YouTube or have a million-dollar startup?', category: 'Would You Rather' },
  { normal: 'Would you rather live in New York or Los Angeles?', imposter: 'Would you rather live in a big city or a small town?', category: 'Would You Rather' },
  { normal: 'Would you rather party every weekend or have every weekend free?', imposter: 'Would you rather go out every night or have the best home setup?', category: 'Would You Rather' },
  { normal: 'Would you rather have perfect memory or perfect creativity?', imposter: 'Would you rather be incredibly lucky or incredibly smart?', category: 'Would You Rather' },

  // Hot Takes (10 pairs)
  { normal: 'What\'s the most overrated thing about college?', imposter: 'What\'s the most overrated thing about high school?', category: 'Hot Takes' },
  { normal: 'What\'s the biggest waste of money in college?', imposter: 'What\'s the biggest waste of time in college?', category: 'Hot Takes' },
  { normal: 'What\'s the most underrated college experience?', imposter: 'What\'s the most underrated life skill?', category: 'Hot Takes' },
  { normal: 'What class should everyone be required to take?', imposter: 'What class should be removed from all curriculums?', category: 'Hot Takes' },
  { normal: 'What\'s the worst advice people give college students?', imposter: 'What\'s the worst advice people give high school seniors?', category: 'Hot Takes' },
  { normal: 'What\'s a hot take about dating in college?', imposter: 'What\'s a hot take about friendships in college?', category: 'Hot Takes' },
  { normal: 'What trend needs to die immediately?', imposter: 'What trend from the past needs to come back?', category: 'Hot Takes' },
  { normal: 'What\'s the most overrated social media platform?', imposter: 'What\'s the most overrated streaming service?', category: 'Hot Takes' },
  { normal: 'What\'s something everyone pretends to like?', imposter: 'What\'s something everyone pretends to understand?', category: 'Hot Takes' },
  { normal: 'What hill will you die on about food?', imposter: 'What hill will you die on about music?', category: 'Hot Takes' },

  // College Confessions (10 pairs)
  { normal: 'What\'s your most embarrassing moment at a party?', imposter: 'What\'s your most embarrassing moment in class?', category: 'College Confessions' },
  { normal: 'What\'s the laziest thing you\'ve done in college?', imposter: 'What\'s the laziest thing you\'ve done at work?', category: 'College Confessions' },
  { normal: 'What\'s the weirdest thing in your dorm room?', imposter: 'What\'s the weirdest thing on your phone?', category: 'College Confessions' },
  { normal: 'What\'s a college rule you always break?', imposter: 'What\'s a social rule you always break?', category: 'College Confessions' },
  { normal: 'What\'s the longest you\'ve gone without sleeping?', imposter: 'What\'s the longest you\'ve gone without studying?', category: 'College Confessions' },
  { normal: 'What\'s the worst meal you\'ve ever made?', imposter: 'What\'s the worst meal you\'ve ever been served?', category: 'College Confessions' },
  { normal: 'What\'s your guilty pleasure TV show?', imposter: 'What\'s your guilty pleasure song?', category: 'College Confessions' },
  { normal: 'What\'s the most impulsive purchase you\'ve made?', imposter: 'What\'s the most impulsive decision you\'ve made?', category: 'College Confessions' },
  { normal: 'What\'s something your parents don\'t know about?', imposter: 'What\'s something your friends don\'t know about?', category: 'College Confessions' },
  { normal: 'What\'s the biggest lie you\'ve told a professor?', imposter: 'What\'s the biggest lie you\'ve told a friend?', category: 'College Confessions' },

  // Social Scenarios (10 pairs)
  { normal: 'How do you handle an awkward silence?', imposter: 'How do you handle an awkward compliment?', category: 'Social Scenarios' },
  { normal: 'What do you do when someone you don\'t like sits next to you?', imposter: 'What do you do when someone you don\'t know talks to you?', category: 'Social Scenarios' },
  { normal: 'How do you leave a boring conversation?', imposter: 'How do you leave a boring party?', category: 'Social Scenarios' },
  { normal: 'What\'s your go-to icebreaker?', imposter: 'What\'s your go-to conversation topic?', category: 'Social Scenarios' },
  { normal: 'How do you respond to \'tell me about yourself\'?', imposter: 'How do you respond to \'what do you do for fun\'?', category: 'Social Scenarios' },
  { normal: 'What do you do when you forget someone\'s name?', imposter: 'What do you do when someone forgets your name?', category: 'Social Scenarios' },
  { normal: 'How do you split the bill at dinner?', imposter: 'How do you split chores with roommates?', category: 'Social Scenarios' },
  { normal: 'What do you do when a friend cancels last minute?', imposter: 'What do you do when plans fall through?', category: 'Social Scenarios' },
  { normal: 'How do you deal with a bad roommate?', imposter: 'How do you deal with a bad group project member?', category: 'Social Scenarios' },
  { normal: 'What\'s the move when the party is dead?', imposter: 'What\'s the move when the restaurant has a long wait?', category: 'Social Scenarios' },

  // Hypotheticals (10 pairs)
  { normal: 'If you could swap lives with anyone for a day, who?', imposter: 'If you could have dinner with anyone dead or alive, who?', category: 'Hypotheticals' },
  { normal: 'If you had to teach a college class, what would it be?', imposter: 'If you had to give a TED talk, what would it be about?', category: 'Hypotheticals' },
  { normal: 'If you could master any skill instantly, what?', imposter: 'If you could forget one thing and relearn it, what?', category: 'Hypotheticals' },
  { normal: 'If you won the lottery tomorrow, first purchase?', imposter: 'If you got $10,000 right now, first purchase?', category: 'Hypotheticals' },
  { normal: 'If you could live in any TV show world, which?', imposter: 'If you could live in any movie world, which?', category: 'Hypotheticals' },
  { normal: 'If you could uninvent one thing, what?', imposter: 'If you could invent one thing, what?', category: 'Hypotheticals' },
  { normal: 'If your life had a theme song, what would it be?', imposter: 'If your life was a movie, what genre would it be?', category: 'Hypotheticals' },
  { normal: 'If you could time travel, past or future?', imposter: 'If you could teleport anywhere right now, where?', category: 'Hypotheticals' },
  { normal: 'If you had to eat one meal forever, what?', imposter: 'If you had to listen to one song forever, what?', category: 'Hypotheticals' },
  { normal: 'If you could add one rule to this school, what?', imposter: 'If you could remove one rule from this school, what?', category: 'Hypotheticals' },

  // Computer Science (12 pairs)
  { normal: 'What\'s the most overrated programming language?', imposter: 'What\'s the most overrated tech company?', category: 'Computer Science' },
  { normal: 'What\'s the worst bug you\'ve ever shipped?', imposter: 'What\'s the worst grade you\'ve ever gotten?', category: 'Computer Science' },
  { normal: 'Tabs or spaces?', imposter: 'Light mode or dark mode?', category: 'Computer Science' },
  { normal: 'What\'s your go-to excuse when your code doesn\'t work?', imposter: 'What\'s your go-to excuse when you miss a deadline?', category: 'Computer Science' },
  { normal: 'What CS concept took you the longest to understand?', imposter: 'What math concept took you the longest to understand?', category: 'Computer Science' },
  { normal: 'What\'s the most useless thing they teach in CS classes?', imposter: 'What\'s the most useless thing they teach in gen-ed classes?', category: 'Computer Science' },
  { normal: 'If you could mass-delete one technology from existence, what?', imposter: 'If you could mass-delete one app from everyone\'s phone, what?', category: 'Computer Science' },
  { normal: 'What\'s the scariest thing about deploying to production?', imposter: 'What\'s the scariest thing about presenting in class?', category: 'Computer Science' },
  { normal: 'What\'s your hottest take about AI replacing developers?', imposter: 'What\'s your hottest take about AI replacing artists?', category: 'Computer Science' },
  { normal: 'What\'s the most annoying thing about group coding projects?', imposter: 'What\'s the most annoying thing about group presentations?', category: 'Computer Science' },
  { normal: 'What do you do when Stack Overflow doesn\'t have the answer?', imposter: 'What do you do when Google doesn\'t have the answer?', category: 'Computer Science' },
  { normal: 'What\'s the biggest red flag in someone\'s GitHub profile?', imposter: 'What\'s the biggest red flag in someone\'s LinkedIn profile?', category: 'Computer Science' },

  // University of Michigan (12 pairs)
  { normal: 'What\'s the best dining hall on campus?', imposter: 'What\'s the best restaurant near campus?', category: 'University of Michigan' },
  { normal: 'What\'s your go-to study spot in the UgLi?', imposter: 'What\'s your go-to study spot off campus?', category: 'University of Michigan' },
  { normal: 'What\'s the worst part about walking to North Campus?', imposter: 'What\'s the worst part about driving in Ann Arbor?', category: 'University of Michigan' },
  { normal: 'What\'s your honest opinion about the Big House on game day?', imposter: 'What\'s your honest opinion about tailgating before the game?', category: 'University of Michigan' },
  { normal: 'What\'s the most Michigan thing you\'ve ever done?', imposter: 'What\'s the most college thing you\'ve ever done?', category: 'University of Michigan' },
  { normal: 'What would you change about the Michigan course registration system?', imposter: 'What would you change about the Michigan housing system?', category: 'University of Michigan' },
  { normal: 'What\'s your hot take about State Street?', imposter: 'What\'s your hot take about South University?', category: 'University of Michigan' },
  { normal: 'If you could live in any dorm again, which one?', imposter: 'If you could live anywhere in Ann Arbor, where?', category: 'University of Michigan' },
  { normal: 'What\'s the hardest class you\'ve taken at Michigan?', imposter: 'What\'s the easiest class you\'ve taken at Michigan?', category: 'University of Michigan' },
  { normal: 'How do you feel about the Ohio State rivalry?', imposter: 'How do you feel about the Michigan State rivalry?', category: 'University of Michigan' },
  { normal: 'What\'s the best thing about winter in Ann Arbor?', imposter: 'What\'s the worst thing about winter in Ann Arbor?', category: 'University of Michigan' },
  { normal: 'What\'s the most overrated tradition at Michigan?', imposter: 'What\'s the most underrated tradition at Michigan?', category: 'University of Michigan' },
];

export const questionCategories = [...new Set(questionPairs.map(p => p.category))];
