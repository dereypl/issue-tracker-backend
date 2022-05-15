const errorHandler = ({statusCode, message}, req, res, next) => {
    const response = {code: statusCode, message};
    res.status(statusCode).send(response);
};

module.exports = {
    errorHandler,
};
