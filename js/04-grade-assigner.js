let grade = parseInt(prompt('Choose a number between 1 and 100.'))
 
if (grade < 1 || grade > 100) {
    alert('Per the prompt, please choose a number between 1 and 100. No other number will be accepted.')
} else if (grade < 60) {
    alert('You received an F (for Failure).')
} else if (grade <= 69) {
    alert('You received a D (for Dummy).')
} else if (grade <= 79) {
    alert('You received a C (for Common).')
} else if (grade <= 89) {
    alert('You received a B (for Better than Most of the Rest).')
} else if (grade <=100) {
    alert ('You received an A (for Adequately Above Average).')
}
