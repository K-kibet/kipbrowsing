class Tackle {
     color;
    constructor(color, points) {
        this.color = color
        this.points = points
    }

    returnColor () {
        return this.color
    }

    returnPoints () {
        return this.points
    }
}


export const games = [
    {
        name: new Tackle("green", 50),
        id: 1,
        difficulty: 10
    },
    {
        name: new Tackle("green", 50),
        id: 2,
        difficulty: 9
    },
    {
        name: new Tackle("green", 50),
        id: 3,
        difficulty: 8
    },
    {
        name: new Tackle("green", 50),
        id: 4,
        difficulty: 7
    },
    {
        name: new Tackle("green", 50),
        id: 5,
        difficulty: 6
    },
    {
        name: new Tackle("green", 50),
        id: 6,
        difficulty: 5
    },
    {
        name: new Tackle("green", 50),
        id: 7,
        difficulty: 4
    },
    {
        name: new Tackle("green", 50),
        id: 8,
        difficulty: 3
    },
    {
        name: new Tackle("green", 50),
        id: 9,
        difficulty: 2
    },
    {
        name: new Tackle("green", 50),
        id: 10,
        difficulty: 1
    }
]
