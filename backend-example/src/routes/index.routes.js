import { Router } from 'express';

import IndexController from '../controllers/index.controller'

const router = Router();
const indexController = new IndexController

export default () => {
    router.get('/', indexController.getDefault);
    router.get('/genesis', indexController.genesisDatabase);
    return router;
}