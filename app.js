const room = require('./room.mock')
const tileService = require ('./tileService')
const { viewport } = require('./viewport.mock')
const { expectedResult } = require('./result.mock')

const arrayOfTiles = tileService.getArrayOfTiles(room)
console.log("arrayOfTiles", arrayOfTiles)
const tilesTouchingTheViewport = tileService.getTilesTouchingTheViewport({viewport, arrayOfTiles})
console.log("tileTouchingTheViewport", tilesTouchingTheViewport)

// small sanity check. can be deleted later
const test = (tilesTouchingTheViewport) => {
    const checkSame = () => {
        return tilesTouchingTheViewport.every((tile, index) => {
            console.log("tile.x", tile.x)
            console.log("hallo!!!!", expectedResult[index].x)
            return tile.x === expectedResult[index].x && (tile.y === (expectedResult[index].y))
        })
    }
    if (tilesTouchingTheViewport.length !== expectedResult.length) {
        console.error("test failed, length does not match")
        console.log(tilesTouchingTheViewport.length, " not equal ", expectedResult.length)
    } else if (!checkSame) {
        console.error("test failed, not the same values")
    } else {
        console.log("// test successfull")
    }
}
test(tilesTouchingTheViewport)