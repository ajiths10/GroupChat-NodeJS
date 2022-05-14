const express = require('express');

const router = express.Router();

router.get('/login',(req, res ,next)=>{
console.log('login page')
res.send('<form action="/login" onSubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)"  method="POST"><input type="text" name="username" id="username" placeholder="username"><button type="Submit">submit</button></form>')
});

router.post('/login',(req,  res, next)=>{
    console.log(req.body.username)
    res.redirect("/compose");
})

module.exports = router;