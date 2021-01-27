import express from 'express';
import database from '../database';

/** ### Express router constructor */
const router = express.Router();

/**
 * ### GET example
 * Gets all items from database collection 'test_items'
 */
router.get('/sample', (req, res) => {
	database().then(({ db, client }) => {
		db.collection('test_items')
			.find({})
			.toArray()
			.then((items) => {
				// send back result of items
				res.send(items);

				// close connection with client
				client.close();
			});
	});
});

/**
 * ### POST example
 * Gets title and description from request body, and puts
 * it in database collection 'test_items'
 */
router.post('/sample', (req, res) => {
	// get request body
	const item = {
		title: req.body['title'],
		description: req.body['description'],
	};

	// handling missing item part
	if (!item.title || !item.description) {
		return res
			.status(404)
			.send('Please provide the body with a title and description.');
	}

	// add request body 'item' to database
	database().then(({ db, client }) => {
		db.collection('test_items').insertOne(item, (error, result) => {
			if (error) {
				// error handling here
				return console.error(error.code, error.message);
			}

			// send back result of insertOne
			res.send(result);

			// close connection with client
			client.close();
		});
	});
});

export default router;
