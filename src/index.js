module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = new Set(bracketsConfig.map(config => config[0]));
  const closeBrackets = new Set(bracketsConfig.map(config => config[1]));
  const matchingBrackets = {};

  for (const config of bracketsConfig) {
    matchingBrackets[config[1]] = config[0];
  }

  for (const bracket of str) {
    if (openBrackets.has(bracket)) {
      stack.push(bracket);
    } else if (closeBrackets.has(bracket)) {
      const matchingBracket = matchingBrackets[bracket];
      if (stack.length === 0 || stack.pop() !== matchingBracket) {
        return false;
      }
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

