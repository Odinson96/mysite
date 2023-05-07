import { Router } from 'express';
import ExpController from './ExpController.js';

const ExpRouter = new Router;

ExpRouter.get('/experience', ExpController.getAllExp)

export default ExpRouter;