const express = require('express');
const request = require('request');
const app = express();

const API_HOST = 'http://superheroapi.com/api'; // Put your actual API host here.

app.use('/', (req, res) => {
    let url = API_HOST + req.url;

    console.log('Connecting to service:', url);
    console.log('Request:', req.headers)
    console.log('Using parameters:', req.query);

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    res.header('access-control-allow-methods', 'GET, OPTIONS')
    req.pipe(request(url)).pipe(res);
});

console.log('Starting super-simple HTTP relay server...');
app.listen(process.env.PORT || 4000);
