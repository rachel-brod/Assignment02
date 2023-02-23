let flipResult
let coinFlip = Math.round(Math.random()*100)
let heads = 'heads'
let tails = 'tails'

coinFlip

let choice = prompt('Select Heads or Tails')
console.log(choice)

if (coinFlip <= 50) {
    flipResult = heads
} else if (coinFlip > 50) {
    flipResult = tails
}

console.log(flipResult)


if (choice.toLowerCase() === heads) {
    if (flipResult === heads) {
        document.write('The flip was heads and you chose heads...you win!');
    } else if (flipResult === tails) {
        document.write('The flip was tails but you chose heads...you lose!')
    }
}
if (choice.toLowerCase() === tails) {
    if (flipResult === tails) {
        document.write('The flip was tails and you chose tails...you win!');
    } else if (flipResult === heads) {
        document.write('The flip was heads but you chose tails...you lose!')
    }
}
