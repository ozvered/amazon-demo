/**
 * Created by Workshop on 8/21/2015.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(express.static('public'));

app.get('/hello', function (req, res) {
    res.sendFile( __dirname +  '/public/file2.html');
});

app.post('/load',urlencodedParser, function (req, res) {
    res.send( {data : 'the data you sent is:',
    params : req.body
    });
});


var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

