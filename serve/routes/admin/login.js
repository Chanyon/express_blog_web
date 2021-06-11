const express = require('express');
const router = express.Router();
const Admin = require('../../model/Admin')
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

router.post('/login',async (req,res)=>{
	const {adminname,password} = req.body;
	const user = await Admin.findOne({
		adminname:adminname
	}).select('+password');
	if (!user) {
			return res.status(422).send({
			message:'用户不存在'
		});
	}
	const isValid = bcrypt.compareSync(password,user.password);
	if (!isValid) {
		return res.status(422).send({
			message:'密码错误'
		});
	}

	const SECRET = 'jalksjdfljwijerJAJWIa_af';
	const token = JWT.sign({id:user._id},SECRET);
	res.send({token});
})

module.exports = router