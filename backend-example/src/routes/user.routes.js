import { Router as router } from 'express';

import UserController from '../controllers/user.controller'

const userController = new UserController

export default () => {
    router.get('/', userController.getAll);
    router.get('/:id', userController.getSingle);
    router.post('/', userController.create);
    router.put('/', userController.update);
    router.delete('/', userController.delete);
    return router;
}