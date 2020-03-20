const validatorWith = require('./validator');
const nonPositiveValidationRule = require('./rules/nonPositive');
const nonDivisibleValidationRule = require('./rules/nonDivisible');

module.exports = (findConfiguration) => {
    return () => {
        findConfiguration('default');
        return validatorWith([
            nonPositiveValidationRule,
            nonDivisibleValidationRule(3, 'error.three'),
            nonDivisibleValidationRule(5, 'error.five')
        ]);
    };
};