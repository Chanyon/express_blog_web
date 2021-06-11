<template>
	<div>
		<h3>{{id ? '编辑':'新增'}}背景图片</h3>
		<p>{{id}}</p>
		<el-form ref="form" :model="form" label-width="80px" class="el-form" @submit.native.prevent>
			<el-form-item label="图片名称">
				<el-input v-model="form.backname" style="width: 25%;"></el-input>
			</el-form-item>
			<el-form-item label="图片上传" style="margin-top: 5px;">
				<el-upload
				class="avatar-uploader"
				:action="$http.defaults.baseURL+'/upload'"
				:show-file-list="false"
				:on-success="res => $set(form.imageurl = res.imageurl)">
				<img v-if="form.imageurl" :src="form.imageurl" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">保存</el-button>
			<el-button @click="oncancel">取消</el-button>
		</el-form-item>
	</el-form>
</div>
</template>

<script type="text/javascript">
	export default{
		name:'',
		props:{
			id:{
				type:String
			}
		},
		data(){
			return{
				form:{
					backname:'',
					imageurl:''
				},
			}
		},
		methods:{
			oncancel(){
				this.$router.push('/background/edit');
			},
			async onSubmit(){
				try {
					if (this.id) {
						const res = await this.$http.put(`/background/${this.id}`,this.form);
						this.$message({
							message: res.data.message,
							type: 'success'
						});
						this.$router.push('/background/list');
					}else{
						const res = await this.$http.post('/background',this.form);
						this.$message({
							message: res.data.message,
							type: 'success'
						});
						console.log(res.data);
						this.$router.push('/background/list');
					}
				} catch(e) {		
					console.log(e);
				}
			},
			async getImageFeach(){
				const res = await this.$http.get(`/background/${this.id}`);
				this.form = res.data;
			},
		},
		created(){
			this.id && this.getImageFeach();
		}
	}
</script>

<style>
.avatar-uploader .el-upload {
	border: 1px dashed #d9d9d9;
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
}
.avatar-uploader .el-upload:hover {
	border-color: #409EFF;
}
.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 240px;
	height: 130px;
	line-height: 240px;
	text-align: center;
}
.avatar {
	width: 240px;
	height: 130px;
	display: block;
}
</style>