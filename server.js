const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();

app.use('/', (req, res, next) => {
    res.send('Hello from SSl Server');
})

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
}, app)

sslServer.listen(process.env.PORT, () => console.log(`Secure server on ${process.env.PORT}`))