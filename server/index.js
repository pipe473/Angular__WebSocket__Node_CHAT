'use strict'

const app = require("express")();
const serverHTTP = require('http').Server(app)
const io = require('socket.io')(serverHTTP)


