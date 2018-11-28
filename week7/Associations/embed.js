var mongoose = require("mongoose"),
    express = require("express");
mongoose.connect('mongodb://localhost:27017/blog_demo', { useNewUrlParser: true });

// POST
var postSchema = new mongoose.Schema({
    titie: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);


// User
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "Amy@brown.edu",
//     name: "Amy"
// });

// newUser.posts.push({
//     title: "How to brew polyjuice",
//     content: "Just Kidding"
// });

// newUser.save(function(err, user){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "Delicious"
// });
// newPost.save(function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name:"Amy"}, function(err, user){
    if (err) {
        console.log(err);
    } else {
       user.posts.push({
           title: "3 Things I really hate",
           content: "Vold, Vold, Vold"
       });
       user.save(function(err, user){
           if (err) {
               console.log(err)
           } else {
               console.log(user)
           }
       });
    }
});
