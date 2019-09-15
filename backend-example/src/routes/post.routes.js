import { Router as router } from 'express';

import PostController from '../controllers/post.controller'

const postController = new PostController

export default () => {
    router.get('/', postController.getAll);
    router.get('/:id', postController.getSingle);
    router.post('/', postController.create);
    router.put('/', postController.update);
    router.delete('/', postController.delete);
    return router;
}