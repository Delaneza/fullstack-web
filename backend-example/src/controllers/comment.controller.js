import CommentService from '../services/comment.service';

const commentService = new CommentService();

class CommentController {
    async getAll(req, res) {
        const obj = await commentService.getAll();
        console.log(obj)
        if (obj.length) {
            return res.send(obj);
        }
        return res.status(404).send();
    }

    async getSingle(req, res) {
        const obj = await commentService.getSingle(req.params.id)
        if (obj.length) {
            return res.send(obj[0]);
        }
        return res.status(404).send();
    }

    async create(req, res) {
        const obj = await commentService.create(req.body)
        return res.status(200).send(obj[0]);
    }

    async update(req, res) {
        const obj = await commentService.update(req.body, req.params.id)
        if (obj.length) {
            return res.status(200).send(obj[0])
        }
        return res.status(404).send();
    }

    async delete(req, res) {
        const obj = await commentService.delete(req.params.id)
        if (obj.length) {
            return res.status(200).send(obj[0])
        }
        return res.status(404).send();
    }
}

export default CommentController;