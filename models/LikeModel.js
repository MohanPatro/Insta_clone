const {Sequelize,sequelize}=require('./index')


const Like=sequelize.define('likes',{
    postId:{
        type:Sequelize.DataTypes.STRING

    },
    likedBy:{
        type:Sequelize.DataTypes.STRING
      
        
    },
    liked:{
        type:Sequelize.DataTypes.INTEGER
    }
},{
    freezeTableName:true,
    timestamps:false
})


Like.sync()

module.exports=Like