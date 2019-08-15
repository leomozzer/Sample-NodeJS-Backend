module.exports = {
    world(req, res){
        const world = "world"
        req.io.emit('hello', world)
        res.send("Hello World");
    }
}