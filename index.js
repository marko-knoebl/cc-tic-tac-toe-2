console.log("hello");

let activePlayer = "O";

let statusText = document.getElementById("status-text");
let board = document.getElementById("board");

let boxes = document.querySelectorAll(".box");

// for (let box of boxes) {
//   if (Math.random() > 0.5) {
//     box.innerText = "O";
//   } else {
//     box.innerText = "X";
//   }
// }

/**
 * update the CSS classes of all 9 boxes based on their content
 * if a box has an "X" in it, it will get the additional class "box-x"
 * if a box has an "O" in it, it will get the additional class "box-o"
 *
 * examples:
 * <div class="box"></div>
 * <div class="box box-x">X</div>
 * <div class="box box-o">O</div>
 */
function updateBoxClasses() {
  for (let box of boxes) {
    if (box.innerText === "X") {
      box.classList.add("box-x");
      box.classList.remove("box-o");
    } else if (box.innerText === "O") {
      box.classList.add("box-o");
      box.classList.remove("box-x");
    } else {
      box.classList.remove("box-x");
      box.classList.remove("box-o");
    }
  }
}
updateBoxClasses();

function switchPlayer() {
  if (activePlayer === "X") {
    activePlayer = "O";
  } else {
    activePlayer = "X";
  }
}

// add click event listeners to all boxes
for (let box of boxes) {
  box.addEventListener(
    "click",
    () => {
      if (box.innerText === "") {
        box.innerText = activePlayer;
        updateBoxClasses();
        switchPlayer();
      }
    }
  );
}

statusText.innerText = "ready!";
statusText.innerHTML = "<strong>page</strong> loaded";
