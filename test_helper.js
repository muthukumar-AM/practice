const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1/employee_test");
console.log("db");
mongoose.connection
.once("open",()=>console.log("connected.."))
.on("error",(error)=>{
    console.log("Not connected..",error)
})