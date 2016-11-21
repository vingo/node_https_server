var https = require('https');
var fs = require('fs');

var options = {
    hostname: '127.0.0.1',
    port: 4160,
    path: '/say',
    method: 'GET',
    key: fs.readFileSync('./keys/client-key.pem'),
    cert: fs.readFileSync('./keys/client-cert.pem'),
    ca: [fs.readFileSync('./keys/ca-cert.pem')],
};

//options.agent = new https.Agent(options);

var req = https.request(options, function(res) {
    res.setEncoding('utf-8');
    res.on('data', function(d) {
        console.log(d);
    });
});
req.end();

req.on('error', function(e) {
    console.log(e);
});