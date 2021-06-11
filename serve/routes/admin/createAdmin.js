const express = require('express');
const router = express.Router();
const Admin = require('../../model/Admin.js')
const JWT = require('jsonwebtoken');
const authmiddwera = require('../middwera/authmiddwera')
router.post('/adminuser',async (req,res)=>{
	try {
		const catemodel = await Admin.create(req.body);
		res.send(catemodel);
	} catch(e) {
		console.log(e);
	}
})
router.get('/adminuser',authmiddwera(),async (req,res)=>{
	try {
		const catedata = await Admin.find();
		res.send(catedata);
	} catch(e) {
		console.log(e);
	}
})
router.get('/adminuser/username',authmiddwera(),async (req,res)=>{
	try {
		res.send({
			username:req.user.adminname,
		});
	} catch(e) {
		console.log(e);
	}
})
router.put('/adminuser/:id',async (req,res)=>{
	try {
		const catedata = await Admin.findByIdAndUpdate(req.params.id,req.body);
		res.send(catedata);
	} catch(e) {
		console.log(e);
	}
})
router.delete('/adminuser/:id',async (req,res)=>{
	try {
		const catedata = await Admin.findByIdAndDelete(req.params.id);
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
router.get('/adminuser/:id',async (req,res)=>{
	try {
		const catedata = await Admin.findById(req.params.id);
		res.send(catedata);
	} catch(e) {
		console.log(e);
	}
})
module.exports = router;