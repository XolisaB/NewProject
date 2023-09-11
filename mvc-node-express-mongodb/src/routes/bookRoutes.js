const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.createBook);
router.get('/', bookController.getAllBooks);
router.delete('/:id', bookController.deleteBookById);
router.delete('/', bookController.deleteAllBooks);
router.put('/:id', bookController.updateBook);
router.get('/:id', bookController.FindBookById);
// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;