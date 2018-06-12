function findProfession(level, pos, switches = 0) {
  if (level === 1) 
      return switches % 2 === 0 ? "Engineer" : "Doctor";
  const children = (2 ** (level - 1));  
  if (pos > (children/2)) {
      return findProfession(level - 1, pos - (children/2), ++switches);
  } else {
      return findProfession(level - 1, pos, switches);
  }   
}
