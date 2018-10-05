"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const translator_1 = require("./routes/translator");
class App {
    constructor() {
        this.transRoutes = new translator_1.Translator();
        this.app = express();
        this.config();
        this.transRoutes.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }
}
exports.default = new App().app;
