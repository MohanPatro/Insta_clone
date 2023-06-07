const {Sequelize,sequelize}=require('../models/index')
const Like=require('../models/LikeModel')

const likePost=async (req,res)=>{

    const user=req.params.username
    const likedPostId=req.params.postId
    const search=await Like.findAll({where:{[Sequelize.Op.and]:{
        postId:likedPostId,
        likedBy:user
    }}})
    console.log(search)
    if(!search[0]){
        const newLike=await Like.create({
            postId:likedPostId,
            likedBy:user,
            liked:1
        })
        res.status(200).send(newLike)
    }
    else{
        const disLike=await Like.destroy({where:{[Sequelize.Op.and]:{
            postId:likedPostId,
            likedBy:user
        }}})

        res.send("deleted")

    }
}

module.exports=likePost;