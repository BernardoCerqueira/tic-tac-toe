/*Getting all the HTML elements*/
const startBtn = document.getElementById('start-btn')
const ticTacToe = document.getElementById('tic-tac-toe')
const restartBtn = document.getElementById('restart-btn')
const result = document.getElementById('result-text')
const turn = document.getElementById('turn')

const key1 = document.getElementById('key1')
const key2 = document.getElementById('key2')
const key3 = document.getElementById('key3')
const key4 = document.getElementById('key4')
const key5 = document.getElementById('key5')
const key6 = document.getElementById('key6')
const key7 = document.getElementById('key7')
const key8 = document.getElementById('key8')
const key9 = document.getElementById('key9')
const keys = [key1, key2, key3, key4, key5, key6, key7, key8, key9]

/*Creating const and lets*/
const oddTurn = 'X'
const evenTurn = 'O'
let countTurns = 0
let currentPlayer = ''
let otherPlayer = ''
let gameOver = false

/*Setting functions to start and restart buttons*/
startBtn.addEventListener('click', start)
restartBtn.addEventListener('click', start)

/*Start function*/
function start(){
    keys.forEach(function (key){
        key.innerText = ''
        key.style.backgroundColor = 'var(--bg-color)'
        result.innerText = ''
    })

    startBtn.style.setProperty('display', 'none')
    restartBtn.style.setProperty('display', 'none')
    ticTacToe.style.setProperty('display', 'grid')
    turn.style.setProperty('display', 'block')

    gameOver = false
    currentPlayer = document.getElementById('player1-name').value
    otherPlayer = document.getElementById('player2-name').value
    checkEmptyNames()
    turn.innerText = `${currentPlayer} to play!`
}

/*Setting each key behavior*/
keys.forEach(function(key){
    key.addEventListener('click', function(){
        if(key.innerText != ''){
            
        }else if(turn.innerText == 'We have a winner!' || turn.innerText == 'Oh no!'){

        }else{
            if(countTurns % 2 === 0){ /*X*/
                countTurns++
                key.innerText = oddTurn
                turn.innerText = `${otherPlayer} to play!`
                checkEmptyNames()
                checkWinner(currentPlayer)
                currentPlayer = document.getElementById('player2-name').value
                otherPlayer = document.getElementById('player1-name').value
            }else{  /*O*/
                countTurns++
                key.innerText = evenTurn
                turn.innerText = `${otherPlayer} to play!`
                checkEmptyNames()
                checkWinner(currentPlayer)
                currentPlayer = document.getElementById('player1-name').value
                otherPlayer = document.getElementById('player2-name').value
            }
        }
    })
})

/*Checker functions*/
function checkWinner(currentPlayer){
    /*Checking row wins*/
    if(!gameOver && !gameOver && key1.innerText != '' && key1.innerText == key2.innerText && key1.innerText == key3.innerText){
        key1.style.backgroundColor = 'green'
        key2.style.backgroundColor = 'green'
        key3.style.backgroundColor = 'green'
        restartBtn.style.setProperty('display', 'block')
        result.style.setProperty('display', 'block')
        result.innerText = `${currentPlayer} wins!`
        turn.innerText = 'We have a winner!'
        countTurns = 0
        gameOver = true
    }
    if(!gameOver && key4.innerText != '' && key4.innerText == key5.innerText && key4.innerText == key6.innerText){
        key4.style.backgroundColor = 'green'
        key5.style.backgroundColor = 'green'
        key6.style.backgroundColor = 'green'
        restartBtn.style.setProperty('display', 'block')
        result.style.setProperty('display', 'block')
        result.innerText = `${currentPlayer} wins!`
        turn.innerText = 'We have a winner!'
        countTurns = 0
        gameOver = true
    }
    if(!gameOver && key7.innerText != '' && key7.innerText == key8.innerText && key7.innerText == key9.innerText){
        key7.style.backgroundColor = 'green'
        key8.style.backgroundColor = 'green'
        key9.style.backgroundColor = 'green'
        restartBtn.style.setProperty('display', 'block')
        result.style.setProperty('display', 'block')
        result.innerText = `${currentPlayer} wins!`
        turn.innerText = 'We have a winner!'
        countTurns = 0
        gameOver = true
    }

    /*Checking col wins*/
    if(!gameOver && key1.innerText != '' && key1.innerText == key4.innerText && key1.innerText == key7.innerText){
        key1.style.backgroundColor = 'green'
        key4.style.backgroundColor = 'green'
        key7.style.backgroundColor = 'green'
        restartBtn.style.setProperty('display', 'block')
        result.style.setProperty('display', 'block')
        result.innerText = `${currentPlayer} wins!`
        turn.innerText = 'We have a winner!'
        countTurns = 0
        gameOver = true
    }
    if(!gameOver && key2.innerText != '' && key2.innerText == key5.innerText && key2.innerText == key8.innerText){
        key2.style.backgroundColor = 'green'
        key5.style.backgroundColor = 'green'
        key8.style.backgroundColor = 'green'
        restartBtn.style.setProperty('display', 'block')
        result.style.setProperty('display', 'block')
        result.innerText = `${currentPlayer} wins!`
        turn.innerText = 'We have a winner!'
        countTurns = 0
        gameOver = true
    }
    if(!gameOver && key3.innerText != '' && key3.innerText == key6.innerText && key3.innerText == key9.innerText){
        key3.style.backgroundColor = 'green'
        key6.style.backgroundColor = 'green'
        key9.style.backgroundColor = 'green'
        restartBtn.style.setProperty('display', 'block')
        result.style.setProperty('display', 'block')
        result.innerText = `${currentPlayer} wins!`
        turn.innerText = 'We have a winner!'
        countTurns = 0
        gameOver = true
    }

    /*Checking diagonal wins*/
    if(!gameOver && key1.innerText != '' && key1.innerText == key5.innerText && key1.innerText == key9.innerText){
        key1.style.backgroundColor = 'green'
        key5.style.backgroundColor = 'green'
        key9.style.backgroundColor = 'green'
        restartBtn.style.setProperty('display', 'block')
        result.style.setProperty('display', 'block')
        result.innerText = `${currentPlayer} wins!`
        turn.innerText = 'We have a winner!'
        countTurns = 0
        gameOver = true
    }

    if(!gameOver && key3.innerText != '' && key3.innerText == key5.innerText && key3.innerText == key7.innerText){
        key3.style.backgroundColor = 'green'
        key5.style.backgroundColor = 'green'
        key7.style.backgroundColor = 'green'
        restartBtn.style.setProperty('display', 'block')
        result.style.setProperty('display', 'block')
        result.innerText = `${currentPlayer} wins!`
        turn.innerText = 'We have a winner!'
        countTurns = 0
        gameOver = true
    }

    /*Checking draw*/
    if(!gameOver && countTurns === 9){
        countTurns = 0
        result.innerText = `It's a `
        const span = document.createElement('span')
        span.innerText = 'DRAW!'
        turn.innerText = 'Oh no!'
        result.appendChild(span)
        restartBtn.style.setProperty('display', 'block')
        result.style.setProperty('display', 'block')
        keys.forEach(function(key){
            key.style.backgroundColor = 'var(--draw-color)'
        })
        gameOver = true
    }
}

function checkEmptyNames(){
    if(currentPlayer == ''){
        document.getElementById('player1-name').value = 'X'
        currentPlayer = document.getElementById('player1-name').value
    }
    if(otherPlayer == ''){
        document.getElementById('player2-name').value = 'O'
        otherPlayer = document.getElementById('player2-name').value
    }
}