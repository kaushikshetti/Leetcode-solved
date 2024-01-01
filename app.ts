var isValid = function(s) {
  let stack = [];
  let mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (mapping[char]) {
      // If it's a closing bracket, check the top of the stack
      const top = stack.pop();
      if (top !== mapping[char]) {
        return false;  // Unmatched closing bracket
      }
    } else {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    }
  }

  // Check if all opening brackets have been closed
  return stack.length === 0;
};
