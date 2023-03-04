//chat name
//isGroupchat
// users
// latestMessages
// groupAdmin
const mongoose = require('mongoose')
const schema = mongoose.Schema

const chatSchema = new schema({
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    firstMessage:{
        type:String,
        trim:true,
        required:true
    },
    latestMessages:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'message'
    }
},{timestamps:true})

const Chat = mongoose.model('chat',chatSchema)
module.exports = Chat