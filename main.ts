basic.showIcon(IconNames.Heart)
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
})
