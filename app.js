const getImages = document.querySelectorAll('.choice-img');
const choices = ['rock', 'paper', 'scissors'];

for (let i = 0; i < getImages.length; i++) {

  let getEachImg = getImages[i];

  getEachImg.addEventListener('click', () => {
    
    const randomNum = Math.floor(Math.random() * 3);

    const computerChoice = choices[randomNum];
    
    const playerChoice = getEachImg.getAttribute('data-choice');

    // Display the player's choice and the computer's choice as text
    document.getElementById('player-result').textContent = `Player choice: ${playerChoice}`;

    document.getElementById('computer-result').textContent = `Computer choice: ${computerChoice}`;

    // Determine the winner and display the result
    let resultText;
    if (playerChoice === computerChoice) {

      resultText = "It's a tie!";

    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {

      resultText = 'You win!';

    } else {

      resultText = 'Computer wins!';

    }

    document.getElementById('game-result').textContent = resultText;

    let playerCounter = document.querySelector('#playerCounter');

    let computerCounter = document.querySelector('#computerCounter');

    // Update the player or computer counter
    if (resultText === 'You win!') {

      playerCounter.textContent = parseInt(playerCounter.textContent) + 1;

    } else if (resultText === 'Computer wins!') {

      computerCounter.textContent = parseInt(computerCounter.textContent) + 1;

    }

    // Check if the game is over
    const totalRounds = parseInt(playerCounter.textContent) + parseInt(computerCounter.textContent);
    
    if (totalRounds === 10) {

      const getResultCard = document.querySelector('#finalResult'); // get final popup cards id from document
      const getfinalResultImg = document.querySelector('#img'); // get final results popup img from document
      const getPopupText = document.querySelector('#popupText'); // get final results popupText from document
      
      
      if (getResultCard.classList.contains('hidden')) {
        
        getResultCard.classList.remove('hidden');
        
        getResultCard.classList.add('visible');

      }

      if (parseInt(playerCounter.textContent) > parseInt(computerCounter.textContent)) {

        getfinalResultImg.src = 'victory.gif';

        getPopupText.textContent = 'You are amazing!';
        
        getPopupText.classList.add('text-[green]');

      } else if (parseInt(playerCounter.textContent) === parseInt(computerCounter.textContent)) {

        getfinalResultImg.src = 'draw.jpg';
        
        getPopupText.textContent = 'Draw game!';

        getPopupText.classList.add('text-[black]');

      } else {
        
        getfinalResultImg.src = 'lost.gif';
        
        getPopupText.textContent = 'Sorry, you lost.';

        getPopupText.classList.add('text-[red]');

      }

      
    }
    
    const getResultCard = document.querySelector('#finalResult'); // get final popup cards id from document
    const getReplyBtn = document.querySelector('#replyBtn'); // get replyBtn from document
    
    getReplyBtn.addEventListener('click', () => {

      getResultCard.classList.add('hidden');

      playerCounter.textContent = 0;

      computerCounter.textContent = 0;

    });

  });
}
