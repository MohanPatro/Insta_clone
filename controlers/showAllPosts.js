const Following = require('../models/FollowingModel')
const {Sequelize,sequelize}=require('../models/index')
const Like=require('../models/LikeModel')
const post=require('../models/postModel')



const showAllPosts=async (req,res)=>{
    const username=req.params.user
    const allPosts=await post
        .findAll({where:{[Sequelize.Op.and]:{'postId':{[Sequelize.Op.notLike]:'%backUp'},'userName':username}}})
    const likes=await Like
        .findAll({attributes:['postId',[sequelize.fn('sum',sequelize.col('liked')),'liked']],group:'postId'})
    const follow=await Following.findOne({attributes:['following'],where:{userName:username}})
  
    const followers=await Following.findAll({attributes:['userName'],where:{following:{[Sequelize.Op.contains]:[username]}}})
                
    res.render('../my_home_page/posts',{'posts':allPosts,"likes":likes,"username":username,'follow':follow,'followers':followers})
}
module.exports=showAllPosts;