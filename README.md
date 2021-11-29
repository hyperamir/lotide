# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @amirsed/lotide`

**Require it:**

`const _ = require('@amirsed/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns head of an array
* `function2(tail)`: returns tail of an array
* `function3(middle)`: returns middle elements of an array. If array's length is even, it returns two middle elements. i.e. middle([1,2,3,4]) => returns [2,3]
* `function3(eqArrays)`: retruns true if two given arrays are equal and false if they're not.