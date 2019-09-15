import { Router } from 'express';

import PostController from '../controllers/post.controller'

const router = Router();
const postController = new PostController

export default () => {
    router.get('/', postController.getAll);
    router.get('/:id', postController.getSingle);
    router.post('/', postController.create);
    router.put('/', postController.update);
    router.delete('/', postController.delete);
    return router;
}