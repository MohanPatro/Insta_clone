const express=require('express')

const router=express.Router();

const deletePost=require('../controlers/deletePost')
router.get('/deletePost/:postId',deletePost)

module.exports=router