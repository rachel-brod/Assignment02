let num1 = parseInt(prompt('Enter the first number that comes to your mind.'))
let num2 = parseInt(prompt('Enter the second number that comes to your mind.'))
if (num1 >= num2) {
    document.write(`${num1.toFixed(0)}`)
}
else {
    document.write(`${num2.toFixed(0)}`)
}

