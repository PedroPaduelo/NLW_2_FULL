import expess from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = expess.Router();
const classesControllers = new ClassesController();

const connectionsController = new ConnectionsController();

routes.post('/classes', classesControllers.createClasses);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsController.createConnection);
routes.get('/connections', connectionsController.index);

export default routes;
