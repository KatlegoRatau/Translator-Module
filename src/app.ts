import * as express from 'express';
import * as bodyParser from 'body-parser'; //used to parse the form data that you pass in the request
import { Translator } from "./routes/translator";

class App {

    public app: express.Application;
    public transRoutes: Translator = new Translator()


    constructor() {
        this.app = express(); //run the express instance and store in app
        this.config();
    }
this.transRoutes.routes(this.app);


    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }

}

export default new App().app;
