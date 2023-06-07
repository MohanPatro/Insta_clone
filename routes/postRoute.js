const express=require('express')

const {createNewPost}=require('../controlers/postDetails')

const router=express.Router()

router.post('/createNewPost/:username',createNewPost)

module.exports=router