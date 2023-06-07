const express=require('express')

const router=express.Router()
const {login,signin}=require('../controlers/homePage')

router.get('/login',login)

router.get('/signin',signin)

module.exports=router