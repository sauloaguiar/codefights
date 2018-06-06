function reverseParentheses(s) {
  let stacks = [];
  let stackPos = -1;
  let result = '';
  
  for(let i = 0; i < s.length; i++) {
      if (s.charAt(i) === '(') {
          stackPos++;
          stacks[stackPos] = [];
      } else if (s.charAt(i) === ')') {
          while (stacks[stackPos].length) {
              if (stackPos === 0) {
                  result += stacks[stackPos].pop();
              } else {
                  stacks[stackPos-1].push(stacks[stackPos].pop());    
              }
              
          }
          stackPos--;
      } else {
          if (stackPos === -1) {
              result += s.charAt(i);
          } else {
              stacks[stackPos].push(s.charAt(i));   
          }
      }
  }
  return result;
}

function assert(condition, message) {
  if (!condition) {
      throw message || "Assertion failed";
  }
}

assert(reverseParentheses('a(bc)de') === "acbde");