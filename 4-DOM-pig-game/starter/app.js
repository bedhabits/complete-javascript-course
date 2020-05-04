/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes.
Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost.
After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score
gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, player1, player2, activePlayer, currentCounter, playerCounter;
var gamePlaying;

init();

function init() {
    scores = [0,0];
    player1 = 0;
    player2 = 1;
    activePlayer = 0;
    currentCounter = 0;
    playerCounter = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = "none";

    document.getElementById(`current-${player1}`).textContent = "0";
    document.getElementById(`current-${player2}`).textContent = "0";
    document.getElementById(`score-${player1}`).textContent = "0";
    document.getElementById(`score-${player2}`).textContent = "0";
    document.getElementById(`name-${player1}`).textContent = "Player 1";
    document.getElementById(`name-${player2}`).textContent = "Player 2";
    document.querySelector(`.player-${player1}-panel`).classList.remove("winner");
    document.querySelector(`.player-${player2}-panel`).classList.remove("winner");
    document.querySelector(`.player-${player1}-panel`).classList.add("active");
    document.querySelector(`.player-${player2}-panel`).classList.remove("active");
    // document.querySelector(`.player-${player1}-panel`).classList.add("active");
};

document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6 + 1);
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice").src = `dice-${dice}.png`;

        // add the values to the current counter IF dice is not 1
        if (dice !== 1) {
            currentCounter += dice;
            document.getElementById(`current-${activePlayer}`).innerHTML = currentCounter;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gamePlaying) {
        // add the currentCounter to score[activePlayerIndex]
        scores[activePlayer] += currentCounter;

        document.querySelector(".dice").style.display = "none";
        document.getElementById(`score-${activePlayer}`).innerHTML = scores[activePlayer];

        // check if the score hit 100
        if (document.getElementById(`score-${activePlayer}`).textContent >= 20) {
            document.getElementById(`name-${activePlayer}`).textContent = "Winner !!"
            document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner");
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active");
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    currentCounter = 0;

    document.getElementById(`current-${activePlayer}`).innerHTML = 0;
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
}

document.querySelector(".btn-new").addEventListener("click", init);

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row.
After that, it's the next player's turn.
(Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score,
so that they can change the predefined score of 100.
(Hint: you can read that value with the .value property in JavaScript.
This is a good oportunity to use google to figure this out :)

3. Add another dice to the game, so that there are two dices now.
The player looses his current score when one of them is a 1.
(Hint: you will need CSS to position the second dice,
so take a look at the CSS code for the first one.)
*/









