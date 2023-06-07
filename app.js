const express=require('express')
const app=express()
const {Sequelize,sequelize}=require('./models/index')




app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(__dirname+'/my_home_page'))
app.set('view engine','ejs')

const userDetailsRouter=require('./routes/siginLoginPage')
const userPostDetailsRouter=require('./routes/postRoute')
const postDeleteRouter=require('./routes/deletePostRoutes')
const likePostRouter=require('./routes/likesRouter')
const followUserRouter=require('./routes/followUserRoute')
const getAllPostsRouter=require('./routes/getAllPostsRouter')
const homePageRoute=require('./routes/homepageRoute')

app.use(homePageRoute)
app.use(userDetailsRouter)
app.use(userPostDetailsRouter)
app.use(postDeleteRouter)
app.use(likePostRouter)
app.use(followUserRouter)
app.use(getAllPostsRouter)


app.listen(9000,()=>{
    console.log("the app is listening on the port number 5000")
})