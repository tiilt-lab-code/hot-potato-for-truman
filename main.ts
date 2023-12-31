let timer = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    timer = randint(5, 15)
    while (timer > 0) {
        basic.showIcon(IconNames.Heart)
        timer += -1
        basic.pause(1000)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showIcon(IconNames.Skull)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
})
