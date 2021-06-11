const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blogbest',{
	useNewUrlParser:true,
	useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('数据库连接成功！');
});