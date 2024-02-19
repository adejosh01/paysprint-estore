

export function performOperation(number, operation) {
    if (operation === '+') {
        return number + 1;
    } else if (operation === '-') {
        return number - 1;
    } else {
        console.log("Invalid operation");
        return number;
    }

    // Example usage:
// let currentNumber = 5;
// let operation = '+'; // or '-'

// let result = performOperation(currentNumber, operation);
// console.log("Result:", result);
// return result;
}


