let startTime;
let updatedTime;
let difference = 0;
let timerInterval;
let running = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        timerInterval = setInterval(() => {
            updatedTime = new Date().getTime();
            difference = updatedTime - startTime;
            displayTime(difference);
        }, 100);
        running = true;
    }
}

function pauseTimer() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    difference = 0;
    displayTime(0);
    laps.innerHTML = '';
}

function lapTimer() {
    if (running) {
        const lapTime = display.textContent;
        const li = document.createElement('li');
        li.textContent = lapTime;
        laps.appendChild(li);
    }
}

function displayTime(millis) {
    const totalSeconds = Math.floor(millis / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((millis % 1000) / 100);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${milliseconds}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTimer);

