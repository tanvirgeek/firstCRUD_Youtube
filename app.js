const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Edureka",{ useNewUrlParser: true} , (error)=>{
    if(!error){
        console.log("success")
    }
    else{
        console.log("error connecting to database")
    }

})