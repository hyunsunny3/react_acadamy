const rtn = require("./export03.js"); 
/*
    rtn = {
        a : 1,
        b : 2,
        add : function()
    }
*/
console.log("a : ",rtn.a);
console.log("b : ",rtn.b);
console.log("add : ",rtn.add(rtn.a,rtn.b));