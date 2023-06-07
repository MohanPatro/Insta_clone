const express=require('express')


const router=express.Router()

const showAllPosts=require('../controlers/showAllPosts')

router.get('/getUser/:user',showAllPosts)



module.exports=router


