const { Router } = require('express')
const router = Router();

//Add Models
const History = require('../models/History');

//Get Information
router.get('/getbystatus/:status', async (req,res) =>{
    try{
        const getbystatus = await Movie.find({"status" : req.params.status});
        res.json(getbystatus);
    
    }catch(error){

        console.error("Incorrect Information got",error);
    } 

});

//Put Information

router.put('/updateHistory/:id', async (req,res) =>{
    try{
        await History.findOneAndUpdate(
            {"_id" : req.params.id},
            req.body,
            {new:true}
        )
        res.send("Change added");
    
    }catch(error){

        console.error("Incorrect Change",error);
    } 
});

//Delete Information
router.delete('/deleteHistory/:id', async (req,res) =>{
    try{
        await History.remove(
            {"_id" : req.params.id}//Es como lo encontramos
        )
        res.send("removeHistory");
    
    }catch(error){

        console.error("it is not possible to delete",error);
    } 

});

module.exports = router;