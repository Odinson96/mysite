import { Router } from 'express';
import StackController from './StackController.js';

const StackRouter = new Router;

StackRouter.get('/stack', StackController.getAllStack)

export default StackRouter