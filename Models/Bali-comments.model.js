const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const comment = new Schema({
    name: String,
    email: String,
    year: String,
    month: String,
    day: String,
    comment: String,
    replies: [],
    hour: String,
    minute: String,
})

const BaliCommentSchema = mongoose.model("BaliComment", comment)
module.exports = BaliCommentSchema;