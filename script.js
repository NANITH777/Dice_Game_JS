'use strict'

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activeplayer, playing;

const init = function()
{
    scores =[0, 0];
    currentScore = 0;
    activeplayer = 0;
    playing =true; 

    score0El.textContent= 0;
    score1El.textContent= 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

// starting conditions
init();

const SwitchPlayer = function()
{
    currentScore = 0;
    document.getElementById(`current--${activeplayer}`).textContent = currentScore;
    activeplayer = activeplayer === 0 ? 1 : 0 ;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling Dice Fonctionality
btnRoll.addEventListener('click', function () 
{
    if(playing)
    {
        // generating a random dice number 
        const dice = Math.trunc(Math.random() * 6) + 1;


        // Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // check for rolled 1  
        if(dice !== 1)
        {
            // add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentScore;

        }
        else
        {
            //switch to the next player
            SwitchPlayer();
        }
    }

})

btnHold.addEventListener('click', function()
{
    if(playing)
    {
        // Add score to active's player score
        scores[activeplayer] += currentScore;
        document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];

        // check is player score is >= 100 then finish the game
        if(scores[activeplayer] >= 100)
        {
            playing = false;
            
        }
        else
        {
            // switch to the next player 
            SwitchPlayer();
        }
    }
    
})