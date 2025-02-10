import './style.css'



document.querySelector('#app').innerHTML = `
   <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">0</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">0</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>
    </main>
`

;

//select DOM elements

//variable activePlayer
const SelectionPlayer0 = document.querySelector('.player--0');
const SelectionPlayer1 = document.querySelector('.player--1');

// score = [0,0] -> Variable de estado en JS

const score0 = document.querySelector('.score--0');
const score1 = document.querySelector('.score--1');
//current ->variable de estado en JS
const current0 = document.querySelector('.current--0');
const current1 = document.querySelector('.current--1');


const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const imgDice = document.querySelector('.dice');