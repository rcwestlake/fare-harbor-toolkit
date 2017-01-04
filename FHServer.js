var express = require('express');
var app = express();
var path = require('path');
var axios = require('axios');
var bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);
app.locals.title = 'FareHarbor Toolkit';

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});



app.listen(app.get('port'), function() {
  console.log('listening on the port 8080');
});

function pingAPI() {
 return axios.get('https://demo.fareharbor.com/api/external/v1/companies/bodyglove/items/?api-app=5fa25381-5ec6-4e86-8b4e-a95735beffa4&api-user=1be378f8-8a6f-4788-b7f0-c2c9b02ca009')
}

app.get('/api', function(req, res) {
  pingAPI()
  .then(function(data) {
    res.send(data.data)
  })
  .catch(function(error) {
    console.log('Error in pingAPI in FHServer', error)
  })
});
