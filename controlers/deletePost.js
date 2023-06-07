const {Sequelize,sequelize}=require('../models/index')

const post=require('../models/postModel')

module.exports=deletePost=async (req,res)=>{
    const delPostId=req.params.postId;
    newId=delPostId+"backUp"
    const result=await post.update({postId:newId},{where:{postId:delPostId}})
    res.send(result)

}
