function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
        document.getElementById('result').innerHTML = "<p>Please enter valid values for all fields.</p>";
        document.getElementById('summary').style.display = 'none';
        return;
    }

    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount;

    // Display summary
    const summaryHTML = `
        <table>
            <tr>
                <th>Your Loan Payment</th>
                <td>${monthlyPayment.toFixed(2)}</td>
            </tr>
            <tr>
                <th>Total Interest Paid</th>
                <td>${totalInterest.toFixed(2)}</td>
            </tr>
            <tr>
                <th>Loan Amount</th>
                <td>${loanAmount.toFixed(2)}</td>
            </tr>
            <tr>
                <th>Annual Interest Rate</th>
                <td>${(interestRate * 12 * 100).toFixed(2)}%</td>
            </tr>
            <tr>
                <th>Loan Term</th>
                <td>${(loanTerm / 12)} years</td>
            </tr>
        </table>
    `;
    document.getElementById('summary').innerHTML = summaryHTML;
    document.getElementById('summary').style.display = 'block';

    // Generate amortization table
    let balance = loanAmount;
    let resultHTML = `
        <h3>Amortization Schedule</h3>
        <table>
            <tr>
                <th>Month No.</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Payment</th>
            </tr>
    `;

    for (let month = 1; month <= loanTerm; month++) {
        const interest = balance * interestRate;
        const principal = monthlyPayment - interest;
        balance -= principal;

        resultHTML += `
            <tr>
                <td>${month}</td>
                <td>${principal.toFixed(2)}</td>
                <td>${interest.toFixed(2)}</td>
                <td>${monthlyPayment.toFixed(2)}</td>
            </tr>
        `;
    }

    resultHTML += `</table>`;
    document.getElementById('result').innerHTML = resultHTML;
}