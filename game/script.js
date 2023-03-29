// function matrixGenerator(matrixSize, grass, grassEater, predator, water_count, bomb) {
//     var matrix = []

const socket = io()
//     for (let i = 0; i < matrixSize; i++) {
//         matrix.push([])
//         for (let j = 0; j < matrixSize; j++) {
//         matrix[i].push(0)
        
//         }
//     }

//     for (let i = 0; i < grass; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 1
        
//     }

//     for (let i = 0; i < grassEater; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 2
        
//     }


//     for (let i = 0; i < predator; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 3

//     }


//     for (let i = 0; i < water_count; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 4

//     }

//     for (let i = 0; i < bomb; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 5

//     }


//     return matrix
// }


// var matrix = matrixGenerator(30,40,15,5,10,5)

var side = 25


// var grassArr = []
// var grassEaterArr = []
// var predatorArr = [] 
// var waterArr = []
// var bombArr = []



function setup() {
    frameRate(15)
    createCanvas(30 * side ,30 * side)

    // for (let y = 0; y < matrix.length; y++) {
    //     for (let x = 0; x < matrix[y].length; x++) {
       
    //        if(matrix[y][x] == 1){
    //         var gr = new Grass(x,y)
    //             grassArr.push(gr)
    //         }else  if(matrix[y][x] == 2){
    //         var grEat = new GrassEater(x,y)
    //             grassEaterArr.push(grEat)
    //         }else if(matrix[y][x] == 3){
    //         var pred = new Predator(x,y)
    //             predatorArr.push(pred)
    //         }else if(matrix[y][x] == 4){
    //         var waterEnergy = new Water(x, y)
    //             waterArr.push(waterEnergy)
    //         }else if(matrix[y][x] == 5){
    //         var bomb = new Bomb(x, y)
    //             bombArr.push(bomb)
    //         }
    //        }
    //     }
        
    }


function updateColor(matrix) {
    
      for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            var tBot = side - side * 0.3
            textSize(tBot);
                if(matrix[y][x] == 1){
                    fill ("green")
                    rect (x * side , y * side ,side,side)
                    text('🌿', x * side, y * side + tBot);

                }else if (matrix[y][x] == 2){
                    fill ("yellow")
                    rect (x * side , y * side ,side,side)
                    text('🐇', x * side, y * side + tBot)

                }else if(matrix[y][x] == 3){
                    fill ("#795548")
                    rect (x * side , y * side ,side,side)
                    text('👽', x * side, y * side + tBot)

                }else if(matrix[y][x] == 4){
                    fill("blue")    
                    rect (x * side , y * side ,side,side)
                    text('💧', x * side, y * side + tBot);

                }else if(matrix[y][x] == 5){
                    fill("black")
                    rect (x * side , y * side ,side,side)
                    text('💣', x * side, y * side + tBot);

                }else if(matrix[y][x] == 6){
                    fill("orange")
                    rect (x * side , y * side ,side,side)
                    text('💥', x * side, y * side + tBot)
                }else if(matrix[y][x] == 7){
                    fill("pink")
                    rect (x * side , y * side ,side,side)
                    text('💐', x * side, y * side + tBot)
                }
                else{
                    fill ("gray")
                    rect (x * side , y * side ,side,side)
                }
        }
          
      }

    // for(let i in  grassArr){
    //     grassArr[i].mul()
    // }

    // for(let i in  grassEaterArr){
    //     grassEaterArr[i].eat() 
    // }

    //  for(let i in predatorArr){
    //      predatorArr[i].eat()
    // }

    // for(let i in waterArr){
    //     waterArr[i].move()
    // }


    // for(let i in  bombArr){
    //     bombArr[i].eat()
    //     setInterval(function () {
    //        bombArr[i].die()
    //     }, 1000);
    // }

}

socket.on("send matrix", updateColor)