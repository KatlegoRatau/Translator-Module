import {Request, Response} from "express";

import ussd = require('../db.json'); 

//Get a parser for converting JSON Objects to XM
import parser = require('json-xml-parser');

export class Translator { 
    
    public routes(app): void {        
       
        
       // let person = {"name":"Kat"}
        //let per2 = JSON.stringify(person)

        app.route('/getdata/:id')
        .get((req:Request, res: Response) => {
           let id = req.params.id;
           var xml = parser.jsonToXml(ussd);
           console.log(xml);
           res.status(200).send(ussd);
           
        })
    }

  

 

}