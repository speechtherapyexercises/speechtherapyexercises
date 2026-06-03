export const sequencingLevels = [
    // 1-10: Basic Progressions
    { id: 1, sequence: ["1", "2", "_", "4"], correct: "3", options: ["3", "5", "0"], instruction: "What number is missing?" },
    { id: 2, sequence: ["A", "B", "_", "D"], correct: "C", options: ["E", "C", "F"], instruction: "Which letter comes next?" },
    { id: 3, sequence: ["5", "6", "7", "_"], correct: "8", options: ["9", "4", "8"], instruction: "Count up! What comes after 7?" },
    { id: 4, sequence: ["X", "_", "Z"], correct: "Y", options: ["W", "Y", "V"], instruction: "Fill in the missing letter." },
    { id: 5, sequence: ["10", "20", "_", "40"], correct: "30", options: ["25", "35", "30"], instruction: "Counting by tens!" },
    { id: 6, sequence: ["M", "N", "O", "_"], correct: "P", options: ["Q", "P", "R"], instruction: "What's the next letter?" },
    { id: 7, sequence: ["2", "4", "_", "8"], correct: "6", options: ["5", "6", "7"], instruction: "Counting by twos!" },
    { id: 8, sequence: ["_", "L", "M", "N"], correct: "K", options: ["J", "K", "O"], instruction: "What comes before L?" },
    { id: 9, sequence: ["5", "10", "15", "_"], correct: "20", options: ["25", "20", "30"], instruction: "Count by fives!" },
    { id: 10, sequence: ["Q", "R", "_", "T"], correct: "S", options: ["P", "S", "U"], instruction: "Find the middle letter." },

    // 11-20: Backwards & Mid-Level Patterns
    { id: 11, sequence: ["3", "2", "1", "_"], correct: "0", options: ["1", "0", "-1"], instruction: "Count backwards!" },
    { id: 12, sequence: ["Z", "Y", "_", "W"], correct: "X", options: ["V", "X", "U"], instruction: "Alphabet backwards!" },
    { id: 13, sequence: ["10", "9", "_", "7"], correct: "8", options: ["6", "9", "8"], instruction: "What number is missing?" },
    { id: 14, sequence: ["F", "G", "H", "_"], correct: "I", options: ["J", "I", "H"], instruction: "What comes after H?" },
    { id: 15, sequence: ["20", "21", "_", "23"], correct: "22", options: ["24", "22", "20"], instruction: "Fill the gap!" },
    { id: 16, sequence: ["D", "E", "_", "G"], correct: "F", options: ["E", "H", "F"], instruction: "What is missing?" },
    { id: 17, sequence: ["30", "40", "50", "_"], correct: "60", options: ["55", "60", "70"], instruction: "Counting by tens!" },
    { id: 18, sequence: ["_", "B", "C", "D"], correct: "A", options: ["Z", "A", "E"], instruction: "What comes before B?" },
    { id: 19, sequence: ["2", "3", "4", "_"], correct: "5", options: ["6", "5", "4"], instruction: "What comes next?" },
    { id: 20, sequence: ["P", "_", "R", "S"], correct: "Q", options: ["O", "Q", "T"], instruction: "What is the missing letter?" },

    // 21-30: Skip Counting & Pattern Variety
    { id: 21, sequence: ["3", "6", "9", "_"], correct: "12", options: ["10", "11", "12"], instruction: "Counting by threes!" },
    { id: 22, sequence: ["4", "8", "_", "16"], correct: "12", options: ["10", "12", "14"], instruction: "Counting by fours!" },
    { id: 23, sequence: ["_", "E", "F", "G"], correct: "D", options: ["C", "D", "H"], instruction: "Complete the sequence." },
    { id: 24, sequence: ["15", "20", "25", "_"], correct: "30", options: ["28", "30", "35"], instruction: "Count by fives!" },
    { id: 25, sequence: ["T", "U", "V", "_"], correct: "W", options: ["X", "W", "Y"], instruction: "What comes after V?" },
    { id: 26, sequence: ["100", "90", "_", "70"], correct: "80", options: ["85", "80", "75"], instruction: "Counting backwards by tens!" },
    { id: 27, sequence: ["I", "J", "_", "L"], correct: "K", options: ["M", "K", "H"], instruction: "What is missing?" },
    { id: 28, sequence: ["2", "4", "6", "_"], correct: "8", options: ["10", "8", "9"], instruction: "Counting by twos!" },
    { id: 29, sequence: ["W", "_", "Y", "Z"], correct: "X", options: ["V", "X", "U"], instruction: "Fill in the blank." },
    { id: 30, sequence: ["12", "13", "14", "_"], correct: "15", options: ["16", "15", "14"], instruction: "Next number?" },

    // 31-40: Advanced Sequences
    { id: 31, sequence: ["10", "12", "14", "_"], correct: "16", options: ["15", "16", "18"], instruction: "Adding two each time!" },
    { id: 32, sequence: ["_", "S", "T", "U"], correct: "R", options: ["Q", "R", "V"], instruction: "What comes before S?" },
    { id: 33, sequence: ["50", "60", "70", "_"], correct: "80", options: ["90", "80", "75"], instruction: "Counting by tens!" },
    { id: 34, sequence: ["J", "K", "L", "_"], correct: "M", options: ["N", "M", "O"], instruction: "What is next?" },
    { id: 35, sequence: ["5", "10", "_", "20"], correct: "15", options: ["12", "15", "18"], instruction: "Counting by fives!" },
    { id: 36, sequence: ["M", "_", "O", "P"], correct: "N", options: ["L", "N", "Q"], instruction: "Fill the middle." },
    { id: 37, sequence: ["21", "22", "_", "24"], correct: "23", options: ["25", "23", "20"], instruction: "What is missing?" },
    { id: 38, sequence: ["B", "C", "D", "_"], correct: "E", options: ["F", "E", "D"], instruction: "What comes after D?" },
    { id: 39, sequence: ["40", "30", "_", "10"], correct: "20", options: ["25", "20", "15"], instruction: "Backwards by tens!" },
    { id: 40, sequence: ["G", "H", "I", "_"], correct: "J", options: ["K", "J", "L"], instruction: "Next letter?" },

    // 41-50: Mix of Challenges
    { id: 41, sequence: ["1", "3", "5", "_"], correct: "7", options: ["6", "7", "8"], instruction: "Odd numbers!" },
    { id: 42, sequence: ["2", "4", "6", "_"], correct: "8", options: ["7", "8", "9"], instruction: "Even numbers!" },
    { id: 43, sequence: ["S", "T", "U", "_"], correct: "V", options: ["W", "V", "X"], instruction: "What is next?" },
    { id: 44, sequence: ["6", "7", "_", "9"], correct: "8", options: ["7", "8", "10"], instruction: "Fill the gap." },
    { id: 45, sequence: ["_", "F", "G", "H"], correct: "E", options: ["D", "E", "I"], instruction: "Before F?" },
    { id: 46, sequence: ["25", "30", "35", "_"], correct: "40", options: ["45", "40", "38"], instruction: "Count by fives!" },
    { id: 47, sequence: ["N", "O", "P", "_"], correct: "Q", options: ["R", "Q", "S"], instruction: "What comes after P?" },
    { id: 48, sequence: ["0", "2", "_", "6"], correct: "4", options: ["3", "4", "5"], instruction: "Counting by twos!" },
    { id: 49, sequence: ["Y", "Z", "_", "_"], correct: "A", options: ["A", "B", "C"], instruction: "The alphabet starts over!" },
    { id: 50, sequence: ["9", "8", "_", "6"], correct: "7", options: ["5", "7", "8"], instruction: "Count backwards!" }
];