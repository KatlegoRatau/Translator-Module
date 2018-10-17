"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser"); //used to parse the form data that you pass in the request
const translator_1 = require("./routes/translator");
class App {
    constructor() {
        this.pokeRoutes = new translator_1.Translator();
        this.app = express();
        this.config();
        this.pokeRoutes.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
