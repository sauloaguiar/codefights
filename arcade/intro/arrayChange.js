function arrayChange(inputArray) {
  let increases = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
      while (inputArray[i] >= inputArray[i+1]) {
          inputArray[i+1]++;
          increases++;
      }
  }
  return increases;
}

arrayChange([1,1,1]);