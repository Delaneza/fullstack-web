import SqlQueries from '../util/sql-queries';

const userQueries = new SqlQueries();
class UserService {
    constructor() {
    }

    async getAll() {
        return await userQueries.getAll('users');
    }

    async getSingle(id) {
        return await userQueries.getSingleById('users', id);
    }

    async create(reqObj) {
        return await userQueries.create('users', reqObj);
    }

    async update(reqObj, id) {
        return await userQueries.update('users', reqObj, id);
    }

    async delete(id) {
        return await userQueries.deleteById('users', id);
    }
}

export default UserService;