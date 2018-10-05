
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Translator } from './routes/translator';
class App {

    public app: express.Application;
    public transRoutes: Translator = new Translator();

    constructor() {
        this.app = express();
        this.config();
        this.transRoutes.routes(this.app); 
    }

    private config(): void {
       
        this.app.use(bodyParser.json());
     
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));

    }
}

export default new App().app;

