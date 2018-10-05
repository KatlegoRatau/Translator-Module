"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import userdata = require('../db.json'); 
class Translator {
    routes(app) {
        app.route('/getxml')
            .get((req, res) => {
            res.status(200).send("Data");
        });
        app.route('/getdata/:id')
            .get((req, res) => {
            let id = req.params.id;
            res.status(200).send("Im an ID");
        });
    }
}
exports.Translator = Translator;
