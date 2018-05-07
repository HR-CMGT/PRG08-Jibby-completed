class Happy implements Behavior {
    public jibby:Jibby
    public timer:number

    constructor(j:Jibby){
        this.jibby = j
        this.jibby.happyness += 20
        this.timer = 100
        this.jibby.setImage("happy.png")
    }

    public update():void {
        this.jibby.happyness += 0.025
        this.timer--
        if(this.timer < 0){
            this.jibby.myBehavior = new Idle(this.jibby)
        }
    }

    public onWash():void {
    }

    public onEat():void {
    }

    public onPet():void {
    }
}