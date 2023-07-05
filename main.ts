let timer = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    timer = randint(8, 15)
    while (timer >= 0) {
        timer += -1
    }
    basic.showIcon(IconNames.Skull)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
