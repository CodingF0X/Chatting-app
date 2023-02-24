const User = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createToken = (id)=>{
   return jwt.sign({id},process.env.SECRET,{expiresIn:'1h'})
}

//-- USER SIGNUP --//
exports.userSignUp = async (req,res)=>{
    const { firstName, lastName, email, password } = req.body
    const  uniq = '_ID' + (new Date()).getTime()
    const  isExists = await User.findOne({email})

    try{
        if(isExists){
          return  res.status(500).json({error:'Email already registered'})
        }

        const salt = await bcrypt.genSalt()
        const hashPwd = await bcrypt.hash(password,salt)

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password:hashPwd,
            userName : `${firstName} ${lastName}${uniq}`
        }) 

        const token = createToken(newUser._id)
            
        res.status(200).json({result:newUser, token})

    }catch(err){
        res.status(400).json({error:err.message})
    }
}

//-- USER SIGNIN --//
exports.userSignIn = async (req,res)=>{
    const { email, password } = req.body
    const user = await User.findOne({email})

    try{
        if(!user){
            return res.status(500).json({error:'User does`nt exist'})
        }

        const auth = await bcrypt.compare(password,user.password)
        if(!auth){
            return res.status(500).json({error:'Incorrect password'})
        }

        const token = createToken(user._id)
        res.status(200).json({result:user, token})

    }catch(err){
        res.status(400).json({error:err.message})
    }
}