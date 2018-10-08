//Test values
var n = 7;
var c = [0,0,1,0,0,1,0];

var goal = 4;
var actual = jumpingOnClouds(c);

//Update html
document.getElementById("n").innerHTML = n;
document.getElementById("c").innerHTML = c;
document.getElementById("goal").innerHTML = goal;
document.getElementById("actual").innerHTML = actual;

// Core function
function jumpingOnClouds(c) {
  let jumps = 0;
  let index = 0;
  do {
    if (c[index + 2] === 0){
      jumps++;
      index = index + 2;
    } else if (c[index + 1] === 0){
      jumps++;
      index++;
    } else {
      jumps++
      index = index + 2;
    }
  } while (index < c.length - 1);
  return jumps;
}