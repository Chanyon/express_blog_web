const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//admin模型
let AdminSchema = new mongoose.Schema({
	adminname:{type:String},
	password:{
		type:String,
		select:false,
		set(val){
			return bcrypt.hashSync(val,10);
		}},
	});

let Admin = mongoose.model('adminusers',AdminSchema);

module.exports = Admin;
