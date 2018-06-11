var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

var campgrounds = [
    {name:"Salmon Creek", image:"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_1280.jpg"},
    {name: "Sugar Valley", image:"https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg"},
    {name:"Granite Hill", image:"http://www.photosforclass.com/download/flickr-5641024448"},
    {name:"Salmon Creek", image:"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_1280.jpg"},
    {name: "Sugar Valley", image:"https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg"},
    {name:"Granite Hill", image:"http://www.photosforclass.com/download/flickr-5641024448"},
    {name:"Salmon Creek", image:"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_1280.jpg"},
    {name: "Sugar Valley", image:"https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg"},
    {name:"Granite Hill", image:"http://www.photosforclass.com/download/flickr-5641024448"}
];

app.get('/',function(req,res){
    res.render('landing');
});

app.get('/campgrounds',function(req,res){
    res.render('campgrounds',{campgrounds,campgrounds});
});

// Following REST covention
app.post('/campgrounds',function(req,res){
// get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    campgrounds.push({name:name,image:image});

// redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get('/campgrounds/new',function(req,res){
    res.render('new');
});


app.listen(3000,function(){
    console.log('Server Connected');
});