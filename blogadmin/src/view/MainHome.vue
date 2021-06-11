<template>
	<div class="home">
		<el-container style="height: 500px; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<el-menu :default-openeds="['1', '3']" router>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-menu"></i>内容管理</template>
						<el-menu-item-group>
							<template slot="title">分类</template>
							<el-menu-item index="/categories/edit">新建分类</el-menu-item>
							<el-menu-item index="/categories/list">分类列表</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group>
							<template slot="title">文章</template>
							<el-menu-item index="/articles/edit">新建文章</el-menu-item>
							<el-menu-item index="/articles/list">文章列表</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>系统管理</template>
						<el-menu-item-group>
							<template slot="title">管理员</template>
							<el-menu-item index="/adminuser/edit">新增管理员</el-menu-item>
							<el-menu-item index="/adminuser/list">管理员列表</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group>
							<template slot="title">背景管理</template>
							<el-menu-item index="/background/edit">新增背景</el-menu-item>
							<el-menu-item index="/background/list">背景列表</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>

			<el-container>
				<el-header style="text-align: right; font-size: 12px">
					<el-dropdown>
						<i class="el-icon-setting" style="margin-right: 15px"></i>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>
								<span @click="checkout">退出系统</span>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<span>{{username}}</span>
				</el-header>

				<el-main> 
					<router-view :key="$route.path"></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'',
		data() {
			return {
				username:'',
			}
		},
		methods:{
			checkout(){
				console.log(1)
				if (localStorage.token) {
					localStorage.token = '';
					this.$router.push('/login');
				}
			},
			async getUsername(){
				const res = await this.$http.get('/adminuser/username');
				this.username = res.data.username;
			}
		},
		created(){
			this.getUsername();
		}

	}
</script>

<style scoped>
.el-header {
	background-color: #B3C0D1;
	color: #333;
	line-height: 60px;
}

.el-aside {
	color: #333;
	height: 100vh;
}
/*.el-main{
	height: 100vh;
}*/
</style>