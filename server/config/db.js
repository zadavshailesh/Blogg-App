const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Database connected SuccessFully!!");
}).catch((err)=>{
    console.log("error");
})