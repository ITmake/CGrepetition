let state = {
    totals: [0, 0],
    rounds: [0, 0],
    active: 0,
    finished: false
  };

  document.addEventListener('DOMContentLoaded', () => {
  const targetInput = document.getElementById('target');
  const highscoreList = document.getElementById('highscore-list');

  function init() {
    document.getElementById('roll-0').addEventListener('click', () => kasta(0));
    document.getElementById('roll-1').addEventListener('click', () => kasta(1));
    document.getElementById('hold-0').addEventListener('click', () => stanna(0));
    document.getElementById('hold-1').addEventListener('click', () => stanna(1));
    document.getElementById('new-game').addEventListener('click', resetGame);

    resetGame();
    loadHighscores();
  }

  init();
});

 function kasta(playerIdx) {
    if (state.finished || state.active !== playerIdx) return;

    const kast = Math.floor(Math.random() * 6) + 1;

    if (kast === 1) {
      state.rounds[playerIdx] = 0;
      växlaSpelare();
    } else {
      state.rounds[playerIdx] += kast;
    }

    render();
  }