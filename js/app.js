
// =====Calculate Function =========
function calculate(){
    const foodCost = document.getElementById('food-input');
    const foodCostVlue = parseFloat(foodCost.value);

    const rentCost = document.getElementById('rent-input');
    const rentCostVlue = parseFloat(rentCost.value);

    const clothesCost = document.getElementById('cloth-input');
    const clothesCostVlue = parseFloat(clothesCost.value);

    let totalCost = parseInt(foodCostVlue + rentCostVlue + clothesCostVlue);

    // expenses calculate
    const expenses = document.getElementById('total-expenses');

    // error handaler
    if(foodCostVlue > 0 && rentCostVlue > 0 && clothesCostVlue > 0){
        expenses.innerText = totalCost;
    }else{
        validation("alert-1");
        return expenses.innerText = '00';
    }

    // balance calculate
    const incomeValue = document.getElementById('income-input').value;
    const balanceOutput = document.getElementById('balance');

    // error handaler
    if(incomeValue < totalCost){
        validation("alert-2");
        return balanceOutput.innerText = '00'
    }
    else if(incomeValue > 0){
        balanceOutput.innerText = parseFloat(incomeValue) - totalCost;
    }else{
        validation("alert-1");
        return balanceOutput.innerText = '00';
    }
}

// =====SaveMoney Function =========
function saveMoney(){
    // saving balance
    const incomeValue = document.getElementById('income-input').value;
    const saveInput = document.getElementById('saving-input').value;
    const saveMoney = parseFloat(incomeValue) * parseFloat(saveInput) / 100 ;

    

    // saving ammount
    const savingAmmount = document.getElementById('saving-amount');
    
    if(saveInput > 0){
        savingAmmount.innerText = saveMoney;
    }else{
        validation("alert-1");
        return savingAmmount.innerText = '00';
    }
    // remaining balance
    const previousBlance = document.getElementById('balance').innerText;
    const remainingCalculate = parseFloat(previousBlance) - saveMoney;
    
    document.getElementById('remaining-balance').innerText = remainingCalculate;
}



// =====INPUT VALIDATION FUNCTION PART=========
function validation(id1){
    const alert1 = document.getElementById(id1);
    alert1.style.display = 'block'
}

// =======REMOVE ALERT FUNCTION======
function removeAlert(id1){
    document.getElementById(id1).style.display = 'none'
}