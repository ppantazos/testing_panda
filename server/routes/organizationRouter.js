const express = require('express');
const router = express.Router();

const { Organization } = require('../models/entities/Mongo/organization');


router.post('/create', (req,res)=>{

    const org = new Organization(req.body);

    org.save((err, doc) => {
         if (err ) return res.json({sucess:false})
         res.status(200).json({
             sucess: true,
             user: doc 
         })
     })
})

module.exports = router;