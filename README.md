# loose-array-equals

Shallow check two arrays for loose equality

**Installation**

```
npm install --save loose-array-equals
```


**Usage**

```javascript
let looseArrayEquals = require('loose-array-equals');

looseArrayEquals(['a', 23], ['a', 23]);  // true
looseArrayEquals(['a', 23], [23, 'a']);  // false
looseArrayEquals(['a', 23], [42]); // false
```
