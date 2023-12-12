let pClock = document.getElementById('pClock')
let startBtn = document.getElementById('startBtn')


const startPieces = [
  rook, knight, bishop, queen, king, bishop, knight, rook,
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
  rook, knight, bishop, king, queen, bishop, knight, rook
]

const startGame = () => {
  let count = 6000
  startBtn.addEventListener ('click', startTimer); 

  const timer = setInterval(() => {
    pClock.innerHTML = count;
    count--;

    console.log(count);

    if (count === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
  
}

const endGame = () => {
  console.log('end game');
}

const startTimer = () => {
  startGame()
}

const selectPiece = () => {
  
}

const movePiece = () => {
  console.log('move piece');
}


