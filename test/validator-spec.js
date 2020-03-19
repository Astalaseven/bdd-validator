let chai = require('chai');
let expect = chai.expect;

let validator = require('../lib/validator');

describe('A validator', () => {
    it('should return error.nonpositive for not strictly positive numbers', () => {
        expect(validator(0)).to.be.deep.equal(['error.nonpositive']);
    });
});
