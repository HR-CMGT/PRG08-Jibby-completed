class Driving implements Behavior {
    public car:Car;

    //private callback: () => void; // type definitie voor een callback... very weird...
    //private callback: cbInterface; // zelf een interface maken voor callback
    private callback:EventListener;
    constructor(c:Car){
        this.car = c;
        this.callback = (e:KeyboardEvent) => this.startJump(e);
        window.addEventListener("keydown", this.callback);
        
    }


    private startJump(e:KeyboardEvent):void {
        window.removeEventListener("keydown", this.callback);

        this.car.state = new Jumping(this.car);
    }

    public performBehavior():void {
        this.car.x += this.car.speed;
    }
}