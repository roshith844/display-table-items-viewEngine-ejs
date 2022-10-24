const http = require('http')
const express = require('express')
const app = express()

app.set('view engine','ejs')
app.get('/', (req,res)=>{
     res.render('home')
})

// server
http.createServer(app).listen(9000,()=>{
     console.log("running")
})
