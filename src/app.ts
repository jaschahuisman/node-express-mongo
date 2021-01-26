import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import { Controller } from './api';

export default class App {
	public app: express.Application;
	public port: string | number;

	constructor(controllers: Controller[], port: string | number) {
		this.app = express();
		this.port = port;

		this.initMiddleware();
		this.initControllers(controllers);
	}

	private initMiddleware() {
		this.app.use(cors({ origin: '*' }));
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(logger);
	}

	private initControllers(controllers: Controller[]) {
		controllers.forEach((controller) => {
			this.app.use('/', controller.router);
		});
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`App listening on port ${this.port}`);
		});
	}
}
