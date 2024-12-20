//THis is a Function for Addtion
const sum = (num1, num2) => {
    let sum = num1 + num2;
    return `The sum of ${num1} and ${num2} is: ${sum}`
}
//THis is a Function for Subtraction
const sub = (num1, num2) => {
    let sub = num1 - num2;
    return `The difference of ${num1} and ${num2} is: ${sub}`
}

//THis is a Function for Multiplication
const prod = (num1, num2) => {
    let prod = num1 * num2;
    return `The product of ${num1} and ${num2} is: ${prod}`
}

//THis is a Function for Division
const div = (num1, num2) => {
    if (num2 !==  0) {
        let div = num1 / num2;
        return `The quotient of ${num1} and ${num2} is: ${div}`
    }
    else {
        return `Division by Zero is not allowed. Please change the num2.`
    }
}


//THis is a Exporting functions
exports.Add = suml
exports.Subtract = sub
exports.Divide = div
exports.Multiply = prod