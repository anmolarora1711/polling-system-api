const mongoose = require('mongoose');

const optionSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        default: 0,
    },
    questionRef: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    link_to_vote: {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

const Option = mongoose.model('Option', optionSchema, 'options');

module.exports = Option;