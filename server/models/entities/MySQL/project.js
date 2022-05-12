const db = require('../../../config/db_connection');
// const config = require('../../config/config').get(process.env.NODE_ENV);

class Project {
    constructor(id, name, test_cases, organization_id, icon){
        this.id = id;
        this.name = name;
        this.test_cases = test_cases;
        this.organization_id = organization_id;
        this.icon = icon;
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