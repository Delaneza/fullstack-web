import PostService from '../services/post.service';

const postService = new PostService();

class PostController {
    async getAll(req, res) {
        const obj = await postService.getAll();
        if (obj.length) {
            return res.send(obj);
        }
        return res.status(404).send();
    }

    async getSingle(req, res) {
        const obj = await postService.getSingle(req.params.id)
        if (obj.length) {
            return res.send(obj[0]);
        }
        return res.status(404).send();
    }

    async create(req, res) {
        const obj = await postService.create(req.body)
        return res.status(200).send(obj[0]);
    }

    async update(req, res) {
        const obj = await postService.update(req.body, req.params.id)
        if (obj.length) {
            return res.status(200).send(obj[0])
        }
        return res.status(404).send();
    }

    async delete(req, res) {
        const obj = await postService.delete(req.params.id)
        if (obj.length) {
            return res.status(200).send(obj[0])
        }
        return res.status(404).send();
    }
}

export default PostController;