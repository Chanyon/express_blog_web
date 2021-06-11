<template>
	<div class="article-edit">
		<h3>{{id ? '编辑':'新建'}}文章</h3>
		<p>{{id}}</p>
	<el-form ref="form" :model="form" label-width="80px" class="el-form" @submit.native.prevent>
		<el-form-item label="文章所属">
			<el-select v-model="form.category" placeholder="请选择">
				<el-option
					v-for="item in categories"
					:key="item._id"
					:label="item.name"
					:value="item._id">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="文章标题">
			<el-input v-model="form.articlename" style="width: 30%;"></el-input>
		</el-form-item>
		<el-form-item label="类别列表">
			<el-select v-model="form.articategory" clearable placeholder="请选择">
				<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="文章内容">
			<vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="form.description" class="vue-editor-w">
			</vue-editor>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">保存</el-button>
			<el-button @click="oncancel">取消</el-button>
		</el-form-item>
	</el-form>
	</div>
</template>

<script type="text/javascript">
	import { VueEditor } from 'vue2-editor'
	export default{
		name:'',
		components:{
			VueEditor,
		},
		props:{
			id:{
				type:String
			}
		},
		data(){
			return{
				form:{},
				categories:[],
				options: [{
					value: '原创',
					label: '原创'
				},{
					value: '转载',
					label: '转载'
				},{
					value: '笔记',
					label: '笔记'
				},{
					value: '杂谈',
					label: '杂谈'
				}],
			}
		},
		methods:{
			async onSubmit(){
				try {
					if (this.id) {
						await this.$http.put(`/articles/${this.id}`,this.form);
						this.$router.push('/articles/list');
					}else{
						await this.$http.post('/articles',this.form);
						this.$router.push('/articles/list');
					}
				} catch(e) {		
					console.log(e);
				}
			},
			oncancel(){
				this.$router.push('/articles/list');
			},
			async getArticleFeach(){
				const res = await this.$http.get(`/articles/${this.id}`);
				this.form = res.data;
			},
			async getParentsOp(){
				const res = await this.$http.get('/categories');
				this.categories = res.data;
			},
			async handleImageAdded(file,Editor,cursorLocation, resetUploader){
				const formData = new FormData();
				formData.append("file", file);
				const res = await this.$http.post('/upload',formData);
				Editor.insertEmbed(cursorLocation, "image", res.data.imageurl);
				resetUploader();
			},
		},
		created(){
			this.id && this.getArticleFeach();
			this.getParentsOp();
		}
	}
</script>

<style scoped>
	.article-edit .vue-editor-w{
		width: 70%;
	}
</style>