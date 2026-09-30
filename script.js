function calculateTip() {
    const bill = parseFloat(document.getElementById("bill").value);
    const tipPercentage = parseFloat(document.getElementById("tip").value);

    if (isNaN(bill) || isNaN(tipPercentage)) {
        document.getElementById("total").textContent = "0.00";
        return;
    }

    const tipAmount = bill * (tipPercentage / 100);
    const total = bill + tipAmount;

    document.getElementById("total").textContent = total.toFixed(2);
}