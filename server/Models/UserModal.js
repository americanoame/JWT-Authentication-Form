const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minlength: 5,
    },
});

module.exports = mongoose.model("Users", userSchema);