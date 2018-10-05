import {Request, Response} from "express";

import ussd = require('../db.json'); 

//Get a parser for converting JSON Objects to XM
import parser = require('json-xml-parser');

export class Translator { 
    
    public routes(app): void {        
       
      
        app.route('/getdata/:id')
        .get((req:Request, res: Response) => {
           let id = req.params.id;
           var userbody = req.body;

           var xml = parser.jsonToXml(ussd);
           console.log(xml);
           res.status(200).send(userbody);

        })
    }

  

 

}