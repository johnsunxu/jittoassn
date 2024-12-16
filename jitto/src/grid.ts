
export default class Grid { 
    //percentage chance for new cell to become a bacteria cell based on number of adjacent 
    //starts at 0 adjancet
    // chances = [0.15,1,2,4,8];
    chances = [10,10,10,10];
    // oneAdj : number = 1; 
    // twoAdj : number = 2; 
    // threeAdj : number = 4;
    // fourAdj 
    grid: boolean[][]; 


    constructor(length : number = 200){
        // this.grid = []; 
        this.grid = new Array(length);
        for (var i : number = 0; i < length; i++){
            this.grid[i] = new Array(length);
            for (var j : number = 0; j < length ; j++){
                this.grid[i][j] = false;
            }
        }
    }

    add(row : number, col : number) : void{
        this.grid[row][col] = true;        
    }

    at(row :number, col: number) : boolean {
        return this.grid[row][col];
    }

    getLength() : number { 
        return this.grid.length;
    }

    getGrid() : boolean[][] { 
        return this.grid;
    }

    getCount() : number{
        let count : number = 0;
        for (var i : number = 0; i < this.grid.length ; i ++ ){
            for (var j : number = 0; j < this.grid[0].length ; j++){
                if (this.grid[i][j]){
                    count++;
                }
            }
        }
        return count;    
    }

    update() : void { 
        for (var i : number = 0; i < this.grid.length ; i ++ ){
            for (var j : number = 0; j < this.grid[0].length ; j++){
                let prob : number = this.chances[this.numAdjacent(i, j)];
                let random : number = Math.random()*100;
                // console.log(`${i} ${j} ${random} ${prob} `);
                if (random <= prob){ 
                    // console.log("updated");
                    this.grid[i][j] = true;
                }
            }
        }
    }

    numAdjacent(row : number, col : number) : number { 
        let count : number = 0 ; 

        //up 
        if (row > 0){
            if (this.grid[row-1][col]){
                count++; 
            }
        }
        //left
        if (col > 0){ 
            if (this.grid[row][col-1]){
                count++;
            }
        }
        //down
        if (row < this.grid.length - 1) { 
            if (this.grid[row+1][col]){
                count++;
            }
        }
        //right
        if (col < this.grid[0].length - 1){
            if (this.grid[row][col+1]){
                count++;
            }
        }

        return count; 
    }
    
}