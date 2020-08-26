let seed;
let numbers = [];
let iterator = 0;

fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Input seed:\n', input => {
  seed = input
  console.log(`Generating random numbers with seed: ${seed}`);
  fs.unlink('numbers.csv', (err) => console.log(err))
  generateNumbers(seed);
  readline.close();
});

function generateNumbers(seed) {
  if (iterator === 1000) return;

  let a = 1.24542359784234;
  let c = 0.42193923598712;
  const M = 10000;
  let X = ((a * seed) + c) % M;
  const num = Number(X) / M;
  appendFile(num.toFixed(10));

  iterator++;
  generateNumbers(X);
}

// if iterator === 0
// use seed => X = (a * seed + c) % M

function appendFile(data) {
  fs.appendFile('numbers.csv', `${data}\n`, function (err) {
    if (err) return console.log(err);
  });
}
