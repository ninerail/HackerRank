//Test values
var n = 5;
var q = [2, 1, 5, 3, 4];
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
   console.log(numMoves(i));
  }

{
  var moves = q[i] - (i + 1);
  if (moves < 0){
    moves = 0;
  }
  if (moves > 2){
    return("Too chaotic");
  }

}