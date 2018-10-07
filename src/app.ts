import * as express from 'express';
import * as bodyParser from 'body-parser'; //used to parse the form data that you pass in the request
import { Translator } from "./routes/translator";

class App {

    public app: express.Application;
    public pokeRoutes: Translator = new Translator();
    
    constructor() {
        this.app = express();
        this.config();        
        this.pokeRoutes.routes(this.app);     
    }
    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
