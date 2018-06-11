var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

var campgrounds = [
    {name:"Salmon Creek", image:"http://www.photosforclass.com/download/pixabay-548022?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fec31b90f2af61c22d2524518b7444795ea76e5d004b014439df5c579afe8b0_960.jpg&user=bhossfeld"},
    {name: "Sugar Valley", image:"http://www.photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f8c47da7e5b0bd_960.jpg&user=Free-Photos"},
    {name:"Granite Hill", image:"http://www.photosforclass.com/download/flickr-7842069486"}
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