const express=require('express')

const router=express.Router()
const likePost=require('../controlers/likes')
router.get('/likePost/:postId/:username',likePost)

module.exports=router