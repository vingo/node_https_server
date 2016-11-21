//https://cnodejs.org/topic/54745ac22804a0997d38b32d 参考连接 openssl 
const https = require('https');
const fs = require('fs');
const options = {
    key: fs.readFileSync('./keys/server-key.pem'),
    ca: [fs.readFileSync('./keys/ca-cert.pem')],
    cert: fs.readFileSync('./keys/server-cert.pem')
};
// //or
// const options2 = {
//     pfx: fs.readFileSync('server.pfx')
//     passphrase:'your password'
// };

https.createServer(options, (req, res) => {
    if (req.url.includes('favicon.ico')) {
        return res.end('');

    }
    console.log('>>>>>>>>>>>>>>>>>> https server');
    res.writeHead(200);
    res.end('hello world\n');
}).listen(4160);
console.log('run https server on port: ', 4160);


// https.get('https://www.google.com/', (res) => {
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', res.headers);
//     res.on('data', (d) => {
//         process.stdout.write(d);
//     });

// }).on('error', (e) => {
//     console.error(e);
// });