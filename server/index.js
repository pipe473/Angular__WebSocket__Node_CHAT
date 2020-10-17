'use strict'

const app = require("express")();
const serverHTTP = require('http').Server(app)
const io = require('socket.io')(serverHTTP);

const messages = [];

io.on('connection', function (err, socket) {
    if (err) {
        console.log(err);        
    } else {
        socket.on('send-message', function (err, data) {
            if (err) {
                console.log(err);                
            } else {
                messages.push(data)
                socket.emit('text-event', messages)
                socket.broadcast.emit('text-event', messages)
            }
        })
    }
})


