export const distractionLevels = [
    // --- COLOR FOCUS ---
    { id: 1, targetType: "color", targetValue: "🔴", instruction: "Tap only the RED items!", grid: ["🔴", "🔵", "🟢", "🔴", "🟢", "🟡", "🔵", "🔴"], totalTargets: 3 },
    { id: 2, targetType: "color", targetValue: "🔵", instruction: "Select every BLUE item!", grid: ["🔵", "🔵", "🔴", "🟢", "🔵", "🟡", "🔴", "🔵"], totalTargets: 4 },
    { id: 3, targetType: "color", targetValue: "🟢", instruction: "Tap only the GREEN items!", grid: ["🔴", "🟢", "🟡", "🔵", "🟢", "🟢", "🔴", "🔵"], totalTargets: 3 },
    { id: 4, targetType: "color", targetValue: "🟡", instruction: "Find all the YELLOW items!", grid: ["🟡", "🔴", "🟡", "🟢", "🔵", "🟡", "🟡", "🔴"], totalTargets: 4 },
    { id: 5, targetType: "color", targetValue: "🟣", instruction: "Tap only the PURPLE items!", grid: ["🟣", "🔵", "🟣", "🔴", "🟢", "🟣", "🟡", "🔵"], totalTargets: 3 },

    // --- SHAPE FOCUS ---
    { id: 6, targetType: "shape", targetValue: "⭕", instruction: "Find all the CIRCLES!", grid: ["⭕", "📐", "📦", "⭕", "📐", "📦", "⭕", "📐"], totalTargets: 3 },
    { id: 7, targetType: "shape", targetValue: "📐", instruction: "Can you find all the TRIANGLES?", grid: ["📐", "⭕", "📐", "📦", "⭕", "📐", "📦", "⭕"], totalTargets: 3 },
    { id: 8, targetType: "shape", targetValue: "📦", instruction: "Select every SQUARE!", grid: ["📦", "📦", "📐", "⭕", "📦", "📐", "⭕", "📦"], totalTargets: 4 },
    { id: 9, targetType: "shape", targetValue: "⭐", instruction: "Tap only the STARS!", grid: ["⭐", "⭕", "📦", "⭐", "⭐", "📐", "⭕", "⭐"], totalTargets: 4 },
    { id: 10, targetType: "shape", targetValue: "❤️", instruction: "Find all the HEARTS!", grid: ["❤️", "⭐", "📦", "❤️", "📐", "❤️", "⭐", "📦"], totalTargets: 3 },

    // --- FRUIT/FOOD FOCUS ---
    { id: 11, targetType: "food", targetValue: "🍎", instruction: "Tap only the APPLES!", grid: ["🍎", "🍌", "🍇", "🍎", "🍎", "🍌", "🍇", "🍎"], totalTargets: 4 },
    { id: 12, targetType: "food", targetValue: "🍌", instruction: "Find all the BANANAS!", grid: ["🍌", "🍎", "🍇", "🍌", "🍓", "🍌", "🍎", "🍇"], totalTargets: 3 },
    { id: 13, targetType: "food", targetValue: "🍇", instruction: "Select every GRAPE!", grid: ["🍇", "🍇", "🍌", "🍓", "🍎", "🍇", "🍌", "🍓"], totalTargets: 3 },
    { id: 14, targetType: "food", targetValue: "🍓", instruction: "Tap only the STRAWBERRIES!", grid: ["🍓", "🍎", "🍇", "🍓", "🍓", "🍌", "🍎", "🍓"], totalTargets: 4 },
    { id: 15, targetType: "food", targetValue: "🍋", instruction: "Find all the LEMONS!", grid: ["🍋", "🍇", "🍎", "🍋", "🍌", "🍋", "🍇", "🍓"], totalTargets: 3 },

    // --- MIXED CHALLENGE ---
    { id: 16, targetType: "color", targetValue: "🟠", instruction: "Tap only the ORANGE items!", grid: ["🟠", "🟢", "🟠", "🔵", "🟠", "🟢", "🔵", "🟠"], totalTargets: 4 },
    { id: 17, targetType: "shape", targetValue: "💎", instruction: "Select every DIAMOND!", grid: ["💎", "❤️", "⭐", "💎", "❤️", "⭐", "💎", "❤️"], totalTargets: 3 },
    { id: 18, targetType: "food", targetValue: "🍒", instruction: "Find all the CHERRIES!", grid: ["🍒", "🍎", "🍌", "🍒", "🍇", "🍒", "🍎", "🍌"], totalTargets: 3 },
    { id: 19, targetType: "color", targetValue: "🟤", instruction: "Tap only the BROWN items!", grid: ["🟤", "🟣", "🟤", "🟡", "🟤", "🟣", "🟡", "🟤"], totalTargets: 4 },
    { id: 20, targetType: "shape", targetValue: "🌙", instruction: "Find all the MOONS!", grid: ["🌙", "⭐", "💎", "🌙", "⭐", "💎", "🌙", "⭐"], totalTargets: 3 }
];