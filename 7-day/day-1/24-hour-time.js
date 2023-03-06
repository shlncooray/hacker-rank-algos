"use strict";

const fs = require("fs");

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const time = s.substring(0, 8);
  const hour = time.substring(0, 2);
  const minsec = time.substring(2, 8);
  const suffix = s.substring(8, 10);

  if (suffix == "AM") {
    if (hour == "12") {
      return `00${minsec}`;
    }
    return time;
  } else {
    if (hour == "12") {
      return time;
    }
    return `${(parseInt(hour) + 12).toString().padStart(2, "")}${minsec}`;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
