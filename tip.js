document.getElementById("calculate").addEventListener("click",function()
{
    const bill= parseFloat(document.getElementById("bill").value);
    const tipPercentage = parseFloat(document.getElementById("tip").value);
    const numberOfPeople = parseInt(document.getElementById("people").value,10);

    if(isNaN(bill) || bill<=0 )
    {
        alert("Please, enter the valid bill amount.");
        return;
    }
    if(isNaN(tipPercentage) || tipPercentage <0 )
    {
        alert ("Please, enter the valid tip percentage.");
        return;
    }
    if(isNaN(numberOfPeople) || numberOfPeople <0 )
    {
        alert("Please, enter the valid number of people.");
        return;
    }

    const tipAmount = (bill * tipPercentage) /100;
    const totalAmount = bill + tipAmount ;
    const amountPerPerson = totalAmount / numberOfPeople;

    document.getElementById("total-tip").textContent=`$${tipAmount.toFixed(2)}`;
    document.getElementById("total-amount").textContent=`$${totalAmount.toFixed(2)}`;
    document.getElementById("amount-per-person").textContent = `$${amountPerPerson.toFixed(2)}`;
});
