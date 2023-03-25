var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

const Grass = require("./grass.js")
const GrassEater = require("./GrassEater.js")
const Predator = require("./Predator.js")
const Bomb = require("./bomb.js")
const Water = require("./jur.js")


function matrixGenerator(matrixSize, grass, grassEater, predator, water_count, bomb) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }

    for (let i = 0; i < grass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2

    }


    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3

    }


    for (let i = 0; i < water_count; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4

    }

    for (let i = 0; i < bomb; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5

    }

    io.emit("send matrix", matrix)
    return matrix
}

matrix = matrixGenerator(30, 40, 15, 5, 10, 5)
grassArr = []
grassEaterArr = []
predatorArr = []
waterArr = []
bombArr = []


function createObj() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var waterEnergy = new Water(x, y)
                waterArr.push(waterEnergy)
            } else if (matrix[y][x] == 5) {
                var bomb = new Bomb(x, y)
                bombArr.push(bomb)
            }
        }
    }

}

createObj()

function gameMove() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in predatorArr) {
        predatorArr[i].eat()
    }

    for (let i in waterArr) {
        waterArr[i].move()
    }

    io.emit("send matrix", matrix)

    // for (let i in bombArr) {
    //     bombArr[i].eat()
    //     setInterval(function () {
    //         bombArr[i].die()
    //     }, 1000);
    // }
}

setInterval(gameMove,1000)