const mongoose = require("mongoose");
const upliftedartworkSchema = mongoose.Schema({
    material:{ 
        type: String, 
        enum: ['Oil', 'Watercolor','Acrylic'], 
        required: function() { 
            return this.material_name;
        }
    },
    style: String,
    price: {
        type: Number,
        required: true,
        min: [0],
        max: [100000]
    },
});
module.exports = mongoose.model("Upliftedartwork", upliftedartworkSchema);
