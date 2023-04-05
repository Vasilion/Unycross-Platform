const express = require('express');
const app = express();
const forumPostRoute = express.Router();
let ForumPost = require('../Models/ForumPost');
const createError = require('http-errors')
// // Add ForumPost
forumPostRoute.route('/add-forum-post').post((req, res) => {
  ForumPost.create(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      console.log(error);
    })
});
// Get all ForumPosts
forumPostRoute.route('/').get((req, res) => {
  ForumPost.find().then(function (data) {
    res.json(data);
  })
    .catch(function (error) {
      console.log(error);
    })
})

// Get ForumPost
forumPostRoute.route('/read-forum-post/:id').get((req, res) => {
  ForumPost.findById(req.params.id).then(function (data) {
    res.json(data);
  })
    .catch(function (error) {
      console.log(error);
    })
})

// Update ForumPost
forumPostRoute.route('/edit-forum-post/:id').get((req, res) => {
  ForumPost.findByIdAndUpdate(req.params.id, { $set: req.body }).then(function (data) {
    res.json(data);
    console.log('Post updated successfully!')
  })
    .catch(function (error) {
      console.log(error);
    })
})
// Delete ForumPost
forumPostRoute.route('/delete-forum-post/:id').delete((req, res) => {
  ForumPost.findByIdAndRemove(req.params.id)
    .then(function (data) {
      res.status(200).json({
        msg: data
      })
      console.log('Post updated successfully!')
    })
    .catch(function (error) {
      console.log(error);
    })
})
module.exports = forumPostRoute;