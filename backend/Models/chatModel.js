//chat name
//isGroupchat
// users
// latestMessages
// groupAdmin
const mongoose = require('mongoose')
const schema = mongoose.Schema

const chatSchema = new schema({
    chatName:{
        type:String,
        trim:true
    },
    isGroupChat:{
        type:Boolean,
        default:false
    },
    users:[{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }],
    latestMessages:{
        type:mongoose.Types.ObjectId,
        ref:'Message'
    },
    groupAdmin:{
        type:mongoose.Types.ObjectId,
        default:'User'
    }
},{timestamps:true})

const Chat = mongoose.model('chat',chatSchema)
module.exports = Chat