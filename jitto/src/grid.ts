
export default class Grid { 
    //percentage chance for new cell to become a bacteria cell based on number of adjacent 
    //starts at 0 adjancet
    // chances = [0.15,1,2,4,8];
    // chances = [10,10,10,10];
    // chances = [2,2,2,2];
    chances = [0,0.5,0.5,0.5];
    lifespan = 6;
    // oneAdj : number = 1; 
    // twoAdj : number = 2; 
    // threeAdj : number = 4;
    // fourAdj 
    grid: boolean[][]; 
    updateCounter : number[][];


    constructor(length : number = 50){
        // this.grid = []; 
        this.grid = new Array(length);
        this.updateCounter = new Array(length);
        for (var i : number = 0; i < length; i++){
            this.grid[i] = new Array(length);
            this.updateCounter[i] = new Array(length);
            for (var j : number = 0; j < length ; j++){
                this.grid[i][j] = false;
                this.updateCounter[i][j] = 0;
            }
        }
    }

    flip(row : number, col : number) : void{
        this.grid[row][col] = !this.grid[row][col];        
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
                if (this.grid[i][j]){
                    // console.log(`checking ${i} : ${j}`);
                    if (this.updateCounter[i][j] >= this.lifespan){
                        this.grid[i][j] = false;
                        this.updateCounter[i][j] = 0;
                        // console.log(`killed ${i} : ${j}`);
                    }
                    else {
                        this.updateCounter[i][j]++;
                    }
                }
                //not a bacterium 
                else{
                    let prob : number = this.chances[this.numAdjacent(i, j)];
                    let random : number = Math.random()*100;
                    // console.log(`${i} ${j} ${random} ${prob} `);
                    if (random <= prob){ 
                        // console.log("updated");
                        this.grid[i][j] = true;
                        this.updateCounter[i][j]++;
                    }    
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
 
    reset() : void {
        for (var i : number = 0; i < this.grid.length ; i ++ ){
            for (var j : number = 0; j < this.grid[0].length ; j++){
                this.grid[i][j] = false; 
                this.updateCounter[i][j] = 0; 
            }
        }
    }

    setLifeSpan(newVal : number) : void {
        this.lifespan = newVal;
    }

    setChances(val1 : number, val2 : number, val3 : number, val4 : number){
        this.chances[1] = val1; 
        this.chances[2] = val2;
        this.chances[3] = val3; 
        this.chances[4] = val4;
    }

    setGridSize(val : number){
        this.grid = new Array(val);
        this.updateCounter = new Array(val);
        for (var i : number = 0; i < val; i++){
            this.grid[i] = new Array(val);
            this.updateCounter[i] = new Array(val);
            for (var j : number = 0; j < length ; j++){
                this.grid[i][j] = false;
                this.updateCounter[i][j] = 0;
            }
        }
    }

}