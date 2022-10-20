const canvas = document.querySelector('canvas')
canvas.style.border = '2px solid black'
const ctx = canvas.getContext('2d')
const startScreen = document.querySelector('.game-intro')
const restartBtn = document.querySelector("#restart")
const youWin = document.querySelector(".win")



// variables
const background = new Image()
background.src = '../Img/background1.jpg'
let quoteY = -70
let quoteX = Math.random() * (canvas.width - 300)
let isGameOver = false
let gameId = 0
let randomQuote = "Never give up"
//let newRandomQuotes1 = ["o"]
let newRandomQuotes = ["Follow your dreams","Do the impossible","Believe in yourself","Stay strong","Don't stress", "You got this",
"Let's get things done","Stay focused","Trust yourself", "Small steps every day", "Take the risk or lose the chance", "Impossible is for the unwilling", "Keep it up",
 "Nothing can stop me", "No pain no gain", "Stand up and try again", "Today will be a good day", "Enjoy the moment", "Live in the present"]
let score = 0
let isCorrect = false
const song = new Audio()
song.src = "../songs/WalkOfLife.mp3"
song.volume = 0.1;
const song2 = new Audio()
song2.src = "../songs/PushItToTheLimit.mp3"
song2.volume = 0.2
const song3 = new Audio()
song3.src = "../songs/Enough.mp3"
song3.volume = 0.2


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
    youWin.style.display= "none"
    canvas.style.display= "none"
    restartBtn.style.display = "none"
    theInput.style.display = "none"
    document.getElementById("start-button").onclick = () => {
      console.log("starting");
      document.querySelector("body").style.background= "white";
      theInput.style.display = "block"
      canvas.style.display= "block"
      restartBtn.style.display = "none"
      youWin.style.display= "none"
      song.play();
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
    youWin.style.display= "none"
    startScreen.style.display = "none";
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawQuote();
    drawScore();
    quoteY += 0.7
    if (quoteY > canvas.height && theInput.value != randomQuote) {
        isGameOver = true;
        song.pause();
        song.currentTime = 0;
        song2.pause();
        song2.currentTime = 0;
    }
    if (quoteY > canvas.height || isCorrect) {
        isCorrect = false
        quoteY = -70;
        quoteX = Math.random() * (canvas.width - 400);
        let nextQuote = newRandomQuotes[Math.floor(Math.random() * newRandomQuotes.length)]
        randomQuote = nextQuote
    }
    if (score >= 2) {
        quoteY += 0.05
    }
    if (score >= 4) {
        quoteY += 0.007
    }
    if (score >= 6) {
        quoteY += 0.1
    } 
    if (score >= 8) {
        song.pause();
        song.currentTime = 0
        song2.play();
        quoteY += 0.105
    } 
    if (score >= 10) {
        quoteY += 0.11
    } 
    if (score >= 12) {
        quoteY += 0.115
    } 
    if (score >= 14) {
        quoteY += 0.1155
    }
    if (score >= 15) {
        quoteY += 0.12
    }
    if (score >= 16) {
        quoteY += 0.122
    }
    if (score >= 17) {
        quoteY += 0.125
    }
    if (score >= 25) {
        song3.play()
        youWin.style.display= "block"
        canvas.style.display= "none"
        theInput.style.display= "none"
        song2.pause();
        song2.currentTime = 0;
        isGameOver = true;


    }

    if (isGameOver) {
        cancelAnimationFrame(gameId);
        restartBtn.style.display = "block";
        song.pause();
        song.currentTime = 0;
        song2.pause();
        song2.currentTime = 0;
      } else {
        gameId = requestAnimationFrame(startGame)
      };
}


// restart
function restart() {
    song3.pause();
    song3.currentTime= 0;
    song2.pause();
    song2.currentTime = 0;
    song.play();
    isGameOver = false
    score = 0
    randomQuote = "Never give up"
    newRandomQuotes = ["Follow your dreams","Do the impossible","Believe in yourself","Stay strong","Don't stress", "You got this",
    "Let's get things done","Stay focused","Trust yourself", "Small steps every day", "Take the risk or lose the chance", "Impossible is for the unwilling", "Keep it up",
    "Nothing can stop me", "No pain no gain", "Stand up and try again", "Today will be a good day", "Enjoy the moment", "Live in the present"]
    canvas.style.display = "block"
    theInput.style.display = "block"
    startGame();
    restartBtn.style.display = "none"
    theInput.value = "";
}


// restart button
restartBtn.addEventListener("click", () =>{
    restart();
})