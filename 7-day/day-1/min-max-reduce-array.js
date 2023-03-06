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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let maxSum = 0;
  let minSum = 0;
  const sumArray = [];
  let sum = 0;
  const originalAraay = arr;

  for (const [i, num] of arr.entries()) {
    const filteredArray = arr.filter((item, index) => index != i);
    const sum = filteredArray.reduce((a, b) => a + b, 0);
    sumArray.push(sum);
  }

  maxSum = Math.max(...sumArray);
  minSum = Math.min(...sumArray);

  if (maxSum == minSum) {
    maxSum = sumArray[0];
    minSum = sumArray[0];
  }

  console.log(minSum + " " + maxSum);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
