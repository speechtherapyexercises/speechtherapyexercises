export const letterTrackingLevels = [
    // --- Mirror Confusion (b, d, p, q) ---
    { target: "b", grid: ["b", "d", "p", "b", "q", "d", "b", "p"] },
    { target: "d", grid: ["b", "d", "q", "p", "d", "b", "d", "q"] },
    { target: "p", grid: ["p", "q", "b", "d", "p", "q", "b", "p"] },
    { target: "q", grid: ["q", "p", "d", "b", "q", "p", "d", "q"] },

    // --- Bridge/Hump Confusion (n, m, h, u) ---
    { target: "n", grid: ["n", "m", "u", "h", "n", "m", "u", "n"] },
    { target: "m", grid: ["m", "n", "w", "u", "m", "n", "w", "m"] },
    { target: "h", grid: ["h", "n", "b", "l", "h", "n", "b", "h"] },
    { target: "u", grid: ["u", "n", "v", "w", "u", "n", "v", "u"] },

    // --- Sharp/Slanted Confusion (v, w, x, y) ---
    { target: "v", grid: ["v", "w", "y", "u", "v", "w", "y", "v"] },
    { target: "w", grid: ["w", "v", "m", "u", "w", "v", "m", "w"] },
    { target: "x", grid: ["x", "k", "y", "v", "x", "k", "y", "x"] },
    { target: "y", grid: ["y", "v", "g", "j", "y", "v", "g", "y"] },

    // --- Curved Confusion (c, e, o, a) ---
    { target: "c", grid: ["c", "o", "e", "a", "c", "o", "e", "c"] },
    { target: "e", grid: ["e", "c", "o", "a", "e", "c", "o", "e"] },
    { target: "o", grid: ["o", "c", "a", "e", "o", "c", "a", "o"] },
    { target: "a", grid: ["a", "o", "c", "d", "a", "o", "c", "a"] },

    // --- Tall/Thin Confusion (l, i, t, f) ---
    { target: "l", grid: ["l", "i", "t", "f", "l", "i", "t", "l"] },
    { target: "i", grid: ["i", "l", "j", "t", "i", "l", "j", "i"] },
    { target: "t", grid: ["t", "f", "l", "i", "t", "f", "l", "t"] },
    { target: "f", grid: ["f", "t", "k", "l", "f", "t", "k", "f"] },

    // --- Round & Tail Confusion (g, q, y, j) ---
    { target: "g", grid: ["g", "q", "p", "y", "g", "q", "p", "g"] },
    { target: "j", grid: ["j", "i", "y", "l", "j", "i", "y", "j"] },
    { target: "s", grid: ["s", "z", "c", "e", "s", "z", "c", "s"] },
    { target: "k", grid: ["k", "x", "h", "y", "k", "x", "h", "k"] },

    // --- Uppercase (Sharp) ---
    { target: "M", grid: ["M", "N", "W", "H", "M", "N", "W", "M"] },
    { target: "E", grid: ["E", "F", "L", "H", "E", "F", "L", "E"] },
    { target: "A", grid: ["A", "V", "H", "M", "A", "V", "H", "A"] },
    { target: "K", grid: ["K", "X", "Y", "R", "K", "X", "Y", "K"] },

    // --- Uppercase (Rounded) ---
    { target: "B", grid: ["B", "P", "R", "D", "B", "P", "R", "B"] },
    { target: "O", grid: ["O", "Q", "C", "D", "O", "Q", "C", "O"] },
    { target: "G", grid: ["G", "C", "Q", "O", "G", "C", "Q", "G"] },
    { target: "S", grid: ["S", "B", "G", "Z", "S", "B", "G", "S"] }
];