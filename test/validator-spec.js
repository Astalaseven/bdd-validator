let chai = require('chai');
let expect = chai.expect;

let factoryWithConfiguration = require('../lib/factory');

describe('A validation', () => {
    let validator;
    let configuration;

    context('with default rules', () => {
        beforeEach(() => {
            configuration = function () {
                configuration.callCount++;
                configuration.args = Array.prototype.slice.call(arguments);
                return [
                    {type: 'nonPositive'},
                    {type: 'nonDivisible', options: {divisor: 3, error: 'error.three'}},
                    {type: 'nonDivisible', options: {divisor: 5, error: 'error.five'}}
                ];
            };
            configuration.callCount = 0;

            let newValidator = factoryWithConfiguration(configuration);
            validator = newValidator('default');
        });

        it('should access the configuration to get the validation rules', () => {
            expect(configuration.callCount).to.be.equal(1);
            expect(configuration.args).to.be.deep.equal(['default']);
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