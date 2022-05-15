const express = require('express');
const validate = require("../../middleware/validate");
const {issueValidation} = require("../../validation");
const {issueController} = require("../../controllers");
const router = express.Router();

router
    .route('/')
    .post(validate(issueValidation.createIssue), issueController.createIssue)

module.exports = router;