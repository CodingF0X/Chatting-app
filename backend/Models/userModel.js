const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,  
        default:''
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Picture:{
        type:String,
        default:''
    }
},{timestamps:true})

const User = mongoose.model('user',userSchema)

module.exports = User