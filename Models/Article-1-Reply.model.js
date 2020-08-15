const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reply = new Schema({
    name: String,
    repliedToName: String,
    email: String,
    year: String,
    month: String,
    day: String,
    comment: String,
    replies: [Array],
    hour: String,
    minute: String,
    replyIndex: Number,
    
})

const Article1ReplySchema = mongoose.model("Article1Reply",reply);
module.exports = Article1ReplySchema