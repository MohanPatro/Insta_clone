const {Sequelize,sequelize}=require('../models/index')
const User=require('../models/UserModel')
const Like=require('../models/LikeModel')
const post=require('../models/postModel')


const newUser=async (req,res)=>{
   try
   {
    const username=req.body.username
    const pass=req.body.pass


  const result= await User.findAll({where:{userName:username}})


    if(result[0]){
        console.log("user aleady exists")
        res.json({status:200,msg:"user already exists"})
    }

    else{
        const newUser=await User.create(
            {
                userName:username,
                password:pass
            }

        )
                     
        const allPosts=await post.findAll({where:{'postId':{[Sequelize.Op.notLike]:'%backUp'}}})
        const likes=await Like.findAll({attributes:['postId',[sequelize.fn('sum',sequelize.col('liked')),'liked']],group:'postId'})
        const follow=await Following.findOne({attributes:['following'],where:{userName:username}})
        const followers=await Following.findAll({attributes:['userName'],where:{following:{[Sequelize.Op.contains]:[username]}}})
        
         res.render('../my_home_page/posts',{'posts':allPosts,"likes":likes,"username":username,'follow':follow,'followers':followers})
         
    }
   }
   catch(error){
    res.json({msg:error})
   }
}

module.exports=newUser

