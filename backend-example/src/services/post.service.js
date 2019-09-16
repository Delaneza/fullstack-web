import SqlQueries from '../util/sql-queries';

const userQueries = new SqlQueries();
class PostService {
    async getAll() {
        return await userQueries.getAll('posts');
    }

    async getSingle(id) {
        return await userQueries.getSingleById('posts', id);
    }

    async create(reqObj) {
        return await userQueries.create('posts', reqObj);
    }

    async update(reqObj, id) {
        return await userQueries.update('posts', reqObj, id);
    }

    async delete(id) {
        return await userQueries.deleteOnCascade('posts', ['comments'], ['post_id'], id);
    }
}

export default PostService;