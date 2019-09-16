const { Schema, model } = require('mongoose');

const HistorySchema = new Schema({
    user:{ type:String, required: true },
    title:{ type:String, required: true },
    start_date:{type: Date, required: true},
    play_date:{type:Date, required: true},
    status:{type:Array, required:true}
})

module.exports = model ('History', HistorySchema);