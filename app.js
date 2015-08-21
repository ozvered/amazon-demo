/**
 * Created by Workshop on 8/21/2015.
 */

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/hello', function (req, res) {
    res.sendFile( __dirname +  '/public/file2.html');
});

app.post('/load', function (req, res) {
    res.send( {data : 'this is the data'});
});


var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

