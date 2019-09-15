import { Router as router } from 'express';

import IndexController from '../controllers/index.controller'

const indexController = new IndexController

export default () => {
    router.get('/', indexController.getDefault);
    return router;
}