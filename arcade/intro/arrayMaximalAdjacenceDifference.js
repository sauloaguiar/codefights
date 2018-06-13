function arrayMaximalAdjacentDifference(inputArray) {
  let max = -100;
  for(let i = 1; i < inputArray.length; i++) {
      if(Math.abs(inputArray[i-1] - inputArray[i]) > max) {
          max = Math.abs(inputArray[i-1] - inputArray[i]);
      }
  }

  return max;
}
