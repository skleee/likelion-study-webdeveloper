var mongoose = require("mongoose");

// User
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "POST"
        }
    ]
});

module.exports = mongoose.model("User", userSchema);
