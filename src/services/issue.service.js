const {Issue} = require("../models");
const {ISSUE_STATE} = require("../enum/issueState");
const ApiError = require("../utils/ApiError");

const createIssue = async (issueBody) => Issue.create({...issueBody, state: ISSUE_STATE.OPEN})
const queryIssues = async (filter, options) => Issue.paginate(filter, options);

const updateIssueById = async (issueId, updateBody) => {
    const issue = await Issue.findById(issueId);
    if (!issue) throw new ApiError(404, 'Issue not found');

    Object.assign(issue, updateBody);
    await issue.save();
    return issue;
};

module.exports = {
    createIssue,
    queryIssues,
    updateIssueById
};
