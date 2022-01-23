let vitesseVirage = 13
let vitesse = 45

namespace pilotage {


    export function aller_a_droite() {
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, vitesseVirage)
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 100 - vitesseVirage)
    }
    export function obstacle_a_droite_() {
        return k_Bit.obstacle(MotorObs.RightSide) == 0
    }
    export function obstacle_a_gauche_() {
        return k_Bit.obstacle(MotorObs.LeftSide) == 0
    }
    export function obstacle_devant_() {
        return k_Bit.ultra() < 100
    }
    export function aller_a_gauche() {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, vitesseVirage)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 100 - vitesseVirage)
    }
    export function avancer() {
        k_Bit.run(DIR.RunForward, vitesse)
    }
}