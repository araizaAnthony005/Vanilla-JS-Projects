const billInput = document.querySelector('#billAmount');
const tipInput = document.querySelector('#tipAmount');
const personsAmount = document.querySelector('#totalPersons');
const perPersonTotal = document.querySelector('#perPersonTotal');

let persons = 1;

function handleBill() {
    let billBeforTip = Number(billInput.value);

    let tipPercentage = Number(tipInput.value) / 100;

    let totalTip = billBeforTip * tipPercentage;

    let billTotal = billBeforTip + totalTip;
    
    billTotalPerPerson = billTotal / persons;
    
    perPersonTotal.innerText = `$${billTotalPerPerson.toFixed(2).toLocaleString('en-US')}`;
}

function handleIncrease() {
    persons += 1;

    personsAmount.innerText = persons;

    handleBill();
}

function handleDecrease() {
    if(personsAmount.innerText <= 1) {
        return
    }

    persons -= 1;

    personsAmount.innerText = persons;

    handleBill();
}
