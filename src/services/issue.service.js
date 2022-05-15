const {Issue} = require("../models");
const {ISSUE_STATE} = require("../enum/issueState");
const ApiError = require("../utils/ApiError");

const createIssue = async (issueBody) => Issue.create({...issueBody, state: ISSUE_STATE.OPEN})
const queryIssues = async (filter, options) => Issue.paginate(filter, options);

const updateIssueById = async (issueId, updateBody) => {
    const issue = await Issue.findByIdAndUpdate(issueId, updateBody, {new: true});
    if (issue) return issue
    else throw new ApiError(404, 'Issue not found');
};

const validateStatusChange = async (issueId, nextState) => {
    const isStateChangePossible = await Issue.checkIsStateChangePossible(issueId, nextState)

    if (!isStateChangePossible) {
        throw new ApiError(400, `Current state cannot be changed to: ${nextState}`);
    }
}

module.exports = {
    createIssue,
    queryIssues,
    updateIssueById,
    validateStatusChange
};
