<template>
	<div class="footer">
		<div class="footer-list">
			<div class="footer-top">
				<a href="https://gitee.com/dchengyun" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 24 24"><g id="surface3680"><path fill="currentcolor" d="M10.898438 2.101562c-4.597657.5-8.296876 4.199219-8.796876 8.699219-.5 4.699219 2.199219 8.898438 6.296876 10.5C8.699219 21.398438 9 21.199219 9 20.800781V19.199219S8.601562 19.300781 8.101562 19.300781c-1.402343.0-2-1.199219-2.101562-1.902343C5.898438 17 5.699219 16.699219 5.398438 16.398438 5.101562 16.300781 5 16.300781 5 16.199219 5 16 5.300781 16 5.398438 16 6 16 6.5 16.699219 6.699219 17c.5.800781000000001 1.101562 1 1.402343 1C8.5 18 8.800781 17.898438 9 17.800781 9.101562 17.101562 9.398438 16.398438 10 16c-2.300781-.5-4-1.800781-4-4 0-1.101562.5-2.199219 1.199219-3C7.101562 8.800781 7 8.300781 7 7.601562c0-.402343.0-1 .300781-1.601562.0.0 1.398438.0 2.800781 1.300781C10.601562 7.101562 11.300781 7 12 7s1.398438.101562 2 .300781C15.300781 6 16.800781 6 16.800781 6 17 6.601562 17 7.199219 17 7.601562 17 8.398438 16.898438 8.800781 16.800781 9 17.5 9.800781 18 10.800781 18 12c0 2.199219-1.699219 3.5-4 4 .601562.5 1 1.398438 1 2.300781v2.597657C15 21.199219 15.300781 21.5 15.699219 21.398438 19.398438 19.898438 22 16.300781 22 12.101562c0-6-5.101562-10.703124-11.101562-10zm0 0"></path></g></svg>
				</a>
			</div>
			<div class="d-flex justify-center">
				<span>Github</span>
			</div>
			<div class="footer-bottom">
				Copyright ©2021, All Rights Reserved
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.footer{
		display: flex;
		justify-content: center;
		.footer-list{
			width: 100vw;
			height: 140px;
			background-color:#403e41;
			.footer-top{
				display: flex;
				justify-content: center;
				align-items:center;
				height: 50%;
				a{
					color: #eee;
					opacity: 0.5;
				}
				a:hover{
					opacity: 0.9;
				}
			}
			.footer-bottom{
				display: flex;
				justify-content: center;
				align-items:center;
				font-size: 12px;
				color: #959595;
			}
		}
	}
</style>
