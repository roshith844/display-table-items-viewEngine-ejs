const http = require('http')
const express = require('express')
const app = express()

const info = [
     {
          name: 'roshith',
          age : 23,
          domain: 'MEAN'
     },
     {
          name: 'vahid',
          age : 22,
          domain: 'MERN'
     }
]

app.set('view engine','ejs')
app.get('/', (req,res)=>{
     res.render('home',{info})
})


// server
http.createServer(app).listen(9000,()=>{
     console.log("running")
})
