# loose-array-equals

[![npm](https://img.shields.io/npm/dt/loose-array-equals.svg)](https://www.npmjs.com/package/loose-array-equals) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)  [![Build Status](https://travis-ci.org/jacobwarduk/loose-array-equals.svg?branch=master)](https://travis-ci.org/jacobwarduk/loose-array-equals)

Shallow check two arrays for loose equality using the ECMAScript [Abstract Equality Comparison Algorithm](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3), i.e. double equals (`==`).

**Installation**

```
npm install --save loose-array-equals
```


**Usage**

```javascript
const looseArrayEquals = require('loose-array-equals');

looseArrayEquals(['a', '23'], ['a', 23]);  // true
looseArrayEquals([1, !![], !!{}, 0], [true, true, true, false]); //true
looseArrayEquals(['a', 23], [23, 'a']);  // false
looseArrayEquals(['a', 23], [42]); // false
```
