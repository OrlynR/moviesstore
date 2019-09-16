const { Schema, model } = require('mongoose');

const SignupSchema = new Schema({
    user:{ type:String, required: true },
    password:{ type:Number, required: true },
    phone:{type: Number , required:true},
})

module.exports = model ('Signup', SignupSchema);