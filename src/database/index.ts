import mongo, { Db, MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = "api_testing";
const options = { useUnifiedTopology: true, useNewUrlParser: true };

const database = async () => {
	const client = await MongoClient.connect(url, options);
	const db = client.db(dbName);

	return { client: client, db: db };
};

export default database;
