let randomNumber =parseInt(Math.random()*100+1);

const submit = document.querySelector('subt')
const userInput = document.querySelector('#guessField')
const GuessSot = document.querySelector('.guesses')
const Remaining= document.querySelector('.lastResult')
const Loworhigh= document.querySelector('.low0rHi')
const StartOver= document.querySelector('.resultPara')

const p = document.createElement('p')

let prevGuess = [];
let numGuess =1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e) {
        e.preventDefault() 
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //
    if(isNaN(guess)){
        alert('Plese Enter valid number ')
    } else if (guess<1){
        alert('Plese Enter valid number ')
    }else if (guess>100){
        alert('Plese enter number betwween 1 to 100')
    } else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over, Random number Was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess) 
            checkGuess(guess)
        }
    }
}

function  checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guesses the right number`)
    } else if(guess>randomNumber){
        displayMessage(`Number is low`)
    }else {
        displayMessage(`number is high`)
    }
    //
}
function displayGuess(guess){
    //
    userInput.value=''

    GuessSot.innerHTML += `${guess}, `;
    numGuess++;
    Remaining.innerHTML =`${11-numGuess}`
}

function displayMessage(mesage){
    //
    Loworhigh.innerHTML = `<h2>${mesage}</h2>`;
}


function endGame() {
    userInput.value =''
    userInput.setAttribute('disabled', '') 
    p.classList.add('button')
    p.innerHTML = '<h1 id="newGame"> Start new game</h1>';
    StartOver.appendChild(p)
    playGame = false
    newGame() 

}

function newGame(){
  const newGameButton =  document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = []
    numGuess =1
    GuessSot.innerHTML = ''
    Remaining.innerHTML =`${11-numGuess}`

    userInput.removeAttribute('disabled')
    StartOver.removeChild(p)

    playGame =true 

  })

}