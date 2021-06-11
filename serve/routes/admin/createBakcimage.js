const express = require('express');
const router = express.Router();
const Background = require('../../model/Background.js')
const JWT = require('jsonwebtoken');
const authmiddwera = require('../middwera/authmiddwera')
router.post('/background',async (req,res)=>{
	try {
		const catemodel = await Background.create(req.body);
		res.send({catemodel,message:'保存成功'});
	} catch(e) {
		console.log(e);
	}
})
router.get('/background',authmiddwera(),async (req,res)=>{
	try {
		const catedata = await Background.find();
		res.send(catedata);
	} catch(e) {
		console.log(e);
	}
})

router.put('/background/:id',async (req,res)=>{
	try {
		const catedata = await Background.findByIdAndUpdate(req.params.id,req.body);
		res.send({catedata, message:'修改成功'});
	} catch(e) {
		console.log(e);
	}
})
router.delete('/background/:id',async (req,res)=>{
	try {
		const catedata = await Background.findByIdAndDelete(req.params.id);
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
router.get('/background/:id',async (req,res)=>{
	try {
		const catedata = await Background.findById(req.params.id);
		res.send(catedata);
	} catch(e) {
		console.log(e);
	}
})
module.exports = router;