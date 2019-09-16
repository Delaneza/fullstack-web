import Client from '../conf/postgres.conf'
import { config as injectEnvriommentsConfig } from 'dotenv';
import fs from 'fs';
import util from 'util';

injectEnvriommentsConfig();

let client = new Client().getInstance();

class SqlQueries {
    constructor() {
        this._waitConnection();
    }

    async genesisTable(res, ) {

        const readFile = util.promisify(fs.readFile);
        const data = await readFile(__dirname + '/tables.sql', 'utf8');
        await client.query(data);
    }

    async getAll(table) {
        return this._mapResponseObject(await client.query(`SELECT * FROM ${table}`));
    }

    async getSingleById(table, id) {
        return this._mapResponseObject(await client.query(`SELECT * FROM ${table} WHERE id= $1`, [id]));
    }

    async getSingleByAttribute(table, atribute, attributeValue) {
        return this._mapResponseObject(await client.query(`SELECT * FROM ${table}`));
    }

    async create(table, requestObj) {
        const obj = this._prepareCreateStatement(table, requestObj);
        return this._mapResponseObject(await client.query(obj.query + 'RETURNING id', obj.values))
    }

    async update(table, requestObj, id) {
        const obj = this._prepareUpdateStatement(table, requestObj);
        obj.values.push(Number(id))
        return this._mapResponseObject(await client.query(obj.query + `WHERE id = $${obj.values.length} RETURNING id`, obj.values))
    }

    async deleteById(table, id) {
        return this._mapResponseObject(await client.query(`DELETE FROM ${table} WHERE id = $1 RETURNING id`, [id]));
    }

    async deleteOnCascade(table, childTableList, paramNameList, id) {
        await this.deleteIndividualItemsFromTable(childTableList[0], paramNameList[0], id)
        console.log('preciso terminar antes')
        await this.deleteIndividualItemsFromTable(childTableList[1], paramNameList[1], id)
        console.log('preciso terminar')
        return this._mapResponseObject(await client.query(`DELETE FROM ${table} WHERE id = $1 RETURNING id`, [id]));
    }

    async deleteIndividualItemsFromTable(childTable, paramName, id) {
        await client.query(`DELETE FROM ${childTable} WHERE ${paramName} = $1`, [id]);
    }

    async _waitConnection() {
        try {
            client = await client;
        }
        catch (e) {
            console.log(e)
            throw e;
        }
    }

    _mapResponseObject(responseObject) {
        let mappedObject = responseObject.rows.map((objectValue) => {
            let propertiesObject = {};
            responseObject.fields.forEach((column) => {
                propertiesObject[column.name] = objectValue[column.name]
            })
            return propertiesObject;
        })
        return mappedObject;
    }

    _prepareCreateStatement(table, requestObj) {
        let queryText = `INSERT INTO ${table}(`;
        let parseAtr = '';
        let valuesStatement = 'VALUES(';
        let values = [];

        Object.keys(requestObj).forEach((key, index) => {
            if (Object.keys(requestObj).length != index + 1) {
                parseAtr += `${key}, `;
                valuesStatement += `$${index + 1}, `;
            } else {
                parseAtr += `${key}, created_at) `;
                valuesStatement += `$${index + 1}, $${index + 2}) `;
            }
            values.push(requestObj[key]);
        })
        values.push(new Date);
        queryText += parseAtr + valuesStatement;

        return {
            query: queryText, values
        }
    }

    _prepareUpdateStatement(table, requestObj) {
        let queryText = `UPDATE ${table} SET `;
        let parseAtr = '';
        let values = [];

        Object.keys(requestObj).forEach((key, index) => {
            if (index === 0) {
                parseAtr += `${key} = $${index + 1} `
            } else {
                parseAtr += `, ${key} = $${index + 1} `
            }
            values.push(requestObj[key]);
        })
        queryText += parseAtr;
        return {
            query: queryText, values
        }
    }
}

export default SqlQueries;