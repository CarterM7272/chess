let pClock = document.getElementById('pClock')
const startBtn = document.getElementById('startBtn')
const endTimer = document.getElementById('endBtn')
const chessboard = document.querySelector("#chessboard")


const startPieces = [
  rook, knight, bishop, king, queen, bishop, knight, rook,
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
  rook, knight, bishop, king, queen, bishop, knight, rook
]


// Board creation, dynamically adjusted the classes per square

function createBoard() {
  startPieces.forEach((startPiece, i) => {
    const square = document.createElement('div')
    square.classList.add('square')
    square.innerHTML = startPiece
    square.setAttribute('square-id', i)
    const row = Math.floor((63 - i) / 8 ) + 1
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? "beige" : "white")
    } else {
      square.classList.add(i % 2 === 0 ? "white" : "beige")
    }
    chessboard.append(square)
  })
}

createBoard();

// Set timer for when the start game button is clicked

const startTimer = (event) => {
  startGame()
  event.preventDefault()
}

startBtn.addEventListener('click', startTimer); 

const startGame = () => {
  let count = 1000
  
  const time = setInterval(() => {
    pClock.innerHTML = count;
    count--;

    console.log(count);

    if (count === 0) {
      clearInterval(time);
      endGame();
    }
  }, 1000);
}


function allowDrop(ev) {
  ev.preventDefault;
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id)
  ev.target.appendChild(document.getElementById(data))
}

function isDropAllowed(draggedElement, dropTarget) {
  // Implement custom logic to check if drop is allowed
  // For example, you might want to check the type of elements being dropped
  return true;
}