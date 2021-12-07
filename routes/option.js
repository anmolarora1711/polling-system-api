const express = require('express');
const router = express.Router();

const optionController = require('../controllers/option');

// route for deleting specified option
router.post('/:optionId/delete', optionController.delete);
// route for adding vote to a specified option
router.get('/:optionId/add_vote', optionController.addVote);

module.exports = router;