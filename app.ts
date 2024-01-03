var rotateString = function(s, goal) {
  // Check for equal lengths
  if (s.length !== goal.length) {
    return false;
  }

  // Concatenate s with itself to cover all possible rotations
  const concatenated = s + s;

  // Return true if 'goal' is found within the concatenated string
  return concatenated.includes(goal);
};
