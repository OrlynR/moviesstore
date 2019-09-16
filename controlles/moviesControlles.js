const { Router } = require('express')
const router = Router();

//Add Models
const Movie = require('../models/Movie');

//Post Information

router.post('/addInformationMovie', async(req,res) =>{
    const addInformationMovie = Movie(req.body);

    try{
        await addInformationMovie.save()
        res.json(addInformationMovie);
    }catch(error){
        console.log("Incorrect Information",error);
    }

});

//Get Information
router.get('/getbycategory/:category', async (req,res) =>{
    try{
        const getbycategory = await Movie.find({"category" : req.params.category});
        res.json(getbycategory);
    
    }catch(error){

        console.error("Incorrect Information got",error);
    } 

});

//Put Information

router.put('/updateMovie/:id', async (req,res) =>{
    try{
        await Movie.findOneAndUpdate(
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
router.delete('/deleteMovie/:id', async (req,res) =>{
    try{
        await Movie.remove(
            {"_id" : req.params.id}//Es como lo encontramos
        )
        res.send("removeMovie");
    
    }catch(error){

        console.error("it is not possible to delete",error);
    } 

});

module.exports = router;