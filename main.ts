let temp = 0
basic.forever(function () {
    temp = input.temperature()
    if (temp == 10) {
        basic.showNumber(temp)
        basic.showIcon(IconNames.SmallSquare)
    } else if (temp == 20) {
        basic.showNumber(temp)
        basic.showIcon(IconNames.Happy)
    } else if (temp == 30) {
        basic.showNumber(temp)
        basic.showIcon(IconNames.Umbrella)
    } else if (temp == 40) {
        basic.showNumber(temp)
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showNumber(temp)
    }
})
