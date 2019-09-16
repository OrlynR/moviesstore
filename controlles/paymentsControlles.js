const { Router } = require('express')
const router = Router();

//Add Models
const Payments = require('../models/Payments');

//Post Information

router.post('/addInformationPayments', async(req,res) =>{
    const addInformationPayments = Payments(req.body);

    try{
        await addInformationPayments.save()
        res.json(addInformationPayments);
    }catch(error){
        console.log("Incorrect Information",error);
    }

});

//Get Information

router.get('/getPayments/:card_type', async (req,res) =>{
    try{
        const getPayments = await Payments.find({"card_type" : req.params.card_type});
        res.json(getPayments);
    
    }catch(error){

        console.error("Incorrect Information got",error);
    } 

});


//Put Information

router.put('/updatePayments/:id', async (req,res) =>{
    try{
        await Payments.findOneAndUpdate(
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
router.delete('/deletePayments/:id', async (req,res) =>{
    try{
        await Payments.remove(
            {"_id" : req.params.id}
        )
        res.send("removepaymets");
    
    }catch(error){

        console.error("it is not possible to delete",error);
    } 

});

module.exports = router;