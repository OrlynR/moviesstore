const { Router } = require('express')
const router = Router();

//Add Models
const Login = require('../models/Login');

//Post Information

router.post('/addInformationLogin', async(req,res) =>{
    const addInformationLogin = Login(req.body);

    try{
        await addInformationLogin.save()
        res.json(addInformationLogin);
    }catch(error){
        console.log("Incorrect Information",error);
    }

});

//Get Information

router.get('/getLoginDate/:login_date', async (req,res) =>{
    try{
        const getLoginDate = await Signup.find({"login_date" : req.params.login_date});
        res.json(getLoginDate);
    
    }catch(error){

        console.error("Incorrect Information got",error);
    } 

});

//Get Information

router.get('/getLastDate/:last_date', async (req,res) =>{
    try{
        const getLastDate = await Login.find({"last_date" : req.params.last_date});
        res.json(getLastDate);
    
    }catch(error){

        console.error("Incorrect Information got",error);
    } 

});

//Put Information

router.put('/updateLogin/:id', async (req,res) =>{
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
router.delete('/deleteLogin/:id', async (req,res) =>{
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