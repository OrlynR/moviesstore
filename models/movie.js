const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
    title:{ type:String, required: true },
    autor:{ type:String, required: true },
    year:{type:Number, required: true},
    category:{type: Array, required: true},
    time:{type: time, required: true},
    languague:{type:String, required:true},
    subtitle:{type: String, required:true},
    dubbing:{type: String, required: true},
    image:{type:String, required: true},

})

module.exports = model ('Movie', MovieSchema);