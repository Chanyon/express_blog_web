const express = require('express');
const router = express.Router();
const Category = require('../../model/Category.js')
const JWT = require('jsonwebtoken');
const authmiddwera = require('../middwera/authmiddwera.js')

router.post('/categories',async (req,res)=>{
	try {
		const catemodel = await Category.create(req.body);
		res.send(catemodel);
	} catch(e) {
		console.log(e);
	}
})
router.get('/categories',authmiddwera(),async (req,res)=>{
	try {
		const queryOptions ={
			populate:'categories', 
		};
		const catedata = await Category.find().setOptions(queryOptions).populate('parent');
		res.send(catedata);
	} catch(e) {
		console.log(e);
	}
})
router.put('/categories/:id',async (req,res)=>{
	try {
		const catedata = await Category.findByIdAndUpdate(req.params.id,req.body);
		res.send(catedata);
	} catch(e) {
		console.log(e);
	}
})
router.delete('/categories/:id',async (req,res)=>{
	try {
		const catedata = await Category.findByIdAndDelete(req.params.id);
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
router.get('/categories/:id',async (req,res)=>{
	try {
		const catedata = await Category.findById(req.params.id);
		res.send(catedata);
	} catch(e) {
		console.log(e);
	}
})
module.exports = router;