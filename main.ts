input.onButtonPressed(Button.A, function () {
    basic.showString("verdad")
    basic.pause(1000)
    basic.showString("" + (randint(1, 10)))
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("reto")
    basic.pause(1000)
    basic.showString("" + (randint(1, 10)))
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
})
basic.showString("clica.A.o.B")
