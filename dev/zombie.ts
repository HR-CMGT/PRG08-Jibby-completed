class Zombie implements Behavior {
    public jibby:Jibby
    public timer:number

    constructor(j:Jibby){
        this.jibby = j
        this.jibby.setImage("zombie.png")
    }

    public update():void {
    }

    public onWash():void {
    }

    public onEat():void {
    }

    public onPet():void {
    }
}