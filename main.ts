input.onButtonPressed(Button.A, function () {
    while (true) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(1000)
    }
})
basic.forever(function () {
	
})
