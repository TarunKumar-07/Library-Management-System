const mongoose = require("../configuration/dbConfig")

const userSchema = new mongoose.Schema({
    user: String,
    name: String,
    password: String,
    status: String,
    admin: String
})

const User = mongoose.model("User",userSchema);
module.exports=User;