const express = require('express')
const fs = require('fs')

const router = express.Router();
const arr = [];

router.get("/compose",(req, res, next)=>{
    res.send('<form action="/" onSubmit= "document.getElementById(`username`).value=localStorage.getItem(`username`)" method="POST" ><input type="hidden" name="username" id="username"> <input type="text" placeholder="Enter the message" name="meassage"><button type="Submit">Submit</button></form>')
})

router.post('/',(req, res, next)=>{
    arr.push(`{${req.body.username} : ${req.body.meassage}}`)
    // fs.writeFileSync("messagw.txt" , arr)
    console.log(arr);
    res.redirect("/compose");
})

module.exports = router;