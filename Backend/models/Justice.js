import mongoose from "mongoose";

const JusticeSchema = new mongoose.Schema({
    name:String,
    email:{type:String,required:true,unique:true},
    number:{type:Number,required:true,unique:true}
})

const JusticeModel = mongoose.model("Registrations",JusticeSchema);

export default JusticeModel;

