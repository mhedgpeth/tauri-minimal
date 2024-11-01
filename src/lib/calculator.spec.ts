import {describe, test, expect} from 'vitest';
import {add} from './calculator';

describe('add function', () => {
    test('should add two integers correctly', () => {
        const result = add(2, 3);
        expect(result).toBe(5);
    });

    test('should return negative result for negative inputs', () => {
        const result = add(-2, -3);
        expect(result).toBe(-5);
    });

    test('should return correct result when adding positive and negative integers', () => {
        const result = add(2, -3);
        expect(result).toBe(-1);
    });

    test('should return zero when adding zero and zero', () => {
        const result = add(0, 0);
        expect(result).toBe(0);
    });

    test('should return the same number when adding zero to an integer', () => {
        const result = add(5, 0);
        expect(result).toBe(5);
    });
});