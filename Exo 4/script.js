//https://css-tricks.com/snippets/javascript/random-hex-color/

const square = document.querySelector(".square");
const squareContainer = document.querySelector("#squares");
const color = document.getElementById("color");

const _square = document.getElementById("#_square");

document.addEventListener("keydown", function (event) {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  switch (key) {
    case "ArrowUp":
      // alert("up");
      let last = squareContainer.lastChild;
      delSquare(last);
      break;
    case "ArrowDown":
      // alert("down");
      addSquare();
      break;
  }
});

function addSquare() {
  const newSquare = document.createElement("div"); //merci internetF
  newSquare.classList.add("square"); //merci internet

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  newSquare.style.background = "#" + randomColor;

  color.innerText = "\nCurrent color :\n#" + randomColor;

  squareContainer.appendChild(newSquare);

  newSquare.addEventListener("click", () => {
    newSquare.style.background = "black";
  });
}

function delSquare(toDelete) {
  squareContainer.removeChild(toDelete);
}