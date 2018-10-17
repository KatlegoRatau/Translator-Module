"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
let js2xmlparser = require("js2xmlparser");
let parseString = require('xml2js').parseString;
const bodyParser = require("body-parser");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const app = express();
const main = express();
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
//TCP Configurations
let net = require('net');
const HOST = '0.tcp.ngrok.io';
const PORT = 19168;
//'tcp://0.tcp.ngrok.io';
//14295
app.route('/translator')
    .post((req, res) => {
    //Received data(JSON) from end-point caller
    console.log("Received ======|| ====  " + JSON.stringify(req.body));
    //convert JSON to XML from the user request
    let xmlDataClientReq = js2xmlparser.parse("Ussd", req.body);
    let client = new net.Socket();
    client.connect(PORT, HOST, function () {
        console.log('CONNECTED TO: ' + HOST + ':' + PORT);
        // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
        client.write(xmlDataClientReq);
    });
    //Wait for a response from the TCP server
    client.on('data', function (data) {
        console.log("TCP server response == " + data);
        //convert XML file from TCP server to JSON
        parseString(data, function (err, result) {
            //Send requested results back to the client
            res.status(200).send(result);
            res.end();
            // Close the client socket completely
            client.destroy();
        });
    });
    // Add a 'close' event handler for the client socket
    client.on('close', function () {
        console.log('Connection closed');
    });
});
// webApi is the functions name, main is passed
// a parameter
exports.webApi = functions.https.onRequest(main);
//# sourceMappingURL=index.js.map