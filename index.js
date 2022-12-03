document.getElementById('submit-btn').addEventListener('click', function(){
    // user input amount
    const userAmount = document.getElementById('user-input');
    const userAmountValue = userAmount.value;
    
    // user input perchantage
    const userPercent = document.getElementById('user-input-percent');
    const userPercentValue = userPercent.value;
    userPercent.value = '';
    
    // perchantage calculation
    let calculation = userAmountValue * userPercentValue / 100;
    
    // showing the output
    let outputTag = document.getElementById('output');
    let outputInText = outputTag.innerText;
    outputTag.innerText = calculation;
})