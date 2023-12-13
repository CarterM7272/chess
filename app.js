let p1Clock = document.getElementById('p1Clock')
let p2Clock = document.getElementById('p2Clock')
const startBtn = document.getElementById('startBtn')
const stopTimer = document.getElementById('endBtn')
const chessboard = document.querySelector("#chessboard")


const startPieces = [
  R, N, B, K, Q, B, N, R,
  P, P, P, P, P, P, P, P, 
  '','','','','','','','',
  '','','','','','','','',
  '','','','','','','','',
  '','','','','','','','',
  p, p, p, p, p, p, p, p, 
  r, n, b, k, q, b, n, r
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
  let date = new Date()
  let minutes = date.minutes
  let seconds = date.seconds


  let count = minutes + ':' + seconds
  
  const time = setInterval(() => {
    p1Clock.innerHTML = count;
    p2Clock.innerHTML = count;
    count--;

    console.log(count);

    if (count === 0) {
      clearInterval(time);
      endGame();
    }
  }, 1000);
}

function dragEnter(e) {
}

function dragOver(e) {
}

function dragLeave(e) {
}

function drop(e) {
}