let chai = require('chai');
let expect = chai.expect;

let validator = require('../lib/validator');

describe('A validator', () => {
    it('should return no errors for valid numbers', () => {
        expect(validator(7)).to.be.empty;
    });

    describe('should include error.nonpositive for not strictly positive numbers', () => {
        it('like 0', () => {
            expect(validator(0)).to.include('error.nonpositive');
        });

        it('like -2', () => {
            expect(validator(-2)).to.include('error.nonpositive');
        });
    });

    describe('should include error.three for divisible by 3 numbers', () => {
        it('like 3', () => {
            expect(validator(3)).to.include('error.three');
        });

        it('like 15', () => {
            expect(validator(15)).to.include('error.three');
        });
    });

    describe('should include error.five for divisible by 5 numbers', () => {
        it('like 5', () => {
            expect(validator(5)).to.include('error.five');
        });

        it('like 15', () => {
            expect(validator(15)).to.include('error.five');
        });
    });
});
