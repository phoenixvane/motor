input.onButtonPressed(Button.A, function () {
    うごく += 1
    pins.servoWritePin(AnalogPin.P0, うごく * 10)
})
input.onButtonPressed(Button.B, function () {
    うごく = 0
    pins.servoWritePin(AnalogPin.P0, うごく * 10)
})
let うごく = 0
うごく = -1
basic.forever(function () {
    basic.showString("" + (うごく))
})
