basic.forever(function () {
    basic.showIcon(IconNames.Chessboard)
    if (SuperBitV2_Digital.PIR(SuperBitV2_Digital.mwDigitalNum.P1P2, SuperBitV2_Digital.enPIR.OPIR)) {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, 255)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, 255)
    } else {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, 0)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, 0)
    }
})
