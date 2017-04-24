/// <reference path="car.ts"/>

class Game {

    private car : Car;
    private block : Block;

    constructor() {
        let container = document.getElementById("container");
        this.car = new Car(container);
        this.block = new Block(container);

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.car.draw();
        this.block.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
} 


// load
window.addEventListener("load", function() {
    let g:Game = new Game();
});