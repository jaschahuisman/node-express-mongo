import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from './middleware/logger';

// express app
const app = express();

// middleware
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);

export function startApp(port: string | number) {
	app.listen(port, () => {
		console.log(`Started server on port ${port}`);
	});
}

export default app;
