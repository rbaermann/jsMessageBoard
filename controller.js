const Message = require("./models");

module.exports = {
    Index : (req, res) => {
        Message.find().sort({ createdAt : -1 })
            .then((data) => {
                return res.render("Index", { messages : data })
            })
            .catch((err) => {
                return res.json(err);
            })
    },
    Mes : (req, res) => {
        const newMessage = new Message();
        newMessage.name = req.body.name;
        newMessage.content = req.body.content;
        newMessage.save()
            .then(() => {
                return res.redirect("/");
            })
            .catch((err) => {
                return res.json(err);
            })
    },
    Com : (req, res) => {
        Message.updateOne({ _id : req.params.messageId }, {
            $push: { comment : req.body }
        })
            .then(() => {
                return res.redirect("/");
            })
            .catch((err) => {
                return res.json(err);
            })
    }
}