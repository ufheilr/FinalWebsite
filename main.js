let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;

document.getElementById('tossBtn').addEventListener('click', function() {
  const resultText = document.getElementById('resultText');
  const coinImage = document.getElementById('coinImage');
  const gamesPlayedDisplay = document.getElementById('gamesPlayed');
  const gamesWonDisplay = document.getElementById('gamesWon');
  const gamesLostDisplay = document.getElementById('gamesLost');
  
  const randomNumber = Math.random(); // Generate a random number between 0 and 1
  const result = randomNumber < 0.5 ? 'Heads' : 'Tails'; // Assign 'Heads' or 'Tails' based on the random number
  
  // Update game stats
  gamesPlayed++;
  if (result === 'Heads') {
    gamesWon++;
  } else {
    gamesLost++;
  }

  // Display game stats
  resultText.textContent = `Result: ${result}`;
  gamesPlayedDisplay.textContent = `Games Played: ${gamesPlayed}`;
  gamesWonDisplay.textContent = `Games Won: ${gamesWon}`;
  gamesLostDisplay.textContent = `Games Lost: ${gamesLost}`;
  
  coinImage.innerHTML = ''; // Clear the previous coin image
  coinImage.style.display = 'block';
  
  if (result === 'Heads') {
    coinImage.innerHTML = `<img src="heads.svg" alt="Heads" width="100" height="100">`;
  } else {
    coinImage.innerHTML = `<img src="tails.svg" alt="Tails" width="100" height="100">`;
  }

  // Coin selection logic
document.getElementById('headsBtn').addEventListener('click', function() {
    tossCoin('Heads');
  });
  
  document.getElementById('tailsBtn').addEventListener('click', function() {
    tossCoin('Tails');
  });
  
  // Reset button logic
  document.getElementById('resetBtn').addEventListener('click', function() {
    resetGame();
  });
  
  function tossCoin(choice) {
    // Logic to toss the coin based on the choice and display the result
    // Update game stats accordingly
  }
  
  function resetGame() {
    // Reset all game stats and clear the result display
  }
});