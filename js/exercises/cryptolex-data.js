export const cryptolexLevels = [
    {
        id: 1,
        instruction: "Find 'ART' (Horizontal) and 'ART' (Vertical)!",
        targetWord: "ART",
        // ART (Horizontal: 0,1,2) | ART (Vertical: Column 4 -> indices 4, 10, 16)
        grid: [
            "A", "R", "T", "X", "A", "B", 
            "C", "D", "E", "F", "R", "G", 
            "H", "I", "J", "K", "T", "L"
        ]
    },
    {
        id: 2,
        instruction: "Find 'CAT' (Horizontal) and 'CAT' (Vertical)!",
        targetWord: "CAT",
        // CAT (Horizontal: 12,13,14) | CAT (Vertical: Column 0 -> indices 0, 6, 12)
        grid: [
            "C", "X", "Y", "Z", "A", "B", 
            "A", "D", "E", "F", "G", "H", 
            "T", "C", "A", "T", "I", "J"
        ]
    },
    {
        id: 3,
        instruction: "Find 'DOG' (Horizontal) and 'DOG' (Vertical)!",
        targetWord: "DOG",
        // DOG (Horizontal: 0,1,2) | DOG (Vertical: Column 5 -> indices 5, 11, 17)
        grid: [
            "D", "O", "G", "X", "Y", "D", 
            "A", "B", "C", "E", "F", "O", 
            "H", "I", "J", "K", "L", "G"
        ]
    },
    {
        id: 4,
        instruction: "Find 'SUN' (Horizontal) and 'SUN' (Vertical)!",
        targetWord: "SUN",
        // SUN (Horizontal: 12,13,14) | SUN (Vertical: Column 0 -> indices 0, 6, 12)
        grid: [
            "S", "A", "B", "C", "D", "E", 
            "U", "F", "G", "H", "I", "J", 
            "N", "S", "U", "N", "K", "L"
        ]
    },
    {
        id: 5,
        instruction: "Find 'BAT' (Horizontal) and 'BAT' (Vertical)!",
        targetWord: "BAT",
        // Horizontal (0,1,2) | Vertical (3,9,15)
        grid: [
            "B", "A", "T", "B", "X", "Y", // Row 0
            "Z", "C", "D", "A", "E", "F", // Row 1
            "G", "H", "I", "T", "J", "K"  // Row 2
        ]
    },
    {
        id: 6,
        instruction: "Find 'PIG' (Horizontal) and 'PIG' (Vertical)!",
        targetWord: "PIG",
        grid: [
            "P", "X", "Y", "Z", "A", "B", 
            "I", "P", "I", "G", "C", "D", 
            "G", "E", "F", "H", "J", "K"
        ]
    },
        // BUS: Horizontal Row 2 (12,13,14) | Vertical Column 5 (5,11,17)
    {
        id: 7,
        instruction: "Find 'BUS' (Horizontal) and 'BUS' (Vertical)!",
        targetWord: "BUS",
        grid: [
            "X", "Y", "Z", "A", "B", "B", 
            "C", "D", "E", "F", "G", "U", 
            "B", "U", "S", "H", "I", "S"
        ]
    },
        // NET: Horizontal Row 0 (0,1,2) | Vertical Column 3 (3,9,15)
    {
        id: 8,
        instruction: "Find 'NET' (Horizontal) and 'NET' (Vertical)!",
        targetWord: "NET",
        grid: [
            "N", "E", "T", "N", "X", "Y", 
            "Z", "A", "B", "E", "C", "D", 
            "F", "G", "H", "T", "I", "J"
        ]
    },
    {
        id: 9,
        instruction: "Find 'MUG' (Horizontal) and 'MUG' (Vertical)!",
        targetWord: "MUG",
        grid: [
            "M", "U", "G", "X", "Y", "M", 
            "A", "B", "C", "D", "E", "U", 
            "F", "H", "I", "J", "K", "G"
        ]
    },
    {
        id: 10,
        instruction: "Find 'CAP' (Horizontal) and 'CAP' (Vertical)!",
        targetWord: "CAP",
        grid: [
            "X", "Y", "Z", "C", "B", "D", // Row 0
            "C", "A", "P", "A", "E", "F", // Row 1 (H: 6,7,8)
            "G", "H", "I", "P", "J", "K"  // Row 2 (V: 3,9,15)
        ]
    },
    {
        id: 11,
        instruction: "Find 'GUM' (Horizontal) and 'GUM' (Vertical)!",
        targetWord: "GUM",
        grid: [
            "G", "X", "Y", "Z", "A", "B", 
            "U", "C", "D", "E", "F", "H", 
            "M", "G", "U", "M", "I", "J"
        ]
    },
    {
        id: 12,
        instruction: "Find 'PEN' (Horizontal) and 'PEN' (Vertical)!",
        targetWord: "PEN",
        grid: [
            "P", "E", "N", "X", "Y", "P", 
            "A", "B", "C", "D", "F", "E", 
            "G", "H", "I", "J", "K", "N"
        ]
    },
    {
        id: 13,
        instruction: "Find 'KEY' (Horizontal) and 'KEY' (Vertical)!",
        targetWord: "KEY",
        grid: [
            "K", "X", "Y", "Z", "A", "B", 
            "E", "K", "E", "Y", "C", "D", 
            "Y", "F", "G", "H", "I", "J"
        ]
    },
    {
        id: 14,
        instruction: "Find 'FOX' (Horizontal) and 'FOX' (Vertical)!",
        targetWord: "FOX",
        grid: [
            "A", "B", "F", "X", "Y", "Z", 
            "C", "D", "O", "E", "G", "H", 
            "I", "J", "X", "F", "O", "X"
        ]
    },
    {
        id: 15,
        instruction: "Find 'BED' (Horizontal) and 'BED' (Vertical)!",
        targetWord: "BED",
        grid: [
            "B", "X", "Y", "Z", "A", "C", 
            "E", "B", "E", "D", "F", "G", 
            "D", "H", "I", "J", "K", "L"
        ]
    },
    {
        id: 16,
        instruction: "Find 'EGG' (Horizontal) and 'EGG' (Vertical)!",
        targetWord: "EGG",
        grid: [
            "E", "G", "G", "X", "E", "Y", 
            "A", "B", "C", "D", "G", "F", 
            "H", "I", "J", "K", "G", "L"
        ]
    },
    {
        id: 17,
        instruction: "Find 'ANT' (Horizontal) and 'ANT' (Vertical)!",
        targetWord: "ANT",
        grid: [
            "X", "A", "Y", "Z", "B", "C", 
            "D", "N", "E", "F", "G", "H", 
            "I", "T", "A", "N", "T", "J"
        ]
    },
    {
        id: 18,
        instruction: "Find 'OWL' (Horizontal) and 'OWL' (Vertical)!",
        targetWord: "OWL",
        grid: [
            "O", "W", "L", "A", "B", "O", 
            "C", "D", "E", "F", "G", "W", 
            "H", "I", "J", "K", "M", "L"
        ]
    },
    {
        id: 19,
        instruction: "Find 'BEE' (Horizontal) and 'BEE' (Vertical)!",
        targetWord: "BEE",
        grid: [
            "A", "C", "D", "F", "B", "G", 
            "B", "E", "E", "H", "E", "I", 
            "J", "K", "L", "M", "E", "N"
        ]
    },
    {
        id: 20,
        instruction: "Find 'ICE' (Horizontal) and 'ICE' (Vertical)!",
        targetWord: "ICE",
        grid: [
            "I", "A", "B", "C", "D", "E", 
            "C", "F", "G", "H", "I", "J", 
            "E", "I", "C", "E", "K", "L"
        ]
    },
    {
        id: 21,
        instruction: "Find 'VAN' (Horizontal) and 'VAN' (Vertical)!",
        targetWord: "VAN",
        grid: [
            "V", "A", "N", "V", "B", "C", 
            "D", "E", "F", "A", "G", "H", 
            "I", "J", "K", "N", "L", "M"
        ]
    },
    {
        id: 22,
        instruction: "Find 'DAD' (Horizontal) and 'DAD' (Vertical)!",
        targetWord: "DAD",
        grid: [
            "D", "A", "D", "X", "Y", "D", 
            "B", "C", "E", "F", "G", "A", 
            "H", "I", "J", "K", "L", "D"  
        ]
    },
    {
        id: 23,
        instruction: "Find 'RAT' (Horizontal) and 'RAT' (Vertical)!",
        targetWord: "RAT",
        grid: [
            "R", "B", "C", "D", "E", "F", 
            "A", "R", "A", "T", "G", "H", 
            "T", "I", "J", "K", "L", "M"  
        ]
    },
    {
        id: 24,
        instruction: "Find 'RED' (Horizontal) and 'RED' (Vertical)!",
        targetWord: "RED",
        grid: [
            "R", "E", "D", "A", "R", "B", // Row 0
            "C", "F", "G", "H", "E", "I", // Row 1
            "J", "K", "L", "M", "D", "N"  // Row 2
        ]
    },
    {
        id: 25,
        instruction: "Find 'NUT' (Horizontal) and 'NUT' (Vertical)!",
        targetWord: "NUT",
        grid: [
            "N", "U", "T", "A", "B", "N", // Row 0
            "C", "D", "E", "F", "G", "U", // Row 1
            "H", "I", "J", "K", "L", "T"  // Row 2
        ]
    },
    {
        id: 26,
        instruction: "Find 'NAP' (Horizontal) and 'NAP' (Vertical)!",
        targetWord: "NAP",
        grid: [
            "N", "B", "C", "D", "E", "F", // Row 0
            "A", "G", "H", "I", "J", "K", // Row 1
            "P", "L", "M", "N", "A", "P"  // Row 2
        ]
    },
    {
        id: 27,
        instruction: "Find 'HAT' (Horizontal) and 'HAT' (Vertical)!",
        targetWord: "HAT",
        grid: [
            "H", "A", "T", "H", "B", "C", // Row 0
            "D", "E", "F", "A", "G", "I", // Row 1
            "J", "K", "L", "T", "M", "N"  // Row 2
        ]
    },
    {
        id: 28,
        instruction: "Find 'LOG' (Horizontal) and 'LOG' (Vertical)!",
        targetWord: "LOG",
        grid: [
            "L", "A", "B", "C", "D", "E", // Row 0
            "O", "F", "G", "H", "I", "J", // Row 1
            "G", "K", "M", "L", "O", "G"  // Row 2
        ]
    },
    {
        id: 29,
        instruction: "Find 'LEG' (Horizontal) and 'LEG' (Vertical)!",
        targetWord: "LEG",
        grid: [
            "L", "E", "G", "A", "B", "L", // Row 0
            "C", "D", "F", "H", "I", "E", // Row 1
            "J", "K", "M", "N", "O", "G"  // Row 2
        ]
    },
    {
        id: 30,
        instruction: "Find 'LIP' (Horizontal) and 'LIP' (Vertical)!",
        targetWord: "LIP",
        grid: [
            "L", "A", "B", "C", "D", "E", // Row 0
            "I", "F", "G", "H", "J", "K", // Row 1
            "P", "M", "N", "L", "I", "P"  // Row 2
        ]
    },
    {
        id: 31,
        instruction: "Find 'BUG' (Horizontal) and 'BUG' (Vertical)!",
        targetWord: "BUG",
        grid: [
            "B", "U", "G", "B", "A", "C", // Row 0
            "D", "E", "F", "U", "G", "H", // Row 1
            "I", "J", "K", "G", "L", "M"  // Row 2
        ]
    },
    {
        id: 32,
        instruction: "Find 'BAG' (Horizontal) and 'BAG' (Vertical)!",
        targetWord: "BAG",
        grid: [
            "B", "D", "E", "F", "H", "I", // Row 0
            "A", "J", "K", "L", "M", "N", // Row 1
            "G", "O", "P", "B", "A", "G"  // Row 2
        ]
    },
    {
        id: 33,
        instruction: "Find 'BIG' (Horizontal) and 'BIG' (Vertical)!",
        targetWord: "BIG",
        grid: [
            "B", "I", "G", "A", "C", "B", // Row 0
            "D", "E", "F", "H", "J", "I", // Row 1
            "K", "L", "M", "N", "O", "G"  // Row 2
        ]
    },
    {
        id: 34,
        instruction: "Find 'JAM' (Horizontal) and 'JAM' (Vertical)!",
        targetWord: "JAM",
        grid: [
            "J", "B", "C", "D", "E", "F", // Row 0
            "A", "G", "H", "I", "K", "L", // Row 1
            "M", "N", "O", "J", "A", "M"  // Row 2
        ]
    },
    {
        id: 35,
        instruction: "Find 'PET' (Horizontal) and 'PET' (Vertical)!",
        targetWord: "PET",
        grid: [
            "P", "E", "T", "P", "A", "B", // Row 0
            "C", "D", "F", "E", "G", "H", // Row 1
            "I", "J", "K", "T", "L", "M"  // Row 2
        ]
    },
    {
        id: 36,
        instruction: "Find 'JET' (Horizontal) and 'JET' (Vertical)!",
        targetWord: "JET",
        grid: [
            "J", "A", "B", "C", "D", "E", // Row 0
            "E", "F", "G", "H", "I", "K", // Row 1
            "T", "L", "M", "J", "E", "T"  // Row 2
        ]
    },
    {
        id: 37,
        instruction: "Find 'WET' (Horizontal) and 'WET' (Vertical)!",
        targetWord: "WET",
        grid: [
            "W", "E", "T", "W", "A", "B", // Row 0
            "C", "D", "F", "E", "G", "H", // Row 1
            "I", "J", "K", "T", "L", "M"  // Row 2
        ]
    },
    {
        id: 38,
        instruction: "Find 'TOP' (Horizontal) and 'TOP' (Vertical)!",
        targetWord: "TOP",
        grid: [
            "T", "A", "B", "C", "D", "E", // Row 0
            "O", "F", "G", "H", "I", "J", // Row 1
            "P", "K", "L", "T", "O", "P"  // Row 2
        ]
    },
    {
        id: 39,
        instruction: "Find 'FOG' (Horizontal) and 'FOG' (Vertical)!",
        targetWord: "FOG",
        grid: [
            "F", "O", "G", "F", "A", "B", // Row 0
            "C", "D", "E", "O", "H", "I", // Row 1
            "J", "K", "L", "G", "M", "N"  // Row 2
        ]
    },
    {
        id: 40,
        instruction: "Find 'MAP' (Horizontal) and 'MAP' (Vertical)!",
        targetWord: "MAP",
        grid: [
            "M", "B", "C", "D", "E", "F", // Row 0
            "A", "G", "H", "I", "J", "K", // Row 1
            "P", "L", "N", "M", "A", "P"  // Row 2
        ]
    }
];