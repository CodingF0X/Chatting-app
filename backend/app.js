const express = require('express')
const app = express()
const dotEnv = require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI,()=>{
    app.listen(process.env.PORT,()=>{
        console.log('server is up and running')
        console.log('DB is running')
    })
})
