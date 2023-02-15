const { model, Schema } = require("mongoose");

module.exports = model("Infractionss", new Schema({
    Guild: String,
    User: String,
    Infractions: Array  
}));