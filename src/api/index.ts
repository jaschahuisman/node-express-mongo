import express from 'express';

export class Controller {
	public router = express.Router();
	public path;

	constructor(path: string) {
		this.path = path;
	}
}


