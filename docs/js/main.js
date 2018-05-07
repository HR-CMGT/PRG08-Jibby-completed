"use strict";
var Angry = (function () {
    function Angry(j) {
        this.jibby = j;
        this.jibby.happyness -= 20;
        this.timer = 100;
        this.jibby.setImage("angry.png");
    }
    Angry.prototype.update = function () {
        this.jibby.happyness -= 0.025;
        this.timer--;
        if (this.timer < 0) {
            this.jibby.myBehavior = new Idle(this.jibby);
        }
    };
    Angry.prototype.onWash = function () {
    };
    Angry.prototype.onEat = function () {
    };
    Angry.prototype.onPet = function () {
    };
    return Angry;
}());
var Dead = (function () {
    function Dead(j) {
        this.jibby = j;
        this.jibby.setImage("dead.png");
    }
    Dead.prototype.update = function () {
    };
    Dead.prototype.onWash = function () {
    };
    Dead.prototype.onEat = function () {
    };
    Dead.prototype.onPet = function () {
        this.jibby.myBehavior = new Zombie(this.jibby);
    };
    return Dead;
}());
var Eating = (function () {
    function Eating(j) {
        this.jibby = j;
        this.jibby.food += 20;
        this.timer = 120;
        this.jibby.setImage("eating.gif");
    }
    Eating.prototype.update = function () {
        this.timer--;
        if (this.timer < 0) {
            this.jibby.myBehavior = new Idle(this.jibby);
        }
    };
    Eating.prototype.onWash = function () {
        this.jibby.myBehavior = new Angry(this.jibby);
    };
    Eating.prototype.onEat = function () {
    };
    Eating.prototype.onPet = function () {
        this.jibby.myBehavior = new Angry(this.jibby);
    };
    return Eating;
}());
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 40;
        this.myBehavior = new Idle(this);
        this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
    }
    Jibby.prototype.update = function () {
        this.myBehavior.update();
    };
    Jibby.prototype.onPet = function () {
        this.myBehavior.onPet();
    };
    Jibby.prototype.onWash = function () {
        this.myBehavior.onWash();
    };
    Jibby.prototype.onEat = function () {
        this.myBehavior.onEat();
    };
    Jibby.prototype.setImage = function (str) {
        this.div.style.backgroundImage = "url('images/" + str + "')";
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.happyness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Happy = (function () {
    function Happy(j) {
        this.jibby = j;
        this.jibby.happyness += 20;
        this.timer = 100;
        this.jibby.setImage("happy.png");
    }
    Happy.prototype.update = function () {
        this.jibby.happyness += 0.025;
        this.timer--;
        if (this.timer < 0) {
            this.jibby.myBehavior = new Idle(this.jibby);
        }
    };
    Happy.prototype.onWash = function () {
    };
    Happy.prototype.onEat = function () {
    };
    Happy.prototype.onPet = function () {
    };
    return Happy;
}());
var Idle = (function () {
    function Idle(j) {
        this.jibby = j;
        this.timer = 200;
        this.jibby.setImage("idle.png");
    }
    Idle.prototype.update = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        this.timer--;
        if (this.jibby.happyness <= 0 || this.jibby.food <= 0 || this.jibby.hygiene <= 0) {
            this.jibby.myBehavior = new Dead(this.jibby);
        }
        if (this.timer < 0) {
            this.jibby.myBehavior = new Sleeping(this.jibby);
        }
    };
    Idle.prototype.onWash = function () {
        this.jibby.myBehavior = new Washing(this.jibby);
    };
    Idle.prototype.onEat = function () {
        this.jibby.myBehavior = new Eating(this.jibby);
    };
    Idle.prototype.onPet = function () {
        this.jibby.myBehavior = new Happy(this.jibby);
    };
    return Idle;
}());
var Sleeping = (function () {
    function Sleeping(j) {
        this.jibby = j;
        this.timer = 120;
        this.jibby.setImage("sleeping.png");
    }
    Sleeping.prototype.update = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        this.timer--;
        if (this.timer < 0) {
            this.jibby.myBehavior = new Idle(this.jibby);
        }
    };
    Sleeping.prototype.onWash = function () {
    };
    Sleeping.prototype.onEat = function () {
    };
    Sleeping.prototype.onPet = function () {
    };
    return Sleeping;
}());
var Washing = (function () {
    function Washing(j) {
        this.jibby = j;
        this.jibby.hygiene += 10;
        this.jibby.happyness += 10;
        this.timer = 120;
        this.jibby.setImage("washing.png");
    }
    Washing.prototype.update = function () {
        this.jibby.hygiene += 0.01;
        this.jibby.food -= 0.01;
        this.jibby.happyness += 0.015;
        this.timer--;
        if (this.timer < 0) {
            this.jibby.myBehavior = new Idle(this.jibby);
        }
    };
    Washing.prototype.onWash = function () {
    };
    Washing.prototype.onEat = function () {
        this.jibby.myBehavior = new Angry(this.jibby);
    };
    Washing.prototype.onPet = function () {
        this.jibby.myBehavior = new Angry(this.jibby);
    };
    return Washing;
}());
var Zombie = (function () {
    function Zombie(j) {
        this.jibby = j;
        this.jibby.setImage("zombie.png");
    }
    Zombie.prototype.update = function () {
    };
    Zombie.prototype.onWash = function () {
    };
    Zombie.prototype.onEat = function () {
    };
    Zombie.prototype.onPet = function () {
    };
    return Zombie;
}());
