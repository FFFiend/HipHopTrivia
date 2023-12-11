// wont use sequelize 

const { default: mongoose } = require("mongoose")

mongoose_instance = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017")

const user_model = mongoose.Schema({
    username: String,
    name: String,
    password: String,
    email: String,
    age: String,
})

module.exports = mongoose.model("User", user_model)