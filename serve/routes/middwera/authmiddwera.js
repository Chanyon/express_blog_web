
module.exports = ()=>{
	const Admin = require('../../model/Admin.js')
	const JWT = require('jsonwebtoken');
	const SECRET= 'jalksjdfljwijerJAJWIa_af';
	return async (req,res,next)=>{
	//获取资源作token验证
	try {
		let token = String(req.headers.authorization || '').split(' ').pop();
		if (!token) {
			return res.status(401).send({
				message:'请先登录'
			})
		}
		
		const { id } = JWT.verify(token,SECRET);
		if (!id) {
			return res.status(401).send({
				message:'请先登录'
			})
		}

		req.user = await Admin.findById(id);
		if (!req.user) {
			return res.status(401).send({
				message:'请先登录'
			})
		}
		await next();
	} catch(e) {
		console.log(e);
	}
 }
}
