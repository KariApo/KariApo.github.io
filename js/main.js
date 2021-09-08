function validateForm() {

    let price = 1000;
    let amountInput = document.querySelector("#topamount");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showPrice(price, amountNumber);
}

function showPrice(price, amountNumber) {

    let showamount = document.querySelector("h2.showamount");
    if (amountNumber > 10) {
        alert("Maximum 10 hambit vehetsz");
    } else if (amountNumber < 1) {
        alert("Minimum egy hambit venned kéne");
    } else {
        let amount = amountNumber * price;
        amount = cargoPrice(amount);
        showamount.innerHTML = amount;
    }
}

function cargoPrice(amount) {

    if (amount < 5000) {
        amount += 200;
    }
    return amount;
}