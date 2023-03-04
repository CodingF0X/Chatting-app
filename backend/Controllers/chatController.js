const Chat = require("../Models/chatModel")
const Message = require("../Models/messageModel")

exports.createChat = async (req,res)=>{
    const sender = req.body.senderId
    const reciever = req.body.recieverId
    try{
        const newChat = await new Chat()
        const msg = await Message.create({
            sender: sender,
            content: req.body.message,
            chat: newChat._id
        })

        newChat.users = [sender,reciever],
        newChat.firstMessage = req.body.message,
        newChat.latestMessages =  msg._id
        newChat.save()

       

        res.status(200).json(newChat)


    }catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.getAllChats = async (req,res)=>{

    try{

        

    }catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.getSingleChat = async (req,res)=>{
    const {userId} = req.params
    try{
        // const msg = await Message.find()
        const singleChat = await Chat.findOne({
            users:{ $in:[userId] },
        }).populate({path:'latestMessages',select:'content'}).sort({'updatedAt': -1})

        res.status(200).json(singleChat)        

    }catch(err){
        res.status(400).json({error:err.message})

    }
}

exports.sendMessage = async (req,res)=>{
    // const userId = req.userId
    try{
        const chat =  await Chat.findOne({
            users:{$in:[req.body.sender]}
        })
        
        const message = await Message.create({
            sender: req.body.sender,
            content: req.body.content,
            chat: chat._id
        })
          await chat.updateOne({
            latestMessages:message._id
        },{new:true})

        res.status(200).json(message)

    }catch(err){
        res.status(400).json({error:err.message})

    }
}

exports.getAllMessages = async (req,res)=>{
    const {chatId} = req.params 
    try{

        const messages = await Message.find({chatId})
        res.status(200).json(messages)

    }catch(err){
        res.status(400).json({error:err.message})
    }
}



