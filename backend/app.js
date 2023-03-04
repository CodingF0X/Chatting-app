const express = require('express')
const app = express()
const dotEnv = require('dotenv').config()
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

//-- ROUTES --//
const authRoutes = require('./Routes/authRoter')
const userRoutes = require('./Routes/userRouter')
const ConversationRoutes = require('./Routes/conversationRouter')

app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan('common'))


mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI,()=>{
    app.listen(process.env.PORT,()=>{
        console.log('server is up and running')
        console.log('DB is running')
    })
})

app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/chat',ConversationRoutes)

