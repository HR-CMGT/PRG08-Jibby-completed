class Eating implements Behavior {
    public jibby:Jibby;
    public timer:number;

    constructor(j:Jibby){
        this.jibby = j;
        this.jibby.food += 20;
        this.timer = 120;
        this.jibby.setImage("eating.gif");
    }

    public update():void {
        this.timer--;
        if(this.timer < 0){
            this.jibby.myBehavior = new Idle(this.jibby);
        }
    }

    public onWash():void {
        this.jibby.myBehavior = new Angry(this.jibby);
    }

    public onEat():void {
    }

    public onPet():void {
        this.jibby.myBehavior = new Angry(this.jibby);
    }
}