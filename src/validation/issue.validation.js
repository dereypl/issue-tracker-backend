const Joi = require('joi');
const {ISSUE_STATES} = require("../enum/issueState");

const createIssue = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        state: Joi.string().required().valid(...ISSUE_STATES),
    }),
};

module.exports = {
    createIssue,
};
