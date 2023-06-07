const express=require('express')
const newUser=require('../controlers/login')
const userSignin=require('../controlers/signIn')
const router=express.Router()

router.post('/new_login',newUser)
router.post('/sign_in',userSignin)

module.exports=router