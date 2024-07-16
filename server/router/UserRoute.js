const routerUser = require('express').Router()
const {SignUp , signInUser} = require("../controller/UserController")





routerUser.post('/SignUp',SignUp)
routerUser.post('/signInUser',signInUser)



module.exports = {routerUser}