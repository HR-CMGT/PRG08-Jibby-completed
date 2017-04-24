class Crashing implements Behavior {

    public car:Car;

    constructor(c:Car){
        this.car = c;
    }

    public performBehavior():void {
        this.car.wheel1.speed = -2;
        this.car.wheel2.speed = 2;
        this.car.y = 220;
        this.car.div.classList.add("crashed");

        // hier wil je via een singleton game.gameOver() aanroepen
        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");
    }
}