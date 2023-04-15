const assert=require('assert');
const employee=require("../src/employees")

describe("create the first data ",()=>{
    it("save the employee",()=>{
        const data=new employee({name:"Muthu"});
        data.save()
    })
})