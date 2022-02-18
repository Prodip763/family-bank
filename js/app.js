
document.getElementById('calculate-amount').addEventListener('click',function(){
    const incomeText = document.getElementById('income-text');
    const incomeAmount = incomeText.value;
    const income = parseFloat(incomeAmount);
    const foodText = document.getElementById('food-text');
    const foodAmount = foodText.value;
    const food = parseFloat(foodAmount);
    const rentText = document.getElementById('rent-text');
    const rentAmount = rentText.value;
    const rent = parseFloat(rentAmount);
    const clothesText = document.getElementById('clothes-text');
    const clothesAmount = clothesText.value;
    const clothes = parseFloat(clothesAmount);  
    const totalAmount = food + rent + clothes; 
    
    // total expenses 
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesText = totalExpenses.innerText;
    totalExpenses.innerText = totalAmount;
    // total Balance 

        const totalBalance = document.getElementById('total-balance');
        const totalBalanceText = totalBalance.innerText;
        let lastBalance = income-totalAmount;
        totalBalance.innerText = lastBalance;


    
    // clear input field 
    incomeText.value = '';
    foodText.value = '';
    rentText.value = '';
    clothesText.value = '';
    
});

document.getElementById('saving').addEventListener('click', function(){
    const parcent = document.getElementById('parcent');
    const parcentAmount = parcent.value;
    const parcentTotal = parseFloat(parcentAmount);
    const income =  lastBalance / parcentTotal;  
    // saving amount 
    const savingAmount = document.getElementById('saving-amount');
    const totalSavingAmount = savingAmount.innerText;
    savingAmount.innerText = income;
    // remaining Balance 
    const remainingBalance = document.getElementById('remaining-balance');
    const totalRemainingBalance = remainingBalance.innerText;
    const balance = lastBalance - income ;
    remainingBalance.innerText = balance;
    

});

 

