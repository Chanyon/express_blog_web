const express = require('express');
const router = express.Router();
const Background = require('../../model/Background.js')

router.get('/backimages/list',async(req,res)=>{
	try {
		const backData = await Background.find().lean();
		res.send({
			message:'查询成功',
			backData
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