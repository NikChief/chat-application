const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 4000;


const router = require('./routes/main.routes')
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
  }
});

app.use('/', router);

io.on('connection', (socket) => {

  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);
    
    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to chat-room ${user.room}` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined! ` });


    io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})

    callback();
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });


    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left chat.`});
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
})



server.listen(PORT, () => {
  console.log('Server has started on', PORT);
})
