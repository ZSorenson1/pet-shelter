const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const PetSchema = new mongoose.Schema({
    name: { type: String,
    min: [3, "must be at least 3 characters"],
    required: true,
    unique: true },
    type: { type: String,
    min: [3, "must be at least 3 characters"],
    required: true },
    desc: { type: String, 
    min: [3, "must be at least 3 characters"],
    required: true },
    skill1:{ type: String },
    skill2:{ type: String },
    skill3:{ type: String }
 }, { timestamps: true });
PetSchema.plugin(uniqueValidator)
module.exports.Pet = mongoose.model('Pet', PetSchema);