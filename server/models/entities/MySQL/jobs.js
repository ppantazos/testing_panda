const db = require('../../../config/db_connection');
// const config = require('../../config/config').get(process.env.NODE_ENV);

class Jobs {
    constructor(id, name, description, ord_id, color){
        this.id = id;
        this.name = name;
        this.description = description;
        this.ord_id = ord_id;
        this.color = color;
    }

    static deleteById(id){
        const query = `DELETE FROM jobs where id=${id}`
        return db.execute(query)
    }

    static fetchAll(org_id){
        const query = `SELECT * FROM jobs where org_id=${org_id}`
        return db.execute(query)
    }

    static findById(id){

    }

    findByName(name, org_id, return_query=false){
        const query = `SELECT id, name, description, org_id, color FROM jobs where org_id=${org_id} and name="${name}"`

        if (return_query){ return query}
        return db.execute(query)
    }

    async save(return_last_insert=true){
        const query = `INSERT INTO jobs (name, description, org_id, color) VALUES (?, ?, ?, ?)`

        await db.execute(query, [this.name, this.description, this.ord_id, this.color])
        .catch(err => console.log(err))

        if (return_last_insert){
            const new_entry_promise = this.findByName(this.name, this.ord_id)
            return new_entry_promise
        }
    }
};

module.exports = { Jobs }