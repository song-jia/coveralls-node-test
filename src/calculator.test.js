const cal = require('./calculator');
const assert = require('assert');

describe('calculator', () => {
    describe('add', () => {
        it('should add a and b', () => {
            const res = cal.add(1, 2);
            assert.strictEqual(res, 3);
        });
    });

    describe('sub', () => {
        it('should a sub b', () => {
            const res = cal.sub(2, 1);
            assert.strictEqual(res, 1);
        });
    });

    describe('multiply', () => {
        it('should a multiply b', () => {
            const res = cal.multiply(2, 3);
            assert.strictEqual(res, 6);
        });
    });
});