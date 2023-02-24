const jwt = require('jsonwebtoken')

const requireAuth = async (req,res,next)=>{
    const { authorization } = req.headers
    console.log(authorization)
    if(!authorization)
        return res.status(400).json({error:'auth token required'})

    const token = authorization.split(' ')[1]

    try{
        let decodedData;
        if(token){
            decodedData = jwt.verify(token,process.env.SECRET)
            req.userId = decodedData?._id
        }
        next()
    }catch(err){
        res.status(400).json({error:err.message})
    }
}