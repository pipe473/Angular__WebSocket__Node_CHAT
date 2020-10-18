// use express
const express = require("express");

// create instance of express
const app = express();

// use http with instance of express
const http = require("http").createServer(app)

// create socket instance with http
const io = require('socket.io')(http);

// add listener for new connection 
io.on("connection", (socket) =>{
// this is socket for each user
console.log("User connected", socket.id);

});
// const serverHTTP = require('http').Server(app)
// const io = require('socket.io')(serverHTTP);

app.get("/", (request, result) =>{
    result.send("Hello World !")
})

// const messages = [];

// io.on('connection', function (err, socket) {
//     if (err) {
//         console.log(err);        
//     } else {
//         socket.on('send-message', function (err, data) {
//             if (err) {
//                 console.log(err);                
//             } else {
//                 messages.push(data)
//                 socket.emit('text-event', messages)
//                 socket.broadcast.emit('text-event', messages)
//             }
//         });
//     }
// });


const PORT = 1750;

http.listen(PORT, () =>{
    console.log(`Server Listen on Port ${PORT}`);    
});


