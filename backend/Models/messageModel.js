const mongoose = require('mongoose')
const schema = mongoose.Schema

const messageSchema = new schema({
    sender:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    content:{
        type:String,
        trim:true
    },
    chat:{
        type:mongoose.Types.ObjectId,
        ref:'Chat'
    }
},{timestamps:true})

const Message = mongoose.model('message',messageSchema)

module.exports = Message