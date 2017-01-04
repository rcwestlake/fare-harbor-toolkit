var express = require('express');
var app = express();
var path = require('path');


app.use(express.static('public'));
app.set('port', process.env.PORT || 8080);
app.locals.title = 'FareHarbor Toolkit';

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});


app.listen(app.get('port'), function() {
  console.log(app.locals.title + 'is running on ' + app.get('port'));
});
