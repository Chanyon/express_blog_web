<template>
	<div>
		<h3>{{id ? '编辑':'新建'}}分类</h3>
		<p>{{id}}</p>
	<el-form ref="form" :model="form" label-width="80px" class="el-form" @submit.native.prevent>
		<el-form-item label="父类名称">
			<el-select v-model="form.parent" placeholder="请选择">
				<el-option
					v-for="item in parents"
					:key="item._id"
					:label="item.name"
					:value="item._id">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="分类名称">
			<el-input v-model="form.name" style="width: 25%;"></el-input>
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
				form:{},
				parents:[],
			}
		},
		methods:{
			oncancel(){
				this.$router.push('/categoriese/edit');
			},
			async onSubmit(){
				try {
					if (this.id) {
						await this.$http.put(`/categories/${this.id}`,this.form);
						this.$router.push('/categories/list');
					}else{
						const res = await this.$http.post('/categories',this.form);
						console.log(res.data);
						this.$router.push('/categories/list');
					}
				} catch(e) {		
					console.log(e);
				}
			},
			async getCategoryFeach(){
				const res = await this.$http.get(`/categories/${this.id}`);
				this.form = res.data;
			},
			async getParentsOp(){
				const res = await this.$http.get('/categories');
				this.parents = res.data;
			}
		},
		created(){
			this.id && this.getCategoryFeach();
			this.getParentsOp();
		}
	}
</script>

<style>
	
</style>