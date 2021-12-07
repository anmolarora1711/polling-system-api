// importing required models
const Option = require('../models/option');
const Question = require('../models/question');

// delete option
module.exports.delete = async function(req, res){
    try{
        // find and remove option
        const option = await Option.findOneAndRemove({
            _id: req.params.optionId
        });

        // find and remove reference of option from question document
        const result = await Question.findOneAndUpdate({ _id: option.questionRef }, { $pull: { options: option._id } });

        return res.status(200).json({
            message: "Option deleted successfully!",
        });
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error
        });
    }
}

// add vote to option
module.exports.addVote = async function(req, res){
    try{
        // find option and increase its vote count
        const option = await Option.findOneAndUpdate({
            _id: req.params.optionId
        }, { $inc: { votes: 1 } });

        if(!option){
            return res.status(404).json({
                message: "No option found."
            });
        }
        return res.status(200).json({
            message: "Vote added!",
        });
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error
        });
    }
}