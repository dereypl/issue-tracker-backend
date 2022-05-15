const catchAsync = require('../utils/catchAsync');
const {issueService} = require('../services');

const createIssue = catchAsync(async (req, res) => {
    const issue = await issueService.createIssue(req.body);
    res.status(200).send(issue);
});

module.exports = {
    createIssue,
};
