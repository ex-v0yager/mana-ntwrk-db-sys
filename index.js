const mana_ntwrk_dashboard = require('mana-ntwrk-dashboard');
const mana_ntwrk_db_sys = require('mana-ntwrk-db-sys');
const ejs = require('ejs');
const validator = require('validator');
const mongoose = require('mongoose');
const ipfs_http_client = require('ipfs-http-client');
const eth_crypto = require('eth-crypto');
const eslint = require('eslint');
const firebase = require('firebase');
const request = require('request');
const debug = require('debug');
const babel_core = require('babel-core');
const helmet = require('helmet');
const pg = require('pg');
const node_sass = require('node-sass');
const supertest = require('supertest');
const webpack = require('webpack');
const jsonwebtoken = require('jsonwebtoken');
const socket.io = require('socket.io');
const react_dom = require('react-dom');

const os = require('os');
console.log(`Total memory: ${os.totalmem()} bytes`);

const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your age? ', answer => {
  console.log(`You are ${answer} years old`);
  rl.close();
});

const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret).update('Hello HMAC').digest('hex');
console.log(`HMAC: ${hash}`);

try {
  throw new Error('Whoops!');
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => console.log('An event occurred!'));
myEmitter.emit('event');

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('Even numbers:', evenNumbers);

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('customEvent', (message) => {
  console.log(`Custom Event Received: ${message}`);
});
eventEmitter.emit('customEvent', 'Hello EventEmitter');

const fetch = require('node-fetch');
async function getGithubProfile() {
    const url = 'https://api.github.com/users/github';
    const response = await fetch(url);
    const profile = await response.json();
    console.log(profile);
}
getGithubProfile();

// Create a JWT token using jsonwebtoken library
const jwt = require('jsonwebtoken');
const generateJWTToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
}
const userPayload = { userId: 12345, username: 'john_doe' };
const jwtSecret = 'secret_key';
const jwtOptions = { expiresIn: '1h' };
const token = generateJWTToken(userPayload, jwtSecret, jwtOptions);
console.log('JWT Token:', token);

const { Transform } = require('stream');
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTransform).pipe(process.stdout);

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));