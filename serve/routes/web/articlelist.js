const express = require('express');
const router = express.Router();
const Article = require('../../model/Article.js')
const Category = require('../../model/Category.js')

router.get('/articles/list',async (req,res)=>{
	try {
		let PageSize = req.query.PageSize || 6;
		let currentPage = req.query.currentPage || 1;
		let count = 0;
		const datacount = await Article.find();
		count = datacount.length; //总条数
		let allpages = Math.ceil(count/PageSize);//总页数
		const artidata = await Article.find().limit(Number(PageSize)).skip(Number((currentPage-1)*PageSize)).populate('category');
		res.send({
			message:'查询成功',
			info:{artidata,count,allpages}
		})
	} catch(e) {
		console.log(e);
		if (e) {
			res.send({
				message:'查询失败'
			});
		}
	}
})
//统计文章用的
router.get('/articles/alldatas',async(req,res)=>{
	try {
		const alldatas = await Article.find().populate('category');  //返回所有
		res.send({
			message:'查询成功',
			info:{alldatas}
		})
	} catch(e) {
		console.log(e);
		if (e) {
			res.send({
				message:'查询失败'
			});
		}
	}
})

router.get('/articles/list/:id',async (req,res)=>{
	try {
		// console.log(req.params.id);
		let PageSize = req.query.PageSize || 6;
		let currentPage = req.query.currentPage || 1;
		let count = 0;
		if (req.params.id) {
			const category = await Category.findOne({
				name:String(req.params.id)
			})
			const datacount = await Article.find().where({category:{$in:category}});
			count = datacount.length; //总条数
			let allpages = Math.ceil(count/PageSize);//总页数

			const artidata = await Article.find().where({category:{$in:category}})
			.limit(Number(PageSize))
			.skip(Number((currentPage-1)*PageSize))
			.populate('category');
			
			res.send({
				message:'查询成功',
				info:{artidata,count,allpages}
			})
	}

} catch(e) {
	console.log(e);
	if (e) {
		res.send({
			message:'查询失败'
		});
	}
}
})

// router.get('/articles/javascript/:id',async (req,res)=>{
// 	try {
// 		let PageSize = req.query.PageSize || 6;
// 		let currentPage = req.query.currentPage || 1;
// 		let count = 0;
// 		if(String(req.params.id) === 'frontend'){
// 			console.log(1)
// 			const category = await Category.findOne({
// 				name:'JavaScript'
// 			})
// 			const datacount = await Article.find().where({category:{$in:category}});
// 			count = datacount.length; //总条数
// 			let allpages = Math.ceil(count/PageSize);//总页数
// 			const artidata = await Article.find().where({category:{$in:category}})
// 			.limit(Number(PageSize))
// 			.skip(Number((currentPage-1)*PageSize))
// 			.populate('category');
// 			res.send({
// 				message:'查询成功',
// 				info:{artidata,count,allpages}
// 			})
// 		}

// 	} catch(e) {
// 		console.log(e);
// 		if (e) {
// 			res.send({
// 				message:'查询失败'
// 			});
// 		}
// 	}
// })
module.exports = router;