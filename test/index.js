"use strict";

const test = require("ava");

const { foo, fizzbuzz } = require("../");

test("fizzbuzz - returns fizzbuzz", function(t) {
  const result = fizzbuzz(15);
  t.is(result, "fizzbuzz");
});

test("fizzbuzz - returns fizz", function(t) {
  const result = fizzbuzz(3);
  t.is(result, "fizz");
});

test("fizzbuzz - returns buzz", function(t) {
  const result = fizzbuzz(5);
  t.is(result, "buzz");
});

test("fizzbuzz - returns x", function(t) {
  const result = fizzbuzz(2);
  t.is(result, 2);
});

test("foo", function(t) {
  const result = foo();
  t.is(result, 10);
});
