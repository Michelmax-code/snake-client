const connect = require('./client');
const setupInput = require('./input');
/*const net = require("net");

// establishes a connection with the game server
const connect = function(data) {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542, }, () => {
    console.log("Connection established!");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  const name = 'Miguel';
  conn.write(`${name} is back!!`);

  //conn.on('data', (whatYouTyped) => {
  //  conn.write(`${name}: ${whatYouTyped}`);
    
  //})
  
  conn.on('data', (data) => {
    console.log('message from server', data);
  })

  return conn;
};*/

console.log("Connecting ...");
connect();
setupInput();