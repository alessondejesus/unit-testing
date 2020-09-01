const Server = require('./server')
const server = new Server()

server.startRoutes()

server.startServer()