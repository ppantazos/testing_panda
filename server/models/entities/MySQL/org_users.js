const db = require('../../../config/db_connection');
// const config = require('../../config/config').get(process.env.NODE_ENV);

class Users {
    constructor(id, org_id, user_id, role, job_id){
        this.id = id;
        this.org_id = org_id;
        this.user_id = user_id;
        this.role = role;
        this.job_id = job_id;
    }

    static deleteById(id){

    }

    static fetchAll(org_id){
        const query = `SELECT * FROM projects where organization_id=${org_id}`
        return db.execute(query)
    }

    static findById(id){

    }

    findByName(name, org_id, return_query=false){
        const query = `SELECT id, name, test_cases, organization_id, icon FROM projects where organization_id=${org_id} and name="${name}"`

        if (return_query){ return query}
        return db.execute(query)
    }

    async save(return_last_insert=true){
        const query = `INSERT INTO projects (name, organization_id, icon) VALUES (?, ?, ?)`
        
        await db.execute(query, [this.name, this.organization_id, this.icon])
        .catch(err => console.log(err))
        
        if (return_last_insert){
            const new_entry_promise = this.findByName(this.name, this.organization_id)
            return new_entry_promise
        }
    }
};

module.exports = { Project}