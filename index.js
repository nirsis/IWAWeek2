const http = require('http');
const axios = require('axios');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parse');

var app = express();
var port = 8000;

//http.createServer((req, res) => {
//    res.write(users.join("\n")); // write a response
  //  res.write(emails.join("\n"));
    // res.end(); //end the response
// }).listen(8000); // listen for requests on port 8000

app.get(' /hello', (req, res) => {
    res.write("Hello BSCBest!");
    res.write(users.join('\n'));
}
let users = []; // names of users will be stored here

(async function getNames() {
    try {
        const { data } = await axios.get("https://swapi.dev/api/people/");
        users = data.results.map(user => user.name);
       

        console.log(users)
        
    } catch (error) {
        console.log(error)
    }
})()

