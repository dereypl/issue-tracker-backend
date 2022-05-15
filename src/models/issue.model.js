const mongoose = require("mongoose");
const {ISSUE_STATES, ISSUE_STATE} = require("../enum/issueState");
const {paginate} = require("./plugins");
const ApiError = require("../utils/ApiError");

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

issueSchema.plugin(paginate);

issueSchema.statics.checkIsStateChangePossible = async function (id, nextState) {
    const issue = await this.findOne({_id: id});
    if (!issue) throw new ApiError(404, 'Issue not found');

    const currentState = issue.state;
    if (currentState === nextState) return true;

    switch (currentState) {
        case ISSUE_STATE.OPEN:
            return nextState === ISSUE_STATE.PENDING
        case ISSUE_STATE.PENDING:
            return nextState === ISSUE_STATE.CLOSED
        default:
            return false
    }
};

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;


