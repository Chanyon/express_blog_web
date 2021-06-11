<template>
	<div class="login-container">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>请先登录</span>
			</div>
			<div>
				<el-form ref="form" :model="form" label-width="80px" @submit.native.prevent>
					<el-form-item label="用户名">
						<el-input v-model="form.adminname" class="inputstyle"></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input type="password" v-model="form.password" class="inputstyle"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onLoginSubmit">登录</el-button>
					</el-form-item>
				</el-form>	
			</div>
		</el-card>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Login',
		data(){
			return{
				form:{
					adminname:'',
					password:''
				}
			}
		},
		methods: {
			async onLoginSubmit() {
				const res = await this.$http.post('/login',this.form);
				if(res.status === 422){
					this.$message({
						message: res.data.message,
						type: 'success'
					});
				}else{
					this.$message({
						message: '登录成功',
						type: 'success'
					});
					this.$router.push('/');
					localStorage.token = res.data.token;
				}
			}
		}
	}
</script>
<style type="text/css">
.login-container{
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 160px;
}
.box-card {
	width: 480px;
}
.inputstyle{
	width: 70%;
}
</style>