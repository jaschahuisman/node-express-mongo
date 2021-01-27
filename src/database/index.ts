import { MongoClient } from 'mongodb';

// database config
const url = 'mongodb://localhost:27017';
const dbName = 'api_testing';
const options = { useUnifiedTopology: true, useNewUrlParser: true };

/**
 * ### Database
 * Asynchronous function that returns the MongoClient and Db.
 * @returns Promise<{client: MongoClient, db: Db}>
 */
const database = async () => {
	// connect to the client
	const client = await MongoClient.connect(url, options);
	// instantiate the database
	const db = client.db(dbName);

	return { client: client, db: db };
};

export default database;
