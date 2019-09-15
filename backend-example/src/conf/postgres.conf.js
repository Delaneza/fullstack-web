import { config as injectEnvriommentsConfig } from 'dotenv';
import { Client } from 'pg';

injectEnvriommentsConfig();

class PostgresConnection {

    constructor() {
        this.client = new Client({
            host: process.env.db_host,
            port: process.env.db_port,
            user: process.env.db_user,
            password: process.env.db_password,
            database: process.env.db_database
        })
    }

    async createConnection() {
        try {
            await this.client.connect();
        } catch (e) {
            console.log(e)
            throw e;
        }
        return this.client;
    }
}

class SingletonConnection {
    constructor() {
        if (!SingletonConnection.instance) {
            SingletonConnection.instance = new PostgresConnection().createConnection();
        }
    }

    async getInstance() {
        return SingletonConnection.instance;
    }
}

export default SingletonConnection;