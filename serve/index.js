const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
//连接数据库
const db = require('./model/db')

//导入路由
const categoryRouter = require('./routes/admin/createCategory')
const articleRouter = require('./routes/admin/createArticle')
const imageRouter = require('./routes/admin/upload')
const adminRouter = require('./routes/admin/createAdmin')
const backgroundRouter = require('./routes/admin/createBakcimage')
const loginRouter = require('./routes/admin/login')

//web router
const artiwebRouter = require('./routes/web/articlelist');
const detawebRouter = require('./routes/web/details');
const backimageawebRouter = require('./routes/web/backlist');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



//使用路由
app.use('/admin/api',categoryRouter);
app.use('/admin/api',articleRouter);
app.use('/admin/api',adminRouter);
app.use('/admin/api',backgroundRouter);
app.use('/admin/api',loginRouter);

//使用web路由
app.use('/web/api',artiwebRouter);
app.use('/web/api',detawebRouter);
app.use('/web/api',backimageawebRouter);

// 上传图片
app.use('/admin/api',imageRouter);
//管理静态资源接口
app.use('/myuploads/images',express.static(path.join(__dirname+'/myuploads/images')));

app.use('/admin',express.static(path.join(__dirname+'/admin')));
app.use('/',express.static(path.join(__dirname+'/web')));

app.listen(3000,(err)=>{
	if (err) {
		console.log(err);
	}else{
		console.log(`3000 is ok`);
	}
})