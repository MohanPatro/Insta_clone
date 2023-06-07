const {Sequelize,sequelize}=require('../models/index')
const post=require('../models/postModel')

const createNewPost=async (req,res)=>{
    try{
        const newPost=req.body.text;

        const {username}=req.params
        console.log(username)
        const date=new Date()
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 10;
        var post_id = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            post_id += chars.substring(randomNumber, randomNumber +1);
           }
        
        const result=await post.create({
            postId:post_id,
            userName:username,
            postContent:newPost,
            createdAt:new Date(),
            likes:0
        })
        res.send(result)
    }
    catch(error){
        res.send("something went wrong")
        console.log(error)
    }

}


module.exports={createNewPost}