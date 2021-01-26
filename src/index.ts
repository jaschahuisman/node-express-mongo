import App from './app';
import Products from './api/products';

const controllers = [new Products('/products', 'products')];

const app = new App(controllers, 3030);
app.listen();
