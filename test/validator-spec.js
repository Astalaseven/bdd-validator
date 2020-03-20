let chai = require('chai');
let expect = chai.expect;

let validatorWith = require('../lib/validator');
let nonPositiveValidationRule = require('../lib/rules/nonPositive');
let nonDivisibleValidationRule = require('../lib/rules/nonDivisible');

describe('A validation', () => {
    let validator;

    context('with default rules', () => {
        beforeEach(() => {
            validator = validatorWith([
                nonPositiveValidationRule,
                nonDivisibleValidationRule(3, 'error.three'),
                nonDivisibleValidationRule(5, 'error.five')
            ]);
        });

        it('should return no errors for valid numbers', () => expect(validator(7)).to.be.empty);

        context('should include error.nonpositive for not strictly positive numbers', () => {
            it('like 0', () => expectedToIncludeErrorWhenInvalid(0, 'error.nonpositive'));

            it('like -2', () => expectedToIncludeErrorWhenInvalid(-2, 'error.nonpositive'));
        });

        context('should include error.three for numbers divisible by 3', () => {
            it('like 3', () => expectedToIncludeErrorWhenInvalid(3, 'error.three'));

            it('like 15', () => expectedToIncludeErrorWhenInvalid(15, 'error.three'));
        });

        context('should include error.five for numbers divisible by 5', () => {
            it('like 5', () => expectedToIncludeErrorWhenInvalid(5, 'error.five'));

            it('like 15', () => expectedToIncludeErrorWhenInvalid(15, 'error.five'));
        });
    });

    let expectedToIncludeErrorWhenInvalid = (n, error) => {
        expect(validator(n)).to.include(error);
    };
});