const Sequelize=require('sequelize')

const sequelize=new Sequelize('postgressdatabase','postgres','AMma@143',{
    dialect:'postgres'
})

module.exports={Sequelize,sequelize}