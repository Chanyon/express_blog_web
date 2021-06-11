const express = require('express');
const router = express.Router();
const Article = require('../../model/Article.js')
const Category = require('../../model/Category.js')

router.get('/articles/details/:id',async(req,res)=>{
	try {
		const detailsData = await Article.findById(req.params.id).populate('category').lean();

		//相关的、同类型的查询
			detailsData.related = await Article.find().where({
				category:{$in:detailsData.category}
			}).limit(3)

		res.send({
			message:'查询成功',
			detailsData
		})
	} catch(e) {
		console.log(e);
		if (e) {
			res.send({
				message:'查询失败',
			})
		}
	}
})

module.exports = router