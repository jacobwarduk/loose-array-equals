/* global describe it expect */
'use strict';

const looseArrayEquals = require('../index');

describe('looseArrayEquals', () => {
	it('should return true when arrays are equal using abstract equality comparison', () => {
		expect(looseArrayEquals(['a', '23'], ['a', 23])).toBe(true);
		expect(looseArrayEquals([1, Boolean([]), Boolean({}), 0], [true, true, true, false])).toBe(true);
	});

	it('should return false when arrays are not equal using abstract or strict equality comparison', () => {
		expect(looseArrayEquals(['a', 23], [23, 'a'])).toBe(false);
		expect(looseArrayEquals(['a', 23], [42])).toBe(false);
	});

	it('should return false when either argument is not an array', () => {
		expect(looseArrayEquals(null, [23, 'a'])).toBe(false);
		expect(looseArrayEquals(['a', 23], Function.prototype)).toBe(false);
	});

	it('should return false when arrays are not of equal length', () => {
		expect(looseArrayEquals(['a', 23, 42], [23])).toBe(false);
		expect(looseArrayEquals([23], ['a', 23, 42])).toBe(false);
	});
});
