function addBorder(picture) {
  const length = picture[0].length + 2;
  const result = [];
  for(let i = 0; i < picture.length; i++) {
      result[i] = '*'+ picture[i] + '*';
  }
  result.unshift('*'.repeat(length));
  result.push('*'.repeat(length));
  return result;
}
