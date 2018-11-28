var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });
// mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// Adding a new cat to DB
// var george = new Cat({
//     name: "Mrs. Norris", 
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if (err){
//         console.log("SOMETHING WENT WRONG")
//     } else {
//         console.log ("SUCCESSFULLY SAVED:")
//         console.log(cat)
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function (err, cat) {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

// Retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
    if (err){
        console.log("ERRORRRR");
        console.log(err);
    } else {
        console.log("ALL THE CATS...");
        console.log(cats);
    }
})



