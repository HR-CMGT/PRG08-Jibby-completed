class Idle implements Behavior {
    public jibby:Jibby;
    public timer:number;
    constructor(j:Jibby){
        this.jibby = j;
        this.timer = 200;
        this.jibby.setImage("idle.png");
    }

    public update():void {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        this.timer--;
        if(this.jibby.happyness <= 0 || this.jibby.food <= 0 || this.jibby.hygiene <= 0){
            this.jibby.myBehavior = new Dead(this.jibby);  
        }
        if(this.timer < 0){
            this.jibby.myBehavior = new Sleeping(this.jibby);
        }
    }

    public onWash():void {
        this.jibby.myBehavior = new Washing(this.jibby);
    }

    public onEat():void {
        this.jibby.myBehavior = new Eating(this.jibby);
    }

    public onPet():void {
        this.jibby.myBehavior = new Happy(this.jibby);
    }
}