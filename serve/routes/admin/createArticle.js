const express = require('express');
const router = express.Router();
const Article = require('../../model/Article.js')
const Category = require('../../model/Category.js')
// const JWT = require('jsonwebtoken');
const authmiddwera = require('../middwera/authmiddwera')
router.post('/articles',async (req,res)=>{
	try {
		const catemodel = await Article.create(req.body);
		res.send(catemodel);
	} catch(e) {
		console.log(e);
	}
})

//分页
router.get('/articles',authmiddwera(),async (req,res)=>{
	try {
		let PageSize = req.query.PageSize || 5;
		let currentPage = req.query.currentPage || 1;
		let count = 0;
		const datacount = await Article.find();
		count = datacount.length; //总条数

		const queryOptions ={
			populate:'categories', 
		};
		const catedata = await Article.find().limit(Number(PageSize)).skip(Number((currentPage-1)*PageSize)).setOptions(queryOptions).populate('category');
		let allpages = Math.ceil(count/PageSize); //总页数
		res.send({
			message:'查询成功',
			info:{data:catedata,count:count,allpages:allpages}
		});
	} catch(e) {
		console.log(e);
		res.send({
			message:'查询失败'
		});
	}
})

router.put('/articles/:id',async (req,res)=>{
	try {
		const catedata = await Article.findByIdAndUpdate(req.params.id,req.body);
		res.send(catedata);
	} catch(e) {
		console.log(e);
	}
})
router.delete('/articles/:id',async (req,res)=>{
	try {
		const catedata = await Article.findByIdAndDelete(req.params.id);
		res.send({
			message:'删除成功'
		});
	} catch(e) {
		console.log(e);
		res.send({
			message:'删除失败'
		});
	}
})
router.get('/articles/:id',async (req,res)=>{
	try {
		const catedata = await Article.findById(req.params.id);
		res.send(catedata);
	} catch(e) {
		console.log(e);
	}
})
module.exports = router;