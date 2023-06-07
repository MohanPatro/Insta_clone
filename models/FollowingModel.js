const {Sequelize,sequelize}=require('./index')


const Following=sequelize.define('followers',{
    userName:{
        type:Sequelize.DataTypes.STRING
    },
    following:{
        type:Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
        defaultValue:[]
    }
},{
    freezeTableName:true,
    timestamps:false
})


Following.sync()

module.exports=Following