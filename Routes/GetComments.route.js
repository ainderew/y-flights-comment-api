const express = require("express");
const router = express.Router();
const PhuketCommentSchema = require("../Models/Phuket-comments.model");
const ArticleCommentSchema = require("../Models/Article-1-comments.model");
const BangkokCommentSchema = require("../Models/Bangkok-comments.model");
const ThailandCommentSchema = require("../Models/Thailand-comments.model");
const BaliCommentSchema = require("../Models/Bali-comments.model");

const PhuketReplySchema = require("../Models/PhuketReply.model")
const ThailandReplySchema = require("../Models/Thailand-reply.model")
const Article1ReplySchema = require("../Models/Article-1-Reply.model")
const BangkokReplySchema = require("../Models/Bangkok-reply.model")
const BaliReplySchema = require("../Models/Bali-reply.model")

router.get("/PhuketComments", async (req,res) =>{
    console.log("PhuketComments hit")
    const comments = await PhuketCommentSchema.find()
    res.json(comments)
})

router.get("/Article1Comments", async (req,res) =>{
    const comments = await ArticleCommentSchema.find()
    res.json(comments)
})

router.get("/BangkokComments", async (req,res) =>{
    const comments = await BangkokCommentSchema.find()
    res.json(comments)
})

router.get("/ThailandComments", async (req,res) =>{
    const comments = await ThailandCommentSchema.find()
    res.json(comments)
})

router.get("/BaliComments", async (req,res) =>{
    const comments = await BaliCommentSchema.find()
    res.json(comments)
})



//GET REPLIES
router.post("/PhuketReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await PhuketReplySchema.findOne({_id: replyId})
    res.json(comment)
})

router.post("/ThailandReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await ThailandReplySchema.findOne({_id: replyId})
    res.json(comment)
})

router.post("/Article1Replies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await Article1ReplySchema.findOne({_id: replyId})
    res.json(comment)
})

router.post("/BangkokReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await BangkokReplySchema.findOne({_id: replyId})
    res.json(comment)
})

router.post("/BaliReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await BaliReplySchema.findOne({_id: replyId})
    res.json(comment)
})





module.exports = router;