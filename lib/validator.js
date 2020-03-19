module.exports = (n) => {
    let errors = [];
    if (n <= 0)
        errors.push('error.nonpositive');
    else if (n % 3 === 0)
        errors.push('error.three');
    else if (n % 5 === 0)
        errors.push('error.five');
    return errors;
};