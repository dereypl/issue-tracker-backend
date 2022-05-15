const {Issue} = require("../models");

const createIssue = async (issueBody) => Issue.create(issueBody)

module.exports = {
    createIssue,
};
