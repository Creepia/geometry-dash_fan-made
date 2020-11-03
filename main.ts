scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    if (controller.A.isPressed()) {
        gra = gra==1?0:1
tiles.setTileAt(location, myTiles.transparency16)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spider.isHittingTile(CollisionDirection.Top) || spider.isHittingTile(CollisionDirection.Bottom)) {
        gra = gra==1?0:1
IsOnWall = 1
        timer.after(100, function () {
            IsOnWall = 0
        })
    }
})
function playBgm () {
    timer.background(function () {
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(415, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(415, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(554, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(415, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(415, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        playBgm()
    })
}
function Retry () {
    level[0] = 0
    info.changeScoreBy(-1)
    music.baDing.play()
    pause(500)
}
let IsOnWall = 0
let spider: Sprite = null
let level: number[] = []
let gra = 0
let ani_of_spider = 0
level = [0, 0]
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
info.setScore(0)
playBgm()
game.onUpdate(function () {
    if (level[0] == 0) {
        tiles.setTilemap(tilemap`level_0`)
        gra = 0
        spider.setPosition(2, 230)
        level[0] = level[0] + 1
    }
})
game.onUpdate(function () {
    scene.centerCameraAt(spider.x, spider.y)
    spider.vx = 110
    if (IsOnWall == 0) {
        if (gra == 0) {
            spider.vy = 130
        } else {
            spider.vy = -150
        }
    } else {
        if (gra == 0) {
            spider.vy = 9999
        } else {
            spider.vy = -9999
        }
    }
})
game.onUpdateInterval(100, function () {
    ani_of_spider = ani_of_spider==0?1:0
if (gra == 0) {
        if (ani_of_spider == 0) {
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
                . . . f f f f f f f f f f f f . 
                . . . f 2 2 2 4 4 f f 2 2 4 f . 
                . . . . f 2 2 4 f 7 7 f 2 f . . 
                . . . . . f 2 4 f 7 7 f 2 f . . 
                . . . . f f 2 4 4 f f 2 f . . . 
                . . f f 2 2 f 4 4 4 2 2 f . . . 
                . f 2 4 f f 2 4 4 4 2 f . . . . 
                . f 2 4 2 2 f 4 4 4 f 2 f f . . 
                . f 4 f 2 2 f f f f 2 2 2 4 f . 
                f 2 4 f 2 2 f . f 4 2 f 2 4 4 f 
                f f f f 2 f . . f 4 2 f f 2 4 f 
                . f f 4 2 f . . f 4 2 f . f f . 
                . . f f f . . . . f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    } else {
        if (ani_of_spider == 0) {
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
        } else {
            spider.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . f f . . . . f f . . . . . 
                . . f 4 2 f . . f 4 4 f . f f . 
                f f f f 2 f . f f 4 2 f f 2 4 f 
                f 4 4 f 2 f . f 4 4 2 f 2 4 4 f 
                2 4 4 f 2 f . f f 2 2 f 4 4 f . 
                f 2 4 4 f f f 4 4 4 f 2 f f . . 
                f f 2 4 f f 2 4 4 4 2 f . . . . 
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
    }
    if (spider.isHittingTile(CollisionDirection.Right) || (spider.y <= 24 || spider.y >= 1000) || (tiles.tileAtLocationEquals(tiles.getTileLocation(spider.x / 16, spider.y / 16), myTiles.tile3) || tiles.tileAtLocationEquals(tiles.getTileLocation(spider.x / 16, spider.y / 16), myTiles.tile4))) {
        Retry()
    }
})
game.onUpdateInterval(300, function () {
    spider.startEffect(effects.fire, 300)
})
