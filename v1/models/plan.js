var mongoose = require("mongoose");

var planSchema = new mongoose.Schema({
    title: String,
    type: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        username: String
    },
    grade: String,
    subject: String,
    unit: String,
    parent: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        title: String
    },
    body: String
    // standards will go here
});

module.exports = mongoose.model("Plan", planSchema);