const express = require('express');
const validate = require("../../middleware/validate");
const {issueValidation} = require("../../validation");
const {issueController} = require("../../controllers");
const router = express.Router();

router
    .route('/')
    .post(validate(issueValidation.createIssue), issueController.createIssue)
    .get(validate(issueValidation.getIssues), issueController.getIssues);


router
    .route('/:issueId')
    .patch(validate(issueValidation.updateIssue), issueController.updateIssue)

module.exports = router;