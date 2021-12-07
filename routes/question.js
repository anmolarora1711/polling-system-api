const express = require('express');

const router = express.Router();

const questionController = require('../controllers/question');

// route for listing all the questions
router.get('/', questionController.listAll);
// route for creating a new question
router.post('/create', questionController.create);
// route for deleting a specified question
router.post('/:questionId/delete', questionController.delete);
// route for providing details of specified question
router.get('/:questionId', questionController.listQuestion);
// route for adding option to the specified question
router.post('/:questionId/options/create', questionController.addOption);

module.exports = router;