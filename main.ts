controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spider.isHittingTile(CollisionDirection.Top) || spider.isHittingTile(CollisionDirection.Bottom)) {
        gra = gra==1?0:1
    }
})
let spider: Sprite = null
let gra = 0
let level = [0, 0]
spider = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f f f . 
    . . . f 2 2 2 4 4 f f 2 2 4 f . 
    . . . . f 2 2 4 f 7 7 f 2 f . . 
    . . . . . f 2 4 f 7 7 f 2 f . . 
    . . . . f f 2 4 4 f f 2 f . . . 
    . . f f 2 2 f 4 4 4 2 2 f . . . 
    . f 4 4 f f 2 4 4 4 2 f . . . . 
    f 2 4 f 2 2 f 4 4 4 f 2 f f . . 
    f 2 4 f 2 2 f f f f 2 2 2 4 f . 
    f 2 f 4 2 2 f f 4 4 f f 2 4 f . 
    f 2 f 4 2 f . f 4 4 f . f 4 f . 
    f f 4 4 2 f . f 4 4 f . f 4 f . 
    . . f f f . . . f f . . . f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spider)
gra = 0
tiles.setTilemap(tilemap`level_0`)
game.onUpdate(function () {
    if (level[0] == 0) {
        spider.setPosition(0, 60)
        level[0] = level[0] + 1
    }
})
game.onUpdate(function () {
    if (gra == 0) {
        spider.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f f f . 
            . . . f 2 2 2 4 4 f f 2 2 4 f . 
            . . . . f 2 2 4 f 7 7 f 2 f . . 
            . . . . . f 2 4 f 7 7 f 2 f . . 
            . . . . f f 2 4 4 f f 2 f . . . 
            . . f f 2 2 f 4 4 4 2 2 f . . . 
            . f 4 4 f f 2 4 4 4 2 f . . . . 
            f 2 4 f 2 2 f 4 4 4 f 2 f f . . 
            f 2 4 f 2 2 f f f f 2 2 2 4 f . 
            f 2 f 4 2 2 f f 4 4 f f 2 4 f . 
            f 2 f 4 2 f . f 4 4 f . f 4 f . 
            f f 4 4 2 f . f 4 4 f . f 4 f . 
            . . f f f . . . f f . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        spider.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . f f f . . . f f . . . f . . 
            f f 4 4 2 f . f 4 4 f . f 4 f . 
            f 2 f 4 2 f . f 4 4 f . f 4 f . 
            f 2 f 4 2 2 f f 4 4 f f 2 4 f . 
            2 4 f 2 2 f f f f 2 2 2 4 f . . 
            f 2 4 f 2 2 f 4 4 4 f 2 f f . . 
            . f 4 4 f f 2 4 4 4 2 f . . . . 
            . . f f 2 2 f 4 4 4 2 2 f . . . 
            . . . . f f 2 4 4 f f 2 f . . . 
            . . . . . f 2 4 f 7 7 f 2 f . . 
            . . . . f 2 2 4 f 7 7 f 2 f . . 
            . . . f 2 2 2 4 4 f f 2 2 4 f . 
            . . . f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
game.onUpdate(function () {
    scene.centerCameraAt(spider.x, spider.y)
    spider.vx = 120
    if (gra == 0) {
        spider.vy = 150
    } else {
        spider.vy = -150
    }
})
