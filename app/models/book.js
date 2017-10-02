var mongoose = require('mongoose');

// Book Schema

var bookSchema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	genre: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	author: {
		type: String,
		require: true
	},
	pages: {
		type: String,
		require: true
	},
	file_size: {
		type: String,
		require: true
	},
	image_url: {
		type: String,
		require: true
	},
	download_link: {
		type: String,
		require: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books

module.exports.getBooks = function(callback, limit) {
	Book.find(callback).sort({"_id": -1}).limit(16);
};

// Get Book

module.exports.getBookById = function(id, callback) {
	Book.findById(id, callback);
};

// Add Book

module.exports.addBook = function(book, callback) {
	Book.create(book, callback);
};

// Update Book
module.exports.updateBook = function(id, book, option, callback) {
	var query = {
		_id: id
	};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		pages: book.pages,
		file_size: book.file_size,
		image_url: book.image_url,
		download_link: book.download_link
	};

	Book.findOneAndUpdate(query, update, option, callback);
};

// Remove Book
module.exports.removeBook = function(id, callback) {
	var query = {
		_id: id
	};
	Book.remove(query, callback);
};