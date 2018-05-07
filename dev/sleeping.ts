class Sleeping implements Behavior {
    public jibby:Jibby;
    public timer:number;

    constructor(j:Jibby){
        this.jibby = j;
        this.timer = 120;
        this.jibby.setImage("sleeping.png");
    }

    public update():void {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        this.timer--;
        if(this.timer < 0){
            this.jibby.myBehavior = new Idle(this.jibby);
        }
    }

    public onWash():void {
    }

    public onEat():void {
    }

    public onPet():void {
    }
}