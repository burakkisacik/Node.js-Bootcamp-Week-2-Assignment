module.exports = function calculateFibonacciNumber(num) {
  if (num < 2) {
    return num;
  }

  return calculateFibonacciNumber(num - 1) + calculateFibonacciNumber(num - 2);
};
