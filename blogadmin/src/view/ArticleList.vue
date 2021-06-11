<template>
	<div class="categorylist">
		<h3>分类列表</h3>
		<el-table :data="tableData">
			<el-table-column prop="_id" label="ID" width="220">
			</el-table-column>
			<el-table-column prop="articlename" label="文章标题">
			</el-table-column>
			<el-table-column prop="articategory" label="文章类型">
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
	<div>
		<el-pagination
		background
		:page-sizes="pageSizes"
		:current-page="currentPage"
		@current-change="handleCurrentChange"
		@size-change="handleSizeChange"
		layout="total, sizes, prev, pager, next, jumper"
		:total="totalCount">
	</el-pagination>
</div>
</div>
</template>

<script type="text/javascript">
	export default{
		name:'',
		data(){
			return{
				tableData:[],
				//当前页
				currentPage:1,
				//总条数
				totalCount:1,
				//每页显示个数选择器的选项设置
				pageSizes:[5,10,15,20],
				// 默认每页显示的条数
				PageSize:5,
			}
		},
		methods:{
			async articleListFeach(pagesize,currentpage){
				const res = await this.$http.get(`/articles/?PageSize=${pagesize}&currentPage=${currentpage}`);
				this.tableData = res.data.info.data;
				this.totalCount = res.data.info.count;
			},
			handleClick(id){
				this.$router.push(`/articles/edit/${id}`);
			},
			delClick(row){
				this.$confirm(`此操作将永久删除"${row.name}", 是否继续?`, '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(async() => {
					const res = await this.$http.delete(`/articles/${row._id}`)
						this.$message({
							type: 'success',
							message: res.data.message
						});
						this.articleListFeach(this.PageSize,this.currentPage);
				})
			},
			handleSizeChange(val){
				this.PageSize = val;
				this.articleListFeach(val,1)
				this.currentPage = 1;
			},
			handleCurrentChange(val){
				this.currentPage=val;
				this.articleListFeach(this.PageSize,val)
			}
		},
		created(){
			this.articleListFeach(this.PageSize,this.currentPage);
		}
	}
</script>

<style scoped>
	.categorylist{
		width: 70%;
	}
</style>