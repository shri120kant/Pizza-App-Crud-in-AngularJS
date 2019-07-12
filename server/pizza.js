const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var Pizza=new Schema({
    pizzaId:{
        type:Number
    },
    pizzaName:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    pizzaVegNonveg:{
        type:String
    }
},{
    collection: 'pizza'
});
module.exports=mongoose.model("Pizza",Pizza);