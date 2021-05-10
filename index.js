// require modules /librery
const express = require ('express')
const mongoose = require('mongoose')
const router = require('./routes/routes')
const expressVaidator = require('express-validator')
const cors = require('cors')
const path = require('path')
const { Router } = require('express')
const url = "mongodb://localhost:27017/EmpDB"
//app constants
const app = express()
const port = '8080'

// console.log(__dirname, '../Employee_Payroll_WebApp/Employee Payroll App');
// const staticPath = path.join(__dirname, '../Employee_Payroll_WebApp/Employee Payroll App')
// app.use(express.static(staticPath))
//routs(add ad get employee)

app.use(express.json())
app.use(expressVaidator())
app.use(cors())
app.use('', router)
// app.get("/page", (request, response) => {
//     response.status(200).send("server running");
// })  

const client = mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false})
    .then(console.log("Connected successfully in database..."))
    .catch(err =>{
        console.log('Disconnected ', err);
    })
console.log("Server test", client);

// config(mongo db configaration)


// server activation
app.listen(port, () => {
    console.log(`listen to requests on port on http://localhost:${port}`);
})