const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const time = document.querySelector('#time');
let seconds = 0;
let interval = null;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function timer() {
    seconds++;
    
    let hrs = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

     if(hrs < 10) hrs = '0' + hrs;
     if(min < 10) min = '0' + min;
     if(secs < 10) secs = '0' + secs;

    time.innerText = `${hrs}:${min}:${secs}`;
}

function start() {
    if(interval) {
        return
    }

    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    time.innerText = '00:00:00'
}