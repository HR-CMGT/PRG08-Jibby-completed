class Jibby {

    public hygiene:number
    public food:number
    public happyness:number

    public div:HTMLElement
    public x:number
    public y:number

    public myBehavior:Behavior
            
    constructor(parent:HTMLElement) {
        this.div = document.createElement("jibby")
        parent.appendChild(this.div)

        // start instellingen
        this.x = 0
        this.y = 220
        this.hygiene = this.food = this.happyness = 40

        // start gedrag
        this.myBehavior = new Idle(this)  

        // click listeners
        this.div.addEventListener("click", () => this.onPet())
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat())
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash())
        
    }

    public update():void {
        this.myBehavior.update()
    }

    private onPet():void {
        this.myBehavior.onPet()
    }
    private onWash():void {
        this.myBehavior.onWash()
    }
    private onEat():void {
        this.myBehavior.onEat()
    }

    // set background image
    public setImage(str:string):void {
        this.div.style.backgroundImage = "url('images/"+str+"')"
    }

}