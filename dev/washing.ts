class Washing implements Behavior {
    public jibby:Jibby
    public timer:number

    constructor(j:Jibby){
        this.jibby = j
        this.jibby.hygiene += 10
        this.jibby.happyness += 10
        this.timer = 120
        this.jibby.setImage("washing.png")
    }

    public update():void {
        this.jibby.hygiene += 0.01
        this.jibby.food -= 0.01
        this.jibby.happyness += 0.015
        this.timer--
        if(this.timer < 0){
            this.jibby.myBehavior = new Idle(this.jibby)
        }
    }

    public onWash():void {
    }

    public onEat():void {
        this.jibby.myBehavior = new Angry(this.jibby)
    }

    public onPet():void {
        this.jibby.myBehavior = new Angry(this.jibby)
    }
}