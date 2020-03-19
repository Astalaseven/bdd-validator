module.exports = (n, errors) => {
    if (n <= 0)
        errors.push('error.nonpositive');
};