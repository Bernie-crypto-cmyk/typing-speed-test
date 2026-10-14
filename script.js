
const startButton = document.querySelector(".start-button");
const buttonContainer = document.querySelector('.button-container');
const difficulty = document.querySelector('.difficulty');
const textContainer = document.querySelector('.test-text-container');
const input = document.querySelector('.input');
const bestScore = document.querySelector('#score');

bestScore.textContent = localStorage.getItem('BestScore');

let array = [];
let testText;
let testTextElement;
startButton.addEventListener('click', async () => {
    try {
        difficulty.disabled = 'true';
        mode.disabled = 'true';
    let result =  await fetchData();
    let number = randomNumber(0,7);
    testText = result[difficulty.value][number];
    testTextElement = document.createElement('p');
    textContainer.classList.toggle('test-text-container-active');
    textContainer.appendChild(testTextElement);

    testText.split('').forEach(char => {
        let span = document.createElement('span');
        span.textContent = char;
        array.push(span);
        testTextElement.appendChild(span);
    });
    
    input.focus();
    startButton.remove();

    if(array[counter]){
        array[counter].style.backgroundColor = "lightBlue";
    array[counter].style.color = "black";
    }
     
    testTextElement.addEventListener('click', () => input.focus());
    timer(testText);
    }
    catch(error){
        console.error('Error fetching data:', error);
        textContainer.textContent = "Failed to load test text. Please try again.";
    }
});

let correctWords = 0;
let wrongWords = 0;
let counter = 0;
let lastLength = -1;

function calculate(){
        lastLength++;
        if(lastLength > input.value.length){
            array[input.value.length + 1].style.backgroundColor = 'black';
            array[input.value.length + 1].style.color = 'white';
        }
        counter = input.value.length - 1;

        if(input.value[counter] === testText[counter]){
            array[counter].style.color = 'green';
            array[counter].style.backgroundColor = 'black';
            correctWords++;
        }
        else{
            array[counter].style.color = 'red';
            array[counter].style.backgroundColor = 'black';
            wrongWords++;
        }
        if(testText[counter + 1]){
            array[counter+1].style.backgroundColor = 'lightBlue';
            array[counter+1].style.color = 'black';

        }
        lastLength = counter + 1;
};

input.addEventListener('input',calculate);

async function fetchData() {
    const response = await fetch('data.JSON');
    const data = await response.json();
    return data;
}

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const mode = document.querySelector('.mode');
const timeContainer = document.querySelector('#time');
const accuracyContainer = document.querySelector('#accuracy');
const wpmContainer = document.querySelector('#wpm');

let intervalIdOne;
let intervalIdTwo;
function timer(testText){
    if(mode.value == "timedd"){
        let timeA = 60;
        let time = 0;
        intervalIdOne = setInterval(() => {
            timeContainer.textContent = timeA + ' s';
             if(correctWords > 0){
            accuracyContainer.textContent = Math.round(((correctWords/input.value.length)*100) ) + ' %';
            wpmContainer.textContent = Math.round(((input.value.length/5)/ (time/60)) * (((correctWords/input.value.length)*100)/100));
            }
            if(timeA == 0 || input.value.length >= testText.length){
            localStorage.setItem('wpm', wpmContainer.textContent);
            localStorage.setItem('accuracy', accuracyContainer.textContent);
            localStorage.setItem('time', time + ' s');
            clearInterval(intervalIdOne);
            input.disabled = 'true';
            if(Number(wpmContainer.textContent) > Number(bestScore.textContent)){
                window.location.replace('new-best.html');
            }
            else{
                window.location.replace('first-result.html');
            }
         }
            timeA--;
            time++;
         },1000);
    }
    else if(mode.value == "passage" ){
        let time = 0;
        intervalIdTwo = setInterval(() =>{
            timeContainer.textContent = time + " s";
            if(time > 59){
                timeContainer.textContent = (time - time % 60)/60 + ' : ' + time % 60 + ' s';
            }
            if(correctWords > 0 && time > 0){
            accuracyContainer.textContent = Math.round(((correctWords/input.value.length)*100))  + ' %';
            wpmContainer.textContent = Math.round(((input.value.length/5)/ (time/60)) * (((correctWords/input.value.length)*100)/100));
            }
            if(input.value.length >= testText.length){
                input.disabled = 'true';
                localStorage.setItem('wpm', wpmContainer.textContent);
                localStorage.setItem('accuracy', accuracyContainer.textContent);
                localStorage.setItem('time', timeContainer.textContent);
                clearInterval(intervalIdTwo);

                if(Number(wpmContainer.textContent) > Number(bestScore.textContent)){
                window.location.replace('new-best.html');
            }
            else{
                window.location.replace('first-result.html');
            }
            }
            time++;
        },1000)

    }

};
