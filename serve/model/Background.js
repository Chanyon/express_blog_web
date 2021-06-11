const mongoose = require('mongoose');

//back模型
let BackSchema = new mongoose.Schema({
	backname:{type:String},
	imageurl:{type:String}
})

let Background = mongoose.model('backgrounds',BackSchema);

module.exports = Background;