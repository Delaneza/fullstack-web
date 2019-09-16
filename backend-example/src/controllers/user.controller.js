import UserService from '../services/user.service';

const userService = new UserService();

class UserController {
    async getAll(req, res) {
        const obj = await userService.getAll();
        if (obj.length) {
            return res.send(obj);
        }
        return res.status(404).send();
    }

    async getSingle(req, res) {
        const obj = await userService.getSingle(req.params.id)
        if (obj.length) {
            return res.send(obj[0]);
        }
        return res.status(404).send();
    }

    async create(req, res) {
        const obj = await userService.create(req.body)
        return res.status(200).send(obj[0]);
    }

    async update(req, res) {
        const obj = await userService.update(req.body, req.params.id)
        if (obj.length) {
            return res.status(200).send(obj[0])
        }
        return res.status(404).send();
    }

    async delete(req, res) {
        const obj = await userService.delete(req.params.id)
        if (obj.length) {
            return res.status(200).send(obj[0])
        }
        return res.status(404).send();
    }
}

export default UserController;