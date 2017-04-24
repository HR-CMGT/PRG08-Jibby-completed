class Crashing implements Behavior {

    public car:Car;

    constructor(c:Car){
        this.car = c;
    }

    public performBehavior():void {
        this.car.y = 230;
        this.car.wheel1.y = this.car.wheel2.y = 20;
        this.car.wheel1.speed = -2;
        this.car.wheel2.speed = 2;

        // hier wil je via een singleton game.gameOver() aanroepen
        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");
    }
}