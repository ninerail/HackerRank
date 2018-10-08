//Test values
var n = 8;
var s = "UDDDUDUU";

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
console.log(countingValleys(n,s)); // Desired output: 1
