const express=require('express')

const router=express.Router()
const follow=require('../controlers/followUser')

router.get('/following/:username/:user',follow)

module.exports=router