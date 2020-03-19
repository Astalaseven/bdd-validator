nonPositiveValidationRule = (n, errors) => {
    if (n <= 0)
        errors.push('error.nonpositive');
};

nonDivisibleBy3ValidationRule = (n, errors) => {
    if (n % 3 === 0)
        errors.push('error.three');
};

nonDivisibleBy5ValidationRule = (n, errors) => {
    if (n % 5 === 0)
        errors.push('error.five');
};

module.exports = (n) => {
    let errors = [];
    nonPositiveValidationRule(n, errors);
    nonDivisibleBy3ValidationRule(n, errors);
    nonDivisibleBy5ValidationRule(n, errors);
    return errors;
};