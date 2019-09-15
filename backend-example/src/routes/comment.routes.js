import { Router } from 'express';

import CommentController from '../controllers/comment.controller'

const router = Router();
const commentController = new CommentController

export default () => {
    router.get('/', commentController.getAll);
    router.get('/:id', commentController.getSingle);
    router.post('/', commentController.create);
    router.put('/', commentController.update);
    router.delete('/', commentController.delete);
    return router;
}