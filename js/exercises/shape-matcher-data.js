export const shapeMatcherLevels = [
    // --- 1-10: Mirror Lowercase (The Basics) ---
    { target: "b", icon: "b", items: [{name:"b", icon:"b"}, {name:"d", icon:"d"}, {name:"p", icon:"p"}, {name:"q", icon:"q"}] },
    { target: "d", icon: "d", items: [{name:"d", icon:"d"}, {name:"b", icon:"b"}, {name:"p", icon:"p"}, {name:"q", icon:"q"}] },
    { target: "p", icon: "p", items: [{name:"p", icon:"p"}, {name:"q", icon:"q"}, {name:"b", icon:"b"}, {name:"d", icon:"d"}] },
    { target: "q", icon: "q", items: [{name:"q", icon:"q"}, {name:"p", icon:"p"}, {name:"d", icon:"d"}, {name:"g", icon:"g"}] },
    { target: "n", icon: "n", items: [{name:"n", icon:"n"}, {name:"u", icon:"u"}, {name:"h", icon:"h"}, {name:"m", icon:"m"}] },
    { target: "u", icon: "u", items: [{name:"u", icon:"u"}, {name:"n", icon:"n"}, {name:"v", icon:"v"}, {name:"w", icon:"w"}] },
    { target: "h", icon: "h", items: [{name:"h", icon:"h"}, {name:"n", icon:"n"}, {name:"b", icon:"b"}, {name:"l", icon:"l"}] },
    { target: "m", icon: "m", items: [{name:"m", icon:"m"}, {name:"n", icon:"n"}, {name:"w", icon:"w"}, {name:"u", icon:"u"}] },
    { target: "v", icon: "v", items: [{name:"v", icon:"v"}, {name:"w", icon:"w"}, {name:"u", icon:"u"}, {name:"y", icon:"y"}] },
    { target: "w", icon: "w", items: [{name:"w", icon:"w"}, {name:"v", icon:"v"}, {name:"m", icon:"m"}, {name:"u", icon:"u"}] },

    // --- 11-20: Round & Curved Lowercase ---
    { target: "c", icon: "c", items: [{name:"c", icon:"c"}, {name:"o", icon:"o"}, {name:"e", icon:"e"}, {name:"a", icon:"a"}] },
    { target: "e", icon: "e", items: [{name:"e", icon:"e"}, {name:"c", icon:"c"}, {name:"o", icon:"o"}, {name:"a", icon:"a"}] },
    { target: "a", icon: "a", items: [{name:"a", icon:"a"}, {name:"o", icon:"o"}, {name:"e", icon:"e"}, {name:"d", icon:"d"}] },
    { target: "o", icon: "o", items: [{name:"o", icon:"o"}, {name:"c", icon:"c"}, {name:"a", icon:"a"}, {name:"0", icon:"0"}] },
    { target: "g", icon: "g", items: [{name:"g", icon:"g"}, {name:"q", icon:"q"}, {name:"p", icon:"p"}, {name:"y", icon:"y"}] },
    { target: "y", icon: "y", items: [{name:"y", icon:"y"}, {name:"v", icon:"v"}, {name:"g", icon:"g"}, {name:"j", icon:"j"}] },
    { target: "f", icon: "f", items: [{name:"f", icon:"f"}, {name:"t", icon:"t"}, {name:"l", icon:"l"}, {name:"j", icon:"j"}] },
    { target: "t", icon: "t", items: [{name:"t", icon:"t"}, {name:"f", icon:"f"}, {name:"l", icon:"l"}, {name:"i", icon:"i"}] },
    { target: "i", icon: "i", items: [{name:"i", icon:"i"}, {name:"l", icon:"l"}, {name:"j", icon:"j"}, {name:"t", icon:"t"}] },
    { target: "s", icon: "s", items: [{name:"s", icon:"s"}, {name:"z", icon:"z"}, {name:"5", icon:"5"}, {name:"c", icon:"c"}] },

    // --- 21-30: Uppercase (Sharp & Straight) ---
    { target: "E", icon: "E", items: [{name:"E", icon:"E"}, {name:"F", icon:"F"}, {name:"H", icon:"H"}, {name:"L", icon:"L"}] },
    { target: "F", icon: "F", items: [{name:"F", icon:"F"}, {name:"E", icon:"E"}, {name:"T", icon:"T"}, {name:"L", icon:"L"}] },
    { target: "M", icon: "M", items: [{name:"M", icon:"M"}, {name:"N", icon:"N"}, {name:"W", icon:"W"}, {name:"H", icon:"H"}] },
    { target: "N", icon: "N", items: [{name:"N", icon:"N"}, {name:"M", icon:"M"}, {name:"H", icon:"H"}, {name:"Z", icon:"Z"}] },
    { target: "W", icon: "W", items: [{name:"W", icon:"W"}, {name:"M", icon:"M"}, {name:"V", icon:"V"}, {name:"U", icon:"U"}] },
    { target: "V", icon: "V", items: [{name:"V", icon:"V"}, {name:"W", icon:"W"}, {name:"U", icon:"U"}, {name:"Y", icon:"Y"}] },
    { target: "K", icon: "K", items: [{name:"K", icon:"K"}, {name:"X", icon:"X"}, {name:"Y", icon:"Y"}, {name:"R", icon:"R"}] },
    { target: "X", icon: "X", items: [{name:"X", icon:"X"}, {name:"K", icon:"K"}, {name:"Y", icon:"Y"}, {name:"V", icon:"V"}] },
    { target: "Z", icon: "Z", items: [{name:"Z", icon:"Z"}, {name:"N", icon:"N"}, {name:"S", icon:"S"}, {name:"2", icon:"2"}] },
    { target: "A", icon: "A", items: [{name:"A", icon:"A"}, {name:"V", icon:"V"}, {name:"H", icon:"H"}, {name:"R", icon:"R"}] },

    // --- 31-40: Uppercase (Curved & Rounded) ---
    { target: "B", icon: "B", items: [{name:"B", icon:"B"}, {name:"P", icon:"P"}, {name:"R", icon:"R"}, {name:"D", icon:"D"}] },
    { target: "P", icon: "P", items: [{name:"P", icon:"P"}, {name:"B", icon:"B"}, {name:"R", icon:"R"}, {name:"F", icon:"F"}] },
    { target: "R", icon: "R", items: [{name:"R", icon:"R"}, {name:"P", icon:"P"}, {name:"B", icon:"B"}, {name:"K", icon:"K"}] },
    { target: "D", icon: "D", items: [{name:"D", icon:"D"}, {name:"O", icon:"O"}, {name:"Q", icon:"Q"}, {name:"B", icon:"B"}] },
    { target: "O", icon: "O", items: [{name:"O", icon:"O"}, {name:"Q", icon:"Q"}, {name:"D", icon:"D"}, {name:"C", icon:"C"}] },
    { target: "Q", icon: "Q", items: [{name:"Q", icon:"Q"}, {name:"O", icon:"O"}, {name:"G", icon:"G"}, {name:"D", icon:"D"}] },
    { target: "G", icon: "G", items: [{name:"G", icon:"G"}, {name:"C", icon:"C"}, {name:"Q", icon:"Q"}, {name:"O", icon:"O"}] },
    { target: "C", icon: "C", items: [{name:"C", icon:"C"}, {name:"G", icon:"G"}, {name:"O", icon:"O"}, {name:"U", icon:"U"}] },
    { target: "U", icon: "U", items: [{name:"U", icon:"U"}, {name:"V", icon:"V"}, {name:"O", icon:"O"}, {name:"W", icon:"W"}] },
    { target: "S", icon: "S", items: [{name:"S", icon:"S"}, {name:"5", icon:"5"}, {name:"8", icon:"8"}, {name:"B", icon:"B"}] },

];