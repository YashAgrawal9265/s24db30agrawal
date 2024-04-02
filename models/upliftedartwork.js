const mongoose = require("mongoose");
const upliftedartworkSchema = mongoose.Schema({
    material: String,
    style: String,
    price: Number
});
module.exports = mongoose.model("Upliftedartwork", upliftedartworkSchema);
