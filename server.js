var express = require("express");
var app = express();

app.use(express.static('client'));

app.get('/api/whoami', function(req, res) {
    var clientData = {
        ip : req.ip,
        language : req.get("accept-language").split(',')[0],
        software : req.get("user-agent").split(')')[0].split('(')[1]
    }
    res.end(JSON.stringify(clientData));
});

app.listen(8080);