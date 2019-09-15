import SqlQueries from '../util/sql-queries';

const userQueries = new SqlQueries();

class IndexController {
    getDefault(_, res) {
        return res.send('Hello World!');
    }

    async genesisDatabase(_, res) {
        try {
            await userQueries.genesisTable(res);
            res.status(200).send('OK')
        } catch (e) {
            console.log(e)
            res.status(500).send(e);
        }
    }
}

export default IndexController;
