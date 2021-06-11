<template>
	<div class="categorylist">
		<h3>分类列表</h3>
		<el-table :data="tableData">
			<el-table-column prop="_id" label="ID" width="220">
			</el-table-column>
			<el-table-column prop="adminname" label="账号名称">
			</el-table-column>
			<el-table-column
			fixed="right"
			label="操作"
			width="200">
			<template slot-scope="scope">
				<el-button @click="handleClick(scope.row._id)" type="primary" size="small">编辑</el-button>
				<el-button @click="delClick(scope.row)" type="primary" size="small">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
</div>
</template>

<script type="text/javascript">
	export default{
		name:'',
		data(){
			return{
				tableData:[],
			}
		},
		methods:{
			async adminListFeach(){
				const res = await this.$http.get('/adminuser');
				this.tableData = res.data;
			},
			handleClick(id){
				this.$router.push(`/adminuser/edit/${id}`);
			},
			delClick(row){
				this.$confirm(`此操作将永久删除"${row.name}", 是否继续?`, '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(async() => {
					const res = await this.$http.delete(`/adminuser/${row._id}`)
						this.$message({
							type: 'success',
							message: res.data.message
						});
						this.adminListFeach();
				})
			}
		},
		created(){
			this.adminListFeach();
		}
	}
</script>

<style scoped>
	.categorylist{
		width: 70%;
	}
</style>