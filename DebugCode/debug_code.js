
function performOperation() {
    // Get user input from input fields
    let num1 = document.getElementById('input1').value;
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        let resultFromMultiply = multiply(num1, num2);
        let resultFromAddition = addition(num1, num2);
        let resultFromSubstraction = substraction(num1, num2);
        let resultFromDivision = division(num1, num2);

        let combinedResult = `<b>The results are:</b> <p>From multiplication: ${resultFromMultiply}</p><p>From addition: ${resultFromAddition}</p><p>From substraction: ${resultFromSubstraction}</p><p>From division: ${resultFromDivision}</p>`;
        // Display the result
        displayResult(combinedResult);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Multiply the numbers
    return a * b;
}

function addition(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // add the numbers
    return a + b;
}

function substraction(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // substract the number "b" from "a"
    return a - b;
}

function division(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // divide the number "a" by number "b"
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<div>${result}</div>`;
}