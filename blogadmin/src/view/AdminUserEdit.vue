<template>
	<div>
		<h3>{{id ? '编辑':'新建'}}管理员</h3>
		<p>{{id}}</p>
	<el-form ref="form" :model="form" label-width="80px" class="el-form" @submit.native.prevent>
		<el-form-item label="账号名称">
			<el-input v-model="form.adminname" style="width: 25%;"></el-input>
		</el-form-item>
		<el-form-item label="密码">
			<el-input v-model="form.password" style="width: 25%;"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">保存</el-button>
			<el-button @click="cancle">取消</el-button>
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
				form:{},
			}
		},
		methods:{
			async onSubmit(){
				try {
					if (this.id) {
						await this.$http.put(`/adminuser/${this.id}`,this.form);
						this.$router.push('/adminuser/list');
					}else{
						const res = await this.$http.post('/adminuser',this.form);
						console.log(res.data);
						this.$router.push('/adminuser/list');
					}
				} catch(e) {		
					console.log(e);
				}
			},
			cancle(){
				this.$router.push('/adminuser/list');
			},
			async getCategoryFeach(){
				const res = await this.$http.get(`/adminuser/${this.id}`);
				this.form = res.data;
			},
		},
		created(){
			this.id && this.getCategoryFeach();
		}
	}
</script>

<style>
	
</style>