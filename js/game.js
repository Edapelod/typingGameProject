const canvas = document.querySelector('canvas')
canvas.style.border = '3px solid black'
const ctx = canvas.getContext('2d')
const startScreen = document.querySelector('.game-intro')

// variables
const background = new Image()
background.src = '../Img/background1.jpg'
let squareY = -70
let squareX = Math.random() * (canvas.width - 300)
let isGameOver = false
let gameId = 0
let randomQuote = "hola"
let newRandomQuotes = ["h","o","l","a","hhh"]

const drawSquare = () => {
    ctx.beginPath();
    ctx.fillStyle = "white";
    //ctx.fillRect(squareX, squareY, 350, 70);
    ctx.font = '30px Arial';
    ctx.fillText(randomQuote, squareX, squareY, 1350, 1570)
    ctx.closePath();
    
}
//window onload
window.onload = () => {
    document.getElementById("start-button").onclick = () => {
      console.log("starting");
      //song.play();
      startGame();
    }}
//recursive function
function startGame () {
    startScreen.style.display = "none";
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSquare();
    squareY += 1.5
    if (squareY > canvas.height) {
        squareY = -70;
        squareX = Math.random() * (canvas.width - 200);
        let nextQuote = newRandomQuotes[Math.floor(Math.random() * newRandomQuotes.length)]
        randomQuote = nextQuote
    }
    if (isGameOver) {
        cancelAnimationFrame(gameId)
      } else {
        // Ask for a new frame
        gameId = requestAnimationFrame(startGame)
      }
}
const theInput = document.getElementById("typeHere")
document.getElementById("typeHere").onkeyup = (e) => {

console.log(theInput.value)
    //console.log(e.target.value)
    if (randomQuote === e.target.value) {
        console.log("yes");
        theInput.value = ""
    }
}