radio.onReceivedNumber(function (receivedNumber) {
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(500)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
basic.forever(function () {
	
})
