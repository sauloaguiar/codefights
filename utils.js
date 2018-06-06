function assert(condition, message) {
  if (!condition) {
      throw message || "Assertion failed";
  }
  return condition;
}

module.exports = {
  assert: assert
}