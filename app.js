let row = 10;
let column = 10;
let squareSize = 50;


const gameBoardContainer = document.getElementById("gameboard");
//
for(i = 0; i < row; i++) {
for (j= 0; j < column; j++) {

    //create 100 squares by looping through 10 twice and appending it to the DOM.
const square = document.createElement('div');
gameBoardContainer.appendChild(square);
console.log(square);

document.querySelector('row').style.backgroundColor = "blue";

//give every square it's own id based on its row and column. i.e.: "s65"
square.id = 's' + j + i;

var topPosition = j * squareSize;
var leftPosition = i * squareSize;

// Use positioning for CSS' a
}
};
