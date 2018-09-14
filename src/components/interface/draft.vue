<template>
	<div class="create">
		<h3>草稿箱</h3>
		<el-table :data="tableData" class="mt10">
			<el-table-column type="index" label="序号"></el-table-column>
			<el-table-column prop="model" label="模块"></el-table-column>
			<el-table-column prop="interface" label="接口"></el-table-column>
			<el-table-column prop="instructions" label="说明"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="{row,$index}">
					<router-link to="/interface/edit"><el-button type="text">编辑</el-button></router-link>
					<el-button type="text" @click="deleData($index)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name:'people',
		data(){
			return{
				tableData:[{
					model:"Yuexiao Li",
					interface:"admin",
					instructions:"申请进入"
				}]
			}
		},
		methods:{
			collapse: function () {
		        this.collapsed = !this.collapsed;
		      },
		      handleSelect(index){
		        this.defaultActiveIndex = index;
		      },
		      deleData:function(index){
		      	this.tableData.splice(index,1);
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