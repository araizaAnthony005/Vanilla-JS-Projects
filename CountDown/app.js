const targetedDate = new Date('august 18, 2023 00:00:00').getTime();

const x = setInterval(() => {

    const currentDate = new Date().getTime();

    const distance = targetedDate - currentDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const txt = document.querySelector('#demo');
    txt.innerText = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

}, 1000)