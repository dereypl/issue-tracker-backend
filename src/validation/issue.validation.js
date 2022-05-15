const Joi = require('joi');
const {ISSUE_STATES} = require("../enum/issueState");

const createIssue = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
    }),
};

const getIssues = {
    query: Joi.object().keys({
        title: Joi.string(),
        description: Joi.string(),
        state: Joi.string().valid(...ISSUE_STATES),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

module.exports = {
    createIssue,
    getIssues
};
