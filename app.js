const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'));


app.get('/',function (req,res) {
    res.render("home")
});

app.get('/contact',function (req,res) {
    res.render("contact")
});

app.get("/blogs",function (req,res) {
    res.render("blogs")
});

app.get("/resources",function (req,res) {
    res.render("resources",{
        clink: "https://bit.ly/3FI48Og",
        dsalink: "https://bit.ly/3lF4fSD",
        pythonlink: "https://bit.ly/3DyOmU0",
        weblink: "https://bit.ly/3axEttf",
        flutterlink: "https://mega.nz/folder/Ko4y3Awa#5uJvCVjR5gAFXGCAYEr82g",
        golanglink:"https://bit.ly/3BSXxhq"
    })
});

app.listen(3000,function () {
    console.log("Server is up and running on port 3000");
});