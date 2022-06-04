const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();

const rootPath = path.resolve(__dirname, 'ngRandomFeeders');
const port = process.env.PORT || 8080;
const sslPath = '/etc/letsencrypt';

const privateKey = fs.readFileSync(path.resolve(sslPath, 'privkey.pem'), 'utf8');
const certificate = fs.readFileSync(path.resolve(sslPath, 'cert.pem'), 'utf8');
const ca = fs.readFileSync(path.resolve(sslPath, 'chain.pem'), 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const httpsServer = https.createServer(credentials, app);

app.use(express.static(rootPath, { dotfiles: 'allow' }));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(rootPath, 'index.html'));
});

httpsServer.listen(port, () => {
  console.log('HTTPS server runnning on port ' + port)
});
