class Dead implements Behavior {
    public jibby:Jibby
    public timer:number

    constructor(j:Jibby){
        this.jibby = j
        this.jibby.setImage("dead.png")
    }

    public update():void {
    }

    public onWash():void {
    }

    public onEat():void {
    }

    public onPet():void {
        this.jibby.myBehavior = new Zombie(this.jibby)
    }
}