// Write logic that implements parseInt

function myParseInt(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (+str[i] <= 0 || +str[i] > 0) {
      res += +str[i];
      res *= 10;
    } else {
      break;
    }
  }
  return res === 0 ? NaN : res / 10;
}
console.log(myParseInt("56ahjd58fgfg"));
