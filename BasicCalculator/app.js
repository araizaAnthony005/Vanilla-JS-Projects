let runningTotal = 0;
let buffer = '0';
let previousOperator;

 const screen = document.querySelector('#screen');

const handleClick = (value) => {
    if(isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

const handleSymbol = (symbol) => {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            } else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '=':
            if(previousOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

const handleMath = (symbol) => {
    if(buffer === 0) {
        return
    }

    const intBuffer = parseInt(buffer);

    if(runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer)
    }

    previousOperator = symbol;
    buffer = '0';
}

const flushOperation = (intBuffer) => {
    if(previousOperator === '+')
    {
        const anwser = runningTotal =+ intBuffer;
        runningTotal = anwser.toLocaleString(); 
    }
    else if(previousOperator === '−')
    {
        const anwser = runningTotal -= intBuffer;
        runningTotal = anwser.toLocaleString();
    }
    else if(previousOperator === '×')
    {
        const anwser = runningTotal *= intBuffer;
        runningTotal = anwser.toLocaleString();
    }
    else if(previousOperator === '÷')
    {
        const anwser = runningTotal /= intBuffer;
        runningTotal = anwser.toLocaleString();
    }
}

const handleNumber = (strNum) => {
    if(buffer === '0'){
        buffer = strNum;
    } else {
        buffer += strNum;
    }
}

const init = () => {
    const buttons = document.querySelector('.calc-buttons');
    buttons.addEventListener('click', (e) => handleClick(e.target.innerText))
}

init();