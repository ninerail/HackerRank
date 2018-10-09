//Test values
var n = 649606239668;
var s = "bcbccacaacbbacabcabccacbccbababbbbabcccbbcbcaccababccbcbcaabbbaabbcaabbbbbbabcbcbbcaccbccaabacbbacbc";
var goal = 162401559918;
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
  for (let j = 0; j < s.length; j++){ // loop over string once and count the a's
    if (s.charAt(j) === "a") numberAs++;
  }
  let repeats = n / s.length;
  console.log('repeats ' + repeats);
  let wholeRepeats = Math.floor(repeats); //calculate number of times whole string repeats
  console.log('wholeRepeats ' + wholeRepeats);
  numberAs = wholeRepeats * numberAs;
  let remainderLength = n - (s.length * wholeRepeats);
  console.log('remainderLength ' + remainderLength);
  for (let j = 0; j < remainderLength; j++){
    if (s.charAt(j) === "a") numberAs++;
  }
  // APPROACH BELOW WAS TOO TIME CONSUMING
  // do {
  //   for (let j = 0; j < s.length; j++){
  //     charactersCounted++;
  //     if (s.charAt(j) === "a") numberAs++;
  //     if (charactersCounted === n) break;
  //   }  
  // } while (charactersCounted < n);
  return numberAs;
}