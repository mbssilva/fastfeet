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
import ProblemController from './app/controllers/ProblemController/ProblemController';

// Importando configurações
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.get('/recipients', jwtAuthorization, RecipientController.index);
routes.post('/recipients', jwtAuthorization, RecipientController.store);
routes.put('/recipients', jwtAuthorization, RecipientController.update);
routes.delete('/recipients', jwtAuthorization, RecipientController.delete);

routes.get('/deliverers', jwtAuthorization, DelivererController.index);
routes.post('/deliverers', jwtAuthorization, DelivererController.store);
routes.put('/deliverers', jwtAuthorization, DelivererController.update);
routes.delete('/deliverers', jwtAuthorization, DelivererController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/orders', jwtAuthorization, OrderController.index);
routes.post('/orders', jwtAuthorization, OrderController.store);
routes.put('/orders', jwtAuthorization, OrderController.update);
routes.delete('/orders', jwtAuthorization, OrderController.delete);

routes.get('/deliveryman/:id', DeliverymanController.index);
routes.get('/deliveryman/:id/deliveries', DeliverymanController.show);
routes.post('/deliveryman/:id', DeliverymanController.store);
routes.put('/deliveryman', DeliverymanController.update);

routes.get('/problems', jwtAuthorization, ProblemController.index);
routes.get('/problems/:id', jwtAuthorization, ProblemController.show);
routes.post('/problems', ProblemController.store);
routes.delete('/problems', jwtAuthorization, ProblemController.delete);

export default routes;
