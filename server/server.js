const express = require('express');
// const bodyParser = require('body-parser');
// const cookie_parser = require('cookie-parser');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

const user = require('./routes/userRouter'); 
const organization = require('./routes/organizationRouter'); 
const project = require('./routes/projectRouter'); 
const job = require('./routes/jobRouter'); 


mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


// app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());


app.use('/api/user', user);
app.use('/api/org', organization);
app.use('/api/project', project);
app.use('/api/job', job);


const port = process.env.PORT || 3001

app.listen(port, ()=>{
    console.log('STARTED')
})