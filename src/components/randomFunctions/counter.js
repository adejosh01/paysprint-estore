
export function performOperation(number, operation) {
    if (operation === '+') {
        return number + 1;

    } else if (operation === '-') {
        return number - 1;

    } else {
        
        console.log("Invalid operation");
        return number;
    }

}


