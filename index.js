/* eslint eqeqeq: 0 */
'use strict';

function looseArrayEquals(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((item, index) => item == arr2[index]);
}

module.exports = looseArrayEquals;
