const initialPrice = document.querySelector("#initial-price");
const quantityStocks = document.querySelector("#quantity-stocks");
const currentPrice = document.querySelector("#current-price");
const calculatePercent = document.querySelector("#calculate-percent");
const outputMsg = document.querySelector("#output-container");

// console.log(initialPrice);
// console.log(quantityStocks);
// console.log(currentPrice);
// console.log(calculatePercent);
// console.log(outputMsg);

function calculateProfitAndLoss(initial, quantity, current) {
    hideMsg();

    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        // console.log(lossPercentage.toFixed(2));
        lossPercentage = lossPercentage.toFixed(2);
        showMessage(`Hey the loss is ${loss} and the loss percentage is ${lossPercentage}%`, false);

    } else if (initial < current) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        profitPercentage = profitPercentage.toFixed(2);
        showMessage(`Hey the profit is ${profit} and the profit percentage is ${profitPercentage}%`, true);

    } else {
        showMessage("No pain no gain and no gain no pain", true);
    }
}

function generateResult() {
    var userInitial = Number(initialPrice.value);
    var userQuantity = Number(quantityStocks.value);
    var userCurrent = Number(currentPrice.value);

    if (userInitial && userQuantity && userCurrent) {
        calculateProfitAndLoss(userInitial, userQuantity, userCurrent);
        // showMessage(msg, true);
    } else
        showMessage("String is not allowed as input", false);
}

function hideMsg() {
    outputMsg.style.display = "none";
}

function showMessage(msg, status) {
    if (status)
        outputMsg.style.color = "#22c55e";
    else
        outputMsg.style.color = " #b91c1c";

    outputMsg.style.display = 'block';
    outputMsg.innerText = msg;
}

calculatePercent.addEventListener('click', generateResult);