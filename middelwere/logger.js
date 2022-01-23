let date = new Date();
let hours = date.getHours();
console.log(hours)
let days = date.getDay()
console.log(days);
const logger =(req, res, next)=>{
    if(hours > 8 && hours < 17 && days >0 && days <6 ){
        next()
    }else{
        res.send('<h1>sorry we are closed</h1>')
    }
}
module.exports = logger;