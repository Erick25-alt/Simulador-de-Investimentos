document.querySelector('#investment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const initialAmount = parseFloat(document.querySelector('#initial-amount').value);
    const interestRate = parseFloat(document.querySelector('#interest-rate').value) / 100;
    const years = parseInt(document.querySelector('#years').value);
    
    let resultHTML = "<h3>Resultados</h3><ul>";

    
    const totalAmount = initialAmount * Math.pow((1 + interestRate), years);
    const totalEarnings = totalAmount - initialAmount;

    
    resultHTML += `<li>Montante total após ${years} ano(s): R$ ${totalAmount.toFixed(2)}</li>`;
    resultHTML += `<li>Rendimento total: R$ ${totalEarnings.toFixed(2)}</li>`;

    
    for (let year = 1; year <= years; year++) {
        const amount = initialAmount * Math.pow((1 + interestRate), year);
        resultHTML += `<li>Ano ${year}: R$ ${amount.toFixed(2)}</li>`;
    }

    resultHTML += "</ul>";
    document.querySelector('#result').innerHTML = resultHTML;
});
