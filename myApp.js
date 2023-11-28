let express = require('express');
let app = express();

//import dotenv for environmental variables
require('dotenv').config();

//middleware
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", (req, res) => {
    let message = "Hello json";
    process.env.MESSAGE_STYLE === "uppercase"
    ? res.json({"message": message.toUpperCase()})
    : res.json({"message": message});
})
































 module.exports = app;
