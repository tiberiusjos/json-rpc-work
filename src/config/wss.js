const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 3001 });

module.exports = wss;