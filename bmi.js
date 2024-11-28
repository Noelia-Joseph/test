function calculateBMI()
{
    const weight = parseFloat(document.getElementById("weight").value);
    const foot = parseFloat(document.getElementById("foot").value);
    const inches = parseFloat(document.getElementById("inches") .value);
    console.log(weight,foot,inches);
    
    if (isNaN(weight) || isNaN(foot) || isNaN(inches) || weight <= 0 || foot <= 0 || inches < 0) 
    {
        document.getElementById('result').textContent = "Please enter valid, positive numbers for all fields.";
        document.getElementById('result').className = ""; 
        document.getElementById('bmiRanges').style.display = "none";
        return;
    }
    

    const heightInInches = (foot * 12) + inches;
    const bmi = (weight /(heightInInches * heightInInches)*703);
    const bmiRounded = bmi.toFixed(2);
    
    let resultText = `BMI = ${bmiRounded}. You are in the `;
    let className = "";
    if (bmi < 18.5) 
    {
        resultText += "Underweight range";
        className = "underweight";
    }
    else if(bmi >= 18.5 && bmi<= 24.9)
    {
        resultText += "Healthy Weight range";
        className = "healthyweight";
    }
    else if(bmi >=25 && bmi<= 29.9)
    {
        resultText += "Over weight range";
        className="overweight";
    }
    else
    {
        resultText += "Obese range";
        className = "obese"
    }
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = resultText;
    resultElement.className = className;

    const bmiRangesElement = document.getElementById('bmiRanges');
    bmiRangesElement.style.display = "block";

}
