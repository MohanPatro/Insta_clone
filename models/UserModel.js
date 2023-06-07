const {Sequelize,sequelize}=require('./index')


const User=sequelize.define('users',{
    user_id:{
        primaryKey:true,
        type:Sequelize.DataTypes.INTEGER,
        autoIncrement:true
    },
    userName:{
        type:Sequelize.DataTypes.STRING
    },
    password:{
        type:Sequelize.DataTypes.STRING

    }
},{
    freezeTableName:true,
    timestamps:false
})

User.sync()

module.exports=User


