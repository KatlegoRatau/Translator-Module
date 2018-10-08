import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
let js2xmlparser = require("js2xmlparser");
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
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
        .post((req:Request, res: Response) => {

            //convert JSON to XML from the user request
            let xmlDataClientReq  = js2xmlparser.parse("USSD", req.body);
            
            //Send requested results to the client
            res.status(200).send(xmlDataClientReq);

            res.end();

        })
export const webApi = functions.https.onRequest(main);