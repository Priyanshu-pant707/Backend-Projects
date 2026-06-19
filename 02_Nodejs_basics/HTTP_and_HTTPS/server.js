
// basic protocol are preinstalled in the os like http , https , ftp etc
const http=require('http')


const server =http.createServer(function(req,res){
    res.end("hello bhai jaan");
})

server.listen(3000);