const express = require("express");
const app = express();
const logger = require('./middelwere/logger')
app.use(logger)
console.log(logger);

app.use(express.static(__dirname +'/public'))
const PORT = 5000

app.listen(PORT,(err)=>{
    err? console.log(err) : console.log("server is running");
})