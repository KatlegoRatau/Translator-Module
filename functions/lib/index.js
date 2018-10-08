"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
let js2xmlparser = require("js2xmlparser");
const bodyParser = require("body-parser");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const app = express();
const main = express();
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
// webApi is your functions name, and you will pass main as 
// a parameter
app.route('/ussddata')
    .post((req, res) => {
    //convert JSON to XML from the user request
    let xmlDataClientReq = js2xmlparser.parse("USSD", req.body);
    //Send requested results to the client
    res.status(200).send(xmlDataClientReq);
    res.end();
});
exports.webApi = functions.https.onRequest(main);
//# sourceMappingURL=index.js.map