

const square = document.querySelector(".square");
const squareContainer = document.querySelector("#squares");

const _square = document.getElementById("#_square");

var randomColor = Math.floor(Math.random() * 16777215).toString(16);//https://css-tricks.com/snippets/javascript/random-hex-color/
// alert("#"+ randomColor);

document.addEventListener('keydown', function (event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    switch (key) {
        case "ArrowUp":
            // alert("up");
            delSquare(square); //delSquare(square);
            break;
        case "ArrowDown":
            // alert("down");
            addSquare();
            break;
    }
});


function addSquare() {
    const newSquare = square.cloneNode(true);

    document.addEventListener('keydown', function (event) {
        const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
        switch (key) {
            case "ArrowUp":
                newSquare.parentNode.removeChild(newSquare);
                break;
        }
    });

    // var randomColor = Math.floor(Math.random() * 16777215).toString(16);//https://css-tricks.com/snippets/javascript/random-hex-color/

    // document.body.style.backgroundColor = "#" + randomColor;

    squareContainer.appendChild(newSquare);
};


// function delSquare(square) {
//     square.remove;
// };