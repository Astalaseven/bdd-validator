module.exports = (divisor, error) => {
    return (n, errors) => {
        if (n % divisor === 0)
            errors.push(error);
    };
};