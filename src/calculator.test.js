const cal = require('./calculator');
const assert = require('assert');

describe('add', () => {
    it('should add a and b', () => {
        const res = cal.add(1, 2);
        assert.strictEqual(res, 3);
    });
});