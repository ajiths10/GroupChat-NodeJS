const express = require('express')
const fs = require('fs')

const router = express.Router();

router.use("/compose",(req, res, next)=>{
    console.log('Compose');
    res.send('<form action="/c" method="POST" ><input type="text" placeholder="Enter the message" name="meassage"><button type="Submit">Submit</button></form>')
})

router.use('/c',(req, res, next)=>{
    console.log(req.body)
    fs.writeFileSync("message.txt", req.body.meassage)
})

module.exports = router;