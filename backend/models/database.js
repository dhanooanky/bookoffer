const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    }
});


const BookSchema = mongoose.Schema({
    book:{
        type: String,
        required:true
    },
    author:{
        type: String,
        required:true
    },
    genre:{
        type: String,
        required:true
    },
    publication:{
        type: String,
        required:true
    },
    isbn:{
        type: String,
        required:true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);
const Book = module.exports = mongoose.model('Book', BookSchema);