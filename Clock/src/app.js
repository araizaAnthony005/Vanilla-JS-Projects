window.addEventListener('DOMContentLoaded', () => init());

function init() {
    const date = new Date();
    let hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const meridiem = document.getElementById('meridiem');
    
    if(hrs === 0) {
        hrs = 12;
    }

    if(hrs >= 12) {
        meridiem.innerText = 'PM';
    } else {
        meridiem.innerText ='AM';
    }

    document.getElementById('hour').innerText = hrs;
    document.getElementById('min').innerText = min;
    document.getElementById('sec').innerText =  sec;
}


/* UNCOMMENT BELOW TO HAVE IT AUTORUN. */
// setInterval(init, 10);

