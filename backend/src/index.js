const express = require('express')
const cors = require('cors')
const server = express()
const TaskRouter = require('./router/TaskRouter')

server.use(cors())
server.use(express.json())
server.use('/task', TaskRouter)

server.listen(3333, () => {
    console.log('listening on port 3333')
})