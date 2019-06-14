const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on('line', function(line) {
  let rev = line.split('')
  let out = ''
  for (let i=rev.length-1; i>=0; i--) {
    out += rev[i]
  }
  console.log(out);
})
