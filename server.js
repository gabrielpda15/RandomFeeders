const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();

const rootPath = path.resolve(__dirname, 'public');
const sslPath = path.resolve(__dirname, 'certificate');

const privateKey = fs.readFileSync(path.resolve(sslPath, 'privkey.pem'), 'utf8');
const certificate = fs.readFileSync(path.resolve(sslPath, 'cert.pem'), 'utf8');
const ca = fs.readFileSync(path.resolve(sslPath, 'chain.pem'), 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.use(express.static(rootPath, { dotfiles: 'allow' }));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(rootPath, 'index.html'));
});

httpServer.listen(80, () => {
	console.log('HTTP server runnning on port 80')
});

httpsServer.listen(443, () => {
	console.log('HTTPS server runnning on port 443')
});
