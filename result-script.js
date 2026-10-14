const resultWpm = document.querySelector('.result-wpm-value');
const resultAccuracy = document.querySelector('.result-accuracy-value');
const resultTime = document.querySelector('.result-time-value');
const bestScore = document.querySelector('#score');
const beatButton = document.querySelector('.result-beat-button');
 
    let best = localStorage.getItem('BestScore');
        resultWpm.textContent = localStorage.getItem('wpm');
        resultAccuracy.textContent = localStorage.getItem('accuracy')
        resultTime.textContent = localStorage.getItem('time');

        if(Number(localStorage.getItem('wpm')) > Number(best)){
        bestScore.textContent = localStorage.getItem('wpm');
        localStorage.setItem('BestScore', localStorage.getItem('wpm'));
        }
        else{
            bestScore.textContent = best;
        }

        beatButton.addEventListener('click', () =>
        {
            window.location.replace('index.html');
        })