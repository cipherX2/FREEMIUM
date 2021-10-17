require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require("mongoose")
const md5 = require("md5")


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/pirateDB")

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);


app.get('/', function (req, res) {
    res.render("home")
});

app.get('/contact', function (req, res) {
    res.render("contact")
});

app.get("/blogs", function (req, res) {
    res.render("blogs")
});

app.get("/resources", function (req, res) {
    res.render("resources", {
        clink: "https://bit.ly/3FI48Og",
        dsalink: "https://bit.ly/3lF4fSD",
        pythonlink: "https://bit.ly/3DyOmU0",
        weblink: "https://bit.ly/3axEttf",
        flutterlink: "https://mega.nz/folder/Ko4y3Awa#5uJvCVjR5gAFXGCAYEr82g",
        golanglink: "https://bit.ly/3BSXxhq"
    });
});

app.get("/login", function (req, res) {
    res.render("login")
});

app.get("/register", function (req, res) {
    res.render("register")
});

app.get("/about", function (req, res) {
    res.render("about")
});

app.post("/register", function (req, res) {
    const newUser = new User({
        email: req.body.username,
        password: md5(req.body.password)
    });

    newUser.save(function (err) {
        if (!err) {
            res.render("success")
        } else {
            console.log(err)
        }
    });
});

app.post("/login", function (req, res) {
    const username = req.body.username
    const password = md5(req.body.password)

    User.findOne({ email: username }, function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    res.render("success")
                } else {
                    res.send("Incorrect Password")
                };
            };
        };
    });
});

app.listen(3000, function () {
    console.log("Server is up and running on port 3000");
});