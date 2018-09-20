<template>
	<el-row class="container">
		<!-- 头部 -->
		<el-col :span="24" class="topbar-wrap">
			<div class="topbar-logos" v-show="!collapsed">
				<span>Hander</span>
			</div>
			<div class="topbar-logo topbar-btn">
				<a href="">Lub</a>
			</div>
			
			<div class="topbar-title">
				<span>接口管理系统</span>
			</div>
			<div class="topbar-account topbar-btn">
				<el-dropdown trigger="click">
					<span class="el-dropdown-link userinfo-inner"><i class="fa fa-user-md mr5" aria-hidden="true"></i>root <i class="fa fa-angle-down ml10"></i></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<div><span>个人信息</span> </div>
						</el-dropdown-item>
						<el-dropdown-item divided>
							<div><span>退出登录</span> </div>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</el-col>

		<!-- 中间 -->
		<el-col :span="24" class="main">
			
			<!-- left -->
			<aside :class="{showSidebar:!collapsed}">
				<div class="menu-toggle" @click.prevent="collapse">
					<i class="fa fa-angle-double-left" aria-hidden="true" v-show="collapsed"></i>
					<i class="fa fa-angle-double-right" aria-hidden="true" v-show="!collapsed"></i>
				</div>
				<el-menu :default-active="defaultActiveIndex" router :collapse="collapsed" @select="handleSelect" text-color="#fff">
					<!-- 循环一级目录  根据menuShow判断是否显示 -->
					<template v-for="(item,index) in $router.options.routes" v-if="item.menuShow">
						<!-- 判断是否显示改目录 -->
						<el-submenu v-if="item.leaf" :index="index+''">
							<!-- 一级目录 -->
							<template slot="title">
								<div @click="jumpTo(item.path)"><i :class="item.iconCls"></i><span slot="title" >{{item.name}}</span></div>
							</template>
							<!-- 循环二级 -->
							<el-menu-item  v-for="term in item.children" :key="term.path" :index="term.path" v-show="term.menuShow"
							:class="$route.path==term.path?'is-active':''">
							<i :class="term.iconCls"></i><span slot="title">{{term.name}}</span>
						</el-menu-item>
					</el-submenu>
					<!-- <el-menu-item v-else-if="item.leaf&&item.children&&item.children.length" :index="item.children[0].path"
					:class="$route.path==item.children[0].path?'is-active':''">
					<i :class="item.iconCls"></i><span slot="title">{{item.children[0].name}}</span>
				</el-menu-item> -->
			</template>
		</el-menu>
	</aside>
	
	<!-- right -->
	<section class="content-container">
		<div class="grid-content bg-purple-light">
			<el-col :span='24' class="content-wrapper">
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</el-col>
		</div>
	</section>


</el-col>
</el-row>
</template>

<script>
	export default {
		name:'home',
		data(){
			return{
				collapsed:false,
				defaultActiveIndex:'2'
			}
		},
		methods:{
			collapse: function () {
				this.collapsed = !this.collapsed;
			},
			handleSelect(index){
				this.defaultActiveIndex = index;
			},
			jumpTo(url){
				this.defaultActiveIndex = url;
				this.$router.push(url);
			}
		}
	}
</script>

<style scoped lang='scss'>
	.container{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
	}
	.topbar-wrap{
		height: 50px;
		line-height: 50px;
		background-color: #373d41;
		padding: 0;
		
		.topbar-btn a{
			color: #fff;
		}
		.topbar-logo{
			float: left;
			width:59px;
			line-height:50px;
			text-align:center;
			font-size:20px;
		}
		.topbar-logos{
			float:left;
			width:120px;
			line-height:50px;
			color: #fff;
			text-align:center;
			font-size:20px;
		}
		// title
		.topbar-title{
			float:left;
			text-align: left;
			width:200px;
			padding-left:10px;
			border-left:1px solid #000;
			color: #fff;
		}
		.topbar-account{
			float:right;
		}
		.userinfo-inner{
			cursor: pointer;
			color: #fff;
			padding:20px;
		}
	}
	.main{
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		position: absolute;
		top: 50px;
		bottom: 0;
		overflow: hidden;
	}
	aside{
		min-width: 50px;
		background-color: #333744;
		&::-webkit-scrollbar{
			display:none;
		}
		&.showSidebar{
			overflow-x: hidden;
			overflow-y: auto;
		}
		.menu-toggle{
			color: #fff;
			height:30px;
			line-height:30px;
		}
		.el-menu{
			height:100%;
			height:-moz-calc(100% -80px);
			height: calc(100% - 80px);
			border-radius: 0;
			background-color: #333744;
			border-right: 0;
		}
		.fa{
			margin-right:10px;
		}
		.el-menu--collapse{
			width: 60px;
		}
		.el-menu {
			width: 180px;
		}
		.el-menu--collapse {
			width: 60px;
		}
		.el-menu-item{
			background-color: #333744;
		}
		.el-submenu:hover{
			color: #00C1DE;
		}
		.el-submenu__title:hover{
			background:none;
			color: #00C1DE;
		}
		.el-menu-item.is-active{
			// background-color: #333744;
			color: #409EFF;
		}
		// .el-submenu.is-active{
		// 	background-color: #00C1DE;
		// }
		
	}
	.menu-toggle {
		background: #4A5064;
		text-align: center;
		color: white;
		height: 26px;
		line-height: 30px;
	}

	.content-container {
		background: #fff;
		flex: 1;
		overflow-y: auto;
		padding: 10px;
		padding-bottom: 1px;

		.content-wrapper {
			background-color: #fff;
			box-sizing: border-box;
			padding: 0 10px;
		}
	}
</style>