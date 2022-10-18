const canvas = document.querySelector('canvas')
canvas.style.border = '3px solid black'
const ctx = canvas.getContext('2d')
const startScreen = document.querySelector('.game-intro')

// variables
const background = new Image()
background.src = '../Img/background1.jpg'
let quoteY = -70
let quoteX = Math.random() * (canvas.width - 300)
let isGameOver = false
let gameId = 0
let randomQuote = "hola"
let newRandomQuotes = ["T","o","l","a","hhh"]
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
      //song.play();
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
        quoteY += 3
    } 
    if (isGameOver) {
        cancelAnimationFrame(gameId)
      } else {
        gameId = requestAnimationFrame(startGame)
      };
}