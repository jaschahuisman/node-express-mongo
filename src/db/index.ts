import { Db, MongoClient } from 'mongodb';

// Database object
let _db: Db;

// Database configuration
const uri = 'mongodb://localhost:27017';
const dbName = 'api_testing';
const dbOptions = {
	useUnifiedTopology: true,
	useNewuriParser: true,
};

module.exports = {
	connectToDatabase: () => {
		MongoClient.connect(uri, dbOptions, (err, client) => {
			_db = client.db(dbName);
		});
	},
	database: () => {
		return _db;
	},
};

// class Database {
// 	uri: string;
// 	dbName: string;

// 	dbOptions = {
// 		useUnifiedTopology: true,
// 		useNewuriParser: true,
// 	};

// 	constructor(uri: string, dbName: string) {
// 		this.uri = uri;
// 		this.dbName = dbName;
// 	}

// 	async db() {
// 		const db = MongoClient.connect(this.uri, this.dbOptions).then(
// 			(client) => {
// 				return client.db(this.dbName);
// 			}
// 		);
// 		return await db;
// 	}
// }

// const database = new Database('mongodb://localhost:27017', 'api_test').db();

// export default database;
