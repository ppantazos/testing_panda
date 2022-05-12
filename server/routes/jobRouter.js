const express = require('express');
const router = express.Router();
const defaultResponse = require('../services/defaultResponse')
const { Job } = require('../models/entities/Mongo/job');
const { Jobs } = require('../models/entities/MySQL/jobs');

router.post('/create', (req,res)=>{

    const data = req.body

    // control
    const name = data.name;
    const desc = data.description;
    // const test_cases = 0;
    const org_id = data.org_id; //data.organization_id;
    const color = data.color;
    
    const jobs = new Jobs(null, name, desc, org_id, color);
    jobs.save()
    .then(([rows, fieldData]) => {

        res.status(200).json({
            sucess: true,
            new_job: rows[0]
        })
    })
})

router.delete('/deleteJob', (req, res)=>{
    const job_id = req.query.job_id;
    Jobs.deleteById(job_id)
    .then(([rows, fieldData])=>{
        let response = defaultResponse;
        response.content = rows;
        console.log(rows)
        res.send(response);
    })
    .catch(err => res.status(400).send(err));
})

router.get('/getJobs', (req,res)=>{
    let org_id = 1;
    // let org_id = req.query.org_id;

    Jobs.fetchAll(org_id)
    .then(([rows, fieldData])=>{
        let response = defaultResponse;
        response.content = rows;
        res.send(response);
    })
    .catch(err => res.status(400).send(err));
})

router.put('/updateJob', (req, res)=>{
    const update_job = {
        name: req.body.name,
        color: req.body.color,
        description: req.body.description
    }

    Job.findByIdAndUpdate(req.body._id, update_job, {upsert:true}, (err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

module.exports = router;