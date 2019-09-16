const { Router } = require('express')
const router = Router();

//Add Models
const Subscription = require('../models/Subscription');

//Post Information

router.post('/addInformationSubscription', async(req,res) =>{
    const addInformationSubscription = Subscription(req.body);

    try{
        await addInformationSubscription.save()
        res.json(addInformationSubscription);
    }catch(error){
        console.log("Incorrect Information",error);
    }

});

//Get Information

router.get('/getTypeSubcription/: type_subcription', async (req,res) =>{
    try{
        const getTypeSubcription = await Subscription.find({" type_subcription" : req.params.type_subcription});
        res.json(getTypeSubcription);
    
    }catch(error){

        console.error("Incorrect Information got",error);
    } 

});


//Put Information

router.put('/updateSubcription/:id', async (req,res) =>{
    try{
        await Subscription.findOneAndUpdate(
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
router.delete('/deleteSubcription/:id', async (req,res) =>{
    try{
        await Subscription.remove(
            {"_id" : req.params.id}
        )
        res.send("removesubcription");
    
    }catch(error){

        console.error("it is not possible to delete",error);
    } 

});

module.exports = router;