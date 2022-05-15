const mongoose = require("mongoose");
const {ISSUE_STATES, ISSUE_STATE} = require("./enum/issueState");

const issueSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            enum: ISSUE_STATES,
            default: ISSUE_STATE.OPEN,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;


