const {Issue} = require("../models");

const createIssue = async (issueBody) => Issue.create(issueBody)
const queryIssues = async (filter, options) => Issue.paginate(filter, options);

module.exports = {
    createIssue,
    queryIssues
};
