const tileConfig = {
    squareLength: 450
}

class Tile {
    constructor({x, y}) {
        this.x = x
        this.y = y
      }
}

module.exports = {
    Tile,
    tileConfig
}