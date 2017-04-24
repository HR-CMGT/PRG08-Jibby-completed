class Jumping implements Behavior {

    public car:Car;
    private jumpDirection:number;

    constructor(c:Car){
        this.car = c;
        this.jumpDirection = -3;
    }

    public performBehavior():void {
        this.car.x += this.car.speed;
        this.car.y += this.jumpDirection;
        if(this.car.y < 140) this.jumpDirection = 3;
        if(this.car.y > 220) this.car.state = new Crashing(this.car);
    }
}