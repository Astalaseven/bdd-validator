let assert = require('assert');

let validator = require('../lib/validator');

describe('A validator', () => {
    it('should return error.nonpositive for not strictly positive numbers', () => {
        assert.deepEqual(validator(0), ['error.nonpositive']);
    });
});
