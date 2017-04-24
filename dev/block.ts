class Block {

    public speed:number;
    public div:HTMLElement;
    public x:number;
    public y:number;
            
    constructor(parent:HTMLElement) {
        this.div = document.createElement("block");
        parent.appendChild(this.div);

        this.speed = -4;
        this.x = 800;
        this.y = 240;
    }

    public draw():void {
        this.x += this.speed;
        this.div.style.transform ="translate("+this.x+"px,"+this.y+"px)";
    }

}