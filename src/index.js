module.exports = function reverse (n) {
  n = Math.abs(n);
  const nStr = String(n);

  let result = '';

  for(let i=0; i<nStr.length; i++) {
    result = `${nStr[i]}${result}`;
  }

  result = Number(result);

  return result;  
}
