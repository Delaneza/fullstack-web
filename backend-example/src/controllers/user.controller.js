import UserService from '../services/user.service';

const userService = new UserService();

class UserController {

    constructor() {
    }

    async getAll(req, res) {
        const obj = await userService.getAll();
        res.send(obj);
    }

    async getSingle(req, res) {
        const obj = await userService.getSingle(req.params.id)
        res.send(obj[0]);
    }

    async create(req, res) {
        const obj = await userService.create(req.body)
        res.send(obj[0]);
    }

    async update(req, res) {
        const obj = await userService.update(req.body, req.params.id)
        res.send(obj[0]);
    }

    async delete(req, res) {
        const obj = await userService.delete(req.params.id)
        res.send(obj);
    }
}

export default UserController;