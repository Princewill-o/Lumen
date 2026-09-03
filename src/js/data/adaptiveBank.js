/**
 * Adaptive Question Bank for Lumen AI Tutor
 * Scaled by Subject (Reading / Math) and Difficulty Level (1 to 5).
 */

export const ADAPTIVE_QUESTION_BANK = {
  reading: {
    1: [
      {
        id: 'r1_1',
        title: 'Phonics & Letters',
        prompt: 'Which word starts with the letter B sound?',
        ttsText: 'Which word starts with the letter B sound? Bear or Cat?',
        options: [
          { text: 'Bear 🐻', isCorrect: true },
          { text: 'Cat 🐱', isCorrect: false },
          { text: 'Sun ☀️', isCorrect: false },
          { text: 'Fish 🐟', isCorrect: false }
        ],
        sparkHint: 'Listen for the "Buh" sound! Like a big bouncing ball!'
      },
      {
        id: 'r1_2',
        title: 'Sight Words',
        prompt: 'Find the animal that rhymes with "Hat"!',
        ttsText: 'Find the animal that rhymes with Hat!',
        options: [
          { text: 'Cat 🐱', isCorrect: true },
          { text: 'Dog 🐶', isCorrect: false },
          { text: 'Pig 🐷', isCorrect: false },
          { text: 'Duck 🦆', isCorrect: false }
        ],
        sparkHint: 'Hat... Cat! They end with the same sound!'
      },
      {
        id: 'r1_3',
        title: 'Word Matching',
        prompt: 'Which word matches this picture: 🍎 ?',
        ttsText: 'Which word matches this picture of an apple?',
        options: [
          { text: 'Apple', isCorrect: true },
          { text: 'Banana', isCorrect: false },
          { text: 'Grape', isCorrect: false },
          { text: 'Orange', isCorrect: false }
        ],
        sparkHint: 'Starts with the letter A! A for Apple!'
      }
    ],
    2: [
      {
        id: 'r2_1',
        title: 'Early Reading Story',
        story: 'Leo the Lion loves to read under the big green tree. He has 3 red books.',
        prompt: 'Where does Leo love to read?',
        ttsText: 'Leo the Lion loves to read under the big green tree. Where does Leo love to read?',
        options: [
          { text: 'Under the green tree 🌳', isCorrect: true },
          { text: 'Inside a dark cave 🦇', isCorrect: false },
          { text: 'On a fast boat ⛵', isCorrect: false },
          { text: 'At the grocery store 🛒', isCorrect: false }
        ],
        sparkHint: 'Look closely at the story: "under the big green tree"!'
      },
      {
        id: 'r2_2',
        title: 'Vocabulary & Sentences',
        prompt: 'Fill in the missing word: "The bird flies high in the _____."',
        ttsText: 'The bird flies high in the blank.',
        options: [
          { text: 'Sky ☁️', isCorrect: true },
          { text: 'Water 🌊', isCorrect: false },
          { text: 'Mud 🪵', isCorrect: false },
          { text: 'Pillow 🛏️', isCorrect: false }
        ],
        sparkHint: 'Birds use their wings to fly up in the clouds!'
      },
      {
        id: 'r2_3',
        title: 'Opposites',
        prompt: 'What is the opposite of the word "HAPPY"?',
        ttsText: 'What is the opposite of the word Happy?',
        options: [
          { text: 'Sad 😢', isCorrect: true },
          { text: 'Sunny ☀️', isCorrect: false },
          { text: 'Fast ⚡', isCorrect: false },
          { text: 'Big 🐘', isCorrect: false }
        ],
        sparkHint: 'When you are not happy, you might feel...'
      }
    ],
    3: [
      {
        id: 'r3_1',
        title: 'Story Comprehension',
        story: 'Maya and her puppy Pip went to the park. Pip found a shiny blue ball near the sandbox and wagged his tail happily.',
        prompt: 'What did Pip find near the sandbox?',
        ttsText: 'What did Pip find near the sandbox?',
        options: [
          { text: 'A shiny blue ball 🔵', isCorrect: true },
          { text: 'A red stick 🪵', isCorrect: false },
          { text: 'A bone 🦴', isCorrect: false },
          { text: 'A lost hat 🧢', isCorrect: false }
        ],
        sparkHint: 'Pip found something blue and shiny!'
      },
      {
        id: 'r3_2',
        title: 'Context Clues',
        prompt: 'What does "Enormous" mean in this sentence: "The elephant was enormous!"',
        ttsText: 'What does Enormous mean?',
        options: [
          { text: 'Very big 🐘', isCorrect: true },
          { text: 'Tiny 🐜', isCorrect: false },
          { text: 'Quiet 🤫', isCorrect: false },
          { text: 'Cold ❄️', isCorrect: false }
        ],
        sparkHint: 'Think about how big an elephant is!'
      }
    ],
    4: [
      {
        id: 'r4_1',
        title: 'Inference & Detail',
        story: 'Sam put on his yellow raincoat, zipped his boots, and opened his umbrella before stepping outside.',
        prompt: 'What is the weather like outside?',
        ttsText: 'What is the weather like outside?',
        options: [
          { text: 'Rainy 🌧️', isCorrect: true },
          { text: 'Snowy ❄️', isCorrect: false },
          { text: 'Hot and sunny ☀️', isCorrect: false },
          { text: 'Windy and dusty 💨', isCorrect: false }
        ],
        sparkHint: 'Raincoats and umbrellas are used when it is raining!'
      }
    ],
    5: [
      {
        id: 'r5_1',
        title: 'Advanced Reading Comprehension',
        story: 'Solar panels capture energy from the sun and convert it into clean electricity. This helps keep our air fresh and our planet healthy.',
        prompt: 'How do solar panels help our planet?',
        ttsText: 'How do solar panels help our planet?',
        options: [
          { text: 'They generate clean energy from sunlight ☀️', isCorrect: true },
          { text: 'They block the wind from blowing 💨', isCorrect: false },
          { text: 'They make rain fall faster 🌧️', isCorrect: false },
          { text: 'They turn night into daytime 🌙', isCorrect: false }
        ],
        sparkHint: 'The sun provides energy that solar panels convert into electricity!'
      }
    ]
  },

  math: {
    1: [
      {
        id: 'm1_1',
        title: 'Visual Counting',
        prompt: 'Count the apples: 🍎 🍎 🍎. How many apples are there?',
        ttsText: 'Count the apples. How many apples are there?',
        options: [
          { text: '3 Apples', isCorrect: true },
          { text: '2 Apples', isCorrect: false },
          { text: '4 Apples', isCorrect: false },
          { text: '5 Apples', isCorrect: false }
        ],
        sparkHint: 'Count them together: 1... 2... 3!'
      },
      {
        id: 'm1_2',
        title: 'Shape Recognition',
        prompt: 'Which shape has 3 sides and 3 corners?',
        ttsText: 'Which shape has 3 sides and 3 corners?',
        options: [
          { text: 'Triangle 🔺', isCorrect: true },
          { text: 'Square 🟦', isCorrect: false },
          { text: 'Circle 🔴', isCorrect: false },
          { text: 'Star ⭐', isCorrect: false },
        ],
        sparkHint: 'Tri means three! A triangle has 3 pointy corners!'
      },
      {
        id: 'm1_3',
        title: 'More or Less',
        prompt: 'Which group has MORE stars? Group A: ⭐⭐ vs Group B: ⭐⭐⭐⭐⭐',
        ttsText: 'Which group has more stars?',
        options: [
          { text: 'Group B (5 stars) ⭐⭐⭐⭐⭐', isCorrect: true },
          { text: 'Group A (2 stars) ⭐⭐', isCorrect: false }
        ],
        sparkHint: '5 is bigger than 2!'
      }
    ],
    2: [
      {
        id: 'm2_1',
        title: 'Early Addition',
        prompt: 'What is 2 + 3 ?',
        ttsText: 'What is 2 plus 3?',
        visual: '🍎🍎 + 🍎🍎🍎',
        options: [
          { text: '5', isCorrect: true },
          { text: '4', isCorrect: false },
          { text: '6', isCorrect: false },
          { text: '3', isCorrect: false }
        ],
        sparkHint: 'Start at 2, then count up 3 more: 3, 4, 5!'
      },
      {
        id: 'm2_2',
        title: 'Pattern Completion',
        prompt: 'Complete the pattern: 🔴 🔵 🔴 🔵 ____ ?',
        ttsText: 'Complete the pattern: Red, Blue, Red, Blue, what comes next?',
        options: [
          { text: '🔴 Red', isCorrect: true },
          { text: '🔵 Blue', isCorrect: false },
          { text: '🟢 Green', isCorrect: false },
          { text: '🟡 Yellow', isCorrect: false }
        ],
        sparkHint: 'Red, Blue, Red, Blue... Red comes next!'
      },
      {
        id: 'm2_3',
        title: 'Simple Subtraction',
        prompt: 'You have 4 balloons 🎈🎈🎈🎈. 1 pops! How many are left?',
        ttsText: 'You have 4 balloons. 1 pops! How many are left?',
        options: [
          { text: '3 Balloons', isCorrect: true },
          { text: '2 Balloons', isCorrect: false },
          { text: '4 Balloons', isCorrect: false },
          { text: '1 Balloon', isCorrect: false }
        ],
        sparkHint: '4 take away 1 equals 3!'
      }
    ],
    3: [
      {
        id: 'm3_1',
        title: 'Addition to 10',
        prompt: 'What is 6 + 4 ?',
        ttsText: 'What is 6 plus 4?',
        options: [
          { text: '10', isCorrect: true },
          { text: '9', isCorrect: false },
          { text: '11', isCorrect: false },
          { text: '8', isCorrect: false }
        ],
        sparkHint: '6 plus 4 makes a full ten!'
      },
      {
        id: 'm3_2',
        title: 'Word Problem',
        prompt: 'Maya has 5 stickers. Her mom gives her 3 more. How many stickers does Maya have now?',
        ttsText: 'Maya has 5 stickers. Her mom gives her 3 more. How many stickers does Maya have now?',
        options: [
          { text: '8 Stickers 🌟', isCorrect: true },
          { text: '7 Stickers 🌟', isCorrect: false },
          { text: '9 Stickers 🌟', isCorrect: false },
          { text: '6 Stickers 🌟', isCorrect: false }
        ],
        sparkHint: '5 + 3 = 8!'
      }
    ],
    4: [
      {
        id: 'm4_1',
        title: 'Two-Digit Addition',
        prompt: 'What is 12 + 15 ?',
        ttsText: 'What is 12 plus 15?',
        options: [
          { text: '27', isCorrect: true },
          { text: '25', isCorrect: false },
          { text: '30', isCorrect: false },
          { text: '23', isCorrect: false }
        ],
        sparkHint: '10 + 10 = 20, and 2 + 5 = 7. Put them together: 27!'
      }
    ],
    5: [
      {
        id: 'm5_1',
        title: 'Early Multiplication & Grouping',
        prompt: 'There are 3 boxes. Each box has 4 toys. How many toys in total?',
        ttsText: 'There are 3 boxes. Each box has 4 toys. How many toys in total?',
        options: [
          { text: '12 Toys 🧸', isCorrect: true },
          { text: '10 Toys 🧸', isCorrect: false },
          { text: '15 Toys 🧸', isCorrect: false },
          { text: '7 Toys 🧸', isCorrect: false }
        ],
        sparkHint: '3 times 4 = 12 (4 + 4 + 4 = 12)!'
      }
    ]
  }
};
