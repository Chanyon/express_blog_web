const mongoose = require('mongoose');

//分类模型
let CategorySchema = new mongoose.Schema({
	name:{type:String},
	parent:{ // 引用式关系
		type:mongoose.SchemaTypes.ObjectId,
		ref:'categories'
	}
});

let Category = mongoose.model('categories',CategorySchema);

module.exports = Category;
