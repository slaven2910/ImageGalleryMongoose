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


const seedImages = [
    { url: "https://images.unsplash.com/photo-1617005037776-3ab398fdb11b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1616990417764-8d9fe56f7194?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1615228402326-7adf9a257f2b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1616529735204-6799853ed36f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1564839056816-1166a56891a0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1602415171561-ecb858417200?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1606823803245-666d84c5d13c?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1616621288142-15340a92ef37?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
]

Image.insertMany(seedImages);
/* const i = new Image({
    url: "D:\Websites\ImageGalleryMongoose\images\img1.jpg"
})
i.save().then(i => {
    console.log(i)
})
    .catch(e => {
        console.log(e);
    }) */