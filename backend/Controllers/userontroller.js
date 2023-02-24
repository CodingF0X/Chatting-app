const User = require("../Models/userModel")

exports.getAllUsers = async (req,res)=>{

    try{

        const user = await User.find()
        res.status(200).json(user)

    }catch(err){
        res.status(400).json({error:err.message})
    }
}