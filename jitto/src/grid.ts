
export default class Grid { 
    //percentage chance for new cell to become a bacteria cell based on number of adjacent 
    //starts at 0 adjancet
    chances = [0.15,1,2,4,8];
    // oneAdj : number = 1; 
    // twoAdj : number = 2; 
    // threeAdj : number = 4;
    // fourAdj 
    grid: boolean[][]; 


    constructor(){
        // this.grid = []; 
        this.grid = new Array(200);
        for (var i : number = 0; i < 200; i++){
            this.grid[i] = new Array(200);
            for (var j : number = 0; j < 200 ; j++){
                this.grid[i][j] = false;
            }
        }
    }

    add(row : number, col : number){
        this.grid[row][col] = true;        
    }

    update() : void { 
        for (var i : number = 0; i < this.grid.length ; i ++ ){
            for (var j : number = 0; j < this.grid[0].length ; j++){
                let prob : number = this.chances[this.numAdjacent(i, j)];
                if (Math.random()*100 <= this.chances[prob]){ 
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
        if (row < this.grid.length) { 
            if (this.grid[row+1][col]){
                count++;
            }
        }
        //right
        if (col < this.grid.length){
            if (this.grid[row][col+1]){
                count++;
            }
        }

        return count; 
    }
    
}