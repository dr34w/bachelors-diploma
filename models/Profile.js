var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Profile', ProfileSchema);
