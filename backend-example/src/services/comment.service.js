import SqlQueries from '../util/sql-queries';

const userQueries = new SqlQueries();
class CommentService {
    async getAll() {
        return await userQueries.getAll('comments');
    }

    async getSingle(id) {
        return await userQueries.getSingleById('comments', id);
    }

    async create(reqObj) {
        return await userQueries.create('comments', reqObj);
    }

    async update(reqObj, id) {
        return await userQueries.update('comments', reqObj, id);
    }

    async delete(id) {
        return await userQueries.deleteById('comments', id);
    }
}

export default CommentService;