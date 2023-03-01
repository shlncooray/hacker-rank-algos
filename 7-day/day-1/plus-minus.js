"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const length = arr.length;
  let zeroCount = 0;
  let plusCount = 0;
  let minusCount = 0;
  let zeroRatio = 0.0;
  let plusRatio = 0.0;
  let minusRatio = 0.0;

  for (const number of arr) {
    if (number == 0) {
      zeroCount++;
    }
    if (number > 0) {
      plusCount++;
    }
    if (number < 0) {
      minusCount++;
    }
  }

  zeroRatio = (zeroCount / length).toFixed(6);
  plusRatio = (plusCount / length).toFixed(6);
  minusRatio = (minusCount / length).toFixed(6);

  console.log(plusRatio);
  console.log(minusRatio);
  console.log(zeroRatio);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
