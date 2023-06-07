const {Sequelize,sequelize}=require('./index')

const post=sequelize.define('post',{
    postId:{
        type:Sequelize.DataTypes.STRING,
        primaryKey:true,


    },
    userName:{
        type:Sequelize.DataTypes.STRING
      
        
    },
    postContent:{
        type:Sequelize.DataTypes.STRING
        
    },
    createdAt:{
        type:Sequelize.DataTypes.DATE,
    },

    likes:{
        type:Sequelize.DataTypes.INTEGER
    }
},{
    freezeTableName:true,
    timestamps:false
})


post.sync()

module.exports=post