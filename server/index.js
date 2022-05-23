const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 4000;

const router = require('./routes/main.routes')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use('/',router);

server.listen(PORT, () => {
  console.log('Server has started on', PORT);
})
