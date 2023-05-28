if(process.env.NODE_ENV!=="production"){
    require("dotenv").config()
}

const express=require("express")
let app=express()
const mongoose=require("mongoose")
const blogRouter=require("./routes/blogRouter")
const methodOverride=require("method-override")

//register template engine
app.set("view engine","ejs")

app.use(express.static("public"))

//mongo db connection

async function db(){
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB Connected");
}
db()

//inbuilt middleware
app.use(express.urlencoded({extended:false}))

app.use(methodOverride("_method"))

app.use(blogRouter)

app.use((req,res)=>{
    res.render("404")
})




app.listen(process.env.PORT,(err)=>{
    if(err) console.log(err);
    console.log(`Server is running on ${process.env.PORT}`);
})