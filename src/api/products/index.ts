import { Collection, Db } from 'mongodb';
import { Controller } from '..';

export default class Products extends Controller {
	collection: string;

	constructor(path: string, collection: string) {
		super(path);
		this.collection = collection;
		this.initRouter();
	}

	private initRouter() {
		this.router.get(`${this.path}`, async (req, res) => {
		});

		this.router.post(`${this.path}`, (req, res) => {
			
		});
	}
}
