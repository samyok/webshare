const express = require('express');
const { ExpressPeerServer } = require('peer');
const path = require('path');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/peerjs.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/peerjs.min.js'));
});

const server = app.listen(9000);

const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/app'
});

app.use('/peerjs', peerServer);
