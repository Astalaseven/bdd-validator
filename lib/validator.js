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

nonDivisibleBy3ValidationRule = makeNonDivisibleValidationRule(3, 'error.three');
nonDivisibleBy5ValidationRule = makeNonDivisibleValidationRule(5, 'error.five');

module.exports = (n) => {
    let errors = [];
    nonPositiveValidationRule(n, errors);
    nonDivisibleBy3ValidationRule(n, errors);
    nonDivisibleBy5ValidationRule(n, errors);
    return errors;
};