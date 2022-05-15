const {Issue} = require("../models");
const {ISSUE_STATE} = require("../enum/issueState");

const createIssue = async (issueBody) => Issue.create({...issueBody, state: ISSUE_STATE.OPEN})
const queryIssues = async (filter, options) => Issue.paginate(filter, options);

module.exports = {
    createIssue,
    queryIssues
};
