const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LibraryManagementSystem",{

});

mongoose.connection.on("connected",()=>{
  console.log("connected to MongoDB");
})

mongoose.connection.on("error",(error)=>{
  console.error(`MongoDB connection error: ${error}`);
})

module.exports = mongoose;