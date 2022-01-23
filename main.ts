let vitesse = 45

//% color="#AA278D"
namespace pilotage {

    //% block="aller à droite"
    export function aller_a_droite() {
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 13)
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 100 - 13)
    }

    //% block="obstacle à droite ?"
    export function obstacle_a_droite() {
        return k_Bit.obstacle(MotorObs.RightSide) == 0
    }

    //% block="obstacle à gauche ?"
    export function obstacle_a_gauche() {
        return k_Bit.obstacle(MotorObs.LeftSide) == 0
    }

    //% block="obstacle devant ?"
    export function obstacle_devant() {
        return k_Bit.ultra() < 100
    }
    
    //% block="aller à gauche"
    export function aller_a_gauche() {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 13)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 100 - 13)
    }

    //% block="avancer"
    export function avancer() {
        k_Bit.run(DIR.RunForward, vitesse)
    }
}
