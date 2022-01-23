//% color="#AA278D"
namespace pilotage {
    
    //% block="vitesse"
    export var vitesse = 45
    
    var distanceSensor = 100
    
    //% block="aller à droite"
    export function aller_a_droite() {
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, vitesseVirage())
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 100 - vitesseVirage())
    }
    
    //% block="définir vitesse"
    export function definir_vitesse(nouvelleVitesse) {
        vitesse = nouvelleVitesse
    }
   
    //% block="définir distance obstacle devant"
    export function definir_vitesse(nouvelleDistance) {
        distanceSensor = nouvelleDistance
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
        return k_Bit.ultra() < distanceSensor
    }
    
    //% block="aller à gauche"
    export function aller_a_gauche() {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, vitesseVirage())
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 100 - vitesseVirage())
    }

    //% block="avancer"
    export function avancer() {
        k_Bit.run(DIR.RunForward, vitesse)
    }
    
    function vitesseVirage() {
        return vitesse * 0,29
    }
}
