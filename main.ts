input.onButtonPressed(Button.A, function () {
    serial.writeLine("shisamo")
    plenbit.soccerMotion(plenbit.SocMotions.Dribble)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showIcon(IconNames.Heart)
    shr = serial.readString()
    basic.showString(shr)
    shr = shr.substr(0, 1)
    if (shr == "1") {
        plenbit.danceMotion(plenbit.DanceMotions.DanceUpDown)
    } else if (shr == "4") {
        plenbit.stdMotion(plenbit.StdMotions.Clap)
    }
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("bunkai")
    plenbit.danceMotion(plenbit.DanceMotions.WiggleDance)
})
let shr = ""
serial.redirect(
SerialPin.P0,
SerialPin.P2,
BaudRate.BaudRate115200
)
