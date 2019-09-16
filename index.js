const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//Initialization 
const app = express();
require('./db')

//Tools
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

//routes

app.use(require('./routes/routes'))



//start the server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});