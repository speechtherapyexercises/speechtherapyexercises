export const distractionLevels = [
    // --- COLOR FOCUS ---
    { id: 1, targetType: "color", targetValue: "🔴", instruction: "Tap only the RED items!", grid: ["🔴", "🔵", "🟢", "🔴", "🟢", "🟡", "🔵", "🔴"], totalTargets: 3 },
    { id: 2, targetType: "color", targetValue: "🔵", instruction: "Select every BLUE item!", grid: ["🔵", "🔵", "🔴", "🟢", "🔵", "🟡", "🔴", "🔵"], totalTargets: 4 },
    { id: 3, targetType: "color", targetValue: "🟢", instruction: "Tap only the GREEN items!", grid: ["🔴", "🟢", "🟡", "🔵", "🟢", "🟢", "🔴", "🔵"], totalTargets: 3 },
    { id: 4, targetType: "color", targetValue: "🟡", instruction: "Find all the YELLOW items!", grid: ["🟡", "🔴", "🟡", "🟢", "🔵", "🟡", "🟡", "🔴"], totalTargets: 4 },
    { id: 5, targetType: "color", targetValue: "🟣", instruction: "Tap only the PURPLE items!", grid: ["🟣", "🔵", "🟣", "🔴", "🟢", "🟣", "🟡", "🔵"], totalTargets: 3 },
    { id: 21, targetType: "color", targetValue: "⚪", instruction: "Find all the WHITE items!", grid: ["⚪", "🔴", "⚪", "🔵", "🟢", "⚪", "🟡", "⚪"], totalTargets: 4 },
    { id: 22, targetType: "color", targetValue: "⚫", instruction: "Select every BLACK item!", grid: ["⚫", "⚪", "⚫", "🔴", "🔵", "⚫", "🟡", "⚫"], totalTargets: 4 },

    // --- SHAPE FOCUS ---
    { id: 6, targetType: "shape", targetValue: "⭕", instruction: "Find all the CIRCLES!", grid: ["⭕", "📐", "📦", "⭕", "📐", "📦", "⭕", "📐"], totalTargets: 3 },
    { id: 7, targetType: "shape", targetValue: "📐", instruction: "Can you find all the TRIANGLES?", grid: ["📐", "⭕", "📐", "📦", "⭕", "📐", "📦", "⭕"], totalTargets: 3 },
    { id: 8, targetType: "shape", targetValue: "📦", instruction: "Select every SQUARE!", grid: ["📦", "📦", "📐", "⭕", "📦", "📐", "⭕", "📦"], totalTargets: 4 },
    { id: 9, targetType: "shape", targetValue: "⭐", instruction: "Tap only the STARS!", grid: ["⭐", "⭕", "📦", "⭐", "⭐", "📐", "⭕", "⭐"], totalTargets: 4 },
    { id: 10, targetType: "shape", targetValue: "❤️", instruction: "Find all the HEARTS!", grid: ["❤️", "⭐", "📦", "❤️", "📐", "❤️", "⭐", "📦"], totalTargets: 3 },
    { id: 30, targetType: "shape", targetValue: "🔶", instruction: "Find all the ORANGE DIAMONDS!", grid: ["🔶", "🔷", "🔶", "⭐", "❤️", "🔶", "🔷", "🔶"], totalTargets: 4 },
    { id: 31, targetType: "shape", targetValue: "🌀", instruction: "Select every CYCLONE SHAPE!", grid: ["🌀", "⭕", "🌀", "📦", "📐", "🌀", "⭕", "🌀"], totalTargets: 4 },
    { id: 32, targetType: "shape", targetValue: "🕳️", instruction: "Tap only the HOLE SHAPES!", grid: ["🕳️", "🌙", "🕳️", "⭐", "💎", "🕳️", "🌙", "🕳️"], totalTargets: 4 },
    { id: 33, targetType: "shape", targetValue: "💬", instruction: "Tap only the SPEECH BUBBLES!", grid: ["💬", "💭", "💬", "📦", "⭕", "💬", "💭", "💬"], totalTargets: 4 },
    { id: 34, targetType: "shape", targetValue: "💭", instruction: "Find all the THOUGHT BUBBLES!", grid: ["💭", "💬", "💭", "⭐", "❤️", "💭", "💬", "💭"], totalTargets: 4 },
    { id: 35, targetType: "shape", targetValue: "🛑", instruction: "Tap only the OCTAGONS!", grid: ["🛑", "⭕", "🛑", "📦", "📐", "🛑", "⭕", "🛑"], totalTargets: 4 },
    { id: 36, targetType: "shape", targetValue: "🎯", instruction: "Tap only the TARGET BULLSEYES!", grid: ["🎯", "⭕", "🎯", "📦", "⭐", "🎯", "⭕", "🎯"], totalTargets: 4 },

    // --- FRUIT/FOOD FOCUS ---
    { id: 11, targetType: "food", targetValue: "🍎", instruction: "Tap only the APPLES!", grid: ["🍎", "🍌", "🍇", "🍎", "🍎", "🍌", "🍇", "🍎"], totalTargets: 4 },
    { id: 12, targetType: "food", targetValue: "🍌", instruction: "Find all the BANANAS!", grid: ["🍌", "🍎", "🍇", "🍌", "🍓", "🍌", "🍎", "🍇"], totalTargets: 3 },
    { id: 13, targetType: "food", targetValue: "🍇", instruction: "Select every GRAPE!", grid: ["🍇", "🍇", "🍌", "🍓", "🍎", "🍇", "🍌", "🍓"], totalTargets: 3 },
    { id: 14, targetType: "food", targetValue: "🍓", instruction: "Tap only the STRAWBERRIES!", grid: ["🍓", "🍎", "🍇", "🍓", "🍓", "🍌", "🍎", "🍓"], totalTargets: 4 },
    { id: 15, targetType: "food", targetValue: "🍋", instruction: "Find all the LEMONS!", grid: ["🍋", "🍇", "🍎", "🍋", "🍌", "🍋", "🍇", "🍓"], totalTargets: 3 },
    { id: 23, targetType: "food", targetValue: "🍉", instruction: "Find all the WATERMELONS!", grid: ["🍉", "🍇", "🍉", "🍓", "🍎", "🍉", "🍌", "🍓"], totalTargets: 3 },
    { id: 24, targetType: "food", targetValue: "🍍", instruction: "Select every PINEAPPLE!", grid: ["🍍", "🍌", "🍍", "🍓", "🍎", "🍍", "🍇", "🍍"], totalTargets: 4 },
    { id: 25, targetType: "food", targetValue: "🍊", instruction: "Tap only the TANGERINES!", grid: ["🍊", "🍋", "🍎", "🍊", "🍌", "🍊", "🍇", "🍊"], totalTargets: 4 },
    { id: 26, targetType: "food", targetValue: "🍐", instruction: "Find all the PEARS!", grid: ["🍐", "🍌", "🍐", "🍎", "🍇", "🍐", "🍓", "🍎"], totalTargets: 3 },
    { id: 27, targetType: "food", targetValue: "🥝", instruction: "Tap only the KIWIS!", grid: ["🥝", "🍎", "🥝", "🍌", "🍓", "🥝", "🍇", "🥝"], totalTargets: 4 },
    { id: 28, targetType: "food", targetValue: "🥥", instruction: "Find all the COCONUTS!", grid: ["🥥", "🍍", "🥥", "🍌", "🍎", "🥥", "🍇", "🍓"], totalTargets: 3 },
    { id: 29, targetType: "food", targetValue: "🍑", instruction: "Tap only the PEACHES!", grid: ["🍑", "🍎", "🍑", "🍌", "🍓", "🍑", "🍇", "🍑"], totalTargets: 4 },

    // --- MIXED CHALLENGE ---
    { id: 16, targetType: "color", targetValue: "🟠", instruction: "Tap only the ORANGE items!", grid: ["🟠", "🟢", "🟠", "🔵", "🟠", "🟢", "🔵", "🟠"], totalTargets: 4 },
    { id: 17, targetType: "shape", targetValue: "💎", instruction: "Select every DIAMOND!", grid: ["💎", "❤️", "⭐", "💎", "❤️", "⭐", "💎", "❤️"], totalTargets: 3 },
    { id: 18, targetType: "food", targetValue: "🍒", instruction: "Find all the CHERRIES!", grid: ["🍒", "🍎", "🍌", "🍒", "🍇", "🍒", "🍎", "🍌"], totalTargets: 3 },
    { id: 19, targetType: "color", targetValue: "🟤", instruction: "Tap only the BROWN items!", grid: ["🟤", "🟣", "🟤", "🟡", "🟤", "🟣", "🟡", "🟤"], totalTargets: 4 },
    { id: 20, targetType: "shape", targetValue: "🌙", instruction: "Find all the MOONS!", grid: ["🌙", "⭐", "💎", "🌙", "⭐", "💎", "🌙", "⭐"], totalTargets: 3 }
];