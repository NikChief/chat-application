const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 4000;


const router = require('./routes/main.routes')
const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
}
});

io.on('connection', (socket) => {
  console.log('New connection is done.')

  socket.on('join', ({name, room}, callback)=>{
    console.log(name, room)
  })

  socket.on('disconnect', ()=> {
    console.log('User had left chat.')
  })
})

app.use('/', router);

server.listen(PORT, () => {
  console.log('Server has started on', PORT);
})
