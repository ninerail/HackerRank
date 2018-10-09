//Test values
var n = 10;
var s = "aba";
var goal = 7;
var actual = repeatedString(s, n);

//Update html
document.getElementById("n").innerHTML = n;
document.getElementById("s").innerHTML = s;
document.getElementById("goal").innerHTML = goal;
document.getElementById("actual").innerHTML = actual;

// Core function
function repeatedString(s, n) {
  if (s.length === 1 && s === "a") return n;
  let numberAs = 0;
  let charactersCounted = 0;
  do {
    for (let j = 0; j < s.length; j++){
      charactersCounted++;
      if (s.charAt(j) === "a") numberAs++;
      if (charactersCounted === n) break;
    }  
  } while (charactersCounted < n);
  return numberAs;
}