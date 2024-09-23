function incArray(n) {
    const pieces = [];
    for (let i = 0; i < n; i++) {
        pieces.push(i);
    }
    return pieces;
}

const Color = {
    WHITE: 0,
    YELLOW: 1,
    BLUE: 2,
    GREEN: 3,
    ORANGE: 4,
    RED: 5,
};

class Corner {
    constructor(color1, color2, color3, twists) {
        this.colors = [color1, color2, color3];
        this.twists = twists % 3;
    }

    twist() {
        this.twists++;
        this.twists %= 3;
    }
}

class Edge {
    constructor(color1, color2, orientation) {
        this.colors = [color1, color2];
        this.orientation = orientation % 2;
    }

    flip() {
        this.orientation++;
        this.orientation %= 2;
    }
}

class Cube {
    constructor() {
        this.corners = incArray(8);
        this.edges = incArray(12);
    }

    scramble() {
        const solvedCorners = incArray(8);
        const solvedEdges = incArray(12);
    }

    R() {
        
    }
}

const timerDiv = document.getElementById('timer-entry');
const timerInput = document.getElementById('timer');

function resetCube() {
    for (let i = 0; i < 20; i++) {
        pieces[i] = i;
    }
}

function solveCube() {}
