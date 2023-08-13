const express = require ("express")

const fs = require("fs")

const app = express()



app.get("/timestamp", (req,res) => {
let date  = new Date();

const timeStampDate = date.toUTCString().slice(0,-3);

fs.writeFileSync("./current-date-time.txt", timeStampDate, (err)=> {
if(err){
res.send ({message:"error writing timestamp"})
}
})

res.send({timeStamp: timeStampDate})

})

app.listen(9000, ()=> console.log("server started in 9000"))