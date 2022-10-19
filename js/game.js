const canvas = document.querySelector('canvas')
canvas.style.border = '3px solid black'
const ctx = canvas.getContext('2d')
const startScreen = document.querySelector('.game-intro')
const restartBtn = document.querySelector("#restart")


// variables
const background = new Image()
background.src = '../Img/background1.jpg'
let quoteY = -70
let quoteX = Math.random() * (canvas.width - 300)
let isGameOver = false
let gameId = 0
let randomQuote = "hola"
let newRandomQuotes = ["p","o","f","a","z","g","s","y"]
let score = 0
let isCorrect = false


// Quote 
const drawQuote = () => {
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.font = '30px Arial'
    ctx.fillText(randomQuote, quoteX, quoteY, 1350, 1570)
    ctx.closePath()
}


// Score
const drawScore = () => {
    ctx.beginPath();
    ctx.font = "30px sans-serif";
    ctx.fillStyle = "green";
    ctx.fillText(`Score : ${score}`, 10, 30);
    ctx.closePath();
  }


//window onload
window.onload = () => {
    document.getElementById("start-button").onclick = () => {
      console.log("starting");
      restartBtn.style.display = "none"
      startGame();
    }}


    // Input 
const theInput = document.getElementById("typeHere")
theInput.onkeyup = (e) => {
console.log(theInput.value)
    if (randomQuote === e.target.value) {
        console.log("yes");
        theInput.value = "";
        score += 1;
        isCorrect = true;
    }
}


//recursive function
function startGame () {
    startScreen.style.display = "none";
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawQuote();
    drawScore();
    quoteY += 1.5
    if (quoteY > canvas.height && theInput.value != randomQuote) {
        isGameOver = true
    }
    if (quoteY > canvas.height || isCorrect) {
        isCorrect = false
        quoteY = -70;
        quoteX = Math.random() * (canvas.width - 200);
        let nextQuote = newRandomQuotes[Math.floor(Math.random() * newRandomQuotes.length)]
        randomQuote = nextQuote
    }
    if (score >= 2) {
        quoteY += 0.15
    }
    if (score >= 4) {
        quoteY += 0.2
    }
    if (score >= 6) {
        quoteY += 0.3
    } 
    if (score >= 8) {
        quoteY += 0.4
    } 
    if (score >= 10) {
        quoteY += 0.45
    } 
    if (score >= 12) {
        quoteY += 0.5
    } 
    if (score >= 14) {
        quoteY += 0.55
    }
    if (score >= 15) {
        quoteY += 0.56
    }
    if (score >= 16) {
        quoteY += 0.57
    }
    if (score >= 17) {
        quoteY += 0.58
    }

    if (isGameOver) {
        cancelAnimationFrame(gameId);
        restartBtn.style.display = "block"
      } else {
        gameId = requestAnimationFrame(startGame)
      };
}

function restart() {
    isGameOver = false
    startGame();
    restartBtn.style.display = "none"
}

restartBtn.addEventListener("click", () =>{
    restart();
})