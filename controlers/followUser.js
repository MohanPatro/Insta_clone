const {Sequelize,sequelize}=require('../models/index')
const Following=require('../models/FollowingModel')


const follow=async (req,res)=>{
    try{
        const search=await Following.findAll({where:{
            [Sequelize.Op.and]:{
                userName:req.params.username,
                following:{[Sequelize.Op.contains]:[req.params.user]}
            }
        }})
        if(!search[0]){
            const result=await Following.update({
                'following':sequelize.fn('array_append', sequelize.col('following'),req.params.user)
            },{where:{userName:req.params.username}})
    
            res.send(result)
        }
        else{
            const result=await Following.update({
                'following':sequelize.fn('array_remove', sequelize.col('following'),req.params.user)
            },{where:{userName:req.params.username}})
    
            res.send(result)
        }
        }
       
    catch(error){
        res.send(error)
    }
}

module.exports=follow