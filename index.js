"use strict";

const fizzbuzz = function(x) {
  const isDivisibleBy3 = x % 3 === 0;
  const isDivisibleBy5 = x % 5 === 0;

  if (isDivisibleBy3 && isDivisibleBy5) {
    return "fizzbuzz";
  } else if (isDivisibleBy3) {
    return "fizz";
  } else if (isDivisibleBy5) {
    return "buzz";
  }

  return x;
};

// this test is guaranteed to fail
const foo = function() {
  return Math.floor(Math.random() * 10);
};

module.exports = { fizzbuzz, foo };
