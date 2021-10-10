const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'));


app.get('/',function (req,res) {
    res.render("home")
});




app.listen(3000,function () {
    console.log("Server is up and running on port 3000");
});