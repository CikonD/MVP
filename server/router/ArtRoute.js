const routerArt = require('express').Router()
const {PostArt,FindArtByUser,GetAllArt} = require("../controller/ArtController")








routerArt.post("/PostArt",PostArt)
routerArt.get("/FindArtByUser",FindArtByUser)
routerArt.get("/GetAllArt",GetAllArt)



module.exports = {routerArt}
