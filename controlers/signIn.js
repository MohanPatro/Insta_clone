const {Sequelize,sequelize}=require('../models/index')
const User=require('../models/UserModel')
const Like=require('../models/LikeModel')
const post=require('../models/postModel')
const Following=require('../models/FollowingModel')

const userSignin=async (req,res)=>{
    try{
        const username=req.body.username
        const pass=req.body.password
        const userDetails=await User.findOne({where:{userName:{[Sequelize.Op.eq]:username}}})
       
        if(!userDetails){
            res.json({'status':200,msg:" user doesnt exists"})
        }

        else{
            if(userDetails.password==pass)
            {                
                const allPosts=await post.findAll({where:{'postId':{[Sequelize.Op.notLike]:'%backUp'}}})
                const likes=await Like.findAll({attributes:['postId',[sequelize.fn('sum',sequelize.col('liked')),'liked']],group:'postId'})
                const follow=await Following.findOne({attributes:['following'],where:{userName:username}})
                const followers=await Following.findAll({attributes:['userName'],where:{following:{[Sequelize.Op.contains]:[username]}}})
                
                 res.render('../my_home_page/posts',{'posts':allPosts,"likes":likes,"username":username,'follow':follow,'followers':followers})
                 
            }
            else{
                res.json({'status':200,msg:"wrong password"})
            }
        }
    }

    catch(error){
        res.status(500).json({msg:error})
    }

}

module.exports=userSignin