<template>
	<v-container>
		<div class="nav justify-center">
			<div class="nav-list d-flex d-sm-flex d-md-flex justify-space-around">
				<div class="nav-tex-sdow">
					COLOURLESS
				</div>
				<ul class="nav-item d-flex d-sm-flex d-md-flex align-center">
					<li>
						<div class="dropdown " transition="scroll-y-transition">
							<router-link tag="h4" to="/" class="dropbtn font-weight-light">首页</router-link >
							<div class="dropdown-content">
							</div>
						</div>
					</li>
					<li>
						<div class="dropdown ">
							<router-link tag="h4" to="/frontend/JavaScript" class="dropbtn font-weight-light">前端</router-link >
							<div class="dropdown-content">
								<span @click="hrefClick('JavaScript')">JavaScript</span>
								<span @click="hrefClick('vue')">vue</span>
								<router-link tag="span" to="/frontend/react">React</router-link>
							</div>
						</div>
					</li>
					<li>
						<div class="dropdown ">
							<router-link tag="h4" to="/backend/nodejs" class="dropbtn font-weight-light">后端</router-link >
							<div class="dropdown-content">
								<router-link tag="span" to="/backend/nodejs">nodejs</router-link>
								<router-link tag="span" to="/backend/express">express</router-link>
								<router-link tag="span" to="/backend/koa">koa</router-link>
								<router-link tag="span" to="/backend/nestjs">nestjs</router-link>
							</div>
						</div>
					</li>
					<li>
						<div class="dropdown ">
							<router-link tag="h4" to="/other/orther" class="dropbtn font-weight-light">其他</router-link >
							<div class="dropdown-content">
								<router-link tag="span" to="/other/orther">orther</router-link>
							</div>
						</div>
					</li>
					<li>
						<div class="dropdown">
							<router-link tag="h4" to="/about" class="dropbtn font-weight-light">About</router-link>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</v-container>
</template>

<script>
	export default {
		name: 'Navitem',
		methods:{
			hrefClick(routes){
				this.$router.push(`/frontend/${routes}`);
			}
		},
	}
</script>


<style scoped lang="less">

.nav{
		.nav-list{
			.nav-tex-sdow{
				// text-align: center;
				font-size:30px;
				line-height: 60px;
				color: #fcfcfa;
				text-shadow: 0 0 5px white,0 0 10px #00FFFF,0 0 15px #7FFF00,0 0 20px white
			}
			.nav-item{
				list-style:none;
				li{
					color: #fcfcfa;
					width: 90px;
					text-align: center;
					.dropdown{
						position:relative;
						display: inline-block;
						.dropbtn{
							padding:10px;
							border: none;
							cursor: pointer;
							font-size: 16px;
						}
						.dropdown-content{
							display: none;
							position: absolute;
							background-color:#f9f9f9;
							span{
								color: black;
								padding: 12px 16px;
								text-decoration: none;
								display: block;
							}
							span:hover{
								background-color:#f1f1f1;
								cursor: pointer;
							}
						}	
					}
					.dropdown:hover {
						.dropdown-content{
							display: block;
						}
						.dropbtn{
							background-color:#84888c;
						}
					}
				}
			}
		}
	}
</style>
