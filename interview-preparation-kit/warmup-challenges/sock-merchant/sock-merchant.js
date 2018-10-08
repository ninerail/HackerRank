//Test values
var n = 9;
var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
var goal = 3;

var actual = sockMerchant(n, ar);

document.getElementById("n").innerHTML = n;
document.getElementById("ar").innerHTML = ar;
document.getElementById("goal").innerHTML = goal;
document.getElementById("actual").innerHTML = actual;

// Complete the countingValleys function below.
// This function is my work:
function sockMerchant(n, ar) {
  ar.sort(function(a, b){return a - b});
  let pairCount = 0;
  let lastValue = 0;
  for (let value of ar){
    console.log('checking new sock value: ' + value);
    console.log('last sock value: ' + lastValue);
    if (value === lastValue){
      console.log('I got a pair!')
      pairCount++;
      lastValue = 0;
    } else {
      lastValue = value;
    }
  }  
  return pairCount;
}