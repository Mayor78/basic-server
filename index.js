// import require module
const express = require('express');

// storing port in variable

const port =  8000

// create an express application
const app = express();

// define a route handler for the root path
app.get('/',(req,res)=>{
res.send('welcome to my home page')
})


app.get('/about' ,(req,res)=>{
    res.send('about page')
    

})

app.get('/contact' ,(req,res)=>{
    res.send('contact page')
})

app.get('/submit' ,(req,res)=>{
    res.send('sumit page')
})
// start the server

app.listen(port,()=>{
    console.log('server started successfully')
})
