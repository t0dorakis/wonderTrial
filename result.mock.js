const { Tile} = require('./tile.enum')

const expectedResult = [
    new Tile({x: 0, y: 0}),
    new Tile({x: 0, y: 450}),
    new Tile({x: 450, y: 0}),
    new Tile({x: 450, y: 450})
]

module.exports = {
    expectedResult
}