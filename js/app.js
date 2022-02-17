// Calculate Function 
function calculate(){
    const foodCost = document.getElementById('food-input').value;
    const rentCost = document.getElementById('rent-input').value;
    const clothesCost = document.getElementById('cloth-input').value;
    let totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);

    // expenses calculate
    const expenses = document.getElementById('total-expenses');
    const expensesText = expenses.innerText;
    const totalExpenses = expensesText;
    expenses.innerText = parseFloat(totalExpenses) + totalCost;
    expenses.innerText = totalCost;

    // balance calculate
    const incomeValue = document.getElementById('income-input').value;
    const balanceOutput = document.getElementById('balance');
    let totalBalance = parseFloat(incomeValue) - totalCost;
    balanceOutput.innerText = totalBalance;

    return totalBalance;
}


// SaveMoney Function 
function saveMoney(){
    // saving balance
    const incomeValue = document.getElementById('income-input').value;
    const saveInput = document.getElementById('saving-input').value;
    const saveMoney = parseFloat(incomeValue) * parseFloat(saveInput) / 100 ;

    // saving ammount
    const savingAmmount = document.getElementById('saving-amount');
    const savingAmmountText = savingAmmount.innerText;
    savingAmmount.innerText = saveMoney;

    // remaining balance
    const previousBlance = document.getElementById('balance').innerText;
    const remainingCalculate = parseFloat(previousBlance) - saveMoney;
    document.getElementById('remaining-balance').innerText = remainingCalculate;

}


