
//Square
//Saves all the necessary information the square needs
function Square(x, y, size, color){
    this.color = color;
    this.x = x;
    this.y = y;
    this.size = size;

    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.size, this.size);
    context.strokeRect(this.x, this.y, this.size, this.size);
    context.stroke();
}

//Face
function Face(x, y, size, color){
    var squares = [9];

    //This method creates a 3 x 3 grid
    for(let col = 1; col <= 3; col++){
        for(let lin = 1; lin <= 3; lin++){
            squares.push( new Square((col * size) + x, (lin * size) + y, size, color[(col - 1) + (lin - 1)]));
        }
    }
}

//Cube
class Cube{
    constructor(x, y, size, state){

        //Position of each face of the 2D cube
        var positionSquares = [[x,y],        //Top
        [x, y + (size * 3)],                 //Front
        [x - (size * 3), y + (size * 3)],    //Left
        [x + (size * 3), y + (size * 3)],    //Right
        [x, y + (size * 6)],                 //Down
        [x, y + (size * 9)]];                //Back

        this.faces = [6];

        //Add the faces in there position and state to the cube
        for(let x = 0; x < positionSquares.length ; x++){
            this.faces.push(new Face(positionSquares[x][0], positionSquares[x][1], size, state[x]))
        }
    };
    

    
}

//Inicial state of the cube
let state = [["white","white","white","white","white","white","white","white","white"],
            ["green","green","green","green","green","green","green","green","green"],
            ["orange","orange","orange","orange","orange","orange","orange","orange","orange"],
            ["red","red","red","red","red","red","red","red","red"],
            ["yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow"],
            ["blue","blue","blue","blue","blue","blue","yellow","blue","blue"]];

var context = document.querySelector("canvas").getContext("2d");


function loop(){
    window.requestAnimationFrame(loop);

    //Get the elements of the cliente
    var height = window.innerHeight;
    var width = window.innerWidth;

    //Set the canvas size to the clientes values
    context.canvas.height = height;
    context.canvas.width = width;

    //Fill the canvas
    context.fillStyle = "#008000";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "#000000";

    //Position on the screen on X and Y, state -> inicial state of the cube (colors)
    Cube(width/2, height/4, 25, state);
}

loop();