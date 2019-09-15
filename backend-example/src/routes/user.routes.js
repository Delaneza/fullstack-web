import { Router } from 'express';

import UserController from '../controllers/user.controller'

const router = Router();
const userController = new UserController

export default () => {
    router.get('/', userController.getAll);
    router.get('/:id', userController.getSingle);
    router.post('/', userController.create);
    router.put('/:id', userController.update);
    router.delete('/:id', userController.delete);
    return router;
}