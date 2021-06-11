const mongoose = require('mongoose');

//文章模型
let ArticleSchema = new mongoose.Schema({
	articlename:{type:String},
	//文章分类
	category:[{
		type:mongoose.SchemaTypes.ObjectId,
		ref:'categories'
	}],
	articategory:{type:String},
	description:{type:String},
},
{timestamps:true}
);

let Article = mongoose.model('articles',ArticleSchema);

module.exports = Article;
