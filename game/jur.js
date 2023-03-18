let LivingCreature = require("./LivingCreature")

module.exports = class Water extends LivingCreature{
    constructor(x, y){
       super(x,y)
        
    }
    chooseCell(char, char1) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    }

    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]
        if (newCell && this.energy > 5) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 4;
            let w = new Water(newX, newY);
            waterArr.push(w);

            this.energy = 2;
        }
    }
    
    // eat() {
    //     let emptyCell = this.chooseCell(1);
    //     let newCell = random(emptyCell)

    //     if (newCell) {
    //         this.energy += 5;
    //         let newX = newCell[0];
    //         let newY = newCell[1];

    //         for (let i = 0; i < grassArr.length; i++) {
    //             if (grassArr[i].x == newX && grassArr[i].y == newY) {
    //                 grassArr.splice(i, 1)
    //                 break;
    //             }
    //         }
    //         for (let i = 0; i < grassArr.length; i++) {
    //             if (grassArr[i].x == newX && grassArr[i].y == newY) {
    //                 grassArr.splice(i, 1)
    //                 break;
    //             }
    //         }

    //         matrix[newY][newX] = 4;
    //         matrix[this.y][this.x] = 1;

    //         this.x = newX;
    //         this.y = newY;

    //         if (this.energy > 20) {
    //             this.mul()
    //         }
    //     } 
        
    //     else {
    //         this.move()
    //     }
    // }
    
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 1;

            let w = new Grass(newX, newY);
            grassArr.push(w);
            this.x = newX;
            this.y = newY;


           
        } 
    }
}
