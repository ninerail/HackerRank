//Test values
var n = 5;
var d = 4;
var a = [1, 2, 3, 4, 5];
var goal = [5, 1, 2, 3, 4];
var actual = rotLeft(a, d);

//Update html
document.getElementById("n").innerHTML = n;
document.getElementById("d").innerHTML = d;
document.getElementById("a").innerHTML = a;
document.getElementById("goal").innerHTML = goal;
document.getElementById("actual").innerHTML = actual;

// Core function
function rotLeft(a, d) {
  // there are a.length possible answers!
  let numberOfRotations = d % a.length
  for (var i = 0; i < numberOfRotations; i++){
    a.push(a.shift());
  }
  return a;
}
