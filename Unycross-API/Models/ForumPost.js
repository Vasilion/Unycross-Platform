const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ForumPost = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
}, {
    collection: 'forumposts'
})
module.exports = mongoose.model('ForumPost', ForumPost)