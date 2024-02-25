function calculateTotalAmount (amt1, amt2, amt3) {
    const totalAmount = parseInt(amt1) + parseInt(amt2) + parseInt(amt3);

    return document.getElementById('result').innerHTML = `The total amount is :$${totalAmount}`;
}