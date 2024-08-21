interface QuizQuestion {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
  }

// Create the quiz data array
export const quizData: QuizQuestion[] = [
  {
    id: 1,
    text: 'How often should an average adult engage in moderate-intensity aerobic physical activity for substantial health benefits?',
    options: ['1 hour per week', '2.5 hours per week', '5 hours per week', '7 hours per week'],
    correctAnswer: '2.5 hours per week',
  },
  {
    id: 2,
    text: 'What is the recommended amount of water an average adult should drink per day?',
    options: ['1 liter', '2 liters', '3 liters', '4 liters'],
    correctAnswer: '2 liters',
  },
  {
    id: 3,
    text: 'Which nutrient is most important for muscle repair and growth?',
    options: ['Carbohydrates', 'Protein', 'Fats', 'Vitamins'],
    correctAnswer: 'Protein',
  },
  {
    id: 4,
    text: 'What is the primary benefit of cardiovascular exercise?',
    options: ['Building muscle mass', 'Improving flexibility', 'Strengthening the heart and lungs', 'Increasing bone density'],
    correctAnswer: 'Strengthening the heart and lungs',
  },
  {
    id: 5,
    text: 'How many major muscle groups are typically targeted in a well-rounded strength training program?',
    options: ['4', '6', '8', '10'],
    correctAnswer: '8',
  },
  {
    id: 6,
    text: 'Which exercise is considered a compound movement?',
    options: ['Bicep curl', 'Leg extension', 'Bench press', 'Tricep kickback'],
    correctAnswer: 'Bench press',
  },
  {
    id: 7,
    text: 'What is the ideal body fat percentage range for a healthy adult male?',
    options: ['5-10%', '11-14%', '15-20%', '21-25%'],
    correctAnswer: '15-20%',
  },
  {
    id: 8,
    text: 'How long should a proper warm-up last before engaging in a workout?',
    options: ['2-3 minutes', '5-10 minutes', '15-20 minutes', '30 minutes'],
    correctAnswer: '5-10 minutes',
  },
  {
    id: 9,
    text: 'What is the best way to increase flexibility?',
    options: ['Weightlifting', 'Cardiovascular exercise', 'Stretching', 'High-intensity interval training (HIIT)'],
    correctAnswer: 'Stretching',
  },
  {
    id: 10,
    text: 'What is the recommended amount of sleep for optimal recovery and performance?',
    options: ['4-5 hours', '6-7 hours', '7-9 hours', '10-12 hours'],
    correctAnswer: '7-9 hours',
  },
];
