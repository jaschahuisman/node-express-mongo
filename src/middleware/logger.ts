import express from 'express';

const logger = (
	req: express.Request,
	res: express.Response,
	next: () => void
) => {
	if (typeof process.env.PORT === 'undefined')
		console.log({
			path: req.path,
			method: req.method,
			statusCode: res.statusCode,
			query: req.query,
			params: req.params,
			body: req.body,
			timestamp: new Date()
		});
	next();
};

export default logger;
