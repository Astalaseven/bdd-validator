let nonPositiveValidationRule = require('./rules/nonPositive');
let nonDivisibleValidationRule = require('./rules/nonDivisible');

let validationRules = [
    nonPositiveValidationRule,
    nonDivisibleValidationRule(3, 'error.three'),
    nonDivisibleValidationRule(5, 'error.five')
];

module.exports = (n) => {
    return validationRules.reduce((errors, rule) => {
        rule(n, errors);
        return errors;
    }, []);
};