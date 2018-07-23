var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var mongoose =  require("mongoose");
var indexRouter = require("./routes/index");
var path = require('path');

mongoose.connect('mongodb://user:han4832069@ds135441.mlab.com:35441/coj'
    ,{ useNewUrlParser: true });

app.use(express.static(path.join(__dirname, '../public')));
app.use("/",indexRouter);
app.use("/api/v1",restRouter);
app.use(function(req, res) {
    // handle '/' request
    res.sendFile("index.html", { root: path.join(__dirname, '../public/') });

});
/*app.get('/', function (req, res) {
    res.send('Hello express world again!')
})*/

app.listen(3000, function () {
    console.log('App listening on port 3000!')
})
