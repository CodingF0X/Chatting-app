const User = require("../Models/userModel")

exports.searchUsers = async (req,res)=>{
    const {type,query} = req.body.searchTerm
    const searchTerm = query ? new RegExp(query) : ' '
    try{

        switch(type){
            case 'profile':{
                const users = User.aggregate([{
                    $match:{
                        $or:[{
                            'firstName':{$regex:searchTerm, $options:'i'}
                            },
                            {
                                'lastName':{$regex:searchTerm, $options:'i'}
                            }
                    ]
                    }
                }])
                res.status(200).json({users:users})
                break;
            }
        }

    }catch(err){
        res.status(500).json({error:err.message})
    }
}