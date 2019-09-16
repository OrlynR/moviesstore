const { Router } = require('express')
const router = Router();

//Add Models
const Signup = require('../models/Signup');

//Post Information

router.post('/addInformation', async(req,res) =>{
    const addInformation = Signup(req.body);

    try{
        await addInformation.save()
        res.json(addInformation);
    }catch(error){
        console.log("Incorrect Information",error);
    }

});

//Get Information
router.get('/getbyuser/:user', async (req,res) =>{
    try{
        const getByUser = await Signup.find({"user" : req.params.user});
        res.json(getByUser);
    
    }catch(error){

        console.error("Incorrect Information got",error);
    } 

});

//Put Information

router.put('/update/:id', async (req,res) =>{
    try{
        await Signup.findOneAndUpdate(
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
router.delete('/delete/:id', async (req,res) =>{
    try{
        await Signup.remove(
            {"_id" : req.params.id}//Es como lo encontramos
        )
        res.send("removeuser");
    
    }catch(error){

        console.error("it is not possible to delete",error);
    } 

});

module.exports = router;