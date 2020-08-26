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
  generateNumbers(seed);
  readline.close();
});

function generateNumbers(seed) {
  if (iterator === 1000) return;

  const a = 4;
  const c = 7;
  const M = 1000;
  const X = ((a * seed) + c) % M;
  appendFile(X, iterator);

  iterator++;
  generateNumbers(X);
}

// if iterator === 0
// use seed => X = (a * seed + c) % M

function appendFile(data, i) {
  fs.appendFile('numbers.csv', `${data}, ${i}\n`, function (err) {
    if (err) return console.log(err);
  });
}
