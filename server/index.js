require("dotenv").config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const http = require('http'); 
const WebSocket = require('ws'); 

const restaurantsRoutes = require(path.join(__dirname, 'routes', 'restaurantsRoutes.jsx'));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", restaurantsRoutes); //以 /api 开头的请求都会使用你定义的路由逻辑 

// const server = http.createServer(app);

// // create WebSocket server and add  to HTTP server
// const wss = new WebSocket.Server({ server });

// // save all WebSocket clients
// let clients = [];

// // 当客户端连接时，保存客户端并监听消息
// wss.on('connection', (ws) => {
//     console.log('client connection started');
//     clients.push(ws);

//     // 处理客户端关闭连接
//     ws.on('close', () => {
//         clients = clients.filter(client => client !== ws);
//         console.log('client connection closed');
//     });
// });

// // 向所有客户端广播消息的函数
// const broadcastMessage = (data) => {
//     clients.forEach(client => {
//         if (client.readyState === WebSocket.OPEN) {
//             client.send(JSON.stringify(data));
//         }
//     });
// };

// // 启动服务器并监听指定端口
// server.listen(process.env.PORT, () => {
//     console.log('Server started on port ' + process.env.PORT);
// });  //port is 3000

const server = app.listen(process.env.PORT, ()=>{
    console.log('Server started on port '+process.env.PORT);
}); //port is 3000


// module.exports.broadcastMessage = broadcastMessage;