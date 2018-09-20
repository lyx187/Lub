<template>
	<div class="create">
		<!-- <h3>LuB项目组  <router-link class="pull-right">创建</router-link><router-link class="pull-right">创建</router-link></h3> -->
		<el-select v-model="select" slot="prepend" placeholder="请选择">
			<el-option label="我加入的" value="1"></el-option>
			<el-option label="我创建的" value="2"></el-option>
			<el-option label="我管理的" value="3"></el-option>
		</el-select>
		<div class="card mt20">
			<el-col :span="5" class="">
			<el-card class="box-card">
		  <div slot="header" class="clearfix cardheader">
		    <span>组名1</span>
		    <el-dropdown trigger="click" class="pull-right">
					<span class="el-dropdown-link userinfo-inner cp">操作 <i class="fa fa-angle-down "></i></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<router-link to="/interface/look"><div>查看接口</div></router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<div @click="dialogVisible = true"><span>新增模块</span> </div>
						</el-dropdown-item>
						<el-dropdown-item>
							<div @click="dialogDele = true"><span>删除模块</span> </div>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="/interface/people"> <div><span>草稿箱</span> </div></router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="/interface/draft"> <div><span>回收站</span> </div></router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="/interface/recycle"> <div><span>回收站</span> </div></router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<div><span>退出小组</span> </div>
						</el-dropdown-item>
						<el-dropdown-item>
							<div><span>解散小组</span> </div>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
		  </div>
		  <div v-for="o in 4" :key="o" class="text item">
		    <span>组号：</span>{{' ' + o }}
		  </div>
		</el-card>
		</el-col>
		<el-col :span="5" :offset="1">
			<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span>组名2</span>
		    <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
		  </div>
		  <div v-for="o in 4" :key="o" class="text item">
		    <span>组号：</span>{{' ' + o }}
		  </div>
		</el-card>
		</el-col>
		<el-col :span="5" :offset="1">
			<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span>组名3</span>
		    <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
		  </div>
		  <div v-for="o in 4" :key="o" class="text item">
		    <span>组号：</span>{{' ' + o }}
		  </div>
		</el-card>
		</el-col>
		<el-col :span="5" :offset="1">
			<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span>组名3</span>
		    <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
		  </div>
		  <div v-for="o in 4" :key="o" class="text item">
		    <span>组号：</span>{{' ' + o }}
		  </div>
		</el-card>
		</el-col>
		</div>
		<!-- 新建模块弹出层 -->
		<el-dialog
		  title="新建模块"
		  :visible.sync="dialogVisible"
		  width="30%">
		  <span><el-input  placeholder="请输入模块名称"></el-input></span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>

		<!-- 删除模块弹出层 -->
		<el-dialog title="删除模块" :visible.sync="dialogDele" width="30%" close="beforeClose()">
		  <el-checkbox-group v-model="checked" size="medium">
		    <el-checkbox class="w" style="margin-left: 0;padding: 0 0 5px;" v-for="(city,$index) in checkData" :label="city" :key="city" >{{city}}</el-checkbox>
		  </el-checkbox-group>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogDele = false">取 消</el-button>
		    <el-button type="primary" @click="dialogDele = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name:'create',
		data(){
			return{
				collapsed:false,
				defaultActiveIndex:'2',
				dialogVisible: false,
				select:"我加入的",
				dialogDele:false,
				checkData:["模块1","模块2","模块3"],
				checked:[]
				// str:{1}
			}
		},
		methods:{
			collapse: function () {
		        this.collapsed = !this.collapsed;
		      },
		      handleSelect(index){
		        this.defaultActiveIndex = index;
		      },
		      beforeClose:function(){
		      	alert("删除成功")
		      	// console.log(this.checked);
		      }
		}
	}
</script>

<style scoped lang='scss'>
	.box-card .el-card__header{
		padding: 10px 20px;
	}
	.box-card .el-card__body{
		padding: 10px 20px;
	}
	.item{
		text-align:right;
		line-height:25px;

		span{
			float:left;
		}
	}
</style>