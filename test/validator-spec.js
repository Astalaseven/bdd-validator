let chai = require('chai');
let expect = chai.expect;

let validator = require('../lib/validator');

describe('A validator', () => {
    it('should return no errors for valid numbers', () => {
        expect(validator(3)).to.be.empty;
    });
    
    it('should return error.nonpositive for not strictly positive numbers, like 0', () => {
        expect(validator(0)).to.be.deep.equal(['error.nonpositive']);
    });

    it('should return error.nonpositive for not strictly positive numbers, like -2', () => {
        expect(validator(-2)).to.be.deep.equal(['error.nonpositive']);
    });
    
});
