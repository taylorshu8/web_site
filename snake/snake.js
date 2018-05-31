var starBtn = document.getElementById("starBtn");
var content = document.getElementById("content");
var scoreBox = document.getElementById("score");
var loser = document.getElementById("loser");
var loseScore = document.getElementById("loseScore");
var close = document.getElementById("close");
var pause = document.getElementById("pause");
var snakeMove;
var speed = 300;
var startGameB = true;
var startpaushB = true;
init();

function init() {
    //地图
    this.mapW = parseInt(getComputedStyle(content).width);
    this.mapH = parseInt(getComputedStyle(content).height);
    this.mapDiv = content;
    //食物
    this.foodW = 20;
    this.foodH = 20;
    this.foodX = 0;
    this.foodY = 0;
    //蛇
    this.snakeW = 20;
    this.snakeH = 20;
    this.snakeBody = [[3, 10, 'head', '&#xe621;'], [2, 10, 'body', '&#xe6c1;'], [1, 10, 'body', '&#xe6c1;']];
    //游戏属性
    this.direct = 'right';
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;
    this.score = 0;
    bindEvent()
}

function startGame() {
    starBtn.style.display = 'none';
    food();
    snake();

}

function food() {
    var food = document.createElement('div');
    food.style.width = this.foodW + 'px';
    food.style.height = this.foodH + 'px';
    food.style.position = 'absolute';
    this.foodX = Math.floor(Math.random() * (this.mapW / 20));
    this.foodY = Math.floor(Math.random() * (this.mapH / 20));
    food.style.left = this.foodX * 20 + 'px';
    food.style.top = this.foodY * 20 + 'px';
    this.mapDiv.appendChild(food).setAttribute('class', 'food');
    var i = document.createElement('i');
    i.innerHTML = '&#xe615;';
    food.appendChild(i).setAttribute('class', 'iconfont');
}

function snake() {
    for (var i = 0; i < this.snakeBody.length; i++) {
        var snake = document.createElement('div');
        snake.style.width = this.snakeW + 'px';
        snake.style.height = this.snakeH + 'px';
        snake.style.position = 'absolute';
        snake.style.left = this.snakeBody[i][0] * 20 + 'px';
        snake.style.top = this.snakeBody[i][1] * 20 + 'px';
        snake.classList.add(this.snakeBody[i][2], 'snake');
        this.mapDiv.appendChild(snake);
        var icon = document.createElement('i');
        icon.innerHTML = this.snakeBody[i][3];
        snake.appendChild(icon).setAttribute('class', 'iconfont');
        switch (this.direct) {
            case'right':
                snake.style.transform = 'rotate(-90deg)';
                break;
            case'left':
                snake.style.transform = 'rotate(90deg)';
                break;
            case'up':
                snake.style.transform = 'rotate(180deg)';
                break;
            case'down':
                snake.style.transform = 'rotate(0deg)';
                break;
            default:
                break;
        }
    }
}

function move() {
    for (var i = this.snakeBody.length - 1; i > 0; i--) {
        this.snakeBody[i][0] = this.snakeBody[i - 1][0];
        this.snakeBody[i][1] = this.snakeBody[i - 1][1];
    }
    switch (this.direct) {
        case'right':
            this.snakeBody[0][0] += 1;
            break;
        case'left':
            this.snakeBody[0][0] -= 1;
            break;
        case'up':
            this.snakeBody[0][1] -= 1;
            break;
        case'down':
            this.snakeBody[0][1] += 1;
            break;
        default:
            break;
    }
    removeClass('snake');
    snake();
    if (this.snakeBody[0][0] == this.foodX && this.snakeBody[0][1] == this.foodY) {
        var snakeLastX = this.snakeBody[this.snakeBody.length - 1][0];
        var snakeLastY = this.snakeBody[this.snakeBody.length - 1][1];
        this.snakeBody.push([snakeLastX, snakeLastY, 'body', '&#xe6c1;']);
        this.score += 1;
        scoreBox.innerHTML = this.score;
        removeClass('food');
        food();
    }
    if (this.snakeBody[0][0] < 0) {
        this.snakeBody[0][0] = this.mapW / 20;
    }
    if (this.snakeBody[0][0] > this.mapW / 20) {
        this.snakeBody[0][0] = 0;
    }
    if (this.snakeBody[0][1] < 0) {
        this.snakeBody[0][1] = this.mapH / 20 - 1;
    }
    if (this.snakeBody[0][1] > this.mapH / 20) {
        this.snakeBody[0][1] = 0;
    }
    var snakeHX = this.snakeBody[0][0];
    var snakeHY = this.snakeBody[0][1];
    for (var j = 1; j < this.snakeBody.length; j++) {
        if (snakeHX == snakeBody[j][0] && snakeHY == snakeBody[j][1]) {
            relodGame()
        }
    }
}

function relodGame() {
    removeClass('snake');
    removeClass('food');
    clearInterval(snakeMove);
    this.snakeBody = [[3, 10, 'head', '&#xe621;'], [2, 10, 'body', '&#xe6c1;'], [1, 10, 'body', '&#xe6c1;']];
    this.direct = 'right';
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;
    loser.style.display = 'block';
    loseScore.innerHTML = this.score;
    this.score = 0;
    scoreBox.innerHTML = this.score;
    startGameB = true;
    startpaushB = true;
    pause.innerHTML = '&#xea40;';

}

function removeClass(className) {
    var ele = document.getElementsByClassName(className);
    while (ele.length > 0) {
        ele[0].parentNode.removeChild(ele[0])
    }
}

function setDerict(code) {
    switch (code) {
        case 37:
            if (this.left) {
                this.direct = 'left';
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = true;
            }
            break;
        case 38:
            if (this.up) {
                this.direct = 'up';
                this.left = true;
                this.right = true;
                this.up = false;
                this.down = false;
            }
            break;
        case 39:
            if (this.right) {
                this.direct = 'right';
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = true;
            }
            break;
        case 40:
            if (this.down) {
                this.direct = 'down';
                this.left = true;
                this.right = true;
                this.up = false;
                this.down = false;
            }
            break;
        default:
            break;

    }
}

function bindEvent() {

    close.onclick = function () {
        loser.style.display = 'none';
    };
    starBtn.onclick = function () {
        startAndPaush();
    };
    pause.onclick = function () {
        startAndPaush();
    };

}

function startAndPaush() {
    if (startpaushB) {
        if (startGameB) {
            startGame();
            startGameB = false;
        }
        pause.innerHTML = '&#xe81f;';
        document.onkeydown = function (e) {
            var code = e.keyCode;
            setDerict(code);
        };
        snakeMove=setInterval(function () {
            move();
        },speed);
        startpaushB = false;
    } else {
        pause.innerHTML = '&#xea40;';
        clearInterval(snakeMove);
        document.onkedown = function (e) {
            e.returnValue = false;
            return false;
        };
        startpaushB = true;
    }
}

