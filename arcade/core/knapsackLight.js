function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  }
  
  let maxValue = Math.max(value1, value2);
  let minValue = maxValue === value1 ? value2 : value1;
  let minValueWeigth = minValue === value1 ? weight1 : weight2;
  let maxValueWeigth = maxValue === value1 ? weight1 : weight2;
  
  if (maxValueWeigth <= maxW) {
      return maxValue;
  }
  if (minValueWeigth <= maxW) {
      return minValue;
  }
  return 0;
}