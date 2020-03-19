let chai = require('chai');
let should = chai.should();

let validator = require('../lib/validator');

describe('A validator', () => {
    it('should return error.nonpositive for not strictly positive numbers', () => {
        validator(0).should.be.deep.equal(['error.nonpositive']);
    });
});
