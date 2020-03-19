module.exports = (n) => {
    if (n <= 0)
        return ['error.nonpositive'];
    else if (n % 3 === 0)
        return ['error.three'];
    return [];
};