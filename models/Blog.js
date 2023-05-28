const {Schema,model}=require("mongoose")

let blogSchema=new Schema({
    title:{
        type:String,
        require:true,
        trim:true
    },
    snippet:{
        type:String,
        require:true,
        trim:true
    },
    body:{
        type:String,
        require:true,
        trim:true
    }
},{timestamps:true})

module.exports=model("blog",blogSchema)