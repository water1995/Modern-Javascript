let min=1,
    max=10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

console.log(winningNum);

game.addEventListener('mousedown',function(e){

  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

guessBtn.addEventListener('click',function(){

  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max){

    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }

  if(guess == winningNum){

     /*guessInput.diabled = true;
     guessInput.style.borderColor = 'green';
     setMessage(`${winningNum} is correct`,'green');*/
     gameOver(true,`${winningNum} is correct , YOU WIN!`);

  }else{

    guessesLeft -= 1;
    if(guessesLeft === 0){

      /*guessInput.disabled = true;
      guessInput.style.borderColor = 'red';
      setMessage(`Game over, you lost.The correct ans is ${winningNum}`,'red');*/
      gameOver(false,`Game Over , you lost. The correct number was ${winningNum}`);

    }else{

      guessInput.style.borderColor = 'red';
      guessInput.value = "";
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');

    }
  }
})

function gameOver(won,msg){

  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg,color);
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function getRandomNum(min,max){

  return Math.floor(Math.random() * (max-min+1)+min);
}

function setMessage(msg,color){

  message.style.color = color;
  message.textContent = msg;

}