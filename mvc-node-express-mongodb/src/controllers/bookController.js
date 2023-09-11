const Book = require('../models/book');

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBookById = async (req, res) => {
  const { id } = req.params;
  try {
      const data = await Book.findByIdAndDelete(id)
      res.json({
          message: `${id} - Book was deleted successfully!`
      })
  } catch (error) {
      res.status(500).json({
          message: `Cannot delete book with id ${id}`
      })
  }
}

exports.deleteAllBooks= async (req, res) => {
  const { id } = req.params;
  try {
      const data = await Book.deleteMany()
      res.json({
          message: `${data.deletedCount} - All Books were deleted successfully!`
      })
  } catch (error) {
      res.status(500).json({
          message: `Cannot delete All books  ${id}`
      })
  }
}

exports.updateBook = async (req, res) => {
  const {id} = req.params;
  try {
      await Book.findByIdAndUpdate(id, req.body)
  res.json({
      message: "Book was updated successfully"
  })
  } catch (error) {
      res.status(500).json({
          message: `Cannot update book with id: ${id}`
      })
  }
}

exports.FindBookById = async (req, res) => {
  const { id } = req.params;
  try {
      const data = await Book.findById(id)
      res.json({
          message: `${id} - Book was found successfully!`
      })
  } catch (error) {
      res.status(500).json({
          message: `Cannot find book with id ${id}`
      })
  }
}



// Implement other CRUD operations (getBookById, updateBook, deleteBook) here...
