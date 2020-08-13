const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const PhuketCommentSchema = require("../Models/Phuket-comments.model");
const ArticleCommentSchema = require("../Models/Article-1-comments.model");
const BangkokCommentSchema = require("../Models/Bangkok-comments.model");
const ThailandCommentSchema = require("../Models/Thailand-comments.model");
//REPLY SCHEMA
const ReplySchema = require("../Models/reply.model");


// PHUKET POST COMMENT ROUTE
router.post("/PhuketPostComment", (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, PhuketCommentSchema)

  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

router.post("/PhuketPostReply", (req,res) => {
  const {name, email, comment, commentId} = req.body;
  const generatedId = mongoose.Types.ObjectId();
  const status = replyHandler(name, email, comment, commentId, ReplySchema, generatedId, PhuketCommentSchema)
  // console.log(req.body)
  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
})


// THAILAND POST COMMENT ROUTE
router.post("/PhuketPostComment", (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, ThailandCommentSchema)

  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

// ARTICLE-1 POST COMMENT ROUTE
router.post("/PhuketPostComment", (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, ArticleCommentSchema)

  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

// BANGKOK POST COMMENT ROUTE
router.post("/PhuketPostComment", (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, BangkokCommentSchema)

  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});








// FUNCTIONS = = = = = = = = = = = = = = = = = 
const commentHandler = (name, email, comment, schema) =>{
  try {
    const commentPost = new schema({
    name: name,
    email: email,
    year: getYear(),
    month: getMonth(),
    day: getDay(),
    comment: comment,
    hour: getHour(),
    minute: getMinute(),
    });

    commentPost.save();
    return true

  } catch (err) {
      return err
  }
}

const replyHandler = async (name, email, comment, commentId, schema, generatedId, originSchema) =>{
  console.log(generatedId);
  console.log(originSchema);
  try {
    const reply = new schema({
    _id: generatedId,
    name: name,
    email: email,
    year: getYear(),
    month: getMonth(),
    day: getDay(),
    comment: comment,
    hour: getHour(),
    minute: getMinute(),
    });

    reply.save();
    await originSchema.updateOne({_id: commentId}, {$push: {replies:generatedId}})
    return true

  } catch (err) {
      return err
  }
}

const getYear = () => {
  const initDate = new Date();
  return initDate.getFullYear();
};

const getMonth = () => {
  const initDate = new Date();
  const month = initDate.getMonth();

  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      break;
  }
};

const getDay = () => {
  const initDate = new Date();
  return initDate.getDate();
};
const getHour = () => {
  const initDate = new Date();
  return initDate.getHours();
};
const getMinute = () => {
  const initDate = new Date();
  const minute = initDate.getMinutes()
  if (minute === 0){
    minute = 00
  }
  
  return minute;
};


module.exports = router;