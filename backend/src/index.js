const express = require('express')
const server = express()
const TaskRouter = require('./router/TaskRouter')

server.use(express.json())
server.use('/task', TaskRouter)



server.listen(3000, () => {
    console.log('listening on port 3000')
})