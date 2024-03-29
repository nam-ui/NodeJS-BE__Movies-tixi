const mongoose = require('mongoose')
const Schema = mongoose.Schema


const movieSchema = new Schema({

    
    moviesName: { type: String, require: true, unique: true },
    aliases: { type: String, },
    trailer: { type: String , },
    picture: { type: String, },
    described: { type: String, },
    groupCode: { type: String, },
    launchDate: { type: Date },
    rating: { type: Number, default: 10 },
    createdAt: { type: Date, default: Date.now() },




})
movieSchema.index({moviesName : 'text' , aliases:'text'});
module.exports = mongoose.model('movie', movieSchema)