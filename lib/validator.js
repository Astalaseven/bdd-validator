module.exports = (n) => {
    let errors = [];
    if (n <= 0)
        errors.push('error.nonpositive');
    if (n % 3 === 0)
        errors.push('error.three');
    if (n % 5 === 0)
        errors.push('error.five');
    return errors;
};