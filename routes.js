const controller = require("./controller");

module.exports = (app) => {
    app.get("/", controller.Index);
    app.post("/", controller.Mes);
    app.post("/:messageId", controller.Com);
}