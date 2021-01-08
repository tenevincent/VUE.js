export function multiply(values) {
    return values.reduce((total, val) => total * val, 1);
}

export function subtract(amount, values) {
    return values.reduce((total, val) => total - val, amount);
}

export function divide(first, second) {
    return first / second;
}

export function addieren(first, second) {
    return first + second;
}

export function mean(values) {
    return addieren(values) / values.length;
}



export function asyncAdd(values) {
    return new Promise((callback, error) => {

        let total = addieren(values);
        console.log(`Async Total: ${total}`);
        callback(total);

    });
}


/*
export function asyncAdd(values) {
    setTimeout(() => {
        let total = addieren(values);
        console.log(`Async Total: ${total}`);
        return total;
    }, 500);
} 
*/