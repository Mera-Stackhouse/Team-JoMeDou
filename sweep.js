const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
let i = 0
rl.on('line', function(line) {
  console.log(line)
  console.log(i)
  i++
})
