let chai = require('chai');
let expect = chai.expect;

let validator = require('../lib/validator');

let expectedToIncludeErrorWhenInvalid = (n, error) => {
    expect(validator(n)).to.include(error);
};

describe('A validator', () => {
    it('should return no errors for valid numbers', () => expect(validator(7)).to.be.empty);

    describe('should include error.nonpositive for not strictly positive numbers', () => {
        it('like 0', () => expectedToIncludeErrorWhenInvalid(0, 'error.nonpositive'));

        it('like -2', () => expectedToIncludeErrorWhenInvalid(-2, 'error.nonpositive'));
    });

    describe('should include error.three for divisible by 3 numbers', () => {
        it('like 3', () => expectedToIncludeErrorWhenInvalid(3, 'error.three'));

        it('like 15', () => expectedToIncludeErrorWhenInvalid(15, 'error.three'));
    });

    describe('should include error.five for divisible by 5 numbers', () => {
        it('like 5', () => expectedToIncludeErrorWhenInvalid(5, 'error.five'));

        it('like 15', () => expectedToIncludeErrorWhenInvalid(15, 'error.five'));
    });
});
