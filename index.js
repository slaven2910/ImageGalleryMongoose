const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Image = require("./models/image");

mongoose.connect('mongodb://localhost:27017/imageGallery', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO Connection open!");
    })
    .catch(err => {
        console.log("Oh no MONGO error!!!!!");
        console.log(err);
    })

app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/home", async (req, res) => {
    const images = await Image.find({})
    console.log(images)
    res.render("home", { images }) //styles here!!!!!!!!
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.listen(3000, () => {
    console.log("App is listening on port 3000!");
})






