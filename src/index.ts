import app, { startApp } from './app';
import database from './database';

// start app
startApp(4040);

// instantiate routes

/**
 * ROUTE SAMPLE CODE
 */
app.get('/', async (req, res) => {
	const title = req.body['title'];
	const description = req.body['description'];

	const item = { title, description };

	if (!title || !description) {
		return res.status(404).send('Please enter title');
	}

	const { client, db } = await database();
	db.collection('yeet').insertOne(item, (error, result) => {
        // do error handling here
		res.send(result);
		client.close();
	});
});
