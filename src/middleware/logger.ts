import express from 'express';

/**
 * ### Logger
 * In testing environment the logger function will  
 * log data about the request and response.
 * @param req 
 * @param res 
 * @param next 
 */
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
