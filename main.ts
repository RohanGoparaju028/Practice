import * as net from 'net';
const server = net.createServer((socket) => {
  console.log('client connected');
  socket.on('data',(data) => {
    console.log(`Recived:${data.toString()}`);
    socket.write(`Echo:${data}`)
  });
  socket.on('end',() => {
    console.log('client disconnected');
  });
  socket.on('error',(err) =>{
    console.error(`Socket error:${err.message}`);
  });
});
const port:number = 3000;
server.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});
server.on('error',(err) => {
console.error(`Server Error:${err.message}`);
});
const client = new net.Socket();
const host = 'localhost';
client.connect(port,host,()=>{
    console.log('connect to server');
    client.write('Hello from the client');
});
client.on('data',(data) => {
    console.log(`Recived : ${data.toString()}`);
    client.destroy();
});
client.on('close',()=>{
    console.log("Connection Closed");
});
client.on("Error",(err) => {
    console.error(`Socket Error:${err.message}`);
});