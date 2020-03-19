let nonPositiveValidationRule = require('./nonPositive');
let nonDivisibleValidationRule = require('./nonDivisible');

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