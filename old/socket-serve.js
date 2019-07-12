const dgram = require('dgram');
const serverSocket = dgram.createSocket('udp4');
serverSocket.bind(12345,'127.0.0.1');
serverSocket.on("listening",()=>{
    console.log("服务器开启成功等待数据");
})
serverSocket.on("message",(data)=>{
    console.log("接受到的数据"+data.toString());
})
