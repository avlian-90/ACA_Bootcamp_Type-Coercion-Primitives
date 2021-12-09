// Write logic that implements parseInt

function myParseInt(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    while (typeof +str[i] === "number") {
      res += +str[i];
      res *= 10;
    }
  }
  if (res === 0) {
    return NaN;
  }
  return res / 10;
}
console.log(myParseInt("542shdus"));

// Didn't see where is the problem.
