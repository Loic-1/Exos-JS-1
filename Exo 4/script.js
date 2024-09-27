//https://css-tricks.com/snippets/javascript/random-hex-color/

const square = document.querySelector(".square");
const squareContainer = document.querySelector("#squares");

const _square = document.getElementById("#_square");


document.addEventListener('keydown', function (event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    switch (key) {
        case "ArrowUp":
            // alert("up");
            let last = squareContainer.lastChild
            delSquare(last);
            break;
        case "ArrowDown":
            // alert("down");
            addSquare();
            break;
    }
});


function addSquare() {
    const newSquare = square.cloneNode(false);

    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (squareContainer.childElementCount != 0) {
        alert(randomColor);
        document.querySelector(".square").style.background = "#" + randomColor;
    }

    squareContainer.appendChild(newSquare);
};


function delSquare(toDelete) {
    squareContainer.removeChild(toDelete);
};
