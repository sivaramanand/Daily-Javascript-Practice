let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let turn0 = true; // playerX, playerY
let msgContainer = document.querySelector(".mes-container");
let msg = document.querySelector(".msg");
let newGameButton = document.querySelector(".new-btn");
let resetGameButton = document.querySelector(".reset-btn");
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [2, 4, 6], // Adjusted the win pattern here from [2, 6, 4] to [2, 4, 6] for consistency and correctness
  [6, 7, 8],
];

const ResetGame = () => {
    turn0 = true;
    count = 0; // Reset count here
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    msgContainer.classList.add("hide");
    resetGameButton.classList.remove("hide");
};

const declareDraw = () => {
    msg.innerText = `The game is a draw`;
    msgContainer.classList.remove("hide");
    resetGameButton.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 == true) {
      box.innerHTML = "O"; // Changed from "0" to "O" for clarity
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (!isWinner && count == 9) {
      declareDraw();
    }
  });
});

const showWinner = (posVal1) => {
  msg.innerText = `Congratulations, Winner is ${posVal1}`;
  msgContainer.classList.remove("hide");
  resetGameButton.classList.add("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let posVal1 = boxes[pattern[0]].innerHTML;
    let posVal2 = boxes[pattern[1]].innerHTML;
    let posVal3 = boxes[pattern[2]].innerHTML;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 == posVal2 && posVal2 == posVal3) {
        showWinner(posVal1);
        for (let box of boxes) {
            box.disabled = true;
        }
        return true;
      }
    }
  }
  return false;
};