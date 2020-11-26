const { tileConfig, Tile} = require('./tile.enum')

const squareLength = tileConfig.squareLength

const getArrayOfTiles = ({width, height}) => {
    const tileArray = []

    for(let x = 0; x < width; x = x + squareLength) {
        tileArray.push(new Tile({x, y: 0}))
        for (let y = squareLength; y < height; y = y + squareLength) { 
            tileArray.push(new Tile({x, y}))
        }
    }
    return tileArray
}

const getTilesTouchingTheViewport = ({viewport, arrayOfTiles}) => {

    const tileFilter = (tile) => {
        // TODO: the following start and end values would 
        // be cleaner as object methods of "Tile" & "Viewport" or similar

        const tileStartX = tile.x
        const tileEndX = tileStartX + squareLength
        const tileStartY = tile.y
        const tileEndY = tileStartY + squareLength

        const viewportStartX = viewport.position.x
        const viewportEndX = viewportStartX + viewport.width
        const viewportStartY = viewport.position.y
        const viewportEndY = viewportStartY + viewport.height

        // yes, I wouldn't push something that is that unreadable and repetitive normally
        if (((tileStartX < viewportEndX) && (tileEndX > viewportEndX)) || ((tileStartX >= viewportStartX) && (tileStartX < viewportEndX))) {
            if (((tileStartY < viewportEndY) && (tileEndY > viewportEndY)) || ((tileStartY >= viewportStartY) && (tileStartY < viewportEndY))) {
                return tile
            }
        }
    }
    return arrayOfTiles.filter(tile => tileFilter(tile))
}

module.exports = { getArrayOfTiles, getTilesTouchingTheViewport}