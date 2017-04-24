var Block = (function () {
    function Block(parent) {
        this.div = document.createElement("block");
        parent.appendChild(this.div);
        this.speed = -4;
        this.x = 800;
        this.y = 240;
    }
    Block.prototype.draw = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Block;
}());
var Wheel = (function () {
    function Wheel(parent, offset) {
        this.div = document.createElement("wheel");
        parent.appendChild(this.div);
        this.x = offset;
        this.y = 30;
        this.speed = 0;
    }
    Wheel.prototype.draw = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Wheel;
}());
var Car = (function () {
    function Car(parent) {
        this.div = document.createElement("car");
        parent.appendChild(this.div);
        this.state = new Driving(this);
        this.speed = 2;
        this.x = 0;
        this.y = 220;
        this.wheel1 = new Wheel(this.div, 20);
        this.wheel2 = new Wheel(this.div, 100);
    }
    Car.prototype.draw = function () {
        this.state.performBehavior();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.wheel1.draw();
        this.wheel2.draw();
    };
    return Car;
}());
var Crashing = (function () {
    function Crashing(c) {
        this.car = c;
    }
    Crashing.prototype.performBehavior = function () {
        this.car.y = 230;
        this.car.wheel1.y = this.car.wheel2.y = 20;
        this.car.wheel1.speed = -2;
        this.car.wheel2.speed = 2;
        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");
    };
    return Crashing;
}());
var Driving = (function () {
    function Driving(c) {
        var _this = this;
        this.car = c;
        this.callback = function (e) { return _this.startJump(e); };
        window.addEventListener("keydown", this.callback);
    }
    Driving.prototype.startJump = function (e) {
        window.removeEventListener("keydown", this.callback);
        this.car.state = new Jumping(this.car);
    };
    Driving.prototype.performBehavior = function () {
        this.car.x += this.car.speed;
    };
    return Driving;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.car = new Car(container);
        this.block = new Block(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.draw();
        this.block.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Jumping = (function () {
    function Jumping(c) {
        this.car = c;
        this.jumpDirection = -3;
    }
    Jumping.prototype.performBehavior = function () {
        this.car.x += this.car.speed;
        this.car.y += this.jumpDirection;
        if (this.car.y < 140)
            this.jumpDirection = 3;
        if (this.car.y > 220)
            this.car.state = new Crashing(this.car);
    };
    return Jumping;
}());
//# sourceMappingURL=main.js.map