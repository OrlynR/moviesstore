const { Schema, model } = require('mongoose');

const SubscriptionSchema = new Schema({
    type_subcription:{ type:String, required: true },
    amount: { type:Number, required: true}
})

module.exports = model ('Subscription',SubscriptionSchema);