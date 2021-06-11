const express = require('express');
const router = express.Router();
const multer = require('multer');

//uploads,图片保存路劲
let storage =multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './myuploads/images')
	},
	filename: function (req, file, cb) {
		let ext = file.originalname.split('.')[1];
		let tempname = +Date.now()+Math.floor(Math.random()*10);
		cb(null, `${tempname}.${ext}`);
	}
})
const uploadImage = multer({
	dest:__dirname+'/../../uploads/images',
	storage:storage
})
const httpURL = 'http://localhost:3000/myuploads/images/';
router.post('/upload',uploadImage.single('file'),async (req,res)=>{
	const imageFile = req.file;
	// let {size,mimetype} = req.file;
	// let type = ['jpg','jpeg','png','gif','webp'];
	// let tmptype = mimetype.split('/')[1];
	// if (size > 200000) {
	// 	res.send({
	// 		message:'尺寸过大'
	// 	})
	// }else 
	// if (type.indexOf(tmptype.toLowerCase()) === -1) {
	// 	res.send({
	// 		message:'媒体类型错误'
	// 	})
	// }else{
		const imageName = imageFile.filename;
		const url = httpURL+`${imageName}`;
		res.send({imageurl:url})
	// }
	// let filegeshi = (imageFile.originalname).split('.')[1]
	
})

module.exports = router