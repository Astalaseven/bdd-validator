let chai = require('chai');
let expect = chai.expect;

let validator = require('../lib/validator');

describe('A validator', () => {
    it('should return no errors for valid numbers', () => {
        expect(validator(7)).to.be.empty;
    });

    describe('should return error.nonpositive for not strictly positive numbers', () => {
        it('like 0', () => {
            expect(validator(0)).to.be.deep.equal(['error.nonpositive']);
        });

        it('like -2', () => {
            expect(validator(-2)).to.be.deep.equal(['error.nonpositive']);
        });
    });

    describe('should return error.three for divisible by 3 numbers', () => {
        it('like 3', () => {
            expect(validator(3)).to.be.deep.equal(['error.three']);
        });

        it('like 6', () => {
            expect(validator(6)).to.be.deep.equal(['error.three']);
        });
    });
});
