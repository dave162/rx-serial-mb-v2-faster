radio.onReceivedValue(function (name, value) {
    led.toggle(0, 0)
    if (name == "ltc") {
        left_current = value
    }
    if (name == "ltv") {
        left_voltage = value
    }
    if (name == "rtc") {
        right_current = value
    }
    if (name == "rtv") {
        right_voltage = value
        serial.writeString("$")
        serial.writeNumber(Math.round(right_current * 100))
        serial.writeString(" ")
        serial.writeNumber(Math.round(right_voltage * 100))
        serial.writeString(" ")
        serial.writeNumber(Math.round(left_current * 100))
        serial.writeString(";")
    }
})
let right_voltage = 0
let right_current = 0
let left_voltage = 0
let left_current = 0
radio.setGroup(1)
