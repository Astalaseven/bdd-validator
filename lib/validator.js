module.exports = (validationRules) => {
    return (n) => {
        return validationRules.reduce((errors, rule) => {
            rule(n, errors);
            return errors;
        }, []);
    };
};