const io = require("socket.io")(8000)

var users = {}

io.on("connection", (socket) => {
    socket.on("user-joined", name => {
        users[socket.id] = name
        socket.broadcast.emit("new-user-joined",name)
    })

    
    socket.on("user-joined", name => {
        users[socket.id] = name
        socket.broadcast.emit("new-user-joined",name)
    })


    socket.on("user-joined", name => {
        users[socket.id] = name
        socket.broadcast.emit("new-user-joined",name)
    })
})