const moongose=require('mongoose');
const schema=moongose.Schema;

const empSchema=new schema({
    name:String
})

const employee=moongose.model("employee", empSchema);

module.exports=employee;