const squares = document.querySelectorAll(".square");

let currentPlayer = "X";

let movesCount = 0;

const message = document.getElementById("message");

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.innerText !== "") {
      return;
    }

    square.innerText = currentPlayer;
    movesCount++;

    if (movesCount === 9) {
      message.innerText = "Partie terminée !!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      message.innerText = `C'est au tour de ${currentPlayer}`;
    }
  });
});
