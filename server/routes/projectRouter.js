const express = require('express');
const router = express.Router();
const  defaultResponse  = require('../services/defaultResponse')
const { Project } = require('../models/entities/MySQL/project');

router.post('/create', (req,res)=>{
    // Todo reload on save
    const data = req.body

    // control
    const name = data.name;
    // const test_cases = 0;
    const org_id = 1; //data.organization_id;
    const icon = data.icon;

    const project = new Project(null, name, 0, org_id, icon);

    project.save()
    .then(([rows, fieldData]) => {

        res.status(200).json({
            sucess: true,
            new_project: rows[0]
        })
    })
    .catch(err => res.json({sucess:false, error:err}));
})

router.get('/getProjects', (req,res)=>{

    // let org_id = req.query.org_id;
    let org_id = 1;

    Project.fetchAll(org_id)
    .then(([rows, fieldData])=>{
        let response = defaultResponse;
        response.content = rows;
        res.send(response);
    })
    .catch(err => res.status(400).send(err));
        
    // let org_id = req.query.org_id;
    // Preject.find({organization_id:org_id}).exec((err, doc)=>{
    //     if(err) return res.status(400).send(err);
    //     let response = defaultResponse;
    //     response.content = doc
    //     res.send(response);
    // })
})

module.exports = router;