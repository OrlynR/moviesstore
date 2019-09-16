const { Schema, model } = require('mongoose');

const LoginSchema = new Schema({
    user:{ type:String, required: true },
    password:{ type:Number, required: true },
    role:{type:Array, required: true},
    login_date:{type: Date, required: true},
    last_date:{type: Date, required: true},
    status:{type: Array, required:true},
    phone:{type: Number , required:true},
    profile_photo:{type: String, required: true},

})

module.exports = model ('Login', LoginSchema);