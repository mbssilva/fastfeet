// Importando bibliotecas
import {Router} from 'express';

// Importando middlewares
import jwtAuthorization from './app/middlewares/authorizationJwt';

// Importando controllers
import UserController from './app/controllers/UserController/UserController';
import SessionController from './app/controllers/SessionController/SessionController';
import RecipientController from './app/controllers/RecipientController/RecipientController';
import DelivererController from './app/controllers/DelivererController/DelivererController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.post('/recipients', jwtAuthorization, RecipientController.store);

routes.get('/deliverers', jwtAuthorization, DelivererController.index);
routes.post('/deliverers', jwtAuthorization, DelivererController.store);
routes.put('/deliverers/:id', jwtAuthorization, DelivererController.update);
routes.delete('/deliverers/:id', jwtAuthorization, DelivererController.delete);

export default routes;
