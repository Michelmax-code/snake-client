const {IP, PORT} = require('./constants');
const net = require("net");
//const { stdin } = require("process");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT, }, () => {
    console.log("Successfully connected to game server");
    conn.write('Name: MAJ');
    conn.on('data', (data) => {
      console.log('message from server', data);
    });
  });

  //  setTimeout(function() {
  //    conn.write('Move: up')}, 1000);
  //  setTimeout(function() {
  //    conn.write('Move: left')}, 2000);
  //  setTimeout(function() {
  //    conn.write('Move: down')}, 3000);
  //  setTimeout(function() {
  //    conn.write('Move: down')}, 4000);
  //  setTimeout(function() {
  //    conn.write('Move: right')}, 5000);


  //setInterval(function() {
  //  conn.write('Move: up');
  //  conn.write('Move: left');
  //}, 500);
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