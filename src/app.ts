import express, { Router } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from './middleware/logger';

/** ### Express app constructor */
const app = express();

// middleware
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);

/**
 * ### Start application
 * @param port listens to port
 * @param routes uses routes param as middleware
 */
export function startApp(port: string | number, routes: Router[]) {
	app.use(routes);
	app.listen(port, () => {
		console.log(`Started server on port ${port}`);
	});
}

export default app;
