const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')); // serving static file
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine','pug'); // set template engine as pug
app.set('views',path.join(__dirname,'views')) ;// set the views directory

// ENDPOINTS
app.get('/',(req,res)=>{
    const con = "this is the best content";
    const params = {'title':'pug is the best','content':con};
    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.Gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of client is ${name},${age} years old,${gender},residing at ${address}.More about ${name} is ${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const param = {'message':'Your form has been submitted successfully'}
    res.status(200).render('index.pug',param);
})


// start server
app.listen(port,()=>{
    console.log(`the app started successfully on port ${port} `);
})