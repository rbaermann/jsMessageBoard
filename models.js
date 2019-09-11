const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/messageBoarddb", { useNewUrlParser : true });

const CommentSchema = new mongoose.Schema({
    name : { type : String, required : [true, "I'm sure you have a name."], minlength : [2, "No way your name is only 1 character long."] },
    content : { type : String, required : [true, "Why create a blank comment?"], maxlength : [249, "Your message is too long, no one will read this. Make it less than 250 characters!"]},
},
{
    timestamps : true
});

const MessageSchema = new mongoose.Schema({
    name : { type : String, required : [true, "I'm sure you have a name."], minlength : [2, "No way your name is only 1 character long."] },
    content : { type : String, required : [true, "Why create a blank comment?"], maxlength : [249, "Your message is too long, no one will read this. Make it less than 250 characters!"]},
    comment : [CommentSchema],
},
{
    timestamps : true
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;