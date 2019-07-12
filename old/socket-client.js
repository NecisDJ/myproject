const dgram = require('dgram');
const clientSocket = dgram.createSocket('udp4');
/* udp协议不需要链接到服务器 */
clientSocket.send('hello','12345','127.0.0.1',)