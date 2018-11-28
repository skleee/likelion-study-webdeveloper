var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require ("mongoose");

mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });
// mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//Compiling schema into the model
var Campground = mongoose.model("Campground", campgroundSchema);
 
// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104491f3c370a0ecbdbe_340.jpg",
//         description: "No water"
//     }, 
//     function(err, campground){
//     if (err){
//         console.log(err);
//     }else {
//         console.log("NEWLY CREATED CAMPGROUND: ");
//         console.log(campground);
//     }
// });

app.get("/", function(req, res){
    res.render("landing");
});

// INDEX
app.get("/campgrounds", function(req, res){
    // Get all campgrounds. from DB
    Campground.find({}, function(err, allCampgrounds){
        if (err){
            console.log(err);
        } else {
            res.render("index", {campgrounds:allCampgrounds});    
        }
    });
});

// CREATE
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if (err){
            console.log(err);
        } else {
            // redirect ack to campgrounds page
            res.redirect("/campgrounds")
        }
    })  
});

// NEW
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//SHOW
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if (err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
    req.params.id
});

app.listen(3000, function(){
    console.log("The Yelpcamp server has started!");
});