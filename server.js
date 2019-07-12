//step1:Include all modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');
const app= express();
const apipizzaRouter=require('./server/api-pizza');
//Step2:configuration to database
mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    () => console.log("Database Connected"),
    (err)=>console.log("Failed to Connect to database")
);
//Step 3: Handling app static resource and api call
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,resp)=>{
    resp.sendFile("index.html");
});
app.use('/pizza',apipizzaRouter);

app.listen(4000,()=>{console.log("Server Listening at 4000")});