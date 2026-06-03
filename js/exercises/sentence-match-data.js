export const sentenceMatchLevels = [
    // 1-10: Basic Actions & Objects
    { id: 1, sentence: "The bird can ___.", options: ["fly", "drink", "shoe"], correct: "fly", instruction: "Which word completes the sentence?" },
    { id: 2, sentence: "I wear a ___ on my head.", options: ["cup", "hat", "pen"], correct: "hat", instruction: "What do you wear?" },
    { id: 3, sentence: "The sun is very ___.", options: ["cold", "hot", "blue"], correct: "hot", instruction: "How does the sun feel?" },
    { id: 4, sentence: "A frog can ___.", options: ["jump", "read", "sing"], correct: "jump", instruction: "What does a frog do?" },
    { id: 5, sentence: "I sleep in a ___.", options: ["box", "bed", "bus"], correct: "bed", instruction: "Where do you sleep?" },
    { id: 6, sentence: "The cat says ___.", options: ["moo", "meow", "bark"], correct: "meow", instruction: "What sound does a cat make?" },
    { id: 7, sentence: "An apple is ___.", options: ["red", "fast", "sad"], correct: "red", instruction: "What color is the apple?" },
    { id: 8, sentence: "Fish live in the ___.", options: ["tree", "water", "sand"], correct: "water", instruction: "Where do fish swim?" },
    { id: 9, sentence: "I brush my ___.", options: ["teeth", "shoes", "toys"], correct: "teeth", instruction: "What do you brush?" },
    { id: 10, sentence: "The car goes ___.", options: ["fast", "soft", "loud"], correct: "fast", instruction: "How does the car move?" },

    // 11-20: Daily Life & Vocabulary
    { id: 11, sentence: "I use a ___ to write.", options: ["pencil", "chair", "spoon"], correct: "pencil", instruction: "What do you write with?" },
    { id: 12, sentence: "Dogs love to eat ___.", options: ["bones", "rocks", "shoes"], correct: "bones", instruction: "What is a dog's treat?" },
    { id: 13, sentence: "The sky is ___.", options: ["green", "blue", "pink"], correct: "blue", instruction: "What color is the sky?" },
    { id: 14, sentence: "I sit on a ___.", options: ["lamp", "chair", "floor"], correct: "chair", instruction: "Where do you sit?" },
    { id: 15, sentence: "Books have many ___.", options: ["pages", "wheels", "fingers"], correct: "pages", instruction: "What do books have?" },
    { id: 16, sentence: "It is cold in the ___.", options: ["winter", "summer", "park"], correct: "winter", instruction: "When is it cold?" },
    { id: 17, sentence: "I bake a ___.", options: ["cake", "bike", "duck"], correct: "cake", instruction: "What do you bake?" },
    { id: 18, sentence: "The cow says ___.", options: ["moo", "quack", "hiss"], correct: "moo", instruction: "What sound is that?" },
    { id: 19, sentence: "I wash with ___.", options: ["soap", "dirt", "paper"], correct: "soap", instruction: "What do you use to wash?" },
    { id: 20, sentence: "My shirt is ___.", options: ["clean", "happy", "fast"], correct: "clean", instruction: "Is your shirt dirty or...?" },

    // 21-30: Nature & Environment
    { id: 21, sentence: "Trees have green ___.", options: ["leaves", "rocks", "cars"], correct: "leaves", instruction: "What do trees have?" },
    { id: 22, sentence: "The moon is out at ___.", options: ["night", "noon", "lunch"], correct: "night", instruction: "When is the moon out?" },
    { id: 23, sentence: "Snow is ___.", options: ["white", "black", "pink"], correct: "white", instruction: "What color is snow?" },
    { id: 24, sentence: "Bees make ___.", options: ["honey", "milk", "bread"], correct: "honey", instruction: "What do bees make?" },
    { id: 25, sentence: "I swim in the ___.", options: ["pool", "bed", "desk"], correct: "pool", instruction: "Where can you swim?" },
    { id: 26, sentence: "Plants need ___ to grow.", options: ["water", "juice", "soda"], correct: "water", instruction: "What do plants need?" },
    { id: 27, sentence: "A duck says ___.", options: ["quack", "roar", "chirp"], correct: "quack", instruction: "What sound is that?" },
    { id: 28, sentence: "The grass is ___.", options: ["green", "purple", "orange"], correct: "green", instruction: "What color is grass?" },
    { id: 29, sentence: "Stars twinkle in the ___.", options: ["sky", "oven", "box"], correct: "sky", instruction: "Where are the stars?" },
    { id: 30, sentence: "Rain falls from the ___.", options: ["clouds", "ground", "sofa"], correct: "clouds", instruction: "Where does rain come from?" },

    // 31-40: Home & Actions
    { id: 31, sentence: "I eat soup with a ___.", options: ["spoon", "fork", "knife"], correct: "spoon", instruction: "What tool do you use?" },
    { id: 32, sentence: "I wear shoes on my ___.", options: ["feet", "hands", "nose"], correct: "feet", instruction: "Where do shoes go?" },
    { id: 33, sentence: "My bed has a soft ___.", options: ["pillow", "plate", "cup"], correct: "pillow", instruction: "What do you rest your head on?" },
    { id: 34, sentence: "I keep my books in a ___.", options: ["bag", "fridge", "oven"], correct: "bag", instruction: "Where do books go?" },
    { id: 35, sentence: "Clock tells the ___.", options: ["time", "food", "name"], correct: "time", instruction: "What does a clock tell?" },
    { id: 36, sentence: "I open the door with a ___.", options: ["key", "pen", "hat"], correct: "key", instruction: "How do you open a door?" },
    { id: 37, sentence: "A stove is for ___.", options: ["cooking", "sleeping", "running"], correct: "cooking", instruction: "What is a stove for?" },
    { id: 38, sentence: "I look in the ___.", options: ["mirror", "window", "floor"], correct: "mirror", instruction: "What do you use to see yourself?" },
    { id: 39, sentence: "Towels are for ___.", options: ["drying", "eating", "reading"], correct: "drying", instruction: "What are towels for?" },
    { id: 40, sentence: "I turn on the ___.", options: ["lamp", "bed", "door"], correct: "lamp", instruction: "What gives you light?" },

    // 41-50: Concepts & Feelings
    { id: 41, sentence: "When I laugh, I am ___.", options: ["happy", "sad", "angry"], correct: "happy", instruction: "How do you feel?" },
    { id: 42, sentence: "A turtle moves ___.", options: ["slow", "fast", "high"], correct: "slow", instruction: "How fast is a turtle?" },
    { id: 43, sentence: "A giant is very ___.", options: ["big", "small", "thin"], correct: "big", instruction: "How big is a giant?" },
    { id: 44, sentence: "A mouse is very ___.", options: ["small", "tall", "loud"], correct: "small", instruction: "How big is a mouse?" },
    { id: 45, sentence: "I listen with my ___.", options: ["ears", "eyes", "nose"], correct: "ears", instruction: "How do you listen?" },
    { id: 46, sentence: "I see with my ___.", options: ["eyes", "ears", "hands"], correct: "eyes", instruction: "How do you see?" },
    { id: 47, sentence: "I smell with my ___.", options: ["nose", "feet", "mouth"], correct: "nose", instruction: "How do you smell?" },
    { id: 48, sentence: "I taste with my ___.", options: ["tongue", "finger", "ear"], correct: "tongue", instruction: "How do you taste?" },
    { id: 49, sentence: "A cake is ___.", options: ["sweet", "salty", "sour"], correct: "sweet", instruction: "How does cake taste?" },
    { id: 50, sentence: "Friends like to ___.", options: ["play", "fight", "hide"], correct: "play", instruction: "What do friends do?" }
];