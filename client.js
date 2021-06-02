const net = require("net");
//const { stdin } = require("process");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542, }, () => {
    console.log("Successfully connected to game server");
    conn.write('Name: MAJ');
    
    setTimeout(function() {
      conn.write('Move: up')}, 3000);

    conn.on('data', (data) => {
      console.log('message from server', data);
    });
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  const name = 'MAJ';
  conn.write(`Name: ${name}`);
  //stdin.on('connect', (data) => {
  //  conn.write('Miguel');
  //});
  //conn.on('data', (whatYouTyped) => {
  //  conn.write(`${name}: ${whatYouTyped}`);
  //})
  return conn;
};

module.exports = connect;