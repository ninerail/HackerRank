//Test values
var n = 5;
var testCase = [1, 2, 4, 5, 3];
var q = testCase;
var goal = 3;
var actual = myFunction(q);

//Update html

document.getElementById("n").innerHTML = n;
document.getElementById("q").innerHTML = q;
document.getElementById("goal").innerHTML = goal;
document.getElementById("actual").innerHTML = actual;

// Core function
function myFunction(q) {
  var result = 0;

  for (var i = 0; i < q.length; i++){
    var position = i + 1;
    var moves = q[i] - position
    if (moves < 0){
      moves = 0;
    }
    if (moves > 2){
      return("Too chaotic");
    }
    result += moves;
  }
  return result;

}