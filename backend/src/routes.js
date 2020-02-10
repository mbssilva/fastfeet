import {Router} from 'express';

import SessionController from './app/controllers/SessionController/SessionController';

const routes = new Router();

routes.get('/sessions', SessionController.store);

export default routes;
