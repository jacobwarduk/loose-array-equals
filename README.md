# loose-array-equals

Shallow check two arrays for loose equality using the ECMAScript [The Abstract Equality Comparison Algorithm](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3), i.e. double equals (`==`).

**Installation**

```
npm install --save loose-array-equals
```


**Usage**

```javascript
let looseArrayEquals = require('loose-array-equals');

looseArrayEquals(['a', '23'], ['a', 23]);  // true
looseArrayEquals([1, !![], !!{}, 0], [true, true, true, false]); //true
looseArrayEquals(['a', 23], [23, 'a']);  // false
looseArrayEquals(['a', 23], [42]); // false
```
