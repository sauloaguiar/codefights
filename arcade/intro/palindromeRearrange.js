function palindromeRearranging(inputString) {
  let map = new Map();
  for(let i = 0; i < inputString.length; i++) {
      if (map.has(inputString[i])) {
          map.set(inputString[i], map.get(inputString[i]) + 1);
      } else {
          map.set(inputString[i], 1);
      }
  }
  let evenChars = 0;
  map.forEach((value, key) => {
      if (value % 2 == 1) {
          evenChars++;
      }
  });
  return evenChars <=1 ;
}

