const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const defaultResponse = require('../services/defaultResponse');
// const request = require('supertest');

const { User } = require('../models/entities/Mongo/users');
const { orgUser } = require('../models/entities/Mongo/org_users');
const { Job } = require('../models/entities/Mongo/job');

router.post('/addOrgUser', (req, res) => {
    data = req.body
    let job_ids = []
    data.jobs.map(job=>{
        job_ids.push(mongoose.Types.ObjectId(job))
    })
    let user_info={
        org_id: data.org_id,
        user_id: data.user_id,
        jobs: job_ids,
        is_admin: data.is_admin
    }
    const org_user = new orgUser(user_info);

    org_user.save((err, doc) => {
        if (err ) return res.json({sucess:false, reason: err})
        res.status(200).json({
            sucess: true,
            _id: doc._id,
            new_user: {
                org_id: doc.org_id,
                is_admin: doc.is_admin,
                jobs: doc.jobs,
                teams: doc.teams
            } 
        })
     })
})

router.get('/getOrgUsersInfo', async (req, res) => {
    let org_id = req.query.org_id; //6070a196588a413f5c257290
    
    const users = await orgUser.aggregate([
        {
            $lookup:{
                from: 'users',
                localField: 'user_id',
                foreignField: '_id', 
                as: 'user_info'
            }
        },
        {
            $match:{
                $and:[{org_id: mongoose.Types.ObjectId(org_id)}]
            }
        },
        {
            $project:{
                "user_info.password": 0
            }
        }
    ])

    
    let temp_user = {};
    let info = [];

    // replace this with single query get job once, 
    //then replace the ids of the job in the user with the doc 
    users.forEach( user => {
        Job.find({ _id: { $in: user.jobs }})
        .exec((err, doc) => {
                if (err){res.json({sucess:false, reason: err})}
                temp_user = {
                    user_info: user.user_info[0],
                    is_admin: user.is_admin,
                    user_jobs_info: doc
                };

                info.push(temp_user);
            })
    })

    setTimeout(function() {
        defaultResponse.content = info
        res.status(200).send(defaultResponse)
    }, 500);
    
})

router.post('/register', (req,res)=>{

    const user = new User(req.body);

    user.save((err, doc) => {

        if (err ) return res.json({sucess:false, reason: err})
        res.status(200).json({
            sucess: true,
            user: doc 
        })
     })
})

module.exports = router;

router.delete('/deleteOrgUser', (req,res)=>{
    let id = mongoose.Types.ObjectId(req.query.user_id);

    orgUser.findOneAndRemove({user_id: id}, (err,doc)=>{

        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

router.put('/updateOrgUser', (req, res)=> {
    orgUser.findByIdAndUpdate(req.body._id, req.body, {upsert:true}, (err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

router.put('/updateUser', (req, res)=> {
    User.findByIdAndUpdate(req.body._id, req.body, {upsert:true}, (err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})