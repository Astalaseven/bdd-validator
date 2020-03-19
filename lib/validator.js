nonPositiveValidationRule = (n, errors) => {
    if (n <= 0)
        errors.push('error.nonpositive');
};

makeNonDivisibleValidationRule = (divisor, error) => {
    return (n, errors) => {
        if (n % divisor === 0)
            errors.push(error);
    };
};

let validationRules = [
    nonPositiveValidationRule,
    makeNonDivisibleValidationRule(3, 'error.three'),
    makeNonDivisibleValidationRule(5, 'error.five')
];

module.exports = (n) => {
    return validationRules.reduce((errors, rule) => {
        rule(n, errors);
        return errors;
    }, []);
};