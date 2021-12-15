let aleatorio = 0
input.onSound(DetectedSound.Loud, function () {
    aleatorio = randint(1, 3)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.pause(1000)
    if (aleatorio == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showString("PIEDRA")
        if (aleatorio == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showString("PAPEL")
        }
    }
    if (aleatorio == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
        basic.showString("TIJERAS")
    }
})
