'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
// This function is my work:
function countingValleys(n, s) {
  let count = 0;
  let altitude = 0;
  for (var i=0; i<s.length; i++){
    switch(s.charAt(i)) {
      case "D": {
        if (altitude === 0) count++;
        altitude--;
        break;
        }
      case "U": {
        altitude++;
        break;
        }
    }
  }
  return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}