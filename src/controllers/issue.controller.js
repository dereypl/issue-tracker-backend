const catchAsync = require('../utils/catchAsync');
const {issueService} = require('../services');
const pick = require("../utils/pick");

const createIssue = catchAsync(async (req, res) => {
    const issue = await issueService.createIssue(req.body);
    res.status(200).send(issue);
});

const getIssues = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['title', 'description', 'state']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await issueService.queryIssues(filter, options);
    res.send(result);
});

const updateIssue = catchAsync(async (req, res) => {
    const issue = await issueService.updateIssueById(req.params.issueId, req.body);
    res.send(issue);
});

module.exports = {
    createIssue,
    getIssues,
    updateIssue
};
