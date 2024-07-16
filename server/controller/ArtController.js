
const { where } = require('sequelize');
const {db}=require('../database/sequelize/index')




const PostArt =async(req,res)=>{
try {
    await db.Art.create({
        imageUrl:req.body.imageUrl,
        userid:req.body.userid,
    })
    res.send("New Art is Added")
} catch (error) {
    console.log(error);
    
}
}
const FindArtByUser =async(req,res)=>{
    try {
       const foundData= await db.Art.findAll({where:{userid:req.body.userid}})
        res.send(foundData)
    } 
    catch (error) {
        console.log(error);
    }
    }

   const GetAllArt = async(req,res)=>{
        try {
           const allData= await db.Art.findAll()
            res.send(allData)
        } 
        catch (error) {
            console.log(error);
        }
        }




module.exports = {PostArt,FindArtByUser,GetAllArt}