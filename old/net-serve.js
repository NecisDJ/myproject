const net = require('net');
const server = net.createServer();

server.on('connection',()=>{
    console.log('有人连接了');
})
/* 0.0.0.0 通配 */
server.listen(12345,'127.0.0.1');