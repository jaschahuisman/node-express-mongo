import { startApp } from './app';
import routes from './routes';

const PORT = process.env.PORT || 4040;

// start app
startApp(PORT, routes);
