controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (guy.isHittingTile(CollisionDirection.Bottom)) {
        guy.vy += -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    tiles.placeOnRandomTile(guy, assets.tile`myTile1`)
    tiles.coverAllTiles(assets.tile`myTile1`, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.placeOnRandomTile(guy, assets.tile`myTile7`)
    tiles.coverAllTiles(assets.tile`myTile7`, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level8`))
    tiles.placeOnRandomTile(guy, assets.tile`myTile1`)
    tiles.coverAllTiles(assets.tile`myTile1`, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level4`))
    tiles.placeOnRandomTile(guy, assets.tile`myTile1`)
    tiles.coverAllTiles(assets.tile`myTile1`, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level6`))
    tiles.placeOnRandomTile(guy, assets.tile`myTile1`)
    tiles.coverAllTiles(assets.tile`myTile1`, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
	
})
let guy: Sprite = null
guy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . f d f d f d f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . f d f f f d f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    `, SpriteKind.Player)
tiles.loadMap(tiles.createMap(tilemap`level1`))
controller.moveSprite(guy, 100, 0)
tiles.placeOnRandomTile(guy, assets.tile`myTile1`)
scene.cameraFollowSprite(guy)
tiles.coverAllTiles(assets.tile`myTile1`, assets.tile`myTile0`)
guy.ay = 200
