// Importando bibliotecas
import {Router} from 'express';
import multer from 'multer';

// Importando middlewares
import jwtAuthorization from './app/middlewares/authorizationJwt';

// Importando controllers
import UserController from './app/controllers/UserController/UserController';
import SessionController from './app/controllers/SessionController/SessionController';
import RecipientController from './app/controllers/RecipientController/RecipientController';
import DelivererController from './app/controllers/DelivererController/DelivererController';
import FileController from './app/controllers/FileController/FileController';
import OrderController from './app/controllers/OrderController/OrderController';
import DeliverymanController from './app/controllers/DeliverymanController/DeliverymanController';

// Importando configurações
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.post('/recipients', jwtAuthorization, RecipientController.store);

routes.get('/deliverers', jwtAuthorization, DelivererController.index);
routes.post('/deliverers', jwtAuthorization, DelivererController.store);
routes.put('/deliverers/:id', jwtAuthorization, DelivererController.update);
routes.delete('/deliverers/:id', jwtAuthorization, DelivererController.delete);

routes.post('/files', jwtAuthorization, upload.single('file'), FileController.store);

routes.get('/orders/', jwtAuthorization, OrderController.index);
routes.post('/orders', jwtAuthorization, OrderController.store);
routes.put('/orders/:id', jwtAuthorization, OrderController.update);
routes.delete('/orders/:id', jwtAuthorization, OrderController.delete);

routes.get('/deliveryman/:id', DeliverymanController.index);
routes.get('/deliveryman/:id/deliveries', DeliverymanController.show);
routes.put('/deliveryman/:id', DeliverymanController.update);

export default routes;
